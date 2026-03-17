"""
Office Survival Kit — Camera View Switcher (N-Panel Addon)
===========================================================
Run in Blender > Scripting workspace (Alt+P) to register the panel.
Press N in the 3D viewport → "Kit Views" tab to switch cameras.

Re-run this script anytime Blender restarts to restore the panel.
"""

import bpy
import math

# ── Unregister old version if it exists ─────────────────────────────────────
for cls_name in [
    "KITVIEW_OT_switch_camera",
    "KITVIEW_OT_toggle_lid",
    "KITVIEW_OT_toggle_copy",
    "KITVIEW_OT_toggle_ground",
    "KITVIEW_PT_camera_panel",
]:
    cls = getattr(bpy.types, cls_name, None)
    if cls:
        bpy.utils.unregister_class(cls)


# ── Visibility layers ───────────────────────────────────────────────────────
# Exterior lid objects — shown when lid closed (exterior views), hidden when open (interior views)
EXTERIOR_LID = [
    "Exterior_Label", "Exterior_Stamp", "Exterior_Barcode_Tag", "Ext_This_Side_Up",
    "Copy_Ext_MainLabel_Title", "Copy_Ext_MainLabel_Sub", "Copy_Ext_Stamp",
    "Copy_Ext_Barcode_Info", "Copy_Ext_ThisSideUp",
]

# Interior objects — hidden when viewing exterior, shown when viewing interior
INTERIOR_OBJECTS = [
    # Lid interior
    "Lid_Interior_Face", "Lid_Pocket_1_CheckIn_Card", "Lid_Pocket_2_Map",
    "Text_LidTitle", "Text_LidSubtitle", "Text_LidWarning",
    "Copy_LidPocket1_Label", "Copy_LidPocket2_Label",
    # Back wall interior text (institutional seal)
    "Copy_Interior_BackWall",
]

# Shipping belly band — always hidden (toggleable only via dedicated button, not yet implemented)
BELLY_BAND = [
    "Belly_Band_Back", "Belly_Band_Bottom", "Belly_Band_Front",
    "Belly_Band_Left", "Belly_Band_Right", "Belly_Band_Top",
    "Copy_BellyBand_Back", "Copy_BellyBand_Front", "Copy_BellyBand_Top",
]

# Objects that belong to each interior layer (hidden/shown when switching views)
TOP_LAYER = [
    "Interior_Cover",
    "Copy_IntCover_Title", "Copy_IntCover_Sub", "Copy_IntCover_Body",
    "Booking_Frame",
    "DocSet_1_BellyBand_Back", "DocSet_1_BellyBand_Front",
    "DocSet_1_BellyBand_Top", "DocSet_1_BinClip", "DocSet_1_Intake",
    "DocSet_2_BellyBand_Back", "DocSet_2_BellyBand_Front",
    "DocSet_2_BellyBand_Top", "DocSet_2_BinClip", "DocSet_2_Escalation",
    # Text on top layer
    "Text_Booking_Header", "Text_Booking_InmateNo", "Text_Booking_Date",
    "Copy_BookingFrame_CaseNo", "Orange_Pinstripe", "Ruler_Ticks",
    "Text_Ruler_1", "Text_Ruler_2", "Text_Ruler_3", "Text_Ruler_4",
    "Text_Ruler_5", "Text_Ruler_6", "Text_Ruler_7", "Text_Ruler_8",
    "Text_DocSet1_CaseFile", "Text_DocSet2_CaseFile",
]

TRAY1_LAYER = [
    "Tray_1_First_Day", "Tray_1_Tab_Front", "Tray_1_Tab_Back",
    "Item_Cubicle_Shank_Pen", "Item_Lifer_Ink_TattooGuide",
    "Item_Rap_Sheet_Notepad",
    "Tray1_Foam_Insert",
    # Text/labels on tray 1
    "Label_Tray1_Pen", "Label_Tray1_TattoosGuide", "Label_Tray1_Notepad",
    "Copy_Tray1_Pen_Label", "Copy_Tray1_Tattoos_Title", "Copy_Tray1_Tattoos_Sub",
    "Copy_Tray1_Notepad_Title", "Copy_Tray1_Notepad_Sub",
    "Copy_Tray1_TattooGuide", "Copy_Tray1_Tab",
]

