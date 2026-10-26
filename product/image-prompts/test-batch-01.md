# Test Batch 01 — Photorealistic Direction Validation

**Purpose:** First test of the new photorealistic art direction. Run these through Nano Banana 2 and evaluate against the criteria at the bottom.
**Date:** May 15, 2026
**Reference:** `art-direction-brief-v1.md`, `image-prompt-spec-v1.md`

---

## Test Prompt A: "The Walls Talk" (Motivational Poster Swap)

**Scene:** A man in a light blue dress shirt is hanging a framed motivational poster on an office wall. The poster reads "SYNERGY" over a sunset landscape, with the subtext "Two people can move a body faster." Below the new poster, partially visible and being covered up, is a classic "HANG IN THERE" cat poster. The man's expression is completely neutral — he's just doing a task.

**Comedy layers:**
- Layer 1 (plausible): Guy hanging a motivational poster in an office. Normal.
- Layer 2 (something's off): The poster subtext says "Two people can move a body faster." Visible within 3 seconds.
- Layer 3 (background): The "HANG IN THERE" cat poster being replaced. Additional office wall details.

**What this tests:**
- Photorealistic rendering of a single character in an office environment
- Text rendering within a framed poster (critical — the joke depends on readable text)
- Natural office lighting and environment (wall color, fluorescent light, poster frames)
- Whether the character's neutral expression reads as believably mundane

---

### PROMPT A1 — Standard stylization (--s 250)

> Show me a 3x3 grid of a medium shot of a man in his thirties with dark brown skin and short cropped hair wearing a light blue long-sleeve dress shirt with the sleeves rolled to his forearms, he is standing in a corporate office hallway holding a large framed motivational poster against the wall with both hands as if positioning it to hang, the poster has a dramatic sunset over purple mountains with the word SYNERGY in large bold white uppercase text across the top and below it in smaller white text the phrase Two people can move a body faster, the man's expression is completely neutral and slightly bored as if this is a routine task he does every Monday, partially visible below the new poster and being covered up is a smaller framed HANG IN THERE motivational poster showing a cartoon orange cat clinging to a tree branch, the office hallway has beige walls and overhead fluorescent panel lighting and gray commercial carpet, a small bulletin board with pinned notices is visible further down the hall, photorealistic photography, corporate stock photo aesthetic, natural office lighting with overhead fluorescent panels, photographically accurate skin tones and textures, real-world office environment with standard commercial furniture and drop ceiling, every character has natural human proportions and realistic facial features with natural imperfections, the scene reads as a genuine photograph taken in a real corporate office, editorial photography quality, sharp focus on primary subject, natural depth of field --no cartoon, illustration, drawing, painting, sketch, anime, manga, chibi, stylized, flat color, cel shading, vector art, mid-century modern, geometric faces, angular faces, pointed noses, exaggerated proportions, caricature, waxy skin, plastic skin, airbrushed skin, unnaturally smooth skin, symmetrical face, perfect features, model-beautiful, glamour lighting, fashion photography, Instagram filter, color grading, teal and orange, desaturated, oversaturated, HDR, lens flare, vignette, film grain for style, collage, composite, split screen, floating elements, text overlay, watermark, stock photo watermark, Getty Images watermark --ar 1:1 --s 250 --v 6.1

---

### PROMPT A2 — Reduced stylization (--s 150)

> Show me a 3x3 grid of a medium shot of a man in his thirties with dark brown skin and short cropped hair wearing a light blue long-sleeve dress shirt with the sleeves rolled to his forearms, he is standing in a corporate office hallway holding a large framed motivational poster against the wall with both hands as if positioning it to hang, the poster has a dramatic sunset over purple mountains with the word SYNERGY in large bold white uppercase text across the top and below it in smaller white text the phrase Two people can move a body faster, the man's expression is completely neutral and slightly bored as if this is a routine task he does every Monday, partially visible below the new poster and being covered up is a smaller framed HANG IN THERE motivational poster showing a cartoon orange cat clinging to a tree branch, the office hallway has beige walls and overhead fluorescent panel lighting and gray commercial carpet, a small bulletin board with pinned notices is visible further down the hall, photorealistic photography, corporate stock photo aesthetic, natural office lighting with overhead fluorescent panels, photographically accurate skin tones and textures, real-world office environment with standard commercial furniture and drop ceiling, every character has natural human proportions and realistic facial features with natural imperfections, the scene reads as a genuine photograph taken in a real corporate office, editorial photography quality, sharp focus on primary subject, natural depth of field --no cartoon, illustration, drawing, painting, sketch, anime, manga, chibi, stylized, flat color, cel shading, vector art, mid-century modern, geometric faces, angular faces, pointed noses, exaggerated proportions, caricature, waxy skin, plastic skin, airbrushed skin, unnaturally smooth skin, symmetrical face, perfect features, model-beautiful, glamour lighting, fashion photography, Instagram filter, color grading, teal and orange, desaturated, oversaturated, HDR, lens flare, vignette, film grain for style, collage, composite, split screen, floating elements, text overlay, watermark, stock photo watermark, Getty Images watermark --ar 1:1 --s 150 --v 6.1

---

### PROMPT A3 — Low stylization (--s 100)

> Show me a 3x3 grid of a medium shot of a man in his thirties with dark brown skin and short cropped hair wearing a light blue long-sleeve dress shirt with the sleeves rolled to his forearms, he is standing in a corporate office hallway holding a large framed motivational poster against the wall with both hands as if positioning it to hang, the poster has a dramatic sunset over purple mountains with the word SYNERGY in large bold white uppercase text across the top and below it in smaller white text the phrase Two people can move a body faster, the man's expression is completely neutral and slightly bored as if this is a routine task he does every Monday, partially visible below the new poster and being covered up is a smaller framed HANG IN THERE motivational poster showing a cartoon orange cat clinging to a tree branch, the office hallway has beige walls and overhead fluorescent panel lighting and gray commercial carpet, a small bulletin board with pinned notices is visible further down the hall, photorealistic photography, corporate stock photo aesthetic, natural office lighting with overhead fluorescent panels, photographically accurate skin tones and textures, real-world office environment with standard commercial furniture and drop ceiling, every character has natural human proportions and realistic facial features with natural imperfections, the scene reads as a genuine photograph taken in a real corporate office, editorial photography quality, sharp focus on primary subject, natural depth of field --no cartoon, illustration, drawing, painting, sketch, anime, manga, chibi, stylized, flat color, cel shading, vector art, mid-century modern, geometric faces, angular faces, pointed noses, exaggerated proportions, caricature, waxy skin, plastic skin, airbrushed skin, unnaturally smooth skin, symmetrical face, perfect features, model-beautiful, glamour lighting, fashion photography, Instagram filter, color grading, teal and orange, desaturated, oversaturated, HDR, lens flare, vignette, film grain for style, collage, composite, split screen, floating elements, text overlay, watermark, stock photo watermark, Getty Images watermark --ar 1:1 --s 100 --v 6.1

---

## Evaluation Criteria

After running all three, compare the 27 tiles (9 per stylization level) against this checklist:

### Must-Haves
- [ ] **Photorealistic** — Does it look like a real photo, not an illustration?
- [ ] **Office environment** — Do the walls, ceiling, carpet, lighting read as a real office?
- [ ] **Natural face** — Does the character look like a real person (not waxy, not too smooth, not uncanny)?
- [ ] **Neutral expression** — Does the character look appropriately bored/neutral?
- [ ] **Poster text readable** — Can you read "SYNERGY" clearly?
- [ ] **Subtext readable** — Can you read "Two people can move a body faster" (or close enough to patch in InDesign)?
- [ ] **HANG IN THERE poster visible** — Is the second poster visible below/behind the main one?

### Nice-to-Haves
- [ ] **Fluorescent lighting feel** — Does the light look institutional/flat?
- [ ] **Bulletin board rendered** — Did the background detail come through?
- [ ] **Hands look natural** — No extra fingers, no mangled poses?
- [ ] **Clothing reads as real fabric** — Shirt looks like actual cotton, not painted-on?

### Stylization Parameter Decision
After comparing A1 (250), A2 (150), A3 (100):
- Which value produced the most photorealistic result?
- Which value best preserved the poster text?
- Which value felt most like a corporate stock photo?
- **Lock the winning value for all future prompts.**

---

## Notes After Running
*(Fill in after test)*

**Best stylization value:** ___
**Text rendering quality:** ___
**Environment quality:** ___
**Character quality:** ___
**Adjustments needed to style anchor:** ___
**Adjustments needed to negatives:** ___
