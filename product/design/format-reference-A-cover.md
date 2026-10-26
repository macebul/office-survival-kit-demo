# Format Reference A: Magazine Cover
## Page 1 | ELEVATE Magazine

**Version:** v1
**Last Updated:** May 25, 2026
**Status:** REFERENCE — Design specification for cover page format.
**Applies to:** Page 1 (cover)
**Companion docs:** `product/design/magazine-indesign-spec-v1.md` (InDesign system), `product/copy/magazine-structure-v1.md` (page structure), `product/design/MAGAZINE-RESEARCH-BRIEFING.md` (research), `product/copy/brad-sterling-profile.md` (character)

---

## 1. Overview

**Format A: Magazine Cover** governs page 1 of the ELEVATE magazine — the first thing the recipient sees when they pull this insert from the briefcase.

This is a single-page, full-bleed portrait cover featuring Brad Sterling's hero portrait with cover teasers stacked along the left edge and the ELEVATE masthead across the top. The cover has no running headers, no page numbers, and no column grid. It runs on the **E-Cover** master page.

### Real-World References

The layout follows the dominant newsstand convention used by **GQ**, **Esquire**, **People**, and **Wired**:

- **Masthead** locked at the very top edge, same location every issue, brand's signature typeface
- **Hero portrait** centered or center-right, head-and-shoulders framing, direct eye contact
- **Coverlines** stacked vertically along the left margin (the Z-pattern entry column)
- **Authenticity cues** (barcode, dateline, price) anchored to the bottom-right corner

The goal: the recipient's brain processes "this is a real magazine" before it processes "wait, what is this magazine ABOUT?" The cover sells the illusion. The coverlines sell the comedy.

---

## 2. Layout Architecture

### ASCII Wireframe

```
┌─────────────────────────────────────────────────┐
│ ░░░░░░░░░░░ FULL-BLEED COVER PHOTO ░░░░░░░░░░░ │  ← Brad's portrait extends
│ ░░░░░░░░░░░ (extends to trim + bleed) ░░░░░░░░ │    to all edges + 0.125" bleed
│                                                 │
│  ┌────────────────────────────────────────┐     │
│  │ E L E V A T E                         │     │  ← MASTHEAD ZONE
│  │ Issue No. 1 · $0.00 · Included...     │     │    Top 0.625" from trim
│  └────────────────────────────────────────┘     │
│                                                 │
│                                                 │
│  ┌──────────────┐                               │
│  │              │         ░░░░░░░░░░░░░░░░      │
│  │  DOMINANT    │         ░░  BRAD'S     ░      │
│  │  COVERLINE   │         ░░  FACE       ░      │  ← PORTRAIT ZONE
│  │  (primary)   │         ░░  (center-   ░      │    Brad dominates center
│  │              │         ░░   right)    ░      │    to right of frame
│  ├──────────────┤         ░░             ░      │
│  │ secondary    │         ░░  Direct eye ░      │
│  │ teaser       │         ░░  contact    ░      │
│  ├──────────────┤         ░░             ░      │
│  │ secondary    │         ░░░░░░░░░░░░░░░░      │
│  │ teaser       │                               │
│  ├──────────────┤                               │  ← COVERLINE ZONE
│  │ secondary    │                               │    Left column, 0.625"
│  │ teaser       │                               │    from left trim edge
│  ├──────────────┤                               │
│  │ page ref     │                               │
│  └──────────────┘                               │
│                                                 │
│                          ┌────────────────────┐ │
│                          │ ▐▐▐▐▐▐▐▐▐▐ UPC    │ │  ← AUTHENTICITY ZONE
│                          │ $0.00 | Issue No.1 │ │    Bottom-right corner
│                          └────────────────────┘ │
│                                                 │
└─────────────────────────────────────────────────┘

BREATHING ROOM TARGET: 30-60% of canvas devoid of text/graphics.
The right half of the cover is mostly Brad's portrait with no text overlay.
```

### Zone Map

| Zone | Position | Purpose |
|------|----------|---------|
| **Masthead** | Top edge, 0.625" down from trim, spanning full width minus margins | Brand identification — ELEVATE logo + subtitle |
| **Portrait** | Full bleed, Brad's face center-right, head at upper third | Hero image — the comedy anchor played straight |
| **Coverline stack** | Left margin column, starting below masthead, extending to ~1" above bottom margin | Article teasers — 1 dominant + 3 secondary + page references |
| **Authenticity cues** | Bottom-right corner, above bottom bleed | Barcode, dateline, price — makes the brain believe |
| **Breathing room** | Right half of cover, areas around Brad's portrait | Negative space — lets the image work |

