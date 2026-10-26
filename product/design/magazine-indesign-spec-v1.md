# ELEVATE Magazine — Complete InDesign Setup Specification v1

> **Purpose:** Exact values to punch into InDesign. No ranges, no "approximately." Every value is final unless flagged as a Decision Point.
>
> **Format:** 30-page, 8.5×11" glossy magazine, saddle-stitched
>
> **Design North Star:** "They made a REAL magazine for THIS?"

---

## 1. DOCUMENT SETUP

### Trim & Bleed

| Setting | Value |
|---------|-------|
| Trim Size | 8.5" × 11" (portrait) |
| Bleed | 0.125" (all sides) |
| Slug | 0.25" (all sides — for printer marks, notes) |
| Binding | Saddle-stitch (no spine) |
| Facing Pages | Yes |
| Start Page | 1 (recto / right) |

### Margins

| Margin | Value | Rationale |
|--------|-------|-----------|
| Top | 0.625" (45pt) | Room for running headers |
| Bottom | 0.75" (54pt) | Room for page numbers + breathing |
| Inside (gutter) | 0.75" (54pt) | Saddle-stitch creep compensation |
| Outside | 0.5" (36pt) | Tighter outside for modern editorial feel |

### Column Grid

| Setting | Value |
|---------|-------|
| Columns | 6 |
| Gutter | 0.1667" (12pt / 1 pica) |

**Why 6 columns:** Maximum flexibility. Feature spreads use 2-column body text (3 grid columns each). Product ads can go full-width. Infographics can split into 3 or 6 narrow columns. Sidebar content drops into 2 grid columns. A 6-column grid looks professional and handles every editorial format in this magazine.

### Baseline Grid

| Setting | Value |
|---------|-------|
| Start | 0.625" (top margin) |
| Increment | 13.5pt |
| Relative To | Top of Page |

**Why 13.5pt:** Body copy is 9.5/13.5 (see Paragraph Styles). This keeps all body text locked to grid. Headlines snap to multiples. Pull quotes and sidebars can release from grid when needed.

---

## 2. COLOR SYSTEM

### Core Brand Swatches (Carried Forward)

These are locked from the outer box packaging and Brad's brand DNA. They anchor the magazine's identity.

| Swatch Name | CMYK | Hex (ref) | Use |
|-------------|------|-----------|-----|
| **Elevate Black** | C60 M40 Y40 K100 | #1A1A1A | Rich black — cover, section headers, heavy backgrounds |
| **Elevate Gold** | C8 M20 Y65 K12 | #C5A55A | Brad's signature — rules, accents, Brad's name, folio headers |
| **Cream** | C2 M3 Y8 K0 | #F5F0E8 | Interior page backgrounds (default), pull quote backgrounds |
| **Pure White** | C0 M0 Y0 K0 | #FFFFFF | Reversed text on dark, ad backgrounds, clean section breaks |
| **Brad Purple** | C72 M90 Y0 K10 | #5B2C6F | Sparingly — pull quote borders, Brad Mode 2 accents, TOC accents |
| **Charcoal** | C0 M0 Y0 K85 | #333333 | Primary body text color |
| **K100 Black** | C0 M0 Y0 K100 | #000000 | Small text, hairlines (single black for fine detail) |

### Expanded Magazine Palette (New)

The old booklet was muted. This magazine is vibrant and varied. These additions bring editorial energy while staying inside Brad's "luxury startup" visual taste.

| Swatch Name | CMYK | Hex (ref) | Use |
|-------------|------|-----------|-----|
| **Signal Orange** | C0 M65 Y100 K0 | #E8651A | Product ad CTAs, "ALERT" badges, danger labels, energy moments |
| **Institutional Teal** | C75 M15 Y30 K5 | #2A8C8C | Infographics, data viz, "The Code" decoder spread |
| **Classified Red** | C10 M95 Y85 K5 | #C82333 | "CONFIDENTIAL" stamps, incident reports, warning labels |
| **Steel Blue** | C50 M25 Y10 K15 | #6E8FAD | Real estate listing spread, workspace diagrams, cool-toned features |
| **Warm Gray 80%** | C0 M0 Y0 K80 | #404040 | Secondary text, captions, spec tables |
| **Warm Gray 40%** | C5 M5 Y8 K35 | #A09A8F | Rules/dividers, background tints, subtle structure |
| **Warm Gray 15%** | C3 M3 Y5 K12 | #D9D4CC | Light background tints, sidebar fills, soft separation |
| **Highlight Yellow** | C0 M8 Y55 K0 | #F2D96B | Highlight treatments, "PRO TIP" callouts, secondary gold |

### Section Color Accents

Different sections use the expanded palette as accent over the core palette. This is how real magazines signal "you're in a different section."

| Section | Accent Color | Application |
|---------|-------------|-------------|
| Cover + Masthead/TOC | Elevate Gold + Brad Purple | Brand-heavy pages |
| Editor's Letter (p.3) | Elevate Gold | Brad Mode 2 — personal brand feel |
| Feature Articles (pp.4-9) | Steel Blue | Cool, editorial, informational |
| Product Ads (pp.10-11, 16-17, 22-23) | Signal Orange + Elevate Black | High energy, commercial, CTA-driven |
| Infographic / Decoder (pp.14-15) | Institutional Teal | Data-forward, structured |
| Investigative (pp.18-19) | Classified Red | Redacted documents, evidence bags |
| Fashion Editorial (pp.20-21) | Brad Purple | Aspirational, identity-focused |
| Advice Column (p.24) | Elevate Gold + Warm Gray 15% | Warm, personal, editorial |
| Founder Profile (pp.25-26) | Elevate Gold + Brad Purple | Peak Brad |
| Mug Shot Reveal (pp.28-29) | Elevate Black + Elevate Gold | Premium luxury reveal |
| Fine Print / Back Cover (p.30) | Warm Gray 80% + Classified Red | Legal comedy |

