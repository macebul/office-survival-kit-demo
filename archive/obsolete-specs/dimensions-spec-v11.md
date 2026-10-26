# Office Survival Kit — Physical Dimensions & Sourcing Spec

**Last Updated:** April 2026
**Version:** 11
**Status:** Working Draft — pending sourcing confirmation
**Purpose:** Complete physical dimensions for every component. Ready to hand to sourcing.

**Document Scope:** This document owns all MEASUREMENTS — box dimensions, structural thicknesses, component dimensions, stack math, coordinates, item working dimensions, and derived positions. For DESIGN DECISIONS (reveal sequence, color scheme, aesthetic direction, narrative structure, copy assignments), see the Packaging Spec v9. Where both documents state a value, the designated owner is authoritative.

> **For sourcing partners:** This document contains all physical measurements for quoting. Items marked [WORKING ESTIMATE] need confirmation before production tooling. See "Key Questions for Sourcing" at the end for priority items.

**⚠️ MAJOR LAYOUT CHANGE (v11):** Items reduced from 11 to 8 (7 physical + 1 empty recess). All tray items are now individually boxed (5 tuck-end + 1 tray-and-sleeve). Trays use Pelican-style die-cut recesses shaped for the BOXES (not loose items). Evidence bag eliminated. Guide cards eliminated (absorbed into item box packaging). Corporate Parole Passport replaced by Doc Set 2 (saddle-stitched booklet on compartment cover). Doc sets reduced from 3 to 2. Booking frame removed. Divider wall clarified as compartment cover vertical surface. Brad Sterling is the sole product voice. Outer Amazon shipping box added.

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
| **Width (Y)** | 11.5" | Front tray zone + compartment cover vertical surface + back mug compartment. Sized to give true 6.5" front zone interior after walls. [WORKING ESTIMATE — confirm with sourcing] |
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

### Closure System

**Layer 1: Magnetic Closure** — 4 neodymium disc magnets embedded along 14" front edge. Two positioned behind printed clasp graphics, two spaced evenly between.

| Magnet | X Position (along 14" edge) | Notes |
|--------|----------------------------|-------|
| Magnet 1 (behind left clasp) | X ~ -4.5" | Behind printed clasp graphic [WORKING ESTIMATE] |
| Magnet 2 (inner left) | X ~ -1.5" | Evenly spaced [WORKING ESTIMATE] |
| Magnet 3 (inner right) | X ~ +1.5" | Evenly spaced [WORKING ESTIMATE] |
| Magnet 4 (behind right clasp) | X ~ +4.5" | Behind printed clasp graphic [WORKING ESTIMATE] |

**Layer 2: Belly Band** — Printed paperboard band wrapping around the closed case. **⚠️ TBD / under review.**

| Attribute | Spec |
|-----------|------|
| Height | 2"-3" [WORKING ESTIMATE — confirm with sourcing] |
| Material | 80-100lb cover stock |
| Print | Custom copy both sides, full color |
| Use | One-time — customer removes on first open |
| Status | **TBD / under review** |

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

The interior is divided front-to-back by the compartment cover's vertical surface into two zones.

| Zone | Y Depth | Purpose |
|------|---------|---------|
| Front zone (trays) | ~6.5" | Tray 1 + Tray 2 stacked vertically [WORKING ESTIMATE] |
| Compartment cover vertical surface | ~0.25" | Vertical wall of the J-shaped compartment cover — separates zones (not a standalone divider piece) |
| Back zone (mug compartment) | ~4.25" | Hidden padded compartment — mug in shredded paper, covered by J-shaped compartment cover [WORKING ESTIMATE] |
| **Total** | **~11.0"** | Matches interior width |

---

## Document Set 1 (on Tray 1)

**⚠️ FORMAT TBD — physical format not locked.** Binder-clipped document sets from v9 are superseded. Replacement format (folded inserts, loose sheets, card sets, etc.) is under review.

| Attribute | Spec |
|-----------|------|
| Position | Rests on Tray 1, topmost item in front zone when lid opens |
| Dimensions | ~13.0" x ~6.5" [WORKING ESTIMATE] |
| Estimated thickness | ~0.15" [WORKING ESTIMATE] |
| Format | TBD — not locked |

*For document set content direction and aesthetic approach, see Packaging Spec.*

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
| Cover floor flap | 0.0625" | J-shaped compartment cover's forward extension — rests on floor, extends ~3" forward from compartment cover vertical surface |
| Tray 2 floor | 0.125" | 18pt paperboard |
| Tray 2 walls | ~2.0" (50mm) | Tray wall height increased so two trays stack to back compartment height (~4.41" from floor) with clearance for manual on top |
| Tray 1 floor | 0.125" | 18pt paperboard |
| Tray 1 walls | ~2.0" (50mm) | Matches Tray 2 — both trays identical height |
| Document Set 1 | 0.15" | Format TBD [WORKING ESTIMATE] |
| Lid | 0.25" | 24pt paperboard |
| **Total** | **~4.96"** | Within 5.0" depth — ~0.04" clearance (tight — manual must be thin) |

