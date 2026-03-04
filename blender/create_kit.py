"""
Office Survival Kit — Blender Model Generator (v3)
====================================================
Scripting tab → Open this file → Run Script (Alt+P)

ORIENTATION: Upright briefcase, as if you're carrying it.
  X = 6.5"  (width, left ↔ right)
  Z = 5.0"  (height, bottom ↔ top)
  Y = 3.375" (depth/thickness, front ↔ back)

  Front face (Y-): lid, clasps, label
  Back face  (Y+): base
  Top edge   (Z+): handle

Interior: trays stack front-to-back (along Y).
  Open the lid → see Tray 1 → pull it up by tab → see Tray 2 → etc.
  Tabs extend upward (Z+) from the top edge, staggered left to right.

After running: File → Export → glTF 2.0 (.glb) → save to public/models/kit.glb
"""

import bpy
import bmesh
import math

# ─── Clean scene ──────────────────────────────────────────────────────────────
bpy.ops.object.select_all(action='SELECT')
bpy.ops.object.delete(use_global=False)
for m in bpy.data.meshes:
    bpy.data.meshes.remove(m)
for m in bpy.data.materials:
    bpy.data.materials.remove(m)


# ─── Dimensions (inches) ─────────────────────────────────────────────────────
CASE_X = 6.5      # width
CASE_Z = 5.0      # height
CASE_Y = 3.375    # depth (thickness)

LID_WALL  = 0.175   # lid interior wall height
BASE_WALL = 0.175   # base interior wall height
SHELL     = 0.08    # paperboard wall thickness

TRAYS = [
    {"name": "Tray1_Shank",  "label": "SHANK",  "depth": 0.70,
     "slot_w": 5.5, "slot_h": 0.6,  "slot_z_off": 0.8,  "tab_pos": "far_left"},
    {"name": "Tray2_Switch", "label": "SWITCH", "depth": 0.50,
     "slot_w": 3.5, "slot_h": 0.6,  "slot_z_off": 0.8,  "tab_pos": "left_center"},
    {"name": "Tray3_Ink",    "label": "INK",    "depth": 0.50,
     "slot_w": 4.5, "slot_h": 1.25, "slot_z_off": 0.5,  "tab_pos": "center"},
    {"name": "Tray4_Tags",   "label": "TAGS",   "depth": 0.50,
     "slot_w": 4.5, "slot_h": 1.25, "slot_z_off": 0.5,  "tab_pos": "right_center"},
    {"name": "Tray5_Rags",   "label": "RAGS",   "depth": 0.70,
     "slot_w": 3.0, "slot_h": 3.0,  "slot_z_off": 0.2,  "tab_pos": "far_right"},
]

TAB_W = 1.0
TAB_H = 0.4
TAB_THICK = 0.06

HANDLE_SPAN   = 2.5   # width of handle along X
HANDLE_RISE   = 0.5   # how high the arch goes above the lid
HANDLE_DEPTH  = 0.25  # handle bar depth (Y direction)
HANDLE_THICK  = 0.12  # handle bar thickness


# ─── Colors (from spec §4) ───────────────────────────────────────────────────
def hex_to_lin(h):
    h = h.lstrip('#')
    return tuple((int(h[i:i+2], 16) / 255.0) ** 2.2 for i in (0, 2, 4))

C_BLACK   = hex_to_lin("#000000")  # Exterior matte black
C_CHARCOAL= hex_to_lin("#1a1a1a")  # Tray floors
C_ORANGE  = hex_to_lin("#e85d04")  # Tabs, headers
C_GRAY    = hex_to_lin("#888888")  # Handle (duct tape)
C_CHROME  = hex_to_lin("#c0c0c0")  # Faux clasps
C_CREAM   = hex_to_lin("#f5f0e8")  # Label background
C_DARK    = hex_to_lin("#0d0d0d")  # Slot inset
C_CHALK   = hex_to_lin("#d0d0d0")  # Chalk outline


# ─── Materials ────────────────────────────────────────────────────────────────
def mat(name, color, rough=0.6, metal=0.0):
    m = bpy.data.materials.new(name)
    m.use_nodes = True
    b = m.node_tree.nodes["Principled BSDF"]
    b.inputs["Base Color"].default_value = (*color, 1.0)
    b.inputs["Roughness"].default_value = rough
    b.inputs["Metallic"].default_value = metal
    return m

