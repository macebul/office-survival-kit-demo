# Office Survival Kit — Blender Session Briefing v2

**Purpose:** Hand this document to Claude in any Blender modeling session. It contains everything needed to understand the product and continue 3D work without re-explaining the project.

This document derives from the Packaging Spec (structure/interior), Exterior Spec (exterior surfaces), and Physical Dimensions Spec (measurements). If any details here conflict with those documents, the source documents are authoritative.

**v2 changes (March 11, 2026):** Complete rewrite for 2-zone side-by-side layout. Box resized to 14" × 11.5" × 5.0". Binder rings, Tray 3, and binder pages removed. Mug compartment, divider wall, compartment cover, coil-bound booklets, and die-cut recesses added. Booking frame corrected from lid cutout to separate removable object. See Authority Block for full change list.

---

## What This Product Is

A gag gift kit sold on Amazon. It looks like a professional briefcase on the outside. When opened, the interior reveals a two-zone layout — stacked trays with die-cut recesses (Pelican case style) in the front zone and a hidden mug compartment in the back zone. The theme is that office life is a prison sentence.

---

## Scale & Coordinate System

- **1 Blender Unit = 1 inch** (all measurements in inches)
- Case lies flat on a table when in use. Lid opens upward (+Z direction).

| Axis | Direction | Size |
|------|-----------|------|
| X | Length (left → right) | 14.0" |
| Y | Width (front → back; back wall is -Y; handle/clasp wall is +Y) | 11.5" |
| Z | Depth (bottom → top when lying flat) | 5.0" |

**Orientation when lying flat, user looking down:**
- +Y wall = FRONT FACE — faces user — handle, clasps, magnets
- -Y wall = BACK WALL — farthest from user — lid hinge
- +Z = TOP (lid) — main label, stamp, evidence tag — NO hardware
- Z = 0 = BOTTOM (base)

---

## Box Dimensions

| Component | Value | Status |
|-----------|-------|--------|
| Outer box | 14.0" × 11.5" × 5.0" | WORKING ESTIMATE |
| Wall/lid/base thickness | 0.25" | — |
| Interior | 13.5" × 11.0" × 4.5" | Derived |
| Front zone depth (F to B) | ~6.5" | — |
| Divider wall thickness | ~0.25" | — |
| Back zone depth (F to B) | ~4.25" | — |
| Tray exterior footprint | ~13.5" × ~6.5" | — |

*All box dimensions are WORKING ESTIMATES — proportions are confirmed directionally but exact numbers may shift with sourcing. For derived interior dimensions, structural thicknesses, and stack math, see Dimensions Spec.*

### Proportion Notes
- Front face (14" × 5.0") = 2.8:1 ratio — reads as a slim attaché ✓
- Lid surface (14" × 11.5") = 1.22:1 ratio — nearly square, wide footprint ✓
- This case is flatter than the previous version — slim professional briefcase proportions, not a deep field kit

### Interior Layout (plan view)

```
         ← 14.0" (X axis) →
    ┌─────────────────────────────────────────────┐
    │             BACK ZONE (hidden)              │  ~4.25" (-Y)
    │  [Passport]   [MUG on side]   [Yard Pass]   │
    │      (handle to side, die-cut foam)          │
    │          (lift-off cover on top)              │
    ├── DIVIDER WALL (full height, ~0.25") ────────┤
    │             FRONT ZONE (visible)             │  ~6.5" (+Y)
    │  Booklet 1 → Tray 1 → Booklet 2 → Tray 2   │
    │      (die-cut recesses, Pelican case style)  │
    └─────────────────────────────────────────────┘
              ↑ FRONT FACE (+Y, handle)
```

---

## Exterior Features

### Front Face (+Y wall) — 14" × 5.0"

