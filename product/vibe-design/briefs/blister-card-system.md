# Design Brief: Blister Card System

> **Project:** Office Survival Kit -- 7-card blister pack system
> **Date:** July 3, 2026
> **Requester:** Product owner (copy, creative direction, brand)
> **Designer(s):** TBD
> **Complexity:** High -- system-level design governing 7 individually printed cards with shared structure, diverse content, and unified brand identity
> **Status:** Working draft

---

## 1. Project Overview

### What This Document Is

This is the **system-level design brief** for the 7 carded blister packs inside the Office Survival Kit. It defines the shared structural rules, zone definitions, element hierarchy, and design principles that apply across all 7 cards.

Every individual item has (or will have) its own item-level brief with specific copy, layout, and art direction. This document governs what those briefs have in common -- the framework that makes 7 different cards feel like one product family.

### Where It Sits in the Document Hierarchy

```
DESIGN-BRIEF-MASTER.md          Kit-level philosophy, audience, voice
         |
         v
blister-card-system.md           THIS DOCUMENT -- shared system rules
         |                       for all 7 blister cards
         v
{item}-box.md / surface-map.md   Per-item briefs, copy, layout
```

- **Upstream:** `DESIGN-BRIEF-MASTER.md` -- overall design philosophy, audience definition, voice guidelines, layer cake structure, and the core principle ("the packaging is the straight man, the copy is the comedian"). This brief inherits everything from the master brief and applies it specifically to blister cards.
- **Downstream:** Individual item briefs (`cubicle-shank-box.md`, `lifer-ink-box.md`, etc.) and surface maps (`cubicle-shank-surface-map.md`, etc.) -- these follow the zone definitions, element hierarchy, and design principles established here.

### What This Document Decides

- The three-zone system (Zone A, Zone B, Zone C) -- purpose, dimensions, and content direction for each
- Required vs. recommended design elements on every card
- Eye-path and reading order guidance
- Typography and color rules applied at the card level
- How evidence tags integrate with card design
- How the L-shaped notch is treated
- Per-item notes on blister footprint and content type differences
- Dependencies and open questions that affect all 7 cards

### What This Document Does NOT Decide

