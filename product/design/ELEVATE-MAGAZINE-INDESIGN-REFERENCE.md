# ELEVATE Magazine — InDesign Reference

**Version:** v1
**Last Updated:** May 22, 2026
**Status:** ACTIVE — Use this document when building any page of the ELEVATE magazine.
**Format:** 8.5" x 11" portrait, full color, glossy, saddle-stitched

> **What this document is:** The complete reference for building pages in InDesign. It tells you which master page to assign, which paragraph styles to use for each type of copy, what colors and fonts are available, and how all the automation scripts work. Hand this to anyone working on the magazine and they can start building pages immediately.

> **How to use this document:** When you start a new page or spread, look up the page number in the Page Map (Section 1), find the correct master page, then use the Style Picker (Section 5) to choose the right paragraph style for each piece of text.

---

## Table of Contents

1. [Page Map — Which Master for Each Page](#1-page-map--which-master-for-each-page)
2. [Master Pages — What They Are and What They Do](#2-master-pages--what-they-are-and-what-they-do)
3. [Color Swatches](#3-color-swatches)
4. [Fonts](#4-fonts)
5. [Paragraph Style Picker — What to Use Where](#5-paragraph-style-picker--what-to-use-where)
6. [Character Styles](#6-character-styles)
7. [Document Settings](#7-document-settings)
8. [Automation Scripts](#8-automation-scripts)
9. [Page-by-Page Style Guide](#9-page-by-page-style-guide)

---

## 1. Page Map — Which Master for Each Page

Use this table to assign the correct parent (master) page to every page of the magazine.

| Page(s) | Content | Master Page |
|---------|---------|-------------|
| 1 | Cover | **E-Cover** |
| 2 | Masthead / Table of Contents | **A-Editorial** |
| 3 | Letter from the Editor | **A-Editorial** |
| 4-5 | Welcome to the Workforce (spread) | **B-Feature Spread** |
| 6-7 | Your Personal Workspace (spread) | **B-Feature Spread** |
| 8-9 | The Block: Neighborhood Guide (spread) | **B-Feature Spread** |
| 10-11 | Cubicle Shank Ad (spread) | **D-Spread Ad** |
| 12-13 | The Morning Loadout (spread) | **B-Feature Spread** |
| 14-15 | The Code: Translation Guide (spread) | **B-Feature Spread** |
| 16 | Lifer Ink Ad | **C-Full Page Ad** |
| 17 | Turf Tags Ad | **C-Full Page Ad** |
| 18-19 | The Experiment (spread) | **B-Feature Spread** |
| 20-21 | The Identity Crisis (spread) | **B-Feature Spread** |
| 22-23 | Card Deck Triple Ad (spread) | **D-Spread Ad** |
| 24 | Dear Brad (advice column) | **A-Editorial** |
| 25-26 | Meet the Founder (spread) | **B-Feature Spread** |
| 27 | The Confiscated (evidence report) | **C-Full Page Ad** |
| 28-29 | Mug Shot Reveal (spread) | **D-Spread Ad** |
| 30 | Fine Print / Back Cover | **F-Back Cover** |

### Quick Decision Guide

- **Standard editorial page** (article text, columns, headers) → **A-Editorial**
- **Feature article opener** (big headline, dramatic layout) → **B-Feature Spread**
- **Full-page product ad** (single page, dark background) → **C-Full Page Ad**
- **Cross-page ad or reveal** (image/layout bleeds across the spine) → **D-Spread Ad**
- **Front cover** → **E-Cover**
- **Back cover / fine print** → **F-Back Cover**

---

## 2. Master Pages — What They Are and What They Do

Master pages are templates. When you assign a master to a page, it automatically gets the correct background color, column grid, running header, and page number. You just add your content on top.

### A-Editorial

**Use for:** Standard interior pages — articles, advice columns, table of contents, editor's letter.

| Property | Value |
|----------|-------|
| Background | Cream (#F5F0E8) |
| Columns | 6 columns, 0.1667" gutter |
| Inside margin | 0.875" |
| Outside margin | 0.625" |
| Top margin | 0.75" |
| Bottom margin | 0.75" |
| Running header | Yes — "SECTION NAME" on left, "ELEVATE" on right |
| Page number | Yes — bottom outside corner |

### B-Feature Spread

**Use for:** Feature article openers and big editorial spreads. Same grid as A, but signals a different section when scanning the pages panel.

| Property | Value |
|----------|-------|
| Background | Cream (#F5F0E8) |
| Columns | 6 columns, 0.1667" gutter |
| Inside margin | 0.875" |
| Outside margin | 0.625" |
| Top margin | 0.75" |
| Bottom margin | 0.75" |
| Running header | Yes |
| Page number | Yes |

### C-Full Page Ad

**Use for:** Single-page product ads (Lifer Ink, Turf Tags, The Confiscated). Dark background, no header or page number — the ad owns the entire page.

| Property | Value |
|----------|-------|
| Background | Matte Black (#1A1A1A) |
| Columns | 1 column |
| All margins | 0.5" |
| Running header | No |
| Page number | No |

### D-Spread Ad

**Use for:** Cross-page ad spreads where the layout bleeds across the spine (Cubicle Shank, Card Deck Triple, Mug Shot Reveal). Tight inside margin so images can cross the gutter.

| Property | Value |
|----------|-------|
| Background | Matte Black (#1A1A1A) |
| Columns | 1 column |
| Inside margin | 0.25" (tight for cross-gutter layouts) |
| Outside margin | 0.5" |
| Top margin | 0.5" |
| Bottom margin | 0.5" |
| Running header | No |
| Page number | No |

### E-Cover

**Use for:** Page 1 only. No background, no furniture — the cover photo fills the entire page.

| Property | Value |
|----------|-------|
| Background | None (cover image fills page) |
| Columns | 1 column |
| All margins | 0.625" |
| Running header | No |
| Page number | No |

### F-Back Cover

**Use for:** Page 30 (fine print, classifieds, subscription gag). Cream background, page number, but no running header.

| Property | Value |
|----------|-------|
| Background | Cream (#F5F0E8) |
| Columns | 4 columns, 0.125" gutter |
| All margins | 0.625" |
| Running header | No |
| Page number | Yes |

---

## 3. Color Swatches

All colors are CMYK for print production. These are created by the setup scripts and available in the Swatches panel.

### Primary Palette

| Swatch Name | CMYK Values | Use For |
|-------------|-------------|---------|
| Matte Black | C:0 M:0 Y:0 K:100 | Headlines, ad backgrounds, body contrast |
| Cream | C:3 M:5 Y:10 K:0 | Page backgrounds (editorial pages) |
| Gold | C:0 M:15 Y:80 K:10 | Accent text, bylines, section labels, Brad's brand color |
| Charcoal | C:0 M:0 Y:0 K:85 | Body copy, secondary text |
| White | Paper | Cover text, ad text on dark backgrounds |

### Accent Palette

| Swatch Name | CMYK Values | Use For |
|-------------|-------------|---------|
| Purple | C:60 M:80 Y:0 K:0 | Pull quotes, feature highlights |
| Classified Red | C:0 M:100 Y:90 K:10 | Warnings, evidence headers, "CLASSIFIED" stamps |
| Signal Orange | C:0 M:60 Y:100 K:0 | Callout labels, alert badges |
| Highlight Yellow | C:0 M:5 Y:90 K:0 | Cover teasers, secondary highlights |
| Institutional Teal | C:80 M:0 Y:30 K:20 | Infographic headlines, data values |

### Utility Swatches

| Swatch Name | CMYK Values | Use For |
|-------------|-------------|---------|
| Warm Gray 80 | C:0 M:5 Y:10 K:50 | Deck text, captions, secondary info |
| Warm Gray 40 | C:0 M:3 Y:5 K:25 | Running headers, photo credits, fine print |
| Warm Gray 15 | C:0 M:2 Y:4 K:12 | Callout box fills, data panel backgrounds (#D9D4CC) |

---

## 4. Fonts

All fonts are from Adobe Fonts. Activate them in Creative Cloud before opening the InDesign file.

| Font Family | Role | Where It's Used |
|-------------|------|-----------------|
| **Barlow Condensed** | Display / UI | Headlines, labels, cover text, navigation, ads. The "loud" font. |
| **Freight Text Pro** | Body / Serif | Body copy, deck text, quotes, editorial text. The "reading" font. |
| **Freight Display Pro** | Display Serif | Article headlines, pull quotes. The "elegant" font. |
| **IBM Plex Mono** | Data / Technical | Captions, spec tables, evidence fields, fine print. The "official" font. |

### Font Activation Checklist

Activate these specific weights in Adobe Fonts:

- Barlow Condensed: Regular, Medium, SemiBold, Bold, Black
- Freight Text Pro: Book, Book Italic, Medium, Bold, Bold Italic
- Freight Display Pro: Bold
- IBM Plex Mono: Light, Regular, Medium, Bold

---

## 5. Paragraph Style Picker — What to Use Where

Paragraph styles are organized in 6 folders in the InDesign Paragraph Styles panel. Here's how to pick the right one.

### FOLDER: Body & Editorial

For the main reading text of the magazine.

| Style Name | Size/Leading | Use When... |
|------------|-------------|-------------|
| **Body** | 12/15pt | Standard article body copy. Has a 12pt first-line indent. |
| **Body - First Paragraph** | 12/15pt | First paragraph after a headline or subhead (no indent). |
| **Body - Editor Letter** | 12/15pt | Brad's editor letter on page 3. Left-aligned, no indent. |
| **Article Deck** | 14/19pt | The subtitle/summary line under an article headline. Medium weight, gray. |
| **Article Byline** | 9/11pt | Author credit line. Gold, all caps, wide tracking. "BY BRAD STERLING" |

### FOLDER: Headlines & Labels

For anything that announces, labels, or titles a section.

| Style Name | Size/Leading | Use When... |
|------------|-------------|-------------|
| **Cover Masthead** | 72/64pt | The word "ELEVATE" on the cover. Page 1 only. |
| **Cover Subtitle** | 11/13pt | Cover subtitle and issue line. Gold, all caps. |
| **Cover Teaser Primary** | 24/26pt | Main cover teaser lines ("EXCLUSIVE: The Pen..."). White, bold. |
| **Cover Teaser Secondary** | 14/16pt | Secondary cover teasers. Yellow, lighter weight. |
| **Cover Teaser Page** | 8/10pt | Page references below cover teasers ("p. 12"). IBM Plex Mono Regular, Gold, +50 tracking. |
| **Article Headline** | 48/48pt | Primary headline for feature articles. Freight Display, elegant serif. |
| **Article Headline Alt** | 42/42pt | Alternate headline style — Barlow Condensed, all caps, bolder feel. |
| **Section Label** | 10/12pt | Small gold label above a headline ("ACT 1: ASSESSMENT" etc.). |
| **Article Subhead** | 14/17pt | Subheadings within article body. Barlow, all caps, keeps with next paragraph. |
| **Article Subhead 2** | 12/15pt | Second-level subhead. Freight Text Bold, subtler than Subhead. |
| **Classified Header** | 18/18pt | Header for the classifieds section. Has a rule (line) below it. |

### FOLDER: Quotes & Callouts

For anything quoted, called out, or set apart from the body flow.

| Style Name | Size/Leading | Use When... |
|------------|-------------|-------------|
| **Pull Quote** | 24/30pt | Big display quote pulled from an article. Purple, Freight Display Bold. |
| **Pull Quote Attribution** | 9/11pt | The name under a pull quote. Gold, all caps. |
| **Brad Quote** | 12/16pt | Brad's personal sidebar quotes. Italic, indented 18pt on both sides. |
| **Brad Quote Attribution** | 8/10pt | Name/title under Brad quotes. Gold, all caps, indented. |
| **Callout Label** | 10/12pt | Label for callout boxes ("DID YOU KNOW", "PRO TIP"). Orange, all caps. |
| **Callout Box Text** | 10/14pt | Body text inside callout/sidebar boxes. Freight Text Medium, indented. |
| **Advice Question** | 12/15pt | "Dear Brad" reader letters. Italic, indented. |
| **Advice Question Signature** | 8/10pt | The fake name after a reader letter. IBM Plex Mono, right-aligned. |
| **Advice Answer Label** | 11/13pt | "BRAD SAYS:" label before his answer. Gold, all caps. |
| **Advice Answer** | 12/15pt | Brad's advice column answer text. Standard body style. |

### FOLDER: Ads & Products

For product advertisements, testimonials, and the reveal spreads.

| Style Name | Size/Leading | Use When... |
|------------|-------------|-------------|
| **Ad Headline** | 54/50pt | Big product ad headline. Barlow Black, white on dark background. |
| **Ad Subhead** | 18/22pt | Product ad subtitle. Freight Bold Italic, gold. |
| **Ad Body** | 11/15pt | Product ad body copy. White text on dark background. |
| **Ad Testimonial** | 11/15pt | Fake testimonial quotes in ads. Italic, white, indented. |
| **Ad Testimonial Attribution** | 7.5/10pt | Name under ad testimonials. IBM Plex Mono, gold. |
| **Ad CTA** | 13/15pt | Call-to-action button text. Barlow Bold, centered, dark. |
| **Ad Fine Print** | 6/8pt | Tiny disclaimer text in ads. IBM Plex Mono Light, gray. |
| **Classified Ad Title** | 10/12pt | Title of small classified ads. Barlow SemiBold, all caps. |
| **Classified Ad Body** | 8/11pt | Body text of classified ads. Small Freight Text. |
| **Reveal Headline** | 72/66pt | The "THIS IS YOUR MUG SHOT" reveal moment. Gold, huge. |
| **Reveal Body** | 12/17pt | Body text on dark reveal spreads. Cream colored. |

### FOLDER: Data & Fine Print

For tables, infographics, evidence reports, captions, and legal text.

| Style Name | Size/Leading | Use When... |
|------------|-------------|-------------|
| **Spec Table Header** | 9/11pt | Column headers in data tables. Barlow, white, all caps. |
| **Spec Table Cell** | 8/11pt | Data cells in tables. IBM Plex Mono. |
| **Spec Table Label** | 8/11pt | Row labels in tables. IBM Plex Mono Medium (slightly bolder). |
| **Infographic Headline** | 36/36pt | Title of infographic sections. Barlow Black, teal. |
| **Infographic Data Label** | 9/11pt | Labels on data visualizations. IBM Plex Mono, all caps. |
| **Infographic Data Value** | 36/36pt | Big stat numbers ("73%", "6x8 ft"). Barlow Bold, teal, centered. |
| **Infographic Annotation** | 7.5/10pt | Small explanatory text on infographics. IBM Plex Mono. |
| **Evidence Header** | 14/16pt | "INCIDENT REPORT" header on evidence pages. Red, all caps, monospace. |
| **Evidence Field Label** | 9/13pt | Field labels on reports ("ITEM:", "STATUS:"). Gray, all caps. |
| **Evidence Field Value** | 10/13pt | Field values on reports. IBM Plex Mono Regular. |
| **Caption** | 8/11pt | Photo/image captions. IBM Plex Mono, gray. |
| **Photo Credit** | 6.5/8pt | Photographer credits. IBM Plex Mono Light, very small, gray. |
| **Redacted** | 9/12pt | Blacked-out text on evidence pages (p. 27). IBM Plex Mono Bold, Matte Black text with 120% strikethrough to obscure. |
| **Legal Fine Print** | 5.5/7.5pt | Legal disclaimers and fine print. IBM Plex Mono Light, tiny. On dark backgrounds: Warm Gray 40. On cream backgrounds with large text blocks (p. 30): override to Warm Gray 80 for legibility. |

### FOLDER: Navigation

For running elements that help readers navigate the magazine.

| Style Name | Size/Leading | Use When... |
|------------|-------------|-------------|
| **Running Header** | 7.5/9pt | Automatic header at top of editorial pages. Set on master pages. |
| **Folio** | 9/9pt | Automatic page numbers. Set on master pages. |
| **TOC Section Label** | 12/15pt | Section dividers in table of contents. Gold, rule below. |
| **TOC Entry** | 11/15pt | Article title entries in the TOC. |
| **TOC Description** | 9/12pt | Brief description under each TOC entry. Italic, gray. |
| **Masthead Title** | 24/24pt | "ELEVATE" in the masthead on page 2. Barlow Black. |
| **Masthead Staff** | 7.5/10pt | Staff listing in the masthead. IBM Plex Mono. |

---

## 6. Character Styles

Character styles are for inline overrides — when a few words within a paragraph need different formatting. Apply them to selected text, not entire paragraphs.

| Style Name | What It Does | When to Use |
|------------|-------------|-------------|
| **Bold** | Switches to Bold weight | Emphasis within body text |
| **Italic** | Switches to Italic | Emphasis, titles of things |
| **Bold Italic** | Switches to Bold Italic | Strong emphasis |
| **Product Name** | Barlow Condensed SemiBold, +30 tracking | Inline product names ("Executive Tactical Stylus") |
| **Brad Title** | Barlow Condensed Medium, gold, all caps, +60 tracking | Brad's titles inline ("CHIEF VISION OFFICER") |
| **Monospace** | IBM Plex Mono | Data, codes, technical terms inline |
| **Gold Accent** | Gold text color | Highlight key words in gold |
| **Red Accent** | Bold + Classified Red color | Warnings, alerts, "CLASSIFIED" |
| **Superscript** | Superscript position | Trademark symbols (TM), footnote markers |

---

## 7. Document Settings

These are the foundational settings already configured in the InDesign file.

| Setting | Value |
|---------|-------|
| Page size | 8.5" x 11" (portrait) |
| Facing pages | Yes |
| Binding | Left edge (saddle-stitch) |
| Bleed | 0.125" all sides |
| Slug | 0.25" all sides |
| Number of pages | 30 |
| Baseline grid start | 0.75" from top |
| Baseline grid increment | 15pt |
| Units | Inches |

### Why 15pt Baseline Grid?

Body copy is 12pt type on 15pt leading. The baseline grid snaps text to 15pt intervals so columns align across the page. All leading values in the paragraph styles are multiples of 15pt (or intentionally break from the grid for display type).

---

## 8. Automation Scripts

All scripts are in `product/design/` and run in InDesign via **Window > Utilities > Scripts**.

### Run Order (for fresh setup)

Run these in order when setting up a new InDesign document from scratch:

| Order | Script | What It Does |
|-------|--------|--------------|
| 1 | `create-magazine-styles.jsx` | Creates 48 paragraph styles in 6 folders |
| 2 | `create-magazine-char-styles.jsx` | Creates 9 character styles |
| 3 | `create-magazine-masters.jsx` | Creates 6 master pages with margins and columns |
| 4 | `add-master-elements.jsx` | Adds backgrounds, running headers, and page numbers to masters |

### Update Scripts

| Order | Script | What It Does |
|-------|--------|--------------|
| After 1-4 | `update-magazine-additions.jsx` | Creates all 14 CMYK swatches (no longer manual), adds Cover Teaser Page and Redacted paragraph styles. Safe to re-run. |

### Utility Scripts

| Script | What It Does |
|--------|--------------|
| `cleanup-masters.jsx` | Removes all items from master pages A-F (use before re-running add-master-elements) |
| `debug-master-bounds.jsx` | Diagnostic — reports page coordinates and margin values for A-Master |

### Before Running Scripts

1. Open the InDesign document
2. Make sure all fonts are activated in Adobe Fonts (see Section 4)
3. Make sure color swatches exist (create manually or confirm they were set up)
4. Run scripts via Window > Utilities > Scripts panel
5. Place scripts in the Scripts Panel folder or navigate to them

### Manual Setup Steps (Not Automated)

These must be done by hand in InDesign:

- **Color swatches:** Now automated via `update-magazine-additions.jsx` (14 CMYK swatches including Rich Black and Warm Gray 15)
- **Baseline grid:** Edit > Preferences > Grids > Start: 0.75", Increment Every: 15pt
- **Document setup:** File > Document Setup > 8.5x11, facing pages, 0.125" bleed
- **Page assignment:** Apply the correct master page to each page per the Page Map (Section 1)
- **Running header text:** Update "SECTION NAME" on left-side headers to match each section

---

## 9. Page-by-Page Style Guide

This section maps every page to its master page and the paragraph styles you'll most likely need. Use this as a quick-reference when building each page.

---

### Page 1 — Cover

**Master:** E-Cover
**Background:** None (full-bleed cover photo)

| Element | Paragraph Style |
|---------|----------------|
| "ELEVATE" masthead | Cover Masthead |
| Issue line / subtitle | Cover Subtitle |
| Main teaser headline | Cover Teaser Primary |
| Secondary teaser lines | Cover Teaser Secondary |
| Page references ("p. 12") | Cover Teaser Page |

---

### Page 2 — Masthead / Table of Contents

**Master:** A-Editorial
**Background:** Cream (from master)

| Element | Paragraph Style |
|---------|----------------|
| "ELEVATE" title | Masthead Title |
| Staff listing (Brad's multiple titles) | Masthead Staff |
| Section headers in TOC | TOC Section Label |
| Article titles in TOC | TOC Entry |
| Article descriptions in TOC | TOC Description |
| Fine print at bottom | Legal Fine Print |

---

### Page 3 — Letter from the Editor

**Master:** A-Editorial
**Background:** Cream (from master)

| Element | Paragraph Style |
|---------|----------------|
| "LETTER FROM THE EDITOR" label | Section Label |
| The letter body | Body - Editor Letter |
| Brad's sign-off / signature line | Article Byline |

---

### Pages 4-5 — "Welcome to the Workforce"

**Master:** B-Feature Spread
**Background:** Cream (from master)

| Element | Paragraph Style |
|---------|----------------|
| "ASSESSMENT" or act label | Section Label |
| "WELCOME TO THE WORKFORCE" | Article Headline _or_ Article Headline Alt |
| "A Field Guide to Your First Day" | Article Deck |
| Body copy | Body - First Paragraph (first), then Body |
| Brad sidebar pull quote | Brad Quote |
| Brad attribution | Brad Quote Attribution |
| Photo captions | Caption |

---

### Pages 6-7 — "Your Personal Workspace"

**Master:** B-Feature Spread
**Background:** Cream (from master)

| Element | Paragraph Style |
|---------|----------------|
| "YOUR PERSONAL WORKSPACE" | Article Headline _or_ Article Headline Alt |
| "Tour Your New Cell — Sorry, Cubicle" | Article Deck |
| Real estate listing body copy | Body - First Paragraph, then Body |
| Dimensions callout ("6x8 ft") | Infographic Data Value (for the number) |
| Dimensions label | Infographic Data Label |
| Photo captions | Caption |

---

### Pages 8-9 — "The Block: A Neighborhood Guide"

**Master:** B-Feature Spread
**Background:** Cream (from master)

| Element | Paragraph Style |
|---------|----------------|
| "THE BLOCK" | Article Headline Alt |
| "A Neighborhood Guide" | Article Deck |
| Location names (subheads) | Article Subhead |
| Location descriptions | Body |
| Carpet union sidebar | Brad Quote |
| Photo captions | Caption |

---

### Pages 10-11 — Cubicle Shank Ad

**Master:** D-Spread Ad
**Background:** Matte Black (from master)

| Element | Paragraph Style |
|---------|----------------|
| Product name / headline | Ad Headline |
| Product subtitle | Ad Subhead |
| Ad body copy | Ad Body |
| Testimonial quotes | Ad Testimonial |
| Testimonial names | Ad Testimonial Attribution |
| "ORDER NOW" / CTA | Ad CTA |
| Disclaimer text | Ad Fine Print |

---

### Pages 12-13 — "The Morning Loadout"

**Master:** B-Feature Spread
**Background:** Cream (from master)

| Element | Paragraph Style |
|---------|----------------|
| "THE MORNING LOADOUT" | Article Headline Alt |
| "What You're Already Carrying" | Article Deck |
| Gear item names | Article Subhead |
| Gear descriptions | Body |
| Tactical labels ("NERVE AGENT", "CUBICLE SHANK") | Callout Label |
| Pull quote from Brad | Pull Quote |
| Pull quote attribution | Pull Quote Attribution |

---

### Pages 14-15 — "The Code: Translation Guide"

**Master:** B-Feature Spread
**Background:** Cream (from master)

| Element | Paragraph Style |
|---------|----------------|
| "THE CODE" | Infographic Headline |
| "What They Said vs. What They Meant" | Article Deck |
| Translation left side ("What they said") | Spec Table Label |
| Translation right side ("What they meant") | Spec Table Cell |
| Table column headers | Spec Table Header |
| Brad's line at bottom | Brad Quote |
| Annotations | Infographic Annotation |

---

### Page 16 — Lifer Ink Ad

**Master:** C-Full Page Ad
**Background:** Matte Black (from master)

| Element | Paragraph Style |
|---------|----------------|
| Product headline | Ad Headline |
| Wellness tagline | Ad Subhead |
| Ad body copy | Ad Body |
| "Not given. Earned." tagline | Ad CTA |
| Fine print | Ad Fine Print |

---

### Page 17 — Turf Tags Ad

**Master:** C-Full Page Ad
**Background:** Matte Black (from master)

| Element | Paragraph Style |
|---------|----------------|
| "BEFORE / AFTER" headline | Ad Headline |
| Transformation subhead | Ad Subhead |
| Before/after descriptions | Ad Body |
| Fine print | Ad Fine Print |

---

### Pages 18-19 — "The Experiment"

**Master:** B-Feature Spread
**Background:** Cream (from master)

| Element | Paragraph Style |
|---------|----------------|
| "THE EXPERIMENT" | Article Headline |
| "What Happened When We Left a Pen in Conference Room B" | Article Deck |
| Article byline | Article Byline |
| Body text | Body - First Paragraph, then Body |
| Timeline entries / subheads | Article Subhead |
| Pull quote | Pull Quote |
| Pull quote attribution | Pull Quote Attribution |
| Photo captions | Caption |

---

### Pages 20-21 — "The Identity Crisis"

**Master:** B-Feature Spread
**Background:** Cream (from master)

| Element | Paragraph Style |
|---------|----------------|
| "THE IDENTITY CRISIS" | Article Headline |
| "You've Got the Suit. Where's the Proof?" | Article Deck |
| Body copy | Body - First Paragraph, then Body |
| Highlighted quote | Pull Quote |
| Subheads | Article Subhead |
| Photo captions | Caption |

---

### Pages 22-23 — Card Deck Triple Ad

**Master:** D-Spread Ad
**Background:** Matte Black (from master)

| Element | Paragraph Style |
|---------|----------------|
| Product name headlines (Cell Talk, Rap Sheets, Sweet Nothings) | Ad Headline (scaled down as needed) |
| Product descriptions | Ad Body |
| Voice-specific taglines | Ad Subhead |
| Fine print | Ad Fine Print |

---

### Page 24 — "Dear Brad" Advice Column

**Master:** A-Editorial
**Background:** Cream (from master)

| Element | Paragraph Style |
|---------|----------------|
| "DEAR BRAD" section header | Classified Header |
| Reader question letters | Advice Question |
| Reader signatures ("— Hungry in HR") | Advice Question Signature |
| "BRAD SAYS:" label | Advice Answer Label |
| Brad's answer text | Advice Answer |

---

### Pages 25-26 — "Meet the Founder"

**Master:** B-Feature Spread
**Background:** Cream (from master)

| Element | Paragraph Style |
|---------|----------------|
| "MEET THE FOUNDER" | Article Headline Alt |
| Subtitle / deck | Article Deck |
| Profile body text | Body - First Paragraph, then Body |
| Brad pull quotes | Pull Quote |
| Pull quote attributions | Pull Quote Attribution |
| Credential listing / titles | Article Byline |
| Photo captions | Caption |

---

### Page 27 — "The Confiscated"

**Master:** C-Full Page Ad
**Background:** Matte Black (from master)

| Element | Paragraph Style |
|---------|----------------|
| "INCIDENT REPORT" header | Evidence Header |
| Field labels ("ITEM:", "STATUS:", "LOCATION:") | Evidence Field Label |
| Field values | Evidence Field Value |
| "CONFISCATED" stamp text | Ad Headline (with Red Accent character style) |
| Redacted field values ("[REDACTED]") | Redacted |
| Small annotation text | Infographic Annotation |

---

### Pages 28-29 — Mug Shot Reveal

**Master:** D-Spread Ad
**Background:** Matte Black (from master)

| Element | Paragraph Style |
|---------|----------------|
| "THIS IS YOUR MUG SHOT" or reveal headline | Reveal Headline |
| Reveal body text | Reveal Body |
| Tagline | Ad Subhead |
| Photo credit | Photo Credit |

---

### Page 30 — Fine Print / Back Cover

**Master:** F-Back Cover
**Background:** Cream (from master)

| Element | Paragraph Style |
|---------|----------------|
| Subscription gag headline | Classified Header |
| Subscription copy | Body |
| Classified ad titles | Classified Ad Title |
| Classified ad body text | Classified Ad Body |
| Legal fine print | Legal Fine Print |
| Photo credits | Photo Credit |

---

## Quick Reference Card

### "I have body copy to place. Which style?"

- Regular article text → **Body** (or **Body - First Paragraph** for the first paragraph)
- Brad's editor letter → **Body - Editor Letter**
- Text in a product ad on dark background → **Ad Body**
- Text in a callout box → **Callout Box Text**
- Text in a reveal spread on dark background → **Reveal Body**
- Brad's advice answer → **Advice Answer**

### "I have a headline. Which style?"

- Cover masthead → **Cover Masthead**
- Feature article (elegant serif) → **Article Headline**
- Feature article (bold condensed) → **Article Headline Alt**
- Product ad headline (white on black) → **Ad Headline**
- Reveal moment → **Reveal Headline**
- Infographic title → **Infographic Headline**
- Classified section header → **Classified Header**

### "I have a quote. Which style?"

- Big display pull quote → **Pull Quote** + **Pull Quote Attribution**
- Brad sidebar quote → **Brad Quote** + **Brad Quote Attribution**
- Ad testimonial → **Ad Testimonial** + **Ad Testimonial Attribution**
- Advice column reader letter → **Advice Question** + **Advice Question Signature**

### "I have small/technical text. Which style?"

- Photo caption → **Caption**
- Photographer credit → **Photo Credit**
- Table data → **Spec Table Cell**
- Table header → **Spec Table Header**
- Legal disclaimer → **Legal Fine Print**
- Ad disclaimer → **Ad Fine Print**
- Evidence report field → **Evidence Field Label** + **Evidence Field Value**
- Infographic stat → **Infographic Data Value** + **Infographic Data Label**

---

## Cross-References

| Topic | Document |
|-------|----------|
| Page-by-page content plan | `product/copy/magazine-structure-v1.md` |
| Brad's voice and comedy patterns | `product/copy/brad-copy-voice-guide.md` |
| Brad's visual identity | `product/copy/brad-sterling-profile.md` |
| Approved narrative copy | `product/copy/copy-doc-v7.md` |
| Cubicle Shank spread prompt | `prompts/cubicle-shank-spread-prompt.md` |
| Packaging specs (where magazine sits in kit) | `product/specs/packaging-spec-v9.md` |
| Original InDesign technical spec | `product/design/magazine-indesign-spec-v1.md` |

---

## Changelog

| Version | Date | Changes |
|---------|------|---------|
| v1 | May 22, 2026 | Initial reference document. Consolidates all InDesign setup work: 6 master pages, 48 paragraph styles, 9 character styles, 13 color swatches, 4 font families, baseline grid, and page-by-page style mapping. |
| v1.1 | May 25, 2026 | Cross-format review fixes: added Cover Teaser Page and Redacted paragraph styles (now 50 total), added Warm Gray 15 and Rich Black swatches (now 14 total), added Legal Fine Print background color guidance, added update-magazine-additions.jsx script reference. Swatches now automated. |
