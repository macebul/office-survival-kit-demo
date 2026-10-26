# Cubicle Shank — Copy Review Session

**Purpose:** Paste this into a fresh Claude session. The task is to review ALL finalized Cubicle Shank copy against the comedy writing system and identify what's strong enough to ship, what needs revision, and what should be cut or replaced.

**This is a REVIEW session, not a generation session.** The goal is honest quality assessment of existing locked/kept material — not producing new lines (unless a specific replacement is needed for something that fails review).

---

## BEFORE YOU DO ANYTHING

1. **Read the comedy-writing rules file** at `.claude/rules/comedy-writing.md` — this is the complete enforcement layer. It contains hard rules, the 7 mechanical rules, the voice requirements, the peppiness requirement, the lessons learned, design principles, quality benchmarks, and the full review checklist.

2. **Read the Cubicle Shank surface map** at `product/copy/box-copy/cubicle-shank-surface-map.md` — this is the CURRENT SOURCE OF TRUTH. Every word of copy designated for the final card is in this document.

3. **Read the Cubicle Shank working doc** at `product/copy/box-copy/cubicle-shank-working-doc.md` — this contains ALL material developed across every session, including bench/inventory lines, cut material with reasons, comedy mechanics notes, and the full session history.

4. **Read the world rules** at `product/copy/world-rules.md` and **Brad voice guide** at `product/copy/brad-copy-voice-guide.md` for voice and world reference.

---

## THE PRODUCT

**Cubicle Shank** — a regular ballpoint pen marketed as a tactical weapon. One item in the Office Survival Kit briefcase, sold on Amazon under the **Witty Yeti** brand.

**In-world brand:** Elevate Co., run by Brad Sterling
**Division:** O3 — Office Offense Outfitters
**Brad's rebrand:** Executive Tactical Stylus(TM)
**Package format:** L-shaped carded blister pack (13.25" x 10.75", 18pt matte black paperboard, clear PETG blister holding one tactical ballpoint pen). NO side panels, NO tray, NO sleeve, NO interior tray.
**Physical constraint:** This pen has NO CAP. All cap-related jokes are dead.

---

## WHAT THE BOSS HAS ACTUALLY APPROVED

Only 2 lines in the entire project have received explicit boss approval:

1. "Other pens leak in your pocket. This one doesn't leak anywhere. Not in your pocket. Not in your hand. Not in Kevin. Completely leak-proof design." — **"really good"**

2. CUSTOMER QUESTION: "Does it come in red?" ANSWER: Eventually. — **"excellent"**

**Everything else is session-locked or kept — NOT boss-approved.** Silence from the boss = rejection.

**Boss structural feedback:**
- Rule of three: "Normal, normal, crazy. Three of the same category isn't funny."
- Setup: "A user who is using the product normally, and then it turns [dark] is the right setup/structure."
- Boss wants it DARK, delivered with warmth. Not tame.
- The entire v01 was rejected: "not funny enough."

---

## REVIEW TASK

For every element in the surface map, evaluate:

### 1. Comedy Quality
- Does it follow the 7 mechanical rules? (punchline last, real format, concrete punchline word, talk to buyer, cheerful about alarming, no directing threats, rule of three)
- Does it pass the Kill-On-Sight checks? (no stated violence, no buttons, no winking, no leading with violence, no office observations, no leaving the world)
- Does it clear the quality bar set by the WY benchmarks (Shart Kit, Dehydrated Water, Child Chucker)?
- Would the boss approve this based on the pattern of what he's liked vs. rejected?
- Run the full review checklist from `.claude/rules/comedy-writing.md` against every line

### 2. Voice Consistency
- Is the voice warm, cheerful, conspiratorial? Or has it drifted into dry/clinical/neutral territory?
- Does the peppiness requirement hold? (chatty, building, listing things off excitedly)
- Is the correct Brad mode used? (Product Copy Brad = competent; Personal Brand Brad = zero self-awareness)

