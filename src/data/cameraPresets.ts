/**
 * Camera presets extracted from Blender Kit Views panel.
 * Positions are in Blender coordinates (Y-up after glTF export).
 *
 * Orthographic cameras use `orthoScale` for framing (no perspective).
 * Perspective cameras use `fov` (degrees).
 */

export interface CameraPreset {
  position: [number, number, number];
  lookAt: [number, number, number];
  fov: number;
  isOrtho: boolean;
  orthoScale: number | null;
  /** Custom up vector for cameras at poles (looking straight down/up Y axis).
   *  Converted from Blender: X=X, Y=Z_blender, Z=-Y_blender */
  up?: [number, number, number];
}

export interface CameraGroup {
  label: string;
  cameras: { id: string; label: string }[];
}

// Raw camera data from Blender (already Y-up from glTF export_yup=True)
export const CAMERA_PRESETS: Record<string, CameraPreset> = {
  // ── Amazon Box ──────────────────────────────────────────
  CAM_Amz_Hero: {
    position: [27.572, 22.168, 24.343],
    lookAt: [20.536, 17.636, 18.871],
    fov: 39.6,
    isOrtho: false,
    orthoScale: null,
  },
  CAM_Amz_Front: {
    position: [0, 3.25, -22],
    lookAt: [0, 3.25, -12],
    fov: 39.6,
    isOrtho: true,
    orthoScale: 18,
  },
  CAM_Amz_Back: {
    position: [0, 3.25, 22],
    lookAt: [0, 3.25, 12],
    fov: 39.6,
    isOrtho: true,
    orthoScale: 18,
  },
  CAM_Amz_Top: {
    position: [0, 24.5, 0],
    lookAt: [0, 14.5, 0],
    fov: 39.6,
    isOrtho: true,
    orthoScale: 18,
    up: [0, 0, 1],
  },
  CAM_Amz_Bottom: {
    position: [0, -19.5, 0],
    lookAt: [0, -9.5, 0],
    fov: 39.6,
    isOrtho: true,
    orthoScale: 18,
    up: [0, 0, -1],
  },
  CAM_Amz_Left: {
    position: [-22, 3.25, 0],
    lookAt: [-12, 3.25, 0],
    fov: 39.6,
    isOrtho: true,
    orthoScale: 18,
  },
  CAM_Amz_Right: {
    position: [22, 3.25, 0],
    lookAt: [12, 3.25, 0],
    fov: 39.6,
    isOrtho: true,
    orthoScale: 18,
  },

  // ── Briefcase Exterior ──────────────────────────────────
  Camera_Main: {
    position: [18.409, 12.614, -14.298],
    lookAt: [11.08, 8.105, -9.204],
    fov: 39.6,
    isOrtho: false,
    orthoScale: null,
  },
  CAM_Ext_Front: {
    position: [0, 2.5, -20],
    lookAt: [0, 2.5, -10],
    fov: 39.6,
    isOrtho: true,
    orthoScale: 16,
  },
  CAM_Ext_Back: {
    position: [0, 2.5, 20],
    lookAt: [0, 2.5, 10],
    fov: 39.6,
    isOrtho: true,
    orthoScale: 16,
  },
  CAM_Ext_Top: {
    position: [0, 20, 0],
    lookAt: [0, 10, 0],
    fov: 39.6,
    isOrtho: true,
    orthoScale: 16,
    up: [0, 0, -1],
  },
  CAM_Ext_Bottom: {
    position: [0, -20, 0],
    lookAt: [0, -10, 0],
    fov: 39.6,
    isOrtho: true,
    orthoScale: 16,
    up: [0, 0, 1],
  },
  CAM_Ext_Left: {
    position: [-20, 2.5, 0],
    lookAt: [-10, 2.5, 0],
    fov: 39.6,
    isOrtho: true,
    orthoScale: 16,
  },
  CAM_Ext_Right: {
    position: [20, 2.5, 0],
    lookAt: [10, 2.5, 0],
    fov: 39.6,
    isOrtho: true,
    orthoScale: 16,
  },

  // ── Briefcase Interior ──────────────────────────────────
  CAM_Int_Lid: {
    position: [-0.364, 14.326, -13.541],
    lookAt: [-0.364, 12.11, -3.789],
    fov: 39.6,
    isOrtho: false,
    orthoScale: null,
  },
  CAM_Int_Top: {
    position: [0, 18, 0],
    lookAt: [0, 8, 0],
    fov: 39.6,
    isOrtho: true,
    orthoScale: 16,
    up: [0, 0, 1], // Blender up [0,-1,0] → Three.js [0,0,1]
  },
  CAM_Int_Tray1: {
    position: [0, 18, 0],
    lookAt: [0, 8, 0],
    fov: 39.6,
    isOrtho: true,
    orthoScale: 16,
    up: [0, 0, 1],
  },
  CAM_Int_Tray2: {
    position: [0, 18, 0],
    lookAt: [0, 8, 0],
    fov: 39.6,
    isOrtho: true,
    orthoScale: 16,
    up: [0, 0, 1],
  },
  CAM_Int_BackZone_Covered: {
    position: [0.086, 26.183, -12.289],
    lookAt: [0.044, 18.175, -6.299],
    fov: 39.6,
    isOrtho: false,
    orthoScale: null,
  },
  CAM_Int_BackZone: {
    position: [0.086, 26.183, -12.289],
    lookAt: [0.044, 18.175, -6.299],
    fov: 39.6,
    isOrtho: false,
    orthoScale: null,
  },
  CAM_Int_BackZone_Contents: {
    position: [0.086, 26.183, -12.289],
    lookAt: [0.044, 18.175, -6.299],
    fov: 39.6,
    isOrtho: false,
    orthoScale: null,
  },

  // ── Detail Views ────────────────────────────────────────
  CAM_Detail_Frame_Front: {
    position: [0, 12.656, 0],
    lookAt: [0, 2.657, 0],
    fov: 39.6,
    isOrtho: true,
    orthoScale: 12,
    up: [1, 0, 0], // Blender up [1,0,0] → Three.js [1,0,0] — portrait, CCW 90°
  },
  CAM_Detail_Frame_Back: {
    position: [0, -3.343, 0],
    lookAt: [0, 6.656, 0],
    fov: 39.6,
    isOrtho: true,
    orthoScale: 12,
    up: [-1, 0, 0], // Blender up [-1,0,0] → Three.js [-1,0,0] — portrait, CW 90°
  },
  CAM_Detail_DocSet1_Front: {
    position: [0, 12.55, 0],
    lookAt: [0, 2.55, 0],
    fov: 39.6,
    isOrtho: true,
    orthoScale: 11,
    up: [0, 0, 1], // Blender up [0,-1,0] → 180° flip
  },
  CAM_Detail_DocSet1_Back: {
    position: [0, -3.45, 0],
    lookAt: [0, 6.55, 0],
    fov: 39.6,
    isOrtho: true,
    orthoScale: 11,
    up: [0, 0, 1], // Blender up [0,-1,0] → 180° flip
  },
  CAM_Detail_OrangeCover_Front: {
    position: [0, 12.443, 0],
    lookAt: [0, 2.443, 0],
    fov: 39.6,
    isOrtho: true,
    orthoScale: 14.5,
    up: [0, 0, 1], // Blender up [0,-1,0] → 180° flip
  },
  CAM_Detail_OrangeCover_Back: {
    position: [0, -3.556, 0],
    lookAt: [0, 6.444, 0],
    fov: 39.6,
    isOrtho: true,
    orthoScale: 14.5,
    up: [0, 0, 1], // Blender up [0,-1,0]
  },
  CAM_Detail_Tray1_Front: {
    position: [0, 12.413, 0],
    lookAt: [0, 2.413, 0],
    fov: 39.6,
    isOrtho: true,
    orthoScale: 14.5,
    up: [0, 0, 1], // 180° flip
  },
  CAM_Detail_Tray2_Front: {
    position: [0, 10.35, 0],
    lookAt: [0, 0.35, 0],
    fov: 39.6,
    isOrtho: true,
    orthoScale: 14.5,
    up: [0, 0, 1], // 180° flip
  },
  CAM_Detail_DocSet2_Front: {
    position: [0, 10.362, -2.25],
    lookAt: [0, 0.362, -2.25],
    fov: 39.6,
    isOrtho: true,
    orthoScale: 11,
    up: [1, 0, 0], // Blender up [1,0,0] — portrait, CCW 90°
  },
  CAM_Detail_DocSet2_Back: {
    position: [0, -5.643, -2.25],
    lookAt: [0, 4.357, -2.25],
    fov: 39.6,
    isOrtho: true,
    orthoScale: 11,
    up: [-1, 0, 0], // Blender up [-1,0,0] — portrait, CW 90°
  },
  CAM_Detail_DocSet3_Front: {
    position: [0, 8.26, -2.25],
    lookAt: [0, -1.74, -2.25],
    fov: 39.6,
    isOrtho: true,
    orthoScale: 11,
    up: [1, 0, 0], // Blender up [1,0,0] — portrait, CCW 90°
  },
  CAM_Detail_DocSet3_Back: {
    position: [0, -7.745, -2.25],
    lookAt: [0, 2.255, -2.25],
    fov: 39.6,
    isOrtho: true,
    orthoScale: 11,
    up: [-1, 0, 0], // Blender up [-1,0,0] — portrait, CW 90°
  },
};

