"""
Office Survival Kit — Camera View Switcher (N-Panel Addon) v6
==============================================================
Run in Blender > Scripting workspace (Alt+P) to register the panel.
Press N in the 3D viewport → "Kit Views" tab to switch cameras.

Re-run this script anytime Blender restarts to restore the panel.

v6 changes (March 17, 2026):
  - Amazon box converted from 4-flap RSC to tuck-top mailer (one lid panel)
  - Replaced 4-flap open/close toggle with single tuck-top lid toggle
  - Amz_Lid_Panel + Amz_Tuck_Tab parented to Amz_Lid_Hinge for rotation
  - Lid hinges from FRONT edge (+Y) so it opens opposite direction from briefcase
  - Updated AMAZON_BOX_OBJECTS list for new lid geometry

v5 changes (March 13, 2026):
  - Added AMAZON BOX camera group (7 cameras: hero + 6 orthographic sides)
  - Added Amazon box show/hide toggle
  - Updated visibility layers for v5 items (boxed items, sticky notes, Activity Guide)
  - Camera switches auto-manage visibility
"""

import bpy
import math

# ── Unregister old version if it exists ─────────────────────────────────────
for cls_name in [
    "KITVIEW_OT_switch_camera",
    "KITVIEW_OT_toggle_lid",
    "KITVIEW_OT_toggle_copy",
    "KITVIEW_OT_toggle_ground",
    "KITVIEW_OT_toggle_amazon_lid",
    "KITVIEW_OT_toggle_amazon_box",
    "KITVIEW_PT_camera_panel",
]:
    cls = getattr(bpy.types, cls_name, None)
    if cls:
        bpy.utils.unregister_class(cls)


# ── Visibility layers ───────────────────────────────────────────────────────

# Amazon box objects
AMAZON_BOX_OBJECTS = [
    "Amazon_Box_Base", "Amazon_Box_Wall_Front", "Amazon_Box_Wall_Back",
    "Amazon_Box_Wall_Left", "Amazon_Box_Wall_Right",
    "Amz_Lid_Panel", "Amz_Tuck_Tab", "Amz_Lid_Hinge",
]

# Exterior lid objects
EXTERIOR_LID = [
    "Exterior_Label", "Exterior_Stamp", "Exterior_Barcode_Tag", "Ext_This_Side_Up",
]

# Briefcase exterior objects
BRIEFCASE_EXTERIOR = [
    "Box_Base", "Box_Wall_Front", "Box_Wall_Back", "Box_Wall_Left", "Box_Wall_Right",
    "Case_Lid", "Handle_Post_L", "Handle_Post_R", "Handle_Bar",
    "Clasp_L_Body", "Clasp_L_Button", "Clasp_R_Body", "Clasp_R_Button",
    "Ext_IT_Asset_Tag", "Ext_Inspected_By", "Ext_Fragile_Stamp",
] + EXTERIOR_LID

# Interior lid objects
INTERIOR_OBJECTS = [
    "Lid_Interior_Face", "Lid_Pocket_1_CheckIn_Card", "Lid_Pocket_2_Map",
]

# Interior layers (v5 — boxed items)
TOP_LAYER = [
    "Booking_Frame", "DocSet_1", "Orange_Cover_Frame",
]

TRAY1_LAYER = [
    "Tray_1_Items", "Tray_1_Orange_Trim",
    "Tray_1_Finger_Trim_L", "Tray_1_Finger_Trim_R",
    "Item_Box_Cubicle_Shank", "Sticky_Pen",
    "Item_Box_Lifer_Ink", "Sticky_Tattoo",
    "Item_Box_Turf_Tags", "Sticky_Sticker",
]

TRAY2_LAYER = [
    "Tray_2_Cards", "Tray_2_Orange_Trim",
    "Tray_2_Finger_Trim_L", "Tray_2_Finger_Trim_R",
    "Item_Box_Affirmation_Cards", "Sticky_Affirmation",
    "Item_Box_Complaint_Cards", "Sticky_Complaint",
    "Item_Box_PassiveAgg_Cards", "Sticky_PassiveAgg",
    "Recess_Confiscated_Stapler",
    "DocSet_2",
]

