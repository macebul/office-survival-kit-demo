"""
OFFICE SURVIVAL KIT — Blender 3D Model Generator (v2: Two-Zone Layout)
======================================================================
Paste and run in Blender > Scripting workspace.
Scale: 1 Blender Unit = 1 inch.

Axes:
  X = 14.0"  (length, left-right)
  Y = 11.5"  (width, front-back)
  Z = 5.0"   (depth, bottom-top when case lies flat)

Orientation (case lying flat, open, user looking down):
  +Y wall = FRONT FACE — faces user — handle, clasps
  -Y wall = BACK WALL  — farthest from user — lid hinge side
  +Z      = TOP (lid)
   Z = 0  = BOTTOM (base)

LAYOUT — Two-zone side-by-side interior:

  BACK ZONE (-Y side, ~4.25" deep):
    Hidden padded compartment with die-cut foam (dark charcoal/black).
    Contains Mug Shot mug (on side, handle to side),
    Corporate Parole Passport and Yard Pass flanking L/R.
    Topped by a lift-off compartment cover (both sides printable).

  DIVIDER WALL (~0.25" thick, full height):
    Separates front and back zones.

  FRONT ZONE (+Y side, ~6.5" deep):
    Stack (bottom to top):
      Tray 2 (7 items) → Booklet 2 → Tray 1 (4 items) →
      Booklet 1 → Booking Frame → [headroom] → Lid
    Trays use die-cut recesses (Pelican case style) with
    chalk-outline silhouettes, item name + tagline per recess.
    Booklets are coil-bound, ~13" × 6.5".

IMPORTANT — Handle & Clasps:
  Both on FRONT FACE (+Y). Handle centered on X, Z = 2.5".
  Clasps flank handle on same front face at same Z height.

IMPORTANT — Lid:
  SOLID. No holes. No cutouts. Both surfaces complete.
  Inside lid: Pocket 1 (check-in card), Pocket 2 (map).

IMPORTANT — Booking Frame:
  Separate removable rigid paperboard frame (~0.0625" thick, ~24pt).
  Outer ~11" × 9", opening ~7" × 5", ~2" border.
  Height rulers on BOTH vertical sides.
  Rests on Booklet 1. First object seen on open. Held by gravity.
  NOT a die-cut through the lid.

IMPORTANT — Closure:
  4 neodymium magnets along 14" front edge (hidden).
  Belly band (shipping, one-time use).
  Optional snap-fit lip.

Reveal sequence:
  Belly band off → Open lid → Booking frame → Booklet 1 →
  Tray 1 (4 items) → Booklet 2 → Tray 2 (7 items) →
  Compartment cover → Mug + Passport + Yard Pass → Base message
"""

import bpy
import math

# ── CLEAR SCENE ─────────────────────────────────────────────────────────────
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete()
for block in bpy.data.meshes:
    if block.users == 0:
        bpy.data.meshes.remove(block)
for mat in bpy.data.materials:
    bpy.data.materials.remove(mat)


# ── MATERIALS ───────────────────────────────────────────────────────────────
def make_mat(name, rgb, rough=0.88, metal=0.0):
    m = bpy.data.materials.new(name)
    m.use_nodes = True
    b = m.node_tree.nodes["Principled BSDF"]
    b.inputs[0].default_value = (*rgb, 1.0)
    b.inputs[1].default_value = metal
    b.inputs[2].default_value = rough
    return m

M_BLACK     = make_mat("Matte_Black",       (0.03, 0.03, 0.03), rough=0.95)
M_CHARCOAL  = make_mat("Charcoal_Interior", (0.07, 0.07, 0.09), rough=0.90)
M_ORANGE    = make_mat("Orange_Accent",     (0.91, 0.36, 0.02), rough=0.80)
M_METAL     = make_mat("Metal_Hardware",    (0.72, 0.72, 0.75), rough=0.20, metal=1.0)
M_CREAM     = make_mat("Cream_Label",       (0.95, 0.92, 0.82), rough=1.00)
M_LID_INT   = make_mat("Lid_Interior",      (0.10, 0.10, 0.13), rough=0.90)
M_ITEM      = make_mat("Item_Placeholder",  (0.22, 0.34, 0.50), rough=0.80)
M_BOOKLET   = make_mat("Booklet_Page",      (0.88, 0.86, 0.80), rough=1.00)
M_GRAY_TAPE = make_mat("Duct_Tape_Gray",    (0.52, 0.52, 0.52), rough=0.95)
M_RED_STAMP = make_mat("Rubber_Stamp_Red",  (0.58, 0.06, 0.06), rough=1.00)
M_FOAM      = make_mat("Die_Cut_Foam",      (0.05, 0.05, 0.06), rough=0.98)
M_COVER     = make_mat("Compartment_Cover", (0.12, 0.12, 0.15), rough=0.90)


