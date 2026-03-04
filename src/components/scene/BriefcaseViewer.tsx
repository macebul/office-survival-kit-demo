import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import { Vector3, PerspectiveCamera } from "three";
import { useEffect, useRef } from "react";
import { KitModel } from "./KitModel";
import type { ViewMode } from "@/App";
import { useMediaQuery } from "@/hooks/useMediaQuery";

// Default exterior camera position (matches Canvas camera prop)
const EXTERIOR_CAM_POS = new Vector3(4, 3, 4);
const EXTERIOR_LOOK_AT = new Vector3(0, 0, 0);

// Interior camera: above and toward the handle side, looking down into the case
const INTERIOR_CAM_POS = new Vector3(0, 3.8, -0.6);
const INTERIOR_LOOK_AT = new Vector3(0, -0.1, 0.2);

function CameraRig({ viewMode }: { viewMode: ViewMode }) {
  const { camera } = useThree();
  const prevMode = useRef(viewMode);

  useFrame(() => {
    if (viewMode === "interior") {
      camera.position.lerp(INTERIOR_CAM_POS, 0.05);
      camera.lookAt(INTERIOR_LOOK_AT.x, INTERIOR_LOOK_AT.y, INTERIOR_LOOK_AT.z);
    } else if (prevMode.current === "interior") {
      // Transitioning back to exterior — lerp to default position
      camera.position.lerp(EXTERIOR_CAM_POS, 0.05);
      camera.lookAt(EXTERIOR_LOOK_AT.x, EXTERIOR_LOOK_AT.y, EXTERIOR_LOOK_AT.z);

      // Stop lerping once close enough
      if (camera.position.distanceTo(EXTERIOR_CAM_POS) < 0.05) {
        camera.position.copy(EXTERIOR_CAM_POS);
        prevMode.current = "exterior";
      }
    }

    if (viewMode === "interior" && prevMode.current !== "interior") {
      prevMode.current = "interior";
    }
  });

  return null;
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
  viewMode: ViewMode;
  selectedTray: string | null;
}

export function BriefcaseViewer({ viewMode, selectedTray }: BriefcaseViewerProps) {
  const isSmall = useMediaQuery("(max-width: 639px)");
  const isPortrait = useMediaQuery("(orientation: portrait)");
  // Portrait phones need much wider FOV to see the full model
  const fov = isSmall && isPortrait ? 65 : isSmall ? 55 : 40;

  return (
    <Canvas
      camera={{ position: [4, 3, 4], fov: 40 }}
      style={{ width: "100%", height: "100%" }}
    >
      <FovUpdater fov={fov} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
      <directionalLight position={[-3, 3, -3]} intensity={0.3} />

      <KitModel viewMode={viewMode} selectedTray={selectedTray} />
      <CameraRig viewMode={viewMode} />

      <ContactShadows
        position={[0, -0.8, 0]}
        opacity={0.4}
        scale={8}
        blur={2}
      />

      <Environment preset="studio" />

      <OrbitControls
        enablePan={false}
        enabled={viewMode === "exterior"}
        minDistance={2.5}
        maxDistance={8}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI / 2.2}
        autoRotate={false}
      />
    </Canvas>
  );
}
