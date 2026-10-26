# Format Reference F: Back Cover
## Page 30 | ELEVATE Magazine

**Version:** v1
**Last Updated:** May 25, 2026
**Status:** REFERENCE — Ready for copy development and InDesign build.
**Companion docs:** `product/design/ELEVATE-MAGAZINE-INDESIGN-REFERENCE.md` (InDesign system), `product/copy/magazine-structure-v1.md` (page plan)

---

## 1. Overview

Page 30 is the back cover of ELEVATE Magazine. It is the last thing the reader sees.

After the dramatic Mug Shot Reveal on pages 28-29 (gold headline on matte black, moody product photography, emotional climax), the reader turns the page and lands on cream-colored fine print. The tonal shift is deliberate. This page is the credits after the movie. The exhale after the punchline. The denouement.

The content is dense, small, and functional-looking: a subscription offer, a handful of classified ads, and a wall of legal disclaimers. All three sections are comedy disguised as back matter. The subscription gag subverts expectations. The classified ads are one-liner jokes in tiny type. The legal text is bonus material for anyone who bothers to squint. The humor is a reward for close inspection, not a demand for attention.

### Real-World Back Cover References

- **The New Yorker** back page: Often a full-page ad, sometimes classifieds. Dense, text-forward, clearly "the back of the magazine."
- **McSweeney's** back cover: Legal text played for comedy. The fine print IS the content.
- **The Onion** (print edition): Classified ad parodies. Tiny fake listings that reward reading.
- **WIRED / Vanity Fair** back matter: Subscription offers, advertiser indexes, and fine print that all share a page. Tight columns, small type, dense but organized.
- **Any magazine subscription card:** The cardstock insert or printed box that says "Subscribe today! 12 issues for $24.99." A recognizable format the reader's brain will auto-categorize.

The goal: a page that looks like it belongs at the back of a real magazine at first glance, then delivers comedy at every level of inspection.

---

## 2. Layout Architecture

### InDesign Setup

