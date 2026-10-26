# MASTER ILLUSTRATION STYLE GUIDE
## Office Survival Manual â€” B&W Ink Sketch Style

**Version:** 2.0  
**Date:** February 2, 2026  
**Status:** LOCKED â€” Ready for Production

---

## STYLE OVERVIEW

This document defines the exact visual style for all illustrations in the Office Survival Manual. The style is a **black and white hand-drawn ink sketch** that translates mid-century modern character design DNA into a simpler, cleaner execution suitable for print.

### Style Lineage
- **Origin:** Mid-century modern / 1960s advertising poster aesthetic
- **Translation:** B&W ink sketch with animation concept art proportions
- **Feel:** Professional cartoonist's confident sketch â€” skilled but not overworked

### Key Characteristics
- Angular, geometric faces with pointed noses
- Exaggerated proportions (large heads, expressive features)
- Clean confident line work with minimal hatching
- Bold consistent ink line weight with thick confident outlines
- Simple bold shapes over detailed rendering
- **Pure white background on every image** (critical for InDesign compositing)
- Adult characters (never cute/childlike)
- Western/American aesthetic (no anime influence)
- Diverse cast reflecting a real American office (varied gender, race, age, clothing)

---

## MASTER PROMPT TEMPLATE

Use this template for ALL character illustrations. Fill in the bracketed sections.

```
Stylized cartoon ink sketch, black and white, [CHARACTER DESCRIPTION], geometric angular face with pointed triangular nose, defined jawline, [EXPRESSION], [HAIR], [CLOTHING/PROPS], exaggerated cartoon proportions like animation concept art, loose confident pen strokes, bold consistent ink line weight, minimal hatching, simple bold shapes, [SPECIFIC HATCHING DETAIL], single character on pure white background --no elderly, ancient, old, bulbous nose, round nose, sagging, jowls, wrinkles, realistic, caricature, political cartoon, crosshatching, detailed rendering, overworked, thin lines, scratchy lines, light pencil, faint lines, inconsistent line weight, background texture, gray background, off-white background, paper texture, vignette, gradient background, shadows on background, color, anime, manga, cute, chibi
```

---

## MANDATORY STYLE ANCHORS

These phrases MUST appear in every prompt. They are non-negotiable.

### Opening (Always First)
```
Stylized cartoon ink sketch, black and white
```

### Face Construction (Always Include)
```
geometric angular face with pointed triangular nose, defined jawline
```

### Proportions (Always Include)
```
exaggerated cartoon proportions like animation concept art
```

### Line Quality (Always Include)
```
loose confident pen strokes, bold consistent ink line weight, minimal hatching, simple bold shapes
```

### Background (Always Include)
```
pure white background
```
*Note: This replaced "no background." Pure white is critical for InDesign compositing.*

### Composition (Always Last Before Negatives)
```
single character on pure white background
```

### Negative Prompts (Always Include)
```
--no elderly, ancient, old, bulbous nose, round nose, sagging, jowls, wrinkles, realistic, caricature, political cartoon, crosshatching, detailed rendering, overworked, thin lines, scratchy lines, light pencil, faint lines, inconsistent line weight, background texture, gray background, off-white background, paper texture, vignette, gradient background, shadows on background, color, anime, manga, cute, chibi
```

---

## VARIABLE ELEMENTS

### [CHARACTER DESCRIPTION]
Describe WHO they are and their PRIMARY ACTION or POSE.

**Examples:**
- "tired office worker holding coffee mug, hand in pocket, slouched posture"
- "nervous young employee clutching folder to chest defensively"
- "enthusiastic HR representative with clipboard in power pose"
- "disheveled IT worker holding energy drink with knowing smirk"
- "frazzled assistant juggling stack of papers"
- "bored receptionist resting chin on hand"
- "smug executive leaning back with fingers steepled"

### [EXPRESSION]
Describe the EYES and EMOTIONAL STATE.

**Examples:**
- "heavy-lidded tired eyes, defeated expression"
- "wide worried eyes with raised eyebrows, anxious expression"
- "huge fake smile showing teeth, eyes slightly too wide"
- "one eyebrow raised, knowing smirk"
- "half-closed unimpressed eyes, slight frown"
- "wide panicked eyes, mouth open in shock"
- "half-lidded arrogant eyes, self-satisfied smirk"

### [HAIR]
Be specific about style and state.