BACKZONE_COVER = [
    "Compartment_Cover", "Item_Activity_Guide", "Sticky_Activity_Guide",
]

BACKZONE_PADDING = [
    "Shredded_Paper_Fill",
]

BACKZONE_CONTENTS = [
    "Item_Mug_Shot_Mug", "Mug_Handle",
]

BACKZONE_ALL = BACKZONE_COVER + BACKZONE_PADDING + BACKZONE_CONTENTS

ALL_INTERIOR_LAYERS = TOP_LAYER + TRAY1_LAYER + TRAY2_LAYER + BACKZONE_ALL

# Visibility rules for interior cameras
VISIBILITY_RULES = {
    "CAM_Int_Top":              [TOP_LAYER, TRAY1_LAYER, TRAY2_LAYER, BACKZONE_ALL],
    "CAM_Int_Tray1":            [TRAY1_LAYER, TRAY2_LAYER, BACKZONE_ALL],
    "CAM_Int_Tray2":            [TRAY2_LAYER, BACKZONE_ALL],
    "CAM_Int_BackZone_Covered": [BACKZONE_ALL],
    "CAM_Int_BackZone":         [BACKZONE_PADDING, BACKZONE_CONTENTS],
    "CAM_Int_BackZone_Contents":[BACKZONE_CONTENTS],
}

ALL_BRIEFCASE_INTERIOR = (
    ALL_INTERIOR_LAYERS + INTERIOR_OBJECTS + ["Back_Wall_Interior_Print"]
)


def _set_layer_visibility(camera_name):
    """Show/hide interior objects based on which camera is active."""
    if camera_name not in VISIBILITY_RULES:
        for name in ALL_INTERIOR_LAYERS:
            obj = bpy.data.objects.get(name)
            if obj:
                obj.hide_viewport = False
                obj.hide_render = False
        return

    visible_layers = VISIBILITY_RULES[camera_name]
    visible_names = set()
    for layer in visible_layers:
        visible_names.update(layer)

    for name in ALL_INTERIOR_LAYERS:
        obj = bpy.data.objects.get(name)
        if obj:
            hidden = name not in visible_names
            obj.hide_viewport = hidden
            obj.hide_render = hidden