---

## 3. TYPOGRAPHY SYSTEM

### Font Selection

Three font families. This is a real magazine — tight, intentional, no font buffet.

#### Primary Sans-Serif: **Barlow Condensed**

- **Adobe Fonts:** Yes — search "Barlow Condensed"
- **Weights needed:** Light, Regular, Medium, SemiBold, Bold, Black
- **Role:** Headlines, section headers, cover teasers, product ad headlines, navigation, labels
- **Why:** Barlow Condensed is the font Brad would pick after seeing a billionaire's website. It's condensed, confident, slightly aggressive — perfect for a magazine that screams "EXECUTIVE TACTICAL STYLUS" across a two-page spread. It stacks vertically for cover teasers. It sets wide for feature headlines. At small sizes it makes clean labels. Montserrat was fine for the old booklet, but it's too round and friendly for a vibrant magazine. Barlow Condensed has editorial authority.
- **Why not Montserrat:** Montserrat reads "startup pitch deck." Barlow Condensed reads "magazine newsstand." The format changed; the font should follow.

#### Secondary Serif: **Freight Text Pro**

- **Adobe Fonts:** Yes — search "Freight Text Pro"
- **Weights needed:** Book, Book Italic, Medium, Bold, Bold Italic
- **Role:** Body copy, pull quotes, Brad quotes, editor's letter, feature text, advice column
- **Why:** Freight Text is a true text face — designed for sustained reading at 9-10pt, which is exactly what a 30-page magazine demands. Playfair Display was a display serif (big headlines, short bursts). It's beautiful at 36pt but punishing at 9pt over 30 pages. Freight Text has the warmth and character Brad would choose ("it looks editorial") while actually functioning as body copy. High x-height, generous counters, readable at small sizes.
- **Why not Playfair Display:** Playfair was designed for headlines, not body text. Its extreme stroke contrast (thick/thin) makes it hard to read at body copy sizes, especially in print. For a 12-page booklet with minimal body text, it worked. For a 30-page magazine with feature articles, advice columns, and dense copy, you need a text-optimized serif.

#### Accent Monospace: **IBM Plex Mono**

- **Adobe Fonts:** Yes — search "IBM Plex Mono"
- **Weights needed:** Light, Regular, Medium, Bold
- **Role:** Data tables, classified/redacted text, fine print, spec sheets, technical labels, evidence report
- **Why:** IBM Plex Mono looks institutional without looking cheap. It has that "internal document" energy that fits the office-as-prison world. Better spacing and readability than Space Mono at small sizes. Brad would pick it because it looks "classified."

#### Display Serif (Optional — Headlines Only): **Freight Display Pro**

- **Adobe Fonts:** Yes — search "Freight Display Pro"
- **Weights needed:** Bold, Black
- **Role:** Feature article headlines ONLY (the big, dramatic ones). Not body copy. Not subheads.
- **Why:** This is Freight Text's display sibling. When a feature headline needs to be 48pt+ with dramatic stroke contrast, Freight Display delivers. It's what Playfair Display was doing in the old booklet, but from the same family as the body copy, so the system stays cohesive.

### Font System Summary

| Role | Font | Weights |
|------|------|---------|
| Headlines, labels, navigation, cover | Barlow Condensed | Light through Black |
| Body copy, quotes, editorial text | Freight Text Pro | Book, Book Italic, Medium, Bold, Bold Italic |
| Display headlines (select features) | Freight Display Pro | Bold, Black |
| Data, specs, technical, fine print | IBM Plex Mono | Light, Regular, Medium, Bold |

---

## 4. PARAGRAPH STYLES

Every style below is ready to enter into InDesign's Paragraph Styles panel.

**Notation:**
- Leading shown as absolute pt value (not "auto")
- Tracking in InDesign units (1 = 1/1000 em)
- Space Before / After in pt
- Hyphenation: ON = checked, OFF = unchecked

---

### Cover & Masthead

#### `Cover-Masthead`
Magazine title "ELEVATE" on the cover

| Property | Value |
|----------|-------|
| Font | Barlow Condensed Black |
| Size | 72pt |
| Leading | 64pt (tight) |
| Tracking | 80 |
| Case | ALL CAPS |
| Color | Pure White |
| Alignment | Left |
| Space Before | 0pt |
| Space After | 0pt |
| Hyphenation | OFF |

#### `Cover-Subtitle`
"THE OFFICIAL MAGAZINE OF ELEVATE CO." or similar

| Property | Value |
|----------|-------|
| Font | Barlow Condensed Medium |
| Size | 10pt |
| Leading | 12pt |
| Tracking | 200 |
| Case | ALL CAPS |
| Color | Elevate Gold |
| Alignment | Left |
| Space Before | 0pt |
| Space After | 6pt |
| Hyphenation | OFF |

#### `Cover-Teaser-Primary`
Main cover teaser headline (largest)

| Property | Value |
|----------|-------|
| Font | Barlow Condensed Bold |
| Size | 24pt |
| Leading | 26pt |
| Tracking | 20 |
| Case | ALL CAPS |
| Color | Pure White |
| Alignment | Left |
| Space Before | 0pt |
| Space After | 3pt |
| Hyphenation | OFF |

