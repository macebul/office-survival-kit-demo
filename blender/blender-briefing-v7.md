# Office Survival Kit — Blender Model Briefing

**Version:** 7
**Date:** June 22, 2026
**Status:** Current — this is the definitive reference for the Blender model
**Model File:** `Office Survival Kit.blend`

**Supersedes:**
- blender-briefing-v6.md (tray-based model — obsolete)
- blender-v5.py (tray-based generator script — obsolete)
- All files in `blender/Blender Creation Docs/` (archived)

**Source Specs:**
- `product/specs/packaging-spec-v11.md` — single source of truth for the physical product
- `product/interior-layout-spec.md` — detailed fit math and stacking diagrams

---

## 1. What This Model Represents

The Blender model is a **blister pack / card layer** model of the Office Survival Kit interior. It shows:

- A briefcase container (bottom + lid)
- 7 L-shaped blister card layers stacked flat inside
- 1 mug box sitting beside the stack in the top-left corner
- Evidence tags (patch + ribbon + tag) on each layer
- Layer labels (title + subtitle text)

This replaced the older tray-based model (two Pelican-style die-cut trays, compartment cover, hidden mug compartment) in June 2026. The tray model is permanently retired.

---

## 2. Unit System

- Blender internal units: **meters** (Blender default)
- Design units: **inches**
- Conversion: `INCH = 0.0254` (meters per inch)
- All dimensions in this document are in **inches**
- Vertex coordinates stored in meters; divide by 0.0254 to get inches

---

## 3. Scene Structure

### Collections

```
Scene Collection
├── Briefcase           (3 objects: Briefcase_Bottom, Briefcase_Bottom.001, Briefcase_Lid)
├── Blister_Layers      (parent collection — 0 direct objects)
│   ├── L1_Contraband   (7 objects)
│   ├── L2_CellTalk     (7 objects)
│   ├── L3_RapSheets    (7 objects)
│   ├── L4_TurfTags     (7 objects)
│   ├── L5_SweetNothings (7 objects)
│   ├── L6_LiferInk     (7 objects)
│   ├── L7_CubicleShank (7 objects)
│   └── MugBox          (1 object: MugBox_MugShot)
├── Cameras             (3 objects: Cam_Hero34, Cam_TopDown, Cam_Target)
├── Lights              (2 objects: Sun_Light, Fill_Light)
└── Tabs                (23 objects: layer tab labels)
```

### Object Counts

| Type | Count |
|------|-------|
| MESH | 46 |
| FONT | 30 |
| CAMERA | 2 |
| EMPTY | 1 |
| LIGHT | 2 |
| **Total** | **81** |

### Per-Layer Object Pattern (7 objects each)

Each layer collection (L1 through L7) contains exactly 7 objects:

| Object | Type | Naming Pattern |
|--------|------|---------------|
| Card backing | MESH | `L{n}_{Name}_Card` |
| Blister bubble | MESH | `L{n}_{Name}_Blister` |
| Title label | FONT | `BLabel_T_{Name}` |
| Subtitle label | FONT | `BLabel_S_{Name}` |
| Evidence tag patch | MESH | `EvidenceTag_Patch_L{n}` |
| Evidence tag ribbon | MESH | `EvidenceTag_Ribbon_L{n}` |
| Evidence tag | MESH | `EvidenceTag_Tag_L{n}` |

---

## 4. Dimensions — Briefcase

| Measurement | Value | Notes |
|-------------|-------|-------|
| Exterior X (length) | 14.000" | X: 0.000 → 14.000 |
| Exterior Y (width) | 11.500" | Y: 0.000 → 11.500 |
| Exterior Z (depth) | 5.000" | Z: 0.000 → 5.000 |
| Wall thickness | 0.250" | All sides |
| Interior X | 13.500" | X: 0.250 → 13.750 |
| Interior Y | 11.000" | Y: 0.250 → 11.250 |
| Interior Z | 4.500" | Z: 0.250 → 4.750 |

