/**
 * Visibility rules ported from kit_views_panel.py.
 * Maps camera IDs to sets of object names that should be visible.
 */

// ── Object Groups ─────────────────────────────────────────

export const AMAZON_BOX_OBJECTS = [
  "Amazon_Box_Base",
  "Amazon_Box_Wall_Front",
  "Amazon_Box_Wall_Back",
  "Amazon_Box_Wall_Left",
  "Amazon_Box_Wall_Right",
  "Amz_Lid_Panel",
  "Amz_Tuck_Tab",
  "Amz_Lid_Hinge",
  "Amz_Top_Surface_Plane",
  "Amz_Bottom_Surface_Plane",
  "Amz_Interior_Lid_Plane",
  "Amz_Front_Surface_Plane",
  "Amz_Back_Surface_Plane",
  "Amz_Left_Surface_Plane",
  "Amz_Right_Surface_Plane",
];

export const BRIEFCASE_TEXTURE_PLANES = [
  "Brief_Front_Surface_Plane",
  "Brief_Back_Surface_Plane",
  "Brief_Top_Surface_Plane",
  "Brief_Bottom_Surface_Plane",
  "Brief_Left_Surface_Plane",
  "Brief_Right_Surface_Plane",
];

export const BRIEFCASE_WALL_TEXTURES = [
  "Brief_Front_Surface_Plane",
  "Brief_Back_Surface_Plane",
  "Brief_Bottom_Surface_Plane",
  "Brief_Left_Surface_Plane",
  "Brief_Right_Surface_Plane",
];

export const BRIEFCASE_STRUCTURE = [
  "Box_Base",
  "Box_Wall_Front",
  "Box_Wall_Back",
  "Box_Wall_Left",
  "Box_Wall_Right",
  "Case_Lid",
];

export const BRIEFCASE_EXTERIOR = [
  ...BRIEFCASE_STRUCTURE,
  ...BRIEFCASE_TEXTURE_PLANES,
];

export const INTERIOR_OBJECTS = ["Brief_Interior_Lid_Plane"];

// ── Interior Layer Groups ─────────────────────────────────

export const BOOKING_FRAME_PLANES = [
  "BookingFrame_Front_Plane",
  "BookingFrame_Back_Plane",
];
export const DOCSET1_PLANES = ["DocSet1_Front_Plane", "DocSet1_Back_Plane"];
export const ORANGE_COVER_PLANES = [
  "OrangeCover_Front_Plane",
  "OrangeCover_Back_Plane",
];
export const DOCSET2_PLANES = ["DocSet2_Front_Plane", "DocSet2_Back_Plane"];
export const DOCSET3_PLANES = ["DocSet3_Front_Plane", "DocSet3_Back_Plane"];
export const TRAY1_PLANES = ["Tray1_Filled_Plane", "Tray1_Empty_Plane"];
export const TRAY2_PLANES = ["Tray2_Filled_Plane", "Tray2_Empty_Plane"];

// Front-only planes for top-down interior views
const TOP_LAYER_FRONTS = [
  "BookingFrame_Front_Plane",
  "DocSet1_Front_Plane",
  "OrangeCover_Front_Plane",
];

const TOP_LAYER = [
  ...BOOKING_FRAME_PLANES,
  ...DOCSET1_PLANES,
  ...ORANGE_COVER_PLANES,
];

const TRAY1_LAYER = [...TRAY1_PLANES];
const TRAY2_LAYER = [...TRAY2_PLANES, "DocSet2_Front_Plane"];

const BACKZONE_COVER_SURFACES = [
  "BackZone_Top_Plane",
  "BackZone_FrontWall_Plane",
  "BackZone_BottomFlap_Plane",
  "DocSet3_Front_Plane",
];

const BACKZONE_COVER = [
  "BackZone_Top_Plane",
  "BackZone_FrontWall_Plane",
  "BackZone_BottomFlap_Plane",
  ...DOCSET3_PLANES,
];

const BACKZONE_PADDING = [
  "Shredded_Paper_Fill",
  "BackZone_Floor_Plane",
  "BackZone_BackWall_Plane",
];