class KITVIEW_OT_switch_camera(bpy.types.Operator):
    """Switch to the specified camera and manage visibility"""
    bl_idname = "kitview.switch_camera"
    bl_label = "Switch Camera"
    camera_name: bpy.props.StringProperty()

    def execute(self, context):
        cam = bpy.data.objects.get(self.camera_name)
        if not cam or cam.type != 'CAMERA':
            self.report({'WARNING'}, f"Camera '{self.camera_name}' not found")
            return {'CANCELLED'}

        context.scene.camera = cam
        for area in context.screen.areas:
            if area.type == 'VIEW_3D':
                for space in area.spaces:
                    if space.type == 'VIEW_3D':
                        space.lock_camera = False
                        r3d = space.region_3d
                        r3d.view_perspective = 'CAMERA'
                        r3d.view_camera_zoom = 0.0
                        r3d.view_camera_offset = (0.0, 0.0)

        is_amazon = self.camera_name.startswith("CAM_Amz_")
        is_interior = self.camera_name.startswith("CAM_Int_")
        is_kit_exterior = self.camera_name.startswith("CAM_Ext_")
        is_hero = self.camera_name == "Camera_Main"
        is_lid_interior = self.camera_name == "CAM_Int_Lid"

        if is_amazon:
            # Amazon views: show amazon box + briefcase exterior, hide interior
            for name in AMAZON_BOX_OBJECTS:
                obj = bpy.data.objects.get(name)
                if obj:
                    obj.hide_viewport = False
                    obj.hide_render = False
            for name in BRIEFCASE_EXTERIOR:
                obj = bpy.data.objects.get(name)
                if obj:
                    obj.hide_viewport = False
                    obj.hide_render = False
            for name in ALL_BRIEFCASE_INTERIOR:
                obj = bpy.data.objects.get(name)
                if obj:
                    obj.hide_viewport = True
                    obj.hide_render = True

        elif is_kit_exterior or is_hero:
            # Kit exterior: hide amazon box, show briefcase exterior, hide interior
            for name in AMAZON_BOX_OBJECTS:
                obj = bpy.data.objects.get(name)
                if obj:
                    obj.hide_viewport = True
                    obj.hide_render = True
            for name in BRIEFCASE_EXTERIOR:
                obj = bpy.data.objects.get(name)
                if obj:
                    obj.hide_viewport = False
                    obj.hide_render = False
            for name in ALL_BRIEFCASE_INTERIOR:
                obj = bpy.data.objects.get(name)
                if obj:
                    obj.hide_viewport = True
                    obj.hide_render = True

        elif is_lid_interior:
            # Lid interior: hide amazon, show lid + pockets + top layer, hide deeper layers
            for name in AMAZON_BOX_OBJECTS:
                obj = bpy.data.objects.get(name)
                if obj:
                    obj.hide_viewport = True
                    obj.hide_render = True
            for name in ["Case_Lid"] + INTERIOR_OBJECTS + EXTERIOR_LID:
                obj = bpy.data.objects.get(name)
                if obj:
                    obj.hide_viewport = False
                    obj.hide_render = False
            for name in ["Box_Base", "Box_Wall_Front", "Box_Wall_Back",
                          "Box_Wall_Left", "Box_Wall_Right"]:
                obj = bpy.data.objects.get(name)
                if obj:
                    obj.hide_viewport = False
                    obj.hide_render = False
            # Show top layer (frame, doc set, orange cover), hide deeper layers
            top_names = set(TOP_LAYER)
            for name in ALL_INTERIOR_LAYERS:
                obj = bpy.data.objects.get(name)
                if obj:
                    hidden = name not in top_names
                    obj.hide_viewport = hidden
                    obj.hide_render = hidden

        elif is_interior:
            # Other interior views: hide amazon box, hide lid, show interior layers
            for name in AMAZON_BOX_OBJECTS:
                obj = bpy.data.objects.get(name)
                if obj:
                    obj.hide_viewport = True
                    obj.hide_render = True
            for name in EXTERIOR_LID + ["Case_Lid"]:
                obj = bpy.data.objects.get(name)
                if obj:
                    obj.hide_viewport = True
                    obj.hide_render = True
            for name in INTERIOR_OBJECTS:
                obj = bpy.data.objects.get(name)
                if obj:
                    obj.hide_viewport = False
                    obj.hide_render = False
            for name in ["Box_Base", "Box_Wall_Front", "Box_Wall_Back",
                          "Box_Wall_Left", "Box_Wall_Right"]:
                obj = bpy.data.objects.get(name)
                if obj:
                    obj.hide_viewport = False
                    obj.hide_render = False
            _set_layer_visibility(self.camera_name)

        self.report({'INFO'}, f"Switched to {self.camera_name}")
        return {'FINISHED'}


class KITVIEW_OT_toggle_amazon_lid(bpy.types.Operator):
    """Open or close the Amazon box tuck-top lid"""
    bl_idname = "kitview.toggle_amazon_lid"
    bl_label = "Toggle Amazon Lid"

    def execute(self, context):
        hinge = bpy.data.objects.get("Amz_Lid_Hinge")
        if not hinge:
            self.report({'WARNING'}, "Amz_Lid_Hinge not found")
            return {'CANCELLED'}

        is_open = abs(hinge.rotation_euler.x) > 0.01

        if is_open:
            hinge.rotation_euler = (0, 0, 0)
            self.report({'INFO'}, "Amazon box closed")
        else:
            hinge.rotation_euler = (math.radians(-110), 0, 0)
            self.report({'INFO'}, "Amazon box open")

        return {'FINISHED'}


class KITVIEW_OT_toggle_amazon_box(bpy.types.Operator):
    """Show or hide the entire Amazon box"""
    bl_idname = "kitview.toggle_amazon_box"
    bl_label = "Toggle Amazon Box"

    def execute(self, context):
        any_visible = False
        for name in AMAZON_BOX_OBJECTS:
            obj = bpy.data.objects.get(name)
            if obj and not obj.hide_viewport:
                any_visible = True
                break
        for name in AMAZON_BOX_OBJECTS:
            obj = bpy.data.objects.get(name)
            if obj:
                obj.hide_viewport = any_visible
                obj.hide_render = any_visible
        state = "hidden" if any_visible else "shown"
        self.report({'INFO'}, f"Amazon box {state}")
        return {'FINISHED'}


