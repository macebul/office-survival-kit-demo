# Briefcase Shrink Analysis & Extraction Problem Solution

**Author:** Alex (PM)
**Date:** 2026-06-17
**Status:** Analysis Complete -- Decision Needed
**Version:** 1.0

---

## Executive Summary

**Part 1 (Shrink):** Shrinking the briefcase yields negligible FBA savings ($0.15-$0.35/unit annually) because all three scenarios remain in the same FBA size tier (Large Standard). The real cost of shrinking is lost comedy surface area (9-21% per card) and a briefcase that progressively loses its "executive attache" presence. The juice is not worth the squeeze.

**Part 2 (Extraction):** A single thumb notch (semicircular scallop) on one long wall of the briefcase is the correct solution. It costs nothing incremental (it is part of the die-cut), it is the industry standard for premium rigid boxes, and it can be turned into a comedy beat. The cards should stay at 13.25" x 10.75" with the current 0.125" clearance.

---

## PART 1: COST/BENEFIT OF SHRINKING THE BRIEFCASE

### Baseline: Current Design

| Attribute | Value |
|-----------|-------|
| Briefcase exterior | 14.0" x 11.5" x 5.0" |
| Interior | 13.5" x 11.0" x 4.5" |
| Blister card | 13.25" x 10.75" (L-shaped, with mug box notch) |
| Mug box notch | 4.0" x 5.0" corner cutout |
| Clearance (per side, XY) | 0.125" |
| Outer Amazon box | ~15.5" x 13.0" x 6.5" |

### Card Printable Area Calculations

The blister cards are L-shaped. Each card is a rectangle minus the mug box corner notch.

**Full rectangle area per card (one side):**
- Current: 13.25" x 10.75" = 142.44 sq in
- Mug box notch: 4.0" x 5.0" = 20.00 sq in
- **L-shaped area per side:** 142.44 - 20.00 = **122.44 sq in**
- **Both sides:** 122.44 x 2 = **244.88 sq in per card**
- **7 cards total:** 244.88 x 7 = **1,714.16 sq in total comedy surface**

---

### Scenario A: Cards 12.0" x 9.5" -> Briefcase 12.5" x 10.0" x 5.0"

**Card area:**
- Full rectangle: 12.0" x 9.5" = 114.00 sq in
- Mug box notch (unchanged): 4.0" x 5.0" = 20.00 sq in
- L-shaped area per side: 114.00 - 20.00 = **94.00 sq in**
- Both sides: 94.00 x 2 = **188.00 sq in per card**
- 7 cards total: 188.00 x 7 = **1,316.00 sq in**

**Area lost per card:** 244.88 - 188.00 = **56.88 sq in (-23.2%)**
**Total comedy surface lost:** 1,714.16 - 1,316.00 = **398.16 sq in lost**

That is **398 square inches** of comedy real estate gone. Roughly equivalent to losing 1.6 entire current cards from the set.

**Mug box notch proportion:**
- Current: notch is 20.00 / 142.44 = 14.0% of full rectangle
- Scenario A: notch is 20.00 / 114.00 = **17.5% of full rectangle**
- The notch becomes noticeably larger relative to the card. The "L" shape starts looking like a "C" shape.

**Notch coverage check:** The card wraps around the mug box on two sides. With a 12.0" x 9.5" card and a 4.0" x 5.0" notch:
- Along the X axis: 12.0" - 4.0" = 8.0" of card extends past the notch (comfortable)
- Along the Y axis: 9.5" - 5.0" = 4.5" of card extends past the notch (still workable, but getting thin)

**Interior dimensions:** 12.0" x 9.5" x 4.5" (with 0.25" walls)

**Briefcase surface area reduction:**
- Current exterior surface: 2(14.0 x 11.5) + 2(14.0 x 5.0) + 2(11.5 x 5.0) = 322 + 140 + 115 = **577 sq in**
- Scenario A exterior: 2(12.5 x 10.0) + 2(12.5 x 5.0) + 2(10.0 x 5.0) = 250 + 125 + 100 = **475 sq in**
- Reduction: 577 - 475 = 102 sq in (**-17.7%** less paperboard)