### Briefcase Objects

- `Briefcase_Bottom` — main briefcase body (bottom + walls)
- `Briefcase_Bottom.001` — interior detail/floor
- `Briefcase_Lid` — hinged lid (toggled by Kit Views panel)

---

## 5. Dimensions — L-Shaped Card Backing

All 7 cards share the same L-shaped die-cut. Clearance from interior walls is 0.125" on all sides.

### Card Extents

| Edge | Position | Notes |
|------|----------|-------|
| Left | X = 0.375" | 0.125" clearance from left wall |
| Right | X = 13.625" | 0.125" clearance from right wall |
| Front (clasp) | Y = 0.375" | 0.125" clearance from front wall |
| Back (hinge) | Y = 11.125" | 0.125" clearance from back wall |
| Card width | 13.250" | |
| Card height | 10.750" | |
| Card thickness | 0.025" | 18pt paperboard |

### L-Shape Notch (Mug Box Cutout)

The notch is in the top-left corner (small X, large Y) to clear the mug box.

| Measurement | Value |
|-------------|-------|
| Notch corner | X = 4.500", Y = 6.000" |
| Notch width (X) | 4.125" (0.375 → 4.500) |
| Notch height (Y) | 5.125" (6.000 → 11.125) |

### Zones

| Zone | X Range | Y Range | Dimensions |
|------|---------|---------|------------|
| Zone A (main) | 0.375 → 13.625 | 0.375 → 6.000 | 13.250" × 5.625" |
| Zone B (beside mug) | 4.500 → 13.625 | 6.000 → 11.125 | 9.125" × 5.125" |

**Note:** The current model notch dimensions (4.125" × 5.125") differ from the original spec (4.75" × 3.75"). The model was corrected to properly clear the mug box with appropriate clearance. The spec documents should be updated to match these corrected values.

---

## 6. Dimensions — Mug Box

| Measurement | Value | Notes |
|-------------|-------|-------|
| X extent | 0.375" → 4.375" | Width = 4.000" |
| Y extent | 6.125" → 11.125" | Depth = 5.000" |
| Z extent | 0.250" → 4.250" | Height = 4.000" |
| Clearance to left wall | 0.125" | |
| Clearance to back wall | 0.125" | |
| Clearance to right (cards) | 0.125" | Mug box at X=4.375, notch at X=4.500 |

