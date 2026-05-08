import { Suspense, useRef, useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, ContactShadows } from "@react-three/drei";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import * as THREE from "three";

const CAMERA_PRESETS: { label: string; position: [number, number, number]; target?: [number, number, number] }[] = [
  { label: "Front", position: [0, 0.1, 0.5] },
  { label: "Back", position: [0, 0.1, -0.5] },
  { label: "Left", position: [-0.5, 0.1, 0] },
  { label: "Right", position: [0.5, 0.1, 0] },
  { label: "Hero", position: [0.35, 0.2, 0.35] },
  { label: "Top", position: [0, 0.55, 0.01] },
];

const MODEL_CENTER: [number, number, number] = [0, 0.1, 0];

function CoffeePouchModel() {
  const { scene } = useGLTF("/models/coffee-pouch.glb");

  return (
    <primitive
      object={scene}
      position={[0, 0, 0]}
      rotation={[0, 0, 0]}
    />
  );
}

function LoadingFallback() {
  return (
    <mesh position={[0, 0.1, 0]}>
      <boxGeometry args={[0.15, 0.2, 0.08]} />
      <meshStandardMaterial color="#E87A2A" wireframe />
    </mesh>
  );
}

export function CoffeePouchView() {
  const controlsRef = useRef<OrbitControlsImpl>(null);

  const animateToPreset = useCallback((preset: typeof CAMERA_PRESETS[number]) => {
    const controls = controlsRef.current;
    if (!controls) return;

    const camera = controls.object as THREE.PerspectiveCamera;
    const startPos = camera.position.clone();
    const endPos = new THREE.Vector3(...preset.position);
    const target = new THREE.Vector3(...(preset.target ?? MODEL_CENTER));
    const startTarget = controls.target.clone();

    const duration = 600;
    const startTime = performance.now();

    function animate() {
      const elapsed = performance.now() - startTime;
      const t = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - t, 3);

      camera.position.lerpVectors(startPos, endPos, ease);
      controls!.target.lerpVectors(startTarget, target, ease);
      controls!.update();

      if (t < 1) {
        requestAnimationFrame(animate);
      }
    }

    animate();
  }, []);

  return (
    <div className="h-screen w-full pt-12 sm:pt-14 lg:pt-16 relative">
      <Canvas
        camera={{
          position: [0.35, 0.2, 0.35],
          fov: 40,
          near: 0.01,
          far: 100,
        }}
        gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 0.8 }}
        className="touch-none"
      >
        <color attach="background" args={["#0a0a0a"]} />

        <ambientLight intensity={0.4} />
        <directionalLight position={[2, 3, 1]} intensity={0.6} />
        <directionalLight position={[-1, 2, -1]} intensity={0.3} />

        <Suspense fallback={<LoadingFallback />}>
          <CoffeePouchModel />
          <ContactShadows
            position={[0, -0.002, 0]}
            opacity={0.4}
            scale={0.6}
            blur={2}
            far={0.5}
          />
          <Environment preset="studio" environmentIntensity={0.3} />
        </Suspense>

        <OrbitControls
          ref={controlsRef}
          target={MODEL_CENTER}
          enablePan={false}
          enableDamping
          dampingFactor={0.08}
          minDistance={0.15}
          maxDistance={1.2}
          maxPolarAngle={Math.PI * 0.85}
        />
      </Canvas>

      {/* Camera preset buttons */}
      <div className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 flex flex-col gap-2">
        {CAMERA_PRESETS.map((preset) => (
          <button
            key={preset.label}
            onClick={() => animateToPreset(preset)}
            className="px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg text-xs sm:text-sm font-medium bg-white/10 text-white/70 hover:bg-[#E87A2A] hover:text-white backdrop-blur-sm border border-white/10 hover:border-[#E87A2A] transition-all duration-200"
          >
            {preset.label}
          </button>
        ))}
      </div>

      {/* Interaction hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/30 text-xs sm:text-sm pointer-events-none select-none">
        Drag to orbit &middot; Scroll to zoom
      </div>
    </div>
  );
}

useGLTF.preload("/models/coffee-pouch.glb");
