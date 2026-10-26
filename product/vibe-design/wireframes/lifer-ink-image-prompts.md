# Lifer Ink -- Image Generation Prompts

## How to Use

1. Run `lifer-ink-reference.jsx` in Illustrator
2. Screenshot the CARD FRONT artboard and the CARD BACK artboard separately
3. Attach screenshot + paste the matching BASE prompt below
4. Once the base recreation is solid, apply THEME prompts on top

---

## STEP 1: BASE RECREATION (use these first)

The goal is to get the AI to faithfully reproduce the attached reference wireframe screenshot. No styling, no themes, no photography. Just recreate the layout.

### FRONT

```
Recreate this reference image exactly as shown. This is a flat packaging card layout viewed straight-on from above. Reproduce the exact card shape, the L-shaped notch in the upper-left corner, the rectangular block layout, the labeled zones with their IDs visible, the tuck-end box outline near the bottom, and the fold-over flap at the bottom edge. Keep the same proportions, block sizes, and spacing. Do not add any styling, textures, photography, shadows, or 3D effects. Do not add handles, tabs, or structural elements that are not in the reference. Just recreate the flat 2D layout exactly as it appears in the attached image --no photography, 3D rendering, shadows, textures, handles, tabs, die-cut shapes not in reference, product mockup, lifestyle shot --ar 5:4 --s 250 --v 6.1
```

### BACK

```
Recreate this reference image exactly as shown. This is the back side of a flat packaging card layout viewed straight-on from above. Reproduce the exact card shape, the L-shaped notch in the upper-right corner, the rectangular block layout, the labeled zones with their IDs visible, the two side-by-side portrait blocks in the top row, the large grid block in the center, and the smaller blocks below. Keep the same proportions, block sizes, and spacing. Do not add any styling, textures, photography, shadows, or 3D effects. Do not add handles, tabs, or structural elements that are not in the reference. Just recreate the flat 2D layout exactly as it appears in the attached image --no photography, 3D rendering, shadows, textures, handles, tabs, die-cut shapes not in reference, product mockup, lifestyle shot --ar 5:4 --s 250 --v 6.1
```

---

## STEP 2: THEME PROMPTS (use after base is locked)

Once you have a clean base recreation, use these theme prompts to apply visual direction. Attach the clean base recreation (not the wireframe) and paste one of these:

### THEME 1: Red Accents

```
Take this packaging card layout and apply a tactical matte black aesthetic. Heavy 18pt matte black paperboard with subtle texture grain, thin dark red burgundy oxblood inset border lines framing sections, clean condensed institutional sans-serif uppercase typography in white on black, dark red accent color for borders taglines and emphasis, the seal badge zone should have an ornate oval ribbon design with slight metallic quality, dark moody directional lighting catching the matte surface, shot as a flat lay on dark concrete, the feel is authentic premium hardware packaging not a novelty gift --no bright colors, cartoon illustrations, comic fonts, novelty aesthetic, cheap look, busy patterns, wacky fonts, loud graphics --ar 5:4 --s 250 --v 6.1
```

### THEME 2: Gold Foil Accents

```
Take this packaging card layout and apply a tactical matte black with gold foil aesthetic. Heavy 18pt matte black paperboard with soft-touch coating, gold foil accent lines borders and key text highlights, clean condensed sans-serif uppercase typography in white and gold on black, the seal badge zone should have gold foil embossing with wax stamp quality, dark moody studio lighting catching gold foil reflections, shot as a flat lay on dark marble or polished black surface, the feel is premium retail packaging with a luxury edge like a high-end knife gift set --no bright colors, cartoon illustrations, comic fonts, novelty aesthetic, cheap look, busy patterns, kraft brown materials --ar 5:4 --s 250 --v 6.1
```

### THEME 3: Minimal White

```
Take this packaging card layout and apply a pure monochrome tactical aesthetic. Heavy 18pt matte black paperboard with soft-touch texture, thin white hairline rules and borders only with no color accents at all, tight condensed uppercase sans-serif typography all white on black, the seal badge zone should be clean white line art, pure monochrome black and white only maximum contrast, harsh single-source directional lighting high contrast dramatic shadows, shot as a flat lay on dark matte surface, the feel is a military spec sheet or intelligence briefing document printed on packaging --no bright colors, warm tones, red accents, gold accents, cartoon illustrations, comic fonts, busy patterns, gradients --ar 5:4 --s 250 --v 6.1
```

### THEME 4: Gunmetal & Red

```
Take this packaging card layout and apply a tactical gunmetal and red aesthetic. Heavy 18pt matte black paperboard with brushed gunmetal metallic texture overlay, dark red accent lines with subtle metallic sheen, stencil-influenced condensed uppercase for headlines clean sans-serif for body white on dark, the seal badge zone should look like a stamped metal industrial quality control mark, gunmetal silver for structural lines dark red for emphasis, subtle carbon fiber texture in background areas, dark moody lighting with metallic highlights, shot as a flat lay on brushed steel or dark concrete, the feel is a defense contractor catalog product --no bright colors, cartoon illustrations, comic fonts, novelty aesthetic, cheap look, busy patterns, glossy surfaces --ar 5:4 --s 250 --v 6.1
```

### THEME 5: Spot UV & Emboss

```
Take this packaging card layout and apply a tactile matte-versus-gloss contrast aesthetic. Heavy 18pt matte black paperboard with spot UV gloss coating on key elements creating visible sheen difference between matte background and glossy text, embossed debossed texture effect on the headline and seal, clean condensed uppercase sans-serif white on matte black with select elements in gloss black-on-matte-black tone-on-tone, no color accents just matte versus gloss contrast, the card angled 5 to 10 degrees to catch light revealing the spot UV and emboss textures, the feel is tactile premium packaging you want to run your thumb across --no bright colors, flat digital rendering, cartoon illustrations, comic fonts, novelty aesthetic, cheap look, busy patterns --ar 5:4 --s 250 --v 6.1
```

### THEME 6: Dark Red & Cream

```
Take this packaging card layout and apply a vintage tactical aesthetic. Heavy 18pt matte black paperboard, dark red oxblood burgundy section bands and borders, cream off-white text instead of pure white for a warmer vintage feel, condensed serif for headlines clean sans-serif for body, the seal badge zone should be ornate Victorian certificate quality in cream and red on black, subtle aged paper texture overlay at low opacity, warm directional lighting with slight amber tone, shot as a flat lay on dark wood surface with visible grain, the feel is vintage ammunition packaging or antique apothecary labels from a very old company --no bright colors, modern minimalism, cartoon illustrations, comic fonts, neon accents, glossy plastic --ar 5:4 --s 250 --v 6.1
```

---

## WORKFLOW

1. Attach FRONT screenshot + FRONT base prompt -> get clean recreation
2. Attach BACK screenshot + BACK base prompt -> get clean recreation
3. Once both sides recreate cleanly, attach the clean recreation + a THEME prompt
4. Test 2-3 themes, pick the winner
5. Use the copy reference sheet to fill in blocks one at a time
6. Re-generate with copy for final refinement

## ASPECT RATIO

Card is 13.25" x 10.75" (roughly 5:4). The `--ar 5:4` flag handles this. For non-Midjourney generators set output to landscape at 1325x1075px or any multiple.