// Camera groups for the UI panel (matches Blender Kit Views panel structure)
export const CAMERA_GROUPS: CameraGroup[] = [
  {
    label: "Amazon Box",
    cameras: [
      { id: "CAM_Amz_Hero", label: "Hero 3/4" },
      { id: "CAM_Amz_Front", label: "Front" },
      { id: "CAM_Amz_Back", label: "Back" },
      { id: "CAM_Amz_Top", label: "Top" },
      { id: "CAM_Amz_Bottom", label: "Bottom" },
      { id: "CAM_Amz_Left", label: "Left" },
      { id: "CAM_Amz_Right", label: "Right" },
    ],
  },
  {
    label: "Briefcase Exterior",
    cameras: [
      { id: "Camera_Main", label: "Hero 3/4" },
      { id: "CAM_Ext_Front", label: "Front (Handle)" },
      { id: "CAM_Ext_Back", label: "Back (Hinge)" },
      { id: "CAM_Ext_Top", label: "Top (Lid)" },
      { id: "CAM_Ext_Bottom", label: "Bottom" },
      { id: "CAM_Ext_Left", label: "Left" },
      { id: "CAM_Ext_Right", label: "Right" },
    ],
  },
  {
    label: "Briefcase Interior",
    cameras: [
      { id: "CAM_Int_Lid", label: "Lid Interior" },
      { id: "CAM_Int_Top", label: "Top Layer" },
      { id: "CAM_Int_Tray1", label: "Tray 1 — Boxed Items" },
      { id: "CAM_Int_Tray2", label: "Tray 2 — Card Decks" },
      { id: "CAM_Int_BackZone_Covered", label: "Back Zone — Covered" },
      { id: "CAM_Int_BackZone", label: "Back Zone — Open" },
      { id: "CAM_Int_BackZone_Contents", label: "Back Zone — Contents" },
    ],
  },
  {
    label: "Top Layer Details",
    cameras: [
      { id: "CAM_Detail_Frame_Front", label: "Booking Frame — Front" },
      { id: "CAM_Detail_Frame_Back", label: "Booking Frame — Back" },
      { id: "CAM_Detail_DocSet1_Front", label: "Doc Set 1 — Front" },
      { id: "CAM_Detail_DocSet1_Back", label: "Doc Set 1 — Back" },
      { id: "CAM_Detail_OrangeCover_Front", label: "Orange Divider — Front" },
      { id: "CAM_Detail_OrangeCover_Back", label: "Orange Divider — Back" },
    ],
  },
  {
    label: "Tray 1 Details",
    cameras: [{ id: "CAM_Detail_Tray1_Front", label: "Tray 1 — Top Down" }],
  },
  {
    label: "Tray 2 Details",
    cameras: [
      { id: "CAM_Detail_Tray2_Front", label: "Tray 2 — Top Down" },
      { id: "CAM_Detail_DocSet2_Front", label: "Doc Set 2 — Front" },
      { id: "CAM_Detail_DocSet2_Back", label: "Doc Set 2 — Back" },
    ],
  },
  {
    label: "Back Zone Details",
    cameras: [
      { id: "CAM_Detail_DocSet3_Front", label: "Doc Set 3 — Front" },
      { id: "CAM_Detail_DocSet3_Back", label: "Doc Set 3 — Back" },
    ],
  },
];
