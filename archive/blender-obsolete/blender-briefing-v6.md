# Office Survival Kit — Blender Session Briefing v6

## Session Context — What to Paste

**For this Blender session, you need:**
- THIS document (Blender Briefing) — primary reference
- Dimensions Spec — if you need exact coordinates or stack math
- Packaging Spec — if you need design decisions or narrative context

**You do NOT need:**
- Authority Block (content is in the docs above)
- Exterior Copy Doc (unless modeling text geometry)
- Item Specs (unless modeling specific item shapes)
- Archived docs (superseded)

---

**Purpose:** Hand this document to Claude in any Blender modeling session. It contains everything needed to understand the product and continue 3D work without re-explaining the project.

This document derives from the Packaging Spec (structure/interior), Exterior Spec (exterior surfaces), and Physical Dimensions Spec (measurements). If any details here conflict with those documents, the source documents are authoritative.

**v6 changes (April 2026):** OG character removed — Brad Sterling / Elevate Co. is the sole voice across all surfaces. Booking frame removed entirely. Doc sets reduced from 3 to 2: Doc Set 1 on top of Tray 1, Doc Set 2 on compartment cover (formerly Doc Set 3 / Manual 3). Single tray mold — both trays identical with landscape recesses. Pen box changed from tuck-end to tray-and-sleeve (matchbox style). Divider wall is now the vertical surface of the compartment cover (not a separate piece). Component J (OG Sticky Notes) removed from all references.

**v5 changes (March 13, 2026):** Major creative pivot. Two-character narrative system (OG vs. Corporate Nemesis). Items reduced from 13 to 7 + 1 empty recess. All tray items now in individual tuck-end boxes with die-cut recesses shaped for BOXES. Outer Amazon shipping box added. Corporate Parole Passport replaced by Doc Set 3 / Manual 3 (formerly Activity Guide). Evidence bag, guide cards, notepad, tissues, paperclips, wristband, eraser, and ear plugs all removed. Stack math updated for box-packaged items.

**v4 changes (March 11, 2026):** Cascaded all 16 ideation decisions. Coil-bound booklets to binder-clipped document sets. Die-cut foam to shredded "CLASSIFIED" documents paper. Yard Pass merged into Passport. Tray 2 reduced from 7 individual items to 5 positions. Booking frame back added as copy surface.

---

## What This Product Is

A gag gift kit sold on Amazon. The product ships in a corrugated Amazon-style outer box (Elevate Co. branding by Brad Sterling). Inside is a matte black briefcase. When opened, the interior reveals a two-zone layout — stacked trays with Pelican-style die-cut recesses in the front zone and a hidden mug compartment in the back zone. The theme is that office life is a prison sentence.

Brad Sterling (B.S., Chief Vision Officer & Founder of Elevate Co.) is the sole voice across all product surfaces — outer box, item boxes, document sets, and all branding. His voice is sleazy marketing exec: over-enthusiastic, buzzword-laden, passive-aggressive positivity. The comedy comes from the gap between his relentless corporate optimism and the prison-themed product he's selling.

---

## Scale & Coordinate System

- **1 Blender Unit = 1 inch** (all measurements in inches)
- Case lies flat on a table when in use. Lid opens upward (+Z direction).

| Axis | Direction | Size |
|------|-----------|------|
| X | Length (left to right) | 14.0" |
| Y | Width (front to back; back wall is -Y; handle/clasp wall is +Y) | 11.5" |
| Z | Depth (bottom to top when lying flat) | 5.0" |

**Orientation when lying flat, user looking down:**
- +Y wall = FRONT FACE — faces user — handle, clasps, magnets
- -Y wall = BACK WALL — farthest from user — lid hinge
- +Z = TOP (lid) — main label, stamp, evidence tag — NO hardware
- Z = 0 = BOTTOM (base)

---

## Box Dimensions

