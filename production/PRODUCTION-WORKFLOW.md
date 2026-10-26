# Item Box Production Workflow

**Created:** June 4, 2026
**Purpose:** Standard process for taking each item box from copy to print-ready files.
**Applies to:** All 6 item boxes (Cubicle Shank, Lifer Ink, Turf Tags, Cell Talk, Rap Sheets, Sweet Nothings)

---

## The Pipeline

Each item box goes through these 4 stages in order. Complete each stage before moving to the next.

### Stage 1: Copy

Write all text for every box surface. One markdown file per item box in `product/copy/box-copy/`.

**Deliverable:** `[item-name]-box-copy.md`

**Contents:**
- Every surface (Front, Back, Top edge, Bottom edge, Short side A, Short side B, Tuck flap)
- Exact copy for each element on each surface
- Brad's division name for this product
- Naming hierarchy (prison term dominant, Brad rebrand subordinate)
- Fine print, footnotes, disclaimers
- SKU number
- Design notes explaining the joke/tone for each element

**Voice rules:**
- Prison term = hero name (large, dominant)
- Brad's corporate rebrand = subtitle (smaller, subordinate)
- Mode 1 Brad voice on all box copy (institutional, dry, format-as-straight-man)
- The format is the joke — play it completely straight

**Reference docs:**
- Design brief: `product/vibe-design/briefs/[item-name]-box.md`
- Card content (if applicable): `product/copy/card-decks/[deck-name].md`
- Item specs: `product/specs/item-specs-v7.md`
- Copy doc: `product/copy/copy-doc-v7.md`

---

### Stage 2: Image Prompts

Write Midjourney prompts for every box surface. One markdown file per item box in `product/image-prompts/`.

**Deliverable:** `[item-name]-image-prompts.md`

**Contents:**
- One prompt per surface (Front, Back, Top edge, Bottom edge, Short side A, Short side B, Tuck flap)
- One hero shot prompt (3/4 angle, editorial product photography)
- Each prompt includes ALL copy text from Stage 1 embedded in the prompt

**Prompt format (established pattern from Lifer Ink):**
```
Product photography of [surface description], [dimensions], [box type],
[aesthetic/mood], [material/texture], [all visual elements described in
reading order from top to bottom], [typography specs], [lighting/angle],
[physical qualities] --ar [ratio]
```

**Aspect ratios by surface:**
- Front face: `--ar 10:7` (landscape, main panel)
- Back face: `--ar 10:7` (landscape, main panel)
- Top/bottom long edges: `--ar 10:1` (extreme landscape strip)
- Short side edges: `--ar 7:1` (landscape strip)
- Tuck flap: `--ar 7:2` (small landscape)
- Hero shot: `--ar 3:2` (editorial product photo)

**Style anchors:**
- All prompts: "real printed packaging on cardstock not a digital mockup visible ink impression paper texture"
- Hero shots add: "professional product photography editorial quality magazine-ready"
- Material and color palette must match the design brief for each item

**No negative prompts needed** for product/packaging shots (those are for character/scene images only).

---

### Stage 3: Image Generation

Generate all images in Midjourney using the Stage 2 prompts.

**Process:**
1. Run each prompt in Midjourney
2. Select the best result from the grid
3. Upscale the selected image
4. Save to `product/images/Items/[Item Name]/Full/` using naming convention:
   - `[Item] - Front.png`
   - `[Item] - Back.png`
   - `[Item] - Top.png`
   - `[Item] - Bottom.png`
   - `[Item] - Left.png` (Short side A)
   - `[Item] - Right.png` (Short side B)
   - `[Item] - Tuck Flap.png`
   - `[Item] - Hero.png`

**Quality check per image:**
- Text is legible (Midjourney often garbles text — flag for Illustrator fix)
- Color palette matches design brief
- Material texture reads as printed cardstock
- Layout matches the copy document surface layout

---

### Stage 4: Illustrator Assembly

Build the final print-ready box in Adobe Illustrator using the die-line template.

**Process:**
1. Open die-line template from `production/templates/[item]-box-template.svg` (or `.pdf`)
2. Run the Illustrator `.jsx` script (generated per-item) — this creates all text frames with exact copy, fonts, sizes, and positioning on each panel
3. Place hero images and surface images as reference layers
4. Adjust typography: kerning, tracking, alignment, visual hierarchy
5. Add visual elements that scripts can't create: distressed stamps, seals, texture overlays, wax seals, icons
6. Set up bleed, trim marks, and safe zones per die-line
7. Export as press-ready PDF (CMYK, 300dpi minimum, fonts outlined)

**What the script handles:**
- All text frames with content from Stage 1
- Font family, size, weight, and color assignments
- Positioning on correct panels (mapped to die-line coordinates)
- Layer organization (one layer per surface panel)
- Paragraph styles and character styles

**What you handle manually:**
- Visual polish (distressed textures, stamp effects, foil treatments)
- Image placement and masking
- Color proofing (CMYK accuracy)
- Icon/symbol design
- Fine typography adjustments
- Final bleed/trim verification

---

## File Location Summary

| Stage | Output | Location |
|-------|--------|----------|
| 1. Copy | Box copy documents | `product/copy/box-copy/` |
| 2. Image Prompts | Midjourney prompt files | `product/image-prompts/` |
| 3. Images | Generated surface images | `product/images/Items/[Item Name]/Full/` |
| 4. Illustrator | Print-ready files | `production/final/` (TBD) |

**Supporting files:**
- Die-lines: `production/dielines/`
- Templates: `production/templates/`
- Design briefs: `product/vibe-design/briefs/`
- Card content: `product/copy/card-decks/`
- Illustrator scripts: `production/scripts/illustrator/`

---

## Item Status Tracker

| Item | Stage 1 (Copy) | Stage 2 (Prompts) | Stage 3 (Images) | Stage 4 (Illustrator) |
|------|----------------|-------------------|-------------------|----------------------|
| Cubicle Shank | Draft exists | Not started | 20 renders exist | Not started |
| Lifer Ink | Draft exists | COMPLETE | 15 renders exist | Not started |
| Turf Tags | 90% done | Not started | 15 renders exist | Not started |
| Cell Talk | **COMPLETE** (v1) | **COMPLETE** (v1) | Hero only | Not started |
| Rap Sheets | **COMPLETE** (v1) | **COMPLETE** (v1) | Hero only | Not started |
| Sweet Nothings | **COMPLETE** (v1) | **COMPLETE** (v1) | Hero only | Not started |

---

## Production Order

1. **Cell Talk** — Most complete brief, locked card content, biggest gap (no box copy)
2. **Rap Sheets** — Same situation as Cell Talk
3. **Sweet Nothings** — Same situation as Cell Talk
4. **Turf Tags** — Minor refinement needed (sticker count, density audit)
5. **Lifer Ink** — Front face revision, tattoo selection
6. **Cubicle Shank** — Finalization pass on existing drafts