M_EXT   = mat("Exterior",  C_BLACK,   rough=0.85)
M_TRAY  = mat("Tray",      C_CHARCOAL,rough=0.75)
M_TAB   = mat("Tab",       C_ORANGE,  rough=0.5)
M_HANDLE= mat("Handle",    C_GRAY,    rough=0.65)
M_CLASP = mat("Clasp",     C_CHROME,  rough=0.2, metal=0.9)
M_LABEL = mat("Label",     C_CREAM,   rough=0.7)
M_SLOT  = mat("Slot",      C_DARK,    rough=0.8)
M_CHALK = mat("Chalk",     C_CHALK,   rough=0.9)


# ─── Helpers ──────────────────────────────────────────────────────────────────
def box(name, hx, hy, hz, loc, material):
    """Box centered at loc with half-extents hx, hy, hz."""
    bpy.ops.mesh.primitive_cube_add(size=1, location=loc)
    o = bpy.context.active_object
    o.name = name
    o.scale = (hx * 2, hy * 2, hz * 2)
    bpy.ops.object.transform_apply(scale=True)
    o.data.materials.append(material)
    return o


def make_case_shell(name, hx, hy, hz, thickness, material, open_face='y_neg'):
    """
    Hollow box (5 walls) with one open face.
    hx/hy/hz = OUTER half-extents. Walls are `thickness` thick.
    open_face: which face is missing ('y_neg' = front of briefcase).
    """
    t = thickness
    parts = []

    # Back wall (Y+)
    parts.append(box(f"{name}_back",  hx, t/2, hz, (0, hy - t/2, 0), material))
    # Top wall (Z+)
    parts.append(box(f"{name}_top",   hx, hy, t/2, (0, 0, hz - t/2), material))
    # Bottom wall (Z-)
    parts.append(box(f"{name}_bot",   hx, hy, t/2, (0, 0, -hz + t/2), material))
    # Left wall (X-)
    parts.append(box(f"{name}_left",  t/2, hy, hz, (-hx + t/2, 0, 0), material))
    # Right wall (X+)
    parts.append(box(f"{name}_right", t/2, hy, hz, (hx - t/2, 0, 0), material))

    if open_face != 'y_neg':
        # Front wall (Y-)
        parts.append(box(f"{name}_front", hx, t/2, hz, (0, -hy + t/2, 0), material))

    # Join all parts into one object
    bpy.ops.object.select_all(action='DESELECT')
    for p in parts:
        p.select_set(True)
    bpy.context.view_layer.objects.active = parts[0]
    bpy.ops.object.join()
    result = bpy.context.active_object
    result.name = name
    bpy.ops.object.origin_set(type='ORIGIN_GEOMETRY', center='BOUNDS')
    return result


# ─── Build ────────────────────────────────────────────────────────────────────

hx = CASE_X / 2   # 3.25
hy = CASE_Y / 2   # 1.6875
hz = CASE_Z / 2   # 2.5

# ═══ OUTER CASE (open on front face Y-) ═══
case = make_case_shell("OuterCase", hx, hy, hz, SHELL, M_EXT, open_face='y_neg')


# ═══ BASE (fixed to back wall interior) ═══
# A thin panel on the back interior surface
base = box("Base", hx - SHELL, SHELL/2, hz - SHELL,
           (0, hy - SHELL - SHELL/2, 0), M_TRAY)
base.parent = case


# ═══ LID (front panel — separate object so it can open) ═══
lid = box("Lid", hx, SHELL/2, hz,
          (0, -hy + SHELL/2, 0), M_EXT)


# ═══ TRAYS ═══
# Stack from BACK (Y+) to FRONT (Y-).
# y_cursor tracks the front face of each tray.
# Start just inside the base: y = hy - SHELL - BASE_WALL
y_cursor = hy - SHELL - BASE_WALL

