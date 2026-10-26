# Session Notes: Cubicle Shank Spread (pp. 10-11)
## May 25-26, 2026

**Status:** SPREAD COMPLETE. Copy locked, layout locked, images generated and placed in InDesign.
**Spread:** Pages 10-11 (Cubicle Shank Ad)
**Format:** D-Spread Ad (dark background)

---

## What Was Accomplished

The Cubicle Shank ad spread (pages 10-11) was developed from concept through InDesign build in this session. This is the first completed spread in the ELEVATE magazine and serves as the production template for all remaining spreads.

### Deliverables Completed

1. **Copy** -- All copy written and locked (`product/copy/cubicle-shank-spread-copy-v1.md`)
2. **Layout spec** -- Full layout and design spec created (`product/design/cubicle-shank-spread-layout-v1.md`)
3. **Midjourney prompts** -- 6 image prompts written (hero product, Before/After Kyle, 3 testimonial portraits)
4. **Before/After images** -- Iterated extensively to final versions (see Image Iteration Notes below)
5. **InDesign build** -- Spread built in InDesign with all elements placed
6. **Format references created** -- Format Reference C (feature spreads) and Format Reference E (ad spreads) written during this session

---

## Image Iteration Notes

### Before/After Kyle -- Evolution of the Concept

The Before/After images went through significant iteration to push the absurdity level. Key decisions:

**BEFORE image -- Final direction:**
- Kyle squeezed into a **tiny colorful children's plastic table and chair set** (too small for him, knees to chest)
- **KICK ME sign taped directly over his crotch** (not on his back -- escalated placement)
- Ancient yellowed CRT monitor on the tiny table
- Only 2-3 diverse coworkers visible far in background (not crowded)
- Composition tightly focused on him
- **Color treatment:** Desaturated grayscale with blue-gray tones -- done in Photoshop post-generation (Hue/Saturation to -70 to -85, then Color Balance pushing Midtones toward Blue +15 and Cyan +10, Contrast -15)

