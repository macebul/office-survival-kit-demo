import { Suspense, useRef, useCallback, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
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

/**
 * Animated orbit hint ring at the base of the model.
 * - Starts prominent (full opacity, active pulse)
 * - After first interaction: dims to a subtle ghost (low opacity, slower pulse)
 * - After 8s idle: gently brightens back up as a reminder
 * - Never fully disappears
 */
function OrbitHintRing({ interacting }: { interacting: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const currentOpacity = useRef(1);
  const hasEverInteracted = useRef(false);
  const idleTimer = useRef(0);

  const PROMINENT = 0.7;
  const SUBTLE = 0.18;
  const REMINDER = 0.4;
  const IDLE_THRESHOLD = 8;

  const shaderData = useMemo(() => ({
    uniforms: {
      uTime: { value: 0 },
      uOpacity: { value: PROMINENT },
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float uTime;
      uniform float uOpacity;
      varying vec2 vUv;

      void main() {
        float angle = atan(vUv.y - 0.5, vUv.x - 0.5);

        // 3 rotating arrow chevrons
        float segAngle = mod(angle + uTime * 0.8, 6.28318) / 2.09439;
        float arrow = smoothstep(0.0, 0.15, segAngle) * smoothstep(0.6, 0.45, segAngle);

        // Dashed ring base
        float dash = smoothstep(0.3, 0.35, fract(angle * 4.77 + uTime * 0.5));

        float alpha = max(dash * 0.3, arrow * 0.8);

        // Pulse intensity scales with opacity (subtle when dimmed)
        float pulseStrength = 0.15 + 0.15 * uOpacity;
        alpha *= (1.0 - pulseStrength) + pulseStrength * sin(uTime * 2.0);
        alpha *= uOpacity;

        vec3 color = vec3(0.91, 0.478, 0.165);
        gl_FragColor = vec4(color, alpha);
      }
    `,
  }), []);

  useFrame((_, delta) => {
    if (!groupRef.current || !materialRef.current) return;

    groupRef.current.rotation.z += delta * 0.3;
    materialRef.current.uniforms.uTime.value += delta;

    // Determine target opacity based on state
    let target: number;

    if (interacting) {
      hasEverInteracted.current = true;
      idleTimer.current = 0;
      target = SUBTLE;
    } else if (!hasEverInteracted.current) {
      target = PROMINENT;
    } else {
      idleTimer.current += delta;
      target = idleTimer.current > IDLE_THRESHOLD ? REMINDER : SUBTLE;
    }

    // Smooth lerp toward target
    const speed = interacting ? 4 : 1.5;
    currentOpacity.current += (target - currentOpacity.current) * delta * speed;
    materialRef.current.uniforms.uOpacity.value = currentOpacity.current;
  });

  return (
    <group ref={groupRef} position={[0, 0.001, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <mesh>
        <ringGeometry args={[0.11, 0.14, 64]} />
        <shaderMaterial
          ref={materialRef}
          transparent
          depthWrite={false}
          side={THREE.DoubleSide}
          {...shaderData}
        />
      </mesh>
    </group>
  );
}

export function CoffeePouchView() {
  const controlsRef = useRef<OrbitControlsImpl>(null);
  const [isInteracting, setIsInteracting] = useState(false);

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

        <OrbitHintRing interacting={isInteracting} />

        <OrbitControls
          ref={controlsRef}
          target={MODEL_CENTER}
          enablePan={false}
          enableDamping
          dampingFactor={0.08}
          minDistance={0.15}
          maxDistance={1.2}
          maxPolarAngle={Math.PI * 0.85}
          onStart={() => setIsInteracting(true)}
          onEnd={() => setIsInteracting(false)}
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
    </div>
  );
}

useGLTF.preload("/models/coffee-pouch.glb");