**Estimated material savings:** At production volumes, 24pt rigid setup box paperboard runs roughly $0.008-$0.012 per sq in in finished cost. A 102 sq in reduction saves approximately **$0.80-$1.20 per unit** on the briefcase box alone.

---

### Scenario B: Cards 11.0" x 8.5" -> Briefcase 11.5" x 9.0" x 5.0"

**Card area:**
- Full rectangle: 11.0" x 8.5" = 93.50 sq in
- Mug box notch (unchanged): 4.0" x 5.0" = 20.00 sq in
- L-shaped area per side: 93.50 - 20.00 = **73.50 sq in**
- Both sides: 73.50 x 2 = **147.00 sq in per card**
- 7 cards total: 147.00 x 7 = **1,029.00 sq in**

**Area lost per card:** 244.88 - 147.00 = **97.88 sq in (-40.0%)**
**Total comedy surface lost:** 1,714.16 - 1,029.00 = **685.16 sq in lost**

That is **685 square inches** gone. Equivalent to losing 2.8 entire current cards.

**Mug box notch proportion:**
- Scenario B: notch is 20.00 / 93.50 = **21.4% of full rectangle**
- The notch is now over one-fifth of the card. The card barely wraps around the mug box.

**CRITICAL BREAKPOINT:**
- Along the Y axis: 8.5" - 5.0" = **3.5" of card past the notch**. This is barely more than the mug box depth (4.0"). The card's "arm" that wraps beside the mug box is thinner than the notch itself. The L-shape looks vestigial. Structural integrity of the blister card at the notch corner becomes a concern -- a 3.5" strip connecting to the main body of the card will flex and potentially crease.

**Briefcase surface area:**
- Scenario B exterior: 2(11.5 x 9.0) + 2(11.5 x 5.0) + 2(9.0 x 5.0) = 207 + 115 + 90 = **412 sq in**
- Reduction: 577 - 412 = 165 sq in (**-28.6%** less paperboard)

**Estimated material savings:** ~$1.30-$2.00 per unit on the briefcase box.

---

### FBA Dimensional Weight Calculations

Amazon uses: **Dim Weight = (L x W x H) / 139**, rounded up to next whole pound.

| Scenario | Outer Box | Volume (cu in) | Dim Weight | Rounded |
|----------|-----------|----------------|------------|---------|
| **Current** | 15.5" x 13.0" x 6.5" | 1,309.75 | 9.42 lb | **10 lb** |
| **Scenario A** | ~13.75" x 11.25" x 6.5" | 1,005.47 | 7.23 lb | **8 lb** |
| **Scenario B** | ~12.75" x 10.25" x 6.5" | 849.84 | 6.12 lb | **7 lb** |

**Actual unit weight estimate:** The kit (briefcase + all contents + blister cards + mug + cards + pen + packaging) likely weighs 3-5 lbs. The dimensional weight will govern in all scenarios because this is a bulky, lightweight product.

---

### FBA Size Tier Analysis

**Large Standard thresholds:** Longest side <= 18", median side <= 14", shortest side <= 8", weight <= 20 lb.

| Scenario | Longest | Median | Shortest | Size Tier |
|----------|---------|--------|----------|-----------|
| **Current** | 15.5" | 13.0" | 6.5" | Large Standard |
| **Scenario A** | 13.75" | 11.25" | 6.5" | Large Standard |
| **Scenario B** | 12.75" | 10.25" | 6.5" | Large Standard |

**All three scenarios are Large Standard.** There is no tier change. The Small Standard tier requires the shortest side to be <= 0.75" and weight <= 1 lb -- this product will never qualify.

---

### FBA Fulfillment Fee Comparison

Using the 2026 Large Standard rate card ($10-$50 price band):

The formula above 3 lb is: **$6.97 base + $0.08 per 4 oz above 3 lb.**

| Scenario | Shipping Weight (dim) | Fee Calculation | Fulfillment Fee | + 3.5% Fuel | Total |
|----------|-----------------------|-----------------|-----------------|-------------|-------|
| **Current** | 10 lb | $6.97 + ($0.08 x 28 increments*) | ~$9.21 | +$0.32 | **~$9.53** |
| **Scenario A** | 8 lb | $6.97 + ($0.08 x 20 increments*) | ~$8.57 | +$0.30 | **~$8.87** |
| **Scenario B** | 7 lb | $6.97 + ($0.08 x 16 increments*) | ~$8.25 | +$0.29 | **~$8.54** |