### Back Zone Stack (Mug Compartment) — CONSTRAINING

Components stacked bottom to top:

| Component | Height | Notes |
|-----------|--------|-------|
| Base (floor of box) | 0.25" | Fixed, 24pt paperboard |
| Thin foam backup sheet | 0.25" | Baseline drop protection under mug [WORKING ESTIMATE] |
| Mug (on its side) | 3.50" | Outer diameter — CONTROLLING DIMENSION [WORKING ESTIMATE — confirm with sourcing] |
| Shredded paper above mug | ~0.25" | Compressed height — fills to just below compartment cover top surface [WORKING ESTIMATE] |
| J-shaped compartment cover (top surface) | 0.0625" | Rigid paperboard (~24pt). Top surface spans back zone. Wall drops vertically at zone boundary (the compartment cover's vertical surface serves as the divider). Floor flap extends ~3" into front zone (accounted for in front zone stack). |
| Lid | 0.25" | 24pt paperboard |
| **Total** | **~4.56"** | Within 5.0" depth — ~0.44" clearance |

**Back zone is still the constraining dimension.** The 5.0" case depth provides ~0.44" manufacturing tolerance over the back zone stack. If mug OD exceeds 3.5" or foam needs to be thicker for drop protection, case depth must increase. Confirm with sourcing before locking.

