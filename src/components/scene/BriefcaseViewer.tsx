import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import { Vector3 } from "three";
import { KitModel } from "./KitModel";
import type { ViewMode } from "@/App";

// Interior camera: above and toward the handle side, looking down into the case
// More perspective angle — bottom of screen (handle) closer, top (tabs/lid) further
const INTERIOR_CAM_POS = new Vector3(0, 3.8, -0.6);
const INTERIOR_LOOK_AT = new Vector3(0, -0.1, 0.2);

function CameraRig({ viewMode }: { viewMode: ViewMode }) {
  const { camera } = useThree();

  useFrame(() => {
    if (viewMode === "interior") {
      camera.position.lerp(INTERIOR_CAM_POS, 0.05);
      camera.lookAt(INTERIOR_LOOK_AT.x, INTERIOR_LOOK_AT.y, INTERIOR_LOOK_AT.z);
    }
  });

  return null;
}

interface BriefcaseViewerProps {
  viewMode: ViewMode;
  selectedTray: string | null;
}

export function BriefcaseViewer({ viewMode, selectedTray }: BriefcaseViewerProps) {
  return (
    <Canvas
      camera={{ position: [4, 3, 4], fov: 40 }}
      style={{ width: "100%", height: "100%" }}
    >
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
