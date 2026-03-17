# Office Survival Kit — Physical Dimensions & Sourcing Spec

**Last Updated:** March 13, 2026
**Version:** 10
**Status:** Working Draft — pending sourcing confirmation
**Purpose:** Complete physical dimensions for every component. Ready to hand to sourcing.

**Document Scope:** This document owns all MEASUREMENTS — box dimensions, structural thicknesses, component dimensions, stack math, coordinates, item working dimensions, and derived positions. For DESIGN DECISIONS (reveal sequence, color scheme, aesthetic direction, narrative structure, copy assignments), see the Packaging Spec v9. Where both documents state a value, the designated owner is authoritative.

> **For sourcing partners:** This document contains all physical measurements for quoting. Items marked [WORKING ESTIMATE] need confirmation before production tooling. See "Key Questions for Sourcing" at the end for priority items.

**⚠️ MAJOR LAYOUT CHANGE (v10):** Items reduced from 11 to 8 (7 physical + 1 empty recess). All tray items are now individually boxed. Trays use Pelican-style die-cut recesses shaped for the BOXES (not loose items). Evidence bag eliminated. Guide cards eliminated (absorbed into item box packaging). Corporate Parole Passport replaced by Activity Guide. Binder-clipped document sets replaced — format TBD. Outer Amazon shipping box added.

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

**Mug footprint when lying on side (handle to side):** 3.5" tall x 4.0" wide (diameter + handle clearance) x 3.5" deep (mug height)

*Confirm exact mug dimensions with sourcing before finalizing box and compartment dimensions.*

---

## Box — Outer Dimensions

| Dimension | Size | Controlled By |
|-----------|------|--------------|
| **Length (X)** | 14.0" | Extra inch over v5/v6 for tray copy space [WORKING ESTIMATE — confirm with sourcing] |
| **Width (Y)** | 11.5" | Front tray zone + divider wall + back mug compartment. Sized to give true 6.5" front zone interior after walls. [WORKING ESTIMATE — confirm with sourcing] |
| **Depth (Z)** | 5.0" | Back zone stack height — mug diameter + padding + cover + lid + manufacturing tolerance (see Stack Calculation) [WORKING ESTIMATE — confirm with sourcing] |

**Proportion check:**
- Front face (14" x 5.0") = 2.8:1 ratio
- Top face (14" x 11.5") = 1.22:1 ratio

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
| Magnet 1 (behind left clasp) | X ~ -4.5" | Behind printed clasp graphic [WORKING ESTIMATE] |
| Magnet 2 (inner left) | X ~ -1.5" | Evenly spaced [WORKING ESTIMATE] |
| Magnet 3 (inner right) | X ~ +1.5" | Evenly spaced [WORKING ESTIMATE] |
| Magnet 4 (behind right clasp) | X ~ +4.5" | Behind printed clasp graphic [WORKING ESTIMATE] |

**Layer 2: Belly Band** — Printed paperboard band wrapping around the closed case.

| Attribute | Spec |
|-----------|------|
| Height | 2"-3" [WORKING ESTIMATE — confirm with sourcing] |
| Material | 80-100lb cover stock |
| Print | Custom copy both sides, full color |
| Use | One-time — customer removes on first open |

**Layer 3: Snap-Fit Lip (Optional)** — Molded lip on lid front edge snaps over base front wall. Ask sourcing for feasibility and cost. Skip if cost-prohibitive.

### Exterior Hardware — Front Face (+Y, 14" x 5.0")