TRAY2_LAYER = [
    "Tray_2_Arsenal", "Tray_2_Tab_Front", "Tray_2_Tab_Back",
    "Item_Evidence_Bag", "Item_Turf_Tags_StickerGuide", "Item_Cry_Rags",
    "Recess_Confiscated_Stapler",
    "Chalk_Stapler_Base", "Chalk_Stapler_Base_Inner",
    "Chalk_Stapler_Body", "Chalk_Stapler_Body_Inner",
    "Tray2_Foam_Insert",
    # Text/labels on tray 2
    "Label_Tray2_EvidenceBag", "Label_Tray2_TurfTags", "Label_Tray2_CryRags",
    "Label_Tray2_Stapler",
    "Copy_Tray2_EvidenceBag_Title", "Copy_Tray2_EvidenceBag_Sub",
    "Copy_Tray2_TurfTags_Title", "Copy_Tray2_TurfTags_Sub",
    "Copy_Tray2_CryRags_Title", "Copy_Tray2_CryRags_Sub",
    "Copy_Tray2_Stapler_Label", "Copy_Tray2_Stapler_Sub",
    "Copy_Tray2_Tab",
]

BACKZONE_COVER = [
    "Compartment_Cover", "Divider_Wall",
    "Copy_BackZone_Cover_Title", "Copy_BackZone_Cover_Sub",
]

BACKZONE_PADDING = [
    "Shredded_Paper_Fill",
]

BACKZONE_CONTENTS = [
    "Item_Mug_Shot_Mug", "Mug_Handle", "Mug_Note_Easter_Egg",
    "Item_Corporate_Parole_Passport",
    # Text on back zone contents
    "Copy_BackZone_Mug_Title", "Copy_BackZone_MugEasterEgg",
    "Copy_BackZone_Passport_Title", "Copy_BackZone_Passport_Sub",
]

# Shorthand for "all back zone objects"
BACKZONE_ALL = BACKZONE_COVER + BACKZONE_PADDING + BACKZONE_CONTENTS

# Map camera names to which layers should be VISIBLE
VISIBILITY_RULES = {
    "CAM_Int_Top":              [TOP_LAYER, TRAY1_LAYER, TRAY2_LAYER, BACKZONE_ALL],
    "CAM_Int_Tray1":            [TRAY1_LAYER, TRAY2_LAYER, BACKZONE_ALL],
    "CAM_Int_Tray2":            [TRAY2_LAYER, BACKZONE_ALL],
    "CAM_Int_BackZone_Covered": [BACKZONE_ALL],
    "CAM_Int_BackZone":         [BACKZONE_PADDING, BACKZONE_CONTENTS],
    "CAM_Int_BackZone_Contents":[BACKZONE_CONTENTS],
}

ALL_INTERIOR_LAYERS = (
    TOP_LAYER + TRAY1_LAYER + TRAY2_LAYER + BACKZONE_ALL
)


def _set_layer_visibility(camera_name):
    """Show/hide interior objects based on which camera is active."""
    if camera_name not in VISIBILITY_RULES:
        # Not an interior tray camera — show everything
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
    """Switch to the specified camera and enter camera view"""
    bl_idname = "kitview.switch_camera"
    bl_label = "Switch Camera"

    camera_name: bpy.props.StringProperty()

    def execute(self, context):
        cam = bpy.data.objects.get(self.camera_name)
        if cam and cam.type == 'CAMERA':
            context.scene.camera = cam
            # Force ALL 3D viewports back to camera perspective with clean state
            for area in context.screen.areas:
                if area.type == 'VIEW_3D':
                    for space in area.spaces:
                        if space.type == 'VIEW_3D':
                            space.lock_camera = False
                            r3d = space.region_3d
                            r3d.view_perspective = 'CAMERA'
                            # Reset viewport camera zoom/pan so free navigation
                            # doesn't bleed into the camera framing
                            r3d.view_camera_zoom = 0.0
                            r3d.view_camera_offset = (0.0, 0.0)

            # Open lid for interior views, close for exterior/hero
            hinge = bpy.data.objects.get("Lid_Hinge_Pivot")
            is_interior = self.camera_name.startswith("CAM_Int_")
            if hinge:
                if is_interior:
                    hinge.rotation_euler = (math.radians(110), 0, 0)
                else:
                    hinge.rotation_euler = (0, 0, 0)

            # Show/hide exterior lid objects (visible when closed, hidden when open)
            for name in EXTERIOR_LID:
                obj = bpy.data.objects.get(name)
                if obj:
                    obj.hide_viewport = is_interior
                    obj.hide_render = is_interior

            # Show/hide interior lid objects (hidden when closed, visible when open)
            for name in INTERIOR_OBJECTS:
                obj = bpy.data.objects.get(name)
                if obj:
                    obj.hide_viewport = not is_interior
                    obj.hide_render = not is_interior

            # Always keep belly band hidden during camera switches
            for name in BELLY_BAND:
                obj = bpy.data.objects.get(name)
                if obj:
                    obj.hide_viewport = True
                    obj.hide_render = True

            # Toggle interior layer visibility
            _set_layer_visibility(self.camera_name)

            self.report({'INFO'}, f"Switched to {self.camera_name}")
        else:
            self.report({'WARNING'}, f"Camera '{self.camera_name}' not found")
        return {'FINISHED'}