**Examples:**
- "messy unkempt hair sticking up"
- "short professional hair perfectly styled"
- "hair in messy bun with loose strands falling"
- "slicked back hair"
- "disheveled hair sticking up in multiple directions"
- "neat parted hair slightly mussed"

### [CLOTHING/PROPS]
Describe key clothing items and any props. **IMPORTANT: Vary clothing across characters.** Not everyone wears a shirt and tie. Mix it up to create distinct silhouettes.

**Male Clothing Options:**
- "wrinkled dress shirt with loosened tie, sleeves rolled up" (the classic â€” use sparingly)
- "casual button-up shirt, no tie, top button undone"
- "polo shirt, no tie" (IT/casual vibe)
- "slightly oversized button-up shirt untucked" (new hire energy)
- "sweater vest over collared shirt"
- "henley shirt with pushed-up sleeves"
- "dress shirt with suspenders"

**Female Clothing Options:**
- "cardigan over blouse with sleeves pushed up"
- "simple v-neck top with lanyard and ID badge"
- "blazer over simple top"
- "blouse with rolled sleeves"
- "turtleneck sweater"
- "button-up shirt with statement necklace"

**Rule of Thumb:** In any group of characters, no more than ONE should wear the shirt-and-tie combo. That character earns the tie by being the most beaten-down veteran.

### [SPECIFIC HATCHING DETAIL]
Call out ONE area for hatching to give texture without over-rendering.

**Examples:**
- "diagonal line hatching on tie only"
- "minimal hatching on skirt"
- "loose sketchy lines on paper stack"
- "light hatching on collar"
- "diagonal strokes on belt"

---

## CHARACTER AGE GUIDELINES

| Character Type | Age Language to Use | Age Language to AVOID |
|----------------|--------------------|-----------------------|
| Young/New | "young," "in their 20s" | "kid," "teen," "child" |
| Standard Adult | "in their 30s," "adult" | "middle-aged" (triggers older) |
| Experienced | "in their 40s," "veteran" | "old," "elderly," "senior" |
| Stocky/Heavy | "solid build," "broad shoulders" | "stocky," "thick," "heavy" |
| Tired/Worn | "prematurely tired," "exhausted" | "worn out," "haggard" |

**CRITICAL:** Avoid "receding hairline," "balding," "thick neck," "stocky" â€” these trigger elderly political caricature style.

---

## CHARACTER DIVERSITY GUIDELINES

### Demographic Balance
The cast should reflect a real American office. Use this as a rough guide:

| Demographic | Target % | Notes |
|-------------|----------|-------|
| White male 25-45 | ~40% | Core demographic, largest group |
| White female 25-45 | ~20% | Strong representation |
| Black male/female | ~15% | Mix of ages |
| Asian/South Asian | ~10% | Mix of genders |
| Latino/Hispanic | ~10% | Mix of genders |
| Other/mixed | ~5% | As appropriate |

### Rendering Darker Skin Tones in B&W Ink Style

**The challenge:** In minimal B&W ink, heavy skin shading can clash with the clean style and create inconsistency.

**The solution:** Use these phrases for darker-skinned characters:
- "dark skin with clean bold ink outlines and minimal shading"
- "brown skin with clean bold ink outlines"

**Add to negative prompts for darker-skinned characters:**
```
--no heavy shading
```

**Best practices:**
- Rely on **outlines and features** (hair texture, face shape) rather than heavy fill
- Poses that involve hands near face (covering eyes, holding things) reduce exposed skin area
- Keep the same minimal hatching approach â€” don't over-render to show skin tone
- The style should feel consistent regardless of character ethnicity

### Hair Variety by Demographic
- **Black characters:** "short cropped hair," "natural hair pulled back," "short curly black hair," "locs," "fade haircut"
- **South Asian characters:** "thick dark hair neatly styled," "dark hair parted to side"
- **Latino characters:** "dark wavy hair," "dark hair slicked back"
- **White characters:** "messy hair," "neat parted hair," "blonde hair," "light brown hair"

---

## EXPRESSION LIBRARY

