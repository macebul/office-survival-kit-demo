# Universal Wireframe Session Prompt Template

**Purpose:** Copy this template, fill in the `[PLACEHOLDERS]`, and paste it as the opening message in a new AI session to generate the complete wireframe package for any item in the kit.

**Deliverables produced:** 4 files per item (see bottom of template).

---

## QUICK-REFERENCE: All Items

Use this table to fill in the placeholders. Cubicle Shank is already done — the remaining 7 items are listed here.

| # | Product Name | Division | Brad's Rebrand | Flap Holds | Item Dimensions | Surface Map | Design Brief |
|---|---|---|---|---|---|---|---|
| 2 | Lifer Ink | Bureau of Permanent Records | Motivational Body Art Collection™ | Tuck-end box (~5.0" × 3.5" × 0.5") containing tattoo sheets + achievement card | 6.5" × 4.5" sheet inside box | `product/copy/box-copy/lifer-ink-surface-map.md` | `product/vibe-design/briefs/lifer-ink-box.md` |
| 3 | Turf Tags | Elevate Co. | Workspace Personalization Labels™ | Sticker sheet (6.5" × 4.5") directly on card, or tuck-end box | 6.5" × 4.5" sheet | `product/copy/box-copy/turf-tags-surface-map.md` | `product/vibe-design/briefs/turf-tags-box.md` |
| 4 | Cell Talk | Elevate Co. | Self-Actualization Protocol™ Cards | Tuck-end card box (3.7" × 2.7" × 0.7") with ~15 affirmation cards | 3.7" × 2.7" × 0.7" box | None yet — create from brief | `product/vibe-design/briefs/cell-talk-box.md` |
| 5 | Rap Sheets | Elevate Co. | Interpersonal Feedback Delivery System™ | Tuck-end card box (3.7" × 2.7" × 0.7") with ~15 complaint cards | 3.7" × 2.7" × 0.7" box | None yet — create from brief | `product/vibe-design/briefs/rap-sheets-box.md` |
| 6 | Sweet Nothings | Elevate Co. | Ambient Communication Cards™ | Tuck-end card box (3.7" × 2.7" × 0.7") with ~15 passive-aggressive cards | 3.7" × 2.7" × 0.7" box | None yet — create from brief | `product/vibe-design/briefs/sweet-nothings-box.md` |
| 7 | Mug Shot | *(none — name is the joke)* | *(no Brad rebrand)* | Mug box (5.0" × 4.0" × 4.0") — this is the LARGEST item | 5.0" × 4.0" × 4.0" box | `product/copy/box-copy/mug-shot-surface-map.md` | *(no dedicated brief yet)* |
| 8 | Contraband | *(confiscation notice)* | *(not a product)* | NOTHING — empty. The flap folds over an empty space. That IS the joke. | Empty (stapler-shaped outline only) | None yet — create from brief | *(no dedicated brief yet)* |

**Notes:**
- Lifer Ink division is "Bureau of Permanent Records" (not "Elevate Co." — it has its own sub-brand identity)
- Cubicle Shank division is "O3 — Office Offense Outfitters" (already done)
- Items 4, 5, 6 (Cell Talk, Rap Sheets, Sweet Nothings) share identical card box dimensions
- Mug Shot is the only item that doesn't use the standard flap-holds-item approach — the mug box is very large and may require layout adjustments
- Contraband is the gag item — empty space where a stapler should be, card copy reads like a confiscation notice

---

## THE TEMPLATE

Copy everything below this line, replace all `[PLACEHOLDERS]`, and paste into a new session.

---

```
I need you to create a complete wireframe package for the [PRODUCT_NAME] packaging card. This is part of the Office Survival Kit — a comedy gift product by WITTY YETI.

## WHAT WE'RE BUILDING

A fold-over flap packaging card for [PRODUCT_NAME]. The card is a flat printed paperboard card that holds the physical product ([ITEM_DESCRIPTION]) against its face using a fold-over flap at the bottom edge. It is NOT a blister pack. There is no plastic anywhere.

## PHYSICAL FORMAT (same for every item in the kit)

- Card dimensions: 13.25" wide × 10.75" tall
- Shape: L-shaped — a 4.75" × 3.75" rectangular notch is cut from the upper-left corner (on the front face; upper-right when viewing the back)
- Material: 18pt matte black paperboard, printed both sides
- Fold-over flap: 6.5" wide × 1.5" tall, extends from the card's bottom edge. Folds UP over the item to hold it against the card face. The flap has two printable surfaces: exterior (visible when closed) and interior (revealed when flap is opened).
- Hanging hole: 0.25" diameter, centered on top edge, 0.375" from edge

## WHAT THE FLAP HOLDS

[FLAP_DESCRIPTION — e.g., "A tuck-end box (~5.0" × 3.5" × 0.5") containing temporary tattoo sheets and an achievement card. The box sits flat on the card face and the flap folds up over it to hold it in place." or "A tuck-end card box (3.7" × 2.7" × 0.7") containing a deck of ~15 affirmation cards." or "NOTHING — the flap folds over empty space. There is a printed chalk outline of a stapler where the item should be. The absence IS the joke."]

## ITEM DIMENSIONS ON CARD

[ITEM_DIMS — e.g., "The tuck-end box footprint on the card is approximately 5.0" × 3.5", positioned in the lower portion of the card above the flap fold line." or "The card box footprint is 3.7" × 2.7", centered in the lower portion above the flap." or "Empty stapler outline approximately 4.0" × 2.0"."]

## BRAND & DIVISION

- Brand: WITTY YETI (this goes in the brand logo position on every card)
- Division: [DIVISION — e.g., "Bureau of Permanent Records" or "Elevate Co." or "O3 — Office Offense Outfitters"]
- Brad's rebrand name: [BRAD_REBRAND — e.g., "Motivational Body Art Collection™" or "Self-Actualization Protocol™ Cards"]
- Tone: Sardonic, deadpan, institutional. The office IS a prison — never acknowledge it as a metaphor. No puns. No exclamation points.

## COPY SOURCE

Read the following files to get all the copy for this item:

1. **Surface map** (primary copy source — all locked text with surface placement): `[SURFACE_MAP_PATH]`
2. **Design brief** (visual direction, character details, design notes): `[BRIEF_PATH]`

[IF NO SURFACE MAP: "There is no surface map yet for this item. Read the design brief and create a surface map as part of this session, following the format used in `product/copy/box-copy/cubicle-shank-surface-map.md`. Map all copy from the brief onto the card front and card back surfaces."]

**IMPORTANT:** The surface map was written when these items were tuck-end boxes or blister packs. The physical format has changed to fold-over flap cards. You must reorganize ALL copy from the surface map onto just TWO surfaces:
- CARD FRONT (the display face — item visible, flap closed)
- CARD BACK (the flip side — full print surface, no item)

Plus the two flap surfaces:
- FLAP EXTERIOR (visible when flap is closed over item)
- FLAP INTERIOR (hidden, revealed when flap is lifted)

And one hidden zone:
- HIDDEN COPY (printed on card face under where the item sits — revealed when item is removed)

Every piece of locked copy from the surface map must land on one of these five zones. Nothing gets cut — it just gets redistributed to fit the card format.

## REFERENCE: HOW CUBICLE SHANK WAS DONE

The Cubicle Shank card is the template for all other items. Reference these completed files to match the format exactly:

1. **Copy wireframe script:** `product/vibe-design/wireframes/cubicle-shank-wireframe.jsx` — ExtendScript that draws the card with all copy text visible in each block
2. **Reference wireframe script:** `product/vibe-design/wireframes/cubicle-shank-reference.jsx` — ExtendScript that draws the same layout but with ONLY large block ID labels (E1, B4, etc.) — used for AI image generator screenshots
3. **Copy reference sheet:** `product/vibe-design/wireframes/cubicle-shank-copy-reference.md` — Maps each block ID to its exact copy text, with style notes
4. **Image generation prompts:** `product/vibe-design/wireframes/cubicle-shank-image-prompts.md` — 2-step prompt workflow (base recreation + theme application)

Read ALL FOUR of these files before starting. Your output must match their structure and conventions exactly.

## WHAT TO PRODUCE (4 deliverables)

### Deliverable 1: `[ITEM_SLUG]-wireframe.jsx`
Adobe Illustrator ExtendScript. Two artboards (FRONT and BACK). Uses `drawBlock()` function to create rectangular zones with a small ID tag in the corner and full copy text inside each block. The layout should reflect the actual content density — blocks sized to fit their copy, not uniform. Include the L-shaped card outline, the notch, the fold-over flap, and the item position.

### Deliverable 2: `[ITEM_SLUG]-reference.jsx`
Same layout as Deliverable 1, but uses `drawZone()` function instead — each block shows ONLY a large centered ID label (like "E1" or "B4") with no copy text. This is the version that gets screenshotted and sent to the AI image generator.

### Deliverable 3: `[ITEM_SLUG]-copy-reference.md`
Markdown file mapping every block ID to its exact copy. Format:

```
### E1 -- Block Description
\```
Exact copy text here
\```
**Notes:** Style/placement notes
```

Include a BLOCK MAP SUMMARY table at the end listing every block, its surface (front/back), and a short description.

### Deliverable 4: `[ITEM_SLUG]-image-prompts.md`
Two-step image generation prompt file:

**STEP 1 — BASE RECREATION:** Two short prompts (front and back) that say "recreate this reference image exactly as shown" with specifics about the card shape, notch position, block layout, item shape, and flap. No styling. Include Midjourney flags: `--ar 5:4 --s 250 --v 6.1`

**STEP 2 — THEME PROMPTS:** Six theme variations (short aesthetic-only prompts). The six themes are:
1. Red Accents (oxblood/burgundy borders, institutional)
2. Gold Foil Accents (premium, knife-set feel)
3. Minimal White (monochrome, military spec sheet)
4. Gunmetal & Red (carbon fiber, defense contractor)
5. Spot UV & Emboss (tactile matte/gloss contrast)
6. Dark Red & Cream (vintage ammunition/apothecary)

Each theme prompt is a continuous paragraph in Midjourney format with `--no` negatives and `--ar 5:4 --s 250 --v 6.1`.

Include a WORKFLOW section and ASPECT RATIO note.

## BLOCK NAMING CONVENTION

- Front blocks: E1, E2, E3... (E = Element)
- Back blocks: B1, B2, B3... (B = Back)
- Flap blocks: FLAP EXT, FLAP INT
- Hidden copy: Use the next available E-number and note it as "Hidden Copy Under [Item]"
- Blocks moved from back to front for balance: Keep their original B-number (e.g., B13, B14)

## TYPOGRAPHY STYLE REFERENCE

Apply these styles to the copy reference sheet:

| Block Type | Style |
|---|---|
| Brand logo (E1) | Small caps, wide tracking, white |
| Division name | Small caps, institutional, white |
| Division tagline/slogan | Smaller italic or parenthetical, white |
| Product name (hero) | LARGEST text on card. Bold condensed uppercase, white. Reads from several feet away. |
| Subtitle | Medium, directly below product name |
| Taglines | Italic or accent color (red in themed versions) |
| Seal/badge | Ornate oval/shield, ribbon, institutional parody |
| Feature bullets | Clean body copy, white on dark |
| Fine print | 7pt, institutional |
| Hidden copy | Small, orange (#e85d04) — reward/discovery feel |
| Reviews/quotes | Italic, with attribution |
| Warnings/cautions | Institutional label format |
| Chart/table | Grid format, clean headers |

**General rules:**
- All text is white on matte black (or cream on black for vintage themes)
- Condensed sans-serif is the primary typeface feel
- Institutional, deadpan, bureaucratic formatting
- No exclamation points
- Brad Sterling's copy is competent and funny — never sabotage it
- Format stays institutional even as content goes absurd

## COORDINATE SYSTEM

Illustrator uses points (1 inch = 72 points). Y-axis is inverted (positive Y = up). The card origin (0,0) is the bottom-left corner of the artboard. Use the same coordinate system and helper functions as the Cubicle Shank scripts.

## OUTPUT

Save all 4 files to: `product/vibe-design/wireframes/`

File names:
1. `[ITEM_SLUG]-wireframe.jsx`
2. `[ITEM_SLUG]-reference.jsx`
3. `[ITEM_SLUG]-copy-reference.md`
4. `[ITEM_SLUG]-image-prompts.md`
```

---

## ITEM SLUGS

Use these file-name slugs for each item:

| Item | Slug |
|---|---|
| Cubicle Shank | `cubicle-shank` (DONE) |
| Lifer Ink | `lifer-ink` |
| Turf Tags | `turf-tags` |
| Cell Talk | `cell-talk` |
| Rap Sheets | `rap-sheets` |
| Sweet Nothings | `sweet-nothings` |
| Mug Shot | `mug-shot` |
| Contraband | `contraband` |

---

## FILL-IN EXAMPLES

### Example: Lifer Ink (filled in)

| Placeholder | Value |
|---|---|
| `[PRODUCT_NAME]` | Lifer Ink |
| `[ITEM_DESCRIPTION]` | temporary tattoo sheets in a tuck-end box |
| `[FLAP_DESCRIPTION]` | A tuck-end box (~5.0" × 3.5" × 0.5") containing temporary tattoo sheets and an achievement card. The box sits flat on the card face in the lower portion, and the flap folds up over it to hold it in place. The tuck-end box itself is a separate design task — this wireframe covers only the card it sits on. |
| `[ITEM_DIMS]` | The tuck-end box footprint on the card is approximately 5.0" × 3.5", positioned in the lower portion of the card above the flap fold line. |
| `[DIVISION]` | Bureau of Permanent Records |
| `[BRAD_REBRAND]` | Motivational Body Art Collection™ |
| `[SURFACE_MAP_PATH]` | `product/copy/box-copy/lifer-ink-surface-map.md` |
| `[BRIEF_PATH]` | `product/vibe-design/briefs/lifer-ink-box.md` |
| `[ITEM_SLUG]` | `lifer-ink` |

### Example: Cell Talk (no surface map)

| Placeholder | Value |
|---|---|
| `[PRODUCT_NAME]` | Cell Talk |
| `[ITEM_DESCRIPTION]` | deck of ~15 humorous affirmation cards in a tuck-end box |
| `[FLAP_DESCRIPTION]` | A tuck-end card box (3.7" × 2.7" × 0.7") containing a deck of ~15 affirmation cards. The box sits on the card face and the flap folds up over it. The tuck-end box is a separate design task. |
| `[ITEM_DIMS]` | The card box footprint is 3.7" × 2.7", centered in the lower portion above the flap fold line. |
| `[DIVISION]` | Elevate Co. |
| `[BRAD_REBRAND]` | Self-Actualization Protocol™ Cards |
| `[SURFACE_MAP_PATH]` | *(none — use the [IF NO SURFACE MAP] paragraph instead)* |
| `[BRIEF_PATH]` | `product/vibe-design/briefs/cell-talk-box.md` |
| `[ITEM_SLUG]` | `cell-talk` |

### Example: Contraband (empty gag item)

| Placeholder | Value |
|---|---|
| `[PRODUCT_NAME]` | Contraband |
| `[ITEM_DESCRIPTION]` | nothing — this is an intentionally empty package |
| `[FLAP_DESCRIPTION]` | NOTHING — the flap folds over empty space. There is a printed chalk outline of a stapler where the item should be, as if the item was confiscated. The absence IS the joke. The card reads like a confiscation notice or evidence tag. |
| `[ITEM_DIMS]` | Empty stapler-shaped chalk outline, approximately 4.0" × 2.0", centered in the lower portion above the flap fold line. |
| `[DIVISION]` | *(none — this is a confiscation notice, not a branded product)* |
| `[BRAD_REBRAND]` | *(none — not a product)* |
| `[SURFACE_MAP_PATH]` | *(none — create from brief or from scratch)* |
| `[BRIEF_PATH]` | *(none — design from the product concept: empty blister = confiscation gag. Reference packaging-spec-v11.md Section 5, Item 8.)* |
| `[ITEM_SLUG]` | `contraband` |

---

*End of template. Created July 6, 2026.*
