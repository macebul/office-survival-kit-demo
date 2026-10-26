# Office Survival Kit — Illustration Prompt Development

## Project Context

I'm developing Midjourney image prompts for the "Office Survival Kit" — a satirical product that treats corporate office life as a prison sentence. The core conceit is that everything about the office is reframed through prison logic: meetings are lockdowns, coworkers are inmates, managers are guards, office supplies are contraband/weapons, etc.

The product includes a booklet/manual styled as a "survival guide" for office inmates, with illustrated spreads. Each spread has copy (text) and illustrations that work together.

## Art Style

All illustrations use this consistent style foundation:

- Stylized cartoon illustration, mid-century modern aesthetic
- Exaggerated cartoon proportions like animation concept art
- Bold consistent ink outlines, simple bold shapes
- Limited color palette of warm amber, orange, cream, navy, charcoal, and muted gold tones
- Flat color fills with minimal shading
- Retro advertising poster feel
- ALL characters have geometric angular faces with pointed triangular noses and defined jawlines
- All noses are the exact same skin tone as the character's face — never red, never flushed, never differently colored

## Standard Negative Prompt

Always append this to every prompt:

```
--no red nose, flushed face, rosy cheeks, bulbous nose, round nose, round face, Rudolph nose, clown nose, cherry nose, crimson nose, ruddy nose, sunburned nose, Mr Potato Head nose, realistic, caricature, political cartoon, crosshatching, detailed rendering, overworked, thin lines, anime, manga, cute, chibi, geometric color blocks, floating rectangles, decorative squares, abstract shapes, garbled text, misspelled text
```

## Standard Parameters

- `--s 250 --v 6.1 --grid`
- Always request `Show me a 3x3 grid of...`
- Aspect ratio varies by layout need (--ar 2:3 for portrait/full page, --ar 3:2 for landscape)

## Key Lessons Learned (CRITICAL — Do Not Repeat These Mistakes)

### What Makes Images Funny
- **Emotion on faces is essential.** Exaggerated expressions — wide eyes, gritted teeth, screaming mouths, smug satisfaction, visible terror. Blank-faced characters kill comedy.
- **Action, not static poses.** Every image should be a frozen moment mid-action. Someone mid-swing, mid-recoil, mid-fall. Not people standing or sitting still.
- **Setup and subversion.** The mundane office setting IS the setup. The insane prison-logic behavior IS the subversion. The gap between the two is where the joke lives.
- **Variety of roles.** Don't just show attackers — show attackers AND victims. The reactions are where the humor lives. Alternate between people dealing damage and people taking damage.

### What Doesn't Work
- Static still shots with no action
- Characters with no visible emotion or expression
- Boring/expected settings that don't do comedic work
- Cramming too many things into one image — each image or panel should have ONE clear frozen moment
- Sleeping/passed out characters — boring, not absurd
- Characters just sitting smugly — not interesting enough on its own
- Repetitive actions (everyone attacking, no one reacting)
- Single images trying to tell a complex multi-beat story

### Structural Rules
- **Rotate main characters between spreads.** Each spread should feature a different protagonist — different gender, skin tone, hair, outfit. The manual is collective wisdom, not one person's story.
- **Within a spread, keep the same main character** across pages so the story tracks.
- **Exception:** If a page uses "do this / don't do this" structure, characters can change within the page.
- **Comic panel layouts work well** for sequences with multiple beats (like a riot). Six panels, three rows, two columns, clear black panel borders. Describe each panel position explicitly (TOP LEFT, TOP RIGHT, MIDDLE LEFT, MIDDLE RIGHT, BOTTOM LEFT, BOTTOM RIGHT).
- **Two landscape images work** for simpler two-beat stories (before/after, setup/payoff).
- **The copy already does heavy lifting.** Don't make the image repeat what the text says — the image should show the visual punchline or complement the copy, not illustrate it literally.

### Characters Used So Far
- **Spread 1:** Man with medium brown skin, short black hair, white dress shirt, loosened dark tie
- **Spread 2:** Man with light skin, red hair, green polo (stapler victim); woman with medium skin tone, long dark hair in low bun, cream blouse (referenced but not the main protagonist in the final version); various supporting characters

### Prompt Engineering Notes
- Describe each character fully every time (skin tone, hair color/style, clothing) — Midjourney doesn't remember between prompts
- Specify the emotional expression for EVERY character, not just the main one
- Describe physical action with motion language: "recoiling violently," "arms flailing," "chair tipping backwards," "mid-swing"
- For comic panel layouts, describe each panel's content in order with explicit position labels
- The face/nose style block and negative prompt must appear in every single prompt

## What I Need From You

I'm going to share the copy for the next spread. Help me develop Midjourney image prompts for it following all the rules above. Push for genuine comedy — don't settle for "weird but not funny." Challenge each image concept: Is there real emotion? Is there mid-action movement? Is there a visual joke that lands without the text? Would this make someone actually laugh?