| Feature | Position | Spec |
|---------|----------|------|
| Handle | Front face (+Y), centered on X, vertically centered on face (Z = BOX_D / 2 = 2.5") [WORKING ESTIMATE] | Die-cut cardboard, 3.5" span, duct tape wrapped, arches upward. |
| Clasps | Front face (+Y), flanking handle, X = +/-4.5" [WORKING ESTIMATE] | Printed directly on box. Flat printed graphics only — no embossing. Magnets 1 & 4 hidden behind these. |
| IT Asset Tag | Front face (+Y) | Small institutional label, spread across surface. |
| INSPECTED BY: GARY | Front face (+Y) | QC sticker, spread across surface. |
| FRAGILE | Front face (+Y) | Rubber stamp, spread across surface. |

### Exterior Labels — Lid / Top Surface (+Z, 14" x 11.5")

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
| Lid (top, +Z) | 14" x 11.5" |
| Front face (+Y) | 14" x 5.0" |
| Back face (-Y) | 14" x 5.0" |
| Bottom (-Z) | 14" x 11.5" |
| Left edge (-X) | 11.5" x 5.0" |
| Right edge (+X) | 11.5" x 5.0" |

---

## Outer Amazon Box

| Attribute | Spec |
|-----------|------|
| Outer dimensions | ~15.5" x ~13.0" x ~6.5" [WORKING ESTIMATE] |
| Construction | Tuck-top mailer box (single lid panel, NOT 4-flap) [CONFIRM WITH SOURCING] |
| Material | Corrugated cardboard (e-flute or b-flute) |
| Interior lid printing | Yes — welcome letter + founder photo printed on interior of lid panel |
| Interior clearance | ~0.75" per side around briefcase [WORKING ESTIMATE] |
| FBA size tier | Large Standard (max 18" x 14" x 8") — verify on Seller Central |

### Clearance Breakdown

| Axis | Briefcase | + Clearance (x2) | Amazon Box |
|------|-----------|------------------|------------|
| Length (X) | 14.0" | + 1.5" (0.75" each side) | ~15.5" [WORKING ESTIMATE] |
| Width (Y) | 11.5" | + 1.5" (0.75" each side) | ~13.0" [WORKING ESTIMATE] |
| Depth (Z) | 5.0" | + 1.5" (0.75" each side) | ~6.5" [WORKING ESTIMATE] |

*Interior clearance accommodates void fill / cushioning material around the briefcase. Confirm with FBA packaging requirements and drop-test standards.*

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
| Front zone (trays) | ~6.5" | Tray 1 + Tray 2 stacked vertically with document sets between them [WORKING ESTIMATE] |
| Divider wall | ~0.25" | Full-height rigid paperboard wall separating zones |
| Back zone (mug compartment) | ~4.25" | Hidden padded compartment — mug in shredded paper, covered by J-shaped compartment cover [WORKING ESTIMATE] |
| **Total** | **~11.0"** | Matches interior width |

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

## Document Sets (on Trays)

**⚠️ FORMAT TBD — physical format not locked.** Binder-clipped document sets from v9 are superseded. Replacement format (folded inserts, loose sheets, card sets, etc.) is under review.

Two document sets rest on top of each tray and are lifted off with the tray above.

| Attribute | Document Set 1 (on Tray 1) | Document Set 2 (on Tray 2) |
|-----------|----------------------|----------------------|
| Position | Rests on Tray 1, beneath booking frame | Rests on Tray 2, beneath Tray 1 |
| Dimensions | ~13.0" x ~6.5" [WORKING ESTIMATE] | ~13.0" x ~6.5" [WORKING ESTIMATE] |
| Estimated thickness | ~0.15" [WORKING ESTIMATE] | ~0.15" [WORKING ESTIMATE] |
| Format | TBD — not locked | TBD — not locked |

*For document set content direction, narrative roles, and aesthetic approach, see Packaging Spec.*

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
| Activity Guide | ~0.25" | Rests on case floor, centered in front zone. OG sticky note on top. Hidden under cover flap + trays. [WORKING ESTIMATE] |
| Cover floor flap | 0.0625" | J-shaped compartment cover's forward extension — rests on floor over Activity Guide, extends ~3" forward from divider wall |
| Tray 2 floor | 0.125" | 18pt paperboard |
| Tray 2 walls | 0.875" | Tallest item (card boxes ~0.75") + clearance |
| Document Set 2 | 0.15" | Format TBD [WORKING ESTIMATE] |
| Tray 1 floor | 0.125" | 18pt paperboard |
| Tray 1 walls | 1.125" | Tallest item (pen box ~1.0") + clearance |
| Document Set 1 | 0.15" | Format TBD [WORKING ESTIMATE] |
| Booking frame | 0.0625" | Rigid paperboard (~24pt) |
| Lid | 0.25" | 24pt paperboard |
| **Total** | **~3.42"** | Within 5.0" depth — ~1.58" headroom |

### Back Zone Stack (Mug Compartment) — CONSTRAINING

Components stacked bottom to top:

| Component | Height | Notes |
|-----------|--------|-------|
| Base (floor of box) | 0.25" | Fixed, 24pt paperboard |
| Thin foam backup sheet | 0.25" | Baseline drop protection under mug [WORKING ESTIMATE] |
| Mug (on its side) | 3.50" | Outer diameter — CONTROLLING DIMENSION [WORKING ESTIMATE — confirm with sourcing] |
| Shredded paper above mug | ~0.25" | Compressed height — fills to just below compartment cover top surface [WORKING ESTIMATE] |
| J-shaped compartment cover (top surface) | 0.0625" | Rigid paperboard (~24pt). Top surface spans back zone. Wall drops vertically at divider. Floor flap extends ~3" into front zone (accounted for in front zone stack). |
| Lid | 0.25" | 24pt paperboard |
| **Total** | **~4.56"** | Within 5.0" depth — ~0.44" clearance |

**Back zone is still the constraining dimension.** The 5.0" case depth provides ~0.44" manufacturing tolerance over the back zone stack. If mug OD exceeds 3.5" or foam needs to be thicker for drop protection, case depth must increase. Confirm with sourcing before locking.

**Note:** Front zone stack increased from v9 (~2.79") to ~3.42" due to taller Tray 1 walls (boxed items are taller than loose items), plus the addition of the Activity Guide and J-shaped cover floor flap on the case floor. This is still well within the 5.0" case depth.

---

## Tray 2 — Bottom Tray of Front Zone (4 Positions)

| Attribute | Spec |
|-----------|------|
| Exterior footprint | ~13.5" x ~6.5" [WORKING ESTIMATE] |
| Interior footprint | ~13.25" x ~6.25" [WORKING ESTIMATE] |
| Wall height | 0.875" |
| Floor thickness | 0.125" |
| Total tray height | 1.0" (0.875" walls + 0.125" floor) |
| Material | 18pt paperboard |
| Finish | Dark carbon fiber texture — very dark charcoal/near-black with subtle metallic sheen |
| Top edge border | Prison orange accent trim — thin border around top perimeter |
| Recess style | Pelican-style die-cut recesses shaped for item BOXES |

### Lift Tab

| Attribute | Spec |
|-----------|------|
| Back edge | Decorative tab(s) along back edge of tray |
| Left & right sides | Rectangular finger notch cut into left and right side walls (cut into top surface). Each notch is lined with a U-shaped prison orange accent trim. Sized for adult fingertip grip. |

### Item Layout (viewed from above, looking down)

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│  [AFFIRMATION]  [COMPLAINT]  [PASSIVE-AGG]  [CONFISCATED    │
│   CARDS BOX      CARDS BOX    CARDS BOX      STAPLER]       │
│   4"x2.5"        4"x2.5"      4"x2.5"       ~4"x1.5"      │
│   x0.75"         x0.75"       x0.75"        ORANGE chalk   │
│                                               outline        │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

### Item Positions (4 Positions)

| Item | Internal Name | Box Dimensions | Notes |
|------|--------------|----------------|-------|
| Affirmation card box | Affirmation Cards | ~4" x 2.5" x 0.75" [WORKING ESTIMATE] | Tuck-end box, business-card deck format. Pelican-style die-cut recess. |
| Complaint card box | Complaint Cards | ~4" x 2.5" x 0.75" [WORKING ESTIMATE] | Tuck-end box, same format. Pelican-style die-cut recess. |
| Passive-aggressive card box | Passive-Aggressive Cards | ~4" x 2.5" x 0.75" [WORKING ESTIMATE] | Tuck-end box, same format. Pelican-style die-cut recess. |
| Empty stapler recess | Confiscated Stapler | ~4" x ~1.5" | Chalk outline only — stapler silhouette, no item in recess |

### Layout Math — Tray 2

Available interior: ~13.25" x ~6.25"

- 3 card boxes at 4" wide = 12" + gaps (~0.42" each between 4 items) = ~13.25"
- All items at 2.5" deep within 6.25" tray depth — ~3.75" remaining for copy space and breathing room
- Stapler recess at 4" x 1.5" fits alongside card boxes

### Copy Space — Tray 2
- 4 positions across ~13.25" x ~6.25" — generous space with only 3 small boxes + 1 flat recess
- Full tray width available — no ring column consuming space
- ~3.75" depth below items for copy space

*For copy approach and tray design philosophy, see Packaging Spec.*

---

## Tray 1 — Top Tray, Revealed First (3 Positions)

| Attribute | Spec |
|-----------|------|
| Exterior footprint | ~13.5" x ~6.5" [WORKING ESTIMATE] |
| Interior footprint | ~13.25" x ~6.25" [WORKING ESTIMATE] |
| Wall height | 1.125" |
| Floor thickness | 0.125" |
| Total tray height | 1.25" (1.125" walls + 0.125" floor) |
| Material | 18pt paperboard |
| Finish | Dark carbon fiber texture — very dark charcoal/near-black with subtle metallic sheen |
| Top edge border | Prison orange accent trim — thin border around top perimeter |
| Recess style | Pelican-style die-cut recesses shaped for item BOXES |

### Lift Tab

| Attribute | Spec |
|-----------|------|
| Back edge | Decorative tab(s) along back edge of tray |
| Left & right sides | Rectangular finger notch cut into left and right side walls (cut into top surface). Each notch is lined with a U-shaped prison orange accent trim. Sized for adult fingertip grip. |

### Item Layout (viewed from above, looking down)

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│  [PEN BOX────────────]  [TATTOO BOX──]  [STICKER BOX──]    │
│   6.5"x1.75"x1.0"       5"x3.5"x0.5"    5"x3.5"x0.5"     │
│                                                              │
│              [copy space]                                    │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

### Item Positions (3 Positions)

| Item | Internal Name | Box Dimensions | Notes |
|------|--------------|----------------|-------|
| Pen box | Cubicle Shank | ~6.5" x 1.75" x 1.0" [WORKING ESTIMATE] | Tuck-end box, longest box in kit. Pelican-style die-cut recess. |
| Tattoo box | Lifer Ink | ~5" x 3.5" x 0.5" [WORKING ESTIMATE] | Tuck-end box, flat format. Pelican-style die-cut recess. |
| Sticker box | Turf Tags | ~5" x 3.5" x 0.5" [WORKING ESTIMATE] | Tuck-end box, same format as tattoo box. Pelican-style die-cut recess. |

### Layout Math — Tray 1

Available interior: ~13.25" x ~6.25"

- Pen box (6.5") + tattoo box (5") + sticker box (5") = 16.5" — exceeds 13.25" if placed in a single row
- Layout option: pen box on left; tattoo + sticker boxes stacked or offset on right (both are 3.5" deep, fitting within 6.25" tray depth)
- Exact positioning TBD based on sourcing confirmation of box dimensions

### Copy Space — Tray 1
- 3 positions across ~13.25" x ~6.25" — most open tray, best for copy
- Full tray width available — no ring column consuming space
- Significant open space below and around boxes

*For copy approach and tray design philosophy, see Packaging Spec.*

---

## Mug Compartment (Back Zone)

| Attribute | Spec |
|-----------|------|
| Interior footprint | ~13.5" x ~4.0" (after subtracting divider wall and back box wall) [WORKING ESTIMATE] |
| Interior depth (Z) | ~4.5" (floor to lid) [WORKING ESTIMATE] |

### Item Layout (viewed from above, looking down)

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│  [ACTIVITY          [MUG - on side,                        │
│   GUIDE]             handle to side]                       │
│   5.5"x4.25"         3.5" dia x 3.5" H                    │
│                       (4.0" w/ handle)                     │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

### Item Positions

| Item | Internal Name | Working Dimensions | Position |
|------|--------------|-------------------|----------|
| Enamel camp mug | Mug Shot | 3.5" dia x 3.5" H (4.0" with handle) | Center, on its side, handle to the side |

**Note:** Activity Guide has been **moved to the front zone floor** — see Activity Guide section below. It no longer resides in the mug compartment.

*For compartment concealment design, reveal sequence, and narrative role, see Packaging Spec.*

---

## Activity Guide — Booklet Spec

*Note: This replaces the Corporate Parole Passport from v9. Now sits on the briefcase floor in the front zone (centered, under the trays and J-shaped cover floor flap), with an OG sticky note on top. Discovered when both trays are removed.*

| Attribute | Spec |
|-----------|------|
| Format | Saddle-stitched booklet |
| Closed dimensions | 5.5" x 4.25" [WORKING ESTIMATE] |
| Thickness | ~0.25" [WORKING ESTIMATE] |
| Page count | 16 pages |
| Cover stock | 80-100lb cover |
| Interior stock | 60-70lb text |

*For Activity Guide content direction and theming, see Packaging Spec.*

---

## Mug Packing — Shredded CLASSIFIED Documents

| Attribute | Spec |
|-----------|------|
| Bottom layer | Thin foam backup sheet ~0.25" [WORKING ESTIMATE] — baseline drop protection under mug |
| Foam type | Closed-cell polyethylene or EVA foam — confirm with sourcing |
| Mug position | Sits on thin foam backup, lying on its side |
| Surrounding fill | Crumpled/shredded printed paper — "CLASSIFIED" documents aesthetic |
| Top fill | Shredded paper fills to just below compartment cover top surface — variable height, estimated ~0.25" compressed above mug [WORKING ESTIMATE] |

**Note:** Activity Guide has been moved to the front zone floor. It no longer resides in the mug compartment.

*For shredded paper design, printed content on shreds, and interior color scheme, see Packaging Spec.*

---

## Compartment Cover (J-Shaped)

| Attribute | Spec |
|-----------|------|
| Shape | J-shaped single piece: top surface + vertical wall + floor flap |
| Top surface dimensions | ~13.5" x ~4.0" (spans back zone opening) [WORKING ESTIMATE] |
| Wall height | Full back zone interior height (~4.16" from floor to top surface) [WORKING ESTIMATE] |
| Wall thickness | ~0.0625" (~24pt paperboard). Outer face flush at divider line. Inner face recessed 0.125" into back zone. |
| Floor flap | Extends ~3.0" forward from divider wall into front zone, resting on case floor [WORKING ESTIMATE] |
| Material thickness | ~0.0625" (rigid paperboard, ~24pt) throughout |
| Material finish | Dark carbon fiber texture (matching trays) |
| Both sides of top printable | Yes |
| Placement | Top surface rests on back zone walls. Wall drops vertically at divider line. Floor flap rests on case floor (on top of Activity Guide). |
| Retention | Gravity + tray stack weight on floor flap. Cannot be lifted until both trays are removed — the floor flap is trapped under the tray stack. |

*For compartment cover copy approach (teaser top, narrative underside), see Packaging Spec.*

---

## Booking Frame

| Attribute | Spec |
|-----------|------|
| What it is | Separate, removable rigid paperboard frame. NOT a cutout in the lid. NOT attached to the lid. |
| Outer dimensions | ~11" x ~9" [WORKING ESTIMATE] |
| Opening dimensions | ~7" x ~5" [WORKING ESTIMATE] |
| Frame border | ~1.5"-2" on all sides |
| Thickness | ~0.0625" (rigid paperboard, ~24pt) |
| Placement | Rests on top of Document Set 1 / tray stack when case is closed. First object seen when lid opens. Held by gravity. |
| Printed elements | Height ruler markings on **both** vertical sides of the frame border. "CORPORATE CORRECTIONAL FACILITY — BOOKING DEPT." across top border. Case number across bottom border. |

**CRITICAL: The lid is SOLID. No holes, no cutouts, no openings of any kind. The booking frame is a separate piece resting inside the case.**

---

## Inside Lid

| Attribute | Spec |
|-----------|------|
| Surface area | ~13.5" x ~11.0" (full interior lid surface) [WORKING ESTIMATE] |
| Pocket 1 | Horizontal, 4.5" x 1.25" — intake/custody transfer card sleeve |
| Pocket 2 | Vertical, 3.5" x 4.5" — map |
| Intake/transfer card | 4.0" x 1.0" |

*For pocket content design, card theming, and inside lid copy approach, see Packaging Spec.*

### Back Wall Interior Treatment

| Attribute | Spec |
|-----------|------|
| Surface | Interior face of back box wall, visible when compartment is open |
| Available area | ~13.5" x ~4.5" |

*For back wall treatment design direction, see Packaging Spec.*

---

## Individual Item Box Dimensions Summary

All tray items are individually boxed in tuck-end boxes. All dimensions are [WORKING ESTIMATE].

| Item | Internal Name | Box Type | Box Dimensions | Tray | Notes |
|------|-------------|----------|---------------|------|-------|
| Cubicle Shank (pen) | Cubicle Shank | Tuck-end | ~6.5" x 1.75" x 1.0" | Tray 1 | Longest box |
| Lifer Ink (tattoos) | Lifer Ink | Tuck-end | ~5" x 3.5" x 0.5" | Tray 1 | Flat format |
| Turf Tags (stickers) | Turf Tags | Tuck-end | ~5" x 3.5" x 0.5" | Tray 1 | Same as tattoo box |
| Affirmation Cards | Affirmation Cards | Tuck-end | ~4" x 2.5" x 0.75" | Tray 2 | Business-card deck |
| Complaint Cards | Complaint Cards | Tuck-end | ~4" x 2.5" x 0.75" | Tray 2 | Same format |
| Passive-Aggressive Cards | Passive-Aggressive Cards | Tuck-end | ~4" x 2.5" x 0.75" | Tray 2 | Same format |

---

## Item Working Dimensions Summary

### Tray Items (Boxed)

| Item | Internal Name | Box Dimensions | Location |
|------|--------------|----------------|----------|
| Pen box | Cubicle Shank | ~6.5" x 1.75" x 1.0" [WORKING ESTIMATE] | Tray 1 |
| Tattoo box | Lifer Ink | ~5" x 3.5" x 0.5" [WORKING ESTIMATE] | Tray 1 |
| Sticker box | Turf Tags | ~5" x 3.5" x 0.5" [WORKING ESTIMATE] | Tray 1 |
| Affirmation card box | Affirmation Cards | ~4" x 2.5" x 0.75" [WORKING ESTIMATE] | Tray 2 |
| Complaint card box | Complaint Cards | ~4" x 2.5" x 0.75" [WORKING ESTIMATE] | Tray 2 |
| Passive-aggressive card box | Passive-Aggressive Cards | ~4" x 2.5" x 0.75" [WORKING ESTIMATE] | Tray 2 |
| Empty stapler recess | Confiscated Stapler | ~4" x ~1.5" | Tray 2 — chalk outline only, no item |

**Tray 1: 3 boxed items. Tray 2: 3 boxed items + 1 empty chalk outline recess (4 positions total).**

### Compartment Items

| Item | Internal Name | Working Dimensions | Location |
|------|--------------|-------------------|----------|
| Enamel camp mug | Mug Shot | 3.5" dia x 3.5" H | Compartment (center) |
| Activity Guide | Activity Guide | 5.5" x 4.25" x ~0.25" [WORKING ESTIMATE] | Front zone floor (centered, under trays + cover flap). OG sticky note on top. |

### Structural Components

| Component | Working Dimensions | Notes |
|-----------|--------------------|-------|
| Booking frame | ~11" x ~9" outer, ~7" x ~5" opening, ~0.0625" thick | Separate removable piece [WORKING ESTIMATE] |
| Document Set 1 | ~13.0" x ~6.5" x ~0.15" | Format TBD [WORKING ESTIMATE] |
| Document Set 2 | ~13.0" x ~6.5" x ~0.15" | Format TBD [WORKING ESTIMATE] |
| Compartment cover | ~13.5" x ~4.0" x ~0.0625" | Both sides printable [WORKING ESTIMATE] |
| Belly band | ~2"-3" tall x wraps full case perimeter | One-time use [WORKING ESTIMATE] |
| Divider wall | ~13.5" x ~4.5" x ~0.25" | Full-height, structural [WORKING ESTIMATE] |
| Thin foam backup sheet | ~13.5" x ~4.0" x ~0.25" | Under mug for baseline drop protection [WORKING ESTIMATE] |
| Shredded paper packing | Variable — fills compartment around mug | Crumpled/shredded "CLASSIFIED" documents [WORKING ESTIMATE] |
| Outer Amazon box | ~15.5" x ~13.0" x ~6.5" | Corrugated cardboard (e-flute or b-flute) [WORKING ESTIMATE] |

---

## Copy Space Assessment Per Tray

| Tray | Items | Available Space | Notes |
|------|-------|----------------|-------|
| Tray 1 | 3 boxed items | Very generous — only 3 boxes in ~13.25" x ~6.25" | Best tray for copy — least crowded |
| Tray 2 | 3 boxed items + 1 empty recess | Generous — 4 small positions in ~13.25" x ~6.25" | Compact items leave significant breathing room |

*For copy approach, tray design philosophy, and copy surface assignments, see Packaging Spec.*

---

## Coordinate System Reference (for 3D Modeling)

All 3D modeling uses: **1 Blender Unit = 1 inch**

| Axis | Dimension | Description |
|------|-----------|-------------|
| X | 14.0" | Length of case (left to right) [WORKING ESTIMATE] |
| Y | 11.5" | Width of case (front to back); back wall at -Y; handle/clasp wall at +Y [WORKING ESTIMATE] |
| Z | 5.0" | Depth of case (bottom to top when lying flat) [WORKING ESTIMATE] |

### Key Z-Axis Reference Points

| Reference Point | Coordinate | Notes |
|----------------|------------|-------|
| Case bottom (exterior) | Z = 0 | |
| Case interior floor | Z = 0.25" | |
| Activity Guide top | Z ~ 0.50" | Front zone — rests on case floor with OG sticky note |
| Cover floor flap top | Z ~ 0.5625" | Front zone — J-shaped cover flap rests on Activity Guide |
| Thin foam backup top surface | Z = 0.50" | Back zone only [WORKING ESTIMATE] |
| Mug center (on its side) | Z ~ 2.25" | Back zone only (0.25 + 0.25 + 1.75) [WORKING ESTIMATE] |
| Tray 2 floor bottom | Z ~ 0.5625" | Front zone — sits on cover floor flap |
| Tray 2 floor top | Z ~ 0.6875" | Front zone (0.5625 + 0.125) |
| Tray 2 top (wall tops) | Z ~ 1.5625" | Front zone (0.5625 + 0.125 + 0.875) |
| Document Set 2 top | Z ~ 1.71" | [WORKING ESTIMATE] |
| Tray 1 floor bottom | Z ~ 1.71" | Front zone |
| Tray 1 floor top | Z ~ 1.835" | Front zone (1.71 + 0.125) |
| Tray 1 top (wall tops) | Z ~ 2.835" | Front zone (1.71 + 0.125 + 1.125) |
| Document Set 1 top | Z ~ 2.985" | [WORKING ESTIMATE] |
| Booking frame top | Z ~ 3.05" | [WORKING ESTIMATE] |
| Lid bottom | Z = 4.75" | [WORKING ESTIMATE] |
| Lid top (exterior) | Z = 5.0" | [WORKING ESTIMATE] |

### Y-Axis Zone Boundaries

| Reference Point | Coordinate | Notes |
|----------------|------------|-------|
| Back wall exterior | Y = -5.75" | [WORKING ESTIMATE] |
| Back wall interior | Y = -5.50" | [WORKING ESTIMATE] |
| Back zone (mug compartment) | Y = -5.50" to -1.25" | ~4.25" deep [WORKING ESTIMATE] |
| Divider wall | Y = -1.25" to -1.00" | ~0.25" thick [WORKING ESTIMATE] |
| Front zone (trays) | Y = -1.00" to +5.50" | ~6.50" deep [WORKING ESTIMATE] |
| Front zone center Y | Y ~ +2.25" | [WORKING ESTIMATE] |
| Front wall interior | Y = +5.50" | [WORKING ESTIMATE] |
| Front wall exterior / handle + clasps | Y = +5.75" | [WORKING ESTIMATE] |

### Exterior Surface Reference

| Feature | Surface | Coordinate |
|---------|---------|------------|
| Handle + Clasps + Front face labels | Front face (+Y) | Y = +5.75" exterior [WORKING ESTIMATE] |
| Main label + Stamp + Evidence tag | Lid/top surface (+Z) | Z = 5.0" exterior [WORKING ESTIMATE] |
| Handle Z-position | Front face | Z = 2.5" (vertically centered on 5.0" face) [WORKING ESTIMATE] |

### Outer Amazon Box Coordinates

| Reference Point | Coordinate | Notes |
|----------------|------------|-------|
| Amazon box bottom (exterior) | Z = -0.75" (relative to briefcase) | [WORKING ESTIMATE] |
| Amazon box top (exterior) | Z = 5.75" (relative to briefcase) | [WORKING ESTIMATE] |
| Amazon box left (exterior) | X = -7.75" (relative to briefcase center) | [WORKING ESTIMATE] |
| Amazon box right (exterior) | X = +7.75" (relative to briefcase center) | [WORKING ESTIMATE] |

---

## Removed / Superseded Elements

For the full list of removed elements (Tray 3, D-ring/binder ring hardware, binder pages, die-cut lid cutout, lid opening concern, etc.), see Packaging Spec Section 15.

**Removed in v10:**
- **Evidence bag** (Confiscated Items) — eliminated. Individual items (Snitch Switch paperclips, Ankle Monitor wristband, Evidence Eraser, Solitary ear plugs) cut from kit.
- **Guide cards** (Tattoo Guide, Sticker Guide) — eliminated as separate tray items. Content absorbed into individual item box packaging.
- **Corporate Parole Passport** — replaced by Activity Guide (5.5" x 4.25" x ~0.25", 16-page saddle-stitched).
- **Binder-clipped document sets** — format superseded. Replacement format TBD.
- **Notepad (Rap Sheet)** — cut from kit.
- **Tissue pack (Contraband Cry Rags)** — cut from kit.
- **Sticker strip (Turf Tags) as loose item** — now boxed.
- **Tattoo strip (Lifer Ink) as loose item** — now boxed.
- **Pen (Cubicle Shank) as loose item** — now boxed.

**Removed in v8:** Yard Pass as separate compartment item (merged into Corporate Parole Passport pages). Die-cut foam mug cradle (replaced by thin foam backup + shredded paper packing). Coil-bound booklets (replaced by binder-clipped document sets).

No removed elements should reappear in this spec.

---

## Key Questions for Sourcing

1. Confirm 11oz enamel mug outer diameter and height — back zone stack and case depth adjust from here
2. **Item box dimensions and tolerances** — confirm tuck-end box dimensions for all 6 boxed items. What are standard tolerances for tuck-end boxes at these sizes? [WORKING ESTIMATE on all box dims]
3. **Die-cut recess depth for boxed items** — can 18pt tray floors accept Pelican-style die-cut recesses sized for tuck-end boxes? What depth tolerance is achievable? How tight can box-to-recess fit be?
4. Is a thin foam backup sheet (~0.25") plus shredded paper fill sufficient drop protection for an enamel mug? Or does the foam backup need to be thicker? [WORKING ESTIMATE]
5. Confirm compartment cover construction — can rigid paperboard (~24pt) span ~13.5" x ~4.0" without sagging under tray weight?
6. Confirm divider wall construction — can 18pt or 24pt paperboard support full tray stack as full-height wall? Does it need to be doubled or reinforced?
7. Case depth tolerance — back zone stack estimates ~4.56" within 5.0" case. Is ~0.44" clearance sufficient?
8. Magnet embedding method — can 4 neodymium disc magnets be embedded flush in 24pt paperboard along 14" front edge? Size/pull force recommendation?
9. Snap-fit lip feasibility and cost — is a molded snap-fit lip compatible with 24pt paperboard construction?
10. Belly band stock weight recommendation (80-100lb cover?) and printing method
11. Confirm printing capability on dark-colored tray floors (for Pelican-style recess outlines and copy)
12. **Activity Guide dimensions** — confirm 5.5" x 4.25" saddle-stitched booklet (16 pages) fits on front zone floor beneath cover floor flap and tray stack. What is actual closed thickness?
13. **Outer Amazon box construction** — we want a **tuck-top mailer box** (single lid panel that flips open and tucks into the front, NOT a standard 4-flap box). Corrugated cardboard (e-flute or b-flute) at ~15.5" x ~13.0" x ~6.5". Interior lid will be printed (welcome letter + photo). Confirm: is tuck-top feasible at this size? What is standard wall thickness? Will briefcase shift during shipping? Recommend void fill material.
14. **FBA compliance** — verify ~15.5" x ~13.0" x ~6.5" outer box qualifies as Large Standard tier. Confirm with current FBA dimension limits.
15. Confirm matte exterior + satin finish on applied elements (labels, stickers)
16. Confirm die-cut cardboard handle construction and attachment method
17. What is MOQ for full kit vs. components separately?
18. Confirm booking frame ~0.0625" (~24pt) rigid paperboard is adequate for structural integrity at ~11" x ~9" with ~7" x ~5" opening
19. **Tuck-end box printing** — confirm 6 unique tuck-end box designs can be printed with full color exterior at these quantities. What is MOQ per box design?

---

## Changelog

| Date | Change |
|------|--------|
| March 13, 2026 | v10.1 — **Blender model alignment updates.** Activity Guide moved from mug compartment to front zone floor (centered, under trays, with OG sticky note). Compartment cover changed from flat lift-off lid to J-shaped design (top surface + vertical wall + floor flap extending ~3" into front zone). Finger notches moved from front edge semicircle to rectangular cutouts on left/right side walls with prison orange U-shaped trim inserts. Added material/finish specs: dark carbon fiber texture on trays and compartment cover, prison orange accent trim on tray top borders and finger notches, orange chalk outline on confiscated stapler recess. Updated front zone stack height from ~3.11" to ~3.42" (added Activity Guide + cover flap). Updated Z-axis reference points throughout. |
| March 13, 2026 | v10 — **MAJOR ITEM AND LAYOUT CHANGE.** Items reduced from 11 to 8 (7 physical + 1 empty recess). All tray items now individually boxed in tuck-end boxes. Trays use Pelican-style die-cut recesses shaped for BOXES (not loose items). Tray 1: 3 boxed items (pen, tattoos, stickers). Tray 2: 3 boxed card decks + 1 empty stapler recess. Evidence bag eliminated (and all 4 items it contained: Snitch Switch, Ankle Monitor, Evidence Eraser, Solitary). Guide cards eliminated (absorbed into item box packaging). Notepad (Rap Sheet) and tissue pack (Contraband Cry Rags) cut. Corporate Parole Passport replaced by Activity Guide (5.5" x 4.25" x ~0.25", 16-page saddle-stitched). Binder-clipped document sets superseded — format TBD. Added outer Amazon shipping box (~15.5" x ~13.0" x ~6.5"). Recalculated front zone stack: ~3.11" (was ~2.79" in v9) due to taller Tray 1 walls for boxed items. Back zone stack unchanged at ~4.56". Updated all tray layouts, item summaries, coordinate references, and sourcing questions. |
| March 11, 2026 | v9 — **Consistency audit fixes.** Passport page count corrected from 8-12 to 12-16 (was not updated when Yard Pass was merged into Passport in v8). Document set interior stock weight corrected from 80-100lb text to 60-80lb text (aligning with Item Specs v5 and Packaging Spec v7). Updated sourcing questions #5 and #12 to match corrected values. |
| March 11, 2026 | v8 — **Ideation/optimization pass.** Booklets to Document Sets: replaced coil-bound booklets with binder-clipped document sets (thinner: DS1 ~0.15", DS2 ~0.20"). Foam to Shredded Paper: replaced die-cut foam mug cradle with thin foam backup (~0.25") + shredded "CLASSIFIED" documents packing. Yard Pass removed as separate item (merged into Corporate Parole Passport pages). Tray 2 reorganized: 4 items (Snitch Switch, Ankle Monitor, Evidence Eraser, Solitary) consolidated into single "Confiscated Items" evidence bag (~6" x 4" x ~1.5"); added empty "Confiscated Stapler" chalk outline recess; Tray 2 now has 5 positions (was 7 individual items). Recalculated both stack heights: front zone ~2.79" (was ~2.99", headroom improved to ~2.21"), back zone ~4.56" (was ~4.69", clearance improved to ~0.44"). Updated all Z-axis reference coordinates. Updated sourcing questions (foam specs to shredded paper protection, coil-binding to binder clips, added evidence bag sizing). |
| March 11, 2026 | v7 — Added sourcing partner handoff note. No measurement changes. |
| March 11, 2026 | v6.1 — Post-comparison revision: updated dimensions to 14" x 11.5" x 5.0", applied five consistency fixes (guide card tray assignments — Tray 1 = 4 items incl. Tattoo Guide Card, Tray 2 = 7 items incl. Sticker Guide Card; booklet thickness differentiated — Booklet 1 ~0.25", Booklet 2 ~0.30"; booking frame thickness locked at ~0.0625" ~24pt, removed 0.125" option; added "Lid opening when closed" removed-concern note; booking frame height rulers confirmed on both vertical sides). Deduplicated cross-document content per ownership rules — removed design rationale, color descriptions, narrative descriptions, copy direction, and reveal sequence details; replaced with cross-references to Packaging Spec. Added document scope header. Added sourcing question #17 for booking frame thickness validation. |
| March 11, 2026 | v6 Rev B — Dimension updates: case length 13" to 14" (extra inch for tray copy space), case width 11" to 11.5" (true 6.5" front zone interior after walls), case depth 4.75" to 5.0" (manufacturing tolerance for back zone, clearance improves from ~0.06" to ~0.31"). All surface dimensions, interior dimensions, tray footprints, booklet dimensions, coordinate system values, and zone boundaries updated to cascade from new outer dimensions. Front zone depth corrected to 6.5" (was 6.0"). Booklets updated to ~13" x 6.5" with heavier stock weights (100-120lb cover / 80-100lb text, thickness estimates increased). Booking frame height rulers changed from one side to both sides. Added die-cut recess (Pelican case style) tray design notes and copy space approach. Added Tattoo Guide Card (~3" x 4") to Tray 1 and Sticker Guide Card (~3" x 4") to Tray 2. Magnet X-positions recalculated for 14" front edge. Recalculated both zone stacks with updated values. Added surface dimensions summary table. Added sourcing question for die-cut recess capability. |
| March 11, 2026 | v6 — **MAJOR LAYOUT REDESIGN.** Interior changed from 3-tray vertical stack with binder rings to 2-zone side-by-side layout with hidden mug compartment. Box width 8.0" to 11.0". Box depth 6.5" to 4.75". Removed: Tray 3, all D-ring/binder ring hardware, ring clearance zone, binder page specs, third booklet section, lid backstop angle, die-cut booking frame cutout. Added: hidden mug compartment (back zone), lift-off compartment cover, full-height divider wall, die-cut foam mug padding, two-zone interior layout, booking frame as separate removable component, belly band, two coil-bound booklets, hybrid lift tabs, 4-magnet closure system, snap-fit lip as optional. Corrected booking frame: lid is solid, frame is separate piece. |
| March 10, 2026 | v5 — Moved main label, rubber stamp, and barcode/evidence tag from front face (+Y) to lid/top surface (+Z). Split exterior sections. Updated handle Z-position. Changed booking frame to die-cut cutout (SUPERSEDED in v6). |
| March 10, 2026 | v4 — Corrected handle and clasps back to front face (+Y). |
| March 9, 2026 | v3 — Incorrectly moved handle and clasps from front face (+Y) to top surface (+Z). Error corrected in v4. |
| March 9, 2026 | v2 — Updated box length 11" to 13" for briefcase proportions (2:1 front face ratio). |
| March 9, 2026 | v1 — Full dimensional spec built from mug-up. |