### Negative Emotions
| Emotion | Eye Description | Mouth/Face | Body Language |
|---------|-----------------|------------|---------------|
| Tired | "heavy-lidded tired eyes" | "slight frown, downturned mouth" | "slouched, defeated posture" |
| Anxious | "wide worried eyes, raised eyebrows" | "nervous grimace" | "hunched, shoulders raised" |
| Panicked | "wide panicked eyes, visible sweat drops" | "mouth open in shock" | "tense, rigid posture" |
| Defeated | "half-closed exhausted eyes" | "flat expressionless mouth" | "slumped, limp posture" |
| Cynical | "half-lidded unimpressed eyes" | "slight frown or flat line" | "arms crossed, leaning" |
| Angry | "narrowed glaring eyes, furrowed brow" | "clenched jaw, grimace" | "tense shoulders, fists" |

### Positive/Neutral Emotions
| Emotion | Eye Description | Mouth/Face | Body Language |
|---------|-----------------|------------|---------------|
| Fake Happy | "eyes slightly too wide, forced" | "huge smile showing teeth" | "power pose, stiff posture" |
| Smug | "half-lidded arrogant eyes" | "self-satisfied smirk" | "leaning back, relaxed" |
| Knowing | "one eyebrow raised" | "slight smirk" | "casual lean, hand in pocket" |
| Bored | "half-closed droopy eyes" | "flat mouth, slight pout" | "chin on hand, slouched" |
| Surprised | "wide round eyes, eyebrows up" | "small 'o' mouth" | "leaning back, hands up" |

---

## POSE LIBRARY

### Standing Poses
- "standing with hand in pocket, holding [ITEM]"
- "slouched posture, weight on one leg"
- "power pose with hand on hip"
- "arms crossed over chest"
- "hunched forward, shoulders raised"
- "leaning against invisible wall"

### Sitting Poses
- "slumped in office chair"
- "leaning back with feet on desk"
- "hunched over desk"
- "resting chin on hand at desk"
- "rigid upright posture in chair"

### Action Poses
- "clutching [ITEM] to chest defensively"
- "juggling multiple items"
- "reaching for something"
- "recoiling in shock"
- "pointing accusingly"
- "facepalming"
- "hiding under desk"

---

## PROP LIBRARY

### Office Items
- coffee mug (with steam wisps)
- stack of papers/documents
- folder/manila envelope
- clipboard
- laptop/computer
- phone (desk or mobile)
- energy drink can
- pen/pencil
- name badge
- briefcase

### Environmental (if needed)
- desk surface
- office chair
- filing cabinet
- water cooler
- potted plant
- wall clock
- desk lamp

---

## COMPLETE EXAMPLE PROMPTS

### Example 1: Tired Worker (Your Benchmark)
```
Stylized cartoon ink sketch, black and white, exhausted young adult office worker holding coffee mug, hand in pocket, slouched defeated posture, geometric angular face with pointed triangular nose, defined jawline, heavy-lidded tired eyes, messy unkempt hair, wrinkled dress shirt with loosened tie, exaggerated cartoon proportions like animation concept art, loose confident pen strokes, minimal hatching, simple bold shapes, diagonal line hatching on tie, single character no background --no elderly, ancient, old, bulbous nose, round nose, sagging, jowls, wrinkles, realistic, caricature, political cartoon, crosshatching, detailed rendering, overworked, color, anime, manga, cute, chibi
```

### Example 2: Anxious New Hire
```
Stylized cartoon ink sketch, black and white, nervous young office worker on first day clutching folder to chest defensively, geometric angular face with pointed triangular nose, defined jawline, wide worried eyes with raised eyebrows, messy hair, wearing oversized ill-fitting suit with sleeves too long, hunched anxious posture, exaggerated cartoon proportions like animation concept art, loose confident pen strokes, minimal hatching, simple bold shapes, diagonal line hatching on tie, single character no background --no elderly, ancient, old, bulbous nose, round nose, sagging, jowls, wrinkles, realistic, caricature, political cartoon, crosshatching, detailed rendering, overworked, color, anime, manga, cute, chibi
```

### Example 3: HR Person
```
Stylized cartoon ink sketch, black and white, overly enthusiastic female HR representative with clipboard in power pose hand on hip, geometric angular face with pointed triangular nose, defined cheekbones, huge fake smile showing teeth eyes slightly too wide, short professional hair, pencil skirt and blouse, exaggerated cartoon proportions like animation concept art, loose confident pen strokes, minimal hatching, simple bold shapes, minimal hatching on skirt, single character no background --no elderly, bulbous nose, round nose, sagging, jowls, wrinkles, realistic, caricature, political cartoon, crosshatching, detailed rendering, overworked, color, anime, manga, cute, chibi
```

