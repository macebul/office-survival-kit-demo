# Image Prompt Specification — Photorealistic Direction

**Version:** 1.0
**Created:** May 15, 2026
**Companion to:** `art-direction-brief-v1.md` (read that first)
**Generator:** Nano Banana 2 via custom software
**Status:** Active draft — locked format TBD after first test batch confirms rendering quality

---

## 1. Prompt Architecture

Every image prompt for the booklet follows this structure:

```
[GRID PREFIX] [SCENE DESCRIPTION] [CHARACTER DESCRIPTIONS] [ENVIRONMENT] [ABSURDITY LAYERS] [STYLE ANCHOR] [NEGATIVE PROMPTS] [TRAILING PARAMS]
```

Each section is detailed below.

---

## 2. Grid Prefix

All prompts begin with the grid instruction for batch generation:

```
Show me a 3x3 grid of
```

This generates 9 variations for selection. After a winner is locked, the grid prefix can be removed for single-tile regeneration or upscaling.

---

## 3. Style Anchor (LOCKED)

The style anchor replaces the mid-century modern anchor from the previous direction. It appears in every prompt, positioned after the scene description and before negative prompts.

**Old anchor (RETIRED):**
```
stylized cartoon illustration, mid-century modern aesthetic, ALL characters have
geometric angular faces with pointed triangular noses and defined jawlines...
```

**New anchor:**
```
photorealistic photography, corporate stock photo aesthetic, natural office
lighting with overhead fluorescent panels, photographically accurate skin tones
and textures, real-world office environment with standard commercial furniture
and drop ceiling, every character has natural human proportions and realistic
facial features with natural imperfections, the scene reads as a genuine
photograph taken in a real corporate office, editorial photography quality,
sharp focus on primary subject, natural depth of field
```

**Brad cinematic variant** (use ONLY for Brad hero moments, max 2-3 per booklet):
```
photorealistic photography, cinematic film still quality, warm directional key
light with subtle fill creating gentle depth and dimension, shallow depth of
field with soft background bokeh, slightly warm color temperature suggesting
golden hour office light, photographically accurate skin tones and textures,
real-world office environment, every character has natural human proportions and
realistic facial features with natural imperfections, the scene reads as a
still from a prestige workplace drama, editorial photography quality
```

---

## 4. Negative Prompts (LOCKED)

The negative prompt block replaces the mid-century "red nose" negatives. It addresses photorealistic-specific failure modes.

**Old negatives (RETIRED):**
```
--no red nose, flushed face, rosy cheeks, bulbous nose, round nose, round face,
Rudolph nose... realistic, caricature, political cartoon...
```

**New negatives:**
```
--no cartoon, illustration, drawing, painting, sketch, anime, manga, chibi,
stylized, flat color, cel shading, vector art, mid-century modern, geometric
faces, angular faces, pointed noses, exaggerated proportions, caricature,
waxy skin, plastic skin, airbrushed skin, unnaturally smooth skin,
symmetrical face, perfect features, model-beautiful, glamour lighting,
fashion photography, Instagram filter, color grading, teal and orange,
desaturated, oversaturated, HDR, lens flare, vignette, film grain for style,
collage, composite, split screen, floating elements, text overlay, watermark,
stock photo watermark, Getty Images watermark
```

