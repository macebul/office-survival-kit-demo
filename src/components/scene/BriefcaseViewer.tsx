import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import { Vector3, PerspectiveCamera } from "three";
import { useCallback, useEffect, useRef } from "react";
import { KitModel } from "./KitModel";
import type { ExplorerState } from "@/App";
import { CAMERA_PRESETS } from "@/data/cameraPresets";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";

const LERP_ALPHA = 0.06;
const MODEL_SCALE = 0.12;

function CameraSystem({ explorer }: { explorer: ExplorerState }) {
  const { camera } = useThree();
  const controlsRef = useRef<OrbitControlsImpl>(null);
  const targetPos = useRef(new Vector3(2.2, 1.5, -1.7));
  const targetLookAt = useRef(new Vector3(0, 0, 0));
  const isTransitioning = useRef(false);

  // When activeCamera changes, compute the target position
  useEffect(() => {
    const preset = explorer.activeCamera
      ? CAMERA_PRESETS[explorer.activeCamera]
      : null;

    if (preset) {
      const s = MODEL_SCALE;
      targetPos.current.set(
        preset.position[0] * s,
        preset.position[1] * s,
        preset.position[2] * s,
      );
      targetLookAt.current.set(
        preset.lookAt[0] * s,
        preset.lookAt[1] * s,
        preset.lookAt[2] * s,
      );

      // For ortho views, push camera farther back to approximate framing
      if (
        preset.isOrtho &&
        preset.orthoScale &&
        camera instanceof PerspectiveCamera
      ) {
        const direction = new Vector3()
          .subVectors(targetPos.current, targetLookAt.current)
          .normalize();
        const distance =
          (preset.orthoScale * s) /
          (2 * Math.tan((camera.fov / 2) * (Math.PI / 180)));
        targetPos.current
          .copy(targetLookAt.current)
          .addScaledVector(direction, distance);
      }

      // Apply custom up vector for pole cameras (fixes gimbal lock)
      if (preset.up) {
        camera.up.set(preset.up[0], preset.up[1], preset.up[2]);
      } else {
        camera.up.set(0, 1, 0);
      }

      isTransitioning.current = true;
    } else {
      // Returning to free orbit — reset to default position orbiting model center
      camera.up.set(0, 1, 0);
      targetPos.current.set(3.5, 2.5, -3.0);
      targetLookAt.current.set(0, 0.2, 0);
      if (controlsRef.current) {
        controlsRef.current.target.set(0, 0.3, 0);
        controlsRef.current.update();
      }
      isTransitioning.current = true;
    }
  }, [explorer.activeCamera, camera]);

  // Stop transition when user starts interacting (zoom, rotate, pan)
  const handleControlStart = useCallback(() => {
    isTransitioning.current = false;
  }, []);

  useFrame(() => {
    if (!isTransitioning.current || !controlsRef.current) return;

    // Lerp camera position
    camera.position.lerp(targetPos.current, LERP_ALPHA);

    // Lerp OrbitControls target (the point the camera orbits around / looks at)
    controlsRef.current.target.lerp(targetLookAt.current, LERP_ALPHA);
    controlsRef.current.update();

    // Stop when close enough
    if (camera.position.distanceTo(targetPos.current) < 0.01) {
      camera.position.copy(targetPos.current);
      controlsRef.current.target.copy(targetLookAt.current);
      controlsRef.current.update();
      isTransitioning.current = false;
    }
  });

  return (
    <OrbitControls
      ref={controlsRef}
      enablePan={true}
      enableZoom={true}
      enableRotate={true}
      minDistance={0.5}
      maxDistance={10}
      minPolarAngle={0}
      maxPolarAngle={Math.PI}
      autoRotate={false}
      zoomSpeed={0.8}
      panSpeed={0.8}
      rotateSpeed={0.8}
      enableDamping={true}
      dampingFactor={0.1}
      onStart={handleControlStart}
    />
  );
}

function FovUpdater({ fov }: { fov: number }) {
  const { camera } = useThree();
  useEffect(() => {
    if (camera instanceof PerspectiveCamera) {
      camera.fov = fov;
      camera.updateProjectionMatrix();
    }
  }, [camera, fov]);
  return null;
}

interface BriefcaseViewerProps {
  explorer: ExplorerState;
}

export function BriefcaseViewer({ explorer }: BriefcaseViewerProps) {
  const isSmall = useMediaQuery("(max-width: 639px)");
  const isPortrait = useMediaQuery("(orientation: portrait)");
  const fov = isSmall && isPortrait ? 65 : isSmall ? 55 : 40;

  return (
    <Canvas
      camera={{ position: [3.5, 2.5, -3.0], fov: 40 }}
      style={{ width: "100%", height: "100%" }}
    >
      <FovUpdater fov={fov} />
      <ambientLight intensity={0.4} />
      <directionalLight position={[3, 5, 4]} intensity={0.6} castShadow />
      <directionalLight position={[-4, 3, -2]} intensity={0.3} />

      <KitModel explorer={explorer} />
      <CameraSystem explorer={explorer} />

      <ContactShadows
        position={[0, -0.1, 0]}
        opacity={0.3}
        scale={12}
        blur={2.5}
      />

      <Environment preset="studio" environmentIntensity={0.3} />
    </Canvas>
  );
}