# ── HELPERS ─────────────────────────────────────────────────────────────────
def box(name, loc, dims, mat=None):
    bpy.ops.mesh.primitive_cube_add(location=loc)
    o = bpy.context.active_object
    o.name = name
    o.scale = (dims[0] / 2, dims[1] / 2, dims[2] / 2)
    bpy.ops.object.transform_apply(scale=True)
    if mat:
        o.data.materials.clear()
        o.data.materials.append(mat)
    return o

def tray(name, l, w, wall_h, floor_t, origin, mat):
    """Open-top tray from 5 joined panels. origin = outer bottom-back corner.
       Represents die-cut recess tray (Pelican case style) —
       items sit in molded cutouts with chalk-outline silhouettes."""
    ox, oy, oz = origin
    cx, cy = ox + l / 2, oy + w / 2

    fl = box(f"{name}_fl", (cx, cy, oz + floor_t / 2),
             (l, w, floor_t), mat)
    wf = box(f"{name}_wf", (cx, oy + w - floor_t / 2, oz + floor_t + wall_h / 2),
             (l, floor_t, wall_h), mat)
    wb = box(f"{name}_wb", (cx, oy + floor_t / 2, oz + floor_t + wall_h / 2),
             (l, floor_t, wall_h), mat)
    wl = box(f"{name}_wl", (ox + floor_t / 2, cy, oz + floor_t + wall_h / 2),
             (floor_t, w, wall_h), mat)
    wr = box(f"{name}_wr", (ox + l - floor_t / 2, cy, oz + floor_t + wall_h / 2),
             (floor_t, w, wall_h), mat)

    bpy.ops.object.select_all(action='DESELECT')
    for o in [fl, wf, wb, wl, wr]:
        o.select_set(True)
    bpy.context.view_layer.objects.active = fl
    bpy.ops.object.join()
    bpy.context.active_object.name = name
    return bpy.context.active_object


# ── MASTER DIMENSIONS ───────────────────────────────────────────────────────
BOX_L = 14.0     # Length (left-right, X)   — WORKING ESTIMATE
BOX_W = 11.5     # Width (front-back, Y)    — WORKING ESTIMATE
BOX_D = 5.0      # Depth (bottom-top, Z)    — WORKING ESTIMATE
WT    = 0.25     # Wall thickness

INT_L = BOX_L - 2 * WT    # 13.5"
INT_W = BOX_W - 2 * WT    # 11.0"
INT_D = BOX_D - 2 * WT    # 4.5"

# ── ZONE SPLIT (Y axis, +Y = front face) ────────────────────────────────────
BACK_ZONE_D  = 4.25
DIVIDER_T    = 0.25
FRONT_ZONE_D = INT_W - BACK_ZONE_D - DIVIDER_T   # 6.5"

# Y coordinates (interior spans -INT_W/2 to +INT_W/2)
BACK_Y0  = -INT_W / 2                             # -5.50  back interior wall
BACK_Y1  = BACK_Y0 + BACK_ZONE_D                  # -1.25  back zone front edge
DIV_Y0   = BACK_Y1                                 # -1.25  divider back face
DIV_Y1   = DIV_Y0 + DIVIDER_T                     # -1.00  divider front face
FRONT_Y0 = DIV_Y1                                  # -1.00  front zone back edge
FRONT_Y1 = INT_W / 2                              # +5.50  front interior wall

# Tray dimensions (front zone only — Pelican case style)
TRAY_L  = INT_L            # 13.5"  (~13.5" exterior per Authority Block)
TRAY_W  = FRONT_ZONE_D     # 6.5"   (~6.5" exterior per Authority Block)
TRAY_FT = 0.125            # Floor thickness