| Property | Value |
|----------|-------|
| Master page | **F-Back Cover** |
| Background | Cream (#F5F0E8) |
| Columns | 4 columns, 0.125" gutter |
| All margins | 0.625" |
| Running header | None |
| Page number | Yes (bottom, outside corner) |
| Live area | 7.25" wide x 9.75" tall |

### The 4-Column Grid

The F-Back Cover master uses a narrower 4-column grid instead of the 6-column editorial grid. This is intentional. Four columns at 0.125" gutters produce column widths of approximately 1.72" each. This suits the dense, small-type content on this page:

- **Classified ads** run 1 or 2 columns wide, producing the narrow-column look of real classified sections.
- **Subscription block** spans all 4 columns as a single centered element.
- **Legal fine print** spans all 4 columns as a single text block, set justified.

The narrower columns give the classifieds their authentic compressed feel without needing a separate column structure.

### Page Wireframe

```
┌──────────────────────────────────────────┐
│                 0.625" margin             │
│                                          │
│  ┌────────────────────────────────────┐  │
│  │        SUBSCRIBE TO ELEVATE        │  │  ← Classified Header (18pt)
│  │────────────────────────────────────│  │  ← Rule below
│  │                                    │  │
│  │  Subscribe to ELEVATE Magazine:    │  │  ← Body (12pt)
│  │  $0/year. You're already           │  │
│  │  subscribed. You can't             │  │
│  │  unsubscribe. This is your         │  │
│  │  life now.                         │  │
│  │                                    │  │
│  └────────────────────────────────────┘  │
│                                          │
│  ┌────────────────────────────────────┐  │
│  │          CLASSIFIEDS               │  │  ← Classified Header (18pt)
│  │────────────────────────────────────│  │  ← Rule below
│  │                                    │  │
│  │  ┌─────────┐    ┌─────────┐       │  │
│  │  │ AD #1   │    │ AD #2   │       │  │  ← 2-column layout
│  │  │ Title   │    │ Title   │       │  │     (or 3 ads stacked
│  │  │ Body    │    │ Body    │       │  │      across 2 or 4 cols)
│  │  │ text    │    │ text    │       │  │
│  │  └─────────┘    └─────────┘       │  │
│  │                                    │  │
│  │  ┌─────────────────────────┐      │  │
│  │  │ AD #3                   │      │  │
│  │  │ Title + Body text       │      │  │
│  │  └─────────────────────────┘      │  │
│  │                                    │  │
│  └────────────────────────────────────┘  │
│                                          │
│  ┌────────────────────────────────────┐  │
│  │  Legal fine print text. Dense      │  │  ← Legal Fine Print (5.5pt)
│  │  justified monospace. Multiple     │  │     Full-width block
│  │  sentences of comedy disclaimers   │  │
│  │  that reward close reading. This   │  │
│  │  section fills the remaining       │  │
│  │  space at the bottom of the page.  │  │
│  │  It should feel like a wall of     │  │
│  │  tiny institutional text.          │  │
│  └────────────────────────────────────┘  │
│                                          │
│  Photo credits         (Photo Credit) 30 │  ← Photo Credit + Folio
│                                          │
└──────────────────────────────────────────┘
```

### Vertical Space Allocation (approximate)

| Section | Approximate Height | % of Live Area |
|---------|-------------------|----------------|
| Subscription block | 1.5-2.0" | ~18% |
| Classifieds section | 2.5-3.5" | ~30% |
| Legal fine print | 3.0-4.0" | ~35% |
| Photo credits + page number | 0.5-0.75" | ~6% |
| Spacing between sections | ~1.0" total | ~11% |

The legal fine print is the largest section. It fills whatever vertical space remains after the subscription block and classifieds are placed. This is correct — the fine print is a wall of tiny text, and its density is part of the joke.

---

## 3. Element-by-Element Specifications

### A. Subscription Block (Top of Page)

The subscription gag sits at the top of the page, spanning all 4 columns. It reads like a real magazine subscription offer before the comedy registers.

| Element | Paragraph Style | Notes |
|---------|----------------|-------|
| "SUBSCRIBE TO ELEVATE" header | **Classified Header** | 18/18pt, Barlow Condensed Black, Matte Black, rule below |
| Subscription body text | **Body** | 12/15pt, Freight Text Pro, Charcoal |

**Content structure:**

```
SUBSCRIBE TO ELEVATE
────────────────────────────────
Subscribe to ELEVATE Magazine: $0/year. You're already
subscribed. You can't unsubscribe. This is your life now.
```

The header uses the **Classified Header** style, which includes a 1pt rule below in Matte Black with 6pt offset. This rule visually separates the header from the body text and signals "section start" to the reader.

The body text is set in the standard **Body** style (Freight Text Pro Book, 12/15pt, Charcoal). At this size it reads clearly and looks like normal magazine copy — which is necessary for the gag to work. The reader must process "subscription offer" before they process "$0/year... you can't unsubscribe."

**Spacing:** 18pt space after the subscription block before the classifieds section begins.

### B. Classified Ads Section (Middle of Page)

The classifieds section contains the "CLASSIFIEDS" header and 2-3 individual fake classified advertisements.

| Element | Paragraph Style | Notes |
|---------|----------------|-------|
| "CLASSIFIEDS" header | **Classified Header** | 18/18pt, Barlow Condensed Black, Matte Black, rule below |
| Individual ad titles | **Classified Ad Title** | 10/12pt, Barlow Condensed SemiBold, all caps, Matte Black |
| Individual ad body text | **Classified Ad Body** | 8/11pt, Freight Text Pro Book, Charcoal |

**Layout:** The classified ads sit within the 4-column grid. Each ad occupies 1-2 columns wide. Two ads can sit side by side across the 4 columns (2 columns each), or a shorter ad can take 1 column while a longer one takes 2-3. The exact arrangement depends on copy length, but the target aesthetic is a tight grid of small text that looks busy and functional.

**Separators between ads:** Use a 0.5pt rule in Warm Gray 40 between ads, or leave 12pt vertical space. Do not use heavy borders. Real classifieds rely on whitespace and typographic hierarchy to separate listings, not box borders.

**Ad structure (each ad):**

```
TITLE OF CLASSIFIED AD          ← Classified Ad Title (10/12pt, all caps)
Body text of the classified ad   ← Classified Ad Body (8/11pt)
describing some absurd office
service in 2-3 lines.
```

### C. Legal Fine Print (Bottom of Page)

The legal disclaimer block fills the bottom third (or more) of the page. It spans all 4 columns as a single justified text block.

| Element | Paragraph Style | Notes |
|---------|----------------|-------|
| Legal text | **Legal Fine Print** | 5.5/7.5pt, IBM Plex Mono Light, Warm Gray 80 on cream bg |

The legal text is set justified with last line left-aligned. Hyphenation is on. This produces the dense, institutional look of real magazine fine print or pharmaceutical disclaimers. The text should form a solid rectangle of tiny monospace type.

**Separation from classifieds:** A 0.5pt rule in Warm Gray 40 across the full text width, or 18-24pt of vertical space. The legal block should feel like a distinct zone — the reader's eye should register "fine print" as a different texture from the classifieds above.

### D. Photo Credits (Bottom)

A single line or short block of photo credits for the entire magazine, placed just above the page number.

| Element | Paragraph Style | Notes |
|---------|----------------|-------|
| Credits | **Photo Credit** | 6.5/8pt, IBM Plex Mono Light, Warm Gray 40 |

Set flush left, one line. Example: `All photography: Elevate Co. Visual Communications Division.`

### E. Page Number

The folio is placed by the F-Back Cover master page at the bottom outside corner (bottom right, since page 30 is a recto page). Set in the **Folio** style (Barlow Condensed SemiBold, 9/9pt, Warm Gray 80).

---

## 4. Typography at Small Scale

The main technical challenge on this page is making 5.5pt and 8pt text legible on a cream background in print. Every other page in the magazine uses 9.5pt+ for its smallest reading text. This page goes much smaller.

### Legal Fine Print (5.5/7.5pt IBM Plex Mono Light)

5.5pt is at the edge of print legibility. It works here because:

1. **IBM Plex Mono Light** was designed for screen and print readability at small sizes. Its open counters, generous x-height relative to cap height, and consistent stroke weight make it one of the best monospace faces for fine print.
2. **7.5pt leading** on 5.5pt type gives a leading ratio of 1.36x. This is generous for text this small and prevents the lines from visually collapsing into each other.
3. **Cream background** reduces glare compared to pure white. Dense small text on cream stock is easier on the eye than on bright white — the warm tint softens the contrast slightly.
4. **Warm Gray 80 color** (K:50 equivalent) rather than full Matte Black. This reduces the contrast ratio slightly, which at 5.5pt is desirable — it prevents the text from looking like a harsh stamp of ink on paper while remaining readable. Do not go lighter than Warm Gray 80 for the legal text. Warm Gray 40 would be too faint at this size.

**InDesign settings for legibility:**

| Setting | Value | Why |
|---------|-------|-----|
| Tracking | +10 | Opens up letter-spacing slightly. Monospace fonts at 5.5pt can feel cramped without it. |
| Hyphenation | ON | Justified text at narrow widths needs hyphenation to avoid rivers of white space. |
| Word spacing | 85% / 100% / 120% | Tighter min/max than default prevents ugly gaps in justified small text. |
| Align to baseline grid | OFF | At 7.5pt leading, this text will not align to the 15pt baseline grid. Let it flow freely. |

**Pre-press check:** At 5.5pt, ink coverage per character is minimal. On glossy stock with cream base, verify that the printed text achieves at least 3% ink coverage in the lightest strokes of the Light weight. If IBM Plex Mono Light prints too faintly at 5.5pt during proofing, switch to IBM Plex Mono Regular and reduce to 5pt/7pt to compensate for the heavier stroke weight.

### Classified Ad Body (8/11pt Freight Text Pro Book)

8pt is small but well within standard print legibility for serif body text. Freight Text Pro has a high x-height and generous counters that keep it readable at this size.

| Setting | Value | Why |
|---------|-------|-----|
| Tracking | +5 | Marginal opening. Freight Text Pro reads well at 8pt without much help. |
| Hyphenation | ON | Short column widths in the classifieds grid make hyphenation necessary. |
| Align to baseline grid | OFF | 11pt leading does not align to the 15pt grid. |

### Classified Ad Title (10/12pt Barlow Condensed SemiBold)

10pt all-caps Barlow Condensed is punchy and legible. The SemiBold weight prevents the condensed letterforms from looking too thin at small size. At 10pt, Barlow Condensed has enough stroke weight to print cleanly.

---

## 5. Classified Ad Design

### How Real Classifieds Look

Magazine classified sections share these conventions:

- **Very small type.** 7-8pt is standard for classified body text. The smallness is the point — classifieds pack maximum information into minimum space.
- **Narrow columns.** Real classifieds use 5-7 narrow columns per page in newspapers, or 3-4 in magazines. Our 4-column grid is appropriate for a single-page classified section.
- **Category headings.** Bold or shaded headers group listings by type. "SERVICES," "WANTED," "FOR SALE." We use the **Classified Header** style for "CLASSIFIEDS" and the **Classified Ad Title** style for individual ad headers.
- **Minimal decoration.** Simple hairline rules or whitespace between listings. No borders, shadows, or graphic embellishments. The density itself is the visual identity.
- **Tight vertical spacing.** Listings are stacked close together. The section should feel busy and compressed.
- **Justified or flush-left text.** Real classifieds are almost always flush left within their narrow columns.

### Our Classified Section

We have 2-3 fake classified ads. This is a small section — not a full page of classifieds like a newspaper. The goal is to evoke the classified format with enough entries to feel like a real section, but few enough that each ad is a distinct comedy beat.

**Layout options (pick one during build):**

**Option A — Two columns, stacked:**
```
┌──────────────────┐  ┌──────────────────┐
│ AD #1            │  │ AD #2            │
│ Title + 2-3 lines│  │ Title + 2-3 lines│
└──────────────────┘  └──────────────────┘
┌──────────────────────────────────────────┐
│ AD #3 — spanning full width if longer    │
└──────────────────────────────────────────┘
```

**Option B — Three equal columns:**
```
┌────────────┐ ┌────────────┐ ┌────────────┐
│ AD #1      │ │ AD #2      │ │ AD #3      │
│ Title      │ │ Title      │ │ Title      │
│ + body     │ │ + body     │ │ + body     │
└────────────┘ └────────────┘ └────────────┘
```

Option A is recommended. It uses the 4-column grid naturally (2 columns per ad for the top pair, 4 columns for the wider bottom ad) and creates visual variety.

### Separators

Between classified ads, use one of:
- A 0.5pt hairline rule in Warm Gray 40
- 12pt vertical whitespace
- Both (rule + 6pt space above and below)

Between the "CLASSIFIEDS" header and the first ad, the rule below the **Classified Header** style provides the visual break. Add 12pt space after the rule before the first ad title.

---

## 6. The Subscription Gag

### Format Strategy

The subscription block must read as a real subscription offer at first glance. The reader's brain should categorize it as "oh, the subscription page" before the content registers. This delay between format recognition and content comprehension is how the joke works.

**What makes it look real:**

1. **Section header with rule below.** "SUBSCRIBE TO ELEVATE" in the **Classified Header** style mirrors real magazine subscription headers.
2. **Standard body copy size.** The subscription text is set in 12/15pt **Body** style — the same size as editorial text throughout the magazine. It does not look like fine print or a throwaway. It looks like something you are supposed to read.
3. **Price format.** "$0/year" uses the same format as "$24.99/year" or "6 issues for $19.99." The reader's eye scans the number before processing the value.
4. **Positioning at page top.** Subscription offers typically appear in the front or back matter of a magazine. Placing it at the top of the back cover is the expected location.

**What makes it funny:**

The comedy is in the escalation: "$0/year" (odd but okay) to "You're already subscribed" (wait) to "You can't unsubscribe" (there it is) to "This is your life now" (the kicker). Each sentence tightens the trap. The format's banality makes the content land harder.

**Do not:**
- Set the subscription text in a special display style. It should look like normal copy.
- Add graphics, borders, or visual emphasis to the subscription block. The joke depends on it looking unremarkable.
- Use italic or bold for the punchline sentences. The flat delivery is the delivery.

---

## 7. Comedy Integration

This page has three comedy layers operating at three different reading distances.

### Layer 1 — Glance Distance (arm's length)

At a glance, the reader sees: cream page, section headers, dense columns of small text, a block of very tiny text at the bottom. Their brain registers "back of the magazine" and may not read further. This is fine. The page fulfills its structural role as a back cover even if nobody reads it closely.

### Layer 2 — Reading Distance (casual scan)

A reader who scans the headers sees "SUBSCRIBE TO ELEVATE" and "CLASSIFIEDS." If they read the subscription text, they get the "$0/year... you can't unsubscribe" gag. If they scan the classified titles, they get 2-3 absurd one-liner concepts. This is where most of the comedy lives — in the classified ad titles and the subscription copy.

### Layer 3 — Squint Distance (close reading)

A reader who actually reads the 8pt classified body text and the 5.5pt legal fine print gets the densest jokes. The legal disclaimers should be written with the same voice as the ad fine print throughout the magazine (IBM Plex Mono Light, institutional, comedy through specificity). Every sentence rewards the effort of reading it.

### Comedy Voice

This page mixes both Brad modes:

- **Brad Mode 1 (competent product voice):** The classified ads. Dry, specific, institutionally funny. "SERVICES: Professional Lunch Surveillance. Tired of losing your yogurt? We monitor, we document, we don't intervene. That's your job." The humor is in the specificity.
- **Brad Mode 2 (personal brand delusion):** The subscription offer. Brad genuinely believes this magazine deserves subscribers. The "$0/year" is Brad's pricing strategy (he thinks free = accessible). "You can't unsubscribe" is Brad's version of customer retention.
- **Both modes blended:** The legal fine print. The institutional language of Mode 1 with the self-aggrandizing claims of Mode 2.

---

## 8. Pacing Role

### The Sequence: Pages 28-29-30

| Spread | Tone | Background | Type Scale | Energy |
|--------|------|-----------|-----------|--------|
| 28-29 (Mug Shot Reveal) | Dramatic, emotional, luxury | Matte Black | 72pt headline | HIGH |
| 30 (Back Cover) | Quiet, dense, reward-reading | Cream | 5.5-18pt | LOW |

The back cover provides an essential cooldown. After the Mug Shot Reveal — which is the emotional climax of the magazine, with its gold-on-black headline, moody photography, and "You've done your time" payoff — the reader turns the page and lands on... fine print. Cream paper. Tiny text.

This tonal drop is the same thing movies do with credits: the big moment happened, and now you can exhale. But just like how the best movies hide bonus scenes in the credits, this page hides bonus comedy in the fine print.

**The pacing contract:** The reader who turns past the reveal is done with the "experience" of the magazine. They are now browsing. The back cover respects this by not demanding attention. It offers it to anyone who wants it. The subscription gag and classified ads are sitting there quietly, being funny, for anyone who lingers.

---

## 9. Common Pitfalls

### Illegible Fine Print

At 5.5pt, the margin for error is zero. If the legal text is even slightly too light, too tight, or printed on stock with too much texture, it becomes unreadable. Always proof the legal text at actual print size. Do not evaluate 5.5pt text on screen at zoom — print a proof and read it with your eyes.

**Fix:** If proofing reveals legibility problems, bump to 6/8pt (which matches the **Ad Fine Print** style used in product ads). Losing 0.5pt of tinyness is acceptable. Losing readability is not.

### Too-Dense Classified Section

The classified ads should feel dense but organized, not chaotic. If the ads run together into an undifferentiated block of small text, the reader will skip the section entirely.

**Fix:** Ensure clear visual separation between ads. The **Classified Ad Title** style (10/12pt, Barlow Condensed SemiBold, all caps) is significantly heavier than the **Classified Ad Body** style (8/11pt, Freight Text Pro Book). This weight contrast is the primary navigation cue. Supplement with hairline rules or whitespace between ads.

### Forgetting This Is a Comedy Page

The back cover looks functional. It would be easy to treat it as a layout exercise and forget that every line of text on this page is an opportunity for a joke. The subscription copy, every classified ad, and every sentence of legal text should be written (or reviewed) with comedy in mind.

**Fix:** Write the legal fine print last, after the rest of the magazine copy is locked. The fine print can reference specific products, characters, and events from earlier pages. This makes it a payoff for readers who consumed the whole magazine.

### Making It Feel Like an Afterthought

The back cover should look intentional, not like unused space filled with whatever was left over. It carries the same design system (Cream background, Matte Black and Charcoal text, Gold accents on headers, IBM Plex Mono for institutional voice) as every other page.

**Fix:** Apply the same care to typographic hierarchy and spacing as you would to any editorial page. The **Classified Header** style with its rule below, the consistent use of **Classified Ad Title** and **Classified Ad Body**, and the clean transition to **Legal Fine Print** all maintain the magazine's design system.

### Overdesigning the Page

This page should NOT have: decorative borders, graphic elements, icons, images, color blocks, or anything that competes with the text. The aesthetic is deliberately sparse and text-forward. The density of the small text IS the visual identity.

---

## 10. Production Checklist

Build order in InDesign:

- [ ] Assign **F-Back Cover** master page to page 30
- [ ] Verify master page provides: Cream background, 4-column grid (0.125" gutter), 0.625" margins all sides, folio (page number) at bottom outside corner, no running header
- [ ] **Subscription block** — Place text frame spanning all 4 columns at top of page
  - [ ] Set "SUBSCRIBE TO ELEVATE" in **Classified Header** style
  - [ ] Verify rule below appears (1pt, Matte Black, 6pt offset)
  - [ ] Set subscription body text in **Body** style
  - [ ] Add 18pt space after the subscription block
- [ ] **Classifieds section** — Place text frame(s) within the 4-column grid
  - [ ] Set "CLASSIFIEDS" in **Classified Header** style
  - [ ] Set each ad title in **Classified Ad Title** style
  - [ ] Set each ad body in **Classified Ad Body** style
  - [ ] Add 0.5pt Warm Gray 40 hairline rules or 12pt space between ads
  - [ ] Verify 2-3 ads are present and arranged per the layout (Section 5)
- [ ] **Legal fine print** — Place text frame spanning all 4 columns
  - [ ] Set all legal text in **Legal Fine Print** style
  - [ ] Verify justified alignment with last line left
  - [ ] Verify hyphenation is active
  - [ ] Turn OFF baseline grid alignment for this frame
  - [ ] Add a 0.5pt Warm Gray 40 rule or 18pt space above the legal block
- [ ] **Photo credits** — Place single line near bottom
  - [ ] Set in **Photo Credit** style
- [ ] **Final checks**
  - [ ] Verify no text extends into bleed area
  - [ ] Verify page number appears at bottom right (recto page)
  - [ ] Print proof at 100% scale and confirm 5.5pt legal text is legible
  - [ ] Read all text for comedy quality — every line earns its spot
  - [ ] Confirm color usage is limited to: Matte Black, Charcoal, Warm Gray 80, Warm Gray 40, Gold (headers only if desired)
  - [ ] Export proof PDF at 300dpi with bleed marks

---

## Color Palette for This Page

| Swatch | Use |
|--------|-----|
| **Cream** (#F5F0E8) | Page background (from master) |
| **Matte Black** | Classified Header text, Classified Ad Title text |
| **Charcoal** (K:85) | Body text (subscription copy), Classified Ad Body text |
| **Warm Gray 80** (K:50) | Legal Fine Print text |
| **Warm Gray 40** (K:25) | Photo Credit text, hairline rules between sections |
| **Gold** | Optional: section header accents. Use sparingly or not at all. |

This page is deliberately restrained in color. No Signal Orange, no Classified Red, no Purple. The palette is cream, black, charcoal, and gray. This coolness after the warm gold-on-black Mug Shot Reveal reinforces the tonal shift.

---

## Changelog

| Version | Date | Changes |
|---------|------|---------|
| v1 | May 25, 2026 | Initial format reference. Page architecture, element specs, small-text legibility guidance, classified ad design, subscription gag formatting, comedy integration, pacing analysis, production checklist. |
