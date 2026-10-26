# Office Survival Kit — Physical Dimensions & Sourcing Spec

**Last Updated:** March 11, 2026
**Version:** 7
**Status:** Working Draft — pending sourcing confirmation
**Purpose:** Complete physical dimensions for every component. Ready to hand to sourcing.

**Document Scope:** This document owns all MEASUREMENTS — box dimensions, structural thicknesses, component dimensions, stack math, coordinates, item working dimensions, and derived positions. For DESIGN DECISIONS (reveal sequence, color scheme, aesthetic direction, narrative structure, copy assignments), see the Packaging Spec. Where both documents state a value, the designated owner is authoritative.

> **For sourcing partners:** This document contains all physical measurements for quoting. Items marked [WORKING ESTIMATE] need confirmation before production tooling. See "Key Questions for Sourcing" at the end for priority items.

**⚠️ MAJOR LAYOUT CHANGE (v6):** Interior redesigned from a 3-tray vertical stack with binder rings to a **2-zone side-by-side layout with a hidden mug compartment.** All binder ring hardware, Tray 3, and three-section binder pages have been removed. See changelog for full summary.

---

## Controlling Constraint: The Mug

All compartment and case depth dimensions flow from the mug spec. Lock this first.

| Attribute | Working Spec | Notes |
|-----------|-------------|-------|
| Type | 11oz enamel camp mug | Enamel-coated steel preferred; stainless acceptable |
| Outer diameter | 3.5" | Drives back zone height requirement [WORKING ESTIMATE — confirm with sourcing] |
| Height (upright) | 3.5" | Drives back zone length requirement [WORKING ESTIMATE — confirm with sourcing] |
| Orientation in compartment | On its side, handle to the side | Handle parallel to base, not protruding upward |
| Handle clearance needed | 0.5" lateral | Handle protrudes to one side when lying down |

**Mug footprint when lying on side (handle to side):** 3.5" tall × 4.0" wide (diameter + handle clearance) × 3.5" deep (mug height)

*Confirm exact mug dimensions with sourcing before finalizing box and compartment dimensions.*

---

## Box — Outer Dimensions

| Dimension | Size | Controlled By |
|-----------|------|--------------|
| **Length (X)** | 14.0" | Extra inch over v5/v6 for tray copy space [WORKING ESTIMATE — confirm with sourcing] |
| **Width (Y)** | 11.5" | Front tray zone + divider wall + back mug compartment. Sized to give true 6.5" front zone interior after walls. [WORKING ESTIMATE — confirm with sourcing] |
| **Depth (Z)** | 5.0" | Back zone stack height — mug diameter + padding + cover + lid + manufacturing tolerance (see Stack Calculation) [WORKING ESTIMATE — confirm with sourcing] |

**Proportion check:**
- Front face (14" × 5.0") = 2.8:1 ratio ✓
- Top face (14" × 11.5") = 1.22:1 ratio ✓

**Material:** 24pt paperboard, matte black exterior finish

### Structural Thicknesses

| Component | Thickness | Notes |
|-----------|-----------|-------|
| Base (floor) | 0.25" | 24pt paperboard, multi-layer for structural support |
| Lid | 0.25" | 24pt paperboard |
| Walls (all four) | 0.25" | 24pt paperboard |
| Tray floors | 0.125" | 18pt paperboard |
| Divider wall | 0.25" | Rigid paperboard (18pt or 24pt — confirm with sourcing) |

### Closure System

**Layer 1: Magnetic Closure** — 4 neodymium disc magnets embedded along 14" front edge. Two positioned behind printed clasp graphics, two spaced evenly between.