TRAY_XC = 0.0
TRAY_YC = (FRONT_Y0 + FRONT_Y1) / 2              # 2.25

# Tray wall heights
T1_WH = 0.75               # Tray 1 wall height (4 items)
T2_WH = 0.875              # Tray 2 wall height (7 items)
T1_H  = TRAY_FT + T1_WH    # 0.875" total
T2_H  = TRAY_FT + T2_WH    # 1.000" total

# Booklet thicknesses (per Authority Block)
B1_T = 0.25                # Booklet 1 (intake, 4–6 pages)
B2_T = 0.30                # Booklet 2 (escalation, 6–8 pages)

# Booking frame thickness
FRAME_T = 0.0625           # ~24pt rigid paperboard


# ── FRONT ZONE STACK (bottom → top) ─────────────────────────────────────────
Z_BASE      = 0.0
Z_FLOOR     = WT                                   # 0.250"

Z_T2        = Z_FLOOR                              # 0.250"  Tray 2 bottom
Z_T2_TOP    = Z_T2 + T2_H                         # 1.250"
Z_B2        = Z_T2_TOP                             # 1.250"  Booklet 2 bottom
Z_B2_TOP    = Z_B2 + B2_T                         # 1.550"
Z_T1        = Z_B2_TOP                             # 1.550"  Tray 1 bottom
Z_T1_TOP    = Z_T1 + T1_H                         # 2.425"
Z_B1        = Z_T1_TOP                             # 2.425"  Booklet 1 bottom
Z_B1_TOP    = Z_B1 + B1_T                         # 2.675"
Z_FRAME     = Z_B1_TOP                             # 2.675"  Booking frame bottom
Z_FRAME_TOP = Z_FRAME + FRAME_T                   # 2.738"

# Lid
Z_LID_BOT = BOX_D - WT                            # 4.750"
Z_LID_MID = BOX_D - WT / 2                        # 4.875"


# ── BACK ZONE STACK ─────────────────────────────────────────────────────────
BACK_YC      = (BACK_Y0 + BACK_Y1) / 2            # -3.375
FOAM_PAD_T   = 0.25                                # Foam above and below mug
MUG_DIA      = 3.5                                 # Mug diameter (vertical when on side)
MUG_H        = 3.5                                 # Mug height (horizontal when on side)
MUG_HANDLE_W = 4.0                                 # Width with handle

Z_FOAM_BASE  = Z_FLOOR                             # 0.250"
Z_MUG_BOT    = Z_FOAM_BASE + FOAM_PAD_T           # 0.500"
Z_MUG_TOP    = Z_MUG_BOT + MUG_DIA                # 4.000"
Z_FOAM_TOP   = Z_MUG_TOP + FOAM_PAD_T             # 4.250"

# Compartment cover
COVER_L = 13.5              # ~INT_L
COVER_W = 4.0               # Spans most of back zone
COVER_T = 0.0625            # ~24pt rigid paperboard
Z_COVER = Z_FOAM_TOP                               # 4.250"


def tray_origin(z_bot):
    """Origin = outer bottom-back corner of tray in front zone."""
    return (TRAY_XC - TRAY_L / 2, FRONT_Y0, z_bot)


# ═════════════════════════════════════════════════════════════════════════════
# GEOMETRY
# ═════════════════════════════════════════════════════════════════════════════

# ── BOX BODY (5 panels, open top) ───────────────────────────────────────────
body_h = BOX_D - WT   # 4.75" interior wall height

box("Box_Base",       (0,  0,               WT / 2),            (BOX_L, BOX_W, WT),     M_BLACK)
box("Box_Wall_Front", (0,  BOX_W/2 - WT/2,  WT + body_h / 2),  (BOX_L, WT,    body_h), M_BLACK)
box("Box_Wall_Back",  (0, -BOX_W/2 + WT/2,  WT + body_h / 2),  (BOX_L, WT,    body_h), M_BLACK)
box("Box_Wall_Left",  (-BOX_L/2 + WT/2, 0,  WT + body_h / 2),  (WT,    BOX_W, body_h), M_BLACK)
box("Box_Wall_Right", ( BOX_L/2 - WT/2, 0,  WT + body_h / 2),  (WT,    BOX_W, body_h), M_BLACK)