**Note:** Front zone stack is ~4.96" due to both trays at ~2.09" height (~2.0"/50mm walls + 0.125" floor), plus Document Set 1 and J-shaped cover floor flap. Two trays now stack from the briefcase floor to match the back compartment height (~4.41" from floor), with clearance for a manual on top. Headroom is tight at ~0.04".

---

## Tray 2 — Bottom Tray of Front Zone (4 Positions)

| Attribute | Spec |
|-----------|------|
| Exterior footprint | ~13.5" x ~6.5" [WORKING ESTIMATE] |
| Interior footprint | ~13.25" x ~6.25" [WORKING ESTIMATE] |
| Wall height | ~2.0" (50mm) |
| Floor thickness | 0.125" |
| Total tray height | ~2.09" (~2.0" walls + 0.125" floor) |
| Material | 18pt paperboard |
| Finish | Dark carbon fiber texture — very dark charcoal/near-black with subtle metallic sheen |
| Top edge border | Prison orange accent trim — thin border around top perimeter |
| Recess style | Pelican-style die-cut recesses — landscape orientation. **Identical mold to Tray 1.** |

### Tray Mold (Shared — Both Trays Identical)

Both trays use the same die-cut mold with landscape-oriented recesses:

| Recess | Position | Dimensions | Notes |
|--------|----------|------------|-------|
| Wide recess | Back of tray (full width) | ~320mm spanning tray width [WORKING ESTIMATE] | Holds 3 card boxes (Tray 2) or tattoo + sticker boxes (Tray 1) |
| Narrow recess | Front of tray (centered) | ~168mm centered [WORKING ESTIMATE] | Holds pen box (Tray 1) or confiscated stapler chalk outline (Tray 2) |

### Lift Tab

| Attribute | Spec |
|-----------|------|
| Back edge | Decorative tab(s) along back edge of tray |
| Left & right sides | Rectangular finger notch cut into left and right side walls (cut into top surface). Each notch is lined with a U-shaped prison orange accent trim. Sized for adult fingertip grip. |

### Item Layout (viewed from above, looking down)

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│  [CELL TALK BOX]  [RAP SHEETS BOX]  [SWEET NOTHINGS BOX]   │  ← wide recess (back)
│   4"x2.5"x0.75"    4"x2.5"x0.75"     4"x2.5"x0.75"        │
│                                                              │
│            [CONFISCATED STAPLER]                              │  ← narrow recess (front, centered)
│             ~4"x1.5" chalk outline                           │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

### Item Positions (4 Positions)

| Item | Internal Name | Box Dimensions | Notes |
|------|--------------|----------------|-------|
| Affirmation card box | Cell Talk | ~4" x 2.5" x 0.75" [WORKING ESTIMATE] | Tuck-end box, business-card deck format. Wide recess (back). |
| Complaint card box | Rap Sheets | ~4" x 2.5" x 0.75" [WORKING ESTIMATE] | Tuck-end box, same format. Wide recess (back). |
| Passive-aggressive card box | Sweet Nothings | ~4" x 2.5" x 0.75" [WORKING ESTIMATE] | Tuck-end box, same format. Wide recess (back). |
| Empty stapler recess | Confiscated Stapler | ~4" x ~1.5" | Chalk outline only — stapler silhouette, no item. Narrow recess (front, centered). |

### Layout Math — Tray 2

Available interior: ~13.25" x ~6.25"

- 3 card boxes at 4" wide = 12" in wide recess spanning back of tray
- Stapler chalk outline in narrow front recess, centered
- Landscape layout provides generous copy space around recesses

### Copy Space — Tray 2
- 4 positions across ~13.25" x ~6.25" — generous space with only 3 small boxes + 1 flat recess
- Full tray width available — no ring column consuming space
- Copy space around and between recesses

*For copy approach and tray design philosophy, see Packaging Spec.*

---

## Tray 1 — Top Tray, Revealed First (3 Positions)

| Attribute | Spec |
|-----------|------|
| Exterior footprint | ~13.5" x ~6.5" [WORKING ESTIMATE] |
| Interior footprint | ~13.25" x ~6.25" [WORKING ESTIMATE] |
| Wall height | ~2.0" (50mm) |
| Floor thickness | 0.125" |
| Total tray height | ~2.09" (~2.0" walls + 0.125" floor) |
| Material | 18pt paperboard |
| Finish | Dark carbon fiber texture — very dark charcoal/near-black with subtle metallic sheen |
| Top edge border | Prison orange accent trim — thin border around top perimeter |
| Recess style | Pelican-style die-cut recesses — landscape orientation. **Identical mold to Tray 2.** |

### Lift Tab

| Attribute | Spec |
|-----------|------|
| Back edge | Decorative tab(s) along back edge of tray |
| Left & right sides | Rectangular finger notch cut into left and right side walls (cut into top surface). Each notch is lined with a U-shaped prison orange accent trim. Sized for adult fingertip grip. |

### Item Layout (viewed from above, looking down)

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│  [TATTOO BOX──────]  [STICKER BOX──────]                    │  ← wide recess (back)
│   5"x3.5"x0.5"       5"x3.5"x0.5"                          │
│                                                              │
│            [PEN BOX────────────]                              │  ← narrow recess (front, centered)
│             6.5"x1.75"x1.0"                                 │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

### Item Positions (3 Positions)

| Item | Internal Name | Box Dimensions | Notes |
|------|--------------|----------------|-------|
| Pen box | Cubicle Shank | ~6.5" x 1.75" x 1.0" [WORKING ESTIMATE] | Tray-and-sleeve (matchbox style), longest box in kit. Narrow recess (front, centered). |
| Tattoo box | Lifer Ink | ~5" x 3.5" x 0.5" [WORKING ESTIMATE] | Tuck-end box, flat format. Wide recess (back). |
| Sticker box | Turf Tags | ~5" x 3.5" x 0.5" [WORKING ESTIMATE] | Tuck-end box, same format as tattoo box. Wide recess (back). |

### Layout Math — Tray 1

Available interior: ~13.25" x ~6.25"

- Tattoo + sticker boxes in wide recess spanning back of tray
- Pen box (6.5" x 1.75") in narrow front recess, centered (~168mm)
- Landscape layout provides generous copy space around recesses

### Copy Space — Tray 1
- 3 positions across ~13.25" x ~6.25" — most open tray, best for copy
- Full tray width available — no ring column consuming space
- Copy space around and between recesses

*For copy approach and tray design philosophy, see Packaging Spec.*

---

## Mug Compartment (Back Zone)

| Attribute | Spec |
|-----------|------|
| Interior footprint | ~13.5" x ~4.0" (after subtracting compartment cover vertical surface and back box wall) [WORKING ESTIMATE] |
| Interior depth (Z) | ~4.5" (floor to lid) [WORKING ESTIMATE] |

### Item Layout (viewed from above, looking down)

```
┌────────────────────────────────────────────────────────────┐
│                                                            │
│              [MUG - on side,                               │
│               handle to side]                              │
│               3.5" dia x 3.5" H                            │
│               (4.0" w/ handle)                             │
│                                                            │
└────────────────────────────────────────────────────────────┘
```

### Item Positions

| Item | Internal Name | Working Dimensions | Position |
|------|--------------|-------------------|----------|
| Enamel camp mug | Mug Shot | 3.5" dia x 3.5" H (4.0" with handle) | Center, on its side, handle to the side |

*For compartment concealment design, reveal sequence, and narrative role, see Packaging Spec.*

---

## Doc Set 2 — Booklet Spec (on Compartment Cover)

*Note: Formerly "Doc Set 3 / Manual 3" / "Activity Guide". Sits on top of the compartment cover. Discovered when both trays are removed and compartment cover is visible.*

| Attribute | Spec |
|-----------|------|
| Format | Saddle-stitched booklet ("Office Survival Manual Volume III") |
| Closed dimensions | 5.5" x 4.25" [WORKING ESTIMATE] |
| Thickness | ~0.25" [WORKING ESTIMATE] |
| Page count | 16 pages |
| Cover stock | 80-100lb cover |
| Interior stock | 60-70lb text |
| Position | Rests on top of compartment cover top surface |

*For Doc Set 2 content direction and theming, see Packaging Spec.*

---

## Mug Packing — Shredded CLASSIFIED Documents

| Attribute | Spec |
|-----------|------|
| Bottom layer | Thin foam backup sheet ~0.25" [WORKING ESTIMATE] — baseline drop protection under mug |
| Foam type | Closed-cell polyethylene or EVA foam — confirm with sourcing |
| Mug position | Sits on thin foam backup, lying on its side |
| Surrounding fill | Crumpled/shredded printed paper — "CLASSIFIED" documents aesthetic |
| Top fill | Shredded paper fills to just below compartment cover top surface — variable height, estimated ~0.25" compressed above mug [WORKING ESTIMATE] |

*For shredded paper design, printed content on shreds, and interior color scheme, see Packaging Spec.*

---

## Compartment Cover (J-Shaped)

| Attribute | Spec |
|-----------|------|
| Shape | J-shaped single piece: top surface + vertical wall + floor flap |
| Top surface dimensions | ~13.5" x ~4.0" (spans back zone opening) [WORKING ESTIMATE] |
| Wall height | Full back zone interior height (~4.16" from floor to top surface) [WORKING ESTIMATE] |
| Wall thickness | ~0.0625" (~24pt paperboard). Outer face flush at zone boundary. Inner face recessed 0.125" into back zone. **This vertical surface serves as the divider between front and back zones — there is no separate divider wall.** |
| Floor flap | Extends ~3.0" forward from vertical surface into front zone, resting on case floor [WORKING ESTIMATE] |
| Material thickness | ~0.0625" (rigid paperboard, ~24pt) throughout |
| Material finish | Dark carbon fiber texture (matching trays) |
| Both sides of top printable | Yes |
| Placement | Top surface rests on back zone walls. Wall drops vertically at zone boundary. Floor flap rests on case floor. |
| Retention | Gravity + tray stack weight on floor flap. Cannot be lifted until both trays are removed — the floor flap is trapped under the tray stack. |

*For compartment cover copy approach (teaser top, narrative underside), see Packaging Spec.*

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

All tray items are individually boxed (5 tuck-end + 1 tray-and-sleeve). All dimensions are [WORKING ESTIMATE].

| Item | Internal Name | Box Type | Box Dimensions | Tray | Notes |
|------|-------------|----------|---------------|------|-------|
| Cubicle Shank (pen) | Cubicle Shank | Tray-and-sleeve (matchbox style) | ~6.5" x 1.75" x 1.0" | Tray 1 | Longest box |
| Lifer Ink (tattoos) | Lifer Ink | Tuck-end | ~5" x 3.5" x 0.5" | Tray 1 | Flat format |
| Turf Tags (stickers) | Turf Tags | Tuck-end | ~5" x 3.5" x 0.5" | Tray 1 | Same as tattoo box |
| Cell Talk (affirmation cards) | Cell Talk | Tuck-end | ~4" x 2.5" x 0.75" | Tray 2 | Business-card deck |
| Rap Sheets (complaint cards) | Rap Sheets | Tuck-end | ~4" x 2.5" x 0.75" | Tray 2 | Same format |
| Sweet Nothings (passive-aggressive cards) | Sweet Nothings | Tuck-end | ~4" x 2.5" x 0.75" | Tray 2 | Same format |

---

## Item Working Dimensions Summary

### Tray Items (Boxed)

| Item | Internal Name | Box Dimensions | Location |
|------|--------------|----------------|----------|
| Pen box | Cubicle Shank | ~6.5" x 1.75" x 1.0" [WORKING ESTIMATE] | Tray 1 (tray-and-sleeve / matchbox style) |
| Tattoo box | Lifer Ink | ~5" x 3.5" x 0.5" [WORKING ESTIMATE] | Tray 1 |
| Sticker box | Turf Tags | ~5" x 3.5" x 0.5" [WORKING ESTIMATE] | Tray 1 |
| Affirmation card box | Cell Talk | ~4" x 2.5" x 0.75" [WORKING ESTIMATE] | Tray 2 |
| Complaint card box | Rap Sheets | ~4" x 2.5" x 0.75" [WORKING ESTIMATE] | Tray 2 |
| Passive-aggressive card box | Sweet Nothings | ~4" x 2.5" x 0.75" [WORKING ESTIMATE] | Tray 2 |
| Empty stapler recess | Confiscated Stapler | ~4" x ~1.5" | Tray 2 — chalk outline only, no item |

**Tray 1: 3 boxed items (1 tray-and-sleeve + 2 tuck-end). Tray 2: 3 boxed items (tuck-end) + 1 empty chalk outline recess (4 positions total).**

### Compartment Items

| Item | Internal Name | Working Dimensions | Location |
|------|--------------|-------------------|----------|
| Enamel camp mug | Mug Shot | 3.5" dia x 3.5" H | Compartment (center) |
| Doc Set 2 | Doc Set 2 | 5.5" x 4.25" x ~0.25" [WORKING ESTIMATE] | On top of compartment cover |

### Structural Components

| Component | Working Dimensions | Notes |
|-----------|--------------------|-------|
| Document Set 1 | ~13.0" x ~6.5" x ~0.15" | Format TBD [WORKING ESTIMATE] |
| Compartment cover | ~13.5" x ~4.0" x ~0.0625" | Both sides printable. Vertical surface serves as zone divider. [WORKING ESTIMATE] |
| Belly band | ~2"-3" tall x wraps full case perimeter | **TBD / under review** [WORKING ESTIMATE] |
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
| Cover floor flap top | Z ~ 0.3125" | Front zone — J-shaped cover flap rests on case floor |
| Thin foam backup top surface | Z = 0.50" | Back zone only [WORKING ESTIMATE] |
| Mug center (on its side) | Z ~ 2.25" | Back zone only (0.25 + 0.25 + 1.75) [WORKING ESTIMATE] |
| Tray 2 floor bottom | Z ~ 0.3125" | Front zone — sits on cover floor flap |
| Tray 2 floor top | Z ~ 0.4375" | Front zone (0.3125 + 0.125) |
| Tray 2 top (wall tops) | Z ~ 2.4375" | Front zone (0.3125 + 0.125 + 2.0) |
| Tray 1 floor bottom | Z ~ 2.4375" | Front zone |
| Tray 1 floor top | Z ~ 2.5625" | Front zone (2.4375 + 0.125) |
| Tray 1 top (wall tops) | Z ~ 4.5625" | Front zone (2.4375 + 0.125 + 2.0) — matches back compartment height |
| Document Set 1 top | Z ~ 4.7125" | [WORKING ESTIMATE] |
| Lid bottom | Z = 4.75" | [WORKING ESTIMATE] |
| Lid top (exterior) | Z = 5.0" | [WORKING ESTIMATE] |

### Y-Axis Zone Boundaries

| Reference Point | Coordinate | Notes |
|----------------|------------|-------|
| Back wall exterior | Y = -5.75" | [WORKING ESTIMATE] |
| Back wall interior | Y = -5.50" | [WORKING ESTIMATE] |
| Back zone (mug compartment) | Y = -5.50" to -1.25" | ~4.25" deep [WORKING ESTIMATE] |
| Compartment cover vertical surface | Y = -1.25" to -1.00" | ~0.25" thick (part of J-shaped compartment cover) [WORKING ESTIMATE] |
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

**Removed in v11:**
- **Booking frame** (Component D) — removed from kit entirely.
- **Doc Set 2 (between trays)** (Component I) — removed. Doc sets reduced from 3 to 2.
- **Sticky notes** (Component J) — removed along with all references to "OG" / Owen Granger character.
- **Separate divider wall** — clarified as compartment cover vertical surface (not a standalone structural piece).
- **Activity Guide on front zone floor** — replaced by Doc Set 2 on compartment cover top surface.

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
2. **Item box dimensions and tolerances** — confirm box dimensions for all 6 boxed items (5 tuck-end + 1 tray-and-sleeve/matchbox style for pen). What are standard tolerances at these sizes? [WORKING ESTIMATE on all box dims]
3. **Die-cut recess depth for boxed items** — can 18pt tray floors accept Pelican-style die-cut recesses sized for tuck-end boxes? What depth tolerance is achievable? How tight can box-to-recess fit be?
4. Is a thin foam backup sheet (~0.25") plus shredded paper fill sufficient drop protection for an enamel mug? Or does the foam backup need to be thicker? [WORKING ESTIMATE]
5. Confirm compartment cover construction — can rigid paperboard (~24pt) span ~13.5" x ~4.0" without sagging under tray weight?
6. Confirm compartment cover vertical surface can support full tray stack — the J-shaped compartment cover's vertical wall serves as the zone divider. Does it need reinforcement?
7. Case depth tolerance — back zone stack estimates ~4.56" within 5.0" case. Is ~0.44" clearance sufficient?
8. Magnet embedding method — can 4 neodymium disc magnets be embedded flush in 24pt paperboard along 14" front edge? Size/pull force recommendation?
9. Snap-fit lip feasibility and cost — is a molded snap-fit lip compatible with 24pt paperboard construction?
10. Belly band stock weight recommendation (80-100lb cover?) and printing method **[TBD / under review — belly band inclusion not confirmed]**
11. Confirm printing capability on dark-colored tray floors (for Pelican-style recess outlines and copy)
12. **Doc Set 2 dimensions** — confirm 5.5" x 4.25" saddle-stitched booklet (16 pages) fits on compartment cover top surface. What is actual closed thickness?
13. **Outer Amazon box construction** — we want a **tuck-top mailer box** (single lid panel that flips open and tucks into the front, NOT a standard 4-flap box). Corrugated cardboard (e-flute or b-flute) at ~15.5" x ~13.0" x ~6.5". Interior lid will be printed (welcome letter + photo). Confirm: is tuck-top feasible at this size? What is standard wall thickness? Will briefcase shift during shipping? Recommend void fill material.
14. **FBA compliance** — verify ~15.5" x ~13.0" x ~6.5" outer box qualifies as Large Standard tier. Confirm with current FBA dimension limits.
15. Confirm matte exterior + satin finish on applied elements (labels, stickers)
16. Confirm die-cut cardboard handle construction and attachment method
17. What is MOQ for full kit vs. components separately?
18. **Item box printing** — confirm 5 unique tuck-end box designs + 1 tray-and-sleeve (matchbox style) design can be printed with full color exterior at these quantities. What is MOQ per box design?

---

## Changelog

| Date | Change |
|------|--------|
| April 2026 | v11 — OG character removed (Brad Sterling sole voice). Booking frame removed. Doc sets reduced from 3 to 2. Pen box updated to tray-and-sleeve. Single tray mold with landscape recesses. Divider wall clarified as compartment cover vertical surface. |
| April 9, 2026 | v10.3 — **Tray wall height increase.** Tray walls from 1.125" (28.575mm) to ~2.0" (50mm). Total tray height from ~1.25" to ~2.09". Two trays now stack from briefcase floor to match back compartment height (~4.41" from floor), with clearance for manual on top. Front zone stack updated from ~3.27" to ~4.96". All Z-axis reference points recalculated. Flat dieline dimensions updated from 400.05 x 222.25mm to 442.9 x 265.1mm. |
| March 27, 2026 | v10.2 — **Tray standardization.** Both trays now identical dimensions: 1.125" walls, 0.125" floor, 1.25" total height (Tray 2 was 0.875" walls / 1.0" total). Front zone stack updated from ~3.42" to ~3.67" (~1.33" headroom). All Z-axis reference points recalculated. |
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