| Magnet | X Position (along 14" edge) | Notes |
|--------|----------------------------|-------|
| Magnet 1 (behind left clasp) | X ≈ −4.5" | Behind printed clasp graphic [WORKING ESTIMATE] |
| Magnet 2 (inner left) | X ≈ −1.5" | Evenly spaced [WORKING ESTIMATE] |
| Magnet 3 (inner right) | X ≈ +1.5" | Evenly spaced [WORKING ESTIMATE] |
| Magnet 4 (behind right clasp) | X ≈ +4.5" | Behind printed clasp graphic [WORKING ESTIMATE] |

**Layer 2: Belly Band** — Printed paperboard band wrapping around the closed case.

| Attribute | Spec |
|-----------|------|
| Height | 2"–3" [WORKING ESTIMATE — confirm with sourcing] |
| Material | 80–100lb cover stock |
| Print | Custom copy both sides, full color |
| Use | One-time — customer removes on first open |

**Layer 3: Snap-Fit Lip (Optional)** — Molded lip on lid front edge snaps over base front wall. Ask sourcing for feasibility and cost. Skip if cost-prohibitive.

### Exterior Hardware — Front Face (+Y, 14" × 5.0")

| Feature | Position | Spec |
|---------|----------|------|
| Handle | Front face (+Y), centered on X, vertically centered on face (Z = BOX_D / 2 = 2.5") [WORKING ESTIMATE] | Die-cut cardboard, 3.5" span, duct tape wrapped, arches upward. |
| Clasps | Front face (+Y), flanking handle, X = ±4.5" [WORKING ESTIMATE] | Printed directly on box. Flat printed graphics only — no embossing. Magnets 1 & 4 hidden behind these. |
| IT Asset Tag | Front face (+Y) | Small institutional label, spread across surface. |
| INSPECTED BY: GARY | Front face (+Y) | QC sticker, spread across surface. |
| FRAGILE | Front face (+Y) | Rubber stamp, spread across surface. |

### Exterior Labels — Lid / Top Surface (+Z, 14" × 11.5")

| Feature | Position | Spec |
|---------|----------|------|
| Main label | Lid (+Z), slightly off-center | Cream/off-white, kit name + tagline. |
| Rubber stamp | Lid (+Z), overlapping label at slight angle | "CLEARED FOR OFFICE USE", red. |
| Barcode/evidence tag | Lid (+Z), lower area | Cream, "CASE NO. 9-5". |
| THIS SIDE UP | Lid (+Z) | Small directional label (probably). |

**CRITICAL:** Handle, clasps, and three small labels/stamps (IT Asset Tag, INSPECTED BY: GARY, FRAGILE) are on the FRONT FACE (+Y). Main product label, rubber stamp, and evidence tag are on the LID/TOP SURFACE (+Z). These are different surfaces.

### Surface Dimensions Summary

| Surface | Dimensions |
|---------|-----------|
| Lid (top, +Z) | 14" × 11.5" |
| Front face (+Y) | 14" × 5.0" |
| Back face (−Y) | 14" × 5.0" |
| Bottom (−Z) | 14" × 11.5" |
| Left edge (−X) | 11.5" × 5.0" |
| Right edge (+X) | 11.5" × 5.0" |

---

## Interior Dimensions

| Dimension | Size | Notes |
|-----------|------|-------|
| Interior length (X) | ~13.5" | Box length minus walls (0.25" each side) [WORKING ESTIMATE] |
| Interior width (Y) | ~11.0" | Box width minus walls (0.25" each side) [WORKING ESTIMATE] |
| Interior depth (Z) | ~4.5" | Box depth minus lid (0.25") minus base (0.25") [WORKING ESTIMATE] |

### Interior Zone Split

The interior is divided front-to-back by a full-height divider wall into two zones.

| Zone | Y Depth | Purpose |
|------|---------|---------|
| Front zone (trays) | ~6.5" | Tray 1 + Tray 2 stacked vertically with booklets between them [WORKING ESTIMATE] |
| Divider wall | ~0.25" | Full-height rigid paperboard wall separating zones |
| Back zone (mug compartment) | ~4.25" | Hidden padded compartment — mug, passport, yard pass [WORKING ESTIMATE] |
| **Total** | **~11.0"** | Matches interior width ✓ |

---

## Divider Wall

| Attribute | Spec |
|-----------|------|
| Height | Full height — floor to lid (~4.5") [WORKING ESTIMATE] |
| Length | ~13.5" (full interior length) [WORKING ESTIMATE] |
| Thickness | ~0.25" |
| Material | Rigid paperboard, same stock as tray construction (18pt or 24pt — confirm with sourcing) |
| Function | Structural — supports tray stack in front zone, conceals mug compartment in back zone |

*For divider wall color/treatment and design rationale, see Packaging Spec.*

---

## Coil-Bound Booklets

Two booklets rest on top of each tray and are lifted off with the tray above.

| Attribute | Booklet 1 (on Tray 1) | Booklet 2 (on Tray 2) |
|-----------|----------------------|----------------------|
| Position | Rests on Tray 1, beneath booking frame | Rests on Tray 2, beneath Tray 1 |
| Dimensions | ~13.0" × ~6.5" [WORKING ESTIMATE] | ~13.0" × ~6.5" [WORKING ESTIMATE] |
| Page count | 4–6 pages | 6–8 pages |
| Binding | Coil-bound (left or top edge — TBD) |
| Estimated thickness | ~0.25" [WORKING ESTIMATE] | ~0.30" [WORKING ESTIMATE] |
| Cover stock | 100–120lb cover | 100–120lb cover |
| Interior stock | 80–100lb text | 80–100lb text |
| Finish | Matte/rough — institutional feel |

*For booklet content direction, narrative roles, aesthetic approach, and title direction, see Packaging Spec.*

---

## Usable Tray Area

Trays occupy the front zone only. Full interior length, front zone depth.

| Dimension | Size | Notes |
|-----------|------|-------|
| Tray exterior length | ~13.5" | Full interior length [WORKING ESTIMATE] |
| Tray exterior width (Y) | ~6.5" | Front zone depth [WORKING ESTIMATE] |
| Tray interior length | ~13.25" | Exterior minus walls (~0.125" each side) [WORKING ESTIMATE] |
| Tray interior width (Y) | ~6.25" | Exterior minus walls (~0.125" each side) [WORKING ESTIMATE] |

