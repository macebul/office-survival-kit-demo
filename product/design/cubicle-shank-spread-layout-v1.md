# Cubicle Shank Ad Spread — Layout & Design Spec
## Pages 10-11 | ELEVATE Magazine

**Version:** v1
**Last Updated:** May 25, 2026
**Status:** READY FOR BUILD — Copy locked, layout specified, image prompts included.
**Companion docs:** `product/copy/cubicle-shank-spread-copy-v1.md` (locked copy), `product/design/ELEVATE-MAGAZINE-INDESIGN-REFERENCE.md` (InDesign system)

---

## InDesign Setup

| Property | Value |
|----------|-------|
| Master page | **D-Spread Ad** |
| Background | Matte Black (#1A1A1A) |
| Inside margin | 0.25" (tight — images can cross the gutter) |
| Outside margin | 0.5" |
| Top/bottom margin | 0.5" |
| Running header | None |
| Page number | None |
| Total spread dimensions | 17" wide x 11" tall (two 8.5" x 11" portrait pages side by side) |

---

## Page Architecture

### LEFT PAGE (Page 10) — "The Hook"

The left page is the **entry point**. The reader's eye lands here first when they turn from pages 8-9. This page sells the product with confidence, humor, and professional ad formatting. It should feel like flipping past a Montblanc ad — for about half a second.

```
┌─────────────────────────────────────┐
│                                     │
│   ┌─────────────────────────────┐   │
│   │                             │   │
│   │     HERO PRODUCT SHOT       │   │
│   │     (floating pen,          │   │
│   │      dramatic lighting,     │   │
│   │      top 55% of page)       │   │
│   │                             │   │
│   └─────────────────────────────┘   │
│                                     │
│   THE PEN THAT ENDED KEVIN.        │  ← Ad Headline
│                                     │
│   We asked 500 office workers...    │  ← Ad Body
│   Great news — this covers          │
│   all three.                        │
│                                     │
│   ┌───────────┐  ┌───────────┐      │
│   │ Deborah   │  │ Marcus    │      │
│   │ testimonial│  │ testimonial│     │
│   │ card      │  │ card      │      │
│   └───────────┘  └───────────┘      │
│                                     │
│   ┌───────────────────────────┐     │
│   │ Gerald testimonial card   │     │
│   │ (wider — his quote is     │     │
│   │  longer)                  │     │
│   └───────────────────────────┘     │
│                                     │
└─────────────────────────────────────┘
```

**Element breakdown, top to bottom:**

1. **Hero product shot** — Top 55% of the page. The Cubicle Shank floating on black, lit dramatically from one side. Gold accent light catching the aircraft-grade aluminum. Tungsten carbide tip visible. "FOR OFFICE USE ONLY" engraving readable. This is the first thing the reader sees. It looks expensive. It looks dangerous. It looks like a pen.

2. **Headline** — `The pen that ended Kevin.` Set in **Ad Headline** (Barlow Condensed Black, 54/50pt, white). Positioned directly below the hero shot. Flush left. The period matters — it's a statement, not a question.

3. **Body copy** — The "500 office workers" paragraph. Set in **Ad Body** (Freight Text Pro, 11/15pt, white). Two short paragraphs. Flush left, tight to the headline. The line break between "19% said..." and "Great news" is the comedic beat — give it a full paragraph break.

4. **Testimonial cards** — Three testimonial blocks in the bottom third. Deborah and Marcus side by side (roughly equal width), Gerald spanning wider below them (his quote is longest). Each card is:
   - A small portrait photo (see Midjourney prompts below)
   - The quote in **Ad Testimonial** (Freight Text Pro Italic, 11/15pt, white)
   - Attribution in **Ad Testimonial Attribution** (IBM Plex Mono, 7.5/10pt, gold)
   - Cards have a subtle 1pt gold border or a very faint dark gray (#2A2A2A) background panel to separate them from the black page

---

### RIGHT PAGE (Page 11) — "The Proof"

The right page delivers the **transformation narrative** and the **close**. If the left page is "here's what this is," the right page is "here's what it does." The Before/After is the comedy centerpiece. The CTA closes the sale.

```
┌─────────────────────────────────────┐
│                                     │
│   REAL RESULTS. REAL KYLE.          │  ← Ad Subhead (setup)
│                                     │
│   ┌──────────────┐ ┌──────────────┐ │
│   │              │ │              │ │
│   │   BEFORE     │ │   AFTER      │ │
│   │   (grayscale,│ │   (full color│ │
│   │    pathetic  │ │    golden    │ │
│   │    Kyle)     │ │    light     │ │
│   │              │ │    Kyle)     │ │
│   │              │ │              │ │
│   └──────────────┘ └──────────────┘ │
│                                     │
│   Same intern. Same desk. Within    │  ← Ad Body (result)
│   two weeks, Kyle's personal space  │
│   expanded by 300%...               │
│                                     │
│   *Hand-to-hand combat has been...  │  ← Ad Fine Print (footnote)
│                                     │
│   ─────────────────────────────     │  ← thin gold rule
│                                     │
│   THE EXECUTIVE TACTICAL STYLUS     │  ← Ad CTA block
│   by Elevate Co.                    │
│                                     │
│   It writes. Among other things.    │
│                                     │
│   Available exclusively in the      │
│   Office Survival Kit.              │
│                                     │
│   [fine print disclaimers]          │  ← Ad Fine Print
│                                     │
└─────────────────────────────────────┘
```

**Element breakdown, top to bottom:**

1. **Before/After setup line** — `REAL RESULTS. REAL KYLE.` Set in **Ad Subhead** (Freight Display Pro Bold Italic, 18/22pt, gold). Centered above the photo pair. This is the section header — it tells the reader what format they're about to see.

2. **Before/After photos** — Two photos side by side, each roughly 3.5" wide x 4.5" tall. Labeled "BEFORE" and "AFTER" in small **Callout Label** style (Barlow Condensed SemiBold, 10/12pt, Signal Orange) at the top of each image.
   - **BEFORE:** Desaturated/grayscale. Kyle hunched at his desk, someone reaching over him, "INTERN" sticky note visible, chewed-up Bic pen. The color treatment immediately signals "bad." Full infomercial energy — this is the black-and-white "are YOU tired of..." shot.
   - **AFTER:** Full rich color with warm golden lighting. Same desk, Kyle leaned back, Cubicle Shank resting prominently, empty cubicles visible, flowers on desk, lunch untouched. The color treatment signals "transformation complete."

3. **Result copy** — The "Same intern. Same desk..." paragraph. Set in **Ad Body** (11/15pt, white). Flush left. This is the payoff paragraph — it reads like a real transformation testimonial.

4. **Footnote** — `*Hand-to-hand combat has been clinically shown to improve grip strength. This is a pen.` Set in **Ad Fine Print** (IBM Plex Mono Light, 6/8pt, Warm Gray 40). The asterisk connects to "His handshake got firmer*" in the result copy.

5. **Gold rule** — A thin horizontal line in Gold, spanning roughly 60% of the text column width. Centered. This visually separates the Before/After section from the CTA.

6. **CTA block** — Centered, stacked:
   - `THE EXECUTIVE TACTICAL STYLUS` in **Ad CTA** (Barlow Condensed Bold, 13/15pt). Consider setting this in gold on black, or white with gold accent.
   - `by Elevate Co.` in **Ad Subhead** (Freight Display Pro Bold Italic, smaller — 14/17pt, gold italic)
   - `It writes. Among other things.` in **Ad Body** (11/15pt, white italic)
   - `Available exclusively in the Office Survival Kit. Not sold separately. Not allowed to be.` in **Ad Fine Print** (6/8pt, Warm Gray 40)

7. **Fine print / disclaimers** — Bottom of the page. Set in **Ad Fine Print** (IBM Plex Mono Light, 5.5/7.5pt or 6/8pt, Warm Gray 40). See full disclaimer copy below.

---

## Visual Flow — How the Eye Moves

The spread reads in a deliberate sequence. Each beat sets up the next laugh.

```
LEFT PAGE                              RIGHT PAGE

  ①  Hero product shot                   ④  "REAL RESULTS. REAL KYLE."
      (eye enters here —                     (the format shift:
       "this is a luxury pen ad")             "oh, it's an infomercial now")

  ②  "The pen that ended Kevin."         ⑤  BEFORE ──────── AFTER
      (record scratch —                      (the comedy centerpiece —
       "wait, what?")                         grayscale to golden light)

  ③  Testimonials                        ⑥  Result copy + footnote
      (Deborah, Marcus, Gerald —             ("His handshake got firmer*"
       social proof that escalates)           *this is a pen)

                                         ⑦  CTA + Fine print
                                             (the "order now" close +
                                              fake disclaimers)
```

**The comedy sequence:**

1. **Beat 1 (Hero shot):** Brain registers "luxury product ad." The pen looks expensive. Normal magazine behavior.
2. **Beat 2 (Headline):** "The pen that ended Kevin." The tonal shift. The reader re-evaluates everything. They look back at the pen. It still looks expensive. But now it also looks... threatening.
3. **Beat 3 (Body copy + testimonials):** The 500 office workers stat plays it straight just long enough, then the three testimonials escalate — Deborah is relatable, Marcus is concerning, Gerald is the payoff. Each testimonial portrait shows someone with visible Lifer Ink tattoos, which the reader may or may not recognize as another product from the kit.
4. **Beat 4 (Before/After header):** The format shift to infomercial. "REAL RESULTS. REAL KYLE." signals exactly what's coming — and the reader is already grinning.
5. **Beat 5 (Photos):** The grayscale-to-color transformation. This is the visual comedy peak. The BEFORE is genuinely pathetic. The AFTER is genuinely aspirational. The gap is the joke.
6. **Beat 6 (Result copy):** "Someone held the elevator." The copy sells the transformation with complete sincerity. The footnote is the kicker — a throwaway line at the bottom that rewards close readers.
7. **Beat 7 (CTA + fine print):** "It writes. Among other things." The close. The fine print is the final comedy layer for anyone who reads the small text.

---

## Typography Hierarchy

All styles reference the InDesign paragraph styles from the reference doc. Sizes are locked in the style definitions — don't override them.

| Element | Paragraph Style | Font | Size/Leading | Color | Alignment |
|---------|----------------|------|-------------|-------|-----------|
| Headline | **Ad Headline** | Barlow Condensed Black | 54/50pt | White | Flush left |
| Setup line ("REAL RESULTS...") | **Ad Subhead** | Freight Display Pro Bold Italic | 18/22pt | Gold | Centered |
| Body copy (all paragraphs) | **Ad Body** | Freight Text Pro Book | 11/15pt | White | Flush left |
| Testimonial quotes | **Ad Testimonial** | Freight Text Pro Book Italic | 11/15pt | White | Flush left |
| Testimonial names | **Ad Testimonial Attribution** | IBM Plex Mono Regular | 7.5/10pt | Gold | Flush left |
| Before/After labels | **Callout Label** | Barlow Condensed SemiBold | 10/12pt | Signal Orange | Centered above each photo |
| CTA product name | **Ad CTA** | Barlow Condensed Bold | 13/15pt | Gold | Centered |
| CTA "by Elevate Co." | **Ad Subhead** (scaled) | Freight Display Pro Bold Italic | 14/17pt | Gold | Centered |
| CTA tagline | **Ad Body** (italic override) | Freight Text Pro Book Italic | 11/15pt | White | Centered |
| Footnote | **Ad Fine Print** | IBM Plex Mono Light | 6/8pt | Warm Gray 40 | Flush left |
| Disclaimers | **Ad Fine Print** | IBM Plex Mono Light | 5.5/7.5pt | Warm Gray 40 | Flush left |

### Character Styles in Play

| Inline text | Character Style | When |
|-------------|----------------|------|
| "Executive Tactical Stylus" in body copy | **Product Name** | Barlow Condensed SemiBold, +30 tracking |
| Asterisk/superscript on "firmer*" | **Superscript** | Links to footnote |
| "FOR OFFICE USE ONLY" if referenced | **Monospace** | IBM Plex Mono |

---

## Fine Print / Disclaimer Copy

This is the last TBD copy element. Written in the same enthusiastic corporate-sanitized voice. Set in **Ad Fine Print** (IBM Plex Mono Light, 5.5/7.5pt, Warm Gray 40) at the bottom of Page 11.

> Results not typical. Kyle's experience is based on a 14-day uncontrolled workplace field study (n=1) conducted without IRB approval, informed consent, or Kevin's awareness. Elevate Co. makes no guarantee that the Executive Tactical Stylus will expand your personal space, improve your performance reviews, or cause coworkers to leave flowers. Some users report increased confidence, unsolicited respect, and a marked decline in office supply theft. These outcomes have not been evaluated by the FDA, OSHA, HR, or anyone with institutional authority. The Executive Tactical Stylus is a writing instrument. Any additional functionality is the user's responsibility and Elevate Co.'s plausible deniability. Do not point at coworkers. Do not explain why you're holding it that way. Do not use during active mediation. If you experience boundary-related satisfaction lasting more than four hours, consult your manager. Not recommended for open floor plans without a clearly established reputation. Individual results may vary. Kevin's will not. The term "Cubicle Shank" is a registered workplace colloquialism and does not reflect the product's intended use, which is writing. Mostly writing. By purchasing this product, you acknowledge that Elevate Co. is not liable for any shift in office dynamics, power structures, or elevator-holding behavior. For questions, comments, or incident reports, contact: legal@elevateco.com (not monitored).

---

## Midjourney Image Prompts

### IMAGE 1: Hero Product Shot (Left page, top 55%)

The Cubicle Shank floating on black, dramatic side-lighting. This is the money shot — the first thing the reader sees.

**Prompt:**
```
A single matte black tactical pen floating against a pure black background, dramatic side-lighting from the left casting a sharp highlight along the aircraft-grade aluminum barrel, tungsten carbide tip catching a point of light, subtle gold-toned reflection on the lower surface, the words "FOR OFFICE USE ONLY" faintly engraved along the barrel, pocket clip visible, the pen angled slightly diagonal from lower-left to upper-right suggesting forward motion, professional product photography, luxury goods advertising, studio lighting with one key light and subtle fill, the pen occupies the center of frame with generous negative space above and below for text overlay, shallow depth of field with the tip in razor focus and the cap end softening slightly --no cartoon, illustration, drawing, painting, sketch, anime, manga, chibi, stylized, flat color, cel shading, vector art, mid-century modern, geometric faces, angular faces, pointed noses, exaggerated proportions, caricature, waxy skin, plastic skin, airbrushed skin, unnaturally smooth skin, symmetrical face, perfect features, model-beautiful, glamour lighting, fashion photography, Instagram filter, color grading, teal and orange, desaturated, oversaturated, HDR, lens flare, vignette, film grain for style, collage, composite, split screen, floating elements, text overlay, watermark, stock photo watermark, Getty Images watermark --ar 4:3 --s 250 --v 6.1
```

**Art direction notes:** The pen should look like it costs $400. The lighting should make it feel like a weapon that happens to write. The negative space above and below is critical — the headline and testimonials need room. If the pen reads "luxury" first and "threat" second, you nailed it.

---

### IMAGE 2: Before Kyle (Right page, left half of Before/After pair)

Kyle BEFORE the Cubicle Shank. Grayscale. Pathetic. Full infomercial "are YOU tired of..." energy.

**Prompt:**
```
A young male office intern in his mid-20s sitting hunched at a cluttered cubicle desk, terrible posture with rounded shoulders and defeated expression, someone's arm reaching across him from behind to grab a stapler off his desk, a crumpled sticky note reading "INTERN" stuck to the corner of his computer monitor, a chewed-up cheap plastic Bic pen sitting on the desk, his lunch bag being pulled away by another hand in the background, fluorescent overhead lighting casting unflattering shadows under his eyes, the cubicle walls are beige and low, he's wearing a wrinkled short-sleeve dress shirt and crooked tie, his body language communicates complete resignation, the scene is shot in desaturated grayscale with slightly blue-gray tones like an infomercial "before" segment, documentary-style candid photography, office environment, wide enough to show the full cubicle context, shot from slightly above eye level to make him look smaller --no cartoon, illustration, drawing, painting, sketch, anime, manga, chibi, stylized, flat color, cel shading, vector art, mid-century modern, geometric faces, angular faces, pointed noses, exaggerated proportions, caricature, waxy skin, plastic skin, airbrushed skin, unnaturally smooth skin, symmetrical face, perfect features, model-beautiful, glamour lighting, fashion photography, Instagram filter, color grading, teal and orange, oversaturated, HDR, lens flare, vignette, film grain for style, collage, composite, split screen, floating elements, text overlay, watermark, stock photo watermark, Getty Images watermark --ar 3:4 --s 250 --v 6.1
```

**Art direction notes:** This MUST be grayscale/desaturated — the color contrast with the AFTER photo is the visual punchline. The reaching arms invading his space are critical storytelling details. Kyle should look like a man who has accepted that his lunch will be stolen. The angle from slightly above makes him look small and powerless. This is the "before" shot in a weight-loss ad, but for dignity.

---

### IMAGE 3: After Kyle (Right page, right half of Before/After pair)

Kyle AFTER the Cubicle Shank. Full color. Golden light. Transformation complete.

**Prompt:**
```
A young male office intern in his mid-20s sitting confidently leaned back at the same cubicle desk, now in full warm rich color with golden hour-style lighting streaming from the left, his posture is relaxed and confident with one arm resting on the desk, a sleek matte black tactical pen placed prominently on the desk in front of him like a scepter, the cubicles around him are visibly EMPTY with chairs pushed away, a small bouquet of flowers has been placed on the corner of his desk, his lunch sits untouched and complete on the other side, his same intern badge is still visible but his expression is calm confident serene, he's wearing the same clothes as the before photo but they somehow look better now, the same short-sleeve dress shirt and tie but straightened up, the lighting is warm and aspirational like a lifestyle magazine, shot from slightly below eye level to make him look authoritative, the environment has changed around him not him, professional lifestyle photography, warm color grading, aspirational --no cartoon, illustration, drawing, painting, sketch, anime, manga, chibi, stylized, flat color, cel shading, vector art, mid-century modern, geometric faces, angular faces, pointed noses, exaggerated proportions, caricature, waxy skin, plastic skin, airbrushed skin, unnaturally smooth skin, symmetrical face, perfect features, model-beautiful, fashion photography, Instagram filter, teal and orange, desaturated, HDR, lens flare, vignette, film grain for style, collage, composite, split screen, floating elements, text overlay, watermark, stock photo watermark, Getty Images watermark --ar 3:4 --s 250 --v 6.1
```

**Art direction notes:** The color contrast with the BEFORE photo is EVERYTHING. This should feel like someone turned on the sun. Same guy, same desk, same clothes, same intern badge — but the world treats him differently now. The empty cubicles around him are the funniest detail. The flowers are the second funniest. The pen sitting on the desk like Excalibur is the visual anchor. Camera angle from slightly BELOW makes Kyle look like a king, contrasting the above-angle in the BEFORE shot.

---

### IMAGE 4: Deborah — Testimonial Portrait

Accounts Payable. Doesn't share anymore. Visible Lifer Ink tally marks on her forearm.

**Prompt:**
```
A professional headshot of a woman in her late 40s, Deborah from Accounts Payable, photographed from the chest up against a dark charcoal background, she has a calm confident expression that borders on intimidating, slight knowing smile, wearing a sensible cardigan over a blouse with reading glasses pushed up on her head, her arms are crossed with her forearms visible and she has small temporary tattoo tally marks visible on her inner forearm — five small tally marks in black ink like a prison wall counting, also a small temporary tattoo of a clock with no hands near her wrist, professional corporate headshot lighting with a subtle warm key light, the kind of photo you'd see on a company website but with an edge to it, she looks like someone who has BEEN through it, sharp eyes, professional magazine portrait photography, editorial quality --no cartoon, illustration, drawing, painting, sketch, anime, manga, chibi, stylized, flat color, cel shading, vector art, mid-century modern, geometric faces, angular faces, pointed noses, exaggerated proportions, caricature, waxy skin, plastic skin, airbrushed skin, unnaturally smooth skin, symmetrical face, perfect features, model-beautiful, glamour lighting, fashion photography, Instagram filter, color grading, teal and orange, desaturated, oversaturated, HDR, lens flare, vignette, film grain for style, collage, composite, split screen, floating elements, text overlay, watermark, stock photo watermark, Getty Images watermark --ar 1:1 --s 250 --v 6.1
```

**Art direction notes:** Deborah should look like the person in Accounts Payable who nobody messes with. Not mean — just... settled. The tally mark tattoos on her forearm are a subtle cross-reference to the Lifer Ink product (pages 16). The clock-with-no-hands tattoo near her wrist is a bonus detail for readers who flip back. The square crop keeps the portrait compact for the testimonial card layout.

---

### IMAGE 5: Marcus — Testimonial Portrait

IT Support. His therapist said boundaries. Visible Lifer Ink barcode tattoo on his neck.

**Prompt:**
```
A professional headshot of a man in his early 30s, Marcus from IT Support, photographed from the chest up against a dark charcoal background, he has a pleasant expression that doesn't quite reach his eyes, wearing a company polo shirt with a lanyard and ID badge, his head is tilted very slightly with a mild therapeutic smile like someone who has been to a lot of therapy and is doing their best, a small temporary tattoo barcode is visible on the side of his neck just above the collar, also a small temporary tattoo loading spinner icon near his collarbone, professional corporate headshot lighting with a subtle cool key light, the kind of photo from a corporate directory but he looks like he's holding it together, professional magazine portrait photography, editorial quality --no cartoon, illustration, drawing, painting, sketch, anime, manga, chibi, stylized, flat color, cel shading, vector art, mid-century modern, geometric faces, angular faces, pointed noses, exaggerated proportions, caricature, waxy skin, plastic skin, airbrushed skin, unnaturally smooth skin, symmetrical face, perfect features, model-beautiful, glamour lighting, fashion photography, Instagram filter, color grading, teal and orange, desaturated, oversaturated, HDR, lens flare, vignette, film grain for style, collage, composite, split screen, floating elements, text overlay, watermark, stock photo watermark, Getty Images watermark --ar 1:1 --s 250 --v 6.1
```

**Art direction notes:** Marcus is the "this is fine" meme in human form. He looks pleasant. He looks professional. Something about the eyes says otherwise. The barcode tattoo on his neck is visible but not dominant — it's a detail that rewards a second look. The loading spinner tattoo near his collarbone is subtle. The therapy line in his quote pairs perfectly with his expression: he IS trying. The pen just gave him... options.

---

### IMAGE 6: Gerald — Testimonial Portrait

Facilities. Nineteen years. They call him "Sir" now. Visible Lifer Ink "LIFER" text and heavy tally marks.

**Prompt:**
```
A professional headshot of a man in his early 60s, Gerald from Facilities, photographed from the chest up against a dark charcoal background, he has the calm weathered confidence of someone who has been at the same company for nineteen years, silver-gray hair buzzed short, wearing a facilities maintenance uniform or work polo with his name embroidered on it, strong forearms crossed with heavy temporary tattoo tally marks covering much of his inner forearm — at least fifteen individual tally marks, also the word "LIFER" in bold block letters tattooed across his knuckles on one hand, and a small paper airplane tattoo near his wrist, he has deep smile lines and steady eyes, he looks like the most respected person in any building, professional magazine portrait photography, warm key light, editorial quality, the kind of portrait where you immediately trust this person --no cartoon, illustration, drawing, painting, sketch, anime, manga, chibi, stylized, flat color, cel shading, vector art, mid-century modern, geometric faces, angular faces, pointed noses, exaggerated proportions, caricature, waxy skin, plastic skin, airbrushed skin, unnaturally smooth skin, symmetrical face, perfect features, model-beautiful, glamour lighting, fashion photography, Instagram filter, color grading, teal and orange, desaturated, oversaturated, HDR, lens flare, vignette, film grain for style, collage, composite, split screen, floating elements, text overlay, watermark, stock photo watermark, Getty Images watermark --ar 1:1 --s 250 --v 6.1
```

**Art direction notes:** Gerald is the emotional anchor. His quote is the longest and the funniest — the testimonial that lands hardest. He should look like the guy who runs the building. Not management — FACILITIES. The guy who actually knows where everything is and how everything works. Nineteen years of tally marks on his forearm tells a story. "LIFER" across his knuckles is the cross-sell moment — readers will recognize these from the Lifer Ink ad on page 16. The paper airplane tattoo ("Flight risk") is a bonus Easter egg.

---

## Image Summary

| # | Image | Location | Aspect Ratio | Notes |
|---|-------|----------|-------------|-------|
| 1 | Hero product shot | Left page, top 55% | 4:3 (landscape) | Floating pen, dramatic lighting, negative space for text |
| 2 | Before Kyle | Right page, left of pair | 3:4 (portrait) | Grayscale/desaturated, pathetic, invaded personal space |
| 3 | After Kyle | Right page, right of pair | 3:4 (portrait) | Full warm color, confident, empty cubicles, flowers |
| 4 | Deborah portrait | Left page, testimonial card | 1:1 (square) | Arms crossed, tally marks + clock tattoos |
| 5 | Marcus portrait | Left page, testimonial card | 1:1 (square) | Therapeutic smile, barcode + spinner tattoos |
| 6 | Gerald portrait | Left page, testimonial card | 1:1 (square) | Facilities veteran, LIFER knuckles + heavy tallies |

---

## Design Notes

### Why this layout works

**Left page = Product ad format.** The reader's brain categorizes this instantly: hero shot at top, headline below, testimonials at bottom. It's the format of every luxury product ad in every magazine. That familiarity is critical — the comedy depends on the reader processing "this is an ad" BEFORE processing "this is an ad for a shank."

**Right page = Infomercial format.** The format shift from luxury ad to Before/After transformation is itself a joke. The reader's brain shifts from "Montblanc ad" to "weight loss infomercial" — and both formats are played completely straight. The grayscale-to-color visual gag lands immediately, even before reading the copy.

**The spine as a format break.** The physical gutter between pages 10 and 11 acts as a natural pause. The reader finishes the testimonials, turns their attention right, and encounters a new format. This prevents the spread from feeling like one long block of copy and gives the Before/After its own stage.

### Cross-sell integration

The Lifer Ink tattoos visible on Deborah, Marcus, and Gerald serve three purposes:
1. **Visual interest** — They make the portraits more memorable and specific
2. **Cross-reference** — Readers who get to the Lifer Ink ad on page 16 will recognize the tattoos and flip back
3. **World-building** — These people LIVE in this world. They've been here long enough to have ink. It makes the testimonials feel more real within the magazine's universe.

### Color strategy on matte black

- **White** for all primary reading text (headlines, body, testimonial quotes)
- **Gold** for hierarchy markers (attribution names, CTA product name, "REAL RESULTS" setup, decorative rules)
- **Signal Orange** for functional labels only (BEFORE/AFTER tags)
- **Warm Gray 40** for fine print and footnotes — visible enough to read but clearly subordinate
- The only full-color images are the AFTER Kyle and the three portraits. The BEFORE Kyle stays grayscale. The hero product shot is essentially monochromatic (black pen, gold highlights). This creates a deliberate color map where warmth = confidence.

### Spacing principles

- **Headline to body copy:** Tight (12-18pt space). They're a unit.
- **Body copy to testimonials:** Medium (24-30pt space). Let the reader breathe before the next section.
- **Between testimonial cards:** 12pt horizontal, 12pt vertical gaps. Tight enough to read as a group, loose enough to be individual cards.
- **Before/After photos:** 6-12pt gap between them. They should feel like a diptych — two panels of one story.
- **Result copy to CTA:** 24-30pt + gold rule. Clear section break. The CTA is a new unit.
- **CTA to fine print:** 18pt. The fine print is the last thing on the page and needs breathing room above it but can sit close to the bottom margin.

---

## Production Checklist

- [ ] Assign D-Spread Ad master page to pages 10-11
- [ ] Generate all 6 images via Midjourney
- [ ] Place hero product shot — top 55% of left page, full bleed to left/top/right margins
- [ ] Set headline in Ad Headline, flush left
- [ ] Set body copy in Ad Body, flush left
- [ ] Build 3 testimonial card frames with image + quote + attribution
- [ ] Place Deborah and Marcus cards side by side, Gerald wider below
- [ ] Set "REAL RESULTS. REAL KYLE." in Ad Subhead, centered
- [ ] Place Before/After photos side by side, add BEFORE/AFTER labels in Callout Label
- [ ] Confirm BEFORE photo is grayscale, AFTER photo is full warm color
- [ ] Set result copy in Ad Body
- [ ] Set footnote in Ad Fine Print
- [ ] Draw thin gold rule between result section and CTA
- [ ] Build CTA block: product name (Ad CTA), byline (Ad Subhead), tagline (Ad Body italic), availability (Ad Fine Print)
- [ ] Set disclaimer copy in Ad Fine Print at bottom of right page
- [ ] Proof all text against locked copy doc
- [ ] Verify no text overlaps the 0.25" inside margin gutter zone
- [ ] Check that cross-gutter elements (if any) align properly across the spine
- [ ] Export proof PDF at 300dpi with bleed marks

---

## Changelog

| Version | Date | Changes |
|---------|------|---------|
| v1 | May 25, 2026 | Initial layout spec. Full page architecture, visual flow, typography hierarchy, 6 Midjourney prompts, fine print copy, production checklist. |
