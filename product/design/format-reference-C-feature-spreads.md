# Format Reference C: Feature Spreads — Cream Background

**Version:** v1
**Last Updated:** May 25, 2026
**Status:** ACTIVE — Use this document when building any B-Feature Spread page.
**Covers:** Pages 4-5, 6-7, 8-9, 12-13, 14-15, 18-19, 20-21, 25-26
**Master page:** B-Feature Spread
**Companion docs:** `product/design/ELEVATE-MAGAZINE-INDESIGN-REFERENCE.md` (InDesign system), `product/copy/magazine-structure-v1.md` (page-by-page structure)

> **What this document is:** The design bible for all 8 feature spreads in the ELEVATE magazine. These spreads share one master page but mimic 7 different real-magazine sub-formats. This document defines how to make each spread feel like a distinct genre while maintaining cohesion as one publication. It provides layout architectures, typography mappings, photography direction, gutter handling, pacing strategy, and production checklists for every sub-format.

> **The core challenge:** Eight spreads across seven sub-formats, all on the same cream background with the same 6-column grid. A real estate listing, a gear review, an infographic, and a magazine profile need to look nothing alike — yet clearly belong to the same magazine. This document shows how.

---

## Table of Contents

1. [Overview & Sub-Format Framework](#1-overview--sub-format-framework)
2. [Shared Design Rules (All Feature Spreads)](#2-shared-design-rules-all-feature-spreads)
3. [Sub-Format: Feature Article Opener](#3-sub-format-feature-article-opener)
4. [Sub-Format: Real Estate Listing](#4-sub-format-real-estate-listing)
5. [Sub-Format: Neighborhood / Lifestyle Guide](#5-sub-format-neighborhood--lifestyle-guide)
6. [Sub-Format: Gear Review](#6-sub-format-gear-review)
7. [Sub-Format: Infographic / Decoder](#7-sub-format-infographic--decoder)
8. [Sub-Format: Magazine Profile](#8-sub-format-magazine-profile)
9. [Photography Direction by Sub-Format](#9-photography-direction-by-sub-format)
10. [Cross-Gutter Handling](#10-cross-gutter-handling)
11. [Pacing & Rhythm](#11-pacing--rhythm)
12. [Comedy Integration](#12-comedy-integration)
13. [Common Pitfalls](#13-common-pitfalls)
14. [Production Checklist](#14-production-checklist)

---

## 1. Overview & Sub-Format Framework

### What These Pages Are

The feature spreads are the magazine's editorial backbone. They are the "articles" — the content that makes the reader's brain say "this is a real magazine" before the content registers. They alternate with dark-background product ads to create rhythm, contrast, and pacing. Cream against black, editorial against commercial, reading against scanning.

### The Variety Problem (And Solution)

Eight spreads on one master page could easily look like eight copies of the same layout. The solution: each spread adopts the visual conventions of a **specific real-magazine genre**. The reader does not consciously think "this is a gear review layout" — but their brain recognizes the format instinctively from years of flipping through magazines, catalogs, and lifestyle content. That instant format recognition is the comedy setup. The prison-office content is the punchline.

### The Sub-Format Matrix

| Spread | Pages | Sub-Format | Genre Reference | Dominant Visual | Key Distinguishing Elements | Act |
|--------|-------|-----------|----------------|-----------------|---------------------------|-----|
| Welcome to the Workforce | 4-5 | Feature article opener | University brochure / orientation guide | Hero image + text columns | Large welcoming photo, drop cap, warm entry point | 1 |
| Your Personal Workspace | 6-7 | Real estate listing | Zillow / Dwell / real estate magazine | Property photography grid | Dimensions callout, listing specs, staged photos | 1 |
| The Block | 8-9 | Neighborhood guide | Local lifestyle magazine / city guide | Map-like layout, small images | Location grid, descriptive blurbs, wayfinding icons | 1 |
| The Morning Loadout | 12-13 | Gear review | GQ / Wired / Outside / adventure mag | Product grid with callouts | Tactical labels, product shots on cream, spec badges | 2 |
| The Code | 14-15 | Infographic / decoder | Bloomberg Businessweek / Wired data viz | Color-coded data visualization | Translation table, teal data values, multi-scale hierarchy | 2 |
| The Experiment | 18-19 | Investigative feature | New Yorker / Vanity Fair longform | Text-heavy with timeline | Dense body copy, timeline markers, pull quotes | 3 |
| The Identity Crisis | 20-21 | Fashion / lifestyle editorial | Esquire / GQ fashion feature | Editorial portrait + text | Fashion photography, lifestyle imagery, reflective tone | 3 |
| Meet the Founder | 25-26 | Magazine profile / interview | Esquire / Forbes profile spread | Dominant portrait | Brad portrait, pull quotes, biographical sidebar | Reveal |

### The Unifying Design System

Despite the genre variety, all 8 spreads share:

- **Cream (#F5F0E8) background** — the warm paper tone that ties them together
- **6-column grid, 0.1667" gutter** — identical skeleton beneath every layout
- **15pt baseline grid** — all body text locks to the same rhythm
- **Running header + page number** — from the B-Feature Spread master
- **The same 4 font families** — Barlow Condensed, Freight Text Pro, Freight Display Pro, IBM Plex Mono
- **The same entry point sequence** — Section Label, Headline, Deck, Drop Cap, Body
- **Gold as the universal accent** — bylines, section labels, attributions

The sub-formats are created through **proportion, density, and image treatment** — not through changing the fundamental typographic or color system.

---

## 2. Shared Design Rules (All Feature Spreads)

### Grid Usage

The 6-column grid is the foundation. Every sub-format interprets it differently, but all respect it.

| Grid Configuration | Use |
|-------------------|-----|
| 6 narrow columns | Infographics, data tables, decoder layouts |
| 3 + 3 (two wide columns) | Standard article body text (3 grid columns per text column) |
| 4 + 2 | Feature with sidebar (4 columns text, 2 columns sidebar/pull quote) |
| 2 + 4 | Feature with dominant left image (2 columns image, 4 columns text) |
| 1 + 5 or 5 + 1 | Narrow margin element + wide text/image area |
| Full 6-width | Full-bleed images, headline banners |

**Rule:** Body text columns always span 3 grid columns each. This produces the correct measure (line length) for 12/15pt Freight Text Pro. Narrower measures cause excessive hyphenation. Wider measures lose reader tracking.

### Baseline Alignment

- **All body text:** Align to baseline grid (15pt increment starting at 0.75" from top)
- **Headlines:** Release from baseline grid. Tight leading (48/48 or 42/42) does not snap to the 15pt grid — that is intentional.
- **Captions and photo credits:** Release from baseline grid. These float near their images.
- **Pull quotes:** Release from baseline grid. They are visual objects, not reading flow.
- **Critical rule:** All body text columns must top-align and bottom-align with each other. If column A ends at a baseline grid line, column B on the same page must also end at a baseline grid line. This is non-negotiable for professional appearance.

### Margins

All B-Feature Spread pages use:

| Margin | Value |
|--------|-------|
| Inside (gutter side) | 0.875" |
| Outside (trim side) | 0.625" |
| Top | 0.75" |
| Bottom | 0.75" |

**Live area per page:** 7.0" wide x 9.5" tall (8.5" minus inside + outside margin, 11" minus top + bottom margin).

**Live area across spread:** 14.0" wide x 9.5" tall (but the center 1.75" — two inside margins — is the danger zone).

### Running Header

Automatic from the B-Feature Spread master page. Set in **Running Header** style (Barlow Condensed Medium, 7.5/9pt, Warm Gray 40, all caps, +200 tracking).

- Left page (verso): Section name — "ACT 1: ASSESSMENT" or "ACT 2: DIAGNOSIS" or "ACT 3: INTERVENTION"
- Right page (recto): "ELEVATE"
- Position: Top of page within the 0.75" top margin area

**Override per spread:** Update the left-page section name to match the act. Do not override the right-page "ELEVATE" text.

### Page Number

Automatic from master. Set in **Folio** style (Barlow Condensed SemiBold, 9/9pt, Warm Gray 80).

- Position: Bottom outside corner of each page

### The Entry Point Sequence

Every feature spread follows the same hierarchy for entering the article. The reader's eye moves through this sequence:

```
1. SECTION LABEL        ← Gold, small, all caps. "ACT 1: ASSESSMENT"
                           Tells the reader where they are in the magazine.

2. HEADLINE             ← Large serif or condensed sans. The article title.
                           This is the first thing the eye actually reads.

3. DECK                 ← Medium gray, 14pt. The subtitle/summary.
                           Tells the reader what this article is about.

4. BYLINE (optional)    ← Gold, tiny, all caps. "BY BRAD STERLING"
                           Not all spreads need this.

5. DROP CAP             ← 3-line drop cap in the first paragraph.
                           Signals "start reading here."

6. BODY TEXT            ← 12/15pt Freight Text. The article.
```

**Paragraph style mapping:**

| Element | Paragraph Style | Notes |
|---------|----------------|-------|
| Section label | **Section Label** | 10/12pt, Barlow Condensed Bold, Gold, all caps, +250 tracking |
| Headline (elegant) | **Article Headline** | 48/48pt, Freight Display Pro Bold, Matte Black |
| Headline (bold) | **Article Headline Alt** | 42/42pt, Barlow Condensed Black, all caps, Matte Black |
| Deck | **Article Deck** | 14/19pt, Freight Text Pro Medium, Warm Gray 80 |
| Byline | **Article Byline** | 9/11pt, Barlow Condensed Medium, Gold, all caps, +80 tracking |
| First paragraph | **Body - First Paragraph** | 12/15pt, no indent. Apply 3-line drop cap. |
| Subsequent paragraphs | **Body** | 12/15pt, 12pt first-line indent |

**Headline choice:** Use **Article Headline** (Freight Display) for literary/editorial spreads (pp. 4-5, 18-19, 20-21). Use **Article Headline Alt** (Barlow Condensed) for bold/graphic spreads (pp. 6-7, 8-9, 12-13, 25-26). See each sub-format section for the specific recommendation.

### Pull Quote Placement

Pull quotes serve two functions: they arrest the scanning eye (entry point for skimmers) and they break up body text columns visually.

**Placement rules:**
- Pull quotes span 2-3 grid columns
- They are inset into the text flow, not placed in the margin
- Align the top of the pull quote to a baseline grid line
- Allow 18pt space above and below the pull quote text block
- The pull quote border (3pt left rule in Purple or Gold) anchors the block visually

**Style mapping:**

| Element | Paragraph Style |
|---------|----------------|
| Quote text | **Pull Quote** — 24/30pt, Freight Display Pro Bold, Purple |
| Attribution | **Pull Quote Attribution** — 9/11pt, Barlow Condensed Medium, Gold, all caps |

**Brad Quote variant:** When Brad speaks in sidebar mode (not a pull quote from the article text), use:

| Element | Paragraph Style |
|---------|----------------|
| Brad's quote | **Brad Quote** — 12/16pt, Freight Text Pro Italic, Charcoal, indented 18pt both sides |
| Brad attribution | **Brad Quote Attribution** — 8/10pt, Barlow Condensed SemiBold, Gold, all caps |

### How Cream Works as Background

Cream (#F5F0E8) does three things:

1. **Signals editorial content.** Every time the reader flips from a dark ad page to a cream page, their brain shifts from "commercial" to "article." This is how real magazines work with different paper stocks.

2. **Provides warmth.** Pure white is clinical. Cream has a subtle yellow-brown undertone (C:3 M:5 Y:10) that makes photography feel warmer, text feel softer, and the page feel like premium stock.

3. **Creates macro white-space.** The cream is not "empty" — it is intentional breathing room. Do not fill every inch of cream. Let the background do work.

**Critical:** Cream must not feel bland. See Section 13 (Common Pitfalls) for how to avoid the "cream = boring" trap.

---

## 3. Sub-Format: Feature Article Opener

**Pages:** 4-5 (Welcome to the Workforce), 18-19 (The Experiment), 20-21 (The Identity Crisis)

These three spreads all use the "feature article opener" archetype — a large visual paired with headline and body text. But each executes it differently because the content demands different energy.

### Layout Architecture — Standard Feature Opener

Used for pp. 4-5 and pp. 20-21.

```
LEFT PAGE (verso)                          RIGHT PAGE (recto)
┌────────────────────────────────┐  ┌────────────────────────────────┐
│ [Running Header]               │  │               [Running Header] │
│                                │  │                                │
│                                │  │  ACT 1: ASSESSMENT             │
│                                │  │                                │
│                                │  │  Welcome to                    │
│      ┌──────────────────┐      │  │  the Workforce                 │
│      │                  │      │  │                                │
│      │   HERO IMAGE     │      │  │  A Field Guide to Your         │
│      │   (4 col width)  │      │  │  First Day                     │
│      │                  │      │  │                                │
│      │                  │      │  │  BY BRAD STERLING               │
│      │                  │      │  │                                │
│      │                  │      │  │  W elcome to the team!         │
│      │                  │      │  │  On Day One, they'll           │
│      └──────────────────┘      │  │  photograph you, catalogue     │
│      Caption text               │  │  you, and assign you a        │
│                                │  │  number and a seat.            │
│  ┌────────┐                    │  │                                │
│  │ SMALL  │  Brad sidebar      │  │  Think of it as onboarding    │
│  │ IMAGE  │  quote in italic   │  │  — but with less paperwork    │
│  │        │  with gold left    │  │  than actual prison.           │
│  │        │  border            │  │  (Just kidding. More           │
│  └────────┘                    │  │  paperwork.)                   │
│                                │  │                                │
│ [page number]                  │  │               [page number]    │
└────────────────────────────────┘  └────────────────────────────────┘
```

**Grid breakdown:**
- Left page: Hero image spans columns 1-4 (out of 6). Small secondary image in columns 1-2. Brad sidebar quote in columns 3-4 (beside or below secondary image).
- Right page: Section label, headline, deck, byline, and body text flow in columns 1-5 (or 1-6). Column 6 can hold a pull quote or remain as margin breathing room.

### Layout Architecture — Investigative Feature (pp. 18-19)

The Experiment uses a more text-heavy variant with timeline elements.

```
LEFT PAGE (verso)                          RIGHT PAGE (recto)
┌────────────────────────────────┐  ┌────────────────────────────────┐
│ [Running Header]               │  │               [Running Header] │
│                                │  │                                │
│  ACT 3: INTERVENTION           │  │    ┌────────────────────────┐  │
│                                │  │    │                        │  │
│  The Experiment                │  │    │   PULL QUOTE            │  │
│                                │  │    │   (3 col width)         │  │
│  What Happened When We         │  │    │   Purple, Freight       │  │
│  Left a Pen in Conference      │  │    │   Display Bold          │  │
│  Room B                        │  │    │                        │  │
│                                │  │    └────────────────────────┘  │
│  BY BRAD STERLING               │  │                                │
│                                │  │  HOUR 4                        │
│  T he results surprised        │  │  Body text continues...        │
│  even our research team.       │  │  the pen had migrated to       │
│  On a quiet Tuesday in         │  │  the northeast corner of       │
│  March, ELEVATE's              │  │  the table...                  │
│  investigative unit            │  │                                │
│  placed a single pen           │  │  HOUR 12                       │
│  on the conference room        │  │  Body text continues...        │
│  table and waited.             │  │                                │
│                                │  │  ┌──────┐                      │
│  HOUR 1                        │  │  │ IMG  │  Caption describing  │
│  Body text continues...        │  │  │      │  the scene           │
│                                │  │  └──────┘                      │
│ [page number]                  │  │               [page number]    │
└────────────────────────────────┘  └────────────────────────────────┘
```

**Key differences from standard opener:**
- Headline and body text both start on the LEFT page (denser, more literary)
- Timeline subheads (**Article Subhead** — "HOUR 1", "HOUR 4") punctuate the body text
- Pull quote floats on the right page as a visual anchor
- Less image, more text — this spread mimics New Yorker longform density
- One small image on the right page breaks the text mass

### Genre-Appropriate Photography

| Spread | Photography Direction |
|--------|---------------------|
| pp. 4-5 (Welcome) | University welcome brochure energy. A bright, colorful group onboarding scene. People being "processed" but it looks like a campus orientation. Lanyards, name badges, clipboards. Everyone smiling. One person looks slightly confused. |
| pp. 18-19 (Experiment) | Investigative documentary style. The conference room table with a single pen. Overhead shot. Time-lapse feeling. Supporting: a witness-statement-style portrait of someone describing what happened. |
| pp. 20-21 (Identity Crisis) | Fashion editorial. A person in a well-fitted suit, shot beautifully, in an office corridor. Aspirational lifestyle photography. Supporting: close-ups of surface-level status markers (watch, cufflinks, badge) contrasted with tally-mark tattoos. |

### Style Mappings

All three spreads use these styles:

| Element | Style | When to Use |
|---------|-------|-------------|
| Section label | **Section Label** | Top of the headline page. "ACT 1: ASSESSMENT" or similar. |
| Headline | **Article Headline** | All three use the elegant Freight Display version. These are literary features. |
| Deck | **Article Deck** | Directly below headline. |
| Byline | **Article Byline** | Below deck. "BY BRAD STERLING" for all. |
| First paragraph | **Body - First Paragraph** | No indent. Apply 3-line drop cap in Freight Display Pro Bold. |
| Body copy | **Body** | 12pt first-line indent. Justified, last line left. |
| Timeline subheads | **Article Subhead** | "HOUR 1", "HOUR 4" etc. (pp. 18-19 only). Barlow Condensed SemiBold, 14/17pt, all caps. |
| Pull quote | **Pull Quote** + **Pull Quote Attribution** | Inset into text flow on the opposite page from the headline. |
| Brad sidebar | **Brad Quote** + **Brad Quote Attribution** | When Brad speaks in the sidebar, not in the main text. |
| Photo captions | **Caption** | IBM Plex Mono, 8/11pt, Warm Gray 80. Below images. |
| Photo credit | **Photo Credit** | IBM Plex Mono Light, 6.5/8pt, Warm Gray 40. Rotated 90 degrees along image edge or below caption. |

---

## 4. Sub-Format: Real Estate Listing

**Pages:** 6-7 (Your Personal Workspace)

### What Real Estate Listings Look Like in Magazines

Real estate listings in publications like Dwell, Architectural Digest, or Zillow have a specific visual language:
- One dominant room/property photo (usually the hero shot, full-width or near-full-width)
- 2-4 supporting photos in a grid
- A property header with address/name in display type
- Key specs called out in large type (square footage, bedrooms, price)
- Body text that reads like an aspirational listing description
- Clean, airy layout with generous margins — the white space says "expensive"

The cubicle listing mimics all of this. The comedy is in the gap between the format's aspiration and the content's reality.

### Layout Architecture

```
LEFT PAGE (verso)                          RIGHT PAGE (recto)
┌────────────────────────────────┐  ┌────────────────────────────────┐
│ [Running Header]               │  │               [Running Header] │
│                                │  │                                │
│  ACT 1: ASSESSMENT             │  │  ┌───────────────────────┐     │
│                                │  │  │                       │     │
│  YOUR PERSONAL                 │  │  │  SUPPORTING IMAGE 1   │     │
│  WORKSPACE                     │  │  │  (overhead view of     │     │
│                                │  │  │   cubicle, real estate │     │
│  Tour Your New Cell —          │  │  │   floor-plan angle)    │     │
│  Sorry, Cubicle                │  │  │                       │     │
│                                │  │  └───────────────────────┘     │
│  ┌──────────────────────────┐  │  │                                │
│  │                          │  │  │  ┌──────────┐  ┌──────────┐   │
│  │   HERO LISTING PHOTO     │  │  │  │ SUPPORT  │  │ SUPPORT  │   │
│  │   (full width — the      │  │  │  │ IMAGE 2  │  │ IMAGE 3  │   │
│  │    cubicle, staged like  │  │  │  │ (detail: │  │ (detail: │   │
│  │    a luxury apartment    │  │  │  │  desk)   │  │  view)   │   │
│  │    listing photo)        │  │  │  └──────────┘  └──────────┘   │
│  │                          │  │  │                                │
│  └──────────────────────────┘  │  │  ┌─────────────────────────┐   │
│                                │  │  │                         │   │
│  ┌────────────┐                │  │  │   DIMENSIONS CALLOUT    │   │
│  │            │  Listing body  │  │  │                         │   │
│  │  6×8 ft    │  copy: "Open   │  │  │   "A cubicle is 6×8.   │   │
│  │            │  concept: walls │  │  │   Death row is 6×9.    │   │
│  │  INFOGRAPH │  stop at 5     │  │  │   We like to think of  │   │
│  │  DATA VAL  │  feet..."      │  │  │   it as an upgrade."   │   │
│  │            │                │  │  │                         │   │
│  └────────────┘                │  │  └─────────────────────────┘   │
│                                │  │                                │
│ [page number]                  │  │               [page number]    │
└────────────────────────────────┘  └────────────────────────────────┘
```

**Grid breakdown:**
- Left page: Headline and deck in columns 1-6 (full width). Hero listing photo in columns 1-6 (full width — this is the "money shot"). Below: dimensions callout in columns 1-2 as a large data block, listing body copy in columns 3-6.
- Right page: Overhead/floor-plan shot in columns 1-5. Two smaller detail photos in a 2-up grid (columns 1-3 and 4-6). Dimensions callout/comparison box at bottom.

### The Dimensions Callout

This is the signature visual element of this spread. The "6x8 ft" dimensions are a data visualization moment.

| Element | Style |
|---------|-------|
| "6x8 ft" number | **Infographic Data Value** — 36/36pt, Barlow Condensed Bold, Institutional Teal, centered |
| "TOTAL WORKSPACE" label | **Infographic Data Label** — 9/11pt, IBM Plex Mono Medium, all caps, Charcoal |
| Comparison text | **Infographic Annotation** — 7.5/10pt, IBM Plex Mono, Warm Gray 80 |

**Visual treatment:** The dimensions callout sits inside a subtle box — either a 1pt Warm Gray 40 border or a Warm Gray 15% (#D9D4CC) background fill. This frames it as a "data card" distinct from the listing prose.

### Style Mappings

| Element | Style |
|---------|-------|
| Section label | **Section Label** |
| Headline | **Article Headline Alt** — Use the bold Barlow Condensed version. Real estate headings are punchy, not literary. |
| Deck | **Article Deck** |
| Listing body copy | **Body - First Paragraph** (first), then **Body** |
| Listing specs (if formatted as specs) | **Spec Table Label** + **Spec Table Cell** |
| Dimensions callout | **Infographic Data Value** + **Infographic Data Label** |
| Photo captions | **Caption** |

### What Makes This Spread Feel Like Real Estate

- **Generous margins** — real estate listings breathe. Do not cram.
- **Image-dominant** — the photos do the selling. Text is secondary.
- **Staging photography** — warm tones, good angles, intentional cropping. Even a cubicle looks aspirational with the right lighting.
- **Spec callouts** — real estate always calls out key numbers (sq ft, bedrooms, price). Here: 6x8 ft, "natural light adjacent," "walls stop at 5 feet."
- **Clean, minimal typography** — Freight Display headline would be too literary. Barlow Condensed (Article Headline Alt) gives the right "property listing" crispness.

---

## 5. Sub-Format: Neighborhood / Lifestyle Guide

**Pages:** 8-9 (The Block: A Neighborhood Guide)

### What Neighborhood Guides Look Like

Think Time Out, the local section of a city magazine, or an airline in-flight guide covering a hip district:
- A header map or illustrated zone overview
- 4-8 locations, each with a small photo and a short description
- Friendly, approachable typography — not too formal
- A grid of small, uniform image tiles
- "Local tips" or insider notes in sidebar boxes
- Warm, inviting — the layout says "explore this place"

### Layout Architecture

```
LEFT PAGE (verso)                          RIGHT PAGE (recto)
┌────────────────────────────────┐  ┌────────────────────────────────┐
│ [Running Header]               │  │               [Running Header] │
│                                │  │                                │
│  ACT 1: ASSESSMENT             │  │  ┌──────────┐                  │
│                                │  │  │ LOCATION │  THE YARD         │
│  THE BLOCK                     │  │  │ PHOTO 3  │  (common area)   │
│  A Neighborhood Guide          │  │  │          │  Great natural   │
│                                │  │  └──────────┘  light. Terrible │
│  ┌──────────┐                  │  │                natural          │
│  │ LOCATION │  THE MESS HALL   │  │                conversations.   │
│  │ PHOTO 1  │  (break room)   │  │                                │
│  │          │  Known for its   │  │  ┌──────────┐                  │
│  └──────────┘  eclectic        │  │  │ LOCATION │  THE WATCHTOWER  │
│                selection of     │  │  │ PHOTO 4  │  (corner office) │
│                expired          │  │  │          │  You can see it  │
│                condiments...    │  │  └──────────┘  from your cell. │
│                                │  │                That's the      │
│  ┌──────────┐                  │  │                point.           │
│  │ LOCATION │  SOLITARY        │  │                                │
│  │ PHOTO 2  │  (bathroom)     │  │  ┌─────────────────────────┐   │
│  │          │  The only room   │  │  │ CALLOUT BOX             │   │
│  └──────────┘  where you're    │  │  │ "The carpet's been here │   │
│                truly alone.     │  │  │ since 1987. It's union."│   │
│                                │  │  └─────────────────────────┘   │
│                                │  │                                │
│ [page number]                  │  │               [page number]    │
└────────────────────────────────┘  └────────────────────────────────┘
```

**Grid breakdown:**
- Both pages: Repeating module of photo (2 grid columns) + description text (4 grid columns). Each "location" is one module. Stack 2-3 modules per page.
- Headline and deck on the left page, top. Full 6-column width.
- Callout box at bottom-right for the sidebar gag (carpet union line).

### Style Mappings

| Element | Style |
|---------|-------|
| Section label | **Section Label** |
| Headline | **Article Headline Alt** — Bold Barlow Condensed. Neighborhood guides use punchy, graphic headers. |
| Deck | **Article Deck** |
| Location names | **Article Subhead** — 14/17pt, Barlow Condensed SemiBold, all caps. These are the subheads for each "neighborhood." |
| Location descriptions | **Body** — Standard body copy. Short paragraphs (2-4 sentences per location). |
| Callout label | **Callout Label** — "LOCAL INTEL" or "INSIDER TIP" in Signal Orange, all caps. |
| Callout box text | **Callout Box Text** — 10/14pt, Freight Text Medium, indented. The carpet union line. |
| Photo captions | **Caption** |

### What Makes This Spread Feel Like a Neighborhood Guide

- **Modular, repeating layout** — each location gets the same visual treatment (photo + text block). This repetition IS the format signal.
- **Small, consistent image sizes** — unlike a feature article (one big image), neighborhood guides use many small, same-sized images. Aim for 1.5"-2" square or landscape thumbnails.
- **Location names as anchors** — bold subheads in Barlow Condensed act as wayfinding. The reader scans the location names first, then reads the one that interests them.
- **Friendly density** — not as airy as real estate, not as dense as longform. Medium density with short, punchy descriptions.

---

## 6. Sub-Format: Gear Review

**Pages:** 12-13 (The Morning Loadout)

### What Gear Reviews Look Like

Adventure/outdoor magazines (Outside, Men's Journal) and tech/gear magazines (Wired, GQ) have a distinct gear review layout:
- Multiple product images arranged in a grid or fan layout
- Bold callout labels identifying each item
- Spec boxes or quick-stat badges
- Energetic, punchy typography — action-oriented
- Product photography on clean backgrounds (often white or light)
- Rating systems, comparison data, or "editor's pick" badges

### Layout Architecture

```
LEFT PAGE (verso)                          RIGHT PAGE (recto)
┌────────────────────────────────┐  ┌────────────────────────────────┐
│ [Running Header]               │  │               [Running Header] │
│                                │  │                                │
│  ACT 2: DIAGNOSIS              │  │  ┌──────────────────────────┐  │
│                                │  │  │                          │  │
│  THE MORNING                   │  │  │   PRODUCT IMAGE:         │  │
│  LOADOUT                       │  │  │   PERIMETER DEFENSE      │  │
│                                │  │  │   (headphones, clean     │  │
│  What You're Already           │  │  │    product shot on       │  │
│  Carrying — And What           │  │  │    cream)                │  │
│  It Actually Is                │  │  │                          │  │
│                                │  │  └──────────────────────────┘  │
│  ┌──────────────────────────┐  │  │  PERIMETER DEFENSE             │
│  │                          │  │  │  AKA: Headphones               │
│  │   PRODUCT IMAGE:         │  │  │  Description body text...      │
│  │   NERVE AGENT            │  │  │                                │
│  │   (coffee cup, clean     │  │  │  ─────────────────────         │
│  │    product shot on       │  │  │                                │
│  │    cream)                │  │  │  ┌──────────────────────────┐  │
│  │                          │  │  │  │                          │  │
│  └──────────────────────────┘  │  │  │   PRODUCT IMAGE:         │  │
│  NERVE AGENT                   │  │  │   CUBICLE SHANK          │  │
│  AKA: Coffee                   │  │  │   (pen, with "SEE P.10"  │  │
│  Description body text...      │  │  │    cross-reference)      │  │
│                                │  │  │                          │  │
│  ┌─────────────────────────┐   │  │  └──────────────────────────┘  │
│  │ "Every morning is a     │   │  │  CUBICLE SHANK                 │
│  │ deployment." — Brad      │   │  │  AKA: Your pen. See p. 10.    │
│  └─────────────────────────┘   │  │                                │
│                                │  │                                │
│ [page number]                  │  │               [page number]    │
└────────────────────────────────┘  └────────────────────────────────┘
```

**Grid breakdown:**
- Each "loadout item" gets a module: product image (spanning 4-6 grid columns) + item name as subhead + brief description (2-4 sentences).
- 2 items per page, stacked vertically.
- Pull quote from Brad on the left page as a divider between items or at the bottom.
- The layout should feel like a catalog grid — modular, energetic, product-forward.

### The Tactical Labels

This is the signature visual element. Each everyday item gets a tactical designation displayed as a bold callout.

| Element | Style | Notes |
|---------|-------|-------|
| Tactical name ("NERVE AGENT") | **Callout Label** | 10/12pt, Barlow Condensed Bold, Signal Orange, all caps, +200 tracking. Positioned directly above or beside the product image. |
| Real name ("AKA: Coffee") | **Article Subhead 2** | 12/15pt, Freight Text Pro Bold. Below the tactical name. |
| Description | **Body** | Standard body text. 2-4 sentences per item. |

**Visual treatment for callout labels:** Consider a small rectangular badge — Signal Orange background, white or black text — placed at the top-left corner of each product image. This mimics the "EDITOR'S PICK" or rating badges in real gear reviews.

### Style Mappings

| Element | Style |
|---------|-------|
| Section label | **Section Label** |
| Headline | **Article Headline Alt** — Bold Barlow Condensed. Gear reviews use punchy, condensed type. |
| Deck | **Article Deck** |
| Tactical callout labels | **Callout Label** — Signal Orange, all caps |
| Item subheads | **Article Subhead** or **Article Subhead 2** |
| Item descriptions | **Body** |
| Pull quote | **Pull Quote** + **Pull Quote Attribution** |
| Photo captions | **Caption** |

### What Makes This Spread Feel Like a Gear Review

- **Product photography on clean background** — each item shot individually, placed on cream. Not lifestyle shots — clean, isolated product shots like a catalog. The cream background IS the "studio white" equivalent.
- **Bold callout labels** — Signal Orange tactical names jump off the page. This is the energy differentiator from other spreads.
- **Modular grid** — items are uniform modules. The repetition says "this is a structured review, not a narrative."
- **Action-oriented language** — short sentences, active voice, present tense. "This is your first line of defense."
- **Cross-references** — "See p. 10" for the Cubicle Shank links back to the product ad. Real gear reviews cross-reference constantly.

---

## 7. Sub-Format: Infographic / Decoder

**Pages:** 14-15 (The Code: Your Complete Translation Guide)

### What Magazine Infographics Look Like

Bloomberg Businessweek, Wired, and National Geographic infographic spreads share common traits:
- Data visualization as the dominant visual (not photography)
- Multi-scale hierarchy: headline visible at arm's length, details reward close inspection
- Color-coded systems where hue carries meaning
- Grid-dense layouts (up to 12-15 columns in complex infographics)
- Monospaced type for data values
- A mix of large "hero stat" numbers and small annotation text
- Tables, charts, or structured comparison formats

### Layout Architecture

```
LEFT PAGE (verso)                          RIGHT PAGE (recto)
┌────────────────────────────────┐  ┌────────────────────────────────┐
│ [Running Header]               │  │               [Running Header] │
│                                │  │                                │
│  ACT 2: DIAGNOSIS              │  │  ┌──────────────────────────┐  │
│                                │  │  │ WHAT THEY SAID           │  │
│  THE CODE                      │  │  │ "Let's take this         │  │
│                                │  │  │  offline"                │  │
│  What They Said vs.            │  │  │                          │  │
│  What They Meant               │  │  │ WHAT THEY MEANT          │  │
│                                │  │  │ "I need you to stop      │  │
│  ┌──────────────────────────┐  │  │  │  talking"                │  │
│  │                          │  │  │  └──────────────────────────┘  │
│  │  TRANSLATION TABLE       │  │  │                                │
│  │                          │  │  │  ┌──────────────────────────┐  │
│  │  ┌─────────┬─────────┐   │  │  │  │ WHAT THEY SAID           │  │
│  │  │ SAID    │ MEANT   │   │  │  │  │ "Sounds good"            │  │
│  │  ├─────────┼─────────┤   │  │  │  │                          │  │
│  │  │ row 1   │ row 1   │   │  │  │  │ WHAT THEY MEANT          │  │
│  │  ├─────────┼─────────┤   │  │  │  │ "No"                     │  │
│  │  │ row 2   │ row 2   │   │  │  │  └──────────────────────────┘  │
│  │  ├─────────┼─────────┤   │  │  │                                │
│  │  │ row 3   │ row 3   │   │  │  │  ┌──────────────────────────┐  │
│  │  ├─────────┼─────────┤   │  │  │  │ WHAT THEY SAID           │  │
│  │  │ row 4   │ row 4   │   │  │  │  │ "Per my last email"      │  │
│  │  └─────────┴─────────┘   │  │  │  │                          │  │
│  │                          │  │  │  │ WHAT THEY MEANT          │  │
│  └──────────────────────────┘  │  │  │ "I already told you      │  │
│                                │  │  │  this and I have proof"   │  │
│  Brad's line at bottom         │  │  └──────────────────────────┘  │
│                                │  │                                │
│ [page number]                  │  │               [page number]    │
└────────────────────────────────┘  └────────────────────────────────┘
```

**Grid breakdown — TWO POSSIBLE APPROACHES:**

**Approach A — Table-dominant (recommended for "The Code"):**
- Left page: Headline + deck at top. Below: a formal two-column translation table occupying columns 1-6. "What They Said" in the left half, "What They Meant" in the right half. Brad's quote at the bottom.
- Right page: Expanded "feature cards" — 3-4 of the best translations broken out into larger, color-coded blocks. Each gets a full visual treatment with the "said" text at top and "meant" text below, separated by a visual device (arrow, color shift, divider line).

**Approach B — Card grid:**
- Both pages: A grid of "decoder cards" — each translation is a card with the office phrase on one side and the true meaning on the other. Cards can be arranged in a 3x2 or 4x3 grid across the spread.

### Color System for Data

Institutional Teal is the primary data color on this spread. It signals "this is information, not narrative."

| Element | Color |
|---------|-------|
| Headline | Institutional Teal (not Matte Black — breaking from other spreads to signal "data page") |
| Data values / key phrases | Institutional Teal |
| Table headers | White text on Matte Black background fill |
| Table rows (alternating) | Cream (no fill) alternating with Warm Gray 15% fill |
| Annotations | Warm Gray 80 |
| Brad's quote | Standard — Charcoal italic with Gold border |

### Style Mappings

| Element | Style |
|---------|-------|
| Section label | **Section Label** — Gold, as always |
| Headline | **Infographic Headline** — 36/36pt, Barlow Condensed Black, Institutional Teal, all caps. Note: this uses the Infographic Headline style, NOT Article Headline. |
| Deck | **Article Deck** |
| "What they said" column | **Spec Table Label** — IBM Plex Mono Medium, with Warm Gray 15% background fill. These are the "input" values. |
| "What they meant" column | **Spec Table Cell** — IBM Plex Mono Regular, Charcoal. These are the "output" values. |
| Table column headers | **Spec Table Header** — Barlow Condensed SemiBold, White, all caps, on Matte Black background fill. |
| Annotations / footnotes | **Infographic Annotation** — 7.5/10pt, IBM Plex Mono Regular, Warm Gray 80. |
| Brad's line at bottom | **Brad Quote** + **Brad Quote Attribution** |

### Multi-Scale Reading

This spread should work at three distances:

1. **Arm's length (scanning):** The teal headline "THE CODE" and the table structure are visible. The reader understands "this is a data page" immediately.
2. **Normal reading distance:** The two-column table is readable. "Sounds good" / "No" — the translations land.
3. **Close inspection:** Annotations, footnotes, and the small Brad quote reward the reader who lingers.

### What Makes This Spread Feel Like an Infographic

- **Teal as dominant color** — the color shift from Gold/Black to Teal signals "data mode"
- **Monospaced type for data** — IBM Plex Mono in the table cells creates the "decoded document" feeling
- **Table structure** — formal rows and columns, not flowing prose
- **No hero image** — this is the one spread where data visualization IS the visual, not photography
- **High information density** — more items per page than any other spread. This is intentional.

---

## 8. Sub-Format: Magazine Profile

**Pages:** 25-26 (Meet the Founder)

### What Magazine Profiles Look Like

Esquire, Forbes, GQ, and Vanity Fair profile spreads follow a consistent pattern:
- One dominant portrait — large, dramatic, full-bleed or near-full-bleed
- Display headline in dramatic type
- Pull quotes scattered through the text — the subject's voice dominates
- A biographical sidebar or credentials listing
- The body text reads like a journalist reporting on a larger-than-life personality

### Layout Architecture

```
LEFT PAGE (verso)                          RIGHT PAGE (recto)
┌────────────────────────────────┐  ┌────────────────────────────────┐
│ [Running Header]               │  │               [Running Header] │
│                                │  │                                │
│                                │  │  MEET THE FOUNDER              │
│  ┌──────────────────────────┐  │  │                                │
│  │                          │  │  │  The Man Behind the Brand —    │
│  │                          │  │  │  And the Shirt                 │
│  │                          │  │  │                                │
│  │   BRAD PORTRAIT          │  │  │  BY ELEVATE STAFF              │
│  │   (large — 5+ col width) │  │  │                                │
│  │                          │  │  │  E verybody's trying to        │
│  │   Purple satin shirt,    │  │  │  survive. That's the problem.  │
│  │   gold chain, aviators,  │  │  │  Nobody's trying to win.       │
│  │   the briefcase, the     │  │  │                                │
│  │   smile.                 │  │  │  Profile body text continues   │
│  │                          │  │  │  in two columns...             │
│  │                          │  │  │                                │
│  └──────────────────────────┘  │  │  ┌─────────────────────────┐   │
│                                │  │  │ PULL QUOTE               │   │
│  Caption: "Brad Sterling,      │  │  │ "I didn't build a       │   │
│  photographed at Elevate Co.   │  │  │ company. I built a      │   │
│  global headquarters (his      │  │  │ vocabulary."            │   │
│  apartment)."                  │  │  │          — BRAD STERLING │   │
│                                │  │  └─────────────────────────┘   │
│ [page number]                  │  │               [page number]    │
└────────────────────────────────┘  └────────────────────────────────┘
```

**Grid breakdown:**
- Left page: Brad's portrait dominates. It should span columns 1-5 (or full 1-6) and occupy 70-80% of the page height. Caption at bottom.
- Right page: Headline + deck at top. Body text in two columns (columns 1-3 and 4-6). Pull quote inset into the body text, spanning 3 columns. A second pull quote or biographical sidebar can occupy the lower portion.

### The Biographical Sidebar (Optional)

If space allows, include a "credentials" sidebar on the right page:

```
┌─────────────────────────┐
│ BRAD STERLING            │  ← Article Byline style
│                         │
│ Chief Vision Officer    │  ← Brad Quote style (italic)
│ & Founder               │
│ Creative Director       │
│ Head of Sales           │
│ Lead Photographer       │
│ Intern Liaison          │
│ Sole Subscriber         │
│                         │
│ "I wear many hats.     │
│ But only one shirt."   │
└─────────────────────────┘
```

This sidebar uses **Article Byline** for the name, **Brad Quote** for the titles, and a **Callout Box Text** frame with a 1pt Gold left-rule border.

### Style Mappings

| Element | Style | Notes |
|---------|-------|-------|
| Section label | **Section Label** | Top of right page. Not needed if the portrait dominates the left page. |
| Headline | **Article Headline Alt** — Use Barlow Condensed Black. "MEET THE FOUNDER" in all caps is punchy and profile-appropriate. |
| Deck | **Article Deck** |
| Byline | **Article Byline** — "BY ELEVATE STAFF" |
| First paragraph | **Body - First Paragraph** | 3-line drop cap. |
| Body copy | **Body** |
| Pull quotes | **Pull Quote** + **Pull Quote Attribution** | Brad's self-aggrandizing quotes. Purple text. Multiple pull quotes across the spread. |
| Credential listing | **Article Byline** (name) + **Brad Quote** (titles) |
| Photo caption | **Caption** |

### What Makes This Spread Feel Like a Magazine Profile

- **Dominant portrait** — the portrait IS the spread. It should be large enough that the reader sees Brad's face before they read a word. This is how Esquire profiles Scorsese. Brad gets the same treatment.
- **Pull quotes everywhere** — profile spreads let the subject's voice dominate the page. Brad's pull quotes are the comedy payload. 2-3 pull quotes across the spread.
- **Biographical details** — credentials, titles, background. In Brad's case, the comedy is that all the credentials are him.
- **The "camera from below" portrait angle** — Brad's portrait should feel like a hero shot. Slightly below eye level, looking up at him. He's the subject of a profile. The photograph treats him with gravity.
- **One dramatic portrait, not a photo grid** — this is not a real estate listing with multiple shots. ONE defining image.

---

## 9. Photography Direction by Sub-Format

All photography across all feature spreads shares: **professional magazine quality, vibrant color, well-lit, aspirational staging.** This is the new creative direction — NOT deadpan stock photography. Every image should look like it belongs in a real magazine.

### Per-Spread Photography Specs

| Spread | Pages | Photo Type | Quantity | Aspect Ratios | Art Direction |
|--------|-------|-----------|----------|---------------|---------------|
| Welcome to Workforce | 4-5 | Lifestyle / editorial | 2-3 | 4:3 hero, 1:1 or 3:2 supporting | University orientation energy. Bright, warm, group scenes. Lanyards, clipboards, name badges. Everyone smiling. Slightly too enthusiastic — like a brochure photo. |
| Personal Workspace | 6-7 | Real estate / interior | 3-4 | 4:3 hero, 1:1 details | Zillow staging energy. Warm lighting, clean angles. The cubicle styled like a luxury studio apartment. Plants, warm lamp, neat desk. The aspirational gap IS the joke. |
| The Block | 8-9 | Location thumbnails | 4-5 | 1:1 or 4:3 (small) | Yelp/Google Maps listing energy. Each "location" (break room, bathroom, corner office) shot like a restaurant or venue photo. Bright, inviting, slightly staged. |
| Morning Loadout | 12-13 | Product / catalog | 3-4 | 1:1 or 4:5 | Gear magazine product shots. Each item isolated on cream, clean lighting, slight shadow. Professional catalog quality. Coffee cup, headphones, pen, laptop — each shot individually. |
| The Code | 14-15 | None | 0 | N/A | Data visualization IS the visual. No photography on this spread. |
| The Experiment | 18-19 | Documentary / investigative | 2-3 | 3:2 or 4:3 | Overhead shot of conference table with one pen. Witness portrait (headshot, slightly dramatic lighting). Optional: time-lapse composite showing pen positions. |
| Identity Crisis | 20-21 | Fashion editorial | 2-3 | 3:4 hero, 1:1 details | Fashion editorial energy. Person in a sharp suit photographed beautifully in an office corridor. Close-ups: watch, cufflinks, badge, tally-mark tattoos. Aspirational lifestyle. |
| Meet the Founder | 25-26 | Portrait / profile | 1 dominant | 3:4 or 4:5 | Magazine profile portrait. Brad Sterling: purple satin shirt, gold chain, aviators, holding the briefcase. The "hero shot." Shot from slightly below. Full confidence. The smile. |

### Lighting Notes

| Spread Type | Lighting Direction |
|-------------|-------------------|
| Welcome / Workspace / Block | Warm, bright, natural-feeling. Window light or simulated natural light. Welcoming energy. |
| Loadout (gear) | Clean, even studio lighting. Slight shadow for dimension. Catalog quality. |
| Experiment | Slightly dramatic. One overhead fluorescent for the conference room. Portrait lighting for the witness. |
| Identity Crisis | Fashion editorial lighting. Moody but colorful. Directional key light. |
| Meet the Founder | Profile portrait lighting. One strong key light. Warm. The lighting treats Brad like a celebrity. |

### Color Temperature

All feature spread photography should lean warm (4000-5000K) to harmonize with the cream (#F5F0E8) background. Cool-toned photos on warm cream create visual discord. If an image reads "blue" when placed on cream, it needs color correction.

---

## 10. Cross-Gutter Handling

### The Physics

ELEVATE is saddle-stitched (stapled spine). In saddle-stitched magazines, there is minimal spine loss at the gutter — far less than perfect-bound books. However, the pages curve into the spine at the center staple, creating approximately 3-6mm (0.12"-0.24") of image distortion at the fold.

### The B-Feature Spread Master Margins

The inside margin is 0.875" on each page. This means the total gutter zone (left page inside margin + right page inside margin) is **1.75"** of protected space. This is generous — it is designed to keep text and critical elements well away from the fold.

### What Can Cross the Gutter

| Element | Cross Gutter? | Notes |
|---------|--------------|-------|
| Cream background | N/A | The background is uniform. There is nothing to cross. |
| Full-bleed images | Yes, with care | If an image needs to span both pages, extend it 0.25" past the inside margin line on each side (0.5" total overlap at gutter). This accounts for fold distortion. |
| Text | Never | No body text, headlines, or captions should cross the gutter. Every text block must live entirely on one page. |
| Faces / portraits | Never at gutter | Never place a face where the fold crosses it. Brad's portrait on pp. 25-26 must be entirely on the LEFT page. |
| Thin rules / lines | Avoid | Horizontal rules crossing the gutter will appear broken at the fold. Keep rules on one page. |
| Background tint blocks | Yes | If a colored box or tint block spans both pages (e.g., a callout box that bridges the spread), extend it 0.25" past the inside margin on each side. |

### Gutter Safety Zone Measurements

```
LEFT PAGE                              RIGHT PAGE

          ← 0.875" inside margin →|← 0.875" inside margin →

     TEXT SAFE    |   DANGER   |   DANGER   |    TEXT SAFE
                  |   ZONE     |   ZONE     |
                  |← 0.25" →|← 0.25" →|
                  |   OVERLAP  |  OVERLAP   |
                  |   FOR IMG  |  FOR IMG   |
                               ↑
                          FOLD LINE
```

**Rule of thumb:** Keep all text 0.875" from the inside edge (the master page margin handles this). For images crossing the gutter, overlap by 0.25" past the margin line on each side.

### Spread-Specific Gutter Notes

| Spread | Gutter Handling |
|--------|----------------|
| pp. 4-5 | Images on left page, text on right. Nothing crosses. Clean break. |
| pp. 6-7 | Hero listing photo on left, detail photos on right. Nothing crosses. |
| pp. 8-9 | Modular grid. Each location module stays on one page. Nothing crosses. |
| pp. 12-13 | Product modules split across pages. Nothing crosses. |
| pp. 14-15 | Table can cross if designed as one full-spread table, but safer to split: left-page table + right-page expanded cards. |
| pp. 18-19 | Text-heavy. Headline on left, text continues on right. Nothing crosses. The flow crosses conceptually (reader continues reading) but not visually. |
| pp. 20-21 | Hero fashion photo on left or split. If split, ensure the face is on one page. |
| pp. 25-26 | Brad portrait on LEFT page only. Text on right. Nothing crosses. This is critical — the portrait must not split across the fold. |

---

## 11. Pacing & Rhythm

### The Emotional Architecture

Feature spreads are the "breathing" moments between the dark, high-energy product ads. The magazine alternates between two modes:

| Mode | Background | Energy | Reader State |
|------|-----------|--------|-------------|
| Feature spread (cream) | Warm, light | Reading, absorbing, laughing at recognition | "This is describing my life" |
| Product ad (dark) | Dark, dramatic | Scanning, reacting, laughing at absurdity | "They made a product ad for THAT?" |

The alternation creates rhythm. If the magazine were all cream, it would feel flat. If it were all dark, it would feel relentless. The contrast is the engine.

### Fast Pages vs. Slow Pages

| Speed | Characteristics | Examples |
|-------|----------------|----------|
| Fast | Image-dominant, short text, instant recognition | pp. 6-7 (real estate), pp. 12-13 (gear), pp. 25-26 (profile) |
| Medium | Image + text balanced, requires some reading | pp. 4-5 (welcome), pp. 8-9 (neighborhood), pp. 20-21 (fashion) |
| Slow | Text-heavy, dense, rewards close reading | pp. 14-15 (infographic), pp. 18-19 (investigative) |

### The Three-Act Pacing Chart

```
Page:  1  2  3 | 4  5  6  7  8  9 |10 11| 12 13 14 15 |16 17| 18 19 20 21 |22 23| 24 | 25 26 | 27 |28 29| 30
       C  F  F | C  C  C  C  C  C | D  D| C  C  C  C  | D D | C  C  C  C  | D D | E  | C  C  | D  | D D | F
                  ACT 1              AD     ACT 2         ADS   ACT 3         ADS   REV   REV    REV   REV

C = Cream feature    D = Dark ad    E = Editorial single    F = Front/back matter

Density: ░░░ ▓▓▓▓▓▓ ████ ▓▓▓▓▓▓ ████ ▓▓▓▓▓▓ ████ ░░░ ▓▓▓ ░░ ████ ░░░
         LOW  MED    HIGH  MED    HIGH  MED    HIGH  LOW MED LO HIGH  LOW
```

**The pattern:** Each act opens with accessible, image-forward spreads and builds to denser content before hitting a dark ad break. The ad breaks function as palate cleansers.

### Act-by-Act Feature Spread Pacing

**Act 1 (pp. 4-9): Assessment — Accelerating**
- pp. 4-5: Medium. Feature opener. Image + text. Welcoming entry point.
- pp. 6-7: Fast. Real estate listing. Image-dominant, short copy. Quick laugh.
- pp. 8-9: Medium. Neighborhood guide. Modular, scannable. Multiple small laughs.
- *Then: Dark ad break (pp. 10-11) — high energy, commercial.*

**Act 2 (pp. 12-15): Diagnosis — Dense**
- pp. 12-13: Fast. Gear review. Product shots, tactical labels. Punchy.
- pp. 14-15: Slow. Infographic. Dense data, close reading. The most information-heavy spread.
- *Then: Dark ad break (pp. 16-17) — single-page ads, quick hits.*

**Act 3 (pp. 18-21): Intervention — Reflective**
- pp. 18-19: Slow. Investigative feature. The most text of any spread. Rewards patience.
- pp. 20-21: Medium. Fashion editorial. Reflective, image + text balanced.
- *Then: Dark ad break (pp. 22-23) — the triple mini-ad, three voices.*

**Reveal (pp. 25-26): The Brad Spread**
- pp. 25-26: Fast. Profile. Brad's face is the dominant visual. The reader already knows Brad from 24 pages. This is the payoff.

---

## 12. Comedy Integration

### The Meta-Principle

On feature spreads, **the format IS the comedy setup.** The reader's brain recognizes the genre — "this is a real estate listing," "this is a gear review," "this is an infographic" — before it processes the content. That recognition is the setup. The prison-office content is the punchline.

This means the comedy depends on format accuracy. If the real estate listing does not LOOK like a real estate listing, the joke does not land. The format must be played completely straight. The absurdity of the content does all the comedy work.

### How Humor Works Per Sub-Format

| Sub-Format | Comedy Mechanism | What the Reader Experiences |
|------------|-----------------|---------------------------|
| Feature opener (pp. 4-5) | University brochure tone for prison intake | "This reads like a welcome packet... for what exactly?" |
| Real estate listing (pp. 6-7) | Zillow staging for a 6x8 cubicle | "They made a LISTING for a CUBICLE?" — the format is instant recognition |
| Neighborhood guide (pp. 8-9) | Hip local magazine guide for an office floor | "These descriptions sound like Yelp reviews... for the bathroom" |
| Gear review (pp. 12-13) | Tactical equipment names for coffee and headphones | "NERVE AGENT" beside a photo of a coffee cup. The label IS the joke. |
| Infographic (pp. 14-15) | Bloomberg data viz for office translation | The formal data treatment of "Sounds good" = "No" is inherently funny |
| Investigative (pp. 18-19) | New Yorker longform about a pen | The gravity of the investigative format applied to a pen on a table |
| Fashion editorial (pp. 20-21) | Esquire fashion spread questioning identity markers | The reflective tone applied to temporary tattoos |
| Magazine profile (pp. 25-26) | Forbes founder profile for Brad Sterling | Brad receives the Scorsese treatment. Purple satin and all. |

### Comedy Timing Through Layout

The layout controls when the reader encounters the punchline:

1. **Headline lands first.** The headline is the initial laugh or intrigue. "YOUR PERSONAL WORKSPACE" reads normally until the brain catches up to the real estate listing format.

2. **Deck delivers the twist.** "Tour Your New Cell — Sorry, Cubicle." The deck is where the world-rule vocabulary surfaces. It confirms what the headline implied.

3. **Image confirms.** The beautifully staged cubicle photo, lit like a luxury apartment listing, confirms the commitment to the bit. No winking.

4. **Body text escalates.** "Open concept: walls stop at 5 feet. Natural light adjacent: 30 feet from the nearest window." Each line is a new beat.

5. **Callouts and sidebars kicker.** The dimensions callout ("6x8 ft — Death row is 6x9") or Brad's sidebar quote is the final punch for readers who go deep.

### What to Avoid

- **Never break character.** The layout does not acknowledge the joke. It presents a cubicle as a real estate listing with COMPLETE sincerity. The moment the layout winks at the reader, the comedy collapses.
- **Never explain the joke.** No "get it?" No parenthetical asides. The copy uses prison vocabulary naturally, as established in the world rules.
- **Never make the photos look bad on purpose.** The photography is genuinely good. A beautifully staged cubicle is funnier than a poorly lit one. The contrast between production quality and content absurdity IS the comedy engine.

---

## 13. Common Pitfalls

### Pitfall 1: Sameness Across Spreads

**The trap:** All 8 spreads end up looking like the same layout — headline top-left, image top-right, body text below. The reader experiences visual monotony.

**The fix:** Each sub-format has a structurally different layout architecture. Follow the wireframes in Sections 3-8. Key differentiators:
- pp. 4-5: Image LEFT, text RIGHT
- pp. 6-7: Image TOP, text and specs BELOW
- pp. 8-9: Modular GRID across both pages
- pp. 12-13: Stacked PRODUCT MODULES
- pp. 14-15: TABLE / DATA GRID (no photography)
- pp. 18-19: Text STARTS LEFT, continues RIGHT (dense)
- pp. 20-21: Fashion PORTRAIT LEFT, text RIGHT
- pp. 25-26: DOMINANT PORTRAIT LEFT, text RIGHT

If two consecutive feature spreads use the same general arrangement, one of them needs to change.

### Pitfall 2: Wall of Text

**The trap:** Feature article openers (especially pp. 18-19) become dense text blocks with no entry points for the scanning eye.

**The fix:** Break up every text page with at least 2 of:
- A pull quote (2-3 column width, Purple or Gold)
- A subhead (**Article Subhead** — Barlow Condensed, all caps)
- A callout box (**Callout Label** + **Callout Box Text**)
- An image (even a small one)
- A horizontal rule (0.5pt, Warm Gray 40)

No reader should face more than 3 unbroken body-text columns without a visual interruption.

### Pitfall 3: Cream Feels Bland

**The trap:** The cream background with gray body text and black headlines produces a page that looks muted, safe, and unremarkable compared to the dramatic dark ad pages.

**The fix:** Use the accent palette intentionally:
- **Gold** section labels and bylines provide warmth
- **Purple** pull quotes create visual focal points
- **Signal Orange** callout labels add energy
- **Institutional Teal** data values create contrast on infographic pages
- **Vibrant photography** does the heavy lifting — bright, colorful images on cream are the primary source of visual interest

The cream is the frame. The photos and accent colors are the painting.

### Pitfall 4: Not Enough Images

**The trap:** Treating feature spreads as text articles with one token image. The page reads like a Word document, not a magazine.

**The fix:** The design principles state "images do 70% of the work." Even text-heavy spreads need strong visual anchors:
- pp. 4-5: Minimum 2 images (hero + supporting)
- pp. 6-7: Minimum 3 images (hero listing + 2-3 details)
- pp. 8-9: Minimum 4 images (one per location)
- pp. 12-13: Minimum 3 images (one per gear item)
- pp. 14-15: 0 photos, but the DATA VISUALIZATION IS the visual
- pp. 18-19: Minimum 2 images (conference table + witness)
- pp. 20-21: Minimum 2 images (fashion portrait + detail)
- pp. 25-26: 1 dominant image (Brad portrait — it must be LARGE)

### Pitfall 5: Inconsistent Entry Points

**The trap:** Some spreads have a section label + headline + deck + byline. Others jump straight to body text. The inconsistency makes the magazine feel unstructured.

**The fix:** Every feature spread follows the entry point sequence defined in Section 2. The minimum is: **Section Label + Headline + Deck + Body - First Paragraph (with drop cap)**. Byline is optional but recommended for feature articles. Pull quotes are mandatory on any spread with more than 200 words of body text.

### Pitfall 6: Ignoring the Baseline Grid

**The trap:** Body text on the left page does not align with body text on the right page. Columns on the same page end at different vertical positions.

**The fix:** All body text must lock to the 15pt baseline grid. In InDesign, select all body text frames and confirm "Align to Baseline Grid" is checked. Headlines and pull quotes are released from the grid (they use tight leading), but body text is always locked.

### Pitfall 7: Overcrowding

**The trap:** Trying to fit too many elements on one spread — 6 photos, 3 callout boxes, 2 pull quotes, a sidebar, and a data callout.

**The fix:** Each spread should have ONE dominant visual and 2-3 supporting elements. The cream background is a feature, not a void to fill. Let it breathe.

---

## 14. Production Checklist

### Generic Build Order (All Feature Spreads)

This is the build sequence for any B-Feature Spread page pair. Follow steps 1-15 in order.

- [ ] **1. Assign master page.** Apply B-Feature Spread to both pages of the spread in the Pages panel.
- [ ] **2. Verify master elements.** Confirm cream background, running headers, and page numbers are inherited from the master.
- [ ] **3. Update running header.** Override the left-page running header text to match the current act: "ACT 1: ASSESSMENT", "ACT 2: DIAGNOSIS", or "ACT 3: INTERVENTION".
- [ ] **4. Place section label.** Set the section/act label using **Section Label** style. Position at the top of the headline page, within the top margin area or at the first baseline grid line.
- [ ] **5. Set headline.** Choose **Article Headline** (Freight Display) or **Article Headline Alt** (Barlow Condensed) per the sub-format recommendation. Release from baseline grid.
- [ ] **6. Set deck.** Apply **Article Deck** style. Position directly below headline.
- [ ] **7. Set byline (if applicable).** Apply **Article Byline** style below the deck.
- [ ] **8. Place hero image.** Size and position per the sub-format wireframe. Ensure correct aspect ratio. Check that the image does not cross the gutter safety zone (unless intentionally designed as a crossover with 0.25" overlap).
- [ ] **9. Place supporting images.** Size per the sub-format spec. Add **Caption** text below each image. Add **Photo Credit** text (rotated 90 degrees along image edge or below caption).
- [ ] **10. Flow body text.** Set first paragraph in **Body - First Paragraph** (no indent, apply 3-line drop cap). Subsequent paragraphs in **Body** (12pt first-line indent). Thread text frames across columns as needed.
- [ ] **11. Place pull quotes / Brad quotes.** Inset into text flow. Apply **Pull Quote** + **Pull Quote Attribution** or **Brad Quote** + **Brad Quote Attribution**. Align top of quote frame to baseline grid line. Allow 18pt space above and below.
- [ ] **12. Place callout boxes / data elements.** Apply sub-format-specific styles (e.g., **Callout Label** + **Callout Box Text** for callout boxes, **Infographic Data Value** + **Infographic Data Label** for data callouts).
- [ ] **13. Verify baseline alignment.** Select all body text frames. Confirm "Align to Baseline Grid" is enabled. Check that left-page and right-page columns top-align and bottom-align.
- [ ] **14. Check gutter safety.** Confirm no text is closer than 0.875" to the inside edge. Confirm no face or critical detail falls in the gutter zone.
- [ ] **15. Proof and export.** Proof all text against the locked copy document. Export a proof PDF at 300dpi with bleed marks and crop marks.

### Per-Sub-Format Notes

**pp. 4-5 (Welcome to the Workforce):**
- [ ] Use **Article Headline** (Freight Display). This is the reader's first feature — make it elegant.
- [ ] Hero image on left page, text on right. Classic feature opener.
- [ ] Include Brad sidebar quote with Gold left-rule border.

**pp. 6-7 (Your Personal Workspace):**
- [ ] Use **Article Headline Alt** (Barlow Condensed). Real estate headers are crisp, not literary.
- [ ] Build the dimensions callout box: **Infographic Data Value** for "6x8 ft", **Infographic Data Label** for "TOTAL WORKSPACE", **Infographic Annotation** for the comparison text.
- [ ] Stage 3-4 cubicle photos in a real estate grid layout.
- [ ] Keep generous margins — real estate listing energy = breathing room.

**pp. 8-9 (The Block):**
- [ ] Use **Article Headline Alt** (Barlow Condensed).
- [ ] Build repeating location modules: image (2 columns) + description (4 columns).
- [ ] Use **Article Subhead** for location names ("THE MESS HALL", "SOLITARY", etc.).
- [ ] Include the callout box for the carpet union line.
- [ ] 4-5 small, uniform location photos.

**pp. 12-13 (Morning Loadout):**
- [ ] Use **Article Headline Alt** (Barlow Condensed). Gear reviews are bold.
- [ ] Build **Callout Label** badges for each tactical name ("NERVE AGENT", "PERIMETER DEFENSE", "CUBICLE SHANK"). Signal Orange.
- [ ] Product photography: each item isolated on cream background, studio lighting.
- [ ] Cross-reference the Cubicle Shank to page 10 ("See p. 10").
- [ ] Include Pull Quote from Brad.

**pp. 14-15 (The Code):**
- [ ] Use **Infographic Headline** (Barlow Condensed Black, Institutional Teal). NOT Article Headline.
- [ ] Build the translation table with **Spec Table Header** (white on black), **Spec Table Label** (left column), and **Spec Table Cell** (right column).
- [ ] Alternating row fills: Cream (no fill) and Warm Gray 15%.
- [ ] No photography — data visualization IS the visual.
- [ ] Include Brad's quote at the bottom of the left page.

**pp. 18-19 (The Experiment):**
- [ ] Use **Article Headline** (Freight Display). Investigative journalism = literary serif.
- [ ] Text starts on the LEFT page (unlike most other spreads). Dense layout.
- [ ] Use **Article Subhead** for timeline markers ("HOUR 1", "HOUR 4", "HOUR 12").
- [ ] Overhead conference table photo (the pen). Witness portrait.
- [ ] Pull quote on the right page.

**pp. 20-21 (The Identity Crisis):**
- [ ] Use **Article Headline** (Freight Display). Fashion editorial = elegant serif.
- [ ] Fashion portrait on the left page. Aspirational, well-lit.
- [ ] Body text on the right page.
- [ ] Detail photography: close-ups of status markers + tally-mark tattoos.

**pp. 25-26 (Meet the Founder):**
- [ ] Use **Article Headline Alt** (Barlow Condensed). "MEET THE FOUNDER" in all caps.
- [ ] Brad portrait dominates the LEFT page. 70-80% of page height. DO NOT split across the gutter.
- [ ] Multiple pull quotes (2-3) on the right page. Brad's voice dominates.
- [ ] Consider the biographical sidebar / credential listing.
- [ ] Caption under the portrait should be a comedy beat: "Brad Sterling, photographed at Elevate Co. global headquarters (his apartment)."

---

## Cross-References

| Topic | Document |
|-------|----------|
| Complete InDesign system (all styles, colors, fonts) | `product/design/ELEVATE-MAGAZINE-INDESIGN-REFERENCE.md` |
| Page-by-page content structure | `product/copy/magazine-structure-v1.md` |
| Brad's voice and comedy patterns | `product/copy/brad-copy-voice-guide.md` |
| Brad's visual identity | `product/copy/brad-sterling-profile.md` |
| Approved narrative copy | `product/copy/copy-doc-v7.md` |
| World rules and vocabulary | `product/copy/world-rules.md` |
| Original InDesign technical spec | `product/design/magazine-indesign-spec-v1.md` |
| Research briefing (sources for this document) | `product/design/MAGAZINE-RESEARCH-BRIEFING.md` |
| Cubicle Shank ad spread (dark-background reference) | `product/design/cubicle-shank-spread-layout-v1.md` |

---

## Changelog

| Version | Date | Changes |
|---------|------|---------|
| v1 | May 25, 2026 | Initial format reference. Covers all 8 cream-background feature spreads across 7 sub-formats. Includes layout architectures (ASCII wireframes), shared design rules, per-sub-format style mappings, photography direction, cross-gutter handling, pacing/rhythm analysis, comedy integration strategy, common pitfalls, and production checklists. |