*No ring clearance needed — trays use full front zone width. Trays are centered in the front zone.*

*For tray design philosophy, chalk outline style, and copy approach, see Packaging Spec.*

---

## Stack Height Calculations

Two independent stack calculations — one per zone. Case depth = max(front, back).

### Front Zone Stack (Tray Zone)

Components stacked bottom to top:

| Component | Height | Notes |
|-----------|--------|-------|
| Base (floor of box) | 0.25" | Fixed, 24pt paperboard |
| Tray 2 floor | 0.125" | 18pt paperboard |
| Tray 2 walls | 0.875" | Tallest item (tissues ~0.75") + clearance |
| Booklet 2 | 0.30" | 6–8 pages coil-bound, heavier stock [WORKING ESTIMATE] |
| Tray 1 floor | 0.125" | 18pt paperboard |
| Tray 1 walls | 0.75" | Tallest item (pen ~0.6") + clearance |
| Booklet 1 | 0.25" | 4–6 pages coil-bound, heavier stock [WORKING ESTIMATE] |
| Booking frame | 0.0625" | Rigid paperboard (~24pt) |
| Lid | 0.25" | 24pt paperboard |
| **Total** | **~2.99"** | Within 5.0" depth — ~2.01" headroom |

### Back Zone Stack (Mug Compartment) — CONSTRAINING

Components stacked bottom to top:

| Component | Height | Notes |
|-----------|--------|-------|
| Base (floor of box) | 0.25" | Fixed, 24pt paperboard |
| Bottom foam padding | 0.50" | Die-cut foam, primary drop protection [WORKING ESTIMATE — confirm with sourcing] |
| Mug (on its side) | 3.50" | Outer diameter — CONTROLLING DIMENSION [WORKING ESTIMATE — confirm with sourcing] |
| Top foam padding | 0.125" | Thin foam sheet, prevents rattle [WORKING ESTIMATE] |
| Lift-off compartment cover | 0.0625" | Rigid paperboard (~24pt) |
| Lid | 0.25" | 24pt paperboard |
| **Total** | **~4.69"** | Within 5.0" depth — ~0.31" clearance |

**⚠️ Back zone is the constraining dimension.** The 5.0" case depth provides ~0.31" manufacturing tolerance over the back zone stack. If mug OD exceeds 3.5" or foam needs to be thicker for drop protection, case depth must increase. Confirm with sourcing before locking.

---

## Tray 2 — Bottom Tray of Front Zone (7 Items)