**AFTER image -- Final direction:**
- Same Kyle, now in leather executive chair at oversized mahogany desk (still in cubicle farm)
- **Mounted human head trophies on cubicle walls** -- living coworkers poking heads through wooden trophy mount plaques with uncomfortable frozen expressions. Hands visible gripping plaque edges (critical -- hands make it clear they're alive, not severed heads)
- One person in background wearing **full arm cast and sling** (pays off "handshake got firmer" copy)
- Tactical pen on **velvet display pillow** on desk
- INTERN lanyard still visible
- Warm golden cinematic lighting
- Camera angle from **slightly below** (power shot, contrasts the above-angle BEFORE)

### Diversity in Images

- Kyle stays white male, mid-20s
- All other people (coworkers, mounted heads, background figures) use **varying genders and races**
- This was a specific directive -- initial generations had all-white casts

### Midjourney Prompt Format

All prompts follow this exact structure (do not deviate for future spreads):

```
[Detailed scene description in one continuous paragraph, no line breaks within the description] --no cartoon, illustration, drawing, painting, sketch, anime, manga, chibi, stylized, flat color, cel shading, vector art, mid-century modern, geometric faces, angular faces, pointed noses, exaggerated proportions, caricature, waxy skin, plastic skin, airbrushed skin, unnaturally smooth skin, symmetrical face, perfect features, model-beautiful, glamour lighting, fashion photography, Instagram filter, color grading, teal and orange, oversaturated, HDR, lens flare, vignette, film grain for style, collage, composite, split screen, floating elements, text overlay, watermark, stock photo watermark, Getty Images watermark --ar [ratio] --s 250 --v 6.1
```

**Key format rules:**
- One continuous paragraph for the scene description
- `--no` block is identical across ALL prompts (copy-paste it, never modify)
- Always include `--s 250 --v 6.1`
- Aspect ratio varies per image need (3:4 portrait, 4:3 landscape, 1:1 square)

### Color Desaturation Method (Before Images)

For any "before" segment images that need the infomercial look:

**In Midjourney prompt:** Include "desaturated, muted colors, washed out, low saturation, grayscale with slight blue-gray cast, infomercial before segment look" -- but Midjourney often ignores this.

**In Photoshop (reliable method):**
1. Image > Adjustments > Hue/Saturation -- Saturation to **-70 to -85** (not -100, which looks dead)
2. Image > Adjustments > Color Balance -- Midtones toward **Blue (+15)** and **Cyan (+10)**
3. Image > Adjustments > Brightness/Contrast -- Contrast to **-15**

This produces the sad, drained infomercial "before" aesthetic.

---

## Design Decisions Made During This Session

### Absurdity Calibration

The key lesson from this spread: **the user wants UNHINGED, not tame.** Multiple rounds of feedback pushed the absurdity higher. Patterns that emerged:

1. **"Tame" means anything that could happen in a normal office.** Stealing a stapler, taking someone's lunch, a kick-me sign on the back -- all too basic.

2. **"Unhinged" means visually absurd situations played completely straight.** A children's desk, mounted human heads on cubicle walls, a kick-me sign on the crotch -- things that make you do a double-take.

3. **The absurdity must CONNECT to the copy.** The mounted heads aren't random -- they're "trophies." The arm cast pays off "handshake got firmer." The velvet pillow pays off the pen's importance. Every absurd visual detail should trace back to something in the written copy.

4. **The photography must be genuinely good.** The more professional and polished the image, the funnier the absurd content becomes. Low-quality images undercut the joke.

5. **Fewer people, more focus.** The BEFORE image works better with Kyle isolated (2-3 background figures max) than with a crowd. The absurdity of his situation stands out more when the frame isn't busy.

### InDesign Build Learnings

- Right-page density is tight (10" live height, many stacked elements). Monitor spacing carefully.
- The fine print (IBM Plex Mono Light, 5.5-6/7.5-8pt, Warm Gray 40 on black) is at the legibility threshold. May need to bump to 7/9pt or lighten to Warm Gray 60.
- Testimonial cards work best with charcoal (#222222) background panels and 1pt gold left-edge rule (not full border).
- Gold rule between result section and CTA should span ~60% of text column width, centered.

### Background Treatment for Dark Spreads

- Smoke/atmospheric overlays on dark backgrounds are difficult to match to #1A1A1A. Curves adjustment in Photoshop (Input: 0, Output: 26 lifts pure black to match #1A1A1A). But in practice, matching is finicky and was abandoned for this spread.
- Radial vignette (slightly lighter center, full Rich Black at edges) is the more reliable approach.
- Noise overlay (Gaussian, 2-4%, Monochromatic, Overlay at 5-10%) prevents banding on large dark fills.

---

## Copy Voice Notes for This Spread

### The QVC + Luxury Voice

This spread uses a hybrid voice not seen elsewhere in the magazine: QVC infomercial energy (the Before/After, the transformation narrative, the testimonials) layered with luxury product advertising (the hero shot, the headline, the CTA).

**How it works:**
- The LEFT page reads as a Montblanc ad (luxury)
- The RIGHT page reads as an infomercial (QVC transformation)
- The FORMAT SHIFT between pages is itself a comedy beat
- Both voices are played 100% straight -- no winking

### Testimonial Voice Escalation

The three testimonials follow a deliberate escalation:
1. **Deborah** -- relatable. "I used to share a stapler. I don't share anything anymore." (The reader nods.)
2. **Marcus** -- concerning. "My therapist said I needed to set boundaries. She didn't say how." (The reader pauses.)
3. **Gerald** -- payoff. Nineteen years, they call him "Sir" now. (The reader laughs.)

Each testimonial portrait includes Lifer Ink tattoos (cross-sell to page 16).

### Fine Print as Comedy

The fine print disclaimer is a complete comedy piece (150+ words). It rewards close readers and contains some of the best jokes on the spread. It MUST be legible. Key lines:
- "n=1" study
- "conducted without IRB approval, informed consent, or Kevin's awareness"
- "If you experience boundary-related satisfaction lasting more than four hours, consult your manager"
- "Kevin's will not" (referring to results varying)
- "legal@elevateco.com (not monitored)"

---

## What to Load for the Next Session

### Required Reading (in order)

1. **This document** -- session notes and decisions
2. **`product/governance/updated-authority-block-v3.md`** -- locked decisions
3. **`product/copy/magazine-structure-v1.md`** -- full 30-page structure
4. **`product/design/ELEVATE-MAGAZINE-INDESIGN-REFERENCE.md`** -- InDesign system
5. **The format reference for the target spread:**
   - Cream feature spreads: `product/design/format-reference-C-feature-spreads.md`
   - Dark single-page ads: `product/design/format-reference-D-full-page-ads.md`
   - Dark ad spreads: `product/design/format-reference-E-ad-spreads.md`
6. **`product/copy/brad-copy-voice-guide.md`** -- voice reference
7. **`product/copy/world-rules.md`** -- vocabulary and world framework

### Voice Quick Reference

| Voice Style | Used For | Key |
|---|---|---|
| QVC / Infomercial | Product ads | "YOU NEED THIS. Here's why." |
| Wellness / Self-Care | Lifer Ink, affirmation cards | "This is your healing journey." |
| Fitness / Transformation | Before/After, stickers | "RESULTS. REAL PEOPLE." |
| Luxury Lifestyle | Hero shots, mug reveal | "For those who understand." |
| Pharma | Card deck ads | "Ask your manager if this is right for you." |
| Editorial / Feature | Narrative chapters | "Our investigative team reports..." |
| Advice Column | Dear Brad | "Brad answers YOUR questions." |
| Classified Ads | Margin fillers | One-line gags in tiny type |

### Comedy Rules (Non-Negotiable)

1. **The format is the setup. The content is the punchline.** The layout must look like a real magazine element FIRST. The absurdity in the words/images does the comedy.
2. **Never break character.** The magazine never acknowledges it's a joke.
3. **Never explain the joke.** No parenthetical asides, no winking.
4. **Photography must be genuinely good.** The contrast between quality and content IS the comedy engine.
5. **Push the absurdity.** If it feels "tame," it IS tame. If it could happen in a normal office, it's not enough.
6. **Both Brads on the same product.** Mode 1 (competent product humor) and Mode 2 (delusional personal brand) -- the gap between them is the meta-joke.

### InDesign Color Palette

| Swatch | CMYK | Use |
|---|---|---|
| Matte Black | C:0 M:0 Y:0 K:100 | Text, small fills |
| Rich Black | C:60 M:40 Y:20 K:100 | Large background fills only |
| White | Paper | Primary reading text on dark |
| Cream | C:3 M:5 Y:10 K:0 | Editorial page background, reveal body text |
| Gold | C:0 M:15 Y:80 K:10 | Hierarchy markers, accents, CTA |
| Signal Orange | C:0 M:60 Y:100 K:0 | Functional labels (BEFORE/AFTER tags) |
| Warm Gray 40 | C:0 M:3 Y:5 K:25 | Fine print, footnotes |
| Warm Gray 80 | Darker gray | Secondary text on cream |
| Institutional Teal | C:100 M:0 Y:40 K:45 | Infographic data values |
| Purple | C:55 M:85 Y:0 K:0 | Pull quotes on cream pages |
| Charcoal | C:0 M:0 Y:0 K:85 | Body text on cream |

### Typography Quick Reference

**On dark backgrounds (ad spreads):**
- Headline: Barlow Condensed Black, 54/50pt, White
- Subhead: Freight Display Pro Bold Italic, 18/22pt, Gold
- Body: Freight Text Pro Book, 11/15pt, White
- Testimonial: Freight Text Pro Book Italic, 11/15pt, White
- Attribution: IBM Plex Mono Regular, 7.5/10pt, Gold
- CTA: Barlow Condensed Bold, 13/15pt, Gold
- Fine Print: IBM Plex Mono Light, 6/8pt, Warm Gray 40

**On cream backgrounds (feature spreads):**
- Headline (elegant): Freight Display Pro Bold, 48/48pt, Matte Black
- Headline (bold): Barlow Condensed Black, 42/42pt, all caps, Matte Black
- Deck: Freight Text Pro Medium, 14/19pt, Warm Gray 80
- Byline: Barlow Condensed Medium, 9/11pt, Gold, all caps
- Body: Freight Text Pro, 12/15pt, Charcoal
- Pull Quote: Freight Display Pro Bold, 24/30pt, Purple
- Section Label: Barlow Condensed Bold, 10/12pt, Gold, all caps

---

## Remaining Spreads (Development Status)

> **NOTE:** Page assignments updated May 26, 2026. Magazine expanded to 32 pages. Cubicle Shank moved to pp. 8-9. The Block expanded to 4 pages (pp. 10-13). See `product/copy/magazine-structure-v2.md` for the current structure.

| Pages | Content | Copy | Images | InDesign | Notes |
|---|---|---|---|---|---|
| 1 | Cover | Not started | Not started | Not started | |
| 2 | Masthead / TOC | Not started | N/A | Not started | |
| 3 | Letter from Editor | Not started | Not started | Not started | |
| 4-7 | Welcome to the Workforce | **DRAFT** | Not started | Not started | 4-page intake feature (pp. 4-6 editorial + p. 7 real estate listing). Copy: `welcome-to-the-workforce-copy-v1.md` |
| **8-9** | **Cubicle Shank Ad** | **DONE** | **DONE** | **DONE** | **COMPLETE** — moved from pp. 10-11 to pp. 8-9 |
| 10-13 | The Block: Neighborhood Guide | Not started | Not started | Not started | **Expanded to 4 pages.** 14 locations. Source material archived: `the-block-source-material-v1.md` |
| 14-15 | Morning Loadout | Not started | Not started | Not started | Gear review format |
| 16-17 | The Code | Not started | Not started | Not started | Infographic format |
| 18 | Lifer Ink Ad | Not started | Not started | Not started | Single-page dark ad |
| 19 | Turf Tags Ad | Not started | Not started | Not started | Single-page dark ad |
| 20-21 | The Experiment | Not started | Not started | Not started | Investigative format |
| 22-23 | Identity Crisis | Not started | Not started | Not started | Fashion editorial format |
| 24-25 | Card Deck Triple Ad | Not started | Not started | Not started | Triple mini-ad format |
| 26 | Dear Brad | Not started | Not started | Not started | Advice column |
| 27-28 | Meet the Founder | Not started | Not started | Not started | Magazine profile format |
| 29 | The Confiscated | Not started | Not started | Not started | Evidence report format |
| 30-31 | Mug Shot Reveal | Not started | Not started | Not started | Luxury reveal format |
| 32 | Fine Print / Back Cover | Not started | Not started | Not started | Legal + classifieds |

---

## Session 2: Magazine Restructure & Source Material Archive (May 26, 2026)

### Decisions Made

1. **Magazine expanded from 30 to 32 pages** — better for saddle-stitch production (multiples of 4). See `magazine-structure-v2.md`.

2. **Pages 4-7: "Welcome to the Workforce"** — Redesigned as a single 4-page feature:
   - pp. 4-5: Feature opener spread (university orientation brochure energy)
   - p. 6: Editorial continuation (modular — schedule strip, photo, Brad sidebar)
   - p. 7: Real estate listing (cubicle as Zillow listing, "related properties" footer)
   - Copy drafted: `welcome-to-the-workforce-copy-v1.md`
   - Image prompts drafted: `product/image-prompts/welcome-to-workforce-image-prompts-v1.md`
   - Layout spec drafted: `product/design/welcome-to-workforce-layout-v1.md`

3. **Cubicle Shank ad moved from pp. 10-11 to pp. 8-9** — First ad break comes after the intake feature, teaching the reader the magazine's rhythm early.

4. **The Block expanded from 2 pages to 4 pages (pp. 10-13)** — 14 locations from the user's office map, each with a photo + 1-2 sentence description. Modular, scannable format.

5. **Department dossiers archived** — Full dossier pages exist for 4 departments:
   - Marketing: **The Hustlers** (location: The Kennel, aka Yard Dogs)
   - IT: **The Plug Pullers** (location: The Network)
   - HR: **The Warden's Spies** (location: Internal Affairs)
   - Finance: **The Loan Sharks** (location: The Vault)
   - Each dossier includes: PSYOP readout, skill web, combat stats, preferred weapons, known aliases, weaknesses, smuggled note, description copy

6. **Office archetypes archived** — 5 minor character types: Snack Hoarders, Meeting Marathoners, Over-Explainers, Keyboard Drummers, Reply-All Rioters

7. **Raw location copy archived** — Extensive raw copy from an earlier version covering all 14 locations. Voice needs rewriting for ELEVATE, but the material (jokes, details, character names, rules) is strong. Saved to `the-block-source-material-v1.md`.

### Files Created This Session

| File | Purpose |
|---|---|
| `product/copy/magazine-structure-v2.md` | Updated 32-page structure |
| `product/copy/welcome-to-the-workforce-copy-v1.md` | Copy for pp. 4-7 |
| `product/image-prompts/welcome-to-workforce-image-prompts-v1.md` | Midjourney prompts for pp. 4-7 |
| `product/design/welcome-to-workforce-layout-v1.md` | Layout spec for pp. 4-7 |
| `product/copy/the-block-source-material-v1.md` | **Comprehensive archive** — all dossiers, locations, archetypes, raw copy, usable details index |

### Additional Decisions (later in session)

8. **Sales and Marketing split into separate departments:**
   - **Sales** → The Kennel, crew: **The Yard Dogs** (the yapping, the noise, bleeding quota)
   - **Marketing** → **The Racket**, crew: **The Hustlers** (the schemes, the slides, the branded everything)
   - The original dossier labeled "Marketing — The Hustlers" at The Kennel had content that mixed both. The Kennel raw copy (loud, quota-bleeding, headset trophies) reads more as Sales. The dossier stats (87-slide deck, fonts, slogans) read more as Marketing.

9. **The Block expanded to 6 total pages:** 2-page map spread + 4-page location guide

10. **8 featured locations selected** for the guide (2 per page): The Grid, The Canteen, The Panic Pods, Internal Affairs, The Kennel, Disputed Territory, The Coliseum, The Lot

11. **Remaining locations teased for "Issue 2"** in a footer/sidebar: The Vault, The Network, The Underbelly, Visitation, The Commissary, The Racket, The Warden's Office. This is both a real magazine convention AND a joke (there is no Issue 2).

12. **The Block will be teased on the magazine cover** as a cover line (standard magazine cover convention).

13. **Map spread placement TBD** — centerfold (natural saddle-stitch center) is ideal but page numbers will sort out after more content is written. Don't optimize page placement for material that doesn't exist yet.

### Outstanding Items for Next Session

- Department nicknames still needed for: Facilities (The Underbelly), general population (The Grid)
- The Block copy needs writing (will draw from source material archive)
- The Block map spread needs concept/design
- The Block image prompts need writing
- The Block layout spec needs writing
- Welcome to the Workforce images need generation in Midjourney
- Cross-references in magazine that say "See p. 10" for Shank need updating
- Magazine structure v2 needs updating to reflect 6-page Block section and Sales/Marketing split
- The Racket (Marketing) needs raw location copy written — only dossier material exists

---

## Changelog

| Date | Changes |
|---|---|
| May 26, 2026 | Initial session notes. Documents all decisions, iterations, and patterns from the Cubicle Shank spread development session. |
| May 26, 2026 | Session 2: Magazine restructured to 32 pages. Welcome to the Workforce (pp. 4-7) copy drafted. Cubicle Shank moved to pp. 8-9. The Block expanded to 4 pages (pp. 10-13). Department dossiers, office archetypes, and raw location copy archived to `the-block-source-material-v1.md`. |
| May 26, 2026 | Session 2 (continued): Sales/Marketing split — Sales at The Kennel (Yard Dogs), Marketing at The Racket (Hustlers). The Block expanded to 6 pages (2-page map + 4-page guide). 8 featured locations locked. Remaining locations teased for "Issue 2". Cover line for The Block confirmed. Source material doc updated with all locked decisions. |
