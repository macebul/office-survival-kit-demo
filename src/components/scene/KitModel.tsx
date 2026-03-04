import { useRef, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Group, Object3D, MathUtils, Vector3 } from "three";
import type { ViewMode } from "@/App";

// Tray order from front (top when flat) to back (bottom when flat)
// Tray1 is closest to the opening, Tray5 is deepest
const TRAY_ORDER = [
  "Tray1_Shank",
  "Tray2_Switch",
  "Tray3_Ink",
  "Tray4_Tags",
  "Tray5_Rags",
];

const FEATURE_TO_TRAY: Record<string, string> = {
  shank: "Tray1_Shank",
  switch: "Tray2_Switch",
  ink: "Tray3_Ink",
  tags: "Tray4_Tags",
  rags: "Tray5_Rags",
};

// Lid half-height in Three.js Y (was hz=2.5 in Blender Z)
const LID_HALF_HEIGHT = 2.5;

// Lid opens ~100° from the BOTTOM hinge (tab/hinge side = Y-)
// Positive X rotation swings the lid's top edge forward (+Z) and over
const LID_OPEN_ANGLE = MathUtils.degToRad(100);

// Tilt the whole case backward so the opening faces upward toward the camera
const CASE_TILT_ANGLE = MathUtils.degToRad(-80);

const LERP_SPEED = 4;

interface KitModelProps {
  viewMode: ViewMode;
  selectedTray: string | null;
}

export function KitModel({ viewMode, selectedTray }: KitModelProps) {
  const groupRef = useRef<Group>(null);
  const { scene } = useGLTF("/models/kit.glb");
  const lidAngleRef = useRef(0);
  const tiltRef = useRef(0);

  // Grab refs, reparent handle away from lid (runs once)
  const refs = useMemo(() => {
    const trays: Record<string, { obj: Object3D; origPos: Vector3 }> = {};
    let lid: Object3D | null = null;
    let lidOrigPos = new Vector3();
    let lidOrigRotX = 0;
    let hingeY = 0;

    for (const trayName of TRAY_ORDER) {
      const obj = scene.getObjectByName(trayName);
      if (obj) {
        trays[trayName] = { obj, origPos: obj.position.clone() };
      }
    }

    const lidObj = scene.getObjectByName("Lid");
    if (lidObj) {
      lid = lidObj;
      lidOrigPos = lidObj.position.clone();
      lidOrigRotX = lidObj.rotation.x;
      // Hinge is at the BOTTOM edge of the lid (Y- in Three.js = tab/hinge side)
      hingeY = lidOrigPos.y - LID_HALF_HEIGHT;

      // Move handle from lid to scene root so it stays on the case when lid opens
      scene.updateMatrixWorld(true);
      const handle = scene.getObjectByName("Handle");
      if (handle) {
        scene.attach(handle);
      }
    }

    return { trays, lid, lidOrigPos, lidOrigRotX, hingeY };
  }, [scene]);

  const isInterior = viewMode === "interior";

  useFrame((_state, delta) => {
    if (!groupRef.current) return;

    const t = 1 - Math.pow(0.001, delta * LERP_SPEED);

    // Tilt entire case backward when interior (opening faces up toward camera)
    const targetTilt = isInterior ? CASE_TILT_ANGLE : 0;
    tiltRef.current = MathUtils.lerp(tiltRef.current, targetTilt, t);
    groupRef.current.rotation.x = tiltRef.current;

    // No Y spin — camera moves to opposite side instead

    // Animate lid around BOTTOM hinge (Y- edge)
    if (refs.lid) {
      const targetAngle = isInterior ? LID_OPEN_ANGLE : 0;
      lidAngleRef.current = MathUtils.lerp(lidAngleRef.current, targetAngle, t);
      const angle = lidAngleRef.current;

      // Lid center is ABOVE the hinge by LID_HALF_HEIGHT
      // Rotation swings the top of the lid forward (+Z) and over
      const cosA = Math.cos(angle);
      const sinA = Math.sin(angle);
      refs.lid.position.set(
        refs.lidOrigPos.x,
        refs.hingeY + (LID_HALF_HEIGHT * cosA),
        refs.lidOrigPos.z + (LID_HALF_HEIGHT * sinA)
      );
      refs.lid.rotation.x = refs.lidOrigRotX + angle;
    }

    // Tray visibility: hide trays ABOVE the selected one, show the rest
    const activeTrayName =
      isInterior && selectedTray ? FEATURE_TO_TRAY[selectedTray] : null;
    const activeIndex = activeTrayName ? TRAY_ORDER.indexOf(activeTrayName) : -1;

    for (const [trayName, { obj, origPos }] of Object.entries(refs.trays)) {
      const trayIndex = TRAY_ORDER.indexOf(trayName);

      if (activeIndex >= 0 && trayIndex < activeIndex) {
        // This tray is above the selected one — hide it
        obj.visible = false;
      } else {
        // Selected tray or below — show it, ensure position is correct
        obj.visible = true;
        obj.position.x = MathUtils.lerp(obj.position.x, origPos.x, t);
        obj.position.y = MathUtils.lerp(obj.position.y, origPos.y, t);
        obj.position.z = MathUtils.lerp(obj.position.z, origPos.z, t);
      }
    }
  });

  const scale = 0.3;

  return (
    <group ref={groupRef} scale={[scale, scale, scale]}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload("/models/kit.glb");