| Attribute | Spec |
|-----------|------|
| Exterior footprint | ~13.5" × ~6.5" [WORKING ESTIMATE] |
| Interior footprint | ~13.25" × ~6.25" [WORKING ESTIMATE] |
| Wall height | 0.875" |
| Floor thickness | 0.125" |
| Total tray height | 1.0" |
| Material | 18pt paperboard |

### Lift Tab

| Attribute | Spec |
|-----------|------|
| Back edge | Decorative tab(s) along back edge of tray |
| Front edge | Small finger notch (~1"–1.5" semicircle) cut into front tray wall |

### Item Layout (viewed from above, looking down)

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│  [TISSUES]  [WRISTBAND]  [STICKERS─────────]  [STICKER   │
│   3"×3"      3"×3"        4.5"×1.25"          GUIDE]     │
│                                                 3"×4"     │
│  [CLIPS───]  [ERASER]   [EARPLUGS]                       │
│   3.5"×.6"    2"×.75"    2"×1"                            │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

### Item Positions (7 Items)

| Item | Internal Name | Working Dimensions | Notes |
|------|--------------|-------------------|-------|
| Tissue pack | Contraband Cry Rags | 3.0" × 3.0" × 0.75" | Tallest item in tray |
| Silicone wristband | Ankle Monitor | 3.0" × 3.0" coiled (8.0" × 0.75" flat) | Coiled — confirm coil diameter with sourcing |
| Sticker strip | Turf Tags | 4.5" × 1.25" | Flat, kiss-cut or die-cut |
| Sticker guide card | Sticker Guide | ~3.0" × ~4.0" | Die-cut recess in tray — guide card is a tray item |
| Paperclips | Snitch Switch | 3.5" × 0.6" | Flat |
| Novelty eraser | Evidence Eraser | 2.0" × 0.75" | Standard eraser size |
| Ear plugs | Solitary | 2.0" × 1.0" (packaged pair) | In small recess or tied |

### Copy Space — Tray 2
- 7 items across ~13.25" × ~6.25" — extra inch of length provides breathing room
- Full tray width available — no ring column consuming space

*For copy approach and tray design philosophy, see Packaging Spec.*

---

## Tray 1 — Top Tray, Revealed First (4 Items)

| Attribute | Spec |
|-----------|------|
| Exterior footprint | ~13.5" × ~6.5" [WORKING ESTIMATE] |
| Interior footprint | ~13.25" × ~6.25" [WORKING ESTIMATE] |
| Wall height | 0.75" |
| Floor thickness | 0.125" |
| Total tray height | 0.875" |
| Material | 18pt paperboard |

### Lift Tab

| Attribute | Spec |
|-----------|------|
| Back edge | Decorative tab(s) along back edge of tray |
| Front edge | Small finger notch (~1"–1.5" semicircle) cut into front tray wall |

