# Cubicle Shank — Fold-Over Flap Wireframe

> **Date:** July 6, 2026
> **Status:** Working draft — exploring fold-over flap as replacement for PETG blister
> **Purpose:** Dimensioned block wireframe showing how a cardboard flap replaces the plastic blister on the existing L-shaped card. The card stays flat and stackable at the same ~0.70" profile.
> **Scope:** This format is being explored for ALL 7 items, not just Cubicle Shank. The Shank is the pilot.

---

## 1. Format Change Summary

### The Core Idea

The packaging is structurally identical to the current blister pack. Same flat L-shaped card, same dimensions, same stacking behavior inside the briefcase. The ONLY change: instead of a thermoformed PETG plastic bubble glued to the card front to hold the product, a cardboard flap folds over from the card itself to create a shallow pocket/sleeve.

The pen sits in the same position on the card face (Zone B). The card still stacks flat at ~0.70" per card. The fold-over flap is paperboard instead of plastic — which means it's a printable comedy surface where the blister used to be transparent.

### What Changed

| Attribute | Previous (PETG Blister) | Proposed (Fold-Over Flap) |
|-----------|------------------------|---------------------------|
| **Product enclosure** | Thermoformed clear PETG plastic glued to card front | Cardboard flap folds over from card edge to create a shallow pocket |
| **Product visibility** | Pen fully visible through clear plastic | Pen partially or fully covered by printed flap (window cut-out optional) |
| **Materials** | 18pt paperboard + PETG plastic + adhesive | 18pt paperboard only (single piece, scored and folded) |
| **Total thickness** | ~0.70" (card + blister + pen) | ~0.70" (card + flap + pen) — same stack profile |
| **New print surface** | None (blister was clear plastic) | Flap exterior and flap interior are both printable |
| **Cost** | Paperboard + PETG + glue assembly | Paperboard only — no plastic, simpler BOM |

### What Does NOT Change

- **Card dimensions:** 13.25" wide x 10.75" tall, L-shaped
- **Notch:** 4.75" x 3.75" upper-left corner (mug box clearance)
- **Material:** 18pt paperboard, printed both sides
- **Zone system:** Zone A (handle strip), Zone B (product zone), Zone C (upper extension) — unchanged
- **Stack profile:** ~0.70" per card, 4.10" total for 7 cards, 0.40" clearance to lid
- **All locked copy** from the surface map carries forward
- **Evidence tag** attached to back, bottom center
- **Card lies flat inside the briefcase** — identical stacking behavior

---

## 2. Fold-Over Flap Structure

### How It Works

A flap extends from one edge of the card (most likely the bottom edge of Zone B or a side edge), folds over the pen, and tucks or adheres to the card face. The pen is sandwiched between the card surface and the flap. The flap is shallow — just deep enough to cover the pen's ~0.65" profile.

Think of it as a cardboard envelope/pocket mounted to the card face, replacing the plastic blister.

### Cross-Section View (side profile)

```
SIDE VIEW — stacking profile (~0.70" total)
=============================================

     FLAP (folds over pen)
     ____________________
    |                    |  <- Flap exterior (printable — NEW surface)
    |  ~~~ PEN ~~~       |  <- Pen sits in pocket (~0.65" deep)
    |____________________|  <- Flap interior (printable — NEW surface)
    |                    |
    |    CARD FACE       |  <- Card front (same as before)
    |____________________|
    |    CARD BACK       |  <- Card back (same as before)
    |____________________|

    Total: ~0.025" (card) + 0.65" (pen) + 0.025" (flap) = ~0.70"
```

### Flap Options

The flap can fold from different edges. Each option has different implications for the die-cut and available print area.

**Option A: Bottom-fold flap**
- Flap extends from the bottom edge of Zone B
- Folds UP and over the pen
- Die-cut card is taller than 10.75" when flat (extra material for flap)
- OR: flap is a separate piece glued to bottom edge

**Option B: Side-fold flap (right edge)**
- Flap extends from the right edge of Zone B
- Folds LEFT over the pen
- Die-cut card is wider than 13.25" when flat (extra material for flap)

**Option C: Integrated pocket (no fold visible from front)**
- A second layer of cardboard is glued to the card face to create a pocket
- The pen slides into the pocket from one open edge
- Pocket exterior is a printable surface flush with the card