*Increments = (shipping weight - 3 lb) / 4 oz. For 10 lb: (10-3) = 7 lb = 112 oz / 4 = 28. For 8 lb: (8-3) = 5 lb = 80 oz / 4 = 20. For 7 lb: (7-3) = 4 lb = 64 oz / 4 = 16.

**Fulfillment fee savings vs. current:**
- Scenario A: $9.53 - $8.87 = **$0.66/unit**
- Scenario B: $9.53 - $8.54 = **$0.99/unit**

---

### FBA Storage Fee Comparison

Storage is charged per cubic foot per month.

| Scenario | Outer Box Volume | Cubic Feet | Off-Peak (/mo) | Peak (/mo) |
|----------|------------------|------------|-----------------|------------|
| **Current** | 1,309.75 cu in | 0.758 cu ft | $0.591 | $1.819 |
| **Scenario A** | 1,005.47 cu in | 0.582 cu ft | $0.454 | $1.397 |
| **Scenario B** | 849.84 cu in | 0.492 cu ft | $0.384 | $1.181 |

**Annual storage cost** (assuming 9 months off-peak + 3 months peak, holding 1 unit the entire year):

| Scenario | Off-Peak (9 mo) | Peak (3 mo) | Annual Storage |
|----------|-----------------|-------------|----------------|
| **Current** | $5.32 | $5.46 | **$10.78** |
| **Scenario A** | $4.09 | $4.19 | **$8.28** |
| **Scenario B** | $3.46 | $3.54 | **$7.00** |

**Storage savings vs. current (per unit-year):**
- Scenario A: $10.78 - $8.28 = **$2.50/unit-year**
- Scenario B: $10.78 - $7.00 = **$3.78/unit-year**

**Reality check:** You do not hold 1 unit for 12 months. At a reasonable turn rate (30-60 day average inventory hold), storage savings shrink dramatically:

| Scenario | Avg 45-day hold storage cost | Savings vs. Current |
|----------|------------------------------|---------------------|
| **Current** | ~$0.89 | -- |
| **Scenario A** | ~$0.68 | **$0.21** |
| **Scenario B** | ~$0.58 | **$0.31** |

---

### Total FBA Savings Per Unit Sold

| Savings Category | Scenario A vs. Current | Scenario B vs. Current |
|------------------|------------------------|------------------------|
| Fulfillment fee | $0.66 | $0.99 |
| Storage (45-day hold) | $0.21 | $0.31 |
| **Total FBA savings** | **$0.87/unit** | **$1.30/unit** |

Adding briefcase material savings:

| Category | Scenario A | Scenario B |
|----------|-----------|-----------|
| FBA savings | $0.87 | $1.30 |
| Briefcase material | ~$1.00 | ~$1.65 |
| **Total savings per unit** | **~$1.87** | **~$2.95** |

---

### What You Lose

| What You Give Up | Scenario A | Scenario B |
|------------------|-----------|-----------|
| Comedy surface per card | -23.2% (56.88 sq in) | -40.0% (97.88 sq in) |
| Total comedy surface across 7 cards | -398 sq in | -685 sq in |
| Briefcase exterior copy surface | -17.7% | -28.6% |
| Mug notch becomes % of card | 17.5% (getting awkward) | 21.4% (structurally concerning) |
| Card Y-arm past notch | 4.5" (workable) | 3.5" (breakpoint risk) |
| "Executive attache" feel | Diminished -- reads as a tablet case | Gone -- reads as a lunch box |

---

### The "Premium Feel" Problem

The current 14.0" x 11.5" briefcase has proportions that read as "executive attache case" or "document briefcase." This is critical to the comedy -- the joke only works if the packaging is straight-faced enough to be taken seriously at first glance.

- **12.5" x 10.0" (Scenario A):** This is roughly iPad-plus-case territory. It still has some presence on a desk, but it has crossed from "briefcase" to "portfolio." The recipient's first reaction shifts from "what is this serious-looking briefcase" to "oh, a box." The setup for the joke weakens.