---

## 3. Element-by-Element Specifications

### 3.1 Masthead — "ELEVATE"

| Property | Value |
|----------|-------|
| **Paragraph style** | `Cover-Masthead` |
| **Font** | Barlow Condensed Black |
| **Size / leading** | 72 / 64pt |
| **Tracking** | 80 |
| **Case** | ALL CAPS |
| **Color** | Pure White |
| **Alignment** | Left |
| **Position** | Top of safe area — 0.625" from top trim, 0.625" from left trim |
| **Width** | Spans approximately 4-5" (does not need to span full width — leave right side open for Brad's head) |

**Design guidance:** The masthead is the single most recognizable magazine signal. It sits at the very top edge, large and unapologetic. Never shrink the masthead to accommodate the photo — the photo accommodates the masthead. If Brad's head overlaps the masthead (common on real covers), the masthead still prints at full size and Brad's image layers behind or partially in front of the letterforms. This overlap is a deliberate authenticity cue — GQ, Esquire, and People all allow their subject to overlap the masthead.

If the photo is too busy behind the masthead letters and legibility suffers, add a subtle gradient vignette (transparent to 30-40% Elevate Black) fading down from the top edge behind the masthead. Do NOT add a solid color bar — that reads as a banner ad, not a magazine.

### 3.2 Subtitle / Issue Line

| Property | Value |
|----------|-------|
| **Paragraph style** | `Cover-Subtitle` |
| **Font** | Barlow Condensed Medium |
| **Size / leading** | 11 / 13pt |
| **Tracking** | 200 |
| **Case** | ALL CAPS |
| **Color** | Elevate Gold |
| **Position** | Directly below masthead, same left alignment, 6pt space after |

**Content:** `ISSUE NO. 1  ·  THE OFFICIAL MAGAZINE OF ELEVATE CO.  ·  A BRAD STERLING PUBLICATION`

Use middle dots (·) as separators, not pipes or dashes. The wide tracking on this line makes the separators read cleanly. Gold on a photo background requires either a calm region of the portrait beneath this line, or the same top-edge gradient vignette used for the masthead.

### 3.3 Dominant Coverline

| Property | Value |
|----------|-------|
| **Paragraph style** | `Cover-Teaser-Primary` |
| **Font** | Barlow Condensed Bold |
| **Size / leading** | 24 / 26pt |
| **Tracking** | 20 |
| **Case** | ALL CAPS |
| **Color** | Pure White |
| **Position** | Left column, starting approximately 3.5-4" from top trim (below the masthead/subtitle zone, positioned against a calm area of the photo — Brad's shirt or the dark background area) |
| **Max width** | ~3.5" (roughly the left 40% of the page) |

**Content:** `MEET THE FOUNDER — HE'S EXACTLY WHAT YOU'D EXPECT`

This is the single dominant coverline — the one your eye hits after the masthead and Brad's face. It should be 1.8-2.5x larger than the secondary coverlines by apparent visual weight (our system achieves this: 24pt primary vs. 14pt secondary = 1.7x ratio in point size, but Barlow Condensed Bold vs. Regular creates additional weight differential that pushes apparent size to ~2x).

Place this against a calm area of the portrait — Brad's purple shirt, the shadowed side of the frame, or any region where text won't compete with facial features for attention.

### 3.4 Secondary Coverlines

| Property | Value |
|----------|-------|
| **Paragraph style** | `Cover-Teaser-Secondary` |
| **Font** | Barlow Condensed Regular |
| **Size / leading** | 14 / 16pt |
| **Tracking** | 30 |
| **Case** | ALL CAPS |
| **Color** | Highlight Yellow |
| **Position** | Below the dominant coverline in the left column stack, 2pt space after each |

**Content (3 lines):**
1. `EXCLUSIVE: THE PEN THAT CHANGED EVERYTHING`
2. `ARE YOU A LIFER? TAKE THE QUIZ`
3. `7 SIGNS YOUR CUBICLE ISN'T UP TO CODE`

The yellow color (Highlight Yellow) differentiates these from the dominant white coverline while maintaining legibility on the photo background. At 14pt, these are ~58% of the dominant coverline's size — within the 40-75% range for secondary/tertiary coverlines in professional magazine design.