tray_objects = []
for info in reversed(TRAYS):  # Tray5 at back, Tray1 at front
    d = info["depth"]  # Y-thickness of this tray

    # Tray body: a thin slab
    tray_y_center = y_cursor - d / 2
    tray = box(info["name"],
               hx - SHELL, d / 2, hz - SHELL,
               (0, tray_y_center, 0), M_TRAY)

    # Item slot on the front face (Y-) of the tray — a recessed rectangle
    sw = info["slot_w"] / 2
    sh = info["slot_h"] / 2
    sz_off = info["slot_z_off"]  # how far up from center the slot is
    slot_inset = 0.02

    slot = box(info["name"] + "_Slot",
               sw, slot_inset / 2, sh,
               (0, y_cursor - d - slot_inset/2, -sz_off), M_SLOT)
    slot.parent = tray

    # Chalk outline (slightly larger than slot, on front face)
    margin = 0.15
    chalk = box(info["name"] + "_Chalk",
                sw + margin, 0.005, sh + margin,
                (0, y_cursor - d - 0.001, -sz_off), M_CHALK)
    chalk.parent = tray

    # Lift tab — at the BOTTOM edge (hinge side, Z-)
    # Staggered left-to-right like file folder tabs
    # Tab sits ON the front face (Y-) of each tray, protruding slightly forward
    tab_positions = {
        "far_left":      hx - TAB_W/2 - 0.3,
        "left_center":   hx - TAB_W/2 - 1.7,
        "center":        0,
        "right_center": -hx + TAB_W/2 + 1.7,
        "far_right":    -hx + TAB_W/2 + 0.3,
    }
    tab_x = tab_positions[info["tab_pos"]]

    # Y = front face of tray, protruding forward so it's visible
    # Z = bottom edge (hinge side), just inside the case wall
    tray_front_y = y_cursor - d
    tab = box(info["name"] + "_Tab",
              TAB_W / 2, TAB_THICK / 2, TAB_H / 2,
              (tab_x, tray_front_y - TAB_THICK, -hz + SHELL + TAB_H / 2 + 0.05), M_TAB)
    tab.parent = tray

    bpy.context.view_layer.objects.active = tray
    bpy.ops.object.origin_set(type='ORIGIN_GEOMETRY', center='BOUNDS')

    tray_objects.append(tray)
    y_cursor -= d


# ═══ HANDLE (duct tape gray arch on top edge Z+) ═══
bm = bmesh.new()
hspan = HANDLE_SPAN / 2
hrise = HANDLE_RISE
hthick = HANDLE_THICK
hdepth = HANDLE_DEPTH / 2
post_w = 0.15  # width of each vertical post

# Left post
for sign, x_out, x_in in [(-1, -hspan, -hspan + post_w), (1, hspan - post_w, hspan)]:
    verts = [
        bm.verts.new((x_out, -hdepth, 0)),
        bm.verts.new((x_in,  -hdepth, 0)),
        bm.verts.new((x_in,  -hdepth, hrise)),
        bm.verts.new((x_out, -hdepth, hrise)),
    ]
    bm.faces.new(verts)
    verts = [
        bm.verts.new((x_out, hdepth, 0)),
        bm.verts.new((x_in,  hdepth, 0)),
        bm.verts.new((x_in,  hdepth, hrise)),
        bm.verts.new((x_out, hdepth, hrise)),
    ]
    bm.faces.new(verts)

# Top bar connecting the two posts
bar_verts = [
    # Bottom face of bar
    bm.verts.new((-hspan, -hdepth, hrise)),
    bm.verts.new(( hspan, -hdepth, hrise)),
    bm.verts.new(( hspan,  hdepth, hrise)),
    bm.verts.new((-hspan,  hdepth, hrise)),
]
bm.faces.new(bar_verts)

# Top face of bar
bar_top = [
    bm.verts.new((-hspan, -hdepth, hrise + hthick)),
    bm.verts.new(( hspan, -hdepth, hrise + hthick)),
    bm.verts.new(( hspan,  hdepth, hrise + hthick)),
    bm.verts.new((-hspan,  hdepth, hrise + hthick)),
]
bm.faces.new(bar_top)

