# Turf Tags Session Artifact 1: Context & Task Briefing

**Created:** June 25, 2026 | **Updated:** June 26, 2026
**Purpose:** Everything a new Claude session needs to create the Turf Tags surface map and image prompts from scratch. This is a self-contained briefing — all source material is referenced by file path (the session has full repo access).

---

## YOUR TASK

You are continuing work on the **Office Survival Kit** -- a comedy/gag gift product sold on Amazon. It's a briefcase containing 7 individually-packaged joke items themed around the concept that **office life IS prison** (not "like" prison -- IS prison. Never acknowledge the metaphor).

Your job is to produce **two deliverables** for the **Turf Tags** item (stickers):

### Deliverable 1: Surface Map
**File:** `product/copy/box-copy/turf-tags-surface-map.md`

A production-ready specification document containing:
- Physical specs (dimensions, material, format)
- Every surface, numbered element by element
- Exact locked copy in code blocks
- Design notes for visual treatment
- Decisions log (every locked decision with rationale)
- Any changes from the v01 box copy

### Deliverable 2: Image Prompts
**Include at the end of the surface map** (Cubicle Shank model) OR as a separate file `product/copy/box-copy/turf-tags-mockup-prompts.md` (Lifer Ink model).

Midjourney v6.1 prompts for generating visual mockups of each packaging surface. One prompt per surface (front, back, and optionally a combined/bird's-eye view).

### After creating the files:
1. Update `product/copy/box-copy/cross-item-status.md` -- change Turf Tags row to show Surface Map as current, update Image Prompts to "Yes"
2. Update `product/copy/box-copy/BOX-COPY-WORKFLOW.md` -- update the Source of Truth table to show Surface Map for Turf Tags
3. Archive the old box copy file: move `turf-tags-box-copy.md` to `product/copy/box-copy/archive/turf-tags-box-copy-ARCHIVED-2026-06-25.md`

---

## PROJECT WORLD RULES

### The Core Premise
The office IS a prison. Nobody in this world thinks that's a metaphor. Nobody winks. The moment anyone says "it's like a prison" the world breaks. Use prison/office vocabulary as the default language.

### Brad Sterling (Founder Character)
Brad Sterling is the founder of Elevate Co., the in-world brand. He has two modes:

**Mode 1 -- Product Copy Brad (competent):** His institutional-format humor (FDA labels, QC stickers, asset tags, compliance forms) is genuinely funny. Don't sabotage his product copy to make him look dumb.

**Mode 2 -- Personal Brand Brad (sincere, zero self-awareness):** Never winks. "Premium" is his comma. He trademarks everything. He is completely sincere about his delusions. He has never worked in an office -- he's adjacent to this world, fluent in its language but not a veteran.

**The gap between the two Brads is the joke.** Same person, competent product copy AND delusional self-promotion. The reader sees the contradiction. Brad never does.

### Comedy Mechanics (Hard Rules)
- Every piece of copy needs at least 2 of 6 humor elements: **Clever, Bizarre, Cruel, Naughty, Recognizable, Cute**. "Recognizable" should almost always be one of them.
- **Escalation pattern:** Line 1 plausible, Line 2 slight edge, Line 3 clearly a joke, Line 4 full absurd. Format never cracks.
- **Specificity over puns.** No puns. No exclamation points in product copy. No winking at the reader. No actual workplace advice.
- **The format is the straight man. The content is the comedian.** The box looks institutional and serious. The copy goes off the rails while the format stays perfectly composed.

### Kill On Sight
- Puns (Brad is dry)
- Exclamation points in product copy
- Winking at the reader / "get it?" / nudge-nudge
- Actual workplace advice
- Making Brad self-aware
- Generic insults (every insult needs absurd specificity)

### Recurring Characters
| Character | Rules | Target Density (full kit) |
|-----------|-------|--------------------------|
| **Kevin** | By first name, as if everyone knows him | 4-6 refs across all items |
| **Gary** | Stamps, badges, inspection marks ONLY -- never in sentences | 2-3 refs |
| **Diane** (HR) | Implied through policy language, handbook citations -- never named directly | 1-2 refs |

Turf Tags currently has 0 Kevin references. 1 could be added if natural.

---

## TURF TAGS ITEM CONTEXT

| Attribute | Value |
|-----------|-------|
| Product name | Turf Tags |
| Real item | Vinyl sticker sheet (6-10 individual stickers) |
| Brad's rebrand | Workspace Personalization Labels™ |
| Division | Bureau of Territorial Affairs |
| Brad's title | Chief Territorial Officer™ |
| Box format | Tuck-end box, ~5.0" x 3.5" x 0.5" |
| Box surfaces | 7 (Front, Back, Long Side A, Long Side B, Short Side A, Short Side B, Tuck Flap) |
| Background color | **Bold yellow** with black type (distinguishes from other item boxes which are dark/black) |
| Package type | Carded blister pack (box sits inside a clear blister on a printed card) |
| Blister depth | 0.15" (very shallow -- flat item) |
| Sheet size | ~6.5" x 4.5" |
| Sticker count | 6-10 per sheet (box currently claims "12 Adhesive Property Markers" -- reconcile) |
| Material | Vinyl preferred, paper acceptable |
| Kit position | Tray 1, Layer 4 |

### Assessment from working doc
> **"This is the strongest item box in the v01 batch."**
> Every surface is working. The front has a killer visual (the dog), a strong tagline with personality, and good fine print. The back has one of the best Brad quotes across all items. The application icons are the single funniest instruction surface in the entire kit. Both long sides deliver. Both short sides deliver. The tuck flap delivers.

### Key design decision: This box is YELLOW
Unlike the Cubicle Shank and Lifer Ink boxes (dark/matte black with red accents), the Turf Tags box uses a **bold yellow background with black type**. This is intentional -- it creates caution tape / warning sign / construction zone vocabulary that fits the territorial theme. The image prompts must reflect this yellow palette, not the dark palette used for other items.

---

## FORMAT TEMPLATES

### Surface Map Format
Use the **Cubicle Shank surface map** as the gold standard template. Key structural elements:
- Header with date, purpose, physical specs
- Each surface as a section with numbered elements
- Each element has: ID, exact copy in code block, design note, placement
- Decisions log table at the end
- Backup/reserve copy section (lines not placed but available)
- Image prompts section at the end

### Image Prompt Format Rules
(from `product/design/image-prompt-format-reference.md`)
- Single continuous sentence/paragraph -- no line breaks within the prompt
- Starts with "Show me a 3x3 grid of"
- Photorealistic style (product photography for packaging)
- Describe everything in rich detail woven into one flowing paragraph
- ALL text that appears on the product must be described inline with its typography (size, weight, style, color, position)
- End with `--no` block (exclusions), `--ar` (aspect ratio), `--s` (stylize value), `--v 6.1`
- No markdown formatting, no bullet lists, no section headers within the prompt itself

**IMPORTANT for Turf Tags prompts:** The visual palette is YELLOW background with BLACK type and RED accent elements -- NOT the dark/matte black palette used for Cubicle Shank and Lifer Ink. Adjust the `--no` exclusions accordingly.

---

## FILES TO READ BEFORE STARTING

Read these files from the project in this order:

1. **Comedy writing rules:** `.claude/rules/comedy-writing.md`
2. **Turf Tags box copy (current source of truth):** `product/copy/box-copy/turf-tags-box-copy.md`
3. **Turf Tags working doc (assessment):** `product/copy/box-copy/turf-tags-working-doc.md`
4. **Cubicle Shank surface map (format template):** `product/copy/box-copy/cubicle-shank-surface-map.md`
5. **Lifer Ink surface map (second format example):** `product/copy/box-copy/lifer-ink-surface-map.md`
6. **Lifer Ink mockup prompts (image prompt format example):** `product/copy/box-copy/lifer-ink-mockup-prompts.md`
7. **Image prompt format reference:** `product/design/image-prompt-format-reference.md`
8. **Cross-item status:** `product/copy/box-copy/cross-item-status.md`
9. **Workflow instructions:** `product/copy/box-copy/BOX-COPY-WORKFLOW.md`

### V01 mockup images (visual reference):
Located at `product/images/0 - Images/v01/Sticker - Turf Tags/`:
- `Item - Sticker - Turf Tags - Front - v01.png`
- `Item - Sticker - Turf Tags - Back - v01.png`
- `Item - Sticker - Turf Tags - Long Side A - v01.png`
- `Item - Sticker - Turf Tags - Long Side B - v01.png`
- `Item - Sticker - Turf Tags - Short Side A - v01.png`
- `Item - Sticker - Turf Tags - Short Side B - v01.png`
- `Item - Sticker - Turf Tags - Tuck Flap - v01.png`

Review these images to understand the current visual design before writing prompts.

---

## KNOWN ISSUES TO RESOLVE

1. **Sticker count mismatch:** Box copy says "CONTAINS: 12 ADHESIVE PROPERTY MARKERS" but packaging spec says 6-10 stickers. Either update the copy to match the actual count, or note the discrepancy for the product owner to resolve.

2. **Division name discrepancy:** The v01 mockup says "Territorial Compliance Division" but the box copy doc and working doc both say "Bureau of Territorial Affairs." The surface map should lock one. The working doc assessment preferred "Bureau of Territorial Affairs."

3. **Brad's quote -- two versions exist:**
   - V01 mockup: "I'm not territorial. I just know what's mine."
   - Box copy doc (v1 draft): "If it wasn't labeled, it wasn't yours. If it was labeled, prove it."
   - The working doc assessed the v01 quote as stronger. Surface map should lock one.

4. **Short Side B discrepancy:** The v01 mockup shows "NO TRESPASSING" with a diamond warning sign. The box copy doc (v1 draft) changed this to "9/5 STARS -- BRAD STERLING" with 8 star icons. The working doc assessed the v01 "NO TRESPASSING" as "perfect" and recommended no changes. Surface map should lock one.

5. **Tuck flap discrepancy:** V01 mockup says "START SMALL. THEN DON'T." Box copy doc changed it to "START WITH THE FRIDGE." Working doc assessed the v01 version as "very strong" with no changes needed, but the box copy doc version has a specific strategic rationale (the fridge is the highest-value territory). Surface map should lock one.

6. **Front face copy -- v01 vs box copy doc:** The box copy doc (v1) significantly expanded the front face with additional elements (deployment notice, legal footnotes, evidence line, product code). The v01 mockup was cleaner. Decide whether the expanded version adds value or clutters.

---

## QUALITY CHECKLIST (Run Before Marking Complete)

- [ ] Every surface from the box copy doc is represented in the surface map
- [ ] All copy is in code blocks (exact text, no paraphrasing)
- [ ] Design notes explain visual treatment for each element
- [ ] Decisions log documents every choice made (especially the discrepancies above)
- [ ] Image prompts use the correct format (single paragraph, --no block, --ar, --s, --v 6.1)
- [ ] Image prompts describe YELLOW background with BLACK type (not dark/black palette)
- [ ] All text content from the surface map appears in the image prompts
- [ ] cross-item-status.md is updated
- [ ] BOX-COPY-WORKFLOW.md source of truth table is updated
- [ ] Old box copy file is archived
- [ ] Comedy writing checklist passes (at least 2 humor elements per piece, no puns, no exclamation points, escalation pattern followed, format stays institutional)

---

*End of briefing. All source material is available via the file paths listed above.*