# ── DIVIDER WALL (full height, separates front/back zones) ─────────────────
div_yc = (DIV_Y0 + DIV_Y1) / 2
box("Divider_Wall",
    (0, div_yc, WT + body_h / 2),
    (INT_L, DIVIDER_T, body_h), M_CHARCOAL)


# ── LID (SOLID — no holes, no cutouts) ─────────────────────────────────────
box("Case_Lid",
    (0, 0, Z_LID_MID),
    (BOX_L, BOX_W, WT), M_BLACK)

box("Lid_Interior_Face",
    (0, 0, Z_LID_BOT + 0.01),
    (BOX_L - 0.1, BOX_W - 0.1, 0.02), M_LID_INT)

# Inside lid pockets
box("Lid_Pocket_1_CheckIn_Card",
    (-3.5, 2.0, Z_LID_BOT + 0.015),
    (4.5, 1.5, 0.02), M_CREAM)

box("Lid_Pocket_2_Map",
    (3.5, -0.5, Z_LID_BOT + 0.015),
    (4.5, 5.0, 0.02), M_CREAM)


# ── EXTERIOR LID SURFACE (+Z, top when closed) ─────────────────────────────
ext_z = BOX_D + 0.02

# Main label — cream, slightly off-center
box("Exterior_Label",
    (-0.5, 0.0, ext_z),
    (5.5, 1.75, 0.02), M_CREAM)

# Rubber stamp — red, slight diagonal
stmp = box("Exterior_Stamp",
    (0.25, 0.15, ext_z + 0.01),
    (3.5, 0.70, 0.01), M_RED_STAMP)
stmp.rotation_euler = (0, 0, math.radians(8))

# Barcode / evidence tag — lower right area
box("Exterior_Barcode_Tag",
    (BOX_L/2 - 2.0, -(BOX_W/2 - 1.5), ext_z),
    (1.75, 0.65, 0.02), M_CREAM)

# THIS SIDE UP — upper left area
box("Ext_This_Side_Up",
    (-(BOX_L/2 - 1.5), BOX_W/2 - 1.0, ext_z),
    (1.5, 0.5, 0.02), M_CREAM)


# ── EXTERIOR FRONT FACE (+Y) ───────────────────────────────────────────────
h_z = 2.5                  # Handle Z per Authority Block
h_y = BOX_W / 2            # Front face Y

# Handle — die-cut cardboard arch, wrapped in gray duct tape
HW = 3.5
HH = 0.80
HT = 0.22

box("Handle_Post_L", (-HW/2, h_y, h_z + HH/2), (HT, HT, HH), M_GRAY_TAPE)
box("Handle_Post_R", ( HW/2, h_y, h_z + HH/2), (HT, HT, HH), M_GRAY_TAPE)
box("Handle_Bar",    (    0, h_y, h_z + HH),    (HW, HT, HT), M_GRAY_TAPE)

# Clasps — printed, flanking handle at same Z
for cx, side in [(-4.5, 'L'), (4.5, 'R')]:
    box(f"Clasp_{side}_Body",
        (cx, BOX_W/2 + 0.015, h_z),
        (1.25, 0.03, 0.65), M_METAL)
    box(f"Clasp_{side}_Button",
        (cx, BOX_W/2 + 0.045, h_z),
        (0.50, 0.04, 0.30), M_METAL)

# Front face labels
box("Ext_IT_Asset_Tag",
    (-5.5, BOX_W/2 + 0.02, BOX_D - 0.5),
    (1.5, 0.02, 0.6), M_CREAM)

box("Ext_Inspected_By",
    (5.5, BOX_W/2 + 0.02, BOX_D - 1.0),
    (1.75, 0.02, 0.75), M_CREAM)

box("Ext_Fragile_Stamp",
    (0.0, BOX_W/2 + 0.02, 0.75),
    (2.5, 0.01, 0.5), M_RED_STAMP)


# ═════════════════════════════════════════════════════════════════════════════
# BACK ZONE — HIDDEN MUG COMPARTMENT
# ═════════════════════════════════════════════════════════════════════════════