### 3.5 Page References

| Property | Value |
|----------|-------|
| **Paragraph style** | `Cover-Teaser-Page` |
| **Font** | IBM Plex Mono Regular |
| **Size / leading** | 8 / 10pt |
| **Tracking** | 50 |
| **Color** | Elevate Gold |
| **Position** | Immediately below each secondary coverline that references an interior page |

**Content examples:** `p. 10`, `p. 22`, `p. 6`

Not every coverline needs a page reference. "MEET THE FOUNDER" (the dominant coverline) can omit the page number — it's a statement, not a table-of-contents entry. The monospace font at small size reads as "data" and reinforces the magazine's typographic system. The gold color ties these numerals to the subtitle line above, creating a visual thread along the left margin.

### 3.6 Barcode / UPC

| Property | Value |
|----------|-------|
| **Position** | Bottom-right corner, 0.625" from right trim, 0.625" from bottom trim |
| **Size** | Approximately 1.25" wide x 0.75" tall (standard UPC dimensions) |
| **Background** | Small white rectangle behind the barcode for contrast and legibility |
| **Style** | Standard UPC-A barcode format |

Generate a realistic-looking UPC barcode. The numbers do not need to be valid — they need to look plausible. Place it on a small white rectangle (approximately 1.5" x 1") so the bars read cleanly against whatever photo content is behind it.

This is one of the highest-impact authenticity cues. The brain registers "barcode = real product on a shelf" before conscious processing begins. A missing barcode makes the cover feel like a poster, not a magazine.

### 3.7 Dateline / Price

| Property | Value |
|----------|-------|
| **Font** | IBM Plex Mono Regular, 7pt |
| **Color** | Pure White or Charcoal (whichever has better contrast against the photo at this position) |
| **Position** | Adjacent to or directly above the barcode |

**Content:** `$0.00  |  ISSUE NO. 1  |  ELEVATE CO.`

The "$0.00" price is a comedy beat — it reads as authentic formatting first, then the reader processes the number. "Included Whether You Wanted It or Not" can appear as a second line below in 6pt if space allows, or it can move to the subtitle line. Don't force it — if the bottom corner is too crowded, let the price alone do the work.

---

## 4. Typography Hierarchy

### Size Ratio Table

| Element | Style | Size | Ratio to Secondary | Role in Hierarchy |
|---------|-------|------|--------------------|-------------------|
| **Masthead** | `Cover-Masthead` | 72pt | 5.1x | Brand mark — always largest |
| **Dominant coverline** | `Cover-Teaser-Primary` | 24pt | 1.7x | Main article hook |
| **Secondary coverlines** | `Cover-Teaser-Secondary` | 14pt | 1.0x (baseline) | Supporting article hooks |
| **Subtitle** | `Cover-Subtitle` | 11pt | 0.79x | Issue identification |
| **Page references** | `Cover-Teaser-Page` | 8pt | 0.57x | Navigation data |
| **Dateline/price** | Custom (IBM Plex Mono) | 7pt | 0.5x | Authenticity detail |

### How the Ratios Map to Research

Professional magazine covers use a 1.8-3x ratio between the dominant coverline and secondary coverlines. Our system achieves this through a combination of:

- **Point size ratio:** 24pt vs. 14pt = 1.7x (slightly under the 1.8x minimum)
- **Weight differential:** Barlow Condensed **Bold** vs. Barlow Condensed **Regular** adds significant visual mass
- **Color differential:** Pure White (dominant) vs. Highlight Yellow (secondary) creates a brightness hierarchy
- **Combined apparent ratio:** Approximately 2-2.3x when size, weight, and color are all perceived together

This is the correct range. Pushing the dominant coverline larger (to 28-30pt) is an option if the layout feels too flat, but test at 24pt first — the Barlow Condensed Bold already commands significant presence at this size.

### Reading Order (Z-Pattern)

The cover reads in a Z-pattern for simple compositions:

```
1. MASTHEAD (top-left)     ───────>     2. Brad's FACE (top-right)
                                              │
                                              │ (eye tracks down Brad's
                                              │  face to shirt/chain)
                                              ▼
3. DOMINANT COVERLINE      <───────     (eye returns to left column)
   (left side, mid-page)
        │
        ▼
4. SECONDARY COVERLINES
   (left column stack)
        │
        ▼
5. BARCODE / DATELINE (bottom-right)
```

