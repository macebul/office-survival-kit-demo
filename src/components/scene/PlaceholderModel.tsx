import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import type { Group } from "three";

interface PlaceholderModelProps {
  selectedFeature: string | null;
}

export function PlaceholderModel({ selectedFeature }: PlaceholderModelProps) {
  const groupRef = useRef<Group>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  // Gentle idle rotation when no feature is selected
  useFrame((_state, delta) => {
    if (groupRef.current && !selectedFeature) {
      groupRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Briefcase body (bottom half) */}
      <mesh
        position={[0, -0.15, 0]}
        onPointerOver={() => setHovered("body")}
        onPointerOut={() => setHovered(null)}
      >
        <boxGeometry args={[2.4, 0.6, 1.4]} />
        <meshStandardMaterial
          color={hovered === "body" ? "#8B7355" : "#6B4E2E"}
          roughness={0.6}
          metalness={0.1}
        />
      </mesh>

      {/* Briefcase lid (top half) */}
      <mesh
        position={[0, 0.35, 0]}
        onPointerOver={() => setHovered("lid")}
        onPointerOut={() => setHovered(null)}
      >
        <boxGeometry args={[2.4, 0.4, 1.4]} />
        <meshStandardMaterial
          color={hovered === "lid" ? "#8B7355" : "#7B5E3E"}
          roughness={0.6}
          metalness={0.1}
        />
      </mesh>

      {/* Handle */}
      <mesh position={[0, 0.65, 0]}>
        <boxGeometry args={[0.6, 0.12, 0.12]} />
        <meshStandardMaterial
          color="#3a3a3a"
          roughness={0.3}
          metalness={0.8}
        />
      </mesh>

      {/* Latches */}
      {[-0.5, 0.5].map((x) => (
        <mesh key={x} position={[x, 0.15, 0.71]}>
          <boxGeometry args={[0.2, 0.08, 0.04]} />
          <meshStandardMaterial
            color="#C0A060"
            roughness={0.2}
            metalness={0.9}
          />
        </mesh>
      ))}

      {/* Tray 1 - visible when "trays" feature selected */}
      {selectedFeature === "trays" && (
        <mesh position={[0, 0.8, 0]}>
          <boxGeometry args={[2.0, 0.15, 1.1]} />
          <meshStandardMaterial
            color="#D4A574"
            roughness={0.7}
            metalness={0.05}
            transparent
            opacity={0.9}
          />
        </mesh>
      )}
    </group>
  );
}