**Additional per-prompt negatives** can be appended for scene-specific issues (e.g., `no weapons` for scenes where the prison metaphor shouldn't be interpreted literally).

---

## 5. Trailing Parameters

```
--ar 1:1 --s 250 --v 6.1
```

- `--ar 1:1` — Default square aspect ratio for vignettes. Override to `--ar 5:4`, `--ar 4:5`, `--ar 16:9`, or `--ar 3:4` when the layout requires it.
- `--s 250` — Stylization parameter. Kept from previous direction; may need adjustment for photorealism. **Test in first batch.**
- `--v 6.1` — Model version. Update if Nano Banana 2 introduces a newer version.

**Note:** `--s 250` was calibrated for mid-century illustration. Photorealistic output may benefit from a lower stylization value (100-150). Run A/B test in first batch: same prompt at `--s 250` vs `--s 150` vs `--s 100`.

---

## 6. Scene Description Template

The scene description is the largest section of each prompt. It follows this order:

### 6.1 Establishing Frame

Start with the camera position and scale:

```
a [shot type] of [primary subject/action] in [location]
```

**Shot types:**
- `close-up` — face/hands detail, single subject
- `medium shot waist-up` — most common for vignettes, 1-2 characters
- `medium-wide shot` — shows full body + environment context, 2-4 characters
- `wide shot` — establishing shots, group scenes, environmental focus
- `overhead shot` — desk/table surfaces, evidence layouts, form close-ups

### 6.2 Primary Subject & Action

Describe what the viewer sees first. This is the Layer 1 (plausible) + Layer 2 (something's off) combined:

```
a [demographic] [wardrobe] [action/pose], [expression], [the thing that's off]
```

**Example:**
```
a woman in her thirties in a charcoal blazer and cream blouse standing at a
whiteboard mid-presentation, her expression professional and engaged, the
whiteboard behind her showing a detailed flow chart titled ESCAPE ROUTES with
color-coded arrows pointing to labeled exits including STAIRWELL B and
LOADING DOCK and FAKE EMERGENCY
```

### 6.3 Character Descriptions

For each character in the scene:

```
[demographic descriptor] with [skin tone description] and [hair description],
wearing [specific wardrobe], [pose/action], [expression]
```

**Skin tone approach (NEW):**
Unlike the mid-century direction which used named skin-tone anchors to control nose color, the photorealistic direction uses natural descriptors:
- Describe skin tone naturally: "light skin," "dark brown skin," "olive skin," "medium brown skin," "warm tan skin"
- Do NOT specify hex colors or named paint swatches
- Do NOT describe facial geometry (no "angular face," "defined jawline" — those were mid-century DNA)
- Let the generator render natural facial features with natural variation

**Expression approach (NEW):**
The default expression for anyone who is not Brad is **neutral-to-slightly-tired.**
- "neutral expression," "slightly bored expression," "completely unbothered expression"
- "the expression of someone who has seen this exact thing happen three times this week"
- NEVER: "shocked," "amazed," "laughing," "amused," "horrified" (these break the cardinal rule)
- The only character who gets a broader expression range is Brad (confident, earnest, presenting, focused)

### 6.4 Environment Details

Describe the office environment using the palette from the art direction brief:

```
[office location type] with [lighting], [specific environmental details],
[background elements that sell the setting]
```

**Always include:**
- Lighting source (overhead fluorescent panels, window light, desk lamp)
- At least one grounding detail (drop ceiling tiles, cubicle partition, commercial carpet)
- At least one mundane office prop (coffee cup, badge on lanyard, manila folder)

### 6.5 Absurdity Layers

**Layer 2 (primary joke)** should be woven into the scene description naturally, not called out as separate.

**Layer 3 (background jokes)** get their own section after the main scene:

```
visible in the background: [detail 1], [detail 2], [detail 3]
```

**Example:**
```
visible in the background: a motivational poster on the wall reading
TEAMWORK above a sunset with small text reading IT TAKES TWO TO MOVE A BODY,
a desk nameplate in the next cubicle reading CELL 14B, a whiteboard with
a tally chart labeled DAYS WITHOUT INCIDENT with the number crossed out and
replaced with zero
```

**Text rendering note:** Keep background text SHORT (2-5 words, all caps). Longer text should be flagged for InDesign post-production.

---

## 7. Prompt Assembly Example (Template)

```
Show me a 3x3 grid of a [shot type] of [primary subject/action] in [office
location], [character 1 full description], [character 2 full description if
present], [environment and lighting details], visible in the background:
[Layer 3 detail 1], [Layer 3 detail 2], [Layer 3 detail 3],
photorealistic photography, corporate stock photo aesthetic, natural office
lighting with overhead fluorescent panels, photographically accurate skin
tones and textures, real-world office environment with standard commercial
furniture and drop ceiling, every character has natural human proportions
and realistic facial features with natural imperfections, the scene reads
as a genuine photograph taken in a real corporate office, editorial
photography quality, sharp focus on primary subject, natural depth of field
--no cartoon, illustration, drawing, painting, sketch, anime, manga, chibi,
stylized, flat color, cel shading, vector art, mid-century modern, geometric
faces, angular faces, pointed noses, exaggerated proportions, caricature,
waxy skin, plastic skin, airbrushed skin, unnaturally smooth skin,
symmetrical face, perfect features, model-beautiful, glamour lighting,
fashion photography, Instagram filter, color grading, teal and orange,
desaturated, oversaturated, HDR, lens flare, vignette, film grain for style,
collage, composite, split screen, floating elements, text overlay, watermark,
stock photo watermark, Getty Images watermark
--ar 1:1 --s 250 --v 6.1
```

---

## 8. Object-Only Prompts (Tactical Diagrams)

Pages 8-9 include tactical equipment diagrams (coffee cup, headphones, laptop, pen) that are object-only — no characters.

**For the photorealistic direction, these have two options:**

### Option A: Photorealistic Product Shot
The object is photographed like a product catalog shot — clean white surface, soft studio lighting, the object centered and presented with technical diagram labels overlaid.

```
photorealistic product photography, clean white surface, soft diffused studio
lighting, the object is [specific description], three thin technical diagram
lines extending from different parts of the object to small bold text labels,
[label 1], [label 2], [label 3], clinical and precise, generous negative space,
the object is presented like a military field manual equipment diagram
```

### Option B: In-Situ Documentary
The object is photographed in its natural office habitat — on a desk, on a counter, in a hand — but with the diagram labels overlaid as if someone annotated a crime scene photo.

**Recommendation:** Option A for consistency with the existing spread layout. Option B is more interesting but harder to execute at 2" x 2".

---

## 9. Post-Production Pipeline

Every image goes through this pipeline after generation:

1. **Selection** — Pick winner from 3x3 grid based on comedy test (see art direction brief section 9)
2. **Text verification** — Check all in-image text for legibility and accuracy
3. **Text patching** — Any garbled, misspelled, or missing text gets fixed in InDesign
4. **Background joke audit** — Verify Layer 3 details rendered. If critical jokes didn't render, flag for re-generation or InDesign overlay
5. **Color check** — Ensure image reads well at booklet print scale and CMYK conversion
6. **Scale test** — Print at actual size (2" x 2") and verify primary joke still reads

---

## 10. Transition Plan

The following existing prompts need to be rewritten to the photorealistic format:

| Page | Existing Prompt | Status |
|------|----------------|--------|
| 2 — Arrival | Prompts 2A, 2B, 2C (editorial illustration + Nano Banana mid-century) | Rewrite needed |
| 3 — Your Cell | Prompts 3A, 3B (Nano Banana mid-century) | Rewrite needed |
| 6-7 — Cubicle Shank | Prompts 6A-6D (Nano Banana mid-century) | Rewrite needed |
| 8-9 — The Loadout | Prompts 8A-8C, 9A-9D (Nano Banana mid-century) | Rewrite needed |
| All remaining pages | Not yet written | Write fresh in photorealistic format |

**Priority for first test batch:** Rewrite 1-2 prompts from the Cubicle Shank spread (pages 6-7) as a proof of concept. These have the clearest comedy beats and the widest range of absurdity (Mission Impossible rappel, hazmat response, QVC infomercial, Senate hearing). If the photorealistic direction works here, it works everywhere.

---

## 11. Open Questions

These need to be resolved through test batches:

1. **Stylization parameter:** Does `--s 250` work for photorealism or does it need to drop to 100-150?
2. **Grid vs single:** Does the 3x3 grid produce sufficient quality for photorealistic output, or should we move to single-tile generation with more prompt iterations?
3. **Character consistency:** How reliable is Nano Banana 2 at maintaining a consistent character look across multiple prompts? This determines whether Brad needs a reference image approach or just a text description.
4. **Text rendering at photorealistic quality:** The mid-century direction proved short all-caps text renders reliably. Does this hold in photorealistic mode?
5. **Background detail density:** How many Layer 3 details can be packed into a single prompt before the generator starts dropping or garbling them?