#### `Cover-Teaser-Secondary`
Supporting cover teaser lines

| Property | Value |
|----------|-------|
| Font | Barlow Condensed Regular |
| Size | 14pt |
| Leading | 16pt |
| Tracking | 30 |
| Case | ALL CAPS |
| Color | Highlight Yellow |
| Alignment | Left |
| Space Before | 0pt |
| Space After | 2pt |
| Hyphenation | OFF |

#### `Cover-Teaser-Page`
Page reference on cover teasers ("p. 12")

| Property | Value |
|----------|-------|
| Font | IBM Plex Mono Regular |
| Size | 8pt |
| Leading | 10pt |
| Tracking | 50 |
| Case | Normal |
| Color | Elevate Gold |
| Alignment | Left |
| Space Before | 0pt |
| Space After | 12pt |
| Hyphenation | OFF |

---

### TOC / Masthead (Page 2)

#### `TOC-Section-Label`
"FEATURES" / "PRODUCT SPOTLIGHT" / "COLUMNS" etc.

| Property | Value |
|----------|-------|
| Font | Barlow Condensed SemiBold |
| Size | 11pt |
| Leading | 13.5pt |
| Tracking | 150 |
| Case | ALL CAPS |
| Color | Elevate Gold |
| Alignment | Left |
| Space Before | 18pt |
| Space After | 6pt |
| Hyphenation | OFF |
| Rule Below | 0.5pt, Elevate Gold, offset 3pt |

#### `TOC-Entry`
Article title + page number

| Property | Value |
|----------|-------|
| Font | Freight Text Pro Book |
| Size | 10pt |
| Leading | 13.5pt |
| Tracking | 0 |
| Case | Normal |
| Color | Charcoal |
| Alignment | Left |
| Space Before | 0pt |
| Space After | 4pt |
| Hyphenation | OFF |
| Tabs | Right-aligned dot leader tab at column width |

#### `TOC-Entry-Description`
One-line article description

| Property | Value |
|----------|-------|
| Font | Freight Text Pro Book Italic |
| Size | 8.5pt |
| Leading | 11pt |
| Tracking | 0 |
| Case | Normal |
| Color | Warm Gray 80% |
| Alignment | Left |
| Space Before | 0pt |
| Space After | 8pt |
| Hyphenation | OFF |

#### `Masthead-Title`
"ELEVATE" in the masthead block

| Property | Value |
|----------|-------|
| Font | Barlow Condensed Black |
| Size | 24pt |
| Leading | 24pt |
| Tracking | 60 |
| Case | ALL CAPS |
| Color | Elevate Black |
| Alignment | Left |
| Space Before | 0pt |
| Space After | 2pt |
| Hyphenation | OFF |

#### `Masthead-Staff`
Staff listing ("Editor-in-Chief: Brad Sterling" etc.)

| Property | Value |
|----------|-------|
| Font | IBM Plex Mono Regular |
| Size | 7pt |
| Leading | 10pt |
| Tracking | 20 |
| Case | Normal |
| Color | Warm Gray 80% |
| Alignment | Left |
| Space Before | 0pt |
| Space After | 2pt |
| Hyphenation | OFF |

---

### Section Navigation

#### `Section-Label`
Act/section labels like "ACT 1: ASSESSMENT"

| Property | Value |
|----------|-------|
| Font | Barlow Condensed Bold |
| Size | 9pt |
| Leading | 11pt |
| Tracking | 250 |
| Case | ALL CAPS |
| Color | Elevate Gold |
| Alignment | Left |
| Space Before | 0pt |
| Space After | 6pt |
| Hyphenation | OFF |

#### `Running-Header`
Page-top running header (section name or magazine name)

| Property | Value |
|----------|-------|
| Font | Barlow Condensed Medium |
| Size | 7pt |
| Leading | 9pt |
| Tracking | 200 |
| Case | ALL CAPS |
| Color | Warm Gray 40% |
| Alignment | Left (verso), Right (recto) |
| Space Before | 0pt |
| Space After | 0pt |
| Hyphenation | OFF |

#### `Folio`
Page numbers

| Property | Value |
|----------|-------|
| Font | Barlow Condensed SemiBold |
| Size | 8pt |
| Leading | 8pt |
| Tracking | 0 |
| Case | Normal |
| Color | Warm Gray 80% |
| Alignment | Left (verso), Right (recto) |
| Space Before | 0pt |
| Space After | 0pt |
| Hyphenation | OFF |

---

### Feature Articles

#### `Article-Headline`
Main article headline — the big one

| Property | Value |
|----------|-------|
| Font | Freight Display Pro Bold |
| Size | 48pt |
| Leading | 48pt |
| Tracking | -10 |
| Case | Normal (title case set manually) |
| Color | Elevate Black |
| Alignment | Left |
| Space Before | 0pt |
| Space After | 8pt |
| Hyphenation | OFF |

#### `Article-Headline-Alt`
Condensed headline for tighter spaces or product-focused pages

| Property | Value |
|----------|-------|
| Font | Barlow Condensed Black |
| Size | 42pt |
| Leading | 42pt |
| Tracking | 10 |
| Case | ALL CAPS |
| Color | Elevate Black |
| Alignment | Left |
| Space Before | 0pt |
| Space After | 8pt |
| Hyphenation | OFF |