# Die-cut foam block (fills back zone, dark charcoal/black)
foam_h = Z_FOAM_TOP - Z_FOAM_BASE                  # 4.0"
box("Foam_Padding",
    (0, BACK_YC, Z_FOAM_BASE + foam_h / 2),
    (INT_L - 0.125, BACK_ZONE_D - 0.125, foam_h), M_FOAM)

# Mug on its side (handle to side, parallel to base)
mug_z = Z_MUG_BOT + MUG_DIA / 2                    # Center at 2.25"
bpy.ops.mesh.primitive_cylinder_add(
    radius=MUG_DIA / 2, depth=MUG_H,
    location=(0, BACK_YC, mug_z)
)
mug = bpy.context.active_object
mug.name = "Item_Mug_Shot_Mug"
mug.rotation_euler = (math.pi / 2, 0, 0)           # Lay on side
mug.data.materials.append(M_ITEM)

# Mug handle (simple box, extending to +X side)
box("Mug_Handle",
    (MUG_DIA / 2 + 0.35, BACK_YC, mug_z),
    (0.25, 1.0, 1.0), M_ITEM)

# Corporate Parole Passport — flanking left
box("Item_Corporate_Parole_Passport",
    (-4.75, BACK_YC, Z_MUG_BOT + 0.125),
    (3.5, 2.5, 0.25), M_ITEM)

# Yard Pass — flanking right
box("Item_Yard_Pass",
    (4.75, BACK_YC, Z_MUG_BOT + 0.05),
    (3.5, 2.5, 0.10), M_ITEM)

# Compartment cover (lift-off lid, both sides printable)
# Top = teaser copy, Underside = third narrative beat
box("Compartment_Cover",
    (0, BACK_YC, Z_COVER + COVER_T / 2),
    (COVER_L, COVER_W, COVER_T), M_COVER)

# Back wall interior — minimal institutional print (seal / case number)
box("Back_Wall_Interior_Print",
    (0, BACK_Y0 + 0.015, WT + body_h * 0.45),
    (5.0, 0.02, 1.5), M_ORANGE)


# ═════════════════════════════════════════════════════════════════════════════
# FRONT ZONE — TRAY STACK WITH BOOKLETS
# ═════════════════════════════════════════════════════════════════════════════

# ── TRAY 2 — Arsenal (bottom tray, 7 items, die-cut recesses) ──────────────
tray("Tray_2_Arsenal", TRAY_L, TRAY_W, T2_WH, TRAY_FT,
     tray_origin(Z_T2), M_CHARCOAL)
t2z = Z_T2 + TRAY_FT

# Top row (toward front / +Y from tray center)
box("Item_Cry_Rags",
    (-4.50, TRAY_YC + 1.75, t2z + 0.375),
    (3.0, 3.0, 0.75), M_ITEM)

box("Item_Ankle_Monitor",
    (-0.25, TRAY_YC + 1.75, t2z + 0.250),
    (3.0, 3.0, 0.50), M_ITEM)

box("Item_Turf_Tags",
    (4.25, TRAY_YC + 1.50, t2z + 0.050),
    (4.0, 1.25, 0.10), M_ITEM)

# Bottom row (toward back / -Y from tray center)
box("Item_Snitch_Switch",
    (-4.50, TRAY_YC - 1.50, t2z + 0.050),
    (3.5, 0.6, 0.10), M_ITEM)

box("Item_Evidence_Eraser",
    (-0.25, TRAY_YC - 1.50, t2z + 0.375),
    (2.0, 0.75, 0.75), M_ITEM)

box("Item_Solitary_Earplugs",
    (3.00, TRAY_YC - 1.50, t2z + 0.250),
    (2.0, 1.0, 0.50), M_ITEM)

box("Item_Sticker_Guide_Card",
    (5.50, TRAY_YC - 1.25, t2z + 0.050),
    (2.5, 2.0, 0.10), M_ITEM)


# ── BOOKLET 2 — Escalation / Incident (on Tray 2) ─────────────────────────
box("Booklet_2_Escalation",
    (TRAY_XC, TRAY_YC, Z_B2 + B2_T / 2),
    (13.0, 6.5, B2_T), M_BOOKLET)


