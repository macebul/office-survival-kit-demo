# Interior Layout Specification — Office Survival Kit

**Version:** 1.0
**Date:** 2026-06-12
**Status:** Draft for review

---

## Executive Summary

All 7 items fit inside the briefcase at current dimensions (14.0" × 11.5" × 5.0" exterior). The layout uses full-floor L-shaped blister pack cards stacked flat, with the mug box sitting beside the stack in the top-left corner. An 8th gag "Contraband" blister pack (empty, confiscated item) is included — low cost (card stock + empty blister only, no sourced product) and high comedy value. Total stack height is 4.10" within a 4.5" interior depth, leaving 0.40" clearance. Without the Contraband pack, stack height drops to 3.65" (0.85" clearance).

**No changes needed to briefcase dimensions.**

---

## Briefcase (Container)

| Dimension | Exterior | Interior (after 0.25" walls) |
|-----------|----------|------------------------------|
| Length (X) | 14.0" | 13.5" |
| Width (Y) | 11.5" | 11.0" |
| Depth (Z) | 5.0" | 4.5" |

- Material: 24pt paperboard, matte black exterior
- Wall thickness: 0.25" all sides
- Clamshell (hinged lid), magnetic closure (4 neodymium disc magnets along front edge)
- Orientation: handle/clasps face the user, hinge at the back; opens like a book

---

## Package Dimensions

### Mug Box (Mug Shot)

The mug lays **on its side** inside the box (handle pointing sideways, opening facing one side).

| Dimension | Measurement | Notes |
|-----------|-------------|-------|
| Length | 4.0" | Mug height (3.5") + 0.5" walls |
| Width | 5.0" | Mug diameter (3.5") + handle protrusion (1.0") + 0.5" walls |
| Height | 4.0" | Mug diameter (3.5") + 0.5" walls |

- Material: 18pt paperboard, printed all 6 sides
- Die-cut window on one face (shows the mug inside)
- No blister backing — standalone printed box
- **Footprint in briefcase:** 5.0" × 4.0" (sits in top-left corner)

### Card Deck Boxes (×3: Cell Talk, Rap Sheets, Sweet Nothings)

Each card deck is first packaged in a small tuck-end box, then that box goes inside a blister pack.

| Dimension | Measurement | Notes |
|-----------|-------------|-------|
| Interior | 3.625" × 2.625" × 0.625" | Cards (3.5" × 2.5" × 0.5") + 1/8" tolerance each dimension |
| Exterior | 3.7" × 2.7" × 0.7" | 18pt card stock walls (~0.025") |

- Standard tuck-end box with tuck flap closure
- Printed on all exterior surfaces
- All 3 boxes are identical dimensions (contents differ)

### Blister Pack Cards (×7: 6 items + 1 gag)

All 7 blister packs share the **same L-shaped card backing dimensions.** This maximizes copy space and simplifies the die cut tooling (one die for all 7).

#### Card Backing — L-Shape

```
         TOP EDGE (has hanging hole)
    ┌─────────────────────────────────────┐
    │              13.25"                 │
    │                                     │
    │ NOTCH        │                      │
    │ (no card     │                      │
    │  here)       │  ZONE B              │ 10.75"
    │ 4.75"×3.75"  │  8.50" × 3.75"      │
    │              │                      │
    ├──────────────┘                      │
    │                                     │
    │  ZONE A                             │
    │  13.25" × 7.00"                     │
    │                                     │
    │                                     │
    └─────────────────────────────────────┘
         BOTTOM EDGE
```

| Measurement | Value | Notes |
|-------------|-------|-------|
| Overall width | 13.25" | 13.5" interior - 0.125" clearance each side |
| Overall height | 10.75" | 11.0" interior - 0.125" clearance each side |
| Notch width | 4.75" | Mug box (5.0") - 0.25" overlap buffer |
| Notch height | 3.75" | Mug box (4.0") - 0.25" overlap buffer |
| Zone A | 13.25" × 7.00" | Full width, below the mug box line |
| Zone B | 8.50" × 3.75" | To the right of the mug box |
| Total card area | 124.5 sq in | (13.25 × 7.00) + (8.50 × 3.75) |
| Total printable area | 249.0 sq in | Front + back per card |
| Hanging hole | 0.25" diameter | Centered on top edge, 0.375" from edge |