The mug box sits on the briefcase floor (Z = 0.250") in the top-left corner, beside the blister card stack. It occupies the same footprint as the card notch.

---

## 7. Dimensions — Blister Bubbles

Each layer's blister bubble sits on top of its card backing. Bubbles face up (toward the lid).

| Layer | Item | Blister X Range | Blister Y Range | Blister Width | Blister Depth | Blister Height (Z) | Z Range |
|-------|------|----------------|----------------|---------------|---------------|---------------------|---------|
| L1 | Contraband | 6.625 → 11.125 | 2.875 → 4.875 | 4.500" | 2.000" | 0.400" | 0.275 → 0.675 |
| L2 | Cell Talk | 5.075 → 8.875 | 2.475 → 5.275 | 3.800" | 2.800" | 0.800" | 0.725 → 1.525 |
| L3 | Rap Sheets | 1.475 → 5.275 | 2.475 → 5.275 | 3.800" | 2.800" | 0.800" | 1.575 → 2.375 |
| L4 | Turf Tags | 3.650 → 10.350 | 0.837 → 5.537 | 6.700" | 4.700" | 0.150" | 2.425 → 2.575 |
| L5 | Sweet Nothings | 8.475 → 12.275 | 2.475 → 5.275 | 3.800" | 2.800" | 0.800" | 2.625 → 3.425 |
| L6 | Lifer Ink | 3.650 → 10.350 | 0.837 → 5.537 | 6.700" | 4.700" | 0.150" | 3.475 → 3.625 |
| L7 | Cubicle Shank | 3.975 → 9.975 | 3.875 → 4.875 | 6.000" | 1.000" | 0.650" | 3.675 → 4.325 |

### Blister Stagger Pattern

Deep blisters (L2, L3, L5 at 0.800") are positioned in different X regions of Zone A to prevent stacking instability:
- L2: Center (5.075 → 8.875)
- L3: Left (1.475 → 5.275)
- L5: Right (8.475 → 12.275)

Flat blisters (L4, L6 at 0.150") span most of Zone A width and act as leveling layers.

---

## 8. Stacking Plan (Z Heights)

| Layer | Item | Card Z (bottom) | Blister Z (top) | Thickness |
|-------|------|-----------------|-----------------|-----------|
| Base | Briefcase floor | 0.250" | — | — |
| L1 | Contraband | 0.250" | 0.675" | 0.45" |
| L2 | Cell Talk | 0.700" | 1.525" | 0.85" |
| L3 | Rap Sheets | 1.550" | 2.375" | 0.85" |
| L4 | Turf Tags | 2.400" | 2.575" | 0.20" |
| L5 | Sweet Nothings | 2.600" | 3.425" | 0.85" |
| L6 | Lifer Ink | 3.450" | 3.625" | 0.20" |
| L7 | Cubicle Shank | 3.650" | 4.325" | 0.70" |

**Stack top:** 4.325" (Z)
**Lid interior:** ~4.750" (Z)
**Clearance to lid:** ~0.425"

---

## 9. Evidence Tags

Each layer has 3 evidence tag objects positioned at the **top/hinge edge** of the card (high Y values, near the back wall):

| Component | Approx Position (L1 example) |
|-----------|------------------------------|
| Patch (adhesive) | X: 8.375 → 9.375, Y: 10.250 → 10.750 |
| Ribbon | X: 8.625 → 9.125, Y: 9.125 → 10.250 |
| Tag | X: 7.875 → 9.875, Y: 7.875 → 9.125 |

Evidence tags sit at the Z level of their respective card.

---

## 10. Cameras

### Cam_Hero34 (Perspective)

| Attribute | Value |
|-----------|-------|
| Location | (-6.00", -6.00", 16.00") |
| Focal length | 45mm |
| Constraint | Track To → Cam_Target |
| Purpose | Hero 3/4 view of the briefcase from front-left, looking down |

### Cam_TopDown (Orthographic)

| Attribute | Value |
|-----------|-------|
| Location | (7.00", 5.75", 24.00") |
| Ortho scale | 18.00" |
| Constraint | Track To → Cam_Target |
| Purpose | Plan view, showing interior layout from directly above |

### Cam_Target (Empty)

| Attribute | Value |
|-----------|-------|
| Location | (7.00", 5.75", 2.50") |
| Purpose | Tracking target for both cameras (center of briefcase, mid-height) |

---

## 11. Lighting

| Light | Type | Location | Energy |
|-------|------|----------|--------|
| Sun_Light | SUN | (11.81", -7.87", 19.69") | 2.0 |
| Fill_Light | SUN | (-7.87", 11.81", 15.75") | 0.8 |

---

## 12. Materials (29 total)

| Category | Materials |
|----------|-----------|
| Cards | L1_Contraband_Mat through L7_CubicleShank_Mat (7) |
| Blisters | Blister_L1 through Blister_L7 (7) |
| Evidence tags | EvidenceTag_Patch_Mat, EvidenceTag_Ribbon_Mat, EvidenceTag_Tag_Mat (3) |
| Briefcase | Case_Exterior, Lid_Material (2) |
| Mug box | MugBox_Material (1) |
| Layer tabs | Tab_L1 through Tab_L7 (7) |
| Text | Text_Black, Text_Gray (2) |

---

## 13. Kit Views N-Panel (v10)

The file `blender/kit_views_panel.py` provides a Blender N-panel for interactive visualization.

### How to Load

1. Open the .blend file
2. Go to Scripting workspace
3. Open `blender/kit_views_panel.py`
4. Press Alt+P to run
5. In the 3D viewport, press N → click "Kit" tab

### Panel Features

**Camera Views:**
- Hero 3/4 — switches to Cam_Hero34
- Top-Down — switches to Cam_TopDown
- Free Orbit — exits camera lock for free navigation

**Layer Visibility:**
- Show All — resets all layers + lid to visible
- Lid toggle — show/hide Briefcase_Lid
- Per-layer toggles (L7 down to L1) — each has:
  - Eye icon button (toggle visibility)
  - Named button (toggle visibility)
  - Peel-to button (hide everything above this layer)
- MugBox toggle

### Scene Requirements for Panel

The panel expects these exact names:

| Element | Required Name |
|---------|---------------|
| Collection (parent) | `Blister_Layers` |
| Layer collections | `L1_Contraband`, `L2_CellTalk`, `L3_RapSheets`, `L4_TurfTags`, `L5_SweetNothings`, `L6_LiferInk`, `L7_CubicleShank` |
| Mug collection | `MugBox` |
| Cameras | `Cam_Hero34`, `Cam_TopDown` |
| Lid object | `Briefcase_Lid` |

---

## 14. Coordinate System Reference

```
                Y = 11.500" (exterior back / hinge edge)
                Y = 11.250" (interior back wall)
                Y = 11.125" (card/mug back edge)
    ┌───────────────────────────────────────┐
    │                                       │
    │  MugBox         Zone B                │
    │  X: 0.375-4.375 X: 4.500-13.625      │
    │  Y: 6.125-11.125 Y: 6.000-11.125     │   Y axis
    │                                       │   ↑
    ├────────────┘                          │   │
    │                                       │   │
    │  Zone A                               │   │
    │  X: 0.375-13.625                      │
    │  Y: 0.375-6.000                       │
    │                                       │
    └───────────────────────────────────────┘──→ X axis
    X = 0          X = 14.000"

    Y = 0 (exterior front / clasp edge)
    Y = 0.250" (interior front wall)
    Y = 0.375" (card front edge)

    Z = 0 (exterior bottom)
    Z = 0.250" (interior floor / card base)
    Z = 4.750" (interior ceiling)
    Z = 5.000" (exterior top)
```

**Orientation (matching physical product):**
- X axis = briefcase length (left to right, 14")
- Y axis = briefcase depth (clasp edge to hinge edge, 11.5")
- Z axis = briefcase height (bottom to lid, 5")
- Handle/clasp edge is at Y = 0 (front)
- Hinge edge is at Y = 11.5" (back)

---

## 15. Known Discrepancies with Spec Documents

The following differences exist between the current Blender model and the spec documents. The **model values are correct** — the specs need updating.

| Item | Spec Value | Model Value | Notes |
|------|-----------|-------------|-------|
| Card notch dimensions | 4.75" × 3.75" | 4.125" × 5.125" | Model corrected to properly clear mug box |
| Card Zone A height | 7.00" | 5.625" | Changed due to notch correction |
| Card Zone B width | 8.50" | 9.125" | Changed due to notch correction |
| Card Zone B height | 3.75" | 5.125" | Changed due to notch correction |
| Evidence tag position | Bottom/clasp edge | Top/hinge edge | Moved per user direction |

---

## 16. Changelog

| Version | Date | Changes |
|---------|------|---------|
| v7 | June 22, 2026 | New document for blister/card layer model. Replaces v6 (tray-based, obsolete). Documents current .blend file state with all corrected dimensions, simplified cameras (2 cameras + free orbit), evidence tag positions, and Kit Views panel v10. |
| v6 | March 2026 | Tray-based model — **OBSOLETE**. Described Amazon box, two stacking trays, compartment cover, 5 camera views, tray toggles. |

---

*End of document.*
