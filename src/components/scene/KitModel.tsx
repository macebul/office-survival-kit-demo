import { useRef, useMemo, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Group, Object3D, MathUtils } from "three";
import type { ExplorerState } from "@/App";
import {
  getVisibleObjects,
  ALL_EXPORTED_OBJECTS,
} from "@/data/visibilityRules";

const LERP_SPEED = 4;
const LID_OPEN_ANGLE = MathUtils.degToRad(110);
const AMZ_LID_OPEN_ANGLE = MathUtils.degToRad(-110);

interface KitModelProps {
  explorer: ExplorerState;
}

export function KitModel({ explorer }: KitModelProps) {
  const groupRef = useRef<Group>(null);
  const { scene } = useGLTF("/models/kit.glb");
  const lidAngleRef = useRef(0);
  const amzLidAngleRef = useRef(0);

  // Build a lookup of all named objects in the scene
  const objectMap = useMemo(() => {
    const map: Record<string, Object3D> = {};
    scene.traverse((obj) => {
      if (obj.name) {
        map[obj.name] = obj;
      }
    });
    return map;
  }, [scene]);

  // Find the hinge pivots
  const lidHinge = useMemo(
    () => objectMap["Lid_Hinge_Pivot"] ?? null,
    [objectMap],
  );
  const amzHinge = useMemo(
    () => objectMap["Amz_Lid_Hinge"] ?? null,
    [objectMap],
  );

  // Compute which objects should be visible
  const visibleSet = useMemo(
    () =>
      getVisibleObjects(explorer.activeCamera, {
        amazonVisible: explorer.amazonVisible,
        briefcaseLidOpen: explorer.briefcaseLidOpen,
        tray1Filled: explorer.tray1Filled,
        tray2Filled: explorer.tray2Filled,
      }),
    [
      explorer.activeCamera,
      explorer.amazonVisible,
      explorer.tray1Filled,
      explorer.tray2Filled,
      explorer.briefcaseLidOpen,
    ],
  );

  // Set initial visibility (non-animated)
  useEffect(() => {
    for (const name of ALL_EXPORTED_OBJECTS) {
      const obj = objectMap[name];
      if (obj) {
        obj.visible = visibleSet.has(name);
      }
    }
  }, [visibleSet, objectMap]);

  useFrame((_state, delta) => {
    const t = 1 - Math.pow(0.001, delta * LERP_SPEED);

    // Animate briefcase lid
    if (lidHinge) {
      const targetAngle = explorer.briefcaseLidOpen ? LID_OPEN_ANGLE : 0;
      lidAngleRef.current = MathUtils.lerp(lidAngleRef.current, targetAngle, t);
      lidHinge.rotation.x = lidAngleRef.current;
    }

    // Animate Amazon box lid
    if (amzHinge) {
      const targetAngle = explorer.amazonLidOpen ? AMZ_LID_OPEN_ANGLE : 0;
      amzLidAngleRef.current = MathUtils.lerp(
        amzLidAngleRef.current,
        targetAngle,
        t,
      );
      amzHinge.rotation.x = amzLidAngleRef.current;
    }
  });

  // Scale: model is 14" wide in Blender units. Scale to ~4 Three.js units wide.
  const scale = 0.12;

  return (
    <group ref={groupRef} scale={[scale, scale, scale]}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload("/models/kit.glb");
