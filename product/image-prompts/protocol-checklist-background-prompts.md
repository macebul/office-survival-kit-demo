# Protocol Checklist Background — Image Generation Prompts

**Version:** v1
**Created:** May 27, 2026
**Purpose:** Generate background images for the Standard Credential Photo Protocol checklist element on pp. 4-5. Text will be placed as native InDesign type on top of the generated background.
**Usage:** Generate straight-on, flat, no perspective distortion. The image IS the paper/surface. Text goes on top in InDesign.

---

## Important Notes

- These are BACKGROUND TEXTURES, not complete designs
- Do NOT include any text, letters, numbers, or words in the generated image
- The image should be a blank form/poster/document surface that text can be placed over
- Generate at high resolution for print (aim for largest possible output)
- Straight-on, perfectly flat, no angle or perspective
- Aspect ratio should approximate the element's space on the page — roughly 2:3 or 3:4 vertical

---

## Concept 1: Carbon Copy Triplicate Form

### Prompt

A perfectly flat overhead photograph of a blank vintage government triplicate form on a desk surface, three stacked layers of NCR carbon copy paper visible at the bottom edge and right edge, top sheet is white, second sheet is canary yellow, third sheet is pink, each offset slightly to show the layered paper stack, faint horizontal ruled lines printed across the white top sheet at regular intervals, a single black metal binder clip attached at the top center of the paper stack, subtle paper grain texture visible on the surface, faint aged patina, the form is completely blank with no text or writing of any kind, no words no letters no numbers no characters, the paper has a slight institutional green-gray tint, a dashed perforation line with tiny scissors icon printed near the bottom edge, clean overhead flatlay photography, even studio lighting with no harsh shadows, product photography quality, sharp focus across entire surface --no text, writing, letters, numbers, words, characters, handwriting, typed text, printed text, stamps, logos, watermarks, seals, signatures, cartoon, illustration, people, hands, fingers, perspective distortion, angle, tilt --ar 2:3 --s 250 --v 6.1

### What to look for in results
- Clean white top sheet with visible yellow and pink layers peeking out at edges
- Binder clip at top is a bonus but not essential
- Ruled lines should be faint, not dominant
- NO text of any kind — reject any result with visible writing
- Paper should look like a real physical document, not a digital mockup
- Perforation line at bottom is a bonus

### InDesign text placement notes
- Checkboxes: Use Zapf Dingbats or Wingdings for hollow squares, or draw with InDesign's rectangle tool
- Body text: Courier New or IBM Plex Mono, 8-9pt, all caps for labels
- Form header area: top 15% of the image
- "FOR OFFICE USE ONLY" box: bottom 10%, draw a rectangle with stroke in InDesign
- Form number: small text, top right corner or bottom right

---

## Concept 3: Laminated Wall Poster

### Prompt

A perfectly flat overhead photograph of a blank laminated instructional wall poster laying on a surface, clean white glossy laminated paper with rounded corners, a thin subtle border line near the edges, two small black punch holes at the top center for hanging hardware, a visible lamination sheen with a faint diagonal light reflection strip across the surface suggesting overhead fluorescent lighting on glossy plastic coating, the poster is completely blank with no text writing or imagery of any kind, no words no letters no icons no graphics, clean smooth white surface with the characteristic slight glossy plastic texture of office lamination, even studio lighting, flatlay product photography, sharp focus across entire surface --no text, writing, letters, numbers, words, characters, icons, graphics, images, diagrams, charts, printed content, stamps, logos, watermarks, cartoon, illustration, people, hands, perspective distortion, angle, tilt, wrinkles, damage --ar 2:3 --s 250 --v 6.1

### What to look for in results
- Clean white surface with visible lamination sheen/glare
- Rounded corners
- Punch holes at top are a bonus
- The lamination reflection is key — it sells the "break room poster" feel
- NO text, icons, or graphics of any kind
- Should look like someone laminated a blank piece of paper

### InDesign text placement notes
- Header bar: Create a colored rectangle across the top 12% (use ELEVATE brand color or institutional teal)
- Checklist items: Create individual rounded-rectangle frames with pastel fills (alternating two colors), arrange in a 2-column, 3-row grid
- Icons: Optional — source simple line-art icons or skip entirely. The text carries the comedy.
- Footer bar: Darker colored rectangle at bottom 8%
- Everything is built in InDesign on top of the laminated background image
- The lamination glare from the background image will show through, giving the whole thing a physical quality

---

## Alternate Approach: No Image Generation Needed

### Concept 3 can be built entirely in InDesign

If image generation doesn't produce clean enough results, Concept 3 (laminated poster) can be constructed 100% in InDesign:

1. Draw a rounded rectangle (8px corner radius) with a light gray 1pt stroke
2. Fill with white
3. Add a header bar (colored rectangle, clipped to the rounded rectangle)
4. Add six content cards as smaller rounded rectangles with pastel fills
5. Add a footer bar (darker rectangle)
6. For lamination effect: draw a large semi-transparent white rectangle rotated ~15 degrees, set to 3-5% opacity, clipped to the poster boundary
7. Add a very subtle drop shadow to the entire poster group (1px offset, 4px blur, 10% opacity)
8. Add two small circles at top center for punch holes (dark gray fill, 6pt diameter)

This produces a clean, professional result without any image generation dependencies.

---

## Changelog

| Version | Date | Changes |
|---|---|---|
| v1 | May 27, 2026 | Initial prompts for two concepts. Includes InDesign build notes and pure-InDesign fallback for Concept 3. |