const BACKZONE_CONTENTS = [
  "Item_Mug_Shot_Mug",
  "Mug_Handle",
  "BackZone_Floor_Plane",
  "BackZone_BackWall_Plane",
];

const BACKZONE_ALL = [
  ...BACKZONE_COVER,
  ...BACKZONE_PADDING,
  ...BACKZONE_CONTENTS,
];

export const ALL_INTERIOR_LAYERS = [
  ...TOP_LAYER,
  ...TRAY1_LAYER,
  ...TRAY2_LAYER,
  ...BACKZONE_ALL,
  "DocSet2_Back_Plane",
  "DocSet3_Back_Plane",
];

export const ALL_BRIEFCASE_INTERIOR = [
  ...ALL_INTERIOR_LAYERS,
  ...INTERIOR_OBJECTS,
  "Back_Wall_Interior_Print",
];

// ── Visibility Rules per Camera ───────────────────────────

/** For interior cameras: which objects should be visible */
const INTERIOR_VISIBILITY: Record<string, string[][]> = {
  CAM_Int_Top: [TOP_LAYER_FRONTS],
  CAM_Int_Tray1: [TRAY1_LAYER, BACKZONE_COVER_SURFACES],
  CAM_Int_Tray2: [TRAY2_LAYER, BACKZONE_COVER_SURFACES],
  CAM_Int_BackZone_Covered: [BACKZONE_ALL],
  CAM_Int_BackZone: [BACKZONE_PADDING, BACKZONE_CONTENTS],
  CAM_Int_BackZone_Contents: [BACKZONE_CONTENTS],
};

/** Detail view: which single item(s) to isolate */
const DETAIL_VISIBILITY: Record<string, string[]> = {
  CAM_Detail_Frame_Front: ["BookingFrame_Front_Plane"],
  CAM_Detail_Frame_Back: ["BookingFrame_Back_Plane"],
  CAM_Detail_DocSet1_Front: ["DocSet1_Front_Plane"],
  CAM_Detail_DocSet1_Back: ["DocSet1_Back_Plane"],
  CAM_Detail_DocSet2_Front: ["DocSet2_Front_Plane"],
  CAM_Detail_DocSet2_Back: ["DocSet2_Back_Plane"],
  CAM_Detail_DocSet3_Front: ["DocSet3_Front_Plane"],
  CAM_Detail_DocSet3_Back: ["DocSet3_Back_Plane"],
  CAM_Detail_OrangeCover_Front: ["OrangeCover_Front_Plane"],
  CAM_Detail_OrangeCover_Back: ["OrangeCover_Back_Plane"],
  CAM_Detail_Tray1_Front: [...TRAY1_PLANES],
  CAM_Detail_Tray2_Front: [...TRAY2_PLANES],
};

// ── All exportable object names (everything in the GLB) ───
export const ALL_EXPORTED_OBJECTS = [
  ...AMAZON_BOX_OBJECTS,
  ...BRIEFCASE_EXTERIOR,
  ...ALL_BRIEFCASE_INTERIOR,
];

// ── Main visibility resolver ──────────────────────────────

export interface VisibilityState {
  amazonVisible: boolean;
  briefcaseLidOpen: boolean;
  tray1Filled: boolean;
  tray2Filled: boolean;
}

/**
 * Given a camera ID and toggle states, returns a Set of object names
 * that should be visible.
 */
