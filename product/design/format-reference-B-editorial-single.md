# Format Reference B: Editorial Single Pages
## Pages 2, 3, and 24 | ELEVATE Magazine

**Version:** v1
**Last Updated:** May 25, 2026
**Status:** READY FOR BUILD
**Companion docs:** `product/design/ELEVATE-MAGAZINE-INDESIGN-REFERENCE.md` (InDesign system), `product/copy/magazine-structure-v1.md` (structure), `product/copy/brad-copy-voice-guide.md` (voice)

---

## Table of Contents

1. [Overview](#1-overview)
2. [Layout Architecture -- Page 2 (Masthead / TOC)](#2-layout-architecture--page-2-masthead--toc)
3. [Layout Architecture -- Page 3 (Letter from the Editor)](#3-layout-architecture--page-3-letter-from-the-editor)
4. [Layout Architecture -- Page 24 (Dear Brad Advice Column)](#4-layout-architecture--page-24-dear-brad-advice-column)
5. [Element-by-Element Specifications](#5-element-by-element-specifications)
6. [Typography & Grid](#6-typography--grid)
7. [Visual Interest on Text-Heavy Pages](#7-visual-interest-on-text-heavy-pages)
8. [Photography Direction](#8-photography-direction)
9. [Comedy Integration](#9-comedy-integration)
10. [Format Authenticity](#10-format-authenticity)
11. [Common Pitfalls](#11-common-pitfalls)
12. [Production Checklist](#12-production-checklist)

---

## 1. Overview

### What This Format Is

Format B covers the three single-page editorial layouts in ELEVATE magazine. These are the **text-heaviest pages** in the magazine -- no full-bleed hero images, no dark ad backgrounds, no dramatic reveals. They run on the cream (#F5F0E8) A-Editorial master and depend entirely on typographic hierarchy, smart grid usage, and small visual accents to hold attention.

Despite being text-heavy, these pages are critical. Page 2 is the first interior page the reader sees after the cover. Page 3 is Brad's direct address to the reader. Page 24 is the comedy climax before the Brad profile spread. Every one of them must look like it belongs in a real magazine and reward the reader who actually reads the text.

### Pages Covered

| Page | Content | Sub-Format |
|------|---------|------------|
| 2 | Masthead / Table of Contents | Front-matter TOC |
| 3 | Letter from the Editor | Editor's letter |
| 24 | "Dear Brad" Advice Column | Advice/letters column |

### What These Pages Share

- **Master page:** A-Editorial
- **Background:** Cream (#F5F0E8)
- **Grid:** 6 columns, 0.1667" gutter
- **Margins:** Inside 0.875", Outside 0.625", Top/Bottom 0.75"
- **Running header:** Yes -- section name left, "ELEVATE" right
- **Page number:** Yes -- bottom outside corner
- **Tone:** Brad Mode 2 (personal brand Brad, zero self-awareness)
- **Content density:** High text, minimal imagery

### Real-World References

**Page 2 (Masthead/TOC):**
- *Vanity Fair* front-of-book -- the masthead tucked above a two-column TOC with italic descriptions
- *The New Yorker* contents page -- clean, typographic, small illustrations for visual relief
- *Wired* TOC -- section labels with color coding and brief blurbs under each entry

**Page 3 (Editor's Letter):**
- *Esquire* "Letter from the Editor" -- small portrait, section label, short personal letter, signature
- *GQ* editor page -- headshot in the corner, one column of text, gold or colored accents
- *Fast Company* -- clean section label, no-nonsense layout, byline at the bottom

**Page 24 (Advice Column):**
- *Dear Abby / Ask Polly* -- explicit Q/A labeling, typographic contrast between question and answer
- *The Cut* advice columns -- bold question labels, indented reader letters, columnist photo at top
- *Cosmopolitan* advice pages -- colored blocks, drop caps, clear visual rhythm between letter pairs

---

## 2. Layout Architecture -- Page 2 (Masthead / TOC)

Page 2 is the reader's first interior page. After the cover, they flip and land here. The brain needs to register "this is a real magazine" instantly. A competent masthead and cleanly formatted TOC does that work before the reader processes that Brad holds every staff title.

### The 6-Column Grid Strategy

The page divides into two major zones: a narrow **masthead column** on the left (columns 1-2) and a wider **TOC area** on the right (columns 3-6). This asymmetric split is a standard magazine TOC technique -- it prevents the page from looking like a symmetrical wall of text.

### ASCII Wireframe

```
┌──────────────────────────────────────────────────┐
│  MASTHEAD & CONTENTS          ELEVATE            │  <- Running header
│──────────────────────────────────────────────────│
│                                                  │
│  ┌──────────┐  ┌────────────────────────────┐    │
│  │          │  │                            │    │
│  │ ELEVATE  │  │  FEATURES                  │    │  <- TOC Section Label (Gold, rule below)
│  │ (Masthead│  │  ──────────────────────     │    │
│  │  Title)  │  │                            │    │
│  │          │  │  Welcome to the        04  │    │  <- TOC Entry + page number
│  │──────────│  │  A Field Guide to Your     │    │  <- TOC Description (italic, gray)
│  │          │  │  First Day                 │    │
│  │ STAFF    │  │                            │    │
│  │          │  │  Your Personal          06  │    │
│  │ Editor-  │  │  Tour Your New Cell --     │    │
│  │ in-Chief │  │  Sorry, Cubicle            │    │
│  │ Brad     │  │                            │    │
│  │ Sterling │  │  The Block              08  │    │
│  │          │  │  A Neighborhood Guide       │    │
│  │ Creative │  │                            │    │
│  │ Director │  │  The Morning Loadout   12  │    │
│  │ Brad     │  │  What You're Already       │    │
│  │ Sterling │  │  Carrying                  │    │
│  │          │  │                            │    │
│  │ Lead     │  │  PRODUCTS & SERVICES       │    │  <- TOC Section Label
│  │ Photo-   │  │  ──────────────────────     │    │
│  │ grapher  │  │                            │    │
│  │ Brad     │  │  Executive Tactical    10  │    │
│  │ Sterling │  │  Stylus                    │    │
│  │          │  │                            │    │
│  │ Head of  │  │  Lifer Ink             16  │    │
│  │ Sales    │  │  Turf Tags             17  │    │
│  │ Brad     │  │  Card Decks            22  │    │
│  │ Sterling │  │                            │    │
│  │          │  │  DEPARTMENTS                │    │  <- TOC Section Label
│  │ Sole     │  │  ──────────────────────     │    │
│  │ Subscriber│ │                            │    │
│  │ Brad     │  │  Dear Brad             24  │    │
│  │ Sterling │  │  Meet the Founder      25  │    │
│  │          │  │  The Confiscated        27  │    │
│  │ Intern   │  │  Mug Shot              28  │    │
│  │ Liaison  │  │                            │    │
│  │ Brad     │  └────────────────────────────┘    │
│  │ Sterling │                                    │
│  │          │                                    │
│  └──────────┘                                    │
│                                                  │
│  ELEVATE Magazine is a publication of Elevate    │  <- Legal Fine Print
│  Co. Workplace Solutions Division.               │
│  Circulation: 1. Readership: Aspirational.       │
│                                                  │
│                                                2 │  <- Folio (page number)
└──────────────────────────────────────────────────┘
```

### Grid Allocation

| Zone | Columns | Width (approx) | Content |
|------|---------|-----------------|---------|
| Masthead | 1-2 | 2.35" | Title + staff listing |
| TOC | 3-6 | 4.85" | Section labels, entries, descriptions |
| Fine print | 1-6 (full width) | 7.25" | Legal line across the bottom |

### Key Layout Decisions

**Masthead column (cols 1-2):** The "ELEVATE" masthead title sits at the top of this column in **Masthead Title** (Barlow Black, 24/24pt). Below it, a thin Gold rule (0.5pt) separates the title from the staff listing. The staff listing runs vertically in **Masthead Staff** (IBM Plex Mono, 7.5/10pt) -- one title per line, one name per line, repeating. The monospace font in a narrow column creates the mechanical, institutional look of a real masthead while making it immediately obvious that every name is "Brad Sterling."

**TOC column (cols 3-6):** The TOC organizes into 2-3 sections using **TOC Section Label** (12/15pt, Gold, with a rule below). Under each label, article entries stack in **TOC Entry** (11/15pt) with right-aligned page numbers. Optional italic descriptions in **TOC Description** (9/12pt, gray) sit under key entries. Not every entry needs a description -- use them selectively for the most important features to create visual rhythm rather than a uniform block.

**Fine print strip:** The last 0.75" above the bottom margin holds the publication line in **Legal Fine Print** (5.5/7.5pt). This spans all 6 columns. The text reads: "ELEVATE Magazine is a publication of Elevate Co. Workplace Solutions Division. Circulation: 1. Readership: Aspirational."

---

## 3. Layout Architecture -- Page 3 (Letter from the Editor)

Page 3 is a single short letter -- 60-80 words. The challenge is filling a full 8.5x11" page with 60-80 words without it looking empty or lost. The solution: generous whitespace used intentionally, a small Brad portrait, and a clear vertical hierarchy.

### The 6-Column Grid Strategy

The letter text occupies columns 2-5 (the center 4 of 6 columns), leaving columns 1 and 6 as generous side margins. This narrow text block is a classic editor's letter technique -- it signals "personal communication" rather than "article." The narrower measure also makes 60-80 words feel appropriate for the space.

### ASCII Wireframe

```
┌──────────────────────────────────────────────────┐
│  LETTER FROM THE EDITOR          ELEVATE         │  <- Running header
│──────────────────────────────────────────────────│
│                                                  │
│       LETTER FROM THE EDITOR                     │  <- Section Label (Gold, 10/12pt)
│                                                  │
│                                                  │
│                                                  │  <- Generous top whitespace
│                                                  │     (drop ~2" from top margin)
│                                                  │
│       ┌───────┐                                  │
│       │ Brad  │                                  │  <- Small portrait
│       │ head- │                                  │     (~1.5" x 1.5")
│       │ shot  │                                  │     Left-aligned to col 2
│       └───────┘                                  │
│                                                  │
│       Welcome to the inaugural issue             │  <- Body - Editor Letter
│       of what will undoubtedly become            │     (12/15pt, cols 2-5)
│       the defining voice of workplace            │
│       culture. I built this magazine             │
│       from nothing — which, frankly,             │
│       is how I build everything.                 │
│                                                  │
│       We have plans. A podcast. A                │
│       conference. A branded line of              │
│       motivational hydration.                    │
│       The future is unlimited.                   │
│       The budget is not. But that's              │
│       never stopped me before.                   │
│                                                  │
│                                                  │
│                                                  │
│       BRAD STERLING                              │  <- Article Byline
│       CHIEF VISION OFFICER & FOUNDER             │     (Gold, all caps, 9/11pt)
│       ELEVATE CO.                                │
│                                                  │
│                                                  │  <- Generous bottom whitespace
│                                                  │
│                                                3 │  <- Folio
└──────────────────────────────────────────────────┘
```

### Grid Allocation

| Zone | Columns | Content |
|------|---------|---------|
| Left margin buffer | 1 | Empty -- creates indent |
| Letter body | 2-5 | Section label, portrait, letter text, byline |
| Right margin buffer | 6 | Empty -- creates symmetry |

### Key Layout Decisions

**Section label:** "LETTER FROM THE EDITOR" in **Section Label** (10/12pt, Gold, Barlow Condensed, all caps, wide tracking). Positioned at the top of the text area, aligned left to column 2. This is the kicker -- the small label that tells the reader what format they are looking at.

**Brad portrait:** A small headshot (~1.5" wide x 1.5" tall) positioned at the start of the letter area, left-aligned to column 2. The portrait gets a thin Gold border (0.5pt stroke) or sits in a subtle inset frame. The text does NOT wrap around the portrait -- the portrait sits above the letter text as its own block. This keeps the layout clean and avoids awkward text reflow.

**Letter body:** Set in **Body - Editor Letter** (Freight Text Pro, 12/15pt, left-aligned, no indent). The text starts directly below the portrait with ~18pt of space. At 60-80 words, this produces approximately 5-8 lines of text in the 4-column measure -- a compact, punchy block. No first-line indent. No justified alignment. Left-aligned for personal-letter feel.

**Signature block:** Below the letter text, after ~24-30pt of space, the byline in **Article Byline** (9/11pt, Gold, all caps, Barlow Condensed, wide tracking). Stacked: name, title, company. Three lines maximum.

**Whitespace:** This page is approximately 60% whitespace. That is intentional. The emptiness communicates "this is a letter, not an article." The whitespace below the byline should feel generous but balanced -- the text block should sit slightly above the vertical center of the page, not dead center. A top-heavy composition draws the eye down through the content.

---

## 4. Layout Architecture -- Page 24 (Dear Brad Advice Column)

Page 24 has the most structural complexity of the three pages. It contains 2-3 question/answer pairs, each with distinct visual treatment for the question vs. the answer. The challenge is creating clear visual rhythm so the reader instantly understands the Q/A pattern without any confusion about who is speaking.

### The 6-Column Grid Strategy

The advice column uses columns 1-5 for the main content, with column 6 reserved for a small Brad portrait/caricature at the top. Alternatively, columns 2-6 can be used with column 1 as a buffer. The key decision: Q/A blocks should span at least 4 columns for comfortable reading width, and the column structure should create visual separation between letter pairs.

### ASCII Wireframe

```
┌──────────────────────────────────────────────────┐
│  DEPARTMENTS                     ELEVATE         │  <- Running header
│──────────────────────────────────────────────────│
│                                                  │
│  DEAR BRAD                       ┌──────────┐   │  <- Classified Header (18/18pt)
│  ═══════════════════════         │  Brad     │   │     + rule below
│                                  │  portrait │   │  <- Small portrait (~1.25" sq)
│  Your questions. His answers.    │  (smug    │   │     Cols 5-6 right-aligned
│  Results not guaranteed.         │   grin)   │   │  <- Intro tagline (italic)
│                                  └──────────┘   │
│                                                  │
│  ┌───────────────────────────────────────────┐   │
│  │                                           │   │
│  │  Dear Brad,                               │   │  <- Advice Question (italic)
│  │                                           │   │     Cols 1-4 or 1-5
│  │  My coworker keeps stealing my lunch.     │   │     Cream tint block behind
│  │  I've tried labeling it. I've tried       │   │     (5-8% Warm Gray 40 tint)
│  │  hiding it. I've tried not eating.        │   │
│  │  What do I do?                            │   │
│  │                                           │   │
│  │                 — Hungry in HR            │   │  <- Advice Question Signature
│  │                                           │   │     (right-aligned, IBM Plex Mono)
│  └───────────────────────────────────────────┘   │
│                                                  │
│  BRAD SAYS:                                      │  <- Advice Answer Label
│                                                  │     (Gold, all caps, 11/13pt)
│  Great question. Have you considered that         │  <- Advice Answer (12/15pt)
│  you're not protecting your lunch — you're        │     Standard body style
│  failing to establish territorial sovereignty?    │
│  See page 17.                                    │
│                                                  │
│  ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─     │  <- Thin decorative rule
│                                                  │     (Gold, dashed or dotted, 0.5pt)
│                                                  │
│  ┌───────────────────────────────────────────┐   │
│  │                                           │   │
│  │  Dear Brad,                               │   │  <- Second question
│  │                                           │   │
│  │  My manager schedules meetings during     │   │
│  │  lunch. Is that legal?                    │   │
│  │                                           │   │
│  │              — Starving on the 4th Floor  │   │
│  │                                           │   │
│  └───────────────────────────────────────────┘   │
│                                                  │
│  BRAD SAYS:                                      │
│                                                  │
│  Legal is a strong word. I prefer                 │
│  "entrepreneurially flexible." Your manager       │
│  isn't stealing your lunch hour — they're         │
│  investing in your availability. That's           │
│  called leadership.                              │
│                                                  │
│  ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─     │
│                                                  │
│  [Optional: Third Q/A if space allows]           │
│                                                  │
│                                               24 │  <- Folio
└──────────────────────────────────────────────────┘
```

### Grid Allocation

| Zone | Columns | Content |
|------|---------|---------|
| Header + portrait | 1-4 (header), 5-6 (portrait) | "DEAR BRAD" title, Brad portrait |
| Question blocks | 1-5 | Reader letters with tinted background |
| Answer blocks | 1-5 | Brad's responses |
| Dividers | 1-5 | Decorative rules between Q/A pairs |

### Key Layout Decisions

**Header zone:** "DEAR BRAD" in **Classified Header** (18/18pt, Barlow Condensed Black, with a 1pt Matte Black rule below). This header sits at the top of the content area. A Brad portrait (~1.25" square) floats in columns 5-6, top-right, giving the page a "columnist headshot" feel. Below the header, a one-line intro tagline in italic body text: "Your questions. His answers. Results not guaranteed."

**Question blocks:** Each reader letter gets a subtle background tint to visually separate it from Brad's answers. Use a rectangle filled with Warm Gray 40 at 15-20% tint (or a 5% black tint -- test on press proof). The letter text sits inside this block in **Advice Question** (Freight Text Pro Italic, 12/15pt) with 12pt inset on all sides. The fake signature (e.g., "-- Hungry in HR") sits right-aligned in **Advice Question Signature** (IBM Plex Mono, 8/10pt).

**Answer blocks:** "BRAD SAYS:" in **Advice Answer Label** (11/13pt, Gold, Barlow Condensed, all caps). The answer text follows in **Advice Answer** (Freight Text Pro, 12/15pt) -- the same weight and size as standard body text. No background tint on the answer -- this contrast (tinted question, no-tint answer) creates the visual rhythm research identifies as critical for advice columns.

**Dividers:** A thin decorative rule in Gold (0.5pt, dashed or dotted) separates each Q/A pair. This prevents the page from reading as one long stream and gives each exchange its own visual container.

**Pacing:** Aim for 2 Q/A pairs as the primary plan. A third shorter pair can fit if the questions and answers are kept brief (under 30 words each). Do not force a third pair if it compresses the vertical spacing. White space between pairs is more valuable than cramming content.

---

## 5. Element-by-Element Specifications

### Page 2 Elements

| Element | Paragraph Style | Font | Size/Leading | Color | Alignment | Position |
|---------|----------------|------|-------------|-------|-----------|----------|
| "ELEVATE" masthead title | **Masthead Title** | Barlow Condensed Black | 24/24pt | Matte Black | Left | Cols 1-2, top of content area |
| Rule below masthead title | Manual | -- | 0.5pt weight | Gold | -- | Full width of cols 1-2 |
| Staff title | **Masthead Staff** | IBM Plex Mono Regular | 7.5/10pt | Charcoal (K:85) | Left | Cols 1-2, below rule |
| Staff name ("Brad Sterling") | **Masthead Staff** | IBM Plex Mono Regular | 7.5/10pt | Matte Black (K:100) | Left | Cols 1-2, below each title |
| TOC section label | **TOC Section Label** | Barlow Condensed SemiBold | 12/15pt | Gold | Left | Cols 3-6, with rule below |
| TOC article entry | **TOC Entry** | Freight Text Pro Medium | 11/15pt | Matte Black | Left (title), Right (page #) | Cols 3-5 (title), Col 6 (page #) |
| TOC description | **TOC Description** | Freight Text Pro Book Italic | 9/12pt | Warm Gray 80 | Left | Cols 3-5, below entry |
| Fine print | **Legal Fine Print** | IBM Plex Mono Light | 5.5/7.5pt | Warm Gray 40 | Left | Cols 1-6, bottom of page |
| Running header | **Running Header** | (from master) | 7.5/9pt | Warm Gray 40 | Left/Right | Top of page (from master) |
| Page number | **Folio** | (from master) | 9/9pt | Warm Gray 40 | Outside | Bottom outside corner |

**Staff listing format:** The staff section stacks as repeating pairs -- title in Charcoal, name in Matte Black. Use a 6pt space-after on each name to create breathing room between entries. The titles to list:

1. Editor-in-Chief
2. Creative Director
3. Lead Photographer
4. Head of Sales
5. Sole Subscriber
6. Intern Liaison

All names: "Brad Sterling"

**TOC page numbers:** Use a right-indent tab stop aligned to the right edge of column 6. Fill the space between the entry title and page number with a dot leader or leave it as empty space -- both are standard. Dot leaders are more traditional (Vanity Fair style). Clean space is more modern (Wired style). For ELEVATE's mix of traditional and absurd, dot leaders lean into the real-magazine authenticity.

### Page 3 Elements

| Element | Paragraph Style | Font | Size/Leading | Color | Alignment | Position |
|---------|----------------|------|-------------|-------|-----------|----------|
| "LETTER FROM THE EDITOR" | **Section Label** | Barlow Condensed Bold | 10/12pt | Gold | Left | Col 2, top of content area |
| Brad portrait | Image | -- | ~1.5" x 1.5" | -- | Left | Col 2, below section label |
| Portrait border | Manual stroke | -- | 0.5pt | Gold | -- | Around portrait frame |
| Letter body | **Body - Editor Letter** | Freight Text Pro Book | 12/15pt | Charcoal (K:85) | Left | Cols 2-5 |
| Byline name | **Article Byline** | Barlow Condensed Medium | 9/11pt | Gold | Left | Cols 2-5, below letter body |
| Byline title/company | **Article Byline** | Barlow Condensed Medium | 9/11pt | Gold | Left | Cols 2-5, below name |
| Running header | **Running Header** | (from master) | 7.5/9pt | Warm Gray 40 | Left/Right | Top (from master) |
| Page number | **Folio** | (from master) | 9/9pt | Warm Gray 40 | Outside | Bottom outside corner |

**Letter specifications:**
- Word count: 60-80 words
- No first-line indent
- No justified alignment -- left-aligned only
- Paragraph space-after: 12pt (one baseline grid increment below standard)
- The letter should read as 2-3 short paragraphs, not one block

**Byline specifications:**
- All caps
- Tracking: +80 (wide)
- Three lines maximum: name / title / company
- Space-before: 24pt minimum (clear separation from letter text)

### Page 24 Elements

| Element | Paragraph Style | Font | Size/Leading | Color | Alignment | Position |
|---------|----------------|------|-------------|-------|-----------|----------|
| "DEAR BRAD" header | **Classified Header** | Barlow Condensed Black | 18/18pt | Matte Black | Left | Cols 1-4, top of content area |
| Rule below header | Built into style | -- | 1pt weight | Matte Black | -- | Full width of cols 1-4 |
| Intro tagline | **TOC Description** | Freight Text Pro Book Italic | 9/12pt | Warm Gray 80 | Left | Cols 1-4, below header rule |
| Brad portrait | Image | -- | ~1.25" x 1.25" | -- | Right | Cols 5-6, top right |
| Portrait border | Manual stroke | -- | 0.75pt | Gold | -- | Around portrait frame |
| Question background | Rectangle | -- | -- | Warm Gray 40 at 15-20% | -- | Behind each question block |
| "Dear Brad," salutation | **Advice Question** | Freight Text Pro Book Italic | 12/15pt | Charcoal | Left | Cols 1-5, inside tint block |
| Question body | **Advice Question** | Freight Text Pro Book Italic | 12/15pt | Charcoal | Left | Cols 1-5, inside tint block |
| Question signature | **Advice Question Signature** | IBM Plex Mono Regular | 8/10pt | Charcoal | Right | Cols 1-5, inside tint block |
| "BRAD SAYS:" label | **Advice Answer Label** | Barlow Condensed SemiBold | 11/13pt | Gold | Left | Cols 1-5, below question block |
| Answer text | **Advice Answer** | Freight Text Pro Book | 12/15pt | Charcoal | Left | Cols 1-5, below label |
| Q/A divider rule | Manual | -- | 0.5pt, dashed | Gold | Center | Cols 1-5, between Q/A pairs |

**Question block tint specification:**
- Create a rectangle behind each question block
- Fill: Warm Gray 40 swatch at 15-20% tint
- Corner radius: 0 (sharp corners -- matches institutional feel)
- Inset text by 12pt on all four sides
- The tint must be subtle enough to register as "this is different" without competing with the text
- Print a test page -- tints below 8% may vanish on glossy stock

**Divider rule specification:**
- 0.5pt stroke weight
- Gold swatch
- Dashed pattern: 6pt dash, 4pt gap
- Spans the width of columns 1-5
- 18pt space above and below the rule

---

## 6. Typography & Grid

### The 6-Column Grid on Text-Heavy Pages

The 6-column grid provides flexibility that a 2- or 3-column grid cannot. On these editorial pages, you never use all 6 columns as 6 independent text columns. Instead, you combine columns into wider zones:

| Configuration | Used On | Effect |
|---------------|---------|--------|
| 2 + 4 (asymmetric split) | Page 2 | Narrow masthead, wide TOC. Creates visual hierarchy through column width contrast. |
| 1 + 4 + 1 (centered with margins) | Page 3 | Centered text block with generous side buffers. Signals "personal letter" rather than "article." |
| 5 + 1 (main + sidebar) | Page 24 | Full-width Q/A content with portrait in the corner. |

**Why not just use 2 or 3 columns?** Because the 6-column grid lets you make these decisions page by page while keeping all pages on the same underlying structure. The gutters align. The baselines align. The running headers align. The grid is invisible to the reader but makes every page feel like it belongs to the same magazine.

### Baseline Grid Alignment

The document uses a 15pt baseline grid starting at 0.75" from the top edge. All body text (12/15pt leading) snaps to this grid. Alignment rules:

| Text Type | Grid Behavior |
|-----------|---------------|
| Body - Editor Letter (12/15pt) | Snaps to baseline grid. Every line sits on a 15pt increment. |
| Advice Question (12/15pt) | Snaps to baseline grid. |
| Advice Answer (12/15pt) | Snaps to baseline grid. |
| TOC Entry (11/15pt) | Snaps to baseline grid (15pt leading matches grid). |
| TOC Description (9/12pt) | Does NOT snap to grid. Its 12pt leading intentionally breaks from the grid to tuck tightly under the entry it describes. |
| Masthead Staff (7.5/10pt) | Does NOT snap to grid. Small text in the masthead column runs on its own leading. |
| Legal Fine Print (5.5/7.5pt) | Does NOT snap to grid. Fine print is too small to benefit from grid alignment. |
| Section labels, headers | Do NOT snap to grid. Display elements create their own vertical rhythm. |

**The rule:** All text at 12pt or above on 15pt leading snaps to the baseline grid. Everything else runs freeform. This keeps columns aligned across the page at the body-text level while giving small and display text freedom to breathe.

### Preventing Wall-of-Text Syndrome

These three pages contain more text per square inch than any other pages in the magazine. Without careful hierarchy, they become gray blocks that the reader skips. Every hierarchy break is a re-entry point for the scanning eye:

**Page 2 (Masthead/TOC) hierarchy breaks:**
1. The asymmetric column split itself (the left column is visually distinct from the right)
2. TOC Section Labels in Gold with rules below (3 section dividers)
3. Alternation between bold entry titles and italic descriptions
4. The monospace staff listing (a different texture from the serif TOC)
5. Page numbers creating a right-aligned rhythm column

**Page 3 (Editor Letter) hierarchy breaks:**
1. The Gold section label at the top
2. The Brad portrait (an image among text)
3. Generous whitespace above and below the letter (the emptiness IS the hierarchy)
4. The Gold byline at the bottom (a color change that frames the letter)

**Page 24 (Advice Column) hierarchy breaks:**
1. The "DEAR BRAD" header with its rule below
2. The Brad portrait in the corner
3. Question-block tint rectangles vs. answer text on plain cream
4. "BRAD SAYS:" labels in Gold (a color and weight shift)
5. Dashed Gold divider rules between Q/A pairs
6. The alternation of italic (question) and roman (answer) text
7. The monospace signatures vs. the serif body text

---

## 7. Visual Interest on Text-Heavy Pages

These techniques are drawn from the research findings and adapted to the ELEVATE design system. Each one maps to a specific InDesign implementation.

### Drop Caps

**Where to use:** The first letter of Brad's editor letter (page 3). A 3-line drop cap in Freight Display Pro Bold transforms the opening word into a visual anchor. Set the drop cap color to Gold for a branded touch.

**InDesign implementation:** Select the first character. Open Paragraph panel > Drop Caps and Nested Styles. Set "Lines" to 3 and "Characters" to 1. Override the character to Freight Display Pro Bold, Gold color.

**Where NOT to use:** Not on page 2 (the masthead/TOC doesn't have a body text opening that warrants a drop cap) and not on page 24 (the italic reader questions are not the right context; the "BRAD SAYS:" label already serves as the visual entry point for each answer).

### Decorative Rules

Rules (horizontal lines) are the workhorse visual element on these text pages. They create structure without adding images.

| Rule | Page | Style | Weight | Color | Purpose |
|------|------|-------|--------|-------|---------|
| Below masthead title | 2 | Solid | 0.5pt | Gold | Separates title from staff listing |
| Below TOC section labels | 2 | Solid | 0.5pt | Gold | Built into TOC Section Label style; creates section dividers |
| Below "DEAR BRAD" header | 24 | Solid | 1pt | Matte Black | Built into Classified Header style; grounds the page |
| Between Q/A pairs | 24 | Dashed | 0.5pt | Gold | Separates advice exchanges |

### Colored Text as Visual Accents

On cream backgrounds, Gold text pops without competing with the body text. Every instance of Gold on these pages serves a functional purpose:

- **Section labels** (Gold): "LETTER FROM THE EDITOR" on page 3
- **TOC Section Labels** (Gold): "FEATURES", "PRODUCTS & SERVICES", "DEPARTMENTS" on page 2
- **Bylines** (Gold): Brad's signature on page 3
- **Answer labels** (Gold): "BRAD SAYS:" on page 24
- **Rules** (Gold): Decorative lines on pages 2 and 24

The Gold never appears in body text. It is reserved for navigation and hierarchy elements only.

### Small Portraits as Visual Anchors

A single small image on an otherwise all-text page creates a focal point that prevents the page from reading as a gray block. Both pages 3 and 24 use small Brad portraits. These serve double duty: visual relief AND character establishment (the reader sees who is "speaking").

### Tint Blocks for Contrast

Page 24 uses subtle Warm Gray tint rectangles behind the reader questions. This technique (from research Section 7.1: "color-coded or iconified Q vs. A blocks -- creates visual rhythm") is the single most effective way to differentiate questions from answers without adding heavy graphics.

**Production note:** On glossy stock, very light tints (below 8%) may not reproduce. Test the Warm Gray 40 at 15-20% tint on a press proof. If it disappears, increase to 25% or switch to a 5% Matte Black tint, which has more visual mass.

### Using Cream as a Design Element

The cream background (#F5F0E8, C:3/M:5/Y:10/K:0) is not just a neutral -- it is a gentle warm hue that provides visual softness. The cream removes the clinical harshness of pure white while maintaining readability.

On these pages, the cream IS the design element. It provides:
- Warmth that makes serif body text inviting to read
- Subtle contrast with any white elements (portrait borders, tint blocks)
- A unified look across all A-Editorial pages

Do not add background patterns, textures, or gradients to the cream. The cream stays flat and clean. Visual interest comes from typography, rules, and the rare small image -- not from busy backgrounds.

---

## 8. Photography Direction

These three pages are the lightest on photography in the entire magazine. Each page has at most one small portrait. The photography exists to break up text and establish Brad's presence -- not to carry the page.

### Page 3 -- Brad Portrait (Editor Letter)

**Size:** ~1.5" wide x 1.5" tall
**Position:** Left-aligned to column 2, above the letter body
**Frame:** 0.5pt Gold border stroke
**Content:** Brad Sterling headshot -- purple satin shirt, aviator sunglasses, big smile, gold chain visible. This is the same Brad from the cover, but cropped tighter. Chest-up framing. Background should be neutral (dark charcoal or studio black) so it reads cleanly against the cream page.

**Art direction:** The headshot should look like the kind of small portrait you see next to a real editor's letter -- professional, clean, studio-lit. Brad should be looking directly at the camera with his trademark oversized grin. The portrait is small enough that details like chain links or sunglass reflections won't be legible. Focus on the expression and the purple shirt.

**Sizing in InDesign:** Place the image in a frame with "Fill Frame Proportionally" and "Auto-Fit" enabled. The frame dimensions (1.5" x 1.5") determine the display size. Apply the 0.5pt Gold stroke to the frame, not the image.

### Page 24 -- Brad Portrait (Advice Column)

**Size:** ~1.25" wide x 1.25" tall
**Position:** Right-aligned to columns 5-6, top-right of content area (next to the "DEAR BRAD" header)
**Frame:** 0.75pt Gold border stroke
**Content:** Brad Sterling -- slightly different angle from page 3. Consider a "thinking" or "leaning forward" pose, as if Brad is about to dispense wisdom. Same outfit. A three-quarter angle or slight head tilt gives this portrait a different energy from the straight-on editor headshot.

**Art direction:** This portrait should suggest "advice columnist." Think of the small headshot that runs next to Dear Abby or Dan Savage. The expression should be confident and slightly conspiratorial -- Brad knows the answer, and he's about to change your life. The portrait is even smaller than page 3, so the expression needs to read at ~1.25" -- strong contrast, clear eyes, unmistakable smile.

### General Portrait Rules for Text Pages

- Always use a frame with a Gold stroke (0.5pt-0.75pt) to separate the portrait from the cream background
- Never let text wrap around small portraits on these pages -- it creates awkward gaps at this scale
- Portraits sit as independent blocks above or beside the text, not embedded in it
- The portrait image should be at minimum 300dpi at the placed size (so a 1.5" placement needs at least a 450px image)
- If the Midjourney source image has a white background, do NOT use Multiply blend mode on cream pages -- crop the image or use a clipping path. Multiply against cream creates a yellow color shift.

---

## 9. Comedy Integration

### Page 2 -- The Multiple Titles (Masthead/TOC)

The joke: Brad holds every title at the magazine. Every single staff listing says "Brad Sterling." The humor is structural -- it emerges from the format itself, not from any single punchline.

**How the layout serves the comedy:**

The masthead column runs vertically in monospace type, which makes the repetition mechanical and relentless. Each "Brad Sterling" looks identical. Each title is different. The brain processes the pattern by the third entry and then keeps going -- Editor-in-Chief, Creative Director, Lead Photographer, Head of Sales, Sole Subscriber, Intern Liaison. Six titles. One name. The escalation from legitimate titles (Editor-in-Chief) to absurd ones (Sole Subscriber) is the comedy progression.

**What NOT to do:** Do not call attention to the joke. No asterisks. No "yes, that's the same person" footnote. The format presents it straight. The monospace font treats each title with the same institutional weight. The reader discovers the joke themselves.

The fine print at the bottom ("Circulation: 1. Readership: Aspirational.") is the kicker -- a second joke that lands after the reader has already processed the masthead absurdity. It should be small enough to feel like a bonus discovery, not a headline.

### Page 3 -- Brad's Sincere Delusion (Editor Letter)

The joke: Brad is launching a media empire. There will never be a second issue. He does not know this. He is THRILLED.

**How the layout serves the comedy:**

The generous whitespace, the small portrait, the centered text block, the Gold byline -- all of it says "this is a real editor's letter." The sincerity of the format makes the content funnier. Brad writes like a real magazine editor. He has plans. He mentions a podcast, a conference, "a branded line of motivational hydration." Each escalation is delivered with the same calm editorial confidence.

**The Mode 2 voice:** This is personal-brand Brad at maximum. The letter should sound like a LinkedIn post that became sentient and started publishing itself. The copy stays short (60-80 words) because brevity makes each sentence land harder. Every sentence should contain one escalation that the reader can process before the next one hits.

**Whitespace as comedy tool:** The emptiness around the letter communicates Brad's confidence. He does not fill the page because he does not feel the need to. He has said what needs to be said. The white space reads as self-assurance. A longer letter would undercut the joke -- Brad is not explaining himself. He is declaring.

### Page 24 -- Confidently Wrong Advice (Dear Brad)

The joke: Brad answers reader questions with total confidence. Every answer is wrong. Not cruelly wrong -- enthusiastically, structurally wrong. He reframes every problem as a personal branding opportunity.

**How the layout serves the comedy:**

The Q/A format creates a setup/punchline rhythm. The question is the setup (a relatable office complaint in italic). The "BRAD SAYS:" label is the beat. The answer is the punchline (Brad's reframe).

**Visual rhythm as comedy pacing:** The tinted question blocks and plain answer blocks create a visual alternation that mirrors the comedic alternation of "normal person" (question) and "Brad" (answer). The monospace signatures on the questions ("-- Hungry in HR") are workplace-comedy character names that set the tone before Brad's answer lands.

**The cross-reference technique:** Brad's answers should reference other pages in the magazine -- "See page 17" (Turf Tags), "I address this in my keynote (page 25)." This makes the advice column feel connected to the larger magazine while also being an absurd self-promotional move. The reader who flips to the referenced page finds another joke waiting.

**Answer length:** Brad's answers should be 20-40 words each -- punchy, confident, conclusive. He does not hedge. He does not consider alternatives. He has one answer, delivered with the certainty of a man who has never been wrong because he has never considered the possibility.

---

## 10. Format Authenticity

What makes a reader's brain categorize each page as a real magazine element before they process the comedy content?

### Page 2 -- "This Is a Real TOC"

The brain recognizes a table of contents through these signals:

1. **Staff listing in a narrow column.** Every magazine has a masthead -- a list of names and titles in small type. The narrow column, the monospace font, the institutional structure -- these are the visual fingerprint of "front matter."

2. **Section dividers with consistent formatting.** The Gold TOC Section Labels with rules below create the unmistakable rhythm of a categorized contents list. Sections like "FEATURES," "PRODUCTS & SERVICES," and "DEPARTMENTS" are exactly how real magazine TOCs organize.

3. **Page numbers right-aligned.** The page numbers in a right-aligned column (optionally with dot leaders) are the single strongest "this is a TOC" signal. No other page type uses right-aligned numbers in a column.

4. **Brief descriptions under entries.** The italic gray descriptions under selected entries match the pattern readers know from *Vanity Fair*, *The Atlantic*, or *Wired* TOCs.

5. **The running header reading "MASTHEAD & CONTENTS."** This text in the master-page running header position cements the identification.

### Page 3 -- "This Is a Real Editor's Letter"

1. **Small portrait of the editor.** Every magazine editor's letter has this -- a small headshot in the upper portion of the page.

2. **Section label above the text.** "LETTER FROM THE EDITOR" in small caps/gold acts as the genre flag.

3. **Short, personal-voice text.** The letter is visibly short. It occupies less than half the page. It is clearly one person talking directly to the reader, not an article.

4. **Signed with a name and title.** The byline at the bottom in a different color/weight from the body text signals "this person wrote this." Real editor letters always have this.

5. **Generous whitespace.** Editor letters in real magazines are never crammed. The emptiness signals importance and personal address.

### Page 24 -- "This Is a Real Advice Column"

1. **Column title with columnist identity.** "DEAR BRAD" at the top with a portrait immediately reads as advice column. The "Dear [Name]" format is burned into cultural memory from decades of newspaper columns.

2. **Italic questions, roman answers.** The typographic contrast between reader letters (italic, indented, tinted background) and columnist responses (roman, plain background) is the defining visual pattern of advice columns.

3. **Signed reader questions.** The "-- Hungry in HR" signatures in monospace type at the right edge are the format's signature element. Every advice column has these pseudonymous sign-offs.

4. **"BRAD SAYS:" labels.** Explicit Q/A labeling (research Section 7.1: "explicit Q/A labels in all-caps") removes any ambiguity about who is speaking. The Gold color makes these labels scan instantly.

5. **Repeated Q/A structure.** Multiple questions and answers on the same page, with visual dividers between them, creates the unmistakable rhythm of an advice column.

---

## 11. Common Pitfalls

### Wall-of-Text (All Three Pages)

**The problem:** Text-heavy pages on cream backgrounds can look like a manuscript page rather than a magazine page.

**The fix:** Every page must have at minimum 4 distinct visual elements that break the text flow -- labels, rules, portraits, tint blocks, color changes, or whitespace breaks. Count them. If the page has fewer than 4, add hierarchy.

### Uniform Spacing (Page 2)

**The problem:** Making every TOC entry the same height with the same space above and below creates a monotonous column.

**The fix:** Vary the spacing. Entries with descriptions get more vertical space than entries without. Section labels with their Gold rules create larger breaks. The alternation of spacious and compact creates rhythm.

### Overfilled Editor Letter (Page 3)

**The problem:** Writing more than 80 words because the page "looks empty."

**The fix:** The emptiness is intentional. A real magazine editor's letter is short and confident. If the page feels empty, the solution is NOT more text -- it is a slightly larger portrait, a decorative initial cap, or a thin Gold rule under the byline. The whitespace IS the design.

### Invisible Tint Blocks (Page 24)

**The problem:** Tint blocks that look fine on screen but vanish on glossy printed stock.

**The fix:** Use Warm Gray 40 at 15-20% tint minimum. Print a test page on glossy stock (or the closest available proxy) before finalizing. If the tint disappears, increase to 25% or switch to a 5% Matte Black tint. The tint blocks are structurally important -- they create the Q/A visual rhythm. If they disappear, the page loses its format identity.

### Inconsistent Running Headers

**The problem:** Forgetting to update the running header text on the A-Editorial master page override for each page.

**The fix:** Page 2 running header left side: "MASTHEAD & CONTENTS." Page 3: "LETTER FROM THE EDITOR." Page 24: "DEPARTMENTS." These are set by overriding the master text frame on each page. Keep "ELEVATE" on the right side for all pages.

### Cramming Three Q/A Pairs (Page 24)

**The problem:** Forcing a third question/answer pair when there isn't enough vertical space, resulting in compressed spacing and a claustrophobic page.

**The fix:** Plan for 2 pairs as the default. A third pair works only if all three questions are short (under 25 words) and all three answers are brief (under 35 words). If the third pair requires reducing space between elements below 12pt, cut it. Two well-spaced pairs with room to breathe are better than three cramped ones.

### Symmetry Trap (Page 2)

**The problem:** Centering the masthead and making both columns equal width because it "looks balanced."

**The fix:** Asymmetry is intentional. The masthead column (cols 1-2) is deliberately narrower than the TOC column (cols 3-6). This contrast creates visual hierarchy -- the TOC is the primary content, the masthead is the sidebar. Centering would destroy this hierarchy and make the page look like a generic text layout.

---

## 12. Production Checklist

### Page 2 -- Masthead / Table of Contents

Build order:

- [ ] Assign **A-Editorial** master page to page 2
- [ ] Override running header text: left side "MASTHEAD & CONTENTS"
- [ ] **Masthead column (cols 1-2):**
  - [ ] Create text frame spanning columns 1-2, from top margin to ~2" above bottom margin
  - [ ] Type "ELEVATE" in **Masthead Title** (Barlow Black, 24/24pt)
  - [ ] Draw a 0.5pt Gold rule below the title, spanning the column width
  - [ ] Below the rule, begin staff listing in **Masthead Staff** (IBM Plex Mono, 7.5/10pt)
  - [ ] List all 6 title/name pairs: Editor-in-Chief, Creative Director, Lead Photographer, Head of Sales, Sole Subscriber, Intern Liaison -- all "Brad Sterling"
  - [ ] Set space-after on each name line to 6pt for breathing room
- [ ] **TOC column (cols 3-6):**
  - [ ] Create text frame spanning columns 3-6, from top margin to ~1" above bottom margin
  - [ ] Add first section: "FEATURES" in **TOC Section Label** (Gold, rule below)
  - [ ] Add TOC entries in **TOC Entry** with right-aligned page numbers
  - [ ] Add italic descriptions under select entries in **TOC Description**
  - [ ] Add second section: "PRODUCTS & SERVICES" in **TOC Section Label**
  - [ ] Add product ad entries with page numbers
  - [ ] Add third section: "DEPARTMENTS" in **TOC Section Label**
  - [ ] Add remaining entries (Dear Brad, Meet the Founder, etc.)
  - [ ] Set up right-indent tab for page number alignment (with or without dot leaders)
- [ ] **Fine print strip (cols 1-6):**
  - [ ] Create text frame at the bottom of the page, spanning all 6 columns
  - [ ] Type publication line in **Legal Fine Print** (5.5/7.5pt)
  - [ ] Include: "Circulation: 1. Readership: Aspirational."
- [ ] Verify baseline grid alignment on TOC Entry lines
- [ ] Verify masthead column and TOC column tops align
- [ ] Proof all page numbers against the page map in the InDesign reference

### Page 3 -- Letter from the Editor

Build order:

- [ ] Assign **A-Editorial** master page to page 3
- [ ] Override running header text: left side "LETTER FROM THE EDITOR"
- [ ] **Section label:**
  - [ ] Create text frame at the top of the content area, columns 2-5
  - [ ] Type "LETTER FROM THE EDITOR" in **Section Label** (Gold, 10/12pt)
- [ ] **Brad portrait:**
  - [ ] Create an image frame, 1.5" x 1.5", left-aligned to column 2
  - [ ] Position ~24pt below the section label
  - [ ] Place Brad headshot image (purple satin shirt, aviators, big smile)
  - [ ] Set "Fill Frame Proportionally" + "Auto-Fit"
  - [ ] Apply 0.5pt Gold stroke to the frame
- [ ] **Letter body:**
  - [ ] Create text frame spanning columns 2-5, from ~18pt below portrait to ~2.5" above bottom margin
  - [ ] Type or place the editor letter copy (60-80 words) in **Body - Editor Letter**
  - [ ] Apply 3-line drop cap to the first character: Freight Display Pro Bold, Gold color
  - [ ] Verify left-aligned, no first-line indent
  - [ ] Verify text snaps to baseline grid
- [ ] **Byline:**
  - [ ] Below the letter text, with 24pt+ space-before
  - [ ] Type Brad's name, title, and company in **Article Byline** (Gold, all caps, wide tracking)
  - [ ] Verify all three lines of the byline are in the same style
- [ ] Check overall vertical balance: text block should sit in the upper 60% of the page
- [ ] Verify generous whitespace below the byline (at minimum 2.5" of empty space at the bottom)

### Page 24 -- "Dear Brad" Advice Column

Build order:

- [ ] Assign **A-Editorial** master page to page 24
- [ ] Override running header text: left side "DEPARTMENTS"
- [ ] **Header zone:**
  - [ ] Create text frame spanning columns 1-4, at top of content area
  - [ ] Type "DEAR BRAD" in **Classified Header** (18/18pt, rule below)
  - [ ] Below the header, add intro tagline in **TOC Description** (italic, gray): "Your questions. His answers. Results not guaranteed."
- [ ] **Brad portrait:**
  - [ ] Create an image frame, ~1.25" x 1.25", in columns 5-6, top right
  - [ ] Place Brad portrait image (advice-columnist pose -- slight lean, confident expression)
  - [ ] Set "Fill Frame Proportionally" + "Auto-Fit"
  - [ ] Apply 0.75pt Gold stroke to the frame
- [ ] **First Q/A pair:**
  - [ ] Draw a rectangle spanning columns 1-5 for the question tint block
  - [ ] Fill with Warm Gray 40 at 15-20% tint, no stroke
  - [ ] Create text frame inside the rectangle with 12pt inset on all sides
  - [ ] Type "Dear Brad," and the question in **Advice Question** (italic, 12/15pt)
  - [ ] Type the signature (e.g., "-- Hungry in HR") in **Advice Question Signature** (right-aligned, IBM Plex Mono, 8/10pt)
  - [ ] Below the tint block, ~12pt of space
  - [ ] Type "BRAD SAYS:" in **Advice Answer Label** (Gold, all caps, 11/13pt)
  - [ ] Type Brad's answer in **Advice Answer** (12/15pt)
- [ ] **Divider:**
  - [ ] Draw a 0.5pt dashed Gold rule spanning columns 1-5
  - [ ] 18pt above and below the rule
- [ ] **Second Q/A pair:**
  - [ ] Repeat the same structure: tint block, question, signature, "BRAD SAYS:", answer
- [ ] **Optional third Q/A pair:**
  - [ ] Only if space allows without compressing vertical spacing below 12pt
  - [ ] If adding, use a shorter question and a shorter answer
- [ ] Verify all question tint blocks are the same width and have the same tint value
- [ ] Verify all "BRAD SAYS:" labels are the same style and color
- [ ] Verify baseline grid alignment on all 12/15pt body text
- [ ] Print test page to verify tint block visibility on glossy stock
- [ ] Proof any page cross-references in Brad's answers against the page map

---

## Cross-References

| Topic | Document |
|-------|----------|
| Complete InDesign system (all styles, masters, colors) | `product/design/ELEVATE-MAGAZINE-INDESIGN-REFERENCE.md` |
| Page-by-page content structure | `product/copy/magazine-structure-v1.md` |
| Brad's voice and comedy patterns | `product/copy/brad-copy-voice-guide.md` |
| Brad's visual identity | `product/copy/brad-sterling-profile.md` |
| Approved narrative copy | `product/copy/copy-doc-v7.md` |
| Cubicle Shank spread (companion layout reference) | `product/design/cubicle-shank-spread-layout-v1.md` |
| Research briefing (source for design techniques) | `product/design/MAGAZINE-RESEARCH-BRIEFING.md` |

---

## Changelog

| Version | Date | Changes |
|---------|------|---------|
| v1 | May 25, 2026 | Initial format reference. Full layout architecture for pages 2, 3, and 24. ASCII wireframes, element-by-element specs, typography/grid guidance, visual interest techniques, photography direction, comedy integration notes, format authenticity signals, pitfall warnings, and step-by-step production checklists. |