- Material: 18pt paperboard (0.025" thick), printed both sides
- Die cut: L-shape with rounded corners (0.125" radius) and hanging hole
- All 7 cards are the same die cut — only the print differs

#### Blister Bubble Depths (varies by item)

| Pack | Item Inside | Blister Depth | Total Thickness | Notes |
|------|-------------|---------------|-----------------|-------|
| Cell Talk | Card deck box (3.7" × 2.7" × 0.7") | 0.80" | 0.85" | Deep blister for boxed deck |
| Rap Sheets | Card deck box (3.7" × 2.7" × 0.7") | 0.80" | 0.85" | Deep blister for boxed deck |
| Sweet Nothings | Card deck box (3.7" × 2.7" × 0.7") | 0.80" | 0.85" | Deep blister for boxed deck |
| Cubicle Shank | Tactical pen (5.5" × 0.6") | 0.65" | 0.70" | Narrow elongated blister |
| Lifer Ink | Tattoo sheet (6.5" × 4.5") | 0.15" | 0.20" | Very shallow blister. Dome footprint ~6.7" × 4.7" (identical to sticker sheet — same thermoform tool) |
| Turf Tags | Sticker sheet (6.5" × 4.5") | 0.15" | 0.20" | Very shallow blister. Dome footprint ~6.7" × 4.7" |
| Contraband (gag) | Empty — stapler silhouette | 0.40" | 0.45" | Stapler-shaped cavity, nothing inside |

- Blister material: Clear PETG thermoformed plastic
- Blister is glued to the front of the card backing
- **Both sides of the card backing are full comedy surfaces.** Front: product branding, item visible through blister, plus comedy copy filling every available inch around the blister. Back: deep comedy copy (fake FDA warnings, usage instructions, testimonials, QC stamps, fine print, etc.). Every square inch should have intentional comedy or intentional design space — no dead zones.

---

## Stacking Plan

### Orientation

- All blister packs lay **flat** (card backing parallel to briefcase base)
- Blister bubbles face **up** (toward the lid)
- Card backings face **down** (toward the base)
- The mug box sits in the top-left corner **beside** the blister stack, resting on the briefcase floor

### Layer Order (bottom to top)

| Layer | Item | Thickness | Cumulative Height | Rationale |
|-------|------|-----------|-------------------|-----------|
| 1 (bottom) | Contraband (gag — empty) | 0.45" | 0.45" | Gag reveal — last thing uncovered |
| 2 | Cell Talk (affirmation cards) | 0.85" | 1.30" | Card deck, stable base |
| 3 | Rap Sheets (complaint cards) | 0.85" | 2.15" | Card deck, grouped with L2 |
| 4 | Turf Tags (stickers) | 0.20" | 2.35" | Flat palette cleanser between card decks |
| 5 | Sweet Nothings (valentine cards) | 0.85" | 3.20" | Card deck, separated from the other two |
| 6 | Lifer Ink (tattoos) | 0.20" | 3.40" | Visual surprise — flat, graphic |
| 7 (top) | Cubicle Shank (pen) | 0.70" | 4.10" | High-value opener, first thing seen |

### Fit Confirmation

| Measurement | Value |
|-------------|-------|
| Total blister stack height | 4.10" |
| Interior depth available | 4.50" |
| Clearance to lid | 0.40" |
| Mug box height | 4.00" |
| Mug box clearance to lid | 0.50" |

**Status: FITS.** 0.40" clearance is ideal — items won't rattle but aren't jammed. The mug box has slightly more clearance (0.50") because it's shorter than the blister stack.

---

## Top-Down View — What the Recipient Sees

When the briefcase is opened (handle facing the user, opens like a book):

```
                    HINGE EDGE (away from you)
    ┌─────────────────────────────────────────────┐
    │                                             │
    │  ┌──────────┐                               │
    │  │          │                               │
    │  │ MUG BOX  │  ┌─────────────────────────┐  │
    │  │ "Mug     │  │                         │  │
    │  │  Shot"   │  │  CUBICLE SHANK BLISTER  │  │
    │  │ (window  │  │  (tactical pen visible  │  │
    │  │  shows   │  │   through blister,      │  │  11.0"
    │  │  mug)    │  │   product copy on card) │  │
    │  │          │  │                         │  │
    │  └──────────┤  └─────────────────────────┘  │
    │             │                               │
    │  ┌──────────┴───────────────────────────┐   │
    │  │                                      │   │
    │  │  CUBICLE SHANK BLISTER (continued)   │   │
    │  │  L-shaped card extends full width    │   │
    │  │  below the mug box                   │   │
    │  │                                      │   │
    │  └──────────────────────────────────────┘   │
    │                                             │
    └─────────────────────────────────────────────┘
                    CLASP EDGE (facing you)
                         13.5"
```

**First impression sequence:**
1. Open briefcase → see mug box (top-left) and Cubicle Shank pen pack (everywhere else)
2. Mug is visible through the die-cut window — real product, immediate "what is this?" hook
3. The pen is visible through its blister — high-value opener, sets the tone
4. Lift pen → Lifer Ink (tattoos), then Sweet Nothings (valentine cards)
5. Continue lifting → Turf Tags (stickers) as a palette cleanser, then Rap Sheets and Cell Talk card decks
6. Last pack: Contraband — the empty stapler-shaped blister is the final gag reveal
7. Remove everything → Easter egg printed on the briefcase interior floor

---

## Cross-Section View (Side Profile)

Looking at the briefcase from the right side:

```
    ┌─────────────────────────────────────────┐ ← Lid (closed)
    │                 0.40" clearance          │
    ├─────────────────────────────────────────┤ ← 4.10"
    │ Layer 7: Cubicle Shank / pen (0.70")    │
    ├─────────────────────────────────────────┤ ← 3.40"
    │ Layer 6: Lifer Ink / tattoos (0.20")    │
    ├─────────────────────────────────────────┤ ← 3.20"
    │ Layer 5: Sweet Nothings / cards (0.85") │
    ├─────────────────────────────────────────┤ ← 2.35"
    │ Layer 4: Turf Tags / stickers (0.20")   │
    ├─────────────────────────────────────────┤ ← 2.15"
    │ Layer 3: Rap Sheets / cards (0.85")     │
    ├─────────────────────────────────────────┤ ← 1.30"
    │ Layer 2: Cell Talk / cards (0.85")      │
    ├─────────────────────────────────────────┤ ← 0.45"
    │ Layer 1: Contraband / gag (0.45")       │
    ├─────────────────────────────────────────┤ ← 0.00"
    │              Briefcase base             │
    └─────────────────────────────────────────┘

    │← ─ ─ ─ MUG BOX (4.0" tall) ─ ─ ─ →│
    (sits beside the blister stack in the top-left corner)
    (mug box clearance to lid: 0.50")
```

---

## Interior Bottom Treatment

After all items are removed, the full **13.5" × 11.0"** interior floor is visible. No items partially cover it.

- Surface is printable (interior of paperboard box)
- Reserved for a final Easter egg / punchline (copy TBD by product owner)
- Could include: fake "cell inspection" form, evidence log, contraband inventory, or a message from Brad
- The mug box was the last item resting on it (top-left corner leaves a 5.0" × 4.0" area that may show slight wear from the box weight — not a concern for a gift product)

---

## Amazon Shipping Compliance

### FBA Size Tier Check

| Dimension | Briefcase | Outer Box (+0.75" clearance/side + box walls) | Large Standard Max |
|-----------|-----------|----------------------------------------------|-------------------|
| Length | 14.0" | ~15.75" | 18.0" |
| Width | 11.5" | ~13.25" | 14.0" |
| Depth | 5.0" | ~6.75" | 8.0" |

**Status: COMPLIANT.** All outer box dimensions fit within Amazon Large Standard tier (18" × 14" × 8") with room to spare.

---

## Summary of All Dimensions

### Packages

| Package | Dimensions (L × W × H) | Quantity |
|---------|------------------------|----------|
| Briefcase (exterior) | 14.0" × 11.5" × 5.0" | 1 |
| Briefcase (interior) | 13.5" × 11.0" × 4.5" | — |
| Mug box | 4.0" × 5.0" × 4.0" | 1 |
| Card deck box | 3.7" × 2.7" × 0.7" | 3 |
| Blister card (L-shape) | 13.25" × 10.75" (with 4.75" × 3.75" notch) | 7 |

### Blister Pack Thicknesses

| Item | Card Thickness | Blister Depth | Total |
|------|---------------|---------------|-------|
| Card deck blisters (×3) | 0.025" | 0.80" | 0.85" |
| Pen blister (×1) | 0.025" | 0.65" | 0.70" |
| Flat item blisters (×2) | 0.025" | 0.15" | 0.20" |
| Contraband gag (×1) | 0.025" | 0.40" | 0.45" |

### Printable Surfaces for Designer

| Surface | Dimensions | Sides | Total Area |
|---------|-----------|-------|------------|
| Blister card (×7) | 124.5 sq in per card | 2 (front + back) | 1,743 sq in total |
| Card deck box (×3) | ~26.5 sq in per box | 6 (all sides) | ~477 sq in total |
| Mug box (×1) | ~97 sq in | 6 (all sides) | 97 sq in |
| Briefcase interior floor (×1) | 148.5 sq in | 1 | 148.5 sq in |
| **Grand total printable** | | | **~2,466 sq in** |

---

## Notes for the Designer

1. **Blister card die cut:** One L-shaped die serves all 7 cards. Only the print changes per item.
2. **Hanging hole:** 0.25" diameter, centered on the top edge of the card, 0.375" from the edge. Present on all 7 cards for retail authenticity.
3. **Card deck boxes:** All 3 are the same box dimensions. Only the print differs.
4. **Mug box window:** Die-cut window on one face. Shape/size of window is a design decision (circular to match mug, or rectangular — designer's call).
5. **Blister bubble placement:** The blister occupies a portion of the card front. The remaining front card area is available for copy — and should be used. For flat items (tattoos, stickers), the blister is very shallow and can be positioned to leave maximum copy space.
6. **The Contraband pack** has an empty stapler-shaped blister cavity. The card copy should read like an evidence tag or confiscation notice. The empty blister IS the joke. This is very likely to be included — low cost, high comedy value.
7. **Both sides are comedy surfaces.** The front has product branding and comedy copy around the blister. The back has deep comedy copy (fake FDA warnings, usage instructions, testimonials, QC stamps, etc.). The recipient lifts each pack, laughs at the front, flips it over, laughs at the back, then opens the blister to get the item — three layers of engagement per pack. Every square inch should have intentional comedy or intentional design space.
8. **Evidence tags:** Each blister card has a small manila evidence tag (2.0" × 1.25") attached to the card back by a 0.5"-wide tan cotton twill ribbon. The adhesive patch is centered on the bottom edge of the card back, ~0.5" from the edge. The tag hangs from the bottom edge when the card is in the briefcase. The tag is styled as a police evidence property tag with a red "EVIDENCE" header — both sides are printed with unique comedy copy per card. The tag serves as the extraction handle for removing cards from the tightly fitted briefcase.

### Stack Stability — Blister Bubble Placement Guide

All 7 blister cards are the same L-shape and stack in the same orientation (notch must always clear the mug box in the top-left corner — rotation is not possible). To keep the stack flat and stable, **vary the blister bubble position across layers** so bumps from one layer don't stack directly on bumps from the layer below.

The card has two zones (Zone A: 13.25" × 7.00" bottom rectangle; Zone B: 8.50" × 3.75" upper-right rectangle). Place each item's blister in a different region:

| Layer | Item | Recommended Blister Placement |
|-------|------|-------------------------------|
| 1 | Contraband (stapler shape) | Center-right of Zone A or spanning Zone A/B junction |
| 2 | Cell Talk (card deck box) | Center of Zone A |
| 3 | Rap Sheets (card deck box) | Left side of Zone A |
| 4 | Turf Tags (sticker sheet, 6.5" × 4.5") | Center of Zone A — dome footprint ~6.7" × 4.7" covers most of Zone A width; only 0.15" deep, acts as leveling layer |
| 5 | Sweet Nothings (card deck box) | Right side of Zone A |
| 6 | Lifer Ink (tattoo sheet, 6.5" × 4.5") | Center of Zone A — dome footprint ~6.7" × 4.7" (identical to sticker sheet); only 0.15" deep, acts as leveling layer |
| 7 | Cubicle Shank (pen) | Horizontal across Zone A — naturally offset from the square bubbles below |

This staggering ensures:
- No two deep blisters (0.65"+) are directly above each other
- The 18pt card stock can bridge across the blister edges of the layer below without flexing
- The overall stack remains level and doesn't lean or wobble
- The flat item blisters (Layers 4 and 6: Turf Tags, Lifer Ink) at only 0.15" deep act as natural leveling layers between the card decks

**Note:** These are recommendations, not rigid constraints. The designer has creative freedom on bubble placement — just avoid stacking three 0.80" deep bubbles in the exact same spot across Layers 2, 3, and 5.

---

## Open Questions

1. **Contraband item shape:** Stapler is the working concept. Other options: tape dispenser, letter opener, scissors, three-hole punch. Which silhouette is funniest as a "confiscated" item?
2. **Interior bottom copy:** Reserved but not yet written. This is the final Easter egg after full unboxing.
3. **Mug orientation in box:** Mug on its side — should the opening face left, right, or toward the window? Affects what's visible through the die-cut.
4. **Blister card material:** 18pt is the working spec. 24pt would be more rigid and premium-feeling but adds cost and ~0.01" thickness per card (negligible for fit).
5. **Card stock for card deck boxes:** 18pt is standard for small boxes. Could go to 24pt for a more premium feel — same cost trade-off.
6. **Evidence tag ribbon material:** Cotton twill is the working spec. Alternative: woven polyester or satin ribbon. Cotton twill has the most authentic/industrial look. Confirm with sourcer.