# ── TRAY 1 — First Day Issue (top tray, 4 items, die-cut recesses) ────────
tray("Tray_1_First_Day", TRAY_L, TRAY_W, T1_WH, TRAY_FT,
     tray_origin(Z_T1), M_CHARCOAL)
t1z = Z_T1 + TRAY_FT

box("Item_Cubicle_Shank_Pen",
    (-3.00, TRAY_YC + 1.50, t1z + 0.30),
    (5.5, 0.6, 0.60), M_ITEM)

box("Item_Lifer_Ink_Tattoos",
    (-3.00, TRAY_YC + 0.00, t1z + 0.05),
    (5.0, 1.5, 0.10), M_ITEM)

box("Item_Rap_Sheet_Notepad",
    (3.50, TRAY_YC + 0.75, t1z + 0.0625),
    (4.0, 4.5, 0.125), M_ITEM)

box("Item_Tattoo_Guide_Card",
    (3.50, TRAY_YC - 2.25, t1z + 0.05),
    (3.0, 2.0, 0.10), M_ITEM)


# ── BOOKLET 1 — Intake / Orientation (on Tray 1) ──────────────────────────
box("Booklet_1_Intake",
    (TRAY_XC, TRAY_YC, Z_B1 + B1_T / 2),
    (13.0, 6.5, B1_T), M_BOOKLET)


# ── BOOKING FRAME (separate removable object, rests on Booklet 1) ──────────
# Outer: ~11" × 9"  |  Opening: ~7" × 5"  |  Border: ~2" all sides
# Height rulers on BOTH vertical sides
frame_z  = Z_FRAME + FRAME_T / 2
frame_cx = TRAY_XC
frame_cy = TRAY_YC
F_OX, F_OY = 11.0, 9.0     # Outer dims
F_IX, F_IY = 7.0, 5.0       # Inner opening
F_BX = (F_OX - F_IX) / 2    # 2.0" border
F_BY = (F_OY - F_IY) / 2    # 2.0" border

# Four border strips forming the frame
box("Frame_Top",
    (frame_cx, frame_cy + (F_OY - F_BY) / 2, frame_z),
    (F_OX, F_BY, FRAME_T), M_CHARCOAL)
box("Frame_Bottom",
    (frame_cx, frame_cy - (F_OY - F_BY) / 2, frame_z),
    (F_OX, F_BY, FRAME_T), M_CHARCOAL)
box("Frame_Left",
    (frame_cx - (F_OX - F_BX) / 2, frame_cy, frame_z),
    (F_BX, F_IY, FRAME_T), M_CHARCOAL)
box("Frame_Right",
    (frame_cx + (F_OX - F_BX) / 2, frame_cy, frame_z),
    (F_BX, F_IY, FRAME_T), M_CHARCOAL)

# Join frame pieces into one object
bpy.ops.object.select_all(action='DESELECT')
for nm in ["Frame_Top", "Frame_Bottom", "Frame_Left", "Frame_Right"]:
    bpy.data.objects[nm].select_set(True)
bpy.context.view_layer.objects.active = bpy.data.objects["Frame_Top"]
bpy.ops.object.join()
bpy.context.active_object.name = "Booking_Frame"


# ═════════════════════════════════════════════════════════════════════════════
# CAMERA & LIGHTING
# ═════════════════════════════════════════════════════════════════════════════

bpy.ops.object.camera_add(location=(22.0, -18.0, 14.0))
cam = bpy.context.active_object
cam.name = "Camera_Main"
cam.rotation_euler = (math.radians(55), 0, math.radians(48))
bpy.context.scene.camera = cam

bpy.ops.object.light_add(type='SUN', location=(10, -14, 18))
sun = bpy.context.active_object
sun.name = "Sun_Key"
sun.data.energy = 4.0
sun.rotation_euler = (math.radians(40), math.radians(10), math.radians(25))

bpy.ops.object.light_add(type='AREA', location=(-10, 12, 12))
fill = bpy.context.active_object
fill.name = "Area_Fill"
fill.data.energy = 800
fill.data.size = 6.0

bpy.ops.object.light_add(type='AREA', location=(0, -10, 14))
rim = bpy.context.active_object
rim.name = "Area_Rim"
rim.data.energy = 400
rim.data.size = 4.0