**Option D: Top-fold flap with tuck**
- Flap extends from the top of the pen area (or from the Zone B/C boundary)
- Folds DOWN over the pen
- Tucks into a slit at the bottom of Zone B
- Creates a "door" that can be opened to reveal the pen

**Recommendation for Cubicle Shank:** Option D (top-fold with tuck) or Option C (integrated pocket). Both maintain the flat profile and give the cleanest front presentation. Option D adds a "reveal" mechanic — lift the flap to see the pen — which creates a discovery moment. Option C is the most seamless and closest to the original blister look.

### Flap Dimensions (for Cubicle Shank pen: 5.5" x 0.6")

The flap only needs to cover the pen footprint, not the entire Zone B area.

| Element | Dimension | Notes |
|---------|-----------|-------|
| **Pen footprint** | ~6.0" x 1.0" | Pen (5.5" x 0.6") + clearance |
| **Flap exterior** | ~6.5" x 1.5" | Slightly larger than pen, with margins. Printable. |
| **Flap interior** | ~6.5" x 1.5" | Under the flap, revealed when flap is opened. Printable. |
| **Remaining Zone B (around flap)** | Variable | Card surface visible around the flap — same as card front real estate around the old blister |

The flap is localized to the pen area — not a full-width fold across the entire bottom of the card. The rest of Zone B remains flat printed card, exactly as before.

---

## 3. Surface Inventory

### Surfaces That Stay the Same

| Surface | Dimensions | Content | Change? |
|---------|-----------|---------|---------|
| **Card front — Zone C** | 8.50" x 3.75" | Brand, division, slogans | No change |
| **Card front — Zone A** | 4.75" x 7.0" | BONUS / SHIELD, handle slot | No change |
| **Card front — Zone B (around flap)** | ~8.50" x 7.0" minus flap footprint | Hero name, subtitle, seal, fine print | Same layout, slightly more visible area (flap may be smaller than old blister) |
| **Card back — full surface** | ~124.5 sq in (L-shaped) | All 14 back elements: chart, features, reviews, warnings, taglines | No change — back is unaffected by front-face flap |
| **Evidence tag** | ~2.0" x 1.25" | Case info + comedy | No change |

### NEW Surfaces (replacing the PETG blister)

| Surface | Dimensions | Content Opportunity |
|---------|-----------|-------------------|
| **Flap exterior** | ~6.5" x 1.5" | Printable cardboard where the blister used to be. Could carry: product illustration, Brad quote, institutional warning, or "Executive Tactical Stylus" rebrand text |
| **Flap interior** | ~6.5" x 1.5" | Revealed when flap is opened. Layer 4 discovery: hidden Q&A ("Does it come in red?" / "Eventually.") or Doug footnote |
| **Under-pen surface** | ~6.0" x 1.0" | Printed on card face, under the pen. Revealed when pen is removed. Same mechanic as original Element 11 |

### Net Print Real Estate Comparison

| | PETG Blister | Fold-Over Flap |
|---|-------------|----------------|
| **Card front** | ~124.5 sq in minus transparent blister footprint (~4 sq in unusable under blister) | ~124.5 sq in — full surface usable, pen area covered by PRINTED flap |
| **Card back** | ~124.5 sq in | ~124.5 sq in (identical — no change) |
| **Blister/Flap exterior** | 0 sq in (clear plastic, not printable) | ~9.75 sq in (flap exterior is printed cardboard) |
| **Flap interior** | 0 sq in | ~9.75 sq in (hidden surface, revealed on open) |
| **Under product** | ~4 sq in (hidden under blister) | ~6 sq in (hidden under pen, same mechanic) |
| **Total printable** | ~249 sq in | ~275 sq in (+26 sq in) |

The fold-over flap gives you approximately **26 additional square inches** of printable comedy real estate compared to the PETG blister.

---

## 4. Element Placement — Updated for Fold-Over Flap

### Card Front (11 elements + flap surfaces)

