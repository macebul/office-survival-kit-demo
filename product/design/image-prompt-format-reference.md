# Image Prompt Format Reference

## Rules
- Single continuous sentence/paragraph — no line breaks within the prompt
- Starts with "Show me a 3x3 grid of"
- Photorealistic style (editorial photography for scenes, product photography for packaging)
- Describe everything in rich detail woven into one flowing paragraph
- ALL text that appears on the product must be described inline with its typography (size, weight, style, color, position)
- End with `--no` block (exclusions), `--ar` (aspect ratio), `--s` (stylize value), `--v 6.1`
- No markdown formatting, no bullet lists, no section headers within the prompt itself

## Structure
```
Show me a 3x3 grid of [detailed description with all visual elements, text content with typography specs, materials, lighting, composition, mood woven into one continuous paragraph] --no [exclusions] --ar [ratio] --s [stylize value] --v 6.1
```

## Example: Editorial Scene
Show me a 3x3 grid of a photorealistic editorial photograph shot from the perspective of someone who has just opened a door marked with a sign reading CREDENTIALING DEPARTMENT AUTHORIZED PERSONNEL ONLY, we see the edge of the door frame and the sign on the door, inside a small plain room a cheerful middle-aged man in business casual is tied to a metal folding chair with thick rope clearly wrapped around his torso and legs binding him to the chair but he is smiling broadly and waving enthusiastically with one free hand while holding a small handwritten cardboard sign at chest level that reads an employee name and a five digit employee ID number, his expression is genuinely happy and thrilled, standing beside a camera mounted on a tripod a man in a dark polo shirt and lanyard has one hand resting on the camera and his other hand is holding up a piece of white paper facing toward the seated man showing the seated man what is written on it so the seated man can read it, the photographer is glancing over his shoulder toward the doorway with an annoyed expression, the piece of paper faces away from us so we cannot read it, the camera on the tripod is clearly visible pointing directly at the seated man, harsh overhead fluorescent lighting illuminates plain bare concrete block walls with absolutely nothing on them, the room is small stark and institutional, the contrast between the rope restraints and the mans absolute joy creates an absurd comedic tone, bright clean upbeat mood editorial comedy photography style --no cartoon, illustration, drawing, painting, sketch, anime, stylized, dark mood, horror, scary, blood, injury, weapons, sad expression, crying, distressed, dark lighting, heavy shadows, signs on wall, posters on wall, decorations on wall, reading clipboard, looking at paper --ar 4:3 --s 250 --v 6.1 --grid

## Example: Product Packaging
Show me a 3x3 grid of a photorealistic product photograph of a single rectangular pen box sleeve lying flat, premium matte black cardstock with subtle soft-touch texture, the box front surface shown straight-on filling the frame, at the very top in small understated metallic silver sans-serif uppercase text reads "ELEVATE CO." with a thin horizontal rule below it, below that in larger bold metallic silver text reads "O³" with a superscript 3, below that in smaller metallic silver uppercase tracking-wide text reads "OFFICE OFFENSE OUTFITTERS", below that in even smaller italic metallic silver text reads "Because it keeps you more alive than O²" with a subscript 2, a generous space break then in large bold white uppercase serif text centered reads "CUBICLE SHANK", below that in smaller warm white italic serif text reads "The pen that ends sentences. May also extend yours.", another space break then in small metallic silver text reads "Now featuring black ink. The red was a customer discovery.", near the bottom in very small white text reads "Qty: 1. Swords: also 1. Throwing stars: 6-12. Darts: 3. Know your category before committing.", in the bottom right corner a small ornate oval seal badge with ribbon banner reading "GOOD SHANKING" arched across the top and "SEAL OF APPROVAL" on the ribbon with a tiny pen silhouette in the center and "Janitor Verified" in tiny text below the seal, the overall design looks like premium tactical gear packaging or high-end office supply branding, clean corporate typography hierarchy, generous whitespace, the box looks like a real retail product not a gag gift, serious professional energy that makes the text content land harder, shot straight-on flat lay on dark slate surface with soft studio lighting, real printed matte cardstock with visible texture --no 3D angles, perspective, box sides visible, bright colors, cartoon style, handwritten fonts, busy patterns, digital mockup look, gag gift aesthetic, novelty product styling --ar 4:1 --s 250 --v 6.1

## Key Differences by Type

**Editorial scenes:** Focus on subjects, actions, expressions, setting, lighting, mood. Text on signs/props described naturally.

**Product packaging:** Focus on material, surface, typography hierarchy. Every piece of text described with its position (top/center/bottom), size (small/large/very small), style (italic/bold/uppercase/serif/sans-serif), color (white/metallic silver/red), and exact content in quotes. Describe the reading order top-to-bottom as a visual walk-through.