# ── RENDER SETTINGS ──────────────────────────────────────────────────────────
bpy.context.scene.render.engine        = 'CYCLES'
bpy.context.scene.cycles.samples       = 64
bpy.context.scene.render.resolution_x  = 1920
bpy.context.scene.render.resolution_y  = 1080


# ═════════════════════════════════════════════════════════════════════════════
# SUMMARY
# ═════════════════════════════════════════════════════════════════════════════
front_stack    = Z_FRAME_TOP - Z_FLOOR
front_head     = Z_LID_BOT - Z_FRAME_TOP
back_stack     = (Z_COVER + COVER_T) - Z_FLOOR
back_head      = Z_LID_BOT - (Z_COVER + COVER_T)

print("=" * 66)
print("  OFFICE SURVIVAL KIT — Blender Model v2 (Two-Zone Layout)")
print("=" * 66)
print(f"  Box outer:            {BOX_L}\" × {BOX_W}\" × {BOX_D}\"")
print(f"  Box interior:         {INT_L}\" × {INT_W}\" × {INT_D}\"")
print(f"  Front zone (Y):       {FRONT_ZONE_D}\"")
print(f"  Back zone (Y):        {BACK_ZONE_D}\"")
print(f"  Divider:              {DIVIDER_T}\" thick, full height")
print(f"  Tray area:            {TRAY_L}\" × {TRAY_W}\"")
print(f"  ───────────────────────────────────────────")
print(f"  FRONT ZONE STACK (bottom → top):")
print(f"    Tray 2:             {Z_T2:.3f}\" → {Z_T2_TOP:.3f}\"  (7 items)")
print(f"    Booklet 2:          {Z_B2:.3f}\" → {Z_B2_TOP:.3f}\"  (0.30\" thick)")
print(f"    Tray 1:             {Z_T1:.3f}\" → {Z_T1_TOP:.3f}\"  (4 items)")
print(f"    Booklet 1:          {Z_B1:.3f}\" → {Z_B1_TOP:.3f}\"  (0.25\" thick)")
print(f"    Booking frame:      {Z_FRAME:.3f}\" → {Z_FRAME_TOP:.3f}\"  (0.0625\")")
print(f"    Stack total:        {front_stack:.3f}\"")
print(f"    Headroom to lid:    {front_head:.3f}\"")
print(f"  ───────────────────────────────────────────")
print(f"  BACK ZONE STACK:")
print(f"    Foam base:          {Z_FOAM_BASE:.3f}\" → {Z_MUG_BOT:.3f}\"")
print(f"    Mug (on side):      {Z_MUG_BOT:.3f}\" → {Z_MUG_TOP:.3f}\"  (3.5\" dia)")
print(f"    Foam top:           {Z_MUG_TOP:.3f}\" → {Z_FOAM_TOP:.3f}\"")
print(f"    Cover:              {Z_COVER:.3f}\" → {Z_COVER + COVER_T:.4f}\"")
print(f"    Stack total:        {back_stack:.3f}\"")
print(f"    Headroom to lid:    {back_head:.4f}\"")
print(f"  ───────────────────────────────────────────")
print(f"  Lid Z:                {Z_LID_BOT:.3f}\" → {BOX_D:.3f}\"")
print(f"  Handle Z:             {h_z}\" (front face +Y)")
print(f"  Front face ratio:     {BOX_L / BOX_D:.2f}:1 (briefcase)")
print(f"  Lid ratio:            {BOX_L / BOX_W:.2f}:1")
print(f"  ───────────────────────────────────────────")
print(f"  Handle + Clasps:      Front face (+Y) ✓")
print(f"  Lid:                  SOLID, no cutouts ✓")
print(f"  Booking frame:        Separate removable object ✓")
print(f"  Die-cut recesses:     Pelican case style ✓")
print(f"  Divider wall:         Full height ✓")
print(f"  Mug orientation:      On side, handle to side ✓")
print(f"  Tray 1 items:         4 (pen, tattoos, notepad, tattoo guide) ✓")
print(f"  Tray 2 items:         7 (clips, stickers, tissues, plugs, monitor, eraser, sticker guide) ✓")
print(f"  Compartment items:    3 (mug, passport, yard pass) ✓")
print(f"  Scale: 1 BU = 1 inch")
print("=" * 66)