### Example 4: IT Person
```
Stylized cartoon ink sketch, black and white, disheveled IT worker with thick-rimmed glasses and knowing smirk, geometric angular face with pointed triangular nose, defined jawline, one eyebrow raised, messy unkempt hair sticking up in multiple directions, wrinkled untucked polo shirt, holding energy drink can, slouched posture with hand in pocket, exaggerated cartoon proportions like animation concept art, loose confident pen strokes, minimal hatching, simple bold shapes, light hatching on collar, single character no background --no elderly, bulbous nose, round nose, sagging, jowls, wrinkles, realistic, caricature, political cartoon, crosshatching, detailed rendering, overworked, color, anime, manga, cute, chibi
```

### Example 5: Cynical Veteran (Female)
```
Stylized cartoon ink sketch, black and white, tired cynical female office worker in her 40s with arms crossed, geometric angular face with pointed triangular nose, defined cheekbones, heavy-lidded unimpressed eyes with slight frown, hair in messy bun with loose strands, blouse with sleeves rolled up, leaning posture, exaggerated cartoon proportions like animation concept art, loose confident pen strokes, minimal hatching, simple bold shapes, minimal hatching on blouse, single character no background --no elderly, ancient, bulbous nose, round nose, sagging, jowls, wrinkles, realistic, caricature, political cartoon, crosshatching, detailed rendering, overworked, color, anime, manga, cute, chibi
```

### Example 6: Panicked Worker (Scene)
```
Stylized cartoon ink sketch, black and white, panicked office worker surrounded by flying papers holding coffee that is spilling, geometric angular face with pointed triangular nose, defined jawline, wide panicked eyes with visible sweat drops mouth open in shock, messy disheveled hair, wrinkled shirt with loosened tie askew, exaggerated cartoon proportions like animation concept art, loose confident pen strokes, minimal hatching, simple bold shapes, loose sketchy lines on flying papers, single character no background --no elderly, ancient, old, bulbous nose, round nose, sagging, jowls, wrinkles, realistic, caricature, political cartoon, crosshatching, detailed rendering, overworked, color, anime, manga, cute, chibi
```

### Example 7: Smug Executive
```
Stylized cartoon ink sketch, black and white, smug corporate executive leaning back in chair with fingers steepled, geometric angular face with pointed triangular nose, defined jawline, half-lidded arrogant eyes with self-satisfied smirk, slicked back hair, expensive suit with pocket square, exaggerated cartoon proportions like animation concept art, loose confident pen strokes, minimal hatching, simple bold shapes, diagonal line hatching on tie, single character no background --no elderly, ancient, old, bulbous nose, round nose, sagging, jowls, wrinkles, realistic, caricature, political cartoon, crosshatching, detailed rendering, overworked, color, anime, manga, cute, chibi
```

### Example 8: Bored Receptionist
```
Stylized cartoon ink sketch, black and white, extremely bored receptionist resting chin on hand at desk staring blankly, geometric angular face with pointed triangular nose, defined jawline, half-closed droopy unimpressed eyes with flat mouth, hair in ponytail, simple blouse, slumped posture, exaggerated cartoon proportions like animation concept art, loose confident pen strokes, minimal hatching, simple bold shapes, minimal line work on desk surface, single character no background --no elderly, ancient, old, bulbous nose, round nose, sagging, jowls, wrinkles, realistic, caricature, political cartoon, crosshatching, detailed rendering, overworked, color, anime, manga, cute, chibi
```

---

## PRE-FLIGHT CHECKLIST

Before running ANY prompt, verify:

- [ ] Prompt starts with "Stylized cartoon ink sketch, black and white"
- [ ] Includes "geometric angular face with pointed triangular nose, defined jawline"
- [ ] Includes "exaggerated cartoon proportions like animation concept art"
- [ ] Includes "loose confident pen strokes, bold consistent ink line weight, minimal hatching, simple bold shapes"
- [ ] Includes "on pure white background" (NOT "no background")
- [ ] Includes specific expression description (eyes + mouth + body)
- [ ] Includes hair description
- [ ] Includes clothing/prop description (VARIED â€” not everyone gets a tie!)
- [ ] Includes ONE specific hatching callout
- [ ] Full negative prompt block is included (with background + line weight negatives)
- [ ] NO forbidden words used (stocky, receding, elderly, etc.)
- [ ] Style reference images attached (Benchmark #11, #14, AND OG Author)
- [ ] For darker-skinned characters: includes "clean bold ink outlines and minimal shading" + "--no heavy shading"

---

## STYLE REFERENCE IMAGES

**CRITICAL:** Always upload these THREE benchmark images as style references when generating new illustrations:

1. **Benchmark #11** â€” Tired worker with coffee, angular face, minimal hatching, clean lines
2. **Benchmark #14** â€” Same character, slightly different angle, excellent line quality
3. **OG Author** â€” Arms crossed, knowing smirk, mid-50s, graying temples â€” proves style works across different characters

These images should be saved in your project folder and attached to EVERY generation request to reinforce style consistency.

**Note:** The reference images have off-white/cream paper texture. The pure white background prompt language overrides this â€” the references control the LINE STYLE, not the background.

---

## TROUBLESHOOTING

### Problem: Characters look too old/elderly
**Solution:** Remove any of these words: "stocky," "thick neck," "receding hairline," "balding," "middle-aged," "veteran," "experienced." Add "young adult" or "in their 30s."

### Problem: Too much detail/crosshatching
**Solution:** Emphasize "minimal hatching, simple bold shapes" and add "clean lines" to prompt. Strengthen negative: "--no crosshatching, detailed rendering, overworked"

### Problem: Face too round/soft
**Solution:** Ensure "geometric angular face with pointed triangular nose, defined jawline" is present. Add "sharp features" if needed.

### Problem: Looks like anime/manga
**Solution:** Check negative prompts include "--no anime, manga, cute, chibi." Add "Western cartoon style" if needed.

### Problem: Looks like political caricature
**Solution:** Remove age-related descriptors. Ensure "like animation concept art" is present. This phrase steers away from editorial cartoon toward cleaner animation style.

### Problem: Character looks too young/childlike
**Solution:** Avoid "big eyes" or "wide eyes" for non-anxious characters. Use "adult proportions" and describe professional clothing.

### Problem: Background is not pure white (gray, cream, textured)
**Solution:** Ensure prompt includes "on pure white background" and negative prompts include "--no background texture, gray background, off-white background, paper texture, vignette, gradient background, shadows on background." The style reference images have off-white paper â€” the prompt language must override this.

### Problem: Darker-skinned characters have too much shading
**Solution:** Add "clean bold ink outlines and minimal shading" to character description. Add "--no heavy shading" to negatives. Rely on outlines and features rather than fill/tone to indicate skin tone.

### Problem: All characters look the same (same clothes, same build)
**Solution:** Vary clothing aggressively. Only ONE character per group should wear a tie. Use different tops (polo, cardigan, v-neck, button-up, sweater vest). Add distinct accessories (lanyard, glasses, watch). See Clothing Variety section.

---

## PLATFORM-SPECIFIC NOTES

### Nano Banana (NanoBanana)
- Responds well to this prompt structure
- Style reference images significantly improve consistency
- May need multiple generations to get ideal result
- Works best with tighter, more concise prompts

### DALL-E
- Can handle longer, more detailed prompts
- Produces the original mid-century color style well
- Good for reference image generation
- May have rate limits

---

## VERSION HISTORY

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | Jan 30, 2026 | Initial locked version |
| 2.0 | Feb 2, 2026 | Added: pure white background mandate, line weight anchors, OG Author as 3rd style reference, diversity guidelines, clothing variety guide, darker skin rendering guidance, background/shading troubleshooting |

---

## QUICK REFERENCE CARD

**ALWAYS INCLUDE:**
```
Stylized cartoon ink sketch, black and white
geometric angular face with pointed triangular nose, defined jawline
exaggerated cartoon proportions like animation concept art
loose confident pen strokes, bold consistent ink line weight, minimal hatching, simple bold shapes
single character on pure white background
```

**ALWAYS EXCLUDE:**
```
--no elderly, ancient, old, bulbous nose, round nose, sagging, jowls, wrinkles, realistic, caricature, political cartoon, crosshatching, detailed rendering, overworked, thin lines, scratchy lines, light pencil, faint lines, inconsistent line weight, background texture, gray background, off-white background, paper texture, vignette, gradient background, shadows on background, color, anime, manga, cute, chibi
```

**FOR DARKER-SKINNED CHARACTERS, ALSO ADD:**
```
Prompt: "dark skin with clean bold ink outlines and minimal shading"
Negatives: --no heavy shading
```

**ALWAYS ATTACH:** Benchmark style reference images #11, #14, AND OG Author (arms crossed smirk)