- **11.5" x 9.0" (Scenario B):** This is standard letter-paper-plus-margin territory. It reads as "gift box" -- no one would mistake this for a real briefcase. The entire "matte black executive attache with handle and clasps" comedy premise collapses. At this size, the handle looks comically oversized relative to the box, which might be funny in a different product but undermines the straight-faced institutional packaging that makes this kit work.

---

### Recommendation: Do Not Shrink

**Decision: KEEP CURRENT SIZE (14.0" x 11.5" x 5.0")**

**Rationale:** The total savings ($1.87-$2.95/unit) are meaningful but not transformative against a $10-12 COGS target. Meanwhile, the losses are disproportionate:

1. **Comedy surface area is the product.** This is a gag gift. The blister cards are the comedy delivery mechanism. Losing 23-40% of printable area per card directly reduces the product's core value proposition. You cannot save $1.87 on FBA and make that back by being less funny.

2. **The briefcase IS the joke's setup.** Shrinking the briefcase weakens the straight-faced institutional packaging that makes the prison-themed content land. A 12.5" x 10.0" box does not trigger "why did someone send me an attache case?" It triggers "oh, a gift box."

3. **No tier change.** If shrinking moved the product from Large Standard to a cheaper tier, the math would change significantly. It does not. All scenarios stay Large Standard.

4. **The mug box notch gets worse.** At Scenario B, the L-shaped card is structurally compromised. At Scenario A, it is awkward. The notch-to-card proportion only goes in one direction -- worse.

**What would change this decision:**
- If FBA introduced a new size tier between Small Standard and Large Standard that this product could qualify for
- If COGS came in above $14 and the margin math demanded cost cuts
- If user testing showed recipients do not read or engage with the blister cards (making surface area moot)

---

## PART 2: THE EXTRACTION PROBLEM

### Problem Statement

The blister cards sit inside the briefcase with 0.125" clearance per side. There are no finger holds, tabs, or lift mechanisms. When the recipient opens the lid, they see the top card filling the entire interior. There is no obvious way to lift it out.

This is a functional UX failure that will occur on 100% of unboxings. Every single recipient will fumble with their first card extraction.

---

### Options Evaluated

#### Option 1: Ribbon Pull Tabs (One Per Card)

**How it works:** A short ribbon or fabric tab is glued under each card, with the tab end hanging over the briefcase edge.

**Pros:**
- Unambiguous "pull here" affordance
- Works for every card in the stack independently

**Cons:**
- 7 ribbons hanging over the edge looks terrible. It creates a visual mess before the lid is even opened -- ribbons caught in the magnetic closure, tangled, fraying.
- Cost: ~$0.03-0.05 per ribbon x 7 = $0.21-0.35 added COGS, plus labor to position each one during assembly
- Ribbons interfere with the briefcase's straight-faced institutional aesthetic. Ribbons say "gift box." The briefcase is not supposed to say "gift box."

**Verdict: REJECT.** Visual noise kills the unboxing first impression.

#### Option 2: Thumb Notch in Briefcase Wall

**How it works:** A semicircular scallop is die-cut into the top edge of one briefcase wall, creating a finger-accessible gap where the wall meets the card edge. Standard in phone packaging, tablet packaging, and premium rigid boxes.

**Pros:**
- Industry standard. Every iPhone box, every premium rigid box with a lift-out tray uses this.
- Zero incremental cost -- the notch is part of the box die-cut.
- Clean, intentional, invisible when the box is closed.
- Works for every card: lift the top card from the notch, then the next card is accessible from the same notch.

**Cons:**
- Only provides access on one side. For very snug cards, you might need to rock the card slightly.
- Need to decide which wall gets the notch (long wall vs. short wall).

**Verdict: STRONG CANDIDATE.**

#### Option 3: Slightly Undersized Cards (12.75" x 10.25")

**How it works:** Shrink cards to create 0.375" clearance per side instead of 0.125". Enough to get fingertips under the edge.

**Pros:**
- No modification to the briefcase needed
- 0.375" gap is physically workable for extraction

**Cons:**
- Visible gap between card edge and briefcase wall on all four sides. The cards no longer fill the interior visually. Instead of "this card perfectly fills the briefcase" the impression is "this card is floating inside a slightly-too-big box."
- Loss of printable area: 13.25 x 10.75 = 142.44 sq in vs. 12.75 x 10.25 = 130.69 sq in. That is **-8.3% per card per side**, or **-11.75 sq in per card per side**, or **-164.5 sq in across all 7 cards (both sides)**.
- The snug fit is a feature, not a bug. It communicates precision, quality, and intentionality. A visible gap communicates "we did not quite get the dimensions right."

**Verdict: REJECT.** Sacrifices precision aesthetic and comedy surface for a problem that has a zero-cost solution (Option 2).

#### Option 4: Corner Finger Relief

**How it works:** Small triangular or semicircular cutouts in one or two interior corners of the briefcase, creating a small gap at the corner for fingertips.

**Pros:**
- Subtle. Barely visible.
- Zero incremental cost (die-cut modification).

**Cons:**
- Corner access is awkward for lifting a large flat card. You get one or two fingertips in a corner, then try to pry a 13.25" card up from one corner. The card bends, the blister bubbles resist, and the user is fighting the card instead of smoothly lifting it.
- Two corners is better than one but still produces a diagonal tilt that fights against the snug walls.

**Verdict: WEAK OPTION.** Functional but inelegant. The thumb notch on the long wall is superior.

#### Option 5: Chamfered/Rounded Card Corners

**How it works:** Round the corners of each blister card (e.g., 0.5" radius), creating small gaps at each corner.

**Pros:**
- Cards look slightly more polished
- Small corner gaps for fingertips

**Cons:**
- Same problem as Option 4 -- corner access is suboptimal for large flat cards
- Rounding all 4 corners x 7 cards = 28 additional die-cut radii. Not expensive, but not free.
- The gaps at corners are small (maybe 0.2" clear area at each corner). Not enough for reliable extraction.

**Verdict: REJECT as primary solution.** Could be a nice visual touch combined with Option 2, but does not solve extraction on its own.

#### Option 6: Single Ribbon Under Entire Stack

**How it works:** One wide ribbon laid in the briefcase before all 7 cards are stacked on top. Pull the ribbon to lift the entire stack up slightly, then grab individual cards.

**Pros:**
- One ribbon instead of seven
- Lifts the whole stack at once

**Cons:**
- Only solves first extraction. After removing the top card and putting the stack back, the ribbon is under 6 cards. You still cannot access individual cards mid-stack.
- The ribbon gets tangled, lost, or forgotten after first use.
- Wide ribbon under 7 cards adds height to the stack, eating into the 0.40" Z clearance.
- The user has to pull the ribbon, hold the stack elevated, grab a card, then let the stack back down. This is a two-handed juggling act that works on a video but not in real life.

**Verdict: REJECT.** Solves only the initial lift, not ongoing card access.

#### Option 7: Pop-Up / Spring Mechanism

**How it works:** Foam pad or spring mechanism under the stack that pushes cards up when the lid opens.

**Pros:**
- Dramatic reveal effect
- Cards presented to the user rather than requiring extraction

**Cons:**
- Cost: spring mechanism adds $0.50-1.00+ per unit
- Reliability: spring mechanisms fail, jam, and wear out
- The 0.40" Z clearance above the stack means there is almost nowhere for cards to "pop up" to
- Foam compression adds height to the stack, reducing clearance further
- Over-engineered for a $25 gag gift

**Verdict: REJECT.** Over-engineered, expensive, unreliable.

#### Option 8: Existing Tab Objects

The Blender model shows Tab objects (3.50" x 1.20" x 0.08") on each card. Analysis:

**If tabs extend beyond the card edge:** They would protrude past the 13.25" card width, meaning they stick out beyond the briefcase interior wall (13.5"). This only works if the briefcase wall has a matching slot. No slot exists in the current design. Adding 7 slots to the briefcase wall is a manufacturing complexity that adds cost and weakens the wall structure.

**If tabs are on the card surface (within 13.25"):** They are flush with the briefcase walls and provide no extraction benefit. They may serve as visual labels or product indicators, but they do not help you lift the card.

**Verdict:** The existing tabs do not solve extraction in either configuration. They appear to be design/labeling elements, not lift mechanisms.

---

### Recommended Solution: Thumb Notch + Comedy Integration

#### The Solution: Single Thumb Notch on the Front (+Y) Long Wall

**Specifications:**

| Parameter | Value | Rationale |
|-----------|-------|-----------|
| **Location** | Front long wall (+Y), centered on X axis | Front wall is where the user naturally reaches; centered gives equal access to both sides of the card |
| **Shape** | Semicircular scallop | Industry standard; smooth finger contact; no stress concentration at corners |
| **Width** | 1.5" diameter (0.75" radius) | Wide enough for two fingertips side by side; proportional to a 14" wall |
| **Depth** | 0.50" (extends 0.50" down from the top edge of the wall) | Deep enough to get fingertip pad under the card edge; shallow enough to maintain wall structural integrity |
| **Edge finish** | Same matte black as exterior, clean die-cut edge | Should look intentional, not aftermarket |
| **Position on Z axis** | Top edge of the interior wall, creating a scallop in the rim | The notch is in the rim, not a hole in the middle of the wall |

**Why the front wall:**
- When the briefcase is open and lying flat, the front wall (+Y) is closest to the user
- The handle is on the front face -- users naturally orient the briefcase with the handle toward them
- The front wall is 14" long, giving the centered notch maximum visual balance
- Placing it on the front wall means the user's natural reaching motion (toward themselves) aligns with the extraction motion (lifting the card toward themselves first)

#### How Extraction Works

1. User opens the lid. Sees the top blister card filling the interior.
2. User's thumb or fingers naturally find the scallop on the front wall rim.
3. Fingertips slide under the edge of the top card (0.125" gap + the card has slight flex).
4. User lifts the front edge of the card, tilting it slightly, then slides it out.
5. Next card is now accessible from the same notch.
6. Repeat for all 7 cards.

This is identical to how you remove an iPhone from its box, how you lift a framed photo from a presentation case, or how you extract a tablet from premium packaging. It is a solved problem.

#### Comedy Integration

The thumb notch is a small semicircular absence in the briefcase wall. It can carry copy.

**Option A (Minimal):** Small text printed on the interior wall surface just below the notch:
> "EXTRACTION POINT"

**Option B (Institutional):** Small stencil-style label adjacent to the notch:
> "AUTHORIZED EXTRACTION POINT -- REMOVE CONTENTS ONE LAYER AT A TIME. REPORT ANY MISSING ITEMS TO GARY."

**Option C (Diagram):** A tiny pictogram printed near the notch showing a finger lifting something, with an arrow, in the style of institutional safety diagrams. Label: "PULL TO RELEASE."

Any of these options turns a functional necessity into a comedy beat. The notch exists because it has to. The label turns it into world-building. This is exactly how the best details in this kit work -- functional elements that happen to also be funny.

#### Cost Impact

**Incremental cost: $0.00.**

The thumb notch is a modification to the existing briefcase die-cut. The die for the box panels already exists; adding a semicircular notch to the front wall panel's die is a one-time tooling change (typically $0-50 at the die-making stage) with zero per-unit cost increase. The notch removes material rather than adding it.

If the notch gets comedy copy printed near it, that is part of the existing interior print run -- no additional printing step.

---

### Alternatives Considered and Rejected for Completeness

| Option | Verdict | Key Reason |
|--------|---------|------------|
| 7 ribbon tabs | Reject | Visual mess, $0.21-0.35 added cost, anti-institutional aesthetic |
| Undersized cards | Reject | Loses 8.3% printable area, visible gaps, weakens precision feel |
| Corner relief | Weak | Functional but awkward for large flat cards |
| Chamfered corners | Reject | Insufficient gap for extraction |
| Single stack ribbon | Reject | Only solves first extraction, two-hand juggle |
| Pop-up spring | Reject | Over-engineered, expensive, unreliable, no Z clearance |
| Tab extensions + wall slots | Reject | Manufacturing complexity, weakens wall, 7 slots needed |
| **Thumb notch** | **Recommend** | **Zero cost, industry standard, comedy opportunity** |

---

### Second Notch Consideration

A second notch on the back wall (-Y) would allow two-handed extraction (lift both edges simultaneously). However:

- The back zone has the compartment cover and divider wall along the -Y region. Depending on exact interior layout, a back-wall notch may conflict with the divider wall position.
- Single-notch extraction works fine for cards this size -- the card tilts slightly toward the user and slides out. Two-handed extraction is not necessary.
- A single notch is cleaner aesthetically and provides a single clear "pull here" point.

**Recommendation: One notch, front wall, centered.**

---

## COMBINED RECOMMENDATION

| Decision | Recommendation |
|----------|---------------|
| **Briefcase size** | Keep at 14.0" x 11.5" x 5.0". Do not shrink. |
| **Blister card size** | Keep at 13.25" x 10.75". Do not shrink. |
| **Extraction** | Add a 1.5" diameter x 0.50" deep semicircular thumb notch centered on the front (+Y) interior wall top edge |
| **Comedy** | Print "EXTRACTION POINT" or equivalent institutional label near the notch |
| **Cost impact** | Net zero ($0.00 incremental per unit) |
| **Next step** | Add the thumb notch to the Blender model and the packaging spec. Update the die-cut drawing. |

---

## Appendix A: Comparison Summary Table

| Metric | Current | Scenario A (12.5x10x5) | Scenario B (11.5x9x5) |
|--------|---------|------------------------|------------------------|
| Card area (L-shaped, per side) | 122.44 sq in | 94.00 sq in | 73.50 sq in |
| Total comedy surface (7 cards, both sides) | 1,714 sq in | 1,316 sq in | 1,029 sq in |
| Comedy surface lost | -- | -398 sq in (-23.2%) | -685 sq in (-40.0%) |
| Notch as % of card rectangle | 14.0% | 17.5% | 21.4% |
| Card Y-arm past notch | 5.75" | 4.50" | 3.50" (breakpoint) |
| Briefcase surface area | 577 sq in | 475 sq in | 412 sq in |
| Material savings (briefcase) | -- | ~$1.00 | ~$1.65 |
| Outer box dim weight | 10 lb | 8 lb | 7 lb |
| FBA size tier | Large Standard | Large Standard | Large Standard |
| FBA fulfillment fee (est.) | ~$9.53 | ~$8.87 | ~$8.54 |
| FBA fulfillment savings | -- | $0.66 | $0.99 |
| FBA storage savings (45-day hold) | -- | $0.21 | $0.31 |
| Total all-in savings per unit | -- | ~$1.87 | ~$2.95 |
| Premium briefcase feel | Executive attache | Portfolio/tablet case | Gift box / lunch box |
| Extraction method | None (problem) | None (still a problem) | None (still a problem) |

Note: Shrinking does NOT solve the extraction problem. You still need a thumb notch or other mechanism regardless of size. Even at 0.375" clearance (the "slightly undersized cards" option), extraction is awkward without a notch.

## Appendix B: FBA Fee Sources & Methodology

Fee estimates use the 2026 Large Standard rate card for the $10-$50 price band:
- Base: $6.97 for first 3 lb
- Above 3 lb: +$0.08 per 4 oz increment
- Fuel surcharge: +3.5% (effective April 17, 2026)
- Dimensional weight divisor: 139
- Storage: $0.78/cu ft/month (Jan-Sep), $2.40/cu ft/month (Oct-Dec)

All FBA fee figures are estimates based on published third-party rate card compilations. For exact per-ASIN fees, use the Amazon Seller Central Revenue Calculator once the product is listed.

## Appendix C: Notch Breakpoint Analysis

The blister card L-shape has a mug box notch of 4.0" x 5.0" in one corner. As the card shrinks, the notch stays fixed. The "arm" of the L that wraps past the mug box gets thinner:

| Card Y Dimension | Y arm past notch | Assessment |
|------------------|------------------|------------|
| 10.75" (current) | 5.75" | Solid -- arm is wider than the notch |
| 9.50" (Scenario A) | 4.50" | Workable -- arm is close to notch width |
| 8.50" (Scenario B) | 3.50" | **Breakpoint** -- arm thinner than notch, flexes at junction |
| 7.50" (theoretical) | 2.50" | Structurally failed -- arm would crease and tear |
| 5.00" (theoretical) | 0.00" | No arm -- card does not wrap past notch at all |

The practical minimum card Y dimension for a 5.0" mug box notch is approximately **9.0"** (4.0" arm), below which the L-shape becomes structurally unreliable and visually awkward.