class KITVIEW_OT_toggle_lid(bpy.types.Operator):
    """Open or close the briefcase lid"""
    bl_idname = "kitview.toggle_lid"
    bl_label = "Toggle Lid"

    def execute(self, context):
        hinge = bpy.data.objects.get("Lid_Hinge_Pivot")
        if not hinge:
            self.report({'WARNING'}, "Lid_Hinge_Pivot not found")
            return {'CANCELLED'}
        is_open = abs(hinge.rotation_euler.x) > 0.01
        if is_open:
            # Close lid — hide interior items
            hinge.rotation_euler = (0, 0, 0)
            for name in ALL_INTERIOR_LAYERS + INTERIOR_OBJECTS:
                obj = bpy.data.objects.get(name)
                if obj:
                    obj.hide_viewport = True
                    obj.hide_render = True
            self.report({'INFO'}, "Lid closed")
        else:
            # Open lid — show top layer (what you'd see first)
            hinge.rotation_euler = (math.radians(110), 0, 0)
            for name in ALL_INTERIOR_LAYERS + INTERIOR_OBJECTS:
                obj = bpy.data.objects.get(name)
                if obj:
                    obj.hide_viewport = False
                    obj.hide_render = False
            self.report({'INFO'}, "Lid open (110 deg)")
        return {'FINISHED'}


class KITVIEW_OT_toggle_copy(bpy.types.Operator):
    """Toggle visibility of all copy/text objects"""
    bl_idname = "kitview.toggle_copy"
    bl_label = "Toggle Copy Text"

    def execute(self, context):
        font_objects = [o for o in bpy.data.objects if o.type == 'FONT']
        if not font_objects:
            self.report({'WARNING'}, "No text objects found")
            return {'CANCELLED'}
        any_visible = any(not o.hide_viewport for o in font_objects)
        for o in font_objects:
            o.hide_viewport = any_visible
            o.hide_render = any_visible
        state = "hidden" if any_visible else "shown"
        self.report({'INFO'}, f"Copy text {state}")
        return {'FINISHED'}


class KITVIEW_OT_toggle_ground(bpy.types.Operator):
    """Toggle visibility of the ground plane"""
    bl_idname = "kitview.toggle_ground"
    bl_label = "Toggle Ground"

    def execute(self, context):
        ground = bpy.data.objects.get("Ground_Plane")
        if not ground:
            self.report({'WARNING'}, "Ground_Plane not found")
            return {'CANCELLED'}
        ground.hide_viewport = not ground.hide_viewport
        ground.hide_render = not ground.hide_render
        state = "hidden" if ground.hide_viewport else "shown"
        self.report({'INFO'}, f"Ground plane {state}")
        return {'FINISHED'}