- Specific copy for any individual card (owned by item briefs and surface maps)
- Specific layout for any individual card (per-item identity over rigid template)
- The handle concept's final copy and design (Zone A -- needs dedicated session)
- The naming hierarchy (prison term vs. Brad's rebrand -- needs dedicated session)
- The notch edge treatment (deferred until mug box design is finalized)

---

## 2. Physical Specifications

### Card Dimensions

| Attribute | Spec |
|-----------|------|
| **Overall size** | 13.25" wide x 10.75" tall |
| **Shape** | L-shaped -- 4.75" x 3.75" notch cut from upper-left corner |
| **Material** | 18pt paperboard, printed both sides |
| **Blister** | Clear PETG thermoformed plastic, glued to front face |
| **Hanging hole** | 0.25" diameter, centered on top edge |
| **Die** | All 7 cards use the same die-cut -- only the print differs |
| **Print** | Full color, CMYK, 300 DPI minimum, both sides |
| **Bleed** | 0.125" (3mm) all edges |
| **Evidence tag** | Attached to back, bottom center, via cotton twill ribbon |

### Surface Area Budget

| Surface | Area |
|---------|------|
| **Card front** (display face -- blister covers part of Zone B) | ~124.5 sq in total, minus blister footprint |
| **Card back** (comedy surface -- full real estate) | ~124.5 sq in total |
| **Total per card** | ~249 sq in |
| **Total across all 7 cards** | ~1,743 sq in |

The back of every card is unobstructed -- no blister, no structural elements blocking the print. This is the deepest comedy surface in the kit, card for card.

### Card Orientation

```
         TOP EDGE (has hanging hole)
    +-------------------------------------+
    |              13.25"                 |
    |                                     |
    | NOTCH        |                      |
    | (mug box     |                      | 10.75"
    |  sits here)  |                      |
    | 4.75" x 3.75"|                      |
    |              |                      |
    +--------------+                      |
    |              |                      |
    |              |                      |
    |              |                      |
    |              |                      |
    |              |                      |
    |              |                      |
    +-------------+-----------------------+
         BOTTOM EDGE
```

The top edge has the hanging hole (retail display convention). The bottom edge is where the evidence tag attaches. Inside the briefcase, cards lie flat with the front (blister) face up.

---

## 3. Zone Definitions

The card is divided into **three zones**, not two. These zones define the structural framework for content placement across all 7 cards. Each zone has a distinct purpose.

### Zone Map

```
         TOP EDGE (has hanging hole)
    +-------------------------------------+
    |              13.25"                 |
    |                                     |
    | NOTCH        |                      |
    | (mug box     |  ZONE C             |
    |  sits here)  |  8.50" x 3.75"      | 10.75"
    | 4.75" x 3.75"|  ~31.875 sq in      |
    |              |                      |
    +--------------+                      |
    |              |                      |
    |  ZONE A      |  ZONE B             |
    |  4.75" x 7.0"|  8.50" x 7.00"      |
    |  ~33.25 sq in|  ~59.5 sq in        |
    |              |                      |
    |  "The Handle"|  "The Product Zone"  |
    |              |                      |
    +-------------+-----------------------+
         BOTTOM EDGE
```

### Zone A -- "The Handle" (4.75" x 7.00" = 33.25 sq in)

**Location:** Left column, directly below the mug box notch.

**Purpose:** Give the L-shape a deliberate identity. The notch exists because the mug box sits in the upper-left corner of the briefcase -- without a design concept for the resulting left column, the L-shape looks like a structural accident. Zone A turns that structural necessity into a feature.

**The concept: "BONUS" — absurd physical actions with the card strip.**

When all 7 blister cards are stacked flat inside the briefcase, Zone A is the part of the card that extends to the left of the mug box. It is the natural grip point for pulling a card out of the stack. Each card presents Zone A as a different absurd tool or weapon — with a physical die-cut handle and deadpan instructional diagrams showing how to use the packaging itself.

**Triple value:**
1. **Structural** — clears the mug box so cards lie flat around it
2. **Hanging** — the die-cut slot replaces the top-edge hanging hole, serving as the retail display hang point (peg hooks fit through narrow slots)
3. **Comedic** — each card has a different absurd "bonus" use with instructional diagrams and deadpan copy. The slot reads as a handle in the diagrams even though it's decorative. The joke works whether or not the handle is functional.

**The comedy mechanic:** The format stays completely straight — instructional diagrams, safety-manual-style language, performance ratings — while the content is physically absurd. These are presented as legitimate bonus use instructions for a piece of rigid cardboard.

### Zone A Physical Layout

Zone A is divided into two side-by-side columns:

```
Zone A (4.75" x 7.00")
+--+----+--+-----------+--+
|  |    |  |           |  |
|  |SLOT|  | ★ BONUS ★ |  |
|  |    |  |  SHIELD   |  |
|  |0.5"|  |           |  |
|  |wide|  | [step 1]  |  |
|  |    |  |  ───────  |  |
|  |    |  | [step 2]  |  |
|  |    |  |  ───────  |  |
|  |    |  | [step 3]  |  |
|  |    |  |           |  |
+--+----+--+-----------+--+
.25 .50 .25    ~3.5"  .125

Total: 0.25 + 0.50 + 0.25 + 3.50 + 0.125 ≈ 4.625"
(remaining ~0.125" absorbed by tolerances)

★ = colorful/eye-catching header
Steps = diagrams with minimal labels (2-4 words each)
Divider lines between each step
Figures grip from LEFT SIDE (handle edge)
```

**Width budget breakdown:**

| Element | Width | Purpose |
|---------|-------|---------|
| Left margin | ~0.25" | Card edge to slot — structural minimum to prevent tearing |
| Handle slot | ~0.50" | Die-cut opening — decorative/symbolic handle |
| Inner margin | ~0.25" | Slot to printable area — structural cardboard between hole and content |
| Printable content | ~3.50" | BONUS header, use name, diagrams, labels |
| Right margin | ~0.125" | Content to Zone B boundary — bleed/safe area |
| **Total** | **~4.625"** | Fits within 4.75" Zone A width |

**Left column — Die-cut handle slot (~0.50" wide, centered ~0.50" from left edge):**
- A narrow vertical rounded rectangle cutout punched through the cardboard
- Positioned ~0.25" from the left card edge (minimum structural margin to prevent tearing at the die-cut)
- Sized as a decorative/symbolic handle — does NOT need to be functionally grippable
- The slot reads as a handle in the diagrams. The joke works whether or not someone can physically fit fingers through it.
- This is a physical hole in the card — not printed, not perforated, actually punched out
- Can serve as a retail display hang point (peg hooks fit through narrow slots)
- The same handle slot shape appears on all 7 cards (part of the shared die)
- **Design priority:** Keep the slot small to maximize printable content area. The BONUS concept is a side joke — it should not compete with Zone B (the product zone) for attention.

**Right column — Printed content area (~3.50" wide):**
Content stacked top to bottom:
1. **"BONUS"** — bold, colorful, eye-catching header. Should POP against the rest of the card. Think bright color block background (yellow, orange, or red starburst/banner) with large bold stencil or block lettering. This is the most visually energetic element on the strip — it should immediately read as "free extra value" the way a cereal box advertises a prize inside. Universal across all 7 cards.
2. **Use name** — e.g., "SHIELD" or "FLYSWATTER" in clean, institutional block text below the header. Unique per card.
3. **Multi-step instructional diagram sequence** — 3 simple stick-figure illustrations arranged vertically, each showing a step of the absurd use. Style references: IKEA assembly instructions, airline safety cards, OSHA safety posters. Clean black-and-white line art. Each step has a very short label (2-4 words max, e.g., "GRIP" / "DEFLECT" / "SURVIVE"). **The diagrams do the heavy lifting — minimal copy.** Figures must grip the card from the LEFT SIDE where the handle slot is, not from the center. **Thin horizontal divider lines between each step** to create clear visual separation.
4. ~~Absurd safety note / fine print~~ — **DROPPED** (July 6, 2026). Not enough room. The BONUS header, use name, and three diagrams fill the available space.

### Die-Cut Handle Spec Change

**IMPORTANT:** This changes the card die-cut from the original packaging spec (v11). The updated die includes:
- L-shape with rounded corners (unchanged)
- Handle slot in Zone A (~0.5-0.75" wide, NEW — decorative/symbolic handle, also serves as retail hang point)
- Top-edge hanging hole is ELIMINATED

The handle slot is intentionally small. It is a design element that supports the BONUS comedy concept, not a functional extraction grip. The evidence tag at the bottom edge remains the primary physical extraction mechanism for pulling cards from the briefcase stack.

This die change needs to be communicated to the manufacturer and reflected in updated dieline files.

**Per-card alternate uses (working lineup — July 3, 2026):**

| # | Item | Alternate Use | Concept |
|---|------|---------------|---------|
| 1 | Cubicle Shank | **Shield** | Defensive configuration. Hold vertically. Absorbs passive-aggressive comments. |
| 2 | Lifer Ink | **Sword** | Offensive configuration. Grip at base. Swing with conviction. |
| 3 | Turf Tags | **Boomerang** | Territorial retrieval system. Throw at 45°. If it returns, the territory is yours. |
| 4 | Cell Talk | **Shark Fin** | Predatory display configuration. Hold vertically behind head. Circle target's desk. Display aggressive tendencies. |
| 5 | Rap Sheets | **Flyswatter** | Pest management device. For coworkers who hover. One firm swing. |
| 6 | Sweet Nothings | **Privacy Screen** | Personal boundary enforcement. Insert between you and the problem. Maintain indefinitely. |
| 7 | Contraband | **Shovel** | Evidence disposal tool. Dig at a 30° angle. The less you know, the better. |

**Escalation pattern across the stack:** Defend (shield) → Attack (sword) → Ranged attack (boomerang) → Predatory display (shark fin) → Pest control (flyswatter) → Boundary enforcement (privacy screen) → Bury the evidence (shovel). The progression moves from defensive to offensive to "get rid of the problem entirely."

**System-level rules for Zone A:**
- The format is **universal** across all 7 cards — same visual style, same instructional diagram approach, same deadpan institutional tone
- The specific alternate use is **unique per card** — each card has a different absurd use, giving the recipient a reason to check every card's handle strip
- Front of Zone A: The alternate use diagram and instructions
- Back of Zone A: TBD — could be additional uses, safety warnings, performance ratings, or continuation of the per-card concept
- The visual format should reference instructional diagrams (IKEA assembly, airline safety cards, OSHA posters) — simple stick figures or simplified people demonstrating the use

**Copy and visual design status:** Concept direction is locked. Specific copy, illustrations, and layout for each of the 7 alternate uses need development. The per-card copy lines in the table above are starting points, not final locked copy.

**Open questions for Zone A:**
- What goes on the back of Zone A? Same alternate use (back view / additional steps), or a different comedy element?
- Does the handle interact with the evidence tag (which also serves as an extraction grip from the bottom edge)?

**Resolved Zone A questions (July 6, 2026):**
- ~~Universal header?~~ YES — "BONUS" is the universal header across all 7 cards. Bold, colorful, eye-catching. Specific use name appears below it.
- ~~How detailed are diagrams?~~ 3-step sequence, stick-figure line art, IKEA/airline safety style. Minimal labels (2-4 words each). Diagrams do the heavy lifting, not copy.
- ~~Fine print / disclaimer?~~ DROPPED — not enough room. The BONUS header, use name, and three diagrams fill the available space.

### Zone B -- "The Product Zone" (8.50" x 7.00" = 59.5 sq in)

**Location:** Large portrait-oriented rectangle, right side of lower card.

**Purpose:** This is where the product lives. The blister is glued to the front of this zone. This is the primary retail display area -- the zone that must look like a real product.

**Front (display face):**
- The clear plastic blister is glued here
- The product is visible through the blister
- Available print area around the blister varies per item (see Per-Item Notes)
- Product name, tagline, key branding, and primary comedy copy live here
- This is where the "2-3 second hook" lives -- the moment someone picks up the card and decides whether to keep reading

**Back (comedy surface):**
- Full 59.5 sq in of unobstructed print area
- Dense comedy content unique to each item
- This is the deepest comedy surface per card -- where the longest reads, comparison charts, feature lists, and review parodies live
- The back of Zone B is contiguous with the back of Zone C (they share the same 8.50" width), allowing content to flow across both zones on the back face

**System-level rules for Zone B:**
- Each item has a different blister footprint -- the designer must work around the specific blister shape
- The front layout is NOT templated across items (per-item identity over rigid template)
- Cohesion comes from shared type system, shared element types, and shared voice -- not from forcing identical grid positions
- Every card's Zone B front must support the Layer 1 hook (2-3 seconds to establish "this looks like a real product")

### Zone C -- "The Upper Extension" (8.50" x 3.75" = 31.875 sq in)

**Location:** To the right of the mug box notch, above Zone B.

**Purpose:** Additional product branding, division identity, or featured comedy elements that would crowd Zone B if placed there. Zone C extends the card's usable area above the product zone.

**Front:**
- Upper branding: brand mark (ELEVATE CO.), division name, division tagline
- Elements that need visual prominence but would compete with the blister and product name in Zone B
- This zone connects visually to Zone B below it -- they share the same 8.50" width and the boundary between them should feel continuous, not divided

**Back:**
- Continuation of back comedy content -- Zone C back is contiguous with Zone B back
- On the back face, Zones B and C together form one large rectangle (8.50" x 10.75" = 91.375 sq in) of unobstructed print area
- Content can flow across the B/C boundary on the back without interruption

**System-level rules for Zone C:**
- The ELEVATE CO. brand mark should appear in a consistent position across all 7 cards (suggest top of Zone C, near the hanging hole)
- Division name and tagline are strong candidates for Zone C front placement
- This zone is narrower (3.75" tall) than Zone B (7.00" tall) -- content must be proportioned accordingly

---

## 4. Design Principles

These principles are inherited from `DESIGN-BRIEF-MASTER.md` and applied specifically to the blister card system.

### Principle 1: The Packaging Is the Straight Man

Design every card as if this were a legitimate retail blister pack. Study how actual products in each item's category are packaged -- tactical pens, temporary tattoos, vinyl stickers, card decks. Follow those conventions faithfully. The comedy comes exclusively from the copy content. The visual design never winks.

**What this means for blister cards:**
- Clean, professional typography -- no wacky fonts, no cartoon illustrations
- Authentic-feeling product photography and institutional icons
- Real retail packaging details: barcodes, regulatory marks, weight/count info, lot numbers
- Color and layout choices that signal "real product" before anything else

### Principle 2: Layer Cake Comedy Structure

Every card must support four layers of comedy discovery.

| Layer | Time | What Lands | Design Job |
|-------|------|-----------|------------|
| **Layer 1 -- First Glance** | 2-3 sec | Item name, product visible through blister, division identity | Establish authenticity and premium feel. The card looks like a real product. |
| **Layer 2 -- Casual Read** | 10-20 sec | Tagline, primary description, key features | Make these elements easy to find. Clear hierarchy pulls the eye from Layer 1 to Layer 2. |
| **Layer 3 -- Close Read** | 30-60 sec | Body copy, feature lists, comparison tables, secondary text | Dense but readable. Reward the reader who commits to reading everything. |
| **Layer 4 -- Deep Dive** | Extended | Fine print, disclaimers, under-blister copy, hidden elements, evidence tag | Present as real fine print / regulatory text. Let the reader discover it. |

**The front face serves Layers 1-2 primarily.** The back face is where Layers 3-4 live in force. Some Layer 2 content appears on the front around the blister, and some Layer 4 content hides on the front (under the blister, in fine print along edges).

### Principle 3: Each Card Works Standalone

When removed from the briefcase, every card must function as a complete, self-contained product. No card should require knowledge of the kit, the briefcase, or other items to be funny. A coworker who finds a single blister pack on someone's desk should get the joke.

### Principle 4: Per-Item Identity Over Rigid Template

Each item gets its own layout that serves its content. The cohesion across 7 cards comes from:
- **Shared type system** -- same 2-3 fonts on every card
- **Shared color family relationship** -- each item has its own palette, but all palettes feel like siblings
- **Shared voice** -- Brad Sterling is the sole voice on every surface
- **Shared recurring elements** -- brand mark, division name, institutional details, evidence tag
- **Shared zone structure** -- Zone A is universal; Zones B and C follow the same structural framework

What is NOT shared: grid positions, layout proportions within zones, color choices, blister footprint, or content density. A card deck blister pack will look different from a pen blister pack. That is intentional.

### Principle 5: Copy Readability Above All

The copy is the product's primary comedy delivery mechanism. Every design decision must serve readability.

- Body copy minimum 9pt at print size
- Fine print minimum 7pt (intentional "fine print" comedy only)
- Headlines must have strong scale contrast with body text (not 18pt vs. 16pt -- more like 24pt vs. 10pt)
- Left-aligned body copy (do not center paragraphs)
- Generous line spacing (1.4-1.5x) for body text
- No design elements that compete with or obscure the copy
- The design must make copy easy to find, easy to read, and paced correctly

---

## 5. Element Hierarchy

### Required Elements -- Front (every card)

These elements must appear on the front of every blister card. Suggested zone placement is noted, but the designer has flexibility on exact positioning within the zone framework.

| Element | Description | Suggested Zone | Notes |
|---------|-------------|---------------|-------|
| **ELEVATE CO. brand mark** | Consistent logo/logotype | Zone C (top, near hang hole) | Same position across all 7 cards |
| **Division name** | Fictional corporate division (e.g., "O3 -- Office Offense Outfitters") | Zone C | Each item has a unique division |
| **Division tagline** | Slogan for the division (e.g., "Arming the 9-to-5 since the 5-to-9.") | Zone C | Subordinate to division name |
| **Product name (prison term)** | Hero display name (e.g., "CUBICLE SHANK") | Zone B | Largest text on the card. See Naming System (Section 10). |
| **Brad's corporate rebrand** | Institutional subtitle (e.g., "Executive Tactical Stylus") | Zone B | Smaller than prison term. See Naming System (Section 10). |
| **Item visible through blister** | The actual product seen through clear PETG | Zone B | Blister shape varies per item |
| **Primary tagline or subtitle** | The strongest hook line | Zone B | Must be scannable in 2-3 seconds |
| **Evidence tag attachment point** | Visible ribbon emerging from bottom center | Bottom edge | Functional and visual element |

### Required Elements -- Back (every card)

| Element | Description | Notes |
|---------|-------------|-------|
| **Product name** | Repeated for identification | Recipient flips the card -- they need to know which item they are reading about |
| **Dense comedy content** | Unique to each item -- feature lists, comparison tables, review parodies, Brad quotes, warnings, disclaimers | This is the deepest comedy surface. Reward close reading. |
| **Institutional details** | Barcode, lot number, regulatory marks | Authenticity markers. Should look real. |
| **Fine print comedy block** | Disclaimers, legal parody, hidden jokes | Layer 4 content. Present as real fine print. |
| **Evidence tag ribbon attachment** | Physical ribbon glued to card back, bottom center | ~0.5" from bottom edge |

### Recommended Elements (most cards should have, not mandatory on every card)

| Element | Target Density | Notes |
|---------|---------------|-------|
| **Brad quote** (Mode 2 -- personal brand) | Present on most cards, not necessarily all | Maintains Brad's delusional personal brand presence across the system |
| **Gary QC stamp** | 2-3 across all 7 cards total | "INSPECTED BY: GARY" or "QC APPROVED - G." -- do not put on every card |
| **Customer review / testimonial parody** | Most cards | Styled as authentic product reviews with star ratings |
| **Comparison chart or feature table** | Where content supports it | Cubicle Shank has one (4-column, 7-row). Not every item needs one. |
| **Age/audience line** | Most cards | "AGES 16+" or equivalent -- comedy opportunity |
| **Warnings/caution block** | Most cards | Institutional warning format with escalating absurdity |
| **Quantity/contents line** | Every card | "Qty: 1 pen" or "Contains: 6 designs" -- real packaging convention |

### Elements That Should NOT Be on Every Card

Over-distributing recurring elements kills their impact. These should be deliberately placed:

| Element | Rule |
|---------|------|
| **Kevin references** | 4-6 across the full kit (all surfaces, not just blister cards). Do not mention Kevin on every card. |
| **Gary QC marks** | 2-3 across all 7 cards. Gary is a visual element (stamps, badges), not a copy character. |
| **Diane (HR) references** | 1-2 across the full kit. Implied through policy language, never named. |
| **Carl references** | 1-2 across the full kit. Currently on Cubicle Shank (Good Shanking Seal). |
| **Doug references** | 1-2 across the full kit. Footnotes and fine print only. |
| **Edith references** | 1-2 across the full kit. Currently on Cubicle Shank (Assisted Shiving block). |

---

## 6. Eye-Path and Reading Order

### Why This Section Exists

The design team has requested explicit guidance on viewing surface priority and reading order. The front of a blister card has limited real estate around the blister, and the eye needs to be guided efficiently. The back has abundant space but dense content -- without a reading order, the eye wanders.

### Primary Viewing Surface

For blister cards, the **front is always the primary viewing surface**. The recipient sees the product through the blister first. This is the hook.

The **back is where the deepest comedy lives**. The front must hook. The back must reward.

The evidence tag is a tertiary discovery -- the recipient notices it, pulls it, reads it. Layer 4 territory.

### Reading Order Requirements

**Every item's surface map must specify a "Reading Order" for each surface.** This is a numbered sequence indicating what the eye should hit first, second, third, and so on.

The Cubicle Shank surface map establishes the model format. Example reading order for the front face:

> Brand (ELEVATE CO.) -> Division (O3) -> Product Name (CUBICLE SHANK) -> Subtitle -> Tagline -> Quantity -> Seal -> Fine Print

This does not mean the elements are laid out in a linear vertical stack. It means the typographic hierarchy -- scale, weight, color, position -- guides the eye through these elements in approximately this order.

**Front face reading order (general framework):**

1. **Product name** (prison term) -- largest text, dominant visual element
2. **Item visible through blister** -- the physical product draws the eye
3. **Primary tagline or subtitle** -- the hook line, the thing worth reading aloud
4. **Division name** -- establishes institutional context
5. **Brand mark** (ELEVATE CO.) -- confirms the universe
6. **Supporting elements** -- quantity, seal, secondary copy
7. **Fine print** -- Layer 4 discovery for close readers

The product name and the item in the blister compete for first-look attention. This is acceptable -- they reinforce each other. "CUBICLE SHANK" next to a visible tactical pen is a one-two punch.

**Back face reading order (general framework):**

1. **Section header or chart title** -- the eye needs an entry point on a dense surface
2. **Primary content block** -- the main comedy feature (chart, feature list, review section)
3. **Secondary content** -- supporting comedy blocks, Brad quotes, warnings
4. **Institutional details** -- barcode, lot number, regulatory marks
5. **Fine print** -- deepest Layer 4 content

### The "Read Aloud" Moment

Each card should identify which single line is the strongest candidate for being read aloud to a group. This is the line the recipient will say to the room during an unboxing.

**Rules for the "read aloud" line:**
- It must be scannable at arm's length (not buried in fine print)
- It must land without context (the listener does not need to have read anything else on the card)
- It should be visually prominent -- larger type, strategic position, or visual isolation that draws the eye
- The surface map for each item should flag this line explicitly

**Examples from existing cards:**
- Cubicle Shank: "The pen that ends sentences. May also extend yours." or "Writes in black. Moonlights in red."
- Lifer Ink: "Goes on like confidence. Comes off like evidence."

---

## 7. Typography and Color

### Typography System (Inherited from Master Brief)

The blister card system uses the same 2-3 fonts as the rest of the kit. Font selection is the designer's responsibility, subject to product owner approval during Step 1 of the execution plan.

**Font roles:**

| Role | Purpose | Direction |
|------|---------|-----------|
| **Primary heading** | Item names, division names, key headlines | Institutional authority. Clean geometric sans-serif or condensed grotesque. Feels like government forms or corporate signage. |
| **Body copy** | All body text, descriptions, comedy copy | Highly legible workhorse. Invisible as a typeface. Excellent at 9pt. |
| **Accent (optional)** | Fine print, regulatory text, barcode labels, institutional marks | Monospaced or condensed. Technical/institutional feel. |

**Typographic rules for blister cards:**
- The same fonts appear on every card. What changes per item is color palette, proportions, and imagery.
- Body copy: minimum 9pt, left-aligned, 1.4-1.5x line spacing
- Fine print: minimum 7pt (for intentional comedy fine print only)
- Headlines: strong scale contrast with body text
- Product name (prison term) should be readable from several feet away -- it is the dominant text element

### Color System

**Kit-level principle:** Each item has its own color palette that feels like one family when all 7 cards are seen together.

**Established palettes (locked or near-locked):**

| Item | Palette Direction | Status |
|------|------------------|--------|
| Cubicle Shank | Matte black ground, white primary type, red accents | Locked |
| Lifer Ink | Dark/black background, red accents, white condensed type | Locked (same family as Cubicle Shank) |
| Cell Talk | Calming/zen -- greens, earth tones | Direction set, not locked |
| Rap Sheets | Institutional/bureaucratic | Direction set, not locked |
| Sweet Nothings | Romantic -- pinks, reds, whites | Direction set, not locked |
| Turf Tags | TBD | Open |
| Contraband | TBD | Open |

**System-level color rules:**
- No two cards should be visually indistinguishable when sitting side by side in the briefcase
- Cubicle Shank and Lifer Ink both use dark/black + white + red -- they need enough differentiation within that shared family to read as distinct items (this is a known open issue)
- The color palette should reinforce the item's category feel (tactical for the pen, romantic for the valentines, institutional for the complaints) while staying within the premium/institutional range
- No bright/loud color schemes that signal "novelty gift"
- No neon, no cartoon-bright primaries, no novelty-store energy

---

## 8. Evidence Tag Integration

### What the Evidence Tag Is

Every blister card has a manila evidence tag attached to its back, hanging from the bottom center edge. The tag serves dual purpose: extraction handle (pull a card from the briefcase stack) and comedy surface.

### Evidence Tag Specifications

| Attribute | Spec |
|-----------|------|
| **Tag size** | ~2.0" x 1.25" |
| **Material** | Heavy card stock (14-16pt), manila/cream colored |
| **Ribbon** | ~0.5" wide natural tan cotton twill, ~2.5" total length |
| **Ribbon attachment** | 1.0" adhered to card back + 1.5" free (tag hangs from the free end) |
| **Attachment point** | Glued to back of card, centered on bottom edge, ~0.5" from bottom |
| **Tag front** | Red "EVIDENCE" header, printed fields: Case No., Item name, Date Seized, Logged By |
| **Tag back** | Item-specific comedy copy (unique per card) |

### Design Integration Rules

- The ribbon attachment point is a physical element on the card back -- the design must account for it (a 0.5" wide ribbon glued to the card surface, centered at the bottom edge)
- The ribbon should not cover critical copy on the card back -- keep the attachment area clear of text, or design around it
- On the card front, the ribbon emerges from below the blister card -- it is visible when the card is displayed on a retail peg or held in hand
- The evidence tag hanging from the bottom adds to the authentic "seized property" aesthetic
- All 7 tags have unique copy -- the Case No., Item name, and comedy on the back are specific to each item

### Relationship to Zone A (The Handle)

The evidence tag is the primary physical extraction mechanism — grab the tag, pull the card up from the stack. The Zone A handle slot is decorative/symbolic, not a functional grip. The slot serves the comedy concept (the diagrams show someone gripping it) and doubles as a retail hang point, but the evidence tag is how cards actually get pulled from the briefcase.

---

## 9. Notch Edge Treatment

### The Problem

The L-shaped die-cut creates two exposed edges where the notch meets the rest of the card: a horizontal edge (4.75" wide, running along the bottom of the notch) and a vertical edge (3.75" tall, running along the right side of the notch). These edges are visible when the card is displayed or held, and if left untreated they make the L-shape look like a production compromise rather than a design choice.

### Current Status: Deferred

The notch edge treatment is **deferred until the mug box design is finalized**. The mug box sits in the notch space inside the briefcase, and its visible face will be adjacent to the notch edges. The two surfaces need to interact visually -- they should be designed together.

### Options Under Consideration

| Option | Description | Tone |
|--------|-------------|------|
| **Prison cell bars** | Vertical bar pattern along the notch edges | Institutional, reinforces the world |
| **Evidence tape / crime scene tape** | Repeating "EVIDENCE" or "DO NOT CROSS" pattern | Forensic, high-energy |
| **Ruler/measurement lines** | Measurement hash marks continuing from the mug box surface | Technical, subtle |
| **Combination** | Elements from multiple options | Depends on execution |

### Design Constraints

- The treatment must work across all 7 cards (universal, not per-item)
- It must look intentional -- the goal is to make the notch feel designed, not explained
- It should not compete with Zone A or Zone C content for attention
- It must work visually whether or not the mug box is sitting next to the card (the card must look complete on its own)

---

## 10. Naming System

### Status: LOCKED (July 3, 2026)

The kit-wide naming hierarchy has been decided by the product owner.

### The Two Names

Every item has two names:

| Name Type | Example (Pen) | Example (Tattoos) | Character |
|-----------|--------------|-------------------|-----------|
| **Prison term** | Cubicle Shank | Lifer Ink | The funny name. The one people say out loud. |
| **Brad's corporate rebrand** | Executive Tactical Stylus | Motivational Body Art Collection | The institutional veneer. Brad's aspirational product name. |

### Decision (Locked)

- **Prison term = hero display name.** Largest text on the card. The dominant visual element. What people read and say. This is the product name.
- **Brad's corporate rebrand = institutional subtitle.** Smaller, positioned above or below the prison term. Sets the corporate veneer that makes the prison term funnier by contrast.

The juxtaposition between the two names IS a comedy device. "CUBICLE SHANK" reads as absurd. "Executive Tactical Stylus" reads as pretentious. Together, they create a gap that the reader finds funny without either name needing to be a punchline.

### Hierarchy (Locked)

The visual pecking order on the card front, from most to least dominant:

1. **Prison term** (e.g., "CUBICLE SHANK") — hero treatment, largest text, readable from several feet away
2. **Brad's corporate rebrand** (e.g., "Executive Tactical Stylus") — institutional subtitle, smaller, directly above or below the prison term
3. **Division name** (e.g., "O3 — Office Offense Outfitters") — department header, subordinate to both product names

This hierarchy is identical across all 7 cards. The specific fonts, sizes, and exact positioning are the designer's decision within this pecking order.

---

## 11. Per-Item Notes

Each of the 7 items has unique characteristics that affect its blister card design. This section captures the key differences the designer must account for.

### Item 1: Cubicle Shank (Tactical Pen)

| Attribute | Detail |
|-----------|--------|
| **Division** | O3 -- Office Offense Outfitters |
| **Brad's rebrand** | Executive Tactical Stylus |
| **Blister footprint** | Narrow, elongated (~5.5" x 0.6" pen shape, 0.65" deep) |
| **Available print around blister** | Generous -- narrow blister leaves substantial card area exposed |
| **Content type** | Tactical hardware. Comparison chart on back (4-column, 7-row). Dense comedy. |
| **Palette** | Matte black, white, red (locked) |
| **Surface map status** | Complete (`cubicle-shank-surface-map.md`) |
| **Brief status** | Complete but needs update for blister format (`cubicle-shank-box.md`) |
| **Key design note** | The narrow pen blister leaves the most available front real estate of any item. The card front can support more copy elements than cards with larger blisters. |

### Item 2: Lifer Ink (Temporary Tattoos)

| Attribute | Detail |
|-----------|--------|
| **Division** | Bureau of Permanent Records |
| **Brad's rebrand** | Motivational Body Art Collection |
| **Blister footprint** | Wide, flat (~5" x 3.5" area holding 6 tattoo sheets + achievement card, shallow depth) |
| **Available print around blister** | Moderate -- wide blister covers a substantial portion of Zone B front |
| **Content type** | Tattoo parlor aesthetic with corporate award framing. Distinguished Honorees on back. |
| **Palette** | Dark/black, red, white (locked -- same family as Cubicle Shank) |
| **Surface map status** | Complete (`lifer-ink-surface-map.md`) |
| **Brief status** | Complete (`lifer-ink-box.md`) |
| **Key design note** | Must differentiate visually from Cubicle Shank despite sharing the dark/red/white palette. The back face "Distinguished Honorees" concept requires corporate headshot photography execution (highest-risk production element). |

### Item 3: Turf Tags (Vinyl Stickers)

| Attribute | Detail |
|-----------|--------|
| **Division** | Bureau of Territorial Affairs |
| **Brad's rebrand** | Property Assertion Labels |
| **Blister footprint** | Wide, flat (sticker sheet -- similar footprint to Lifer Ink) |
| **Available print around blister** | Moderate |
| **Content type** | Territorial/property marking. Sticker sheet visible through blister. |
| **Palette** | TBD -- must differentiate from Lifer Ink (both share the wide back recess in the briefcase) |
| **Surface map status** | Not yet created |
| **Brief status** | Working draft (`turf-tags-box.md`) |
| **Key design note** | Sits next to Lifer Ink in the briefcase. Both are flat-format items with similar blister footprints. Visual differentiation is critical -- they should feel related (same brand family) but immediately distinct. |

### Item 4: Cell Talk (Affirmation Cards)

| Attribute | Detail |
|-----------|--------|
| **Division** | Center for Normative Optimization |
| **Brad's rebrand** | Daily Affirmation Deck |
| **Blister footprint** | Compact, box-shaped (~3.7" x 2.7" x 0.7" card deck box inside the blister) |
| **Available print around blister** | Generous -- compact box blister leaves substantial card area exposed |
| **Content type** | Zen/calming. The card deck box is a separate design surface (6 sides) visible through the blister. |
| **Palette** | Calming/zen -- greens, earth tones (direction set, not locked) |
| **Surface map status** | Not yet created |
| **Brief status** | Working draft (`cell-talk-box.md`) |
| **Key design note** | This item has the most total design surfaces: blister card (front + back) PLUS card deck box (6 sides) visible through the blister. The deck box design must be legible through clear PETG plastic. The card deck box sits inside the blister, so its front face is what the recipient sees first -- it needs to work through the plastic. |

### Item 5: Rap Sheets (Complaint Cards)

| Attribute | Detail |
|-----------|--------|
| **Division** | Interpersonal Accountability Division |
| **Brad's rebrand** | Interpersonal Feedback Delivery System |
| **Blister footprint** | Compact, box-shaped (same card deck box dimensions as Cell Talk) |
| **Available print around blister** | Generous |
| **Content type** | Formal/institutional. Complaint filing, bureaucratic process. |
| **Palette** | Institutional/bureaucratic (direction set, not locked) |
| **Surface map status** | Not yet created |
| **Brief status** | Working draft (`rap-sheets-box.md`) |
| **Key design note** | Same blister footprint as Cell Talk and Sweet Nothings (all three are card deck boxes). The three card deck items should be immediately distinguishable by palette and tone despite sharing the same blister shape. |

### Item 6: Sweet Nothings (Passive-Aggressive Valentines)

| Attribute | Detail |
|-----------|--------|
| **Division** | Ambient Relations Bureau |
| **Brad's rebrand** | Ambient Communication Cards |
| **Blister footprint** | Compact, box-shaped (same card deck box dimensions as Cell Talk and Rap Sheets) |
| **Available print around blister** | Generous |
| **Content type** | Romantic/valentine. Passive-aggressive undertone. |
| **Palette** | Romantic -- pinks, reds, whites (direction set, not locked) |
| **Surface map status** | Not yet created |
| **Brief status** | Working draft (`sweet-nothings-box.md`) |
| **Key design note** | The romantic palette is the most visually distinct of the 7 items -- pinks and reds on what is otherwise a dark/institutional product line. This contrast is intentional. Brad genuinely thinks workplace valentines are a professional communication tool. The gap between the romantic visual and the institutional framing IS the joke. |

### Item 7: Contraband (Empty Gag Pack)

| Attribute | Detail |
|-----------|--------|
| **Division** | TBD |
| **Brad's rebrand** | TBD |
| **Blister footprint** | Stapler-shaped empty cavity (nothing inside) |
| **Available print around blister** | Generous -- the empty cavity is the product |
| **Content type** | The empty stapler-shaped blister IS the joke. The card front must work when there is nothing real to see through the plastic. |
| **Palette** | TBD |
| **Surface map status** | Not yet created |
| **Brief status** | Not yet created |
| **Key design note** | This is the most conceptually challenging card. Every other card has a visible product through the blister. This one has an empty cavity shaped like a stapler. The comedy comes from the copy treating the empty space as if something was supposed to be there -- confiscated, missing, or never existed. The card must commit to the bit completely. The blister shows nothing; the copy explains everything. This item needs its own dedicated concept session. |

---

## 12. Open Questions and Dependencies

### Blocking Dependencies (must be resolved before production design)

| # | Question | Affects | Resolution Path | Status |
|---|----------|---------|----------------|--------|
| 1 | ~~**Naming system**~~ | All 7 cards | ~~Dedicated naming session~~ | **RESOLVED** (July 3, 2026) — Prison term = hero, Brad's rebrand = subtitle. See Section 10. |
| 2 | **Zone A handle concept** -- Per-card "alternate use" concept and lineup locked. Specific copy, illustrations, and layout still need development. | All 7 cards -- Zone A content | Copy development session per card | **CONCEPT LOCKED** (July 3, 2026) — See Section 3, Zone A. Lineup: Shield, Sword, Boomerang, Shark Fin, Flyswatter, Privacy Screen, Shovel. |
| 3 | **Contraband concept** -- How does the card front work with an empty blister? What's the division, rebrand, and copy direction? | 1 card (Contraband) | Dedicated concept session | **DEPRIORITIZED** — budget/space dependent. Not blocking system design for the other 6 cards. |

### Non-Blocking Dependencies (can proceed in parallel)

| # | Question | Affects | Resolution Path |
|---|----------|---------|----------------|
| 4 | **Notch edge treatment** -- Which visual treatment for the L-shaped notch edges? | All 7 cards (visual polish, not structural) | Deferred until mug box design is finalized |
| 5 | **Color differentiation: Cubicle Shank vs. Lifer Ink** -- Both use dark/black + white + red. How do they differentiate? | 2 cards | Address during visual direction phase |
| 6 | **Color differentiation: Turf Tags palette** -- Currently undefined. Sits next to Lifer Ink in briefcase. | 1-2 cards | Address during visual direction phase |
| 7 | **Three card deck items visual distinction** -- Cell Talk, Rap Sheets, and Sweet Nothings all have identical blister footprints. How do they read as distinct? | 3 cards | Palette and tone differentiation during visual direction |
| 8 | **Back face content flow across Zone B/C boundary** -- Do Zones B and C on the back have a visual divider, or does content flow freely? | All 7 cards (back face) | Designer proposes during layout |
| 9 | **Gary QC stamp placement** -- Which 2-3 of the 7 cards get a Gary stamp? | 2-3 cards | Coordinate with item-level copy sessions |
| 10 | **Lifer Ink back face photo execution** -- Can the "Distinguished Honorees" corporate headshots with tattoos be produced at quality? | 1 card | Explore AI-generated, illustrated, or stylized photography |

### Validated Assumptions

- All 7 blister cards use the same L-shaped die-cut (confirmed in packaging spec v11)
- Card dimensions: 13.25" x 10.75" with 4.75" x 3.75" notch (confirmed)
- 18pt paperboard, PETG blister (confirmed)
- Both sides of every card are full comedy surfaces (confirmed)
- Evidence tags on all 7 cards (confirmed)
- Items stack flat inside briefcase with no dividers (confirmed)
- Brad Sterling is the sole voice on every surface (confirmed)

---

## 13. Relationship to Other Documents

| Document | Path | Role | Relationship to This Brief |
|----------|------|------|---------------------------|
| **DESIGN-BRIEF-MASTER.md** | `product/vibe-design/DESIGN-BRIEF-MASTER.md` | Kit-level philosophy | This brief inherits from it. Master -> System -> Item. |
| **packaging-spec-v11.md** | `product/specs/packaging-spec-v11.md` | Physical structure and dimensions | This brief references it for dimensions. Spec owns structure; this brief owns design guidance. |
| **brand-context.md** | `product/vibe-design/brand-context.md` | World rules, character voice, vocabulary | This brief assumes the designer has read it. All blister card copy operates within these rules. |
| **RECOMMENDED-APPROACH.md** | `product/vibe-design/RECOMMENDED-APPROACH.md` | Execution plan | Describes the overall execution order. This brief complements it with system-level design rules. |
| **{item}-box.md** | `product/vibe-design/briefs/{item}-box.md` | Item-level brief | Item briefs follow the zone definitions and element hierarchy established here. |
| **{item}-surface-map.md** | `product/copy/box-copy/{item}-surface-map.md` | Item-level copy placement | Surface maps follow the reading order and zone framework from this brief. |
| **{item}-working-doc.md** | `product/copy/box-copy/{item}-working-doc.md` | Copy development history | Source of truth for locked copy per item. |
| **BOX-COPY-WORKFLOW.md** | `product/copy/box-copy/BOX-COPY-WORKFLOW.md` | File management | Defines how copy documents are organized. |
| **interior-layout-spec.md** | `product/interior-layout-spec.md` | How items fit in briefcase | Defines stacking order, which affects which card is seen first. |

---

## Changelog

| Date | Change |
|------|--------|
| July 3, 2026 | Initial brief created. Establishes three-zone system (A/B/C), element hierarchy, eye-path guidance, per-item notes for all 7 items, and documents all open dependencies. |
| July 3, 2026 | Naming system LOCKED: prison term = hero, Brad's rebrand = subtitle, division name = tertiary. Contraband deprioritized to budget-dependent. |
| July 3, 2026 | Zone A concept LOCKED: "Alternate Use" — per-card absurd physical actions with instructional diagrams. Lineup: Shield, Sword, Boomerang, Shark Fin, Flyswatter, Privacy Screen, Shovel. Copy is starting-point, not final. |
| July 6, 2026 | Zone A refinements from concept image review: (1) "BONUS" header updated to colorful/eye-catching (color block/starburst, not institutional). (2) Fine print/disclaimer DROPPED — not enough room. (3) Step labels reduced to 2-4 words max — diagrams do the heavy lifting. (4) Figures grip from LEFT SIDE (handle edge), not center. (5) Resolved three open Zone A questions. (6) Created two concept image prompts for design team (closeup + full card). |
| July 6, 2026 | Handle slot reduced to decorative size (~0.50" wide). No longer a functional grip — it's a symbolic/comedic element that also serves as a retail hang point. Divider lines added between steps. Evidence tag confirmed as primary physical extraction mechanism. "Quad value" reduced to "Triple value" (functional grip removed). BONUS concept intentionally subordinate to product zone — side joke, not main event. |
| July 6, 2026 | Corrected Zone A width budget to account for structural margins around the slot. Actual printable content area is ~3.50" (not ~4.0"). Breakdown: 0.25" left margin + 0.50" slot + 0.25" inner margin + 3.50" content + 0.125" right margin = ~4.625" within the 4.75" zone. |