| # | Element | Surface | Position |
|---|---------|---------|----------|
| 1 | ELEVATE CO. brand logo | Zone C | Top, near hang hole |
| 2 | Division name + tagline (O3...) | Zone C | Below brand |
| 3 | Division slogan + icons | Zone C | Below division |
| 4 | CUBICLE SHANK (hero) | Zone B (above flap) | Largest text, dominant |
| 5 | Primary subtitle | Zone B (above flap) | Below product name |
| 5b | Brand positioning line | Zone B | Below subtitle |
| 6 | Primary tagline | Zone B (below flap) | Below the pen area |
| 7 | Good Shanking Seal | Zone B (beside flap) | Lower-right |
| 8 | Quantity line + footnote | Zone B (bottom edge) | Small institutional text |
| 9 | Fine print line 1 | Zone B (bottom edge) | 7pt |
| 10 | Fine print line 2 | Zone B (bottom edge) | 7pt |
| 11 | Hidden Q&A | **Flap interior** or **under-pen surface** | Layer 4 discovery |
| NEW | Flap exterior copy | **Flap exterior** | TBD — see Section 5 |

### Card Back (14 elements — unchanged)

| # | Element | Surface | Position |
|---|---------|---------|----------|
| B1 | Chart title | Upper back | Top |
| B2 | Comparison chart (7x4) | Upper back | Main area |
| B3 | Chart footer | Upper back | Below chart |
| B4-6 | Feature bullets (3) | Mid back | Below footer |
| B7-8 | Coroner reviews (2) | Mid back | Below features |
| B9 | Assisted Shiving block | Lower back | Panel element |
| B10-11 | Warnings (2) | Lower back | Below reviews |
| B12 | Chain pun tagline | Lower back | Near bottom |
| B13 | Smooth criminal tagline | Lower back | Near bottom |
| B14 | Excalibur line | Bottom back | Fine print |

The card back is **completely unaffected** by the fold-over flap change. The flap is on the front face only. All 14 back elements fit the full ~124.5 sq in as before.

---

## 5. Open Design Questions

### Q1: Flap Fold Direction

Where does the flap fold from?

| Option | Description | Pros | Cons |
|--------|-------------|------|------|
| **A. Bottom** | Flap folds up from bottom edge | Natural lift-to-reveal | Adds material below card |
| **B. Side** | Flap folds from right edge | Clean horizontal reveal | Adds width to die-cut |
| **C. Top-down** | Flap folds down from above pen area | "Lift the cover" mechanic | Clean, intuitive |
| **D. Integrated pocket** | Glued pocket, pen slides in from one end | Seamless front look, most "blister-like" | No reveal mechanic |

### Q2: Window Cut-Out?

Should the flap have a window so the pen is partially visible?

| Option | Description |
|--------|-------------|
| **A. Full window** | Large cut-out, pen mostly visible (closest to original blister look) |
| **B. Partial window** | Small cut-out reveals pen tip or clip |
| **C. No window** | Flap is solid cardboard — pen is a surprise on open |
| **D. Die-cut shape** | Window shaped like something thematic (shank silhouette, keyhole, etc.) |

### Q3: Flap Exterior Content

What goes on the ~9.75 sq in of new printable surface?