| Component | Value | Status |
|-----------|-------|--------|
| Outer Amazon box | ~15.5" x 13.0" x 6.5" | WORKING ESTIMATE |
| Inner briefcase | 14.0" x 11.5" x 5.0" | WORKING ESTIMATE |
| Wall/lid/base thickness | 0.25" | — |
| Interior | 13.5" x 11.0" x 4.5" | Derived |
| Front zone depth (F to B) | ~6.5" | — |
| Back zone depth (F to B) | ~4.25" | — |
| Tray exterior footprint | ~13.5" x ~6.5" | — |

*All box dimensions are WORKING ESTIMATES — proportions are confirmed directionally but exact numbers may shift with sourcing. For derived interior dimensions, structural thicknesses, and stack math, see Dimensions Spec.*

### Proportion Notes
- Front face (14" x 5.0") = 2.8:1 ratio — reads as a slim attache
- Lid surface (14" x 11.5") = 1.22:1 ratio — nearly square, wide footprint
- This case is flatter than the previous version — slim professional briefcase proportions, not a deep field kit

### Interior Layout (plan view)

```
         <- 14.0" (X axis) ->
    +---------------------------------------------+
    |             BACK ZONE (hidden)              |  ~4.25" (-Y)
    |  [MUG on side]                              |
    |  (shredded CLASSIFIED paper)                |
    |  (compartment cover on top, vertical        |
    |   front face serves as divider wall)        |
    +-- COMPARTMENT COVER front edge -------------+
    |             FRONT ZONE (visible)            |  ~6.5" (+Y)
    |  Doc Set 1 -> Tray 1 -> Tray 2             |
    |  (die-cut recesses for BOXES, Pelican style)|
    |  Doc Set 2 on compartment cover top         |
    +---------------------------------------------+
              ^ FRONT FACE (+Y, handle)
```

*For full interior dimensions, zone boundaries, and Y-axis coordinates, see Dimensions Spec.*

---

## Outer Amazon Box

| Attribute | Spec |
|-----------|------|
| Dimensions | ~15.5" x 13.0" x 6.5" (FBA Large Standard compliant) |
| Material | Corrugated brown cardboard |
| Flaps | Standard top-opening flaps (4 flaps, interleaving) |
| Branding | Brad Sterling / Elevate Co. voice — over-enthusiastic marketing copy, buzzwords, forced fun |
| Tone | Sanitized, corporate, relentlessly optimistic |
| Relationship to briefcase | Briefcase sits inside with standard packing material |

*In Blender: Model as a simple corrugated box with openable top flaps. Apply Amazon_Box material. Brad's marketing text goes on the exterior surfaces. This is the first thing the customer sees — Step 0 of the reveal sequence.*

---

## Exterior Features

### Front Face (+Y wall) — 14" x 5.0"