# Front face of bar
bm.faces.new([
    bm.verts.new((-hspan, -hdepth, hrise)),
    bm.verts.new(( hspan, -hdepth, hrise)),
    bm.verts.new(( hspan, -hdepth, hrise + hthick)),
    bm.verts.new((-hspan, -hdepth, hrise + hthick)),
])
# Back face of bar
bm.faces.new([
    bm.verts.new((-hspan, hdepth, hrise)),
    bm.verts.new(( hspan, hdepth, hrise)),
    bm.verts.new(( hspan, hdepth, hrise + hthick)),
    bm.verts.new((-hspan, hdepth, hrise + hthick)),
])
# Left cap
bm.faces.new([
    bm.verts.new((-hspan, -hdepth, hrise)),
    bm.verts.new((-hspan,  hdepth, hrise)),
    bm.verts.new((-hspan,  hdepth, hrise + hthick)),
    bm.verts.new((-hspan, -hdepth, hrise + hthick)),
])
# Right cap
bm.faces.new([
    bm.verts.new((hspan, -hdepth, hrise)),
    bm.verts.new((hspan,  hdepth, hrise)),
    bm.verts.new((hspan,  hdepth, hrise + hthick)),
    bm.verts.new((hspan, -hdepth, hrise + hthick)),
])

handle_mesh = bpy.data.meshes.new("Handle")
bm.to_mesh(handle_mesh)
bm.free()

handle = bpy.data.objects.new("Handle", handle_mesh)
bpy.context.collection.objects.link(handle)
handle.location = (0, 0, hz)  # sits on top edge (Z+)
handle.data.materials.append(M_HANDLE)
handle.parent = lid


# ═══ EXTERIOR DETAILS (on lid front face Y-) ═══
# Positioned to match the reference photos
front_y = -hy - 0.001  # just outside the front face

# Faux clasps — on the TOP SURFACE (Z+), flanking the handle
# They sit flat on the top narrow edge, facing upward
top_z = hz + 0.001  # just above the top surface
for i, cx in enumerate([-1.2, 1.2]):
    clasp = box(f"FauxClasp_{i+1}",
                0.3, 0.2, 0.015,
                (cx, -hy/3, top_z), M_CLASP)
    clasp.parent = lid

# Main label — large cream rectangle, centered, upper portion of front face
# Photo shows it's the dominant element, roughly centered with slight offset
label = box("MainLabel",
            2.2, 0.01, 1.2,
            (0.1, front_y, 0.3), M_LABEL)
label.parent = lid

# "CLEARED FOR OFFICE USE" rubber stamp — bottom left of front face
# Red/dark red stamp, slight rotation would be applied in final design
M_STAMP = mat("Stamp", hex_to_lin("#8b1a1a"), rough=0.7)
stamp = box("RubberStamp",
            1.0, 0.01, 0.45,
            (-hx + 1.5, front_y, -hz + 0.7), M_STAMP)
stamp.parent = lid

# Barcode/evidence label — bottom right corner
barcode = box("BarcodeLabel",
              0.6, 0.01, 0.4,
              (hx - 0.9, front_y, -hz + 0.6), M_LABEL)
barcode.parent = lid


# ═══ Frame viewport ══════════════════════════════════════════════════════════
bpy.ops.object.select_all(action='DESELECT')
for area in bpy.context.screen.areas:
    if area.type == 'VIEW_3D':
        override = bpy.context.copy()
        override['area'] = area
        override['region'] = area.regions[-1]
        with bpy.context.temp_override(**override):
            bpy.ops.view3d.view_all()
        break


# ═══ Summary ═════════════════════════════════════════════════════════════════
roots = [o.name for o in bpy.data.objects if o.parent is None]
print("")
print("=" * 60)
print("  Office Survival Kit — Model Created! (v3.1)")
print("=" * 60)
print(f"  Orientation: upright briefcase")
print(f"  X={CASE_X}\"  Z={CASE_Z}\"  Y={CASE_Y}\"")
print(f"  Root objects: {roots}")
print(f"  Total objects: {len(bpy.data.objects)}")
print("")
print("  → Switch to Material Preview (3rd sphere icon, top-right)")
print("    to see the actual colors!")
print("")
print("  → File → Export → glTF 2.0 (.glb)")
print("    Save to: public/models/kit.glb")
print("=" * 60)