Candidates:
- "Executive Tactical Stylus" (Brad's rebrand — institutional subtitle)
- Product illustration / silhouette of the pen
- Warning or disclaimer text
- Institutional spec block (dimensions, weight, ink color)
- Completely clean / minimal (let the backing card do the talking)

### Q4: Pen Retention

How does the pen stay in the flap pocket?

| Option | Description |
|--------|-------------|
| **A. Friction fit** | Pocket sized snugly to pen |
| **B. Tuck tab** | Small tab locks flap closed |
| **C. Adhesive dot** | Repositionable adhesive holds flap shut |
| **D. Die-cut cradle** | Card surface has a die-cut indent that the pen nests into |

---

## 6. Wireframe Diagrams

### Card Front — Flat View (before flap is closed)

```
13.25"
<------------------------------------------->

+---------------------------------------------+  ---
|                                              |   |
| (NOTCH)        |  ELEVATE CO.                |   |
|  4.75"         |  O3 -- Office Offense       |   | 3.75"
|  x 3.75"       |    Outfitters               |   | ZONE C
|                |  "Because it keeps..."       |   |
|                |  "Arming the 9-to-5..."      |   |
+----------------+                             |  ---
|                |                             |
| +------------+ |                             |   |
| |  ★ BONUS ★ | |    CUBICLE                  |   |
| |  --------  | |       SHANK                 |   |
| |  SHIELD    | |                             |   |
| |            | |  "The pen that ends          |   |
| | [step 1]   | |   sentences..."             |   |
| |  --------  | |                             |   | 7.0"
| | [step 2]   | |  +----------------------+   |   | ZONE A + ZONE B
| |  --------  | |  | FLAP AREA            |   |   |
| | [step 3]   | |  | (pen sits here)      |   |   |
| |            | |  | ~6.5" x 1.5"         |   |   |
| | (handle    | |  | ~~~~ PEN ~~~~        |   |   |
| |  slot)     | |  +----------------------+   |   |
| +------------+ |                             |   |
|                |  "Writes in black..."       |   |
|                |  [SEAL]    Qty: 1 pen...    |   |
|                |  Fine print...              |   |
+----------------+-----------------------------+  ---

```

### Card Front — With Flap Closed (what the recipient sees)

```
+---------------------------------------------+
|                                              |
| (NOTCH)        |  ELEVATE CO.                |
|                |  O3 -- Office Offense        |
|                |    Outfitters               |
|                |  "Because it keeps..."       |
+----------------+                             |
|                |                             |
| +------------+ |    CUBICLE                  |
| |  ★ BONUS ★ | |       SHANK                 |
| |  SHIELD    | |                             |
| | [diagrams] | |  "The pen that ends..."     |
| |            | |                             |
| |            | |  +----------------------+   |
| |            | |  | FLAP EXTERIOR        |   |
| |            | |  | (printed cardboard)  |   |
| |            | |  | ~6.5" x 1.5"        |   |
| | (slot)     | |  | [Brad's rebrand or   |   |
| +------------+ |  |  product silhouette] |   |
|                |  +----------------------+   |
|                |  "Writes in black..."       |
|                |  [SEAL]    Qty: 1 pen...    |
|                |  Fine print...              |
+----------------+-----------------------------+

```

### Card Back — Unchanged from Current Surface Map

```
+---------------------------------------------+
|                                              |
| (NOTCH         |                             |
|  BACK)         | "BEFORE YOU COMMIT:          |
|                |  KNOW YOUR OPTIONS"          |
|                |                             |
+----------------+  +-----+-----+-----+-----+ |
|                |  |GOOSE|BABY |NH   |SHANK | |
|  ZONE A        |  |-----|-----|-----|------| |
|  BACK          |  | ... | ... | ... | ... | |
|  (TBD)         |  | ... | ... | ... | ... | |
|                |  | ... | ... | ... | ... | |
|                |  | ... | ... | ... | ... | |
|                |  | ... | ... | ... | ... | |
|                |  | ... | ... | ... | ... | |
|                |  | ... | ... | ... | ... | |
|                |  +-----+-----+-----+-----+ |
|                |  "Study discontinued..."    |
|                |                             |
|                |  * Feature bullets (3)       |
|                |  * Coroner reviews (2)       |
|                |  [ASSISTED SHIVING block]    |
|                |  Warnings / Taglines         |
|                |  Fine print                 |
+----------------+-----------------------------+

```

---

## 7. Image Generation Prompts — Corrected for Flat Stackable Format

See separate section below for copy-paste-ready prompts.

---

## 8. Next Steps

1. **Generate images** using the prompts below to validate the flat fold-over flap concept
2. **Resolve Q1-Q4** — flap direction, window, exterior content, pen retention
3. **Physical mockup** — print at 100% scale, cut the flap from scrap cardboard, tape it to a printed card, test with an actual pen
4. **Boss review** — show generated images + physical mockup
5. **Update surface map** — if format approved, add flap surfaces to `cubicle-shank-surface-map.md`
6. **Update system brief** — if this becomes the format for all 7 items, update `blister-card-system.md`

---

## Changelog

| Date | Change |
|------|--------|
| July 6, 2026 | Initial wireframe created (deep tray fold-over concept). |
| July 6, 2026 | **Major revision:** Corrected to shallow fold-over flap concept. The card stays flat and stackable at ~0.70" — the flap replaces the PETG blister, not the entire card structure. Updated all sections, diagrams, surface inventory, and element placement. Removed deep tray geometry. Added flap options (bottom-fold, side-fold, top-down, integrated pocket). Card back is completely unaffected. |