class KITVIEW_PT_camera_panel(bpy.types.Panel):
    """Camera View Switcher for Office Survival Kit"""
    bl_label = "Kit Views"
    bl_idname = "KITVIEW_PT_camera_panel"
    bl_space_type = 'VIEW_3D'
    bl_region_type = 'UI'
    bl_category = "Kit Views"

    camera_groups = [
        ("AMAZON BOX", [
            ("CAM_Amz_Hero", "Hero 3/4"),
            ("CAM_Amz_Front", "Front (+Y)"),
            ("CAM_Amz_Back", "Back (-Y)"),
            ("CAM_Amz_Top", "Top (+Z)"),
            ("CAM_Amz_Bottom", "Bottom (-Z)"),
            ("CAM_Amz_Left", "Left (-X)"),
            ("CAM_Amz_Right", "Right (+X)"),
        ]),
        ("BRIEFCASE EXTERIOR", [
            ("Camera_Main", "Hero 3/4"),
            ("CAM_Ext_Front", "Front (+Y) — Handle"),
            ("CAM_Ext_Back", "Back (-Y) — Hinge"),
            ("CAM_Ext_Top", "Top (+Z) — Lid"),
            ("CAM_Ext_Bottom", "Bottom (-Z)"),
            ("CAM_Ext_Left", "Left (-X)"),
            ("CAM_Ext_Right", "Right (+X)"),
        ]),
        ("BRIEFCASE INTERIOR", [
            ("CAM_Int_Lid", "Lid Interior"),
            ("CAM_Int_Top", "Top View — Frame + Docs"),
            ("CAM_Int_Tray1", "Tray 1 — Boxed Items"),
            ("CAM_Int_Tray2", "Tray 2 — Card Decks"),
            ("CAM_Int_BackZone_Covered", "Back Zone — Covered"),
            ("CAM_Int_BackZone", "Back Zone — Open"),
            ("CAM_Int_BackZone_Contents", "Back Zone — Contents"),
        ]),
    ]

    def draw(self, context):
        layout = self.layout
        active_cam = context.scene.camera
        active_name = active_cam.name if active_cam else ""

        # ── TOGGLES ────────────────────────────────────────────────────
        toggle_box = layout.box()
        toggle_box.label(text="LIDS", icon='MESH_CUBE')

        # Amazon tuck-top lid toggle
        amz_hinge = bpy.data.objects.get("Amz_Lid_Hinge")
        if amz_hinge:
            lid_open = abs(amz_hinge.rotation_euler.x) > 0.01
            toggle_box.operator(
                "kitview.toggle_amazon_lid",
                text="Close Amazon Box" if lid_open else "Open Amazon Box",
                icon='TRIA_DOWN' if lid_open else 'TRIA_UP',
            )

        # Briefcase lid toggle
        hinge = bpy.data.objects.get("Lid_Hinge_Pivot")
        if hinge:
            is_open = abs(hinge.rotation_euler.x) > 0.01
            toggle_box.operator(
                "kitview.toggle_lid",
                text="Close Briefcase" if is_open else "Open Briefcase",
                icon='TRIA_DOWN' if is_open else 'TRIA_UP',
            )

        # ── VISIBILITY ─────────────────────────────────────────────────
        vis_box = layout.box()
        vis_box.label(text="VISIBILITY", icon='HIDE_OFF')

        # Amazon box visibility toggle
        amz_wall = bpy.data.objects.get("Amazon_Box_Wall_Front")
        amz_visible = amz_wall and not amz_wall.hide_viewport
        vis_box.operator(
            "kitview.toggle_amazon_box",
            text="Hide Amazon Box" if amz_visible else "Show Amazon Box",
            icon='HIDE_OFF' if amz_visible else 'HIDE_ON',
        )

        # Copy text toggle
        font_objects = [o for o in bpy.data.objects if o.type == 'FONT']
        any_copy_visible = any(not o.hide_viewport for o in font_objects) if font_objects else False
        vis_box.operator(
            "kitview.toggle_copy",
            text="Hide Copy Text" if any_copy_visible else "Show Copy Text",
            icon='HIDE_OFF' if any_copy_visible else 'HIDE_ON',
        )

        # ── CAMERA GROUPS ──────────────────────────────────────────────
        for group_label, cameras in self.camera_groups:
            cam_box = layout.box()
            cam_box.label(text=group_label, icon='CAMERA_DATA')
            for cam_name, display_name in cameras:
                row = cam_box.row()
                op = row.operator(
                    "kitview.switch_camera",
                    text=display_name,
                    icon='RESTRICT_RENDER_OFF' if cam_name == active_name else 'CAMERA_DATA',
                )
                op.camera_name = cam_name
                if cam_name == active_name:
                    row.alert = True


# ── Register ────────────────────────────────────────────────────────────────
bpy.utils.register_class(KITVIEW_OT_switch_camera)
bpy.utils.register_class(KITVIEW_OT_toggle_lid)
bpy.utils.register_class(KITVIEW_OT_toggle_copy)
bpy.utils.register_class(KITVIEW_OT_toggle_ground)
bpy.utils.register_class(KITVIEW_OT_toggle_amazon_lid)
bpy.utils.register_class(KITVIEW_OT_toggle_amazon_box)
bpy.utils.register_class(KITVIEW_PT_camera_panel)

print("=" * 50)
print("  Kit Views panel v6 registered!")
print("  Press N → 'Kit Views' tab in 3D viewport")
print("=" * 50)