export function getVisibleObjects(
  cameraId: string | null,
  state: VisibilityState,
): Set<string> {
  const visible = new Set<string>();

  const isAmazon = cameraId?.startsWith("CAM_Amz_");
  const isInterior = cameraId?.startsWith("CAM_Int_");
  const isExterior =
    cameraId?.startsWith("CAM_Ext_") || cameraId === "Camera_Main";
  const isDetail = cameraId?.startsWith("CAM_Detail_");

  if (isDetail && cameraId) {
    // Detail views: show ONLY the target item, hide everything else
    const detailItems = DETAIL_VISIBILITY[cameraId];
    if (detailItems) {
      for (const name of detailItems) {
        // Handle tray filled/empty toggle
        if (name === "Tray1_Filled_Plane" && !state.tray1Filled) continue;
        if (name === "Tray1_Empty_Plane" && state.tray1Filled) continue;
        if (name === "Tray2_Filled_Plane" && !state.tray2Filled) continue;
        if (name === "Tray2_Empty_Plane" && state.tray2Filled) continue;
        visible.add(name);
      }
    }
    return visible;
  }

  if (isAmazon) {
    // Amazon views: show amazon box + briefcase exterior, hide interior
    for (const name of AMAZON_BOX_OBJECTS) visible.add(name);
    for (const name of BRIEFCASE_EXTERIOR) visible.add(name);
    return visible;
  }

  if (cameraId === null) {
    // Free orbit: show briefcase exterior, optionally amazon box
    for (const name of BRIEFCASE_EXTERIOR) visible.add(name);
    if (state.amazonVisible) {
      for (const name of AMAZON_BOX_OBJECTS) visible.add(name);
    }
    // When lid is open in free orbit, show interior contents
    if (state.briefcaseLidOpen) {
      for (const name of INTERIOR_OBJECTS) visible.add(name);
      visible.add("Back_Wall_Interior_Print");
      for (const name of TOP_LAYER_FRONTS) visible.add(name);
      // Tray 1
      visible.add(state.tray1Filled ? "Tray1_Filled_Plane" : "Tray1_Empty_Plane");
      // Tray 2
      visible.add(state.tray2Filled ? "Tray2_Filled_Plane" : "Tray2_Empty_Plane");
      visible.add("DocSet2_Front_Plane");
      // Back zone cover
      for (const name of BACKZONE_COVER_SURFACES) visible.add(name);
    }
    return visible;
  }

  if (isExterior) {
    // Exterior preset views: show briefcase exterior, optionally amazon box
    for (const name of BRIEFCASE_EXTERIOR) visible.add(name);
    if (state.amazonVisible) {
      for (const name of AMAZON_BOX_OBJECTS) visible.add(name);
    }
    return visible;
  }

  if (isInterior && cameraId) {
    // Interior views: show walls + wall textures + interior objects
    // Hide lid (looking down), hide amazon box, hide lid top texture
    for (const name of [
      "Box_Base",
      "Box_Wall_Front",
      "Box_Wall_Back",
      "Box_Wall_Left",
      "Box_Wall_Right",
    ]) {
      visible.add(name);
    }
    for (const name of BRIEFCASE_WALL_TEXTURES) visible.add(name);
    for (const name of INTERIOR_OBJECTS) visible.add(name);

    // Lid interior camera is special — show lid + top texture + top layer
    if (cameraId === "CAM_Int_Lid") {
      visible.add("Case_Lid");
      visible.add("Brief_Top_Surface_Plane");
      for (const name of TOP_LAYER_FRONTS) visible.add(name);
      return visible;
    }

    // Other interior cameras — use layer visibility rules
    const layers = INTERIOR_VISIBILITY[cameraId];
    if (layers) {
      for (const layer of layers) {
        for (const name of layer) {
          visible.add(name);
        }
      }
    } else {
      // Unknown interior camera — show everything
      for (const name of ALL_INTERIOR_LAYERS) visible.add(name);
    }

    // Handle tray filled/empty toggles
    if (visible.has("Tray1_Filled_Plane") || visible.has("Tray1_Empty_Plane")) {
      if (state.tray1Filled) {
        visible.add("Tray1_Filled_Plane");
        visible.delete("Tray1_Empty_Plane");
      } else {
        visible.delete("Tray1_Filled_Plane");
        visible.add("Tray1_Empty_Plane");
      }
    }
    if (visible.has("Tray2_Filled_Plane") || visible.has("Tray2_Empty_Plane")) {
      if (state.tray2Filled) {
        visible.add("Tray2_Filled_Plane");
        visible.delete("Tray2_Empty_Plane");
      } else {
        visible.delete("Tray2_Filled_Plane");
        visible.add("Tray2_Empty_Plane");
      }
    }

    return visible;
  }

  // Default: show everything
  for (const name of ALL_EXPORTED_OBJECTS) visible.add(name);
  return visible;
}
