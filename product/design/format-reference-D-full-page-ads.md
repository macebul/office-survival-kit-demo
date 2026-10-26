# Format D: Full-Page Ads — Dark Background
## Pages 16, 17, 27 | ELEVATE Magazine

**Version:** v1
**Last Updated:** May 25, 2026
**Status:** READY FOR BUILD — Layout specified, photography direction included, InDesign build order complete.
**Companion docs:** `product/design/ELEVATE-MAGAZINE-INDESIGN-REFERENCE.md` (InDesign system), `product/copy/magazine-structure-v1.md` (page structure), `product/design/cubicle-shank-spread-layout-v1.md` (Format E reference for comparison)

---

## Table of Contents

1. [Overview](#1-overview)
2. [Shared Design Rules](#2-shared-design-rules)
3. [Dark Background Treatment](#3-dark-background-treatment)
4. [Sub-Format: Wellness Brand Ad (Page 16 — Lifer Ink)](#4-sub-format-wellness-brand-ad-page-16--lifer-ink)
5. [Sub-Format: Transformation Ad (Page 17 — Turf Tags)](#5-sub-format-transformation-ad-page-17--turf-tags)
6. [Sub-Format: Evidence Report (Page 27 — The Confiscated)](#6-sub-format-evidence-report-page-27--the-confiscated)
7. [Photography Direction](#7-photography-direction)
8. [Text Legibility on Dark](#8-text-legibility-on-dark)
9. [Ad-to-Ad Transition (Pages 16-17 Facing Pair)](#9-ad-to-ad-transition-pages-16-17-facing-pair)
10. [Comedy Integration](#10-comedy-integration)
11. [Common Pitfalls](#11-common-pitfalls)
12. [Production Checklist](#12-production-checklist)

---

## 1. Overview

### What Format D Is

Format D covers **single-page product advertisements on matte black backgrounds**. These are the three pages in ELEVATE that use the **C-Full Page Ad** master page: pages 16, 17, and 27.

Each page is a self-contained ad for one kit product. No running headers. No page numbers. The ad owns the entire page.

### The Three Sub-Formats

| Page | Product | Sub-Format | Voice | Real-World Reference |
|------|---------|------------|-------|---------------------|
| 16 | Lifer Ink (temporary tattoos) | Wellness brand ad | Self-care / wellness | Aesop, Tatcha, Headspace magazine ads |
| 17 | Turf Tags (vinyl stickers) | Transformation ad | Territory / security | SimpliSafe, Ring doorbell, fitness transformation ads |
| 27 | The Confiscated (empty stapler recess) | Evidence report | Institutional + magazine polish | True crime documentary cards, police evidence reports |

### How Format D Differs from Format E (Spread Ads)

Format E (pages 10-11, 22-23, 28-29) uses the **D-Spread Ad** master across two facing pages with a tight 0.25" inside margin for cross-gutter layouts. Format D is a single page with equal 0.5" margins on all four sides. The constraints are different:

| | Format D (Single-Page Ad) | Format E (Spread Ad) |
|---|---|---|
| Master page | C-Full Page Ad | D-Spread Ad |
| Available space | 7.5" x 10" (live area) | 16" x 10" (live area across two pages) |
| Gutter | N/A | 0.25" inside margin, spine compensation needed |
| Layout challenge | Enough visual interest for ONE page | Balancing elements across TWO pages |
| Copy budget | 15-40 words (tight) | 50-120 words (more room) |
| Hero image | Must share space with copy on same page | Can dedicate an entire page to image |

The single-page constraint means every element must earn its space. There is no "B-side" to offload secondary content onto.

---

## 2. Shared Design Rules

### InDesign Setup (All Three Pages)

| Property | Value |
|----------|-------|
| Master page | **C-Full Page Ad** |
| Background | Matte Black (#1A1A1A) — see Section 3 for rich black formula |
| Columns | 1 column |
| All margins | 0.5" |
| Running header | None |
| Page number | None |
| Live area | 7.5" wide x 10" tall |
| Bleed | 0.125" all sides (background extends to bleed) |

### Text Color Strategy

White, gold, and warm gray are the only text colors on dark backgrounds. Each serves a specific hierarchy role:

| Color | Swatch Name | Role | Used For |
|-------|-------------|------|----------|
| White | White (Paper) | Primary reading text | Headlines, body copy, main messages |
| Gold | Gold (C:0 M:15 Y:80 K:10) | Accent / hierarchy marker | Subheads, taglines, brand names, decorative rules |
| Warm Gray 40 | Warm Gray 40 (C:0 M:3 Y:5 K:25) | Subordinate / fine print | Disclaimers, photo credits, footnotes |
| Classified Red | Classified Red (C:0 M:100 Y:90 K:10) | Evidence/warning accent | Evidence headers, stamps (page 27 only) |

**Rule:** No more than three text colors per page. White and gold appear on all three pages. Classified Red is reserved for page 27's evidence format. Warm Gray 40 appears only when fine print is present.

### Single-Column Layout Principles

With only one column and 0.5" margins, these pages have 7.5" of horizontal width to work with. Do NOT treat this as a full-width text column — that produces lines of 80+ characters, which is unreadable.

**Text column width:** Set body copy text frames to 4.5"-5.5" wide (60-70 characters per line at 11pt). Either center the text frame horizontally with equal side margins, or flush it left with a generous right margin that creates breathing room for a product image.

**Vertical distribution:** Use the rule of thirds as a starting grid:
- Top third (~3.3"): Hero image or dominant visual
- Middle third (~3.3"): Headline + primary message
- Bottom third (~3.3"): Supporting copy + CTA/tagline + fine print

Each sub-format below overrides these proportions based on its specific needs.

### Element Spacing

| Between... | Space |
|------------|-------|
| Hero image bottom edge and headline | 18-24pt |
| Headline and subhead | 6-8pt |
| Subhead and body copy | 12pt |
| Body copy and tagline/CTA | 24-30pt |
| CTA and fine print | 12-18pt |
| Fine print and bottom margin | Let it sit at the margin |

---

## 3. Dark Background Treatment

### The Problem

A flat, solid matte black background looks dead on a printed page. It reads as "they forgot to put something here" rather than "this is a premium dark canvas." Luxury magazine ads never use undifferentiated black — they create depth, atmosphere, and the sense that the product exists in a physical space.

### Rich Black Formula

The background swatch in the InDesign system is **Matte Black (C:0 M:0 Y:0 K:100)** — this is a single-channel black. On glossy coated stock, K:100 alone can print slightly gray or show bronzing. For the background fill, build a **rich black** swatch:

| Property | Value |
|----------|-------|
| Swatch name | Rich Black (Background) |
| CMYK | C:60 M:40 Y:20 K:100 |
| Total ink | 220% (well under the 300% coated stock limit) |
| Use | Background rectangle that fills to bleed on all dark-background pages |

**Implementation:** Place a rectangle on the page, sized to the bleed boundary (8.75" x 11.25"), filled with Rich Black. This sits BEHIND all other content. The C-Full Page Ad master already has a Matte Black background frame — override it with this rich black rectangle on the page layer, or update the master.

**Do NOT use rich black for text.** Small text set in rich black will show registration misalignment on press. Body text, headlines, and all type stays in the single-channel colors already defined in the paragraph styles.

### Creating Depth on Dark Pages

Use one or more of these techniques on every dark-background page. A page should use at least two.

#### Technique 1: Soft Radial Vignette

A faintly lighter center creates a "pool of light" behind the main content, as if the product sits on a lit surface in a dark studio.

**InDesign execution:**
1. Draw an ellipse roughly 60-70% of the page width, centered horizontally, positioned behind the hero image area
2. Fill with a radial gradient: center = Charcoal (K:85), edge = Matte Black (K:100)
3. Set opacity to 15-25%
4. Feather edges at 2-3" to prevent a hard boundary

This is subtle. If you can obviously see the ellipse, reduce opacity. The goal is to feel a sense of atmosphere, not to see a gradient shape.

#### Technique 2: Fine Noise Overlay

A barely-visible noise texture breaks the flatness of solid black and masks banding artifacts from gradients.

**InDesign execution:**
1. In Photoshop: Create a new document at 300dpi matching the page size (8.75" x 11.25" to cover bleed)
2. Fill with 50% gray
3. Filter > Noise > Add Noise: Amount 3-5%, Gaussian, Monochromatic
4. Save as TIFF
5. Place in InDesign on a layer above the background but below all content
6. Set blend mode to **Overlay** or **Soft Light**
7. Set opacity to 5-10%

**The noise should be invisible at arm's length.** It prevents the background from looking like a digital screen render and gives it the tactile quality of printed paper.

#### Technique 3: Colored Atmospheric Wash

A very faint tinted gradient behind the hero image area that signals the ad's visual personality without breaking the dark canvas.

| Page | Wash Color | Rationale |
|------|-----------|-----------|
| 16 (Lifer Ink) | Faint warm wash — Gold at 3-5% opacity | Wellness warmth, self-care glow |
| 17 (Turf Tags) | Faint cool wash — Institutional Teal at 3-5% opacity | Territory/security, controlled environment |
| 27 (The Confiscated) | Faint red wash — Classified Red at 2-3% opacity | Crime scene, danger, evidence |

**InDesign execution:** Same as the radial vignette (Technique 1), but use the tinted color instead of Charcoal. Keep it extremely subtle — this registers as mood, not as visible color.

#### Technique 4: Edge Gradients

For pages where the hero image sits in the upper portion, a very soft gradient from slightly lighter (bottom of image area) to pure black (top of page and bottom of page) creates the sense that the image emerges from darkness.

**InDesign execution:**
1. Draw a rectangle covering the full page to bleed
2. Fill with a linear gradient: top = Rich Black, center = Charcoal at 10% lighter, bottom = Rich Black
3. Set opacity to 20-30%
4. Position on the background layer

### What NOT to Do

- **Flat solid black with no treatment.** Looks like a printing error or an unfinished page. Always add at least two depth techniques.
- **Visible gradients.** If the reader can identify a gradient shape, it is too strong. These are atmospheric, not decorative.
- **Pure K:100 backgrounds on glossy stock.** Will print slightly gray and may bronze. Use rich black.
- **Total ink over 300%.** Rich black at C:60 M:40 Y:20 K:100 = 220%. Safe. Do not push higher for "blacker black."
- **Texture that competes with content.** The noise overlay and gradients exist to SUPPORT the product and text, not to be noticed. If someone says "cool background," it is too strong.

---

## 4. Sub-Format: Wellness Brand Ad (Page 16 — Lifer Ink)

### What This Page Is

A full-page ad for the **Motivational Body Art Collection** (temporary tattoo strip) in the voice of a wellness/self-care brand. Think Aesop, Headspace, Calm, or Tatcha — brands that invite rather than push, that use serene imagery, restrained type, and generous negative space.

The comedy: wellness language applied to prison tattoos. "Some milestones deserve more than a LinkedIn post. They deserve ink." The format is completely sincere. The content is completely insane.

### Layout Architecture

```
┌─────────────────────────────────────┐
│              0.5" margin            │
│   ┌─────────────────────────────┐   │
│   │                             │   │
│   │    LIFESTYLE PHOTOGRAPH     │   │  ← Top 45%: Someone proudly
│   │    (forearm with tally      │   │    displaying tattoo. Warm,
│   │     tattoos, warm light,    │   │    intimate, wellness energy.
│   │     intimate framing)       │   │    Soft edge into black below.
│   │                             │   │
│   └─────────────────────────────┘   │
│                                     │
│                                     │  ← 18-24pt breathing room
│                                     │
│   LIFER INK                         │  ← Ad Headline (54/50pt, white)
│   Motivational Body Art             │  ← Ad Subhead (18/22pt, gold)
│   Collection™                       │
│                                     │
│   Some milestones deserve           │  ← Ad Body (11/15pt, white)
│   more than a LinkedIn post.        │    3-4 short lines max.
│   They deserve ink.                 │    Centered or flush left.
│                                     │
│                                     │  ← 24pt space
│   ─── ✦ ───                        │  ← Thin gold rule with
│                                     │    decorative center element
│                                     │
│   Not given. Earned.                │  ← Ad CTA (13/15pt, gold,
│                                     │    centered, tracked out)
│                                     │
│   ┌─────────────────────────────┐   │
│   │  PRODUCT SHOT: tattoo strip │   │  ← Small product flat-lay,
│   │  flat-lay, ~2.5" wide       │   │    centered, showing all
│   │  showing all 4-6 designs    │   │    designs on the strip
│   └─────────────────────────────┘   │
│                                     │
│   elevate co. workplace             │  ← Ad Fine Print (6/8pt,
│   solutions division                │    Warm Gray 40, centered)
│   motivationalbodyart.              │
│   elevateco.com                     │
│                                     │
└─────────────────────────────────────┘
```

### Typography Hierarchy

| Element | Paragraph Style | Size/Leading | Color | Alignment | Notes |
|---------|----------------|-------------|-------|-----------|-------|
| Product name | **Ad Headline** | 54/50pt | White | Center | "LIFER INK" — set slightly smaller than 54pt if needed for centered balance (48pt acceptable) |
| Brad's rebranded name | **Ad Subhead** | 18/22pt | Gold | Center | "Motivational Body Art Collection" with Superscript character style on the TM |
| Body copy | **Ad Body** | 11/15pt | White | Center | 3-4 lines maximum. Wellness ads are sparse. |
| Gold rule | Manual | 0.5pt | Gold | Center | 3" wide, centered, with optional diamond or star glyph at center |
| Tagline | **Ad CTA** | 13/15pt | Gold | Center | "Not given. Earned." — tracked at +100 for breathing room |
| Fine print / URL | **Ad Fine Print** | 6/8pt | Warm Gray 40 | Center | Fake brand URL, Elevate Co. division name |

### How Real Wellness Ads Work (Adapted for Our Voice)

Real wellness brand ads share these conventions:
- **Photography dominates.** 50-60% of the page is image. The image does the emotional work.
- **Minimal copy.** 15-30 words of body text. Wellness brands trust the image and tagline to sell.
- **Centered layout.** Symmetrical, calm, balanced. Wellness avoids the dynamic asymmetry of fashion or tech ads.
- **Generous negative space.** White space (here, black space) IS the luxury signal. Do not fill empty areas.
- **Humanist or light serif type.** Our Freight Display Pro Bold Italic (Ad Subhead) delivers the warmth. Barlow Condensed Black (Ad Headline) adds the Elevate Co. brand edge.
- **Nature/human element.** The image includes a human body — here, the forearm displaying the tattoo. This is the self-care "ritual" visual.

### The Comedy

The wellness format is played completely straight. The photography is genuinely beautiful. The typography is genuinely elegant. The tagline ("Not given. Earned.") is genuinely moving — it sounds like a Nike campaign.

Then the reader processes what the product actually is: temporary tattoo tally marks. Prison ink. Applied with water and a damp cloth.

The gap between the premium ad format and the absurd product IS the joke. The copy never winks. The design never breaks character.

### Design Notes

- **The lifestyle photo should fade into black at its bottom edge.** Use a feathered mask or gradient opacity on the placed image so it blends into the dark background rather than having a hard rectangular boundary. This creates the "emerging from darkness" wellness mood.
- **Center everything vertically within the live area.** Wellness ads breathe. If the page feels crowded, remove an element — do not shrink margins.
- **The product flat-lay is small and subordinate.** This is not a product catalog shot — it is a subtle "here's what you're getting" anchor near the bottom. It should be roughly 2-2.5" wide, centered. The lifestyle photo carries the page.
- **Consider a thin gold border inset 0.25" from the page edges** (inside the margins). This is a classic wellness/luxury framing device — a hair-thin rule that floats on the dark background and creates a contained canvas. Weight: 0.25pt, Gold.

---

## 5. Sub-Format: Transformation Ad (Page 17 — Turf Tags)

### What This Page Is

A full-page ad for the **Workspace Personalization Labels** (vinyl sticker strip) in a Before/After transformation voice. Think home security ads (SimpliSafe, Ring), weight loss transformations, home renovation reveals, or territory/property ads.

The comedy: home security company language applied to desk stickers. The Before/After format implies that stickers are a genuine security upgrade for your workspace.

### Layout Architecture

```
┌─────────────────────────────────────┐
│              0.5" margin            │
│                                     │
│   TURF TAGS                         │  ← Ad Headline (54/50pt, white)
│   Workspace Personalization         │  ← Ad Subhead (18/22pt, gold)
│   Labels™                           │
│                                     │
│   ┌──────────┐   ┌──────────┐      │
│   │          │   │          │      │
│   │  BEFORE  │   │  AFTER   │      │  ← Two photos side by side,
│   │          │   │          │      │    each ~3.25" wide x 3.5" tall
│   │ (gray,   │   │ (color,  │      │
│   │  chaotic │   │  claimed │      │
│   │  desk)   │   │  desk)   │      │
│   │          │   │          │      │
│   └──────────┘   └──────────┘      │
│    BEFORE          AFTER            │  ← Callout Label (10/12pt,
│                                     │    Signal Orange, centered
│                                     │    above each photo)
│   Shared desk. No boundaries.       │  ← Ad Body (11/15pt, white)
│   Stolen lunch. Someone else's      │    Before description.
│   family photos near your monitor.  │
│                                     │
│   Claimed. Marked. Yours.           │  ← Ad Body, bold or gold
│   The lunch stays. So does          │    After description.
│   the respect.                      │
│                                     │
│   ──────────────────────────        │  ← Gold rule, 60% width
│                                     │
│   ┌─────────────────────────────┐   │
│   │  PRODUCT: sticker strip     │   │  ← Product flat-lay, ~4" wide,
│   │  showing all 6-10 designs   │   │    showing the strip with
│   │  on the vinyl strip         │   │    die-cut sticker shapes
│   └─────────────────────────────┘   │
│                                     │
│   Mark yours. Mean it.              │  ← Ad CTA (13/15pt, gold)
│                                     │
│   *No stickers were harmed in       │  ← Ad Fine Print (6/8pt,
│   the claiming of this workspace.   │    Warm Gray 40)
│                                     │
└─────────────────────────────────────┘
```

### Typography Hierarchy

| Element | Paragraph Style | Size/Leading | Color | Alignment | Notes |
|---------|----------------|-------------|-------|-----------|-------|
| Product name | **Ad Headline** | 54/50pt | White | Flush left | "TURF TAGS" — flush left to contrast with p.16's centered layout |
| Brad's rebranded name | **Ad Subhead** | 18/22pt | Gold | Flush left | "Workspace Personalization Labels" + Superscript TM |
| Before/After labels | **Callout Label** | 10/12pt | Signal Orange | Centered above each photo | "BEFORE" / "AFTER" |
| Before description | **Ad Body** | 11/15pt | White | Flush left | The "problem" state, 2-3 lines |
| After description | **Ad Body** + **Gold Accent** char style | 11/15pt | Gold | Flush left | The "solution" state, punchy, 1-2 lines |
| Gold rule | Manual | 0.5pt | Gold | Centered | 60% of live area width |
| CTA tagline | **Ad CTA** | 13/15pt | Gold | Centered | Short imperative. Tracked +100. |
| Fine print | **Ad Fine Print** | 6/8pt | Warm Gray 40 | Centered | Comedy disclaimer |

### How Real Transformation Ads Work (Adapted)

Real before/after and security-transformation ads share these conventions:
- **Side-by-side image pair is the centerpiece.** The visual comparison carries the argument. No amount of copy replaces the image contrast.
- **Before is desaturated/cold, After is warm/bright.** This is the infomercial visual language the reader instantly recognizes. The Cubicle Shank spread (pp. 10-11) uses the same technique — but this is a single-page version, so the photos are smaller and the pair sits mid-page rather than dominating an entire right page.
- **Copy is structured as problem > solution.** The Before description names the pain. The After description names the relief. The product sits between them as the implied cause.
- **CTAs are imperative.** "Protect your home." "Claim your space." "Mark yours." Short, commanding, confident.
- **The product appears after the transformation.** The reader sees the problem, sees the result, THEN sees the tool. This is persuasion sequencing.

### Differences from the Cubicle Shank Before/After (pp. 10-11)

The Cubicle Shank spread dedicates a full page to Kyle's Before/After. This page compresses the same format into roughly one-third of the page. The key adjustments:

- **Smaller photos.** Each photo is ~3.25" wide x 3.5" tall (vs. 3.5" x 4.5" on the Cubicle Shank spread). They still need to be large enough that the reader can see the workspace details.
- **Headline ABOVE the photos** (vs. the Cubicle Shank, where the headline is on the opposite page). Single-page ads put the brand hook at the top of the reading flow.
- **Less copy.** 2-3 lines of Before description, 1-2 lines of After. No testimonials — there is no room.
- **Product shot at bottom** instead of a CTA block. The product strip is the visual CTA.

### The Comedy

Home security companies sell peace of mind. This ad sells the same thing — for a desk. "Shared desk. No boundaries. Stolen lunch." reads like a home invasion report. "Claimed. Marked. Yours." reads like a security system confirmation.

The Before/After photos complete the joke visually: the Before is a genuinely chaotic, boundary-less workspace. The After is the same desk with territorial stickers everywhere — "PROPERTY OF," "DO NOT TOUCH," caution tape borders. The desk looks like a fortified compound. The owner looks serene.

### Design Notes

- **Flush left alignment** contrasts with page 16's centered wellness layout. These two pages face each other — they must look like different brands (see Section 9).
- **The Before photo should be slightly smaller or slightly lower** than the After photo. This creates subtle visual hierarchy that favors the After state. Real transformation ads do this — the Before is the setup, the After gets the prime position.
- **Signal Orange for the BEFORE/AFTER labels** matches the Callout Label style used in the Cubicle Shank spread, maintaining consistency across the magazine's ad vocabulary.

---

## 6. Sub-Format: Evidence Report (Page 27 — The Confiscated)

### What This Page Is

A full-page incident report about the empty stapler recess in Tray 2. This page uses **police evidence report formatting** with magazine production values — it should look like a page torn from a crime file, but printed on glossy stock with professional typography.

The comedy: police-report format for a missing stapler. The institutional language treats a confiscated office supply as a Level 3 security threat. This page is also a **teaser for the physical kit** — the reader will discover this exact empty recess when they open Tray 2.

### Layout Architecture

```
┌─────────────────────────────────────┐
│              0.5" margin            │
│                                     │
│   ██ INCIDENT REPORT ██            │  ← Evidence Header (14/16pt,
│   OFFICE OF WORKPLACE SECURITY      │    Classified Red, all caps,
│   FILE NO. WSO-2026-0147           │    IBM Plex Mono Bold)
│                                     │
│   ───────────────────────────       │  ← Classified Red rule, 1pt
│                                     │
│   ITEM:     Standard Desktop        │  ← Evidence Field Label +
│             Stapler (Chrome)        │    Evidence Field Value pairs
│   STATUS:   CONFISCATED             │    Labels: Warm Gray 80,
│   THREAT LEVEL: ELEVATED            │    Values: White, IBM Plex Mono
│   LAST KNOWN                        │
│   LOCATION: Desk 14B, Pod 7        │
│   CONFISCATED                       │
│   FROM:     [REDACTED]              │
│   DATE:     [REDACTED]             │
│   REASON:   WEAPONIZED OFFICE       │
│             EQUIPMENT               │
│                                     │
│   ┌─────────────────────────────┐   │
│   │                             │   │
│   │   EVIDENCE PHOTOGRAPH       │   │  ← Center 40%: Chalk outline
│   │   (chalk outline of empty   │   │    of stapler shape in the
│   │    stapler recess,          │   │    empty tray recess. Crime
│   │    crime-scene framing,     │   │    scene photography style.
│   │    evidence markers)        │   │    5" wide x 3.5" tall.
│   │                             │   │
│   └─────────────────────────────┘   │
│   EXHIBIT A — SITE OF REMOVAL       │  ← Caption (8/11pt, Warm Gray 40)
│                                     │
│                                     │
│       C O N F I S C A T E D         │  ← Ad Headline (54/50pt, white)
│                                     │    with Red Accent char style,
│                                     │    tracked +200 for stamp feel
│   WEAPONIZED OFFICE EQUIPMENT       │  ← Ad Subhead (18/22pt, gold)
│   INCIDENT #147                     │
│                                     │
│   Do not reissue. Do not replace.   │  ← Ad Body (11/15pt, white)
│   Do not ask what happened          │    2-3 lines. Institutional.
│   to the last one.                  │
│                                     │
│   ┌─────────────┐                   │
│   │ CLASSIFIED  │ ← Stamp graphic   │  ← Rotated ~15 degrees,
│   │ DO NOT      │    overlaid at     │    Classified Red, 2pt
│   │ DISTRIBUTE  │    bottom-right    │    border, positioned to
│   └─────────────┘                   │    overlap the margin area
│                                     │
│   Filed by: Gary, Quality Assurance │  ← Infographic Annotation
│   "Everything checks out. I don't   │    (7.5/10pt, Warm Gray 40)
│   want to talk about the stapler."  │
│                                     │
└─────────────────────────────────────┘
```

### Typography Hierarchy

| Element | Paragraph Style | Size/Leading | Color | Alignment | Notes |
|---------|----------------|-------------|-------|-----------|-------|
| "INCIDENT REPORT" header | **Evidence Header** | 14/16pt | Classified Red | Flush left | IBM Plex Mono Bold, all caps, +120 tracking |
| Sub-header (office, file no.) | **Evidence Field Label** | 9/13pt | Warm Gray 80 | Flush left | All caps |
| Red rule below header | Manual | 1pt | Classified Red | Full live area width | Separates header from fields |
| Field labels ("ITEM:", "STATUS:") | **Evidence Field Label** | 9/13pt | Warm Gray 80 | Flush left | All caps, tabbed to consistent stop |
| Field values | **Evidence Field Value** | 10/13pt | White | Flush left | IBM Plex Mono Regular. [REDACTED] text uses Redacted character style or filled black bars |
| Evidence photo caption | **Caption** | 8/11pt | Warm Gray 40 | Centered below image | "EXHIBIT A" prefix in all caps |
| "CONFISCATED" stamp headline | **Ad Headline** | 54/50pt | White + **Red Accent** char style | Center | Tracked at +200 for official stamp feel |
| Incident description | **Ad Subhead** | 18/22pt | Gold | Center | "WEAPONIZED OFFICE EQUIPMENT / INCIDENT #147" |
| Body warning text | **Ad Body** | 11/15pt | White | Center | 2-3 lines max. Deadpan institutional. |
| Stamp overlay | Manual text frame | 18pt | Classified Red | Rotated 12-18 degrees | "CLASSIFIED / DO NOT DISTRIBUTE" with 2pt border |
| Gary's sign-off | **Infographic Annotation** | 7.5/10pt | Warm Gray 40 | Flush left | Filed-by credit + Gary's quote |

### How to Create the Evidence/Dossier Aesthetic

Real evidence reports and true-crime document pages use these visual conventions. Apply them within the ELEVATE design system:

**Monospaced text throughout.** The Evidence Field Label and Evidence Field Value styles already use IBM Plex Mono. This signals "official document" instantly. Use tab stops to align field labels and values into a consistent two-column structure (labels at left margin, values tabbed to 1.5" from left).

**Horizontal rules as section dividers.** Classified Red, 1pt, spanning the full live area width. Place one below the header and one above the evidence photograph. These are the form-field lines of a bureaucratic document.

**Redacted text blocks.** For [REDACTED] fields, use the Redacted paragraph style (IBM Plex Mono Bold, Elevate Black text with a thick underline/strikethrough in Elevate Black at 120% weight). Alternatively, use solid black rectangles (filled frames) placed over dummy text. The redaction signals that something happened here that cannot be disclosed.

**Stamp overlays.** Create a text frame with "CLASSIFIED" and "DO NOT DISTRIBUTE" in IBM Plex Mono Bold, Classified Red, 14-18pt, surrounded by a 2pt Classified Red stroke border with 6pt inset. Rotate the frame 12-18 degrees. Position it overlapping the bottom-right corner of the page, partially crossing into the margin area. This intentional "sloppy placement" is how real stamps look on documents.

**Worn/aged effects (optional, use sparingly).** A subtle paper texture overlay at 3-5% opacity in the evidence photo area can suggest a scanned or photocopied document. Do NOT overdo this — the page should still read as glossy magazine, not as a distressed prop. The magazine production values are what make this format funny.

### The Comedy

This page operates on two levels simultaneously:

**Level 1 — Comedy.** The police-report format treats a missing stapler as a serious crime. Incident #147 implies there have been 146 previous incidents. The threat level is "ELEVATED" (a pun on Elevate Co.). Gary's sign-off quote ("I don't want to talk about the stapler") implies psychological damage.

**Level 2 — Kit teaser.** The reader who opens Tray 2 will find this exact empty recess — a chalk-outline stapler silhouette with the text "CONFISCATED — WEAPONIZED OFFICE EQUIPMENT. INCIDENT #147. DO NOT REISSUE." This page primes the reader for that discovery. The evidence photo on this page matches what they will physically find in the kit.

### Design Notes

- **This page should feel structurally different from pages 16 and 17.** Those are brand ads with marketing voices. This is a document — form fields, monospaced text, redacted blocks, stamp overlays. The visual language is bureaucratic, not promotional.
- **The evidence photograph occupies the center of the page** — roughly 5" wide x 3.5" tall. It anchors the reading flow between the report fields above and the "CONFISCATED" statement below.
- **No product flat-lay.** There IS no product. The empty recess is the product. The photograph of the empty space is the only visual.
- **Gary's quote at the bottom** is the final comedy beat. It should be small, almost an afterthought — the kind of annotation you find at the bottom of an official form.

---

## 7. Photography Direction

### General Principles for Dark-Background Product Photography

All three pages feature products (or the absence of a product) photographed for a matte black environment. These principles apply across all three:

**Rim lighting / edge lighting is critical.** On a dark background, the product's contours are defined by light along the edges, not by the fill light. A bright key light from one side with minimal fill on the opposite side creates dramatic edge definition while keeping the overall mood dark.

**Dark-field lighting technique.** The background stays black. The product is lit from behind or from the sides so that only its contours and surface textures catch light. The background absorbs all spill. This is the standard technique for luxury product photography on dark backgrounds.

**Controlled fill — less is more.** Strong side lighting with minimal fill exaggerates surface texture on matte surfaces (like the tattoo sheet paper or the vinyl sticker strip). This makes the products look tactile and real.

**Avoid over-lighting.** On dark backgrounds, the temptation is to blast the product with light so it "pops." This destroys the dark mood. The product should emerge from the darkness, not fight against it.

**Background treatment in the photography.** Use very deep grays or faintly brighter center areas behind the product to prevent the product outline from merging with the pure black background. A barely-visible radial gradient in the photo itself (not just in InDesign) provides natural separation.

### Page 16 — Lifer Ink Photography

**Image 1: Lifestyle Hero (top 45% of page)**

Someone's forearm displayed proudly, with 2-3 visible temporary tattoo designs (tally marks, "LIFER" text, a clock with no hands). Warm, intimate lighting — think wellness brand editorial photography. The arm should be well-lit with golden/warm tones while the background falls to black. Shallow depth of field with the tattoos in sharp focus.

**Art direction:**
- Frame: Forearm and hand, shot from slightly above, resting on a dark surface
- Lighting: Warm key light from camera-left, soft fill, background dark
- The tattoos should be clearly legible — they are the subject, not the arm
- Expression of ownership/pride — even though we see only the arm, body language matters
- This should look like it belongs in a wellness/self-care magazine feature about ritual and meaning

**Midjourney prompt approach:**
```
a photograph of a person's forearm resting on a dark matte surface, warm
golden side-lighting from the left, shallow depth of field, the forearm
displays several small minimalist temporary tattoos — a set of five
tally marks, the word LIFER in small block letters on the wrist, and a
simple clock face with no hands near the inner elbow, the tattoos are
clean and precise like professional temporary tattoos, the person's hand
is relaxed and open suggesting pride and calm, dark background fading to
pure black, professional product photography for a wellness brand
advertisement, editorial quality, intimate and serene mood
--no [standard negatives] --ar 16:9 --s 250 --v 6.1
```

**Image 2: Product Flat-Lay (bottom section, small)**

The tattoo strip laid flat on a dark surface, all 4-6 designs visible. Lit from above or from one side. Shot directly overhead (flat-lay). Clean, simple, informational — the reader needs to see what the designs look like.

**Art direction:**
- Frame: Overhead shot of the strip, roughly 5" x 1.5" physical strip
- Lighting: Even, controlled, minimal shadows
- Background: Deep charcoal surface (not pure black — the strip needs separation)
- The individual tattoo designs should be clearly legible
- Scale: This image appears small on the page (~2.5" wide in the layout)

### Page 17 — Turf Tags Photography

**Image 1: Before (left of pair)**

A chaotic, boundary-less workspace. Desaturated/grayscale treatment. Someone else's stuff encroaching — a neighbor's papers spilling over, a lunch bag with someone else's name, personal space invaded. The same "pathetic Before" energy as Kyle's Before photo on page 11, but focused on the DESK environment, not a person.

**Art direction:**
- Frame: Overhead or slight angle shot of a desk surface, 3.25" x 3.5" in layout
- Color: Desaturated to near-grayscale, slightly blue-gray tones
- The desk is messy AND invaded — other people's items are clearly present
- No territorial markers of any kind — this desk belongs to everyone and no one
- Lighting: Flat, unflattering fluorescent energy

**Image 2: After (right of pair)**

The same desk, now covered in territorial stickers. Full warm color. "PROPERTY OF" stickers on the monitor. "DO NOT TOUCH" on the stapler. "CLAIMED" label on the desk surface. Caution tape-style sticker along the desk edge. The desk looks like a secured perimeter. The lighting is warm, golden, aspirational.

**Art direction:**
- Frame: Same angle and framing as the Before — they must read as the same desk
- Color: Full rich color, warm golden tones
- The stickers should be clearly visible and readable
- The desk is neat, organized, and thoroughly marked
- Lighting: Warm side-lighting, aspirational

**Image 3: Product Flat-Lay (bottom section)**

The sticker strip showing all 6-10 die-cut designs. Similar approach to the Lifer Ink flat-lay — overhead, clean, informational. The strip should show the variety of sticker designs.

### Page 27 — The Confiscated Photography

**Image: Evidence Photograph (center of page)**

The empty stapler recess from Tray 2, photographed as a crime scene. Chalk outline of a stapler silhouette at the bottom of an empty recess. Small numbered evidence markers (the yellow A-frame markers used at crime scenes) placed around the recess. Harsh, clinical lighting — not warm, not inviting. The opposite of the wellness mood on page 16.

**Art direction:**
- Frame: Overhead shot looking straight down into an empty tray recess
- The chalk outline should be clearly visible — a white stapler silhouette on dark tray material
- 2-3 small yellow evidence markers with numbers ("1", "2") placed at strategic points
- A ruler or evidence scale bar along one edge (optional, adds authenticity)
- Lighting: Hard, directional, clinical. Slight shadows from the evidence markers.
- Background: The tray material is the background — dark, slightly textured
- This should look like an actual crime scene photograph that was placed into a glossy magazine. The contrast between the clinical subject matter and the magazine production quality is part of the comedy.

**Midjourney prompt approach:**
```
a photograph looking straight down into an empty rectangular recess in a
dark matte tray, at the bottom of the recess is a white chalk outline
silhouette of a desktop stapler, two small yellow triangular crime scene
evidence markers with the numbers 1 and 2 placed near the outline, a
small white plastic ruler evidence scale bar along the bottom edge of the
recess, harsh overhead flash photography like a forensic evidence
photograph, clinical documentary lighting with sharp shadows from the
evidence markers, the recess walls are visible and clean, sterile and
institutional mood, police evidence documentation photography style
--no [standard negatives] --ar 4:3 --s 250 --v 6.1
```

### Midjourney Considerations for Dark Backgrounds

- **Specify "pure black background" or "dark background fading to black"** in every prompt. Midjourney tends to add environmental detail unless told not to.
- **For the Multiply blend mode workaround:** Generate product shots on a **white background** for images that need background removal. However, for lifestyle shots (the forearm on p.16, the desk photos on p.17), the dark background should be part of the generated image — no removal needed.
- **For the evidence photo on p.27:** Generate on a dark/natural background that matches the tray material. No background removal needed — the photo sits in a rectangular frame on the page.
- **Aspect ratios by image:**
  - p.16 lifestyle hero: 16:9 (wide, horizontal, fills width)
  - p.16 product flat-lay: 3:1 (wide strip)
  - p.17 Before/After pair: 3:4 each (portrait, side by side)
  - p.17 product flat-lay: 3:1 (wide strip)
  - p.27 evidence photo: 4:3 (landscape, centered)

---

## 8. Text Legibility on Dark

### White Text on Dark Backgrounds

White text on matte black is inherently high-contrast, but several factors affect readability in print:

**Minimum sizes by style:**

| Style | Minimum Size | Notes |
|-------|-------------|-------|
| Ad Headline (Barlow Condensed Black) | 36pt | No concerns at ad scale. Bold condensed at large size reads effortlessly. |
| Ad Subhead (Freight Display Pro Bold Italic) | 14pt | Italic serifs below 14pt on dark backgrounds lose crispness. Keep at 18pt as designed. |
| Ad Body (Freight Text Pro Book) | 10pt | The designed 11/15pt is safe. Below 10pt, thin serifs start to fill in on dark. |
| Ad CTA (Barlow Condensed Bold) | 11pt | Condensed bold holds up well. 13pt as designed is generous. |
| Ad Fine Print (IBM Plex Mono Light) | 6pt | This is the danger zone — see below. |
| Evidence Field Label (IBM Plex Mono Medium) | 8pt | 9pt as designed is safe. Medium weight helps. |
| Evidence Field Value (IBM Plex Mono Regular) | 9pt | 10pt as designed provides comfortable readability. |

**Spacing on dark backgrounds:** White text on dark optically appears slightly heavier than the same text on light backgrounds (the "irradiation illusion"). To compensate:
- Increase tracking by +5 to +10 on body copy if it looks tight
- Ensure leading is generous (the 15pt leading on 11pt Ad Body provides this)
- Do not set more than 55-60 characters per line for body copy

### Gold Accent Text

Gold (C:0 M:15 Y:80 K:10) on matte black has lower contrast than white on black. It reads as warm and premium, but becomes illegible faster at small sizes.

**When to use gold text:**
- Subheads (18pt+): Always safe
- Taglines/CTAs (13pt+): Safe with generous tracking
- Attribution lines (7.5-9pt): Borderline — test on proof. The gold reads at this size but only with the heavier IBM Plex Mono weight.
- Below 7pt: Do NOT use gold. Switch to Warm Gray 40 or white.

**How much gold per page:** No more than 3-4 elements per page in gold. If everything is gold, nothing is gold. Use gold for hierarchy — it marks the elements that are one step below the headline but above the body copy.

### Fine Print at 6pt on Dark Backgrounds

The Ad Fine Print style (IBM Plex Mono Light, 6/8pt, Warm Gray 40) is the most challenging legibility scenario in the magazine. At 6pt, the Light weight of IBM Plex Mono produces very thin strokes. On a dark background, these strokes compete with the background.

**Mitigation strategies:**
1. **Upgrade to IBM Plex Mono Regular** for fine print on dark pages if the Light weight fails proofing. The Regular weight has slightly thicker strokes.
2. **Increase tracking to +20.** At 6pt, characters crowd together. Extra tracking gives each letter air.
3. **Use Warm Gray 40, not a darker gray.** Warm Gray 40 at K:25 provides enough contrast against Rich Black. Anything darker disappears.
4. **Keep fine print lines short.** 4" maximum line width for 6pt text. Longer lines at tiny sizes are unreadable regardless of contrast.
5. **Proof at actual print size.** The InDesign screen is not the authority — a printed proof at 100% scale is. If fine print is unreadable on the proof, increase to 7pt.

**The comedy exception:** Fine print on these pages IS comedy content (fake disclaimers, absurd warnings). If it is unreadable, the joke is lost. Err on the side of legibility over elegance.

---

## 9. Ad-to-Ad Transition (Pages 16-17 Facing Pair)

### The Problem

Pages 16 and 17 face each other when the magazine is open. Both are full-page ads on dark backgrounds using the same master page (C-Full Page Ad). If they share the same layout structure, the reader sees a monotonous spread of twin ads. They need to look like **different ads from different brands** while remaining recognizably part of the ELEVATE magazine.

### Strategy: Contrast in Every Dimension

| Dimension | Page 16 (Lifer Ink) | Page 17 (Turf Tags) |
|-----------|--------------------|--------------------|
| **Alignment** | Centered | Flush left |
| **Visual weight distribution** | Top-heavy (hero photo top, text below) | Even (headline top, photos middle, product bottom) |
| **Primary image** | Single lifestyle photo, soft/warm | Before/After photo pair, high contrast |
| **Mood** | Warm, serene, inviting | Energetic, territorial, transformative |
| **Atmospheric wash** | Gold (warm) | Teal (cool) |
| **Copy density** | Sparse (15-25 words) | Moderate (30-40 words) |
| **Typography feel** | Centered stack, elegant | Left-aligned, punchy |
| **Implied real-world brand** | Aesop / Tatcha / Headspace | SimpliSafe / Ring / ADT |

### Visual Balance Across the Spread

When the reader opens to pages 16-17, the left page (16) should feel like an inhale and the right page (17) should feel like an exhale. The wellness ad is contemplative; the transformation ad is assertive.

**Eye flow across the pair:**
1. Reader's eye enters at page 16's hero photograph (top left of the spread)
2. Moves down through the centered text stack
3. Crosses the gutter to page 17's headline (upper right)
4. Drops to the Before/After pair (center of page 17)
5. Continues down to the product and CTA

The two pages create a natural reading Z-pattern across the spread, even though they are unrelated ads.

### What to Avoid

- **Mirrored layouts.** If both pages have a large image at top and text at bottom, they look like the same ad printed twice.
- **Same typographic alignment.** If both are centered OR both are flush left, the spread lacks visual contrast.
- **Same atmospheric wash color.** The warm gold (p.16) vs. cool teal (p.17) creates chromatic contrast even at very low opacity.
- **Same image shape.** Page 16 has one wide horizontal hero. Page 17 has two portrait-format photos side by side. Different silhouettes break the twin effect.

---

## 10. Comedy Integration

### How Each Sub-Format Uses the Gap

The comedy engine across all ELEVATE pages is: **everyone is aggressively enthusiastic about the horror.** For Format D specifically, the gap operates between the professional ad format and the insane product content.

### Page 16 — The Wellness Paradox

| Ad Format Says... | Content Actually Is... |
|-------------------|----------------------|
| "Your healing journey" | Temporary prison tattoos |
| Serene lifestyle photography | Someone displaying tally marks for years served |
| "Not given. Earned." | A Nike-caliber tagline for fake ink |
| Elegant centered typography | Selling water-transfer tattoos |
| Self-care ritual framing | Counting the days until release |

The comedy is structural. Every design choice (warm lighting, generous negative space, serif accents) signals "premium wellness brand." The reader's brain processes the format before the content. By the time they read "tally mark tattoo," they have already emotionally categorized this as a self-care product. The re-categorization is the laugh.

### Page 17 — The Security Theater

| Ad Format Says... | Content Actually Is... |
|-------------------|----------------------|
| "BEFORE: No boundaries" | Someone's pencil cup is 2 inches past the invisible line |
| "AFTER: Claimed. Marked." | The desk looks like a military checkpoint |
| Before/After transformation | Stickers. Just stickers. |
| Home security urgency | Office supply territory |
| "Mark yours. Mean it." | Claiming a desk with a vinyl label |

The Before/After format is the comedy vehicle. Transformation ads imply real, meaningful change. The actual change is: stickers were applied. The grayscale-to-color visual shift implies a life transformation. The reality is a workspace that went from "shared" to "aggressively labeled."

### Page 27 — The Institutional Absurdity

| Ad Format Says... | Content Actually Is... |
|-------------------|----------------------|
| "INCIDENT REPORT" | A missing office stapler |
| "THREAT LEVEL: ELEVATED" | Someone took the stapler |
| Evidence photography | An empty tray recess |
| Crime scene markers | Yellow triangles next to... nothing |
| "Filed by: Gary" | A quality inspector traumatized by a stapler |
| Chalk outline | The outline of a $4 stapler |

Page 27 is unique because the comedy operates through FORMAT, not just content. The evidence report structure (field labels, redacted text, stamp overlays) is itself the joke. The reader instantly recognizes "police report" and then processes that the subject is a stapler. The forensic seriousness applied to an absent office supply is the payoff.

This page also functions as a kit teaser — the reader who later opens Tray 2 and finds the actual empty recess with the actual chalk outline will experience a callback. The magazine advertised a crime scene; the kit delivers one.

---

## 11. Common Pitfalls

### What NOT to Do

**Flat black backgrounds.** Do not skip the depth treatment (Section 3). A flat K:100 background across the entire page looks like a screen render, not a printed magazine. Every dark page needs at least two of the four depth techniques.

**Illegible fine print.** Fine print on dark backgrounds must survive a printed proof at 100% scale. IBM Plex Mono Light at 6pt in Warm Gray 40 is the edge case. If it fails proofing, increase to 7pt or upgrade to Regular weight. The fine print IS comedy — it must be readable.

**Overcrowded single pages.** A single page (7.5" x 10" live area) cannot hold a hero image, headline, subhead, body copy, product shot, CTA, fine print, AND testimonials. Something has to give. Format D pages should have **5-7 elements maximum**. If you are placing more than 7 distinct text/image blocks, remove the weakest one.

**Dark products disappearing.** The vinyl sticker strip (Turf Tags) and temporary tattoo strip (Lifer Ink) may have dark areas that merge with the black background in flat-lay photography. When generating product shots, specify slightly lighter surfaces behind the products (deep charcoal, not pure black) and strong rim/edge lighting.

**Same layout on facing pages.** Pages 16 and 17 face each other. If both have centered layouts with the same proportions, the spread looks like a mirror image. See Section 9 for mandatory contrast strategies.

**Visible gradients and textures.** All depth techniques (vignettes, noise, atmospheric washes) should be invisible to the conscious eye. If a gradient or texture is the first thing you notice on the page, reduce its opacity by half.

**Gold overuse.** Gold is the accent color, not the primary. No more than 3-4 gold elements per page. If everything is gold, the hierarchy collapses.

**Evidence report without magazine polish.** Page 27 uses dossier/evidence formatting, but it is still a page in a glossy magazine. The monospaced text and stamp overlays signal "document" — the glossy paper, rich black background, and professional typography signal "magazine." Both signals must be present. If the page looks like an actual photocopied police report, it has lost the production values that make the format funny.

**Forgetting the rich black override.** The C-Full Page Ad master has a Matte Black (K:100) background. On glossy stock, this can print slightly gray. Override with the Rich Black swatch (C:60 M:40 Y:20 K:100) on every page that uses this master.

---

## 12. Production Checklist

### Page 16 — Lifer Ink Ad

Build order:

- [ ] Assign C-Full Page Ad master to page 16
- [ ] Place Rich Black background rectangle to bleed (8.75" x 11.25")
- [ ] Apply Technique 1 (radial vignette) centered behind hero image area, opacity 20%
- [ ] Apply Technique 3 (warm gold atmospheric wash) behind hero area, opacity 3-5%
- [ ] Apply Technique 2 (noise overlay) across full page, Soft Light blend mode, opacity 5-8%
- [ ] Generate lifestyle hero image via Midjourney (forearm with tattoos, warm lighting, 16:9)
- [ ] Place hero image — top 45% of page, full live-area width (7.5"), feathered bottom edge
- [ ] Generate product flat-lay image (tattoo strip overhead, 3:1 aspect ratio)
- [ ] Place product flat-lay — centered, ~2.5" wide, positioned in lower quarter
- [ ] Set "LIFER INK" in Ad Headline, centered
- [ ] Set "Motivational Body Art Collection" in Ad Subhead, centered, apply Superscript character style to TM
- [ ] Set body copy (3-4 lines) in Ad Body, centered
- [ ] Draw thin gold rule (0.5pt, Gold swatch, 3" wide) centered between body and tagline
- [ ] Set "Not given. Earned." in Ad CTA, centered, Gold, tracked +100
- [ ] Set fine print / fake URL in Ad Fine Print, centered, Warm Gray 40
- [ ] Optional: Draw 0.25pt Gold border inset 0.25" from page edges
- [ ] Verify text hierarchy reads correctly at arm's length
- [ ] Export proof PDF at 300dpi with bleed marks
- [ ] Print proof at 100% — verify fine print legibility, gold contrast, image quality

### Page 17 — Turf Tags Ad

Build order:

- [ ] Assign C-Full Page Ad master to page 17
- [ ] Place Rich Black background rectangle to bleed
- [ ] Apply Technique 1 (radial vignette) centered behind Before/After area, opacity 15%
- [ ] Apply Technique 3 (cool teal atmospheric wash) behind photo area, opacity 3-5%
- [ ] Apply Technique 2 (noise overlay) across full page, Soft Light blend mode, opacity 5-8%
- [ ] Set "TURF TAGS" in Ad Headline, flush left
- [ ] Set "Workspace Personalization Labels" in Ad Subhead, flush left, Superscript TM
- [ ] Generate Before photo via Midjourney (chaotic desk, desaturated, 3:4 portrait)
- [ ] Generate After photo via Midjourney (same desk, stickers applied, warm color, 3:4 portrait)
- [ ] Place Before and After photos side by side — each ~3.25" wide x 3.5" tall, 0.25" gap between them
- [ ] Confirm Before is desaturated/grayscale, After is full warm color
- [ ] Set "BEFORE" and "AFTER" in Callout Label above each photo (Signal Orange)
- [ ] Set Before description in Ad Body, flush left (2-3 lines)
- [ ] Set After description in Ad Body with Gold Accent character style, flush left (1-2 lines)
- [ ] Draw gold rule (0.5pt, 60% live area width, centered)
- [ ] Generate product flat-lay (sticker strip overhead, 3:1 aspect ratio)
- [ ] Place product flat-lay — centered, ~4" wide, below gold rule
- [ ] Set CTA tagline in Ad CTA, centered, Gold
- [ ] Set fine print in Ad Fine Print, centered, Warm Gray 40
- [ ] Verify flush-left alignment contrasts with page 16's centered layout
- [ ] Export proof PDF at 300dpi with bleed marks
- [ ] Print proof at 100% — verify fine print legibility, Before/After contrast reads clearly

### Page 27 — The Confiscated

Build order:

- [ ] Assign C-Full Page Ad master to page 27
- [ ] Place Rich Black background rectangle to bleed
- [ ] Apply Technique 1 (radial vignette) centered behind evidence photo area, opacity 15%
- [ ] Apply Technique 3 (faint Classified Red atmospheric wash) behind photo area, opacity 2-3%
- [ ] Apply Technique 2 (noise overlay) across full page, Soft Light blend mode, opacity 5-8%
- [ ] Set "INCIDENT REPORT" in Evidence Header, flush left, Classified Red
- [ ] Set "OFFICE OF WORKPLACE SECURITY" in Evidence Field Label, flush left
- [ ] Set "FILE NO. WSO-2026-0147" in Evidence Field Label, flush left
- [ ] Draw 1pt Classified Red horizontal rule below header, full live-area width
- [ ] Build field label/value pairs using tab stops:
  - [ ] ITEM: → Standard Desktop Stapler (Chrome)
  - [ ] STATUS: → CONFISCATED
  - [ ] THREAT LEVEL: → ELEVATED
  - [ ] LAST KNOWN LOCATION: → Desk 14B, Pod 7
  - [ ] CONFISCATED FROM: → [REDACTED] (use Redacted style)
  - [ ] DATE: → [REDACTED]
  - [ ] REASON: → WEAPONIZED OFFICE EQUIPMENT
- [ ] Generate evidence photograph via Midjourney (empty recess, chalk outline, evidence markers, 4:3)
- [ ] Place evidence photo — centered, ~5" wide x 3.5" tall, centered vertically in page middle
- [ ] Set "EXHIBIT A — SITE OF REMOVAL" in Caption, centered below image
- [ ] Set "CONFISCATED" in Ad Headline, centered, apply Red Accent character style, tracked +200
- [ ] Set "WEAPONIZED OFFICE EQUIPMENT / INCIDENT #147" in Ad Subhead, centered, Gold
- [ ] Set warning body copy (2-3 lines) in Ad Body, centered
- [ ] Create stamp overlay text frame: "CLASSIFIED / DO NOT DISTRIBUTE" in IBM Plex Mono Bold, 14pt, Classified Red, 2pt border, 6pt inset padding
- [ ] Rotate stamp frame 12-18 degrees, position at bottom-right overlapping margin
- [ ] Set Gary's sign-off in Infographic Annotation, flush left, Warm Gray 40
- [ ] Verify monospaced evidence section reads as "official document"
- [ ] Verify stamp overlay looks intentionally placed (slightly askew, not random)
- [ ] Export proof PDF at 300dpi with bleed marks
- [ ] Print proof at 100% — verify all text legibility, redacted blocks render correctly, stamp reads clearly

### Cross-Page Verification

After all three pages are built:

- [ ] Open pages 16-17 as a facing spread — confirm they look like different brands, not twins
- [ ] Check that page 16 (centered) and page 17 (flush left) create visual contrast
- [ ] Verify page 27 feels structurally different from pages 16 and 17 (document vs. ad)
- [ ] Confirm rich black background consistency across all three pages (no visible color shift)
- [ ] Verify no element falls outside the 0.5" margin except intentional bleed and the stamp overlay on page 27
- [ ] Package proof PDF of all three pages for review

---

## Cross-References

| Topic | Document |
|-------|----------|
| InDesign master pages, paragraph styles, color swatches | `product/design/ELEVATE-MAGAZINE-INDESIGN-REFERENCE.md` |
| Original InDesign technical spec (paragraph style details) | `product/design/magazine-indesign-spec-v1.md` |
| Cubicle Shank spread (Format E reference, Before/After pattern) | `product/design/cubicle-shank-spread-layout-v1.md` |
| Magazine page structure and voice assignments | `product/copy/magazine-structure-v1.md` |
| Item physical specs (tattoos, stickers, empty recess) | `product/specs/item-specs-v7.md` |
| Research briefing (all page formats and challenges) | `product/design/MAGAZINE-RESEARCH-BRIEFING.md` |
| Brad's voice and comedy patterns | `product/copy/brad-copy-voice-guide.md` |
| World rules and shared vocabulary | `product/copy/world-rules.md` |

---

## Changelog

| Version | Date | Changes |
|---------|------|---------|
| v1 | May 25, 2026 | Initial format reference. Three sub-formats (wellness brand, transformation, evidence report). Dark background treatment with four depth techniques. Photography direction with Midjourney prompt approaches. Typography legibility on dark. Facing-page transition strategy. Comedy integration analysis. Production checklists for all three pages. |