class KITVIEW_OT_toggle_lid(bpy.types.Operator):
    """Open or close the lid (0°=closed, 110°=leaning back past vertical)"""
    bl_idname = "kitview.toggle_lid"
    bl_label = "Toggle Lid"

    def execute(self, context):
        hinge = bpy.data.objects.get("Lid_Hinge_Pivot")
        if not hinge:
            self.report({'WARNING'}, "Lid_Hinge_Pivot not found")
            return {'CANCELLED'}

        is_open = abs(hinge.rotation_euler.x) > 0.01

        if is_open:
            hinge.rotation_euler = (0, 0, 0)
            self.report({'INFO'}, "Lid closed")
        else:
            # 0°=closed, 90°=vertical, 110°=leaning back 20° past vertical
            hinge.rotation_euler = (math.radians(110), 0, 0)
            self.report({'INFO'}, "Lid open (110°)")

        return {'FINISHED'}


class KITVIEW_OT_toggle_copy(bpy.types.Operator):
    """Toggle visibility of all copy/text objects (FONT type)"""
    bl_idname = "kitview.toggle_copy"
    bl_label = "Toggle Copy Text"

    def execute(self, context):
        # Skip belly band text — those are always hidden
        belly_band_names = set(BELLY_BAND)
        font_objects = [o for o in bpy.data.objects if o.type == 'FONT' and o.name not in belly_band_names]
        if not font_objects:
            self.report({'WARNING'}, "No text objects found")
            return {'CANCELLED'}

        # If any are visible, hide all; otherwise show all
        any_visible = any(not o.hide_viewport for o in font_objects)
        for o in font_objects:
            o.hide_viewport = any_visible
            o.hide_render = any_visible

        state = "hidden" if any_visible else "shown"
        self.report({'INFO'}, f"Copy text {state} ({len(font_objects)} objects)")
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

    # ── Camera groups — edit these to add/remove cameras ────────────────────
    camera_groups = [
        ("HERO", [
            ("Camera_Main", "3/4 Hero"),
        ]),
        ("EXTERIOR", [
            ("CAM_Ext_Front", "Front (+Y) — Handle"),
            ("CAM_Ext_Back", "Back (-Y) — Hinge"),
            ("CAM_Ext_Top", "Top (+Z) — Lid"),
            ("CAM_Ext_Bottom", "Bottom (-Z)"),
            ("CAM_Ext_Left", "Left (-X)"),
            ("CAM_Ext_Right", "Right (+X)"),
        ]),
        ("INTERIOR", [
            ("CAM_Int_Lid", "Lid Interior"),
            ("CAM_Int_Top", "Top View — Frame + Docs"),
            ("CAM_Int_Tray1", "Tray 1 — First Day"),
            ("CAM_Int_Tray2", "Tray 2 — Arsenal"),
            ("CAM_Int_BackZone_Covered", "Back Zone — Covered"),
            ("CAM_Int_BackZone", "Back Zone — Open"),
            ("CAM_Int_BackZone_Contents", "Back Zone — Contents"),
        ]),
    ]

    def draw(self, context):
        layout = self.layout
        active_cam = context.scene.camera
        active_name = active_cam.name if active_cam else ""

        # Lid toggle
        hinge = bpy.data.objects.get("Lid_Hinge_Pivot")
        if hinge:
            is_open = abs(hinge.rotation_euler.x) > 0.01
            lid_box = layout.box()
            lid_box.operator(
                "kitview.toggle_lid",
                text="Close Lid" if is_open else "Open Lid",
                icon='TRIA_DOWN' if is_open else 'TRIA_UP',
            )

        # Toggle buttons
        toggle_box = layout.box()
        toggle_box.label(text="TOGGLES", icon='MODIFIER')

        # Copy text toggle
        font_objects = [o for o in bpy.data.objects if o.type == 'FONT']
        any_copy_visible = any(not o.hide_viewport for o in font_objects) if font_objects else False
        toggle_box.operator(
            "kitview.toggle_copy",
            text="Hide Copy Text" if any_copy_visible else "Show Copy Text",
            icon='HIDE_OFF' if any_copy_visible else 'HIDE_ON',
        )

        # Ground plane toggle
        ground = bpy.data.objects.get("Ground_Plane")
        ground_visible = ground and not ground.hide_viewport
        toggle_box.operator(
            "kitview.toggle_ground",
            text="Hide Ground" if ground_visible else "Show Ground",
            icon='MESH_PLANE' if ground_visible else 'MESH_GRID',
        )

        # Camera buttons
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
bpy.utils.register_class(KITVIEW_PT_camera_panel)

print("=" * 50)
print("  Kit Views panel registered!")
print("  Press N → 'Kit Views' tab in 3D viewport")
print("=" * 50)