| Feature | Description |
|---------|-------------|
| Handle | Centered on X, vertically centered on face (Z = 2.5"), 3.5" span, arches upward. Die-cut cardboard, duct tape wrapped. |
| Clasps | Same face as handle, flanking center at X = ±4.0". Printed directly on box (flat graphics only — no embossing, no physical hardware). |
| IT Asset Tag | Small institutional label, spread across surface (not clustered near handle). |
| INSPECTED BY: GARY | QC sticker, spread across surface. |
| FRAGILE | Rubber stamp, spread across surface. |
| Closure | 4 neodymium disc magnets (~10mm) along 14" front edge. Two behind clasp graphics, two spaced between. Hidden. |
| Finish | Matte black. |

*Note: Front face is shorter (5.0" vs. old 6.5") — elements need tighter vertical spacing. Handle arch must be lower-profile to fit proportionally.*

### Lid / Top Surface (+Z face) — 14" × 11.5"

| Feature | Description |
|---------|-------------|
| Exterior label | Cream rectangle, slightly off-center, contains kit name + tagline. |
| Rubber stamp | "CLEARED FOR OFFICE USE", red, overlapping label, slight angle, distressed ink texture. |
| Barcode tag | Small cream tag, "CASE NO. 9-5". |
| THIS SIDE UP | Small directional label. |
| Finish | Matte black base. Satin finish on applied elements (stickers, labels). |

*Note: Lid is significantly wider (11.5" vs. old 8.0") — label and stamp have more room to spread. Adjust element spacing for wider surface.*

### Back Face (-Y wall) — 14" × 5.0"

| Feature | Description |
|---------|-------------|
| Nutrition Facts cluster | 6 elements (parody nutrition label cluster). |
| Lid hinge | Along top edge. |

### Bottom Surface (Z=0 face) — 14" × 11.5"

| Feature | Description |
|---------|-------------|
| NOTICE | Printed element. |
| Margaritaville sticker | Applied sticker. |
| NOT THIS SIDE UP | Directional label (contradicts lid). |
| VOID IF OPENED | Printed element. |

### Left Edge (-X wall) — 11.5" × 5.0"

| Feature | Description |
|---------|-------------|
| MONDAY | Ransom note style lettering. |

### Right Edge (+X wall) — 11.5" × 5.0"

| Feature | Description |
|---------|-------------|
| Oval travel sticker cluster | Cluster of oval travel-style stickers. |

**CRITICAL:** Handle and clasps are both on the FRONT FACE (+Y). The top surface (+Z) carries the main label, rubber stamp, evidence tag, and THIS SIDE UP label — no hardware.

---

## Interior Features

| Feature | Description |
|---------|-------------|
| Divider wall | Full height (floor to lid), ~0.25" thick, runs full 13.5" width (X axis), separates front and back zones |
| Tray floors | Dark charcoal with die-cut recesses (Pelican case style) — molded cutouts for each item |
| Tray surface graphics | Chalk-outline silhouettes + item name + short tagline printed per recess |
| Tray accents | Orange (#e85d04) |
| Back zone | Die-cut foam padding (dark charcoal/black), holds mug + flanking items |
| Compartment cover | Lift-off rigid paperboard (~0.0625" thick, ~13.5" × ~4.0"), rests on top of back zone |
| Lid interior | Dark charcoal with booking frame resting on stack, and two pockets |

---

## Lid Interior

| Feature | Spec |
|---------|------|
| Surface | SOLID. No holes. No cutouts. Both sides are complete, unbroken surfaces. Printed copy outside pocket areas. |
| Pocket 1 | Horizontal — holds library check-in/check-out card (pre-filled fake names/dates, correctional themed) |
| Pocket 2 | Holds map (worldbuilding piece) |

**⚠️ CRITICAL: The lid is SOLID. There is no die-cut cutout, no rectangular hole, no opening of any kind through the lid. Every pre-v2 document describing a "die-cut cutout through the lid" is WRONG. Fix this wherever you encounter it.**

---

## Booking Frame — Separate Object

| Attribute | Spec |
|---|---|
| What it is | Separate removable rigid paperboard frame (~0.0625" thick, ~24pt) |
| Outer dimensions | ~11" × 9" |
| Inner opening | ~7" × 5" |
| Border width | ~2" all sides |
| Print — top border | "CORPORATE CORRECTIONAL FACILITY — BOOKING DEPT." |
| Print — bottom border | Case number |
| Print — left & right borders | Height rulers on BOTH vertical sides |
| Placement | Rests on top of Booklet 1 / tray stack. First object seen when lid is opened. Held in place by gravity only. |
| Use | Recipient picks up frame, holds it around their face for mugshot-style photo, then sets it aside. |

*In Blender: Model as a flat rectangular frame object sitting on the tray stack in the front zone. NOT part of the lid geometry.*

---

## Interior Zones — Front Zone

The front zone occupies ~6.5" of Y depth from the front inner wall to the divider wall. Trays are stacked vertically with coil-bound booklets between them. Trays are centered in the front zone (no ring clearance offset).

### Front Zone Stack (bottom → top)

| Layer | Approx. Height | Contents |
|-------|----------------|----------|
| **Tray 2** | ~1.0" | 7 items in die-cut recesses |
| **Booklet 2** | ~0.30" | Coil-bound, ~13" × 6.5", 6–8 pages |
| **Tray 1** | ~0.875" | 4 items in die-cut recesses |
| **Booklet 1** | ~0.25" | Coil-bound, ~13" × 6.5", 4–6 pages |
| **Booking frame** | ~0.0625" | Removable paperboard frame |

*Front zone total stack ≈ 2.95". Headroom to lid ≈ 2.05". For exact Z-start/Z-end positions, see Dimensions Spec.*

The front zone stack sits on the interior floor (Z = 0.25"). Tray 2 is on the bottom; Tray 1 is on top. Booklets rest between and on top of trays. The booking frame is the topmost object, resting on Booklet 1.

---

## Interior Zones — Back Zone (Hidden Mug Compartment)

The back zone occupies ~4.25" of Y depth from the divider wall to the back inner wall. Completely hidden while trays are in place. Revealed when Tray 2 is lifted out and the compartment cover is removed.

### Back Zone Contents

| Layer | Description |
|-------|-------------|
| **Floor** | Die-cut foam padding (dark charcoal/black), floor to near top of zone |
| **Mug** | "Mug Shot" — 3.5" dia × 3.5" H (4.0" with handle). Lying on its side, handle pointing to the side (parallel to base). Centered in zone. |
| **Passport** | "Corporate Parole Passport" — 5.0" × 3.5" × 0.25". Flanking mug, one side (left or right). |
| **Yard Pass** | 4.0" × 2.5" × 0.10". Flanking mug, opposite side from Passport. |
| **Compartment cover** | Lift-off rigid paperboard (~13.5" × ~4.0", ~0.0625" thick). Rests on top of back zone. Top surface: teaser copy. Underside: third narrative beat. Both sides printable. |

*Back zone is the tightest constraint. Total stack ≈ 4.69" within 5.0" case (≈ 0.31" clearance). Mug dimensions are WORKING ESTIMATE — confirm with sourcing. For full stack math, see Dimensions Spec.*

### Back Wall Interior

The interior surface of the back wall (-Y, above the foam) is printed with minimal institutional graphics — institutional seal, case number, or short OG character line.

---

## Tray 1 — First Day Issue (Top Tray, Revealed First)

**Tray exterior:** ~13.5" × ~6.5" | **Die-cut recesses, Pelican case style**

| Item | Internal Name | Dimensions | Recess Position |
|------|--------------|-----------|-----------------|
| Tactical pen | Cubicle Shank | 5.5" × 0.6" | Upper-left, horizontal |
| Temporary tattoo strip | Lifer Ink | 5.0" × 1.5" | Below pen, left |
| Notepad | Rap Sheet | 4.0" × 5.5" | Right zone, lying flat |
| Tattoo guide card | Tattoo Guide Card | TBD | Near tattoo strip |

Each recess has: chalk-outline silhouette of the item, item name printed, short tagline printed.

**Lift system:** Hybrid — decorative tab on back edge + finger notch (~1"–1.5") on front edge.

---

## Tray 2 — Arsenal (Bottom Tray, Revealed Second)

**Tray exterior:** ~13.5" × ~6.5" | **Die-cut recesses, Pelican case style**

| Item | Internal Name | Dimensions | Recess Position |
|------|--------------|-----------|-----------------|
| Tissue pack | Contraband Cry Rags | 3.0" × 3.0" × 0.75" | Row 1, left |
| Silicone wristband | Ankle Monitor | 3.0" × 3.0" coiled | Row 1, centre |
| Sticker strip | Turf Tags | 4.5" × 1.25" | Row 1, right |
| Paperclips | Snitch Switch | 3.5" × 0.6" | Row 2, left |
| Novelty eraser | Evidence Eraser | 2.0" × 0.75" | Row 2, centre |
| Ear plugs (pair) | Solitary | 2.0" × 1.0" | Row 2, right |
| Sticker guide card | Sticker Guide Card | TBD | Near sticker strip |

Each recess has: chalk-outline silhouette of the item, item name printed, short tagline printed.

**Lift system:** Hybrid — decorative tab on back edge + finger notch (~1"–1.5") on front edge.

---

## Booklets

| Attribute | Booklet 1 | Booklet 2 |
|---|---|---|
| Position | On top of Tray 1 | Between Tray 1 and Tray 2 |
| Dimensions | ~13" × 6.5" | ~13" × 6.5" |
| Pages | 4–6 | 6–8 |
| Thickness | ~0.25" | ~0.30" |
| Stock | 100–120lb cover / 80–100lb text | Same |
| Binding | Coil-bound | Coil-bound |
| Contains | Polaroids inside | Polaroids inside |
| Role | Intake / orientation | Escalation / incident |

*Booklets cover the full tray footprint. In Blender, model as flat rectangular solids with a visible coil spine along one edge.*

---

## Closure System

| Layer | Description |
|-------|-------------|
| **Magnets (everyday)** | 4 neodymium disc magnets (~10mm) along 14" front edge. Two behind clasp graphics, two spaced between. Hidden. |
| **Belly band (shipping)** | Printed paperboard, ~2"–3" tall. Wraps around case. Slides off as first unboxing step. One-time use. |
| **Snap-fit lip (optional)** | TBD — ask sourcing. Skip if cost-prohibitive. |

---

## Reveal Sequence (for camera animation reference)

| Step | Action | What's Visible |
|---|---|---|
| 0 | Slide off belly band | Case exterior |
| 1 | Open lid | Inside lid (pockets). Booking frame on top of stack. Back zone hidden behind divider. |
| 2 | Pick up booking frame | Mugshot photo prop |
| 3–4 | See + read Booklet 1 | Intake manual, polaroids |
| 5–6 | Set booklet aside, interact with Tray 1 | 4 die-cut recesses with items |
| 7–8 | Lift Tray 1, read Booklet 2 | Incident file, more polaroids |
| 9–10 | Set booklet aside, interact with Tray 2 | 7 die-cut recesses with items |
| 11 | Lift Tray 2 | Compartment cover visible — teaser copy |
| 12 | Lift off cover | Underside = third narrative beat. Mug in foam. Passport + Yard Pass flanking. |
| 13 | Remove items | "You've done your time." |
| 14 | See base | Closing message on interior floor |

---

## Materials (Blender)

| Material Name | Use | RGB |
|--------------|-----|-----|
| Matte_Black | Exterior, handle, lid outer | (0.03, 0.03, 0.03) rough=0.95 |
| Charcoal_Interior | Tray floors/walls, lid interior, divider wall | (0.07, 0.07, 0.09) rough=0.90 |
| Orange_Accent | Tabs, headers, recess outlines, accents | (0.91, 0.36, 0.02) rough=0.80 |
| Metal_Clasp | Clasp graphics (flat printed, not 3D hardware) | (0.72, 0.72, 0.75) metal=1.0 rough=0.20 |
| Cream_Label | Exterior label, barcode tag, pockets, booking frame | (0.95, 0.92, 0.82) rough=1.00 |
| Lid_Interior | Inside lid surface | (0.10, 0.10, 0.13) rough=0.90 |
| Item_Placeholder | Item proxy boxes in tray recesses | (0.22, 0.34, 0.50) rough=0.80 |
| Foam_Dark | Die-cut foam padding in back zone | (0.05, 0.05, 0.05) rough=0.98 |
| Booklet_Cover | Booklet cover stock | (0.88, 0.86, 0.80) rough=1.00 |
| Compartment_Cover | Lift-off cover (rigid paperboard) | (0.10, 0.10, 0.12) rough=0.90 |
| Duct_Tape_Gray | Handle wrap | (0.52, 0.52, 0.52) rough=0.95 |
| Rubber_Stamp_Red | "CLEARED FOR OFFICE USE" stamp | (0.58, 0.06, 0.06) rough=1.00 |

---

## Object Naming Convention

| Prefix | Type |
|--------|------|
| `Box_` | Exterior case panels |
| `Case_Lid` | Lid panel |
| `Lid_` | Lid interior elements (pockets, surface print) |
| `Ext_Panel_` | Exterior decorative panel details |
| `Tray_1_` / `Tray_2_` | Tray bodies and recess geometry |
| `Item_` | Item placeholder boxes |
| `Booklet_1_` / `Booklet_2_` | Coil-bound booklets |
| `Booking_Frame_` | Removable mugshot frame |
| `Divider_Wall_` | Full-height wall between zones |
| `Compartment_` | Back zone mug compartment elements |
| `Compartment_Cover_` | Lift-off cover |
| `Foam_` | Die-cut foam padding geometry |
| `Handle_` | Handle components |
| `Clasp_` | Clasp graphics (printed, flat) |
| `Belly_Band_` | Shipping band |
| `Exterior_Label` | Front cream label |

---

## Starter Script

The v2 script (blender-v2.py) generates the current 2-zone layout at 14" × 11.5" × 5.0". Key features: two-zone Y split, divider wall, mug compartment with foam, two booklets, booking frame as separate object, 4 items in Tray 1, 7 items in Tray 2.

---

## Key Things Still Needed in Blender

- [ ] Bevel all exterior edges (0.1–0.15" bevel) — single biggest improvement to briefcase feel
- [ ] Lid hinged open for hero open view (angle TBD — lid backstop angle is removed from spec)
- [ ] Divider wall — full-height panel running full interior width, separating front and back zones
- [ ] Die-cut recess geometry on tray floors — molded cutouts for each item shape
- [ ] Chalk outline decals/textures inside each recess
- [ ] Orange lift tabs — hybrid: decorative on tray back edge + finger notch on front edge
- [ ] Duct tape texture / normal map on handle bar
- [ ] Mug compartment — die-cut foam block with mug-shaped cavity and flanking recesses
- [ ] Mug replaced with proper cylinder geometry + handle + print face (lying on side, handle to the side)
- [ ] Passport as thin stacked-page geometry with cover detail, standing in foam recess
- [ ] Yard Pass in foam recess opposite Passport
- [ ] Compartment cover — flat rigid slab sitting on top of back zone
- [ ] Booklet objects on trays — flat rectangular solids with coil spine detail
- [ ] Booking frame as separate rigid paperboard object resting on tray stack (NOT a lid cutout)
- [ ] Belly band wrapped around closed case (for closed-case shots)
- [ ] Exterior labels, stamp, and barcode on lid top surface (+Z) instead of front face
- [ ] Camera angles: closed 3/4, open overhead, open isometric, zone-by-zone reveals, compartment reveal

---

## What's Been REMOVED (do not model)

- Tray 3
- All D-ring / binder ring hardware
- Ring mounting spine
- Ring clearance zone
- Binder pages (hole-punched sheets, sections between trays)
- Polaroid sleeve in binder rings
- Lid backstop angle (100–105°)
- "Die-cut cutout through the lid" — the lid is SOLID
- Third booklet

---

## Brand Voice (for labels in model)

- Tone: Dry, institutional, prison/corporate parody
- Primary copy: "OFFICE SURVIVAL KIT / Standard issue for your corporate sentence."
- Interior accent: Orange (#e85d04)
- Exterior: Matte black, cream label, evidence-tag aesthetic
- Exterior label, stamp, and evidence tag are on the lid (top surface, +Z). Handle and clasps are on the front face (+Y). These are different surfaces.
- Tray recesses: Each item gets its name + a short tagline printed on the tray surface beside the chalk outline.