### Item Layout (viewed from above, looking down)

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│  [PEN/SHANK ──────────────]       [NOTEPAD────]  [TATTOO │
│   5.5" × 0.6"                      4.0"×5.5"     GUIDE]  │
│  [TATTOO STRIP ───────────]                       3"×4"   │
│   5.0" × 1.5"                                             │
│              [copy space]                                  │
└────────────────────────────────────────────────────────────┘
```

### Item Positions (4 Items)

| Item | Internal Name | Working Dimensions | Notes |
|------|--------------|-------------------|-------|
| Tactical pen | Cubicle Shank | 5.5" × 0.6" | Horizontal, upper left |
| Temporary tattoo strip | Lifer Ink | 5.0" × 1.5" | Below pen |
| Tattoo guide card | Tattoo Guide | ~3.0" × ~4.0" | Die-cut recess in tray — guide card is a tray item |
| Notepad | Rap Sheet | 4.0" × 5.5" | Right side, vertical |

### Copy Space — Tray 1
- Left zone below pen and tattoos: ~8.0" × 2.5" available
- Right zone below notepad: ~4.0" × 0.5"
- Best tray for copy — least crowded, most breathing room. Extra inch of length improves this further.

*For copy approach and tray design philosophy, see Packaging Spec.*

---

## Mug Compartment (Back Zone)

| Attribute | Spec |
|-----------|------|
| Interior footprint | ~13.5" × ~4.0" (after subtracting divider wall and back box wall) [WORKING ESTIMATE] |
| Interior depth (Z) | ~4.5" (floor to lid) [WORKING ESTIMATE] |

### Item Layout (viewed from above, looking down)

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│  [PASSPORT]       [MUG - on side,            [YARD       │
│   5.0"×3.5"       handle to side]             PASS]      │
│                    3.5" dia × 3.5" H          4.0"×2.5"  │
│                    (4.0" w/ handle)                        │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

### Item Positions

| Item | Internal Name | Working Dimensions | Position |
|------|--------------|-------------------|----------|
| Enamel camp mug | Mug Shot | 3.5" dia × 3.5" H (4.0" with handle) | Center, on its side, handle to the side |
| Passport booklet | Corporate Parole Passport | 5.0" × 3.5" × 0.25" | Left of mug, flanking |
| Novelty card | Yard Pass | 4.0" × 2.5" × 0.10" | Right of mug, flanking |

*For compartment concealment design, reveal sequence, and narrative role, see Packaging Spec.*

---

## Mug Padding

| Attribute | Spec |
|-----------|------|
| Material | Die-cut foam |
| Bottom pad thickness | ~0.50" [WORKING ESTIMATE — confirm with sourcing for drop protection] |
| Top pad thickness | ~0.125" (thin foam sheet, rattle prevention) [WORKING ESTIMATE] |
| Cradle shape | Custom die-cut to contour mug lying on its side. Cutout for handle on one side. Cutouts flanking left and right for passport and yard pass. |
| Foam type | Closed-cell polyethylene or EVA foam — confirm with sourcing |

*For foam color and interior color scheme, see Packaging Spec.*

---

## Compartment Cover (Lift-Off Lid)

| Attribute | Spec |
|-----------|------|
| Dimensions | ~13.5" × ~4.0" (sized to cover mug compartment opening) [WORKING ESTIMATE] |
| Thickness | ~0.0625" (rigid paperboard, ~24pt) |
| Material | Rigid paperboard, same stock as box construction |
| Both sides printable | Yes |
| Placement | Rests on top of mug compartment, supported by divider wall front edge and back interior wall |
| Retention | Gravity + tray stack weight above. No adhesive, no clips. |

*For compartment cover copy approach (teaser top, narrative underside), see Packaging Spec.*

---

## Booking Frame

| Attribute | Spec |
|-----------|------|
| What it is | Separate, removable rigid paperboard frame. NOT a cutout in the lid. NOT attached to the lid. |
| Outer dimensions | ~11" × ~9" [WORKING ESTIMATE] |
| Opening dimensions | ~7" × ~5" [WORKING ESTIMATE] |
| Frame border | ~1.5"–2" on all sides |
| Thickness | ~0.0625" (rigid paperboard, ~24pt) |
| Placement | Rests on top of Booklet 1 / tray stack when case is closed. First object seen when lid opens. Held by gravity. |
| Printed elements | Height ruler markings on **both** vertical sides of the frame border. "CORPORATE CORRECTIONAL FACILITY — BOOKING DEPT." across top border. Case number across bottom border. |

**⚠️ CRITICAL: The lid is SOLID. No holes, no cutouts, no openings of any kind. The booking frame is a separate piece resting inside the case.**

**Removed concern — Lid opening when closed:** The old concern about a visible die-cut opening in the lid no longer applies. The lid is solid and the booking frame is a separate object.

---

## Inside Lid

| Attribute | Spec |
|-----------|------|
| Surface area | ~13.5" × ~11.0" (full interior lid surface) [WORKING ESTIMATE] |
| Pocket 1 | Horizontal, 4.5" × 1.25" — library check-in card sleeve |
| Pocket 2 | Vertical, 3.5" × 4.5" — map |
| Library card | 4.0" × 1.0" |

*For pocket content design, card theming, and inside lid copy approach, see Packaging Spec.*

### Back Wall Interior Treatment

| Attribute | Spec |
|-----------|------|
| Surface | Interior face of back box wall, visible when compartment is open |
| Available area | ~13.5" × ~4.5" |

*For back wall treatment design direction, see Packaging Spec.*

---

## Corporate Parole Passport — Booklet Spec

*Note: This is the passport item that sits in the mug compartment — not one of the two coil-bound booklets described above.*

| Attribute | Spec |
|-----------|------|
| Format | Saddle-stitched booklet |
| Closed dimensions | 5.0" × 3.5" |
| Page count | 8–12 pages |
| Cover stock | 80–100lb cover |
| Interior stock | 60–70lb text |

*For passport content direction and theming, see Packaging Spec.*

---

## Item Working Dimensions Summary

### Tray Items

| Item | Internal Name | Working Dimensions | Location |
|------|--------------|-------------------|----------|
| Tactical pen | Cubicle Shank | 5.5" L × 0.6" D | Tray 1 |
| Temporary tattoo strip | Lifer Ink | 5.0" × 1.5" | Tray 1 |
| Tattoo guide card | Tattoo Guide | ~3.0" × ~4.0" | Tray 1 |
| Notepad | Rap Sheet | 4.0" × 5.5" | Tray 1 |
| Paperclips | Snitch Switch | 3.5" × 0.6" | Tray 2 |
| Sticker strip | Turf Tags | 4.5" × 1.25" | Tray 2 |
| Sticker guide card | Sticker Guide | ~3.0" × ~4.0" | Tray 2 |
| Tissue pack | Contraband Cry Rags | 3.0" × 3.0" × 0.75" | Tray 2 |
| Ear plugs (pair) | Solitary | 2.0" × 1.0" packaged | Tray 2 |
| Silicone wristband | Ankle Monitor | 3.0" × 3.0" coiled | Tray 2 |
| Novelty eraser | Evidence Eraser | 2.0" × 0.75" | Tray 2 |

**Tray 1: 4 items. Tray 2: 7 items.**

### Compartment Items

| Item | Internal Name | Working Dimensions | Location |
|------|--------------|-------------------|----------|
| Enamel camp mug | Mug Shot | 3.5" dia × 3.5" H | Compartment (center) |
| Passport booklet | Corporate Parole Passport | 5.0" × 3.5" × 0.25" | Compartment (left of mug) |
| Novelty card | Yard Pass | 4.0" × 2.5" × 0.10" | Compartment (right of mug) |

### Structural Components

| Component | Working Dimensions | Notes |
|-----------|--------------------|-------|
| Booking frame | ~11" × ~9" outer, ~7" × ~5" opening, ~0.0625" thick | Separate removable piece [WORKING ESTIMATE] |
| Booklet 1 | ~13.0" × ~6.5" × ~0.25" | 4–6 pages, coil-bound, 100–120lb cover / 80–100lb text [WORKING ESTIMATE] |
| Booklet 2 | ~13.0" × ~6.5" × ~0.30" | 6–8 pages, coil-bound, 100–120lb cover / 80–100lb text [WORKING ESTIMATE] |
| Compartment cover | ~13.5" × ~4.0" × ~0.0625" | Both sides printable [WORKING ESTIMATE] |
| Belly band | ~2"–3" tall × wraps full case perimeter | One-time use [WORKING ESTIMATE] |
| Divider wall | ~13.5" × ~4.5" × ~0.25" | Full-height, structural [WORKING ESTIMATE] |
| Die-cut foam padding | ~13.5" × ~4.0" × ~0.50" (bottom) | Custom mug cradle [WORKING ESTIMATE] |

---

## Copy Space Assessment Per Tray

| Tray | Items | Available Space | Notes |
|------|-------|----------------|-------|
| Tray 1 | 4 items (incl. tattoo guide card) | Generous gaps, full width, extra inch of length | Best tray for copy — least crowded |
| Tray 2 | 7 items (incl. sticker guide card) | Full width, extra inch of length helps | More crowded but workable |

*For copy approach, tray design philosophy, and copy surface assignments, see Packaging Spec.*

---

## Coordinate System Reference (for 3D Modeling)

All 3D modeling uses: **1 Blender Unit = 1 inch**

| Axis | Dimension | Description |
|------|-----------|-------------|
| X | 14.0" | Length of case (left to right) [WORKING ESTIMATE] |
| Y | 11.5" | Width of case (front to back); back wall at −Y; handle/clasp wall at +Y [WORKING ESTIMATE] |
| Z | 5.0" | Depth of case (bottom to top when lying flat) [WORKING ESTIMATE] |

### Key Reference Points

| Reference Point | Coordinate | Notes |
|----------------|------------|-------|
| Case bottom (exterior) | Z = 0 | |
| Case interior floor | Z = 0.25" | |
| Bottom foam top surface | Z = 0.75" | Back zone only [WORKING ESTIMATE] |
| Mug center (on its side) | Z ≈ 2.50" | Back zone only (0.25 + 0.50 + 1.75) [WORKING ESTIMATE] |
| Tray 2 floor bottom | Z = 0.25" | Front zone — sits on case floor |
| Tray 2 top | Z = 1.25" | |
| Booklet 2 top | Z ≈ 1.55" | [WORKING ESTIMATE] |
| Tray 1 floor bottom | Z ≈ 1.55" | |
| Tray 1 top | Z ≈ 2.425" | |
| Booklet 1 top | Z ≈ 2.675" | [WORKING ESTIMATE] |
| Booking frame top | Z ≈ 2.74" | [WORKING ESTIMATE] |
| Lid bottom | Z = 4.75" | [WORKING ESTIMATE] |
| Lid top (exterior) | Z = 5.0" | [WORKING ESTIMATE] |

### Y-Axis Zone Boundaries

| Reference Point | Coordinate | Notes |
|----------------|------------|-------|
| Back wall exterior | Y = −5.75" | [WORKING ESTIMATE] |
| Back wall interior | Y = −5.50" | [WORKING ESTIMATE] |
| Back zone (mug compartment) | Y = −5.50" to −1.25" | ~4.25" deep [WORKING ESTIMATE] |
| Divider wall | Y = −1.25" to −1.00" | ~0.25" thick [WORKING ESTIMATE] |
| Front zone (trays) | Y = −1.00" to +5.50" | ~6.50" deep [WORKING ESTIMATE] |
| Front zone center Y | Y ≈ +2.25" | [WORKING ESTIMATE] |
| Front wall interior | Y = +5.50" | [WORKING ESTIMATE] |
| Front wall exterior / handle + clasps | Y = +5.75" | [WORKING ESTIMATE] |

### Exterior Surface Reference

| Feature | Surface | Coordinate |
|---------|---------|------------|
| Handle + Clasps + Front face labels | Front face (+Y) | Y = +5.75" exterior [WORKING ESTIMATE] |
| Main label + Stamp + Evidence tag | Lid/top surface (+Z) | Z = 5.0" exterior [WORKING ESTIMATE] |
| Handle Z-position | Front face | Z = 2.5" (vertically centered on 5.0" face) [WORKING ESTIMATE] |

---

## Removed / Superseded Elements

For the full list of removed elements (Tray 3, D-ring/binder ring hardware, binder pages, die-cut lid cutout, lid opening concern, etc.), see Packaging Spec Section 15. No removed elements should reappear in this spec. Key dimensional implications: no ring clearance zone in tray calculations, no third tray in stack math, booking frame thickness is ~0.0625" only (not 0.125").

---

## Key Questions for Sourcing

1. Confirm 11oz enamel mug outer diameter and height — back zone stack and case depth adjust from here
2. Confirm wristband coiled diameter — affects Tray 2 layout
3. Quote die-cut foam specs — material type (EVA, PE), density, minimum thickness for drop protection of enamel mug
4. Confirm compartment cover construction — can rigid paperboard (~24pt) span ~13.5" × ~4.0" without sagging under tray weight?
5. Quote coil-binding for two booklets (~13" × ~6.5"; Booklet 1: 4–6 pages ~0.25" thick, Booklet 2: 6–8 pages ~0.30" thick; 100–120lb cover / 80–100lb text) — confirm coil diameter and closed thickness
6. Confirm divider wall construction — can 18pt or 24pt paperboard support full tray stack as full-height wall? Does it need to be doubled or reinforced?
7. Case depth tolerance — back zone stack estimates ~4.69" within 5.0" case. Is ~0.31" clearance sufficient?
8. Magnet embedding method — can 4 neodymium disc magnets be embedded flush in 24pt paperboard along 14" front edge? Size/pull force recommendation?
9. Snap-fit lip feasibility and cost — is a molded snap-fit lip compatible with 24pt paperboard construction?
10. Belly band stock weight recommendation (80–100lb cover?) and printing method
11. Confirm printing capability on dark-colored tray floors
12. Quote saddle-stitched passport booklet (5.0" × 3.5", 8–12 pages)
13. Confirm matte exterior + satin finish on applied elements (labels, stickers)
14. Confirm die-cut cardboard handle construction and attachment method
15. Die-cut recess capability — can 18pt tray floors accept Pelican-style die-cut recesses for items? Depth and tolerance?
16. What is MOQ for full kit vs. components separately?
17. Confirm booking frame ~0.0625" (~24pt) rigid paperboard is adequate for structural integrity at ~11" × ~9" with ~7" × ~5" opening

---

## Changelog

| Date | Change |
|------|--------|
| March 11, 2026 | v7 — Added sourcing partner handoff note. No measurement changes. |
| March 11, 2026 | v6.1 — Post-comparison revision: updated dimensions to 14" × 11.5" × 5.0", applied five consistency fixes (guide card tray assignments — Tray 1 = 4 items incl. Tattoo Guide Card, Tray 2 = 7 items incl. Sticker Guide Card; booklet thickness differentiated — Booklet 1 ~0.25", Booklet 2 ~0.30"; booking frame thickness locked at ~0.0625" ~24pt, removed 0.125" option; added "Lid opening when closed" removed-concern note; booking frame height rulers confirmed on both vertical sides). Deduplicated cross-document content per ownership rules — removed design rationale, color descriptions, narrative descriptions, copy direction, and reveal sequence details; replaced with cross-references to Packaging Spec. Added document scope header. Added sourcing question #17 for booking frame thickness validation. |
| March 11, 2026 | v6 Rev B — Dimension updates: case length 13" → 14" (extra inch for tray copy space), case width 11" → 11.5" (true 6.5" front zone interior after walls), case depth 4.75" → 5.0" (manufacturing tolerance for back zone, clearance improves from ~0.06" to ~0.31"). All surface dimensions, interior dimensions, tray footprints, booklet dimensions, coordinate system values, and zone boundaries updated to cascade from new outer dimensions. Front zone depth corrected to 6.5" (was 6.0"). Booklets updated to ~13" × 6.5" with heavier stock weights (100–120lb cover / 80–100lb text, thickness estimates increased). Booking frame height rulers changed from one side to both sides. Added die-cut recess (Pelican case style) tray design notes and copy space approach. Added Tattoo Guide Card (~3" × 4") to Tray 1 and Sticker Guide Card (~3" × 4") to Tray 2. Magnet X-positions recalculated for 14" front edge. Recalculated both zone stacks with updated values. Added surface dimensions summary table. Added sourcing question for die-cut recess capability. |
| March 11, 2026 | v6 — **MAJOR LAYOUT REDESIGN.** Interior changed from 3-tray vertical stack with binder rings to 2-zone side-by-side layout with hidden mug compartment. Box width 8.0" → 11.0". Box depth 6.5" → 4.75". Removed: Tray 3, all D-ring/binder ring hardware, ring clearance zone, binder page specs, third booklet section, lid backstop angle, die-cut booking frame cutout. Added: hidden mug compartment (back zone), lift-off compartment cover, full-height divider wall, die-cut foam mug padding, two-zone interior layout, booking frame as separate removable component, belly band, two coil-bound booklets, hybrid lift tabs, 4-magnet closure system, snap-fit lip as optional. Corrected booking frame: lid is solid, frame is separate piece. |
| March 10, 2026 | v5 — Moved main label, rubber stamp, and barcode/evidence tag from front face (+Y) to lid/top surface (+Z). Split exterior sections. Updated handle Z-position. Changed booking frame to die-cut cutout (SUPERSEDED in v6). |
| March 10, 2026 | v4 — Corrected handle and clasps back to front face (+Y). |
| March 9, 2026 | v3 — Incorrectly moved handle and clasps from front face (+Y) to top surface (+Z). Error corrected in v4. |
| March 9, 2026 | v2 — Updated box length 11" → 13" for briefcase proportions (2:1 front face ratio). |
| March 9, 2026 | v1 — Full dimensional spec built from mug-up. |