| Feature | Description |
|---------|-------------|
| Handle | Centered on X, vertically centered on face (Z = 2.5"), 3.5" span, arches upward. Die-cut cardboard, duct tape wrapped. |
| Clasps | Same face as handle, flanking center at X = +/-4.0". Printed directly on box (flat graphics only — no embossing, no physical hardware). |
| IT Asset Tag | Small institutional label, spread across surface (not clustered near handle). |
| INSPECTED BY: GARY | QC sticker, spread across surface. |
| FRAGILE | Rubber stamp, spread across surface. |
| Closure | 4 neodymium disc magnets (~10mm) along 14" front edge. Two behind clasp graphics, two spaced between. Hidden. |
| Finish | Matte black. |

*Note: Front face is shorter (5.0" vs. old 6.5") — elements need tighter vertical spacing. Handle arch must be lower-profile to fit proportionally.*

### Lid / Top Surface (+Z face) — 14" x 11.5"

| Feature | Description |
|---------|-------------|
| Exterior label | Cream rectangle, slightly off-center, contains kit name + tagline. |
| Rubber stamp | "CLEARED FOR OFFICE USE", red, overlapping label, slight angle, distressed ink texture. |
| Barcode tag | Small cream tag, "CASE NO. 9-5". |
| THIS SIDE UP | Small directional label. |
| Finish | Matte black base. Satin finish on applied elements (stickers, labels). |

*Note: Lid is significantly wider (11.5" vs. old 8.0") — label and stamp have more room to spread. Adjust element spacing for wider surface.*

### Back Face (-Y wall) — 14" x 5.0"

| Feature | Description |
|---------|-------------|
| Nutrition Facts cluster | 6 elements (parody nutrition label cluster). |
| Lid hinge | Along top edge. |

### Bottom Surface (Z=0 face) — 14" x 11.5"

| Feature | Description |
|---------|-------------|
| NOTICE | Printed element. |
| Margaritaville sticker | Applied sticker. |
| NOT THIS SIDE UP | Directional label (contradicts lid). |
| VOID IF OPENED | Printed element. |

### Left Edge (-X wall) — 11.5" x 5.0"

| Feature | Description |
|---------|-------------|
| MONDAY | Ransom note style lettering. |

### Right Edge (+X wall) — 11.5" x 5.0"

| Feature | Description |
|---------|-------------|
| Oval travel sticker cluster | Cluster of oval travel-style stickers. |

**CRITICAL:** Handle and clasps are both on the FRONT FACE (+Y). The top surface (+Z) carries the main label, rubber stamp, evidence tag, and THIS SIDE UP label — no hardware.

---

## Interior Features

| Feature | Description |
|---------|-------------|
| Compartment cover | Lift-off rigid paperboard (~0.0625" thick, ~13.5" x ~4.0"), rests on top of back zone. Its vertical front face serves as the divider between front and back zones (replaces the former separate divider wall). |
| Tray floors | Dark charcoal with die-cut recesses (Pelican case style) — molded cutouts shaped for ITEM BOXES (not loose items) |
| Tray surface graphics | Chalk-outline silhouettes of each box + item name + short tagline printed per recess |
| Tray accents | Orange (#e85d04) |
| Back zone | Shredded "CLASSIFIED" documents paper padding (dark-printed with stamps/redacted text), holds mug. Doc Set 2 rests on top of compartment cover. |
| Lid interior | Dark charcoal with two pockets |

---

## Lid Interior

| Feature | Spec |
|---------|------|
| Surface | SOLID. No holes. No cutouts. Both sides are complete, unbroken surfaces. Printed copy outside pocket areas. |
| Pocket 1 | Horizontal — holds intake/custody transfer card (pre-filled fake names/dates, correctional themed — visual format inspired by library date cards but IS a correctional document) |
| Pocket 2 | Holds map (worldbuilding piece) |

**CRITICAL: The lid is SOLID. There is no die-cut cutout, no rectangular hole, no opening of any kind through the lid. Every pre-v2 document describing a "die-cut cutout through the lid" is WRONG. Fix this wherever you encounter it.**

---

## Interior Zones — Front Zone

The front zone occupies ~6.5" of Y depth from the front inner wall to the compartment cover's vertical front face. Trays are stacked vertically. Trays are centered in the front zone.

*Front zone stack order (bottom to top): Tray 2, Tray 1, Document Set 1. Total stack ~2.40". Headroom to lid ~2.60". For layer-by-layer heights and exact Z-start/Z-end positions, see Dimensions Spec.*

The front zone stack sits on the interior floor (Z = 0.25"). Tray 2 is on the bottom; Tray 1 is on top. Document Set 1 rests on top of Tray 1. No doc set between trays. No booking frame.

---

## Interior Zones — Back Zone (Hidden Mug Compartment)

The back zone occupies ~4.25" of Y depth from the compartment cover's vertical front face to the back inner wall. Completely hidden while trays are in place. Revealed when Tray 2 is lifted out and the compartment cover is removed.

### Back Zone Contents

| Layer | Description |
|-------|-------------|
| **Floor** | Shredded "CLASSIFIED" documents paper padding — dark-printed crumpled paper with classified stamps, redacted text, incident report fragments. Fills compartment, cushions mug. Thin foam sheet (~0.25") at bottom as backup drop protection. |
| **Mug** | "Mug Shot" — 11oz enamel, 3.5" dia x 3.5" H. Lying on its side, handle pointing to the side (parallel to base). Centered in zone. Contains hidden note card inside (easter egg). |
| **Doc Set 2** | Rests on top of compartment cover (visible when Tray 2 is lifted). Format TBD — model as flat rectangular placeholder slab for now. |
| **Compartment cover** | Lift-off rigid paperboard (~13.5" x ~4.0", ~0.0625" thick). Rests on top of back zone. Top surface: teaser copy. Underside: third narrative beat. Both sides printable. Vertical front face serves as divider wall between front and back zones. |

*Back zone is the constraining dimension. Total stack ~4.56" within 5.0" case (~0.44" clearance). For detailed stack math and Z coordinates, see Dimensions Spec. Mug dimensions are WORKING ESTIMATE — confirm with sourcing.*

### Back Wall Interior

The interior surface of the back wall (-Y, above the shredded paper) is printed with minimal institutional graphics — institutional seal, case number, or short character line.

---

## Trays — Single Mold Design (Both Trays Identical)

**Tray exterior:** ~13.5" x ~6.5" | **Wall height: 1.0"** | **Total tray height: 1.125"** (1.0" walls + 0.125" floor) | **Die-cut recesses for BOXES, Pelican case style**

Both trays use the same mold. Landscape orientation recesses: wide recess at back (~320mm / ~12.6") and pen-sized recess at front (~168mm / ~6.6"). The same physical tray is loaded with different items for Tray 1 vs. Tray 2 — the recess geometry is identical.

Each recess is shaped for the ITEM BOX (not the loose item). Chalk-outline silhouette of the box shape + item name + short tagline printed on tray floor per recess.

**Item box exteriors:** Brad Sterling / Elevate Co. retail branding (dark box, clean retail graphics).

**Lift system:** Hybrid — decorative tab on back edge + finger notch (~1"-1.5") on front edge.

### Tray 1 — First Day Issue (Top Tray, Revealed First)

| Item | Internal Name | Box Type | Box Dimensions |
|------|--------------|----------|----------------|
| Tactical pen in box | Cubicle Shank | Tray-and-sleeve (matchbox style) | 6.5" x 1.75" x 1.0" |
| Temporary tattoo strip in box | Lifer Ink | Tuck-end | 5.0" x 3.5" x 0.5" |
| Sticker strip in box | Turf Tags | Tuck-end | 5.0" x 3.5" x 0.5" |

### Tray 2 — Arsenal (Bottom Tray, Revealed Second)

| Tray Position | Internal Name | Box Type | Box Dimensions |
|---------------|--------------|----------|----------------|
| Affirmation cards in box | Cell Talk | Tuck-end | 4.0" x 2.5" x 0.75" |
| Complaint cards in box | Rap Sheets | Tuck-end | 4.0" x 2.5" x 0.75" |
| Passive-aggressive cards in box | Sweet Nothings | Tuck-end | 4.0" x 2.5" x 0.75" |
| Empty stapler recess | Confiscated Stapler | — | ~4.0" x 1.5" chalk outline |

**Three card boxes** are the same dimensions, arranged in a row. Each has Brad Sterling / Elevate Co. retail branding on the exterior.

**Confiscated stapler recess:** Empty die-cut recess shaped like a small stapler — chalk outline only, NO item present. Label: "CONFISCATED — WEAPONIZED OFFICE EQUIPMENT. INCIDENT #147. DO NOT REISSUE." The absence IS the joke. $0 COGS.

Each box recess has: chalk-outline silhouette of the box, item name printed, short tagline printed on tray floor.

---

## Document Sets

| Attribute | Document Set 1 | Document Set 2 |
|---|---|---|
| Position | On top of Tray 1 | On top of compartment cover (back zone) |
| Dimensions | ~13" x 6.5" x ~0.15" | TBD |
| Format | TBD (thinner than v4's binder-clipped sets) | TBD |
| Wrapper | "CASE FILE #01 — CLASSIFIED" printed paper belly band | TBD |
| Contains | Polaroids inside stack | TBD |
| Role | Intake / orientation | TBD |

*Document Set 1 covers the full tray footprint. Format is TBD — model as flat rectangular placeholder slabs for now. Doc Set 2 sits on the compartment cover in the back zone (visible when Tray 2 is lifted).*

---

## Individual Item Boxes

All 6 tray items are packaged in individual boxes. 5 are tuck-end boxes; the pen (Cubicle Shank) uses a tray-and-sleeve (matchbox style) box. These are what sit in the die-cut recesses — the recesses are shaped for the BOXES, not for loose items.

| Box Surface | Content |
|-------------|---------|
| **Exterior panels** | Brad Sterling / Elevate Co. retail branding — dark background, clean retail graphics, over-enthusiastic product names, buzzword-laden descriptions |
| **Interior** | The actual item |

*In Blender: Model each box as a simple rectangular solid at the specified dimensions. The pen box (Cubicle Shank) should be modeled as a tray-and-sleeve (matchbox style) — inner tray slides out of outer sleeve. All other boxes are tuck-end style. Each box needs an Item_Box material slot for the retail exterior. Boxes sit inside their die-cut recesses on the tray floor.*

### Box Dimensions Summary

| Item | Box Type | Box Size | Tray |
|------|----------|----------|------|
| Cubicle Shank (pen) | Tray-and-sleeve | 6.5" x 1.75" x 1.0" | Tray 1 |
| Lifer Ink (tattoos) | Tuck-end | 5.0" x 3.5" x 0.5" | Tray 1 |
| Turf Tags (stickers) | Tuck-end | 5.0" x 3.5" x 0.5" | Tray 1 |
| Cell Talk | Tuck-end | 4.0" x 2.5" x 0.75" | Tray 2 |
| Rap Sheets | Tuck-end | 4.0" x 2.5" x 0.75" | Tray 2 |
| Sweet Nothings | Tuck-end | 4.0" x 2.5" x 0.75" | Tray 2 |

---

## Closure System

| Layer | Description |
|-------|-------------|
| **Magnets (everyday)** | 4 neodymium disc magnets (~10mm) along 14" front edge. Two behind clasp graphics, two spaced between. Hidden. |
| **Belly band (shipping)** | TBD / under review. |
| **Snap-fit lip (optional)** | TBD — ask sourcing. Skip if cost-prohibitive. |

---

## Reveal Sequence (for camera animation reference)

| Step | Action | What's Visible |
|---|---|---|
| 0 | Open outer Amazon box | Corrugated box with Brad Sterling / Elevate Co. marketing. Briefcase inside. |
| 1 | Open lid | Inside lid (pockets). Doc Set 1 on top of tray stack. Back zone hidden behind compartment cover. |
| 2-3 | See + read Document Set 1 | Intake/orientation documents, polaroids, "CASE FILE #01" belly band |
| 4-5 | Set document set aside, interact with Tray 1 | 3 die-cut recesses with item boxes (Cubicle Shank, Lifer Ink, Turf Tags). |
| 6 | Lift Tray 1 | Tray 2 revealed directly underneath. |
| 7-8 | Interact with Tray 2 | 4 positions: 3 card boxes (Cell Talk, Rap Sheets, Sweet Nothings) + empty stapler recess. |
| 9 | Lift Tray 2 | Compartment cover visible — teaser copy. Doc Set 2 visible on compartment cover. |
| 10 | Lift off cover | Underside = third narrative beat. Mug in shredded "CLASSIFIED" paper revealed. |
| 11 | Remove items | "You've done your time." Hidden mug note discovered inside mug. |
| 12 | See base | Closing message on interior floor |

---

## Stack Math Summary

### Front Zone Stack (bottom to top)

| Layer | Height | Notes |
|-------|--------|-------|
| Tray 2 (walls + floor) | 1.125" | 1.0" walls + 0.125" floor |
| Tray 1 (walls + floor) | 1.125" | 1.0" walls + 0.125" floor |
| Document Set 1 | 0.15" | Format TBD, placeholder |
| **Front zone total** | **~2.40"** | |
| **Headroom to lid** | **~2.60"** | Within 5.0" case (4.5" interior + 0.25" floor to lid underside) |

### Back Zone Stack (constraining)

| Layer | Height | Notes |
|-------|--------|-------|
| Foam backup | 0.25" | Thin sheet at bottom |
| Shredded paper + mug | ~4.0" | Mug on side is 3.5" dia, paper fills around |
| Compartment cover | 0.0625" | Rigid paperboard |
| **Back zone total** | **~4.56"** | Unchanged from v4 |
| **Clearance** | **~0.44"** | Within 5.0" case |

---

## Materials (Blender)

| Material Name | Use | RGB |
|--------------|-----|-----|
| Matte_Black | Exterior briefcase, handle, lid outer | (0.03, 0.03, 0.03) rough=0.95 |
| Charcoal_Interior | Tray floors/walls, lid interior | (0.07, 0.07, 0.09) rough=0.90 |
| Orange_Accent | Tabs, headers, recess outlines, accents | (0.91, 0.36, 0.02) rough=0.80 |
| Metal_Clasp | Clasp graphics (flat printed, not 3D hardware) | (0.72, 0.72, 0.75) metal=1.0 rough=0.20 |
| Cream_Label | Exterior label, barcode tag, pockets | (0.95, 0.92, 0.82) rough=1.00 |
| Lid_Interior | Inside lid surface | (0.10, 0.10, 0.13) rough=0.90 |
| Item_Box | Dark retail item boxes (Brad Sterling / Elevate Co. branding) | (0.08, 0.08, 0.10) rough=0.85 |
| Shredded_Paper | Shredded "CLASSIFIED" paper padding in back zone | (0.08, 0.08, 0.07) rough=0.95 |
| DocSet_Cover | Document set cover stock | (0.88, 0.86, 0.80) rough=1.00 |
| Compartment_Cover | Lift-off cover (rigid paperboard) | (0.10, 0.10, 0.12) rough=0.90 |
| Duct_Tape_Gray | Handle wrap | (0.52, 0.52, 0.52) rough=0.95 |
| Rubber_Stamp_Red | "CLEARED FOR OFFICE USE" stamp | (0.58, 0.06, 0.06) rough=1.00 |
| Amazon_Box | Outer corrugated shipping box | (0.60, 0.45, 0.28) rough=0.95 |

---

## Object Naming Convention

| Prefix | Type |
|--------|------|
| `Amazon_Box_` | Outer shipping box panels and flaps |
| `Box_` | Briefcase exterior panels |
| `Case_Lid` | Lid panel |
| `Lid_` | Lid interior elements (pockets, surface print) |
| `Ext_Panel_` | Exterior decorative panel details |
| `Tray_1_` / `Tray_2_` | Tray bodies and recess geometry |
| `ItemBox_` | Individual item boxes (e.g., ItemBox_Shank, ItemBox_CellTalk) |
| `DocSet_1_` / `DocSet_2_` | Document sets |
| `Compartment_` | Back zone mug compartment elements |
| `Compartment_Cover_` | Lift-off cover (horizontal surface + vertical front face serving as divider) |
| `Shredded_Paper_` | Shredded "CLASSIFIED" paper padding geometry |
| `Handle_` | Handle components |
| `Clasp_` | Clasp graphics (printed, flat) |
| `Exterior_Label` | Front cream label |

---

## Starter Script

The v6 script should generate the current 2-zone layout at 14" x 11.5" x 5.0" inside an outer Amazon box at ~15.5" x 13.0" x 6.5". Key features: outer Amazon box with flaps, two-zone Y split, compartment cover with vertical front face as divider, mug compartment with shredded paper fill, two document sets (Doc Set 1 on Tray 1, Doc Set 2 on compartment cover), single-mold identical trays with landscape recesses, 3 item boxes in Tray 1 (pen box as tray-and-sleeve), 4 positions in Tray 2 (3 card boxes + empty confiscated stapler recess).

---

## Key Things Still Needed in Blender

- [ ] Bevel all exterior edges (0.1-0.15" bevel) — single biggest improvement to briefcase feel
- [ ] Lid hinged open for hero open view (angle TBD — lid backstop angle is removed from spec)
- [ ] Die-cut recess geometry on tray floors — molded cutouts shaped for ITEM BOXES (6 box recesses + 1 stapler recess), landscape orientation (wide at back, pen-sized at front)
- [ ] Chalk outline decals (stapler recess + box outline silhouettes on tray floors)
- [ ] Orange lift tabs — hybrid: decorative on tray back edge + finger notch on front edge
- [ ] Duct tape texture / normal map on handle bar
- [ ] Shredded "CLASSIFIED" paper fill geometry (crumpled paper look, not foam)
- [ ] Mug proper cylinder geometry + handle + print face (lying on side, handle to the side)
- [ ] Small card/tag inside mug (hidden note easter egg)
- [ ] Compartment cover with vertical front face serving as divider wall (already modeled as flat slab — needs vertical face added)
- [ ] Document set objects: Doc Set 1 on Tray 1, Doc Set 2 on compartment cover (format TBD — placeholder flat rectangles)
- [ ] Pen box (Cubicle Shank) as tray-and-sleeve (matchbox style) — inner tray slides out of outer sleeve
- [ ] Individual tuck-end box detail geometry (5 boxes, each with printable surfaces for Elevate Co. branding)
- [ ] Outer Amazon box with openable flaps (corrugated brown, Brad Sterling / Elevate Co. marketing voice)
- [ ] Exterior labels on lid + front face
- [ ] Camera angles for video walkthrough: Amazon box opening, closed 3/4, open overhead, open isometric, zone-by-zone reveals, compartment reveal

---

## What's Been REMOVED (do not model)

- Booking frame (removed v6)
- OG character / sticky note graphics (removed v6)
- Doc Set 3 / Manual 3 (consolidated to 2 doc sets in v6)
- Separate divider wall piece (compartment cover front face serves this role in v6)
- Belly band (TBD / under review as of v6)
- Component J (OG Sticky Notes) (removed v6)
- Tray 3
- All D-ring / binder ring hardware
- Ring mounting spine
- Ring clearance zone
- Binder pages (hole-punched sheets, sections between trays)
- Polaroid sleeve in binder rings
- Lid backstop angle (100-105 degrees)
- "Die-cut cutout through the lid" — the lid is SOLID
- Third booklet
- Coil-bound booklet binding
- Separate Yard Pass item
- Die-cut foam padding in back zone (replaced by shredded "CLASSIFIED" paper)
- Evidence bag and its 4 contained items (Snitch Switch paperclips, Ankle Monitor wristband, Evidence Eraser, Solitary ear plugs)
- Contraband Cry Rags (tissues)
- Rap Sheet (notepad)
- Guide cards (absorbed into item box packaging)
- Corporate Parole Passport (replaced by doc sets)
- Loose items in tray recesses (ALL tray items now in individual boxes)
- Binder clips on document sets (format TBD)

---

## Brand Voice (for labels in model)

- **Single voice:** Brad Sterling / Elevate Co. — sleazy marketing exec, over-enthusiastic, buzzword-laden, passive-aggressive positivity
- **All surfaces:** Outer Amazon box, item box retail exteriors, document sets, briefcase interior copy, all branding
- Primary copy: "OFFICE SURVIVAL KIT / Standard issue for your corporate sentence."
- Interior accent: Orange (#e85d04)
- Exterior: Matte black, cream label, evidence-tag aesthetic
- Exterior label, stamp, and evidence tag are on the lid (top surface, +Z). Handle and clasps are on the front face (+Y). These are different surfaces.
- Tray recesses: Each box gets its item name + a short tagline printed on the tray surface beside the chalk outline.

---

## Changelog

- **v6 — April 2026:** OG character removed. Booking frame removed. Doc sets 3 to 2. Single tray mold. Pen box changed from tuck-end to tray-and-sleeve. Divider wall merged into compartment cover vertical face. Component J (OG Sticky Notes) removed. Belly band flagged TBD / under review.
- **v5 — March 13, 2026:** Major creative pivot. Two-character narrative. Items 13 to 7 + empty recess. Individual tuck-end boxes. Outer Amazon box added.
- **v4 — March 11, 2026:** 16 ideation decisions cascaded. Document sets, shredded paper, booking frame added.