#### `Article-Deck`
The sub-headline / deck text under an article headline

| Property | Value |
|----------|-------|
| Font | Freight Text Pro Medium |
| Size | 14pt |
| Leading | 19pt |
| Tracking | 0 |
| Case | Normal |
| Color | Warm Gray 80% |
| Alignment | Left |
| Space Before | 0pt |
| Space After | 13.5pt |
| Hyphenation | OFF |

#### `Article-Byline`
"By Brad Sterling, Chief Vision Officer"

| Property | Value |
|----------|-------|
| Font | Barlow Condensed Medium |
| Size | 8pt |
| Leading | 10pt |
| Tracking | 80 |
| Case | ALL CAPS |
| Color | Elevate Gold |
| Alignment | Left |
| Space Before | 0pt |
| Space After | 13.5pt |
| Hyphenation | OFF |

#### `Body`
Standard body copy — the workhorse

| Property | Value |
|----------|-------|
| Font | Freight Text Pro Book |
| Size | 9.5pt |
| Leading | 13.5pt |
| Tracking | 5 |
| Case | Normal |
| Color | Charcoal |
| Alignment | Justify, last line left |
| Space Before | 0pt |
| Space After | 0pt |
| First Line Indent | 0.1667" (1 pica) — except after headlines/subheads |
| Hyphenation | ON (min word length 6, zone 0.5") |
| Align to Baseline Grid | Yes |

#### `Body-First`
First paragraph after a headline (no indent, optional drop cap)

| Property | Value |
|----------|-------|
| Based On | Body |
| First Line Indent | 0" (none) |
| Drop Cap | 3 lines, 1 character (optional — see Decision Point 1) |
| All other values | Same as Body |

#### `Article-Subhead`
In-article subheadings (H2 level)

| Property | Value |
|----------|-------|
| Font | Barlow Condensed SemiBold |
| Size | 14pt |
| Leading | 17pt |
| Tracking | 40 |
| Case | ALL CAPS |
| Color | Elevate Black |
| Alignment | Left |
| Space Before | 18pt |
| Space After | 6pt |
| Hyphenation | OFF |
| Keep With Next | 2 lines |

#### `Article-Subhead-2`
Tertiary subheading (H3 level)

| Property | Value |
|----------|-------|
| Font | Freight Text Pro Bold |
| Size | 11pt |
| Leading | 13.5pt |
| Tracking | 0 |
| Case | Normal |
| Color | Charcoal |
| Alignment | Left |
| Space Before | 13.5pt |
| Space After | 4pt |
| Hyphenation | OFF |
| Keep With Next | 2 lines |

---

### Pull Quotes & Callouts

#### `Pull-Quote`
Large editorial pull quote

| Property | Value |
|----------|-------|
| Font | Freight Display Pro Bold |
| Size | 24pt |
| Leading | 30pt |
| Tracking | -5 |
| Case | Normal |
| Color | Brad Purple |
| Alignment | Left |
| Space Before | 18pt |
| Space After | 6pt |
| Hyphenation | OFF |
| Left Indent | 0" |

#### `Pull-Quote-Attribution`
"— Brad Sterling, Chief Vision Officer"

| Property | Value |
|----------|-------|
| Font | Barlow Condensed Medium |
| Size | 8pt |
| Leading | 10pt |
| Tracking | 80 |
| Case | ALL CAPS |
| Color | Elevate Gold |
| Alignment | Left |
| Space Before | 4pt |
| Space After | 18pt |
| Hyphenation | OFF |

#### `Callout-Box`
Sidebar callout text / "PRO TIP" / "DID YOU KNOW"

| Property | Value |
|----------|-------|
| Font | Freight Text Pro Medium |
| Size | 9pt |
| Leading | 13pt |
| Tracking | 5 |
| Case | Normal |
| Color | Charcoal |
| Alignment | Left |
| Space Before | 8pt |
| Space After | 8pt |
| Left Indent | 0.125" |
| Right Indent | 0.125" |
| Hyphenation | ON |

#### `Callout-Label`
"PRO TIP" / "SURVIVAL NOTE" / "FIELD ADVISORY"

| Property | Value |
|----------|-------|
| Font | Barlow Condensed Bold |
| Size | 9pt |
| Leading | 11pt |
| Tracking | 200 |
| Case | ALL CAPS |
| Color | Signal Orange |
| Alignment | Left |
| Space Before | 0pt |
| Space After | 4pt |
| Hyphenation | OFF |

---

### Brad Quotes (Mode 2 — Personal Brand Voice)

#### `Brad-Quote`
When Brad speaks as himself — aspirational, self-mythologizing

| Property | Value |
|----------|-------|
| Font | Freight Text Pro Book Italic |
| Size | 11pt |
| Leading | 15pt |
| Tracking | 5 |
| Case | Normal |
| Color | Charcoal |
| Alignment | Left |
| Space Before | 13.5pt |
| Space After | 4pt |
| Left Indent | 0.25" |
| Right Indent | 0.25" |
| Hyphenation | OFF |
| Border Left | 3pt solid Elevate Gold (via paragraph rule or object style) |

#### `Brad-Quote-Attribution`

| Property | Value |
|----------|-------|
| Font | Barlow Condensed SemiBold |
| Size | 7.5pt |
| Leading | 9pt |
| Tracking | 120 |
| Case | ALL CAPS |
| Color | Elevate Gold |
| Alignment | Left |
| Space Before | 2pt |
| Space After | 13.5pt |
| Left Indent | 0.25" |
| Hyphenation | OFF |

---

### Photo & Image Treatments

#### `Caption`
Photo captions

| Property | Value |
|----------|-------|
| Font | IBM Plex Mono Regular |
| Size | 7.5pt |
| Leading | 10pt |
| Tracking | 10 |
| Case | Normal |
| Color | Warm Gray 80% |
| Alignment | Left |
| Space Before | 4pt |
| Space After | 0pt |
| Hyphenation | OFF |

#### `Photo-Credit`
Photographer / image credit

| Property | Value |
|----------|-------|
| Font | IBM Plex Mono Light |
| Size | 6pt |
| Leading | 8pt |
| Tracking | 30 |
| Case | ALL CAPS |
| Color | Warm Gray 40% |
| Alignment | Left (or rotated 90° along image edge) |
| Space Before | 2pt |
| Space After | 0pt |
| Hyphenation | OFF |

---

### Product Ads

#### `Ad-Headline`
Product ad main headline ("EXECUTIVE TACTICAL STYLUS")

| Property | Value |
|----------|-------|
| Font | Barlow Condensed Black |
| Size | 54pt |
| Leading | 50pt |
| Tracking | 20 |
| Case | ALL CAPS |
| Color | Pure White (on dark bg) or Elevate Black (on light bg) |
| Alignment | Left |
| Space Before | 0pt |
| Space After | 6pt |
| Hyphenation | OFF |

#### `Ad-Subhead`
Product ad secondary headline ("Writes in Black. Raises Concerns.")

| Property | Value |
|----------|-------|
| Font | Freight Text Pro Bold Italic |
| Size | 18pt |
| Leading | 22pt |
| Tracking | 0 |
| Case | Normal |
| Color | Elevate Gold |
| Alignment | Left |
| Space Before | 0pt |
| Space After | 12pt |
| Hyphenation | OFF |

#### `Ad-Body`
Product ad description copy

| Property | Value |
|----------|-------|
| Font | Freight Text Pro Book |
| Size | 10pt |
| Leading | 14pt |
| Tracking | 5 |
| Case | Normal |
| Color | Pure White (on dark bg) or Charcoal (on light bg) |
| Alignment | Left |
| Space Before | 0pt |
| Space After | 6pt |
| First Line Indent | 0" |
| Hyphenation | ON |

#### `Ad-Testimonial`
Customer testimonial in product ad

| Property | Value |
|----------|-------|
| Font | Freight Text Pro Book Italic |
| Size | 10pt |
| Leading | 14pt |
| Tracking | 0 |
| Case | Normal |
| Color | Pure White (on dark bg) or Charcoal (on light bg) |
| Alignment | Left |
| Space Before | 8pt |
| Space After | 3pt |
| Left Indent | 0.167" |
| Hyphenation | OFF |

#### `Ad-Testimonial-Attribution`
"— Jessica T., Level 4 Associate, Pod 7B"

| Property | Value |
|----------|-------|
| Font | IBM Plex Mono Regular |
| Size | 7pt |
| Leading | 9pt |
| Tracking | 20 |
| Case | Normal |
| Color | Elevate Gold |
| Alignment | Left |
| Space Before | 0pt |
| Space After | 12pt |
| Left Indent | 0.167" |
| Hyphenation | OFF |

#### `Ad-CTA`
Call to action button text

| Property | Value |
|----------|-------|
| Font | Barlow Condensed Bold |
| Size | 12pt |
| Leading | 14pt |
| Tracking | 150 |
| Case | ALL CAPS |
| Color | Elevate Black (on Signal Orange bg) or Signal Orange (on dark bg) |
| Alignment | Center |
| Space Before | 0pt |
| Space After | 0pt |
| Hyphenation | OFF |

#### `Ad-Fine-Print`
Disclaimers, warnings, legal comedy

| Property | Value |
|----------|-------|
| Font | IBM Plex Mono Light |
| Size | 5.5pt |
| Leading | 7.5pt |
| Tracking | 10 |
| Case | Normal |
| Color | Warm Gray 40% (on dark bg) or Warm Gray 80% (on light bg) |
| Alignment | Left |
| Space Before | 8pt |
| Space After | 0pt |
| Hyphenation | ON |

---

### Spec Tables & Data

#### `Spec-Table-Header`
Column headers in spec/comparison tables

| Property | Value |
|----------|-------|
| Font | Barlow Condensed SemiBold |
| Size | 8pt |
| Leading | 10pt |
| Tracking | 120 |
| Case | ALL CAPS |
| Color | Pure White |
| Alignment | Left |
| Cell Insets | T4pt B4pt L6pt R6pt |
| Fill | Elevate Black |
| Hyphenation | OFF |

#### `Spec-Table-Cell`
Table cell content

| Property | Value |
|----------|-------|
| Font | IBM Plex Mono Regular |
| Size | 7.5pt |
| Leading | 10pt |
| Tracking | 0 |
| Case | Normal |
| Color | Charcoal |
| Alignment | Left |
| Cell Insets | T3pt B3pt L6pt R6pt |
| Hyphenation | OFF |

#### `Spec-Table-Label`
Row labels in spec tables

| Property | Value |
|----------|-------|
| Font | IBM Plex Mono Medium |
| Size | 7.5pt |
| Leading | 10pt |
| Tracking | 0 |
| Case | Normal |
| Color | Charcoal |
| Alignment | Left |
| Cell Insets | T3pt B3pt L6pt R6pt |
| Fill | Warm Gray 15% |
| Hyphenation | OFF |

---

### Infographic / Data Viz (pp.14-15)

#### `Infographic-Headline`

| Property | Value |
|----------|-------|
| Font | Barlow Condensed Black |
| Size | 36pt |
| Leading | 36pt |
| Tracking | 20 |
| Case | ALL CAPS |
| Color | Institutional Teal |
| Alignment | Left |
| Space After | 8pt |
| Hyphenation | OFF |

#### `Infographic-Data-Label`
Labels for data points, chart axes

| Property | Value |
|----------|-------|
| Font | IBM Plex Mono Medium |
| Size | 8pt |
| Leading | 10pt |
| Tracking | 30 |
| Case | ALL CAPS |
| Color | Charcoal |
| Alignment | Left or Center |
| Hyphenation | OFF |

#### `Infographic-Data-Value`
Large numbers / statistics

| Property | Value |
|----------|-------|
| Font | Barlow Condensed Bold |
| Size | 36pt |
| Leading | 36pt |
| Tracking | 0 |
| Case | Normal |
| Color | Institutional Teal |
| Alignment | Center |
| Hyphenation | OFF |

#### `Infographic-Annotation`
Small annotation text for data viz

| Property | Value |
|----------|-------|
| Font | IBM Plex Mono Regular |
| Size | 7pt |
| Leading | 9pt |
| Tracking | 10 |
| Case | Normal |
| Color | Warm Gray 80% |
| Alignment | Left |
| Hyphenation | OFF |

---

### Advice Column (p.24)

#### `Advice-Question`
Reader's letter / question

| Property | Value |
|----------|-------|
| Font | Freight Text Pro Book Italic |
| Size | 9.5pt |
| Leading | 13.5pt |
| Tracking | 5 |
| Case | Normal |
| Color | Charcoal |
| Alignment | Left |
| Space Before | 13.5pt |
| Space After | 4pt |
| Left Indent | 0.25" |
| Hyphenation | ON |

#### `Advice-Question-Sig`
"— Trapped in Accounting, Denver"

| Property | Value |
|----------|-------|
| Font | IBM Plex Mono Regular |
| Size | 7.5pt |
| Leading | 10pt |
| Tracking | 20 |
| Case | Normal |
| Color | Warm Gray 80% |
| Alignment | Right |
| Space Before | 2pt |
| Space After | 13.5pt |
| Right Indent | 0.25" |
| Hyphenation | OFF |

#### `Advice-Answer-Label`
"BRAD SAYS:" header

| Property | Value |
|----------|-------|
| Font | Barlow Condensed Bold |
| Size | 10pt |
| Leading | 12pt |
| Tracking | 150 |
| Case | ALL CAPS |
| Color | Elevate Gold |
| Alignment | Left |
| Space Before | 0pt |
| Space After | 4pt |
| Hyphenation | OFF |

#### `Advice-Answer`
Brad's response text

| Property | Value |
|----------|-------|
| Font | Freight Text Pro Book |
| Size | 9.5pt |
| Leading | 13.5pt |
| Tracking | 5 |
| Case | Normal |
| Color | Charcoal |
| Alignment | Justify, last line left |
| Space Before | 0pt |
| Space After | 0pt |
| Hyphenation | ON |

---

### Evidence / Incident Report (p.27)

#### `Evidence-Header`
"INCIDENT REPORT" / "EVIDENCE LOG"

| Property | Value |
|----------|-------|
| Font | IBM Plex Mono Bold |
| Size | 14pt |
| Leading | 16pt |
| Tracking | 120 |
| Case | ALL CAPS |
| Color | Classified Red |
| Alignment | Left |
| Space After | 8pt |
| Hyphenation | OFF |

#### `Evidence-Field-Label`
"ITEM:" / "STATUS:" / "CONFISCATED FROM:"

| Property | Value |
|----------|-------|
| Font | IBM Plex Mono Medium |
| Size | 8pt |
| Leading | 12pt |
| Tracking | 60 |
| Case | ALL CAPS |
| Color | Warm Gray 80% |
| Alignment | Left |
| Hyphenation | OFF |

#### `Evidence-Field-Value`
Field responses in the report

| Property | Value |
|----------|-------|
| Font | IBM Plex Mono Regular |
| Size | 9pt |
| Leading | 12pt |
| Tracking | 0 |
| Case | Normal |
| Color | Charcoal |
| Alignment | Left |
| Hyphenation | OFF |

#### `Redacted`
Blacked-out redacted text treatment

| Property | Value |
|----------|-------|
| Font | IBM Plex Mono Bold |
| Size | 9pt |
| Leading | 12pt |
| Tracking | 0 |
| Case | Normal |
| Color | Elevate Black |
| Strikethrough | Custom: Elevate Black, 120% weight, offset 0 |
| Alignment | Left |
| Hyphenation | OFF |

*Note: For full redaction effect, apply a character style with black background highlight via InDesign's underline options (Underline On, Color: Elevate Black, Weight: 120% of font size, Offset: negative to cover text). The text should be replaced with "█████" characters or the strikethrough set thick enough to completely cover.*

---

### Classified Ads / Back Cover (p.30)

#### `Classified-Header`
"CLASSIFIEDS" section header

| Property | Value |
|----------|-------|
| Font | Barlow Condensed Black |
| Size | 18pt |
| Leading | 18pt |
| Tracking | 100 |
| Case | ALL CAPS |
| Color | Elevate Black |
| Alignment | Left |
| Space After | 12pt |
| Rule Below | 1pt, Elevate Black, offset 6pt |
| Hyphenation | OFF |

#### `Classified-Ad-Title`
Individual classified ad headline

| Property | Value |
|----------|-------|
| Font | Barlow Condensed SemiBold |
| Size | 9pt |
| Leading | 11pt |
| Tracking | 60 |
| Case | ALL CAPS |
| Color | Elevate Black |
| Alignment | Left |
| Space Before | 8pt |
| Space After | 2pt |
| Hyphenation | OFF |

#### `Classified-Ad-Body`
Classified ad description

| Property | Value |
|----------|-------|
| Font | Freight Text Pro Book |
| Size | 7.5pt |
| Leading | 10pt |
| Tracking | 5 |
| Case | Normal |
| Color | Charcoal |
| Alignment | Left |
| Space After | 6pt |
| Hyphenation | ON |

#### `Legal-Fine-Print`
Back cover legal/disclaimer comedy

| Property | Value |
|----------|-------|
| Font | IBM Plex Mono Light |
| Size | 5pt |
| Leading | 7pt |
| Tracking | 10 |
| Case | Normal |
| Color | Warm Gray 80% |
| Alignment | Justify, last line left |
| Space Before | 0pt |
| Space After | 0pt |
| Hyphenation | ON |

---

### Luxury Reveal (pp.28-29)

#### `Reveal-Headline`
"MUG SHOT" or product reveal headline

| Property | Value |
|----------|-------|
| Font | Barlow Condensed Black |
| Size | 72pt |
| Leading | 66pt |
| Tracking | 30 |
| Case | ALL CAPS |
| Color | Elevate Gold |
| Alignment | Left |
| Space After | 8pt |
| Hyphenation | OFF |

#### `Reveal-Body`
Luxury reveal description (quieter, more reverent)

| Property | Value |
|----------|-------|
| Font | Freight Text Pro Book |
| Size | 11pt |
| Leading | 16pt |
| Tracking | 5 |
| Case | Normal |
| Color | Cream (on black bg) |
| Alignment | Left |
| Space After | 8pt |
| Hyphenation | OFF |

---

## 5. CHARACTER STYLES

Inline overrides applied within paragraph styles.

#### `cs-Bold`
| Property | Value |
|----------|-------|
| Font Style | Bold (inherits family from paragraph) |

#### `cs-Italic`
| Property | Value |
|----------|-------|
| Font Style | Italic (inherits family from paragraph) |

#### `cs-Bold-Italic`
| Property | Value |
|----------|-------|
| Font Style | Bold Italic (inherits family from paragraph) |

#### `cs-Product-Name`
Inline product name treatment ("Executive Tactical Stylus™")

| Property | Value |
|----------|-------|
| Font | Barlow Condensed SemiBold |
| Size | (inherit) |
| Tracking | 30 |
| Case | Normal |
| Color | (inherit or Elevate Gold on dark bg) |

#### `cs-Brad-Title`
Brad's credentials inline ("Chief Vision Officer & Founder")

| Property | Value |
|----------|-------|
| Font | Barlow Condensed Medium |
| Size | (inherit) |
| Tracking | 60 |
| Case | ALL CAPS |
| Color | Elevate Gold |

#### `cs-Monospace`
Inline monospace for data, codes, technical terms

| Property | Value |
|----------|-------|
| Font | IBM Plex Mono Regular |
| Size | 90% (relative to paragraph size) |
| Color | (inherit) |

#### `cs-Gold-Accent`
Gold text emphasis

| Property | Value |
|----------|-------|
| Color | Elevate Gold |

#### `cs-Red-Accent`
Red emphasis for warnings, alerts

| Property | Value |
|----------|-------|
| Color | Classified Red |
| Font Style | Bold (inherits family) |

#### `cs-Superscript`
Trademark symbols, footnote markers

| Property | Value |
|----------|-------|
| Position | Superscript |
| Size | 58% |

---

## 6. MASTER PAGES

### `A-Master` — Default Editorial
- Running header (left: section name, right: "ELEVATE")
- Folio (page numbers, bottom outside corner)
- 6-column grid guides
- Baseline grid visible
- Margins per Document Setup

### `B-Master` — Feature Spread
- Based on A-Master
- Reduced running header (smaller, lighter)
- Generous top margin allowance for large headlines
- Full-bleed image frame placeholder on one side

### `C-Master` — Product Ad (Full Page)
- NO running headers or folios
- Full bleed to trim on all sides
- No column guides (freeform ad layout)
- Black background frame to bleed

### `D-Master` — Product Ad (Spread)
- Same as C-Master but spread across two pages
- No gutter interference (content flows across)

### `E-Master` — Cover
- NO running headers or folios
- Full bleed
- No column guides
- Cover-specific text frame guides for teasers (left margin stack, bottom bar)

### `F-Master` — Back Cover / Fine Print
- Minimal folio (page number only, no running header)
- Tight margins for maximum fine print density
- 4-column grid (narrower columns for classified ads)

---

## 7. DECISION POINTS

These are genuine choices where multiple valid options exist. Make these calls before building the template.

---

### Decision Point 1: Drop Caps?

**Should the first paragraph of each article use a drop cap?**

- **A.** Yes — 3-line drop cap in Freight Display Pro Bold, colored in section accent color. Classic magazine move. Signals "this is a REAL magazine" immediately. Adds visual gravitas.
- **B.** No — Use `Body-First` style (no indent, no drop cap). Cleaner, more modern, faster to produce. Many contemporary magazines skip drop caps.
- **C.** Selective — Drop caps on feature articles and the editor's letter ONLY. Product ads and shorter sections skip them. Best of both: gravitas where it counts, clean where speed matters.

**Recommendation:** C. Drop caps on features and editor's letter sell the "real magazine" illusion. Product ads don't need them.

---

### Decision Point 2: Interior Page Backgrounds?

**Should interior pages default to Cream (#F5F0E8) or Pure White (#FFFFFF)?**

- **A.** Cream throughout — Warmer, more premium, carries forward from the old booklet. Slight warmth makes photography pop differently. Reads as "printed on nice stock."
- **B.** Pure White throughout — Brighter, more vibrant, better color accuracy for product photography. More contemporary magazine feel.
- **C.** Mixed — Cream for editorial/text-heavy pages, White for product ads and photography-heavy pages. Creates natural section breaks through paper tone shifts.

**Recommendation:** C. Cream for editorial warmth, white for product ads where color accuracy and vibrancy matter. This is what real magazines do with different paper stocks across sections.

---

### Decision Point 3: Cover Typography Position?

**Where do the cover teasers stack on the cover?**

- **A.** Left-side vertical stack — Classic magazine layout (TIME, GQ, Esquire). Teasers run down the left side, Brad's photo dominates center-right. "ELEVATE" masthead across the top.
- **B.** Bottom bar — Teasers run horizontally across the bottom third. Brad dominates upper 2/3. Masthead at top. Cleaner, more modern.
- **C.** Mixed — Masthead at top, 2-3 teasers on left side, 1-2 teasers at bottom. Maximum newsstand energy. More complex to lay out.

**Recommendation:** A. Left-side stack is the most immediately recognizable "this is a magazine" signal to the reader's brain. That's the punchline delivery mechanism.

---

### Decision Point 4: Product Ad Background Treatment?

**What background treatment for the product ad spreads (Cubicle Shank, Lifer Ink, Turf Tags, etc.)?**

- **A.** All black background — Maximum drama, consistent with Brad's luxury aesthetic. Gold + white text on rich black. Every product ad feels premium.
- **B.** Varied by product — Each product gets its own background treatment. Cubicle Shank might be matte black + orange. Lifer Ink might be white with wellness vibes. Turf Tags might use territorial camouflage patterns. More variety, more work.
- **C.** Dark gradient — Rich black fading to charcoal or dark purple. Adds depth without the flatness of solid black. Gold accents pop.

**Recommendation:** B. Each product in this kit has its own personality. A one-size-fits-all dark background would make the magazine feel monotonous. Let each product ad own its spread. The Cubicle Shank is tactical (black/orange). Lifer Ink is wellness (cream/teal). Turf Tags is territorial (earth tones). The ad style variety is what makes the magazine feel real — real magazines don't run every ad in the same format.

---

### Decision Point 5: Freight Text Pro vs. Freight Text (non-Pro)?

**Adobe Fonts has both "Freight Text Pro" and "Freight Text." Which to activate?**

- **A.** Freight Text Pro — Full OpenType feature set (ligatures, old-style figures, small caps, swashes). More control. Pro version is the standard for professional publishing.
- **B.** Freight Text — Lighter weight file, fewer features. Fine for basic body copy if you don't need ligatures or small caps.

**Recommendation:** A. Activate the Pro version. You'll want old-style figures in body copy and small caps for "A.M." / "P.M." type treatments. The features are worth it for a 30-page magazine.

---

### Decision Point 6: Barlow Condensed vs. Barlow Semi Condensed?

**Should headers use Barlow Condensed or Barlow Semi Condensed?**

- **A.** Barlow Condensed — Tighter, more aggressive, more vertical. Stacks well on covers. Feels more "newsstand magazine." Brad would pick this.
- **B.** Barlow Semi Condensed — Slightly more open. Easier to read at smaller sizes (running headers, labels). Less dramatic but more versatile.

**Recommendation:** A. Barlow Condensed is the character play. Brad picks the aggressive option because he saw it on a billionaire's website. The condensed width also solves practical problems — long headlines like "EXECUTIVE TACTICAL STYLUS" fit in tighter spaces.

---

## 8. SETUP CHECKLIST

Once decisions are made, set up in this order:

1. **Create the InDesign document** with trim, bleed, slug, margins, columns, facing pages
2. **Set baseline grid** (13.5pt, starting at top margin)
3. **Add all color swatches** (CMYK values from Section 2) — name them exactly as listed
4. **Activate fonts** in Adobe Fonts: Barlow Condensed, Freight Text Pro, Freight Display Pro, IBM Plex Mono
5. **Create Paragraph Styles** in this order (so "Based On" references resolve):
   - Body → Body-First
   - All headline styles
   - All ad styles
   - All specialty styles (infographic, evidence, classified, etc.)
6. **Create Character Styles** (Section 5)
7. **Build Master Pages** (Section 6) — start with A-Master, then base others on it
8. **Apply A-Master** to all pages, then override specific pages with B/C/D/E/F as needed
9. **Add 30 pages** (15 spreads + cover)
10. **Test** — place sample text in Body style, verify baseline grid alignment, verify column snap

---

*Document: magazine-indesign-spec-v1.md*
*Created: 2026-05-22*
*For: ELEVATE Magazine — 30-page, 8.5×11" glossy magazine insert*
*Product: Office Survival Kit by Elevate Co.*