### 3. Surface-Level Execution
- Does the copy fit the physical surface it's assigned to?
- Is there too much text for the available space?
- Does the visual hierarchy work? (hero text > subtitle > body > fine print)
- Are there density issues (too many jokes competing on one surface, or a surface that's underdeveloped)?

### 4. Cross-Element Coherence
- Do the elements work together or fight each other?
- Is there variety in comedy mechanics across elements, or does the same trick repeat?
- Do the character references (Kevin, Carl, Doug, Edith) land without overusing any one character?
- Does the card tell a coherent "story" when read front-to-back?

---

## REVIEW FORMAT

For each surface map element, provide:

```
### Element [#]: [Name]

**Copy:** [exact copy from surface map]

**Rating:** SHIP / REVISE / REPLACE / CUT

**Humor Elements:** [which 2+ of Clever/Bizarre/Cruel/Naughty/Recognizable/Cute]

**What works:** [specific strengths — be concrete]

**What doesn't work:** [specific weaknesses — be honest]

**Recommendation:** [if REVISE or REPLACE, what direction. If CUT, why. If SHIP, what makes it strong enough.]
```

After reviewing all elements individually, provide:

### Overall Assessment
- **Card Front:** Grade (A through F) + 2-3 sentence summary
- **Card Back:** Grade + summary
- **Hidden/Under-Blister:** Grade + summary
- **Cross-element issues:** Anything that emerges when reading the full card as a unit

### Priority Actions
Numbered list of the most impactful changes, ordered by how much they'd improve the card.

### Bench Players
Lines from the working doc's KEEP/MAYBE/INVENTORY pools that are stronger than anything currently on the surface map and should be swapped in. Quote the exact lines.

---

## KNOWN ISSUES TO WATCH FOR

These were flagged in the full-kit audit and prior reviews:

1. **The comparison chart is the comedy centerpiece** — it needs to be bulletproof. Review every cell. Some cells may rely too heavily on the "actually" qualifier pattern (3 uses across the chart: "Aerodynamic, actually" / "Writes beautifully, actually" / "They'll be carried, actually").

2. **Row 38 references a cap** ("Cap on when not in use") — this pen has NO CAP. If this row made the surface map, it's a factual error.

3. **The Assisted Shiving element** is a strong concept but execution risk is high — does the nursing home comedy lane work when compressed to a small badge-size element on a pen card?

4. **Doug footnote complexity** — the Premium Experience footnote has three versions (full, condensed, Doug-only). Which one made the surface map, and does it fit the physical space?

5. **Subtitle redundancy** — SUB-1 ("The pen that ends sentences") and SUB-3 ("Excalibur had a stone") are both locked. Only one should be the primary subtitle. Is the placement decision clear?

6. **Tagline count** — TAG-1 (archived), TAG-2 (chain pun), TAG-3 (smooth criminal), and the Primary Tagline (writes in black / moonlights in red) are all locked. How many actually fit on the card? Are they competing for attention?

7. **Voice drift** — some elements may have drifted into the dry/clinical tone that the boss rejected in v01. Check every element against the peppiness requirement.

---

## FILES TO READ (priority order)

| Priority | File | What It Contains |
|----------|------|-----------------|
| 1 | `.claude/rules/comedy-writing.md` | Comedy enforcement rules (UPDATED — complete system) |
| 2 | `product/copy/box-copy/cubicle-shank-surface-map.md` | Source of truth — every word designated for the card |
| 3 | `product/copy/box-copy/cubicle-shank-working-doc.md` | ALL material, all sessions, bench/inventory lines |
| 4 | `product/copy/world-rules.md` | World rules, vocabulary, tone |
| 5 | `product/copy/brad-copy-voice-guide.md` | Brad's two modes, comedy gradient |
| 6 | `product/images/0 - Images/v02/Pen - Cubicle Shank/` | Current mockup images (v02) |

---

## HOW TO START

> Read all the files listed above. Then go through the surface map element by element, using the review format described in the REVIEW FORMAT section. Be ruthlessly honest. The goal is to identify what's actually funny enough to ship — not to confirm that everything is fine. If something doesn't clear the bar, say so and explain why.

---

*End of review session prompt.*