---

## 5. Photography Direction

### Brad's Cover Portrait

This is the single most important image in the entire magazine. It establishes Brad as a character before a single word is read. The portrait must be played completely straight — cinematic, aspirational, magazine-quality — because the comedy depends on the reader taking this face seriously for exactly one second before the coverlines register.

### Framing

| Property | Direction |
|----------|-----------|
| **Crop** | Head-and-shoulders, tight. Brad fills roughly 60% of the vertical frame. His face sits in the upper third. |
| **Position** | Center to center-right. His face should NOT overlap the left coverline column. His right shoulder can bleed off the right edge. |
| **Eye contact** | Direct. Straight into the camera. Both eyes visible. This is the "instant connection" convention for newsstand punch. |
| **Expression** | Huge cheesy smile. Teeth visible. Infomercial-host energy. Not a smirk — a genuine, aggressive, teeth-too-white grin. |
| **Pose** | Shoulders angled slightly (not square to camera), face turned toward camera. Classic editorial portrait. One hand can be visible if it shows the gold signet pinky ring. |

### Wardrobe (Locked)

| Item | Description |
|------|-------------|
| **Shirt** | Purple satin, unbuttoned to mid-chest. The satin should catch light — specular highlights on the fabric are desirable. |
| **Chain** | Oversized gold rope chain, visible against chest. It should look expensive in the way that cheap things look expensive. |
| **Sunglasses** | Aviator sunglasses, gold frames. Pushed up on his head OR worn — either works. If worn, his eyes must still read through the lenses. Prefer pushed up so eye contact is direct. |
| **Ring** | Gold signet pinky ring. May or may not be visible depending on hand position. |

### Lighting (Brad's Cinematic Lens)

Brad's portrait gets elevated lighting treatment. The research briefing establishes that "Brad hero shots get warmer, more directional lighting" and "the visual quality gap between how the office looks and how Brad sees himself is a comedy layer."

| Lighting Element | Direction |
|------------------|-----------|
| **Key light** | Large softbox or beauty dish, positioned above and slightly camera-right. Even, flattering light on Brad's face — no hard shadows across features. |
| **Fill** | Reflector or secondary soft fill camera-left, roughly 1-2 stops below key. Enough to open shadows without flattening. |
| **Rim / separation** | Optional subtle rim light from behind, catching the edges of his hair and shoulders to separate him from the background. |
| **Color temperature** | Warm. Brad sees himself in golden light. The key light should lean warm (3200-3800K feel) rather than neutral or cool. |
| **Background** | Shallow depth of field — background softens significantly. Brad stays razor-sharp. The background can be a dark office environment or studio backdrop, but it should fall to bokeh. Dark backgrounds give the coverlines more legibility. |

### Composition for Text Placement

The portrait must leave **calm areas** for text overlay:

- **Top edge:** The area above Brad's head (or overlapping his forehead) must support the masthead. A dark or uniform area here is ideal. If the background is light, a gradient vignette may be needed.
- **Left column:** The area from 0.625" to approximately 3.5" from the left edge, spanning from below the masthead to the bottom third, must be relatively calm — Brad's shoulder, shirt fabric, or the dark background. Coverlines sit here. Avoid having Brad's face, hands, or chain in this zone.
- **Bottom-right corner:** Needs a small calm zone for the barcode. Dark background or Brad's lower body area works.
- **Target:** 30-60% of the canvas should be free of text/graphics. The entire right-center area (Brad's face and expression) stays clean.

### Midjourney Prompt Considerations

When generating this image, the prompt should specify:
- Photorealistic, not illustrated
- Magazine cover portrait photography
- Professional studio lighting (beauty dish / softbox)
- Shallow depth of field
- The exact wardrobe described above
- Direct eye contact with the camera
- Warm golden color temperature
- Dark or blurred background for coverline legibility
- Generous space on the left side of frame for text
- Space above head for masthead
- The aspect ratio should be **2:3 or 5:7** (portrait, matching the 8.5x11 cover proportion)

The negative prompt should exclude: cartoon, illustration, flat color, airbrushed skin, Instagram filters, teal-and-orange color grading, lens flare, watermarks, text overlay (text will be added in InDesign, not in the image).

---

## 6. Legibility & Contrast

### The Challenge

Every piece of text on this cover sits on top of a photograph. There is no solid background panel behind the coverlines. This means legibility is entirely dependent on strategic placement, photo composition, and fallback techniques.

### Strategy (In Priority Order)

**1. Place text on calm photo regions — ALWAYS first choice.**

The left column of coverlines should sit against Brad's dark shirt, his shoulder in shadow, or the out-of-focus dark background. If the photo is composed correctly (Brad center-right, dark background), the left margin will naturally be a calm zone. This is why the photography direction above specifies "generous space on the left side of frame."

**2. Top-edge gradient vignette for the masthead.**

A transparent-to-dark gradient fading from the top edge downward (covering the top ~1.5" of the cover) ensures the white masthead reads cleanly regardless of what the photo shows behind it. Set the gradient from Elevate Black at 40-50% opacity at the top edge to 0% opacity at the bottom of the gradient. This is invisible to the casual viewer — every real magazine does this.

**3. Drop shadow on coverline text — moderate use.**

If a coverline sits over a mid-tone area of the photo where neither white nor dark dominates, apply a subtle drop shadow:
- Color: Elevate Black
- Opacity: 50-60%
- Distance: 1-2pt
- Size (blur): 3-4pt
- Angle: 135 degrees

This is a fallback, not the primary approach. If the photo is composed correctly, shadows should be unnecessary for most lines.

**4. Semi-transparent overlay — last resort only.**

If a region of the photo cannot be made calm through composition or gradient, a localized semi-transparent black panel (30-40% opacity, feathered edges) can sit behind a coverline group. Use sparingly. More than one of these on a cover starts to look like a layout problem, not a design choice.

### Contrast Ratios

| Text Element | Minimum Contrast Ratio | Notes |
|--------------|----------------------|-------|
| Masthead (72pt white) | 3:1 against photo background | Large display type — 3:1 is sufficient per WCAG |
| Dominant coverline (24pt white) | 3:1 | Large display type |
| Secondary coverlines (14pt yellow) | 4.5:1 | Approaching body text size — higher ratio needed. Highlight Yellow on dark photo should clear this easily. Highlight Yellow on mid-tone photo may need the drop shadow. |
| Page references (8pt gold) | 4.5:1 | Small text — requires dark background behind it. Gold on light photo fails. |
| Dateline/price (7pt) | 4.5:1 | Sits on the white barcode rectangle or on a dark photo area. |

### Pre-Flight Check

Before signing off on the cover layout, zoom to 100% and verify:
1. Every coverline is legible without squinting
2. The masthead reads instantly — no letter gets lost in photo detail
3. The gold subtitle line reads against whatever is behind it
4. The page reference numbers in gold are not floating on a light area of the photo
5. The barcode area has sufficient white backing to read

---

## 7. Authenticity Cues

These small details are what make the brain commit to "this is a real magazine" before the comedy content registers. Every cue below is a signal that the recipient's pattern-recognition system uses to categorize the object. Skip any one of them and the illusion weakens.

### 7.1 Barcode

| Property | Value |
|----------|-------|
| **Format** | Standard UPC-A |
| **Position** | Bottom-right corner, within the margin area |
| **Size** | ~1.25" wide x 0.75" tall |
| **Background** | White rectangle, slightly larger than the barcode (1.5" x 1") |
| **Numbers** | Fake but plausible. Use a 12-digit number. Example: `0 74808 03241 5` |
| **Quality** | Must look machine-scannable — clean vertical bars, proper quiet zones on each side |

### 7.2 Issue Numbering

Appears in three places:
1. **Subtitle line** (below masthead): `ISSUE NO. 1`
2. **Dateline** (near barcode): `ISSUE NO. 1`
3. **Table of Contents** (page 2): Reinforces the number

The consistency across surfaces is itself an authenticity cue — real magazines obsessively repeat the issue number.

### 7.3 Price

**$0.00** — formatted as a real price but with a comedic value. Place it near the barcode in the dateline cluster. The format (dollar sign, decimal, two zeros) reads as "price" before the number registers.

The extended joke — `Included Whether You Wanted It or Not` — works as a secondary line near the price in very small type (6pt, IBM Plex Mono Light), or as part of the subtitle line. Place it wherever it fits without crowding. If it has to be cut for space, the $0.00 alone does the job.

### 7.4 Selling Line / Tagline

Real magazines include a selling line (sometimes called a "cover line" or "tagline") that differentiates the publication. It typically appears below the masthead or near the barcode.

For ELEVATE, this is handled by the subtitle line: `THE OFFICIAL MAGAZINE OF ELEVATE CO. · A BRAD STERLING PUBLICATION`

The fact that this includes Brad's name is a Brad Mode 2 move — he put his name on the cover twice (the profile AND the subtitle). He sees no issue with this.

### 7.5 Consistent Masthead Position

The masthead must sit in the exact same position on the cover as it would on every issue. Since there is only one issue, this is technically automatic — but the position should feel permanent: top edge, left-aligned, full-size. It should look like it has been there for 200 issues.

---

## 8. Comedy Integration

### How the Comedy Works on This Page

The cover operates on a **delay mechanism.** The reader's brain processes the visual signals in this order:

1. **"This is a magazine."** Masthead, barcode, coverlines, glossy portrait — pattern recognition fires instantly. The object is categorized before a single word is read.

2. **"This man is... a lot."** Brad's portrait is played completely straight, with cinematic lighting and aspirational framing. But the purple satin shirt unbuttoned to mid-chest, the oversized gold chain, the aviators, the blinding smile — the "what am I looking at" question starts forming. He looks like a late-night infomercial host who got a magazine deal.

3. **"Wait, what are these articles?"** The coverlines register. "MEET THE FOUNDER — He's Exactly What You'd Expect." "The Pen That Changed Everything." "Are You a Lifer?" The teasers are written in standard magazine coverline format, which makes the insane content read as normal for a beat — then the meanings land.

4. **"This costs $0.00."** The barcode and price are the last thing to register. By now the recipient is already laughing.

### The Comedy Rules for the Cover

**Brad's portrait is played 100% straight.** No winking, no mugging, no self-aware smirking. Brad thinks this is a great photo. He thinks this is exactly what a magazine founder looks like. The comedy comes from Brad's absolute sincerity — not from the photo making fun of him. The photo is trying to be aspirational. The fact that THIS is what Brad's aspirational looks like is the joke.

**The coverlines use real magazine formatting.** They are not parodies of coverlines — they ARE coverlines. The format (ALL CAPS, short punchy phrases, page references) is identical to People or GQ. The content is insane, but the format is note-perfect.

**The authenticity cues are totally functional.** The barcode looks real. The dateline looks real. The issue number looks real. These are not jokes — they are straight-faced elements that deepen the illusion. The comedy is in the total commitment, not in any individual element breaking character.

**The cover is Brad Mode 2 territory.** This is Personal Brand Brad — the magazine is his media empire, the cover features his face, his name is in the subtitle. The gap between this self-image and reality IS the joke. No individual element on the cover needs to be "funny" — the entire composition is funny because Brad thinks it's impressive.

---

## 9. Common Pitfalls

### DO NOT: Make the photo look bad on purpose.

The portrait must be genuinely good photography. If the lighting is flat, the composition is awkward, or the image looks like a phone selfie, the cover fails as parody because it never achieved the thing it's parodying. The photo needs to look like Brad hired a professional photographer. Brad DID hire a professional photographer. He just happens to look like that.

### DO NOT: Shrink the masthead for the photo.

The masthead is the brand mark. It stays at 72pt, same position, every time. If Brad's head overlaps it, that is a feature (real magazines do this constantly), not a problem to solve by reducing the masthead.

### DO NOT: Overcrowd the left column.

Four coverlines maximum. Real magazines put 4-6, but they have dedicated art directors finessing the spacing. For a first build, four (one dominant + three secondary) gives breathing room. Resist the temptation to add more teasers — the white space between lines is what makes each one land.

### DO NOT: Use a solid color bar behind text.

Solid color bars across the cover read as banner ads or amateur design. If text needs contrast help, use the gradient vignette or drop shadow techniques in Section 6. The background should appear to be continuous photograph, even if you are subtly darkening it.

### DO NOT: Center the coverlines.

Coverlines are left-aligned. Centered coverlines on a portrait cover look like a movie poster, not a magazine. The left-aligned stack is the strongest "this is a magazine" signal in the entire layout.

### DO NOT: Let the barcode fight the portrait.

The barcode zone (bottom-right) must be clean and small. If the barcode feels like it is competing with the portrait for attention, it is too large or too prominent. The white rectangle should be the minimum size needed for the UPC to read clearly.

### DO NOT: Use display-style leading on the coverlines.

The `Cover-Teaser-Primary` style uses 26pt leading on 24pt type (tight, not touching). The `Cover-Teaser-Secondary` uses 16pt leading on 14pt type. Resist the temptation to tighten further — stacked ALL CAPS lines in a condensed face need the leading to avoid a visual wall of text.

### DO NOT: Forget the bleed.

The photo extends 0.125" past all four trim edges. Every edge of the cover is a cut line. If the photo stops at the trim, there will be a white border after printing. Set the image frame to extend to the bleed guide on all four sides.

---

## 10. Production Checklist

Build order for the cover page in InDesign:

### Setup

- [ ] Apply **E-Cover** master page to page 1
- [ ] Confirm page dimensions: 8.5" x 11" trim, 0.125" bleed all sides
- [ ] Confirm master page has: no running headers, no folios, no column guides
- [ ] Set all margins to 0.625"

### Photo Placement

- [ ] Place Brad's cover portrait as a full-bleed image frame
- [ ] Extend image frame to bleed guides on all four edges (8.75" x 11.25" total)
- [ ] Position Brad's face in the upper third, center to center-right
- [ ] Verify the left column (0.625" to ~3.5") is a calm/dark region for coverlines
- [ ] Verify the top edge (~1.5" from top) is dark enough for the white masthead
- [ ] If needed: add a gradient vignette layer at the top edge (Elevate Black, 40-50% opacity fading to transparent)

### Masthead

- [ ] Create text frame at top of safe area (0.625" from top trim, 0.625" from left trim)
- [ ] Type "ELEVATE" and apply `Cover-Masthead` paragraph style
- [ ] Verify: 72pt Barlow Condensed Black, ALL CAPS, Pure White, tracking 80
- [ ] Check legibility against photo — if letters get lost, strengthen the top gradient

### Subtitle

- [ ] Create text frame directly below masthead (6pt space after)
- [ ] Type the issue line and apply `Cover-Subtitle` paragraph style
- [ ] Verify: 10pt Barlow Condensed Medium, ALL CAPS, Elevate Gold, tracking 200

### Coverline Stack

- [ ] Create text frame in the left column, starting below the subtitle zone
- [ ] Set the dominant coverline: apply `Cover-Teaser-Primary`
- [ ] Verify: 24pt Barlow Condensed Bold, ALL CAPS, Pure White
- [ ] Set 3 secondary coverlines below: apply `Cover-Teaser-Secondary` to each
- [ ] Verify: 14pt Barlow Condensed Regular, ALL CAPS, Highlight Yellow
- [ ] Set page references below relevant coverlines: apply `Cover-Teaser-Page`
- [ ] Verify: 8pt IBM Plex Mono Regular, Elevate Gold
- [ ] Check vertical spacing — each coverline group (secondary + page ref) should have 12pt space after (per the style's Space After definition)

### Authenticity Cues

- [ ] Create a white rectangle in the bottom-right corner (~1.5" x 1")
- [ ] Place or generate a UPC barcode graphic inside the rectangle
- [ ] Position the dateline text adjacent to or above the barcode
- [ ] Set dateline in IBM Plex Mono Regular, 7pt
- [ ] Optionally add the "$0.00 / Included Whether You Wanted It or Not" line in 6pt below

### Legibility Verification

- [ ] Zoom to 100% — read every text element aloud
- [ ] Check the masthead at arm's length (zoom to 33%) — does it dominate?
- [ ] Check the dominant coverline — does it read in one glance?
- [ ] Check the gold text elements (subtitle, page refs) — visible against the photo?
- [ ] Verify contrast ratios: white text on dark photo areas should exceed 3:1 for large type, 4.5:1 for small type

### Final Pre-Flight

- [ ] Verify all text uses the named paragraph styles (no local overrides)
- [ ] Verify the image extends to bleed on all four sides
- [ ] Verify no text element is closer than 0.625" to any trim edge
- [ ] Verify no text overlaps Brad's face or key facial features
- [ ] Export a proof PDF at 300dpi with bleed marks and trim marks
- [ ] Print at 100% scale — hold it at arm's length — does it read "magazine"?

---

## Changelog

| Version | Date | Changes |
|---------|------|---------|
| v1 | May 25, 2026 | Initial format reference. Cover anatomy, element specs, typography hierarchy, photography direction, legibility guidance, authenticity cues, comedy integration, pitfalls, production checklist. |
