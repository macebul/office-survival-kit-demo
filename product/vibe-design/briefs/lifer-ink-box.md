# Design Brief: Lifer Ink Item Box

## Project Overview
- **Project:** Individual packaging design for the Lifer Ink temporary tattoos — a tuck-end box inside the Office Survival Kit gag gift
- **Date:** May 14, 2026 (created) / June 26, 2026 (last updated)
- **Requester:** Internal (product owner)
- **Designer(s):** TBD — this brief is the canonical reference document for all future handoffs, prompts, reviews, and stakeholder communication
- **Complexity:** Moderate — small surface area with established brand voice, but multiple components (box, tattoo designs, achievement card) and subjective comedy decisions requiring stakeholder feedback

### Purpose of This Document
This is the **single source of truth** for the Lifer Ink item box. Everything — design direction, copy, tattoo concepts, production specs, open decisions — lives here. When something changes after a review, it gets updated here. Every future prompt, designer handoff, coworker review, or AI-assisted session should reference this document.

### Current Project State (Updated June 26, 2026)
- **Box copy:** ALL copy LOCKED across all surfaces — 20 locked elements (LOCK-1 through LOCK-20) plus kept/borderline elements. Full panel-by-panel copy complete. See `product/copy/box-copy/lifer-ink-box-copy.md` and master working doc `product/copy/box-copy/lifer-ink-working-doc.md`.
- **Division:** Bureau of Permanent Records (DIV-1) — LOCKED June 24.
- **Tattoo designs:** Narrowed from 21 to **6 final designs** — LOCKED June 23. See Section 15 of working doc.
- **Achievement card:** Copy LOCKED for all 6 lines. Format: image + one-line commendation per tattoo. No follow-up copy.
- **Surface map:** Complete for all 9 surfaces (7 box + 2 blister card). See `product/copy/box-copy/lifer-ink-surface-map.md`.
- **Image prompts:** Updated for all surfaces with current locked copy and dark/red/white design system. See `product/image-prompts/lifer-ink-image-prompts.md` and `product/copy/box-copy/lifer-ink-mockup-prompts.md`.
- **Box renders:** Draft v01 complete (Midjourney-generated). These predate the copy updates and will need regeneration with current copy.
- **Production files:** Dielines (SVG/PDF) and templates exist (`production/dielines/`, `production/templates/`).
- **Visual direction:** Design system established (dark/black background, red accents, white condensed type) — consistent with Cubicle Shank. Final visual polish TBD.
- **Categories resolved:** ALL copy categories resolved, locked, or killed. No outstanding writing work. See Post-Sweep Summary in working doc.

### File Index
| Asset | Path | Status |
|-------|------|--------|
| This brief | `product/vibe-design/briefs/lifer-ink-box.md` | Active — canonical reference |
| Master working doc | `product/copy/box-copy/lifer-ink-working-doc.md` | Active — source of truth for all copy |
| Box copy (all surfaces) | `product/copy/box-copy/lifer-ink-box-copy.md` | Current — rebuilt June 26 from locked elements |
| Surface map | `product/copy/box-copy/lifer-ink-surface-map.md` | Current — all 9 surfaces mapped |
| Image prompts | `product/image-prompts/lifer-ink-image-prompts.md` | Current — rebuilt June 26, dark/red/white system |
| Mockup prompts | `product/copy/box-copy/lifer-ink-mockup-prompts.md` | Current — June 24, same content as image prompts |
| Brad voice guide | `product/copy/brad-copy-voice-guide.md` | Reference — locked |
| Starter brief | `product/vibe-design/briefs/00-STARTER-lifer-ink-box.md` | Archive — interview template |
| Box renders (draft) | `product/images/Items/Tats/Full/` | Draft v01 — predates copy updates |
| Dieline (SVG) | `production/dielines/lifer-ink-box.svg` | Production template |
| Dieline (PDF) | `production/dielines/lifer-ink-box.pdf` | Production template |
| Template (SVG) | `production/templates/lifer-ink-box-template.svg` | Production template |
| Template (PDF) | `production/templates/lifer-ink-box-template.pdf` | Production template |

---

## GOAL
*What needs to be different in the world because of this design.*

**The Task vs. The Goal:**
- **Task (what's being made):** A tuck-end box (~5" x 3.5" x 0.5"), 8-12 individual temporary tattoo designs, and an achievement card — all production-ready
- **Goal (what changes in reality):** The recipient picks up this box, laughs immediately, applies at least one tattoo during the unboxing session, and wears it to work the next day where it starts a conversation

**Before State --> After State:**
- **Before:** The recipient has just lifted Doc Set 1 off Tray 1 and sees items in die-cut recesses for the first time. They're scanning multiple boxes. They don't know what's inside this one. They may associate temporary tattoos with kids' birthday parties or bachelorette favors. If the box doesn't reframe that assumption fast, the tattoos stay unapplied forever.
- **After:** The recipient picks up the box, reads the front, and laughs. The concept clicks: prison tattoos as corporate commendations, and Brad thinks facial tattoos are workplace-appropriate. They open the box, look at the tattoo designs, read the achievement card, and pick one to apply immediately. The tattoo becomes a conversation piece at the office. Coworkers ask about it. The recipient explains the kit.

**Downstream Goal:**
- Get the tattoos onto skin, in public, generating conversations. Temporary tattoos only work as comedy if they're visible. The box must bridge the gap between "funny concept" and "I'm actually doing this right now."

**Upstream Goal Chain:**
- Recipient reads box and laughs --> Opens box, reads achievement card --> Picks a tattoo to apply --> Applies it during the unboxing session --> Wears it to work --> Coworker notices and asks --> Recipient explains the kit --> Shared laughter, social bonding --> Gift-giver looks great --> Product earns reviews, photos, word-of-mouth

**What Success Looks Like:**
- The front face lands a joke before the box is even opened
- The recipient reads copy aloud to whoever is watching
- The achievement card gets passed around — people start matching tattoos to coworkers
- At least one tattoo gets applied during the unboxing
- The tattoo generates a "where did you get that?" at work
- People photograph the tattoo on their arm alongside the box or card

**What Failure Looks Like:**
- The box reads as premium but not funny — it gets a polite nod, not a laugh
- The tattoos feel childish or tame — nobody actually applies one
- The concept doesn't click — "why are there tattoos in an office kit?"
- The box is visually indistinguishable from the Turf Tags box sitting right next to it
- The comedy is all on the box but the tattoos themselves aren't funny on skin
- The achievement card is an afterthought instead of a comedy surface

**Risk of Misalignment:**
- There's a critical comedy calibration at play. The LOCKED design direction says "subtle enough to actually wear to work" — but that's the joke Brad tells himself, not the actual design goal. Brad *thinks* a teardrop tattoo under the eye is a professional commendation. The recipient should look at the tattoo designs and think "this is hilarious" and want to apply one precisely because it's funny, not because it's tastefully subtle. The humor should make someone laugh and want to show people, not shrug and forget about it.

---

## AUDIENCE
*The specific humans whose state this design is trying to change.*

**Buyer vs. User:**
- **Are they the same person?** No — this is a gift product
- **The Buyer:** Already converted. Never sees this box in isolation.
- **The User:** The office worker receiving the gift. Discovers this box in Tray 1 alongside other items.
- **Optimizing for:** The recipient. The box must sell the tattoo concept to someone who didn't ask for temporary tattoos and might dismiss them if the framing doesn't land.

**Primary Audience: "The Lifer"**
- **Who they are:** Same as the kit's primary audience — an office worker who has been in the corporate world long enough to have opinions about meetings, printers, reply-all, and Kevin. They cope through humor.
- **Before State:**
  - *What they know:* By the time they pick up this box, they've already opened the briefcase and seen Doc Set 1. They understand the office-as-prison world. They're bought in.
  - *What they believe/assume:* Temporary tattoos are for kids or novelty shops. This could feel like filler. They need to be re-sold on the concept in the first 3 seconds.
  - *What they're trying to do:* Exploring kit items one by one, enjoying the reveal, looking for the next laugh.
- **The Gap:** Medium. The world is established, but temporary tattoos carry baggage. The box must reframe "temporary tattoos" as "hilarious corporate commendations that Brad thinks are professional" fast enough that dismissal never forms.
- **What would make them say "this is for me":** A joke that lands on the front face. Tattoo designs that are genuinely funny — the kind of thing you'd show someone, not hide. An achievement card that makes them say "oh my god, Dave in accounting has definitely earned this one."
- **What would make them say "this isn't for me":** Tame, forgettable designs. Anything that looks like face-painting supplies. Comedy that plays it safe. If the tattoos aren't funny enough to generate a reaction, they won't be applied.
- **Hidden Agenda:** They want permission to be playful at work. Applying a temporary tattoo is a small act of rebellion — but only if it's funny enough to justify. "It's from the survival kit" is the cover story. The tattoo itself needs to be the punchline.

**Secondary Audience: The Gift-Giver (watching the reveal)**
- Tattoos are the item most likely to generate an immediate physical action (applying one) during the reveal. That makes the gift-giver look great. The box needs to generate enough enthusiasm that application happens now, not "maybe later."

**Tertiary Audience: Coworkers (the next day)**
- The tattoo on skin IS the marketing. A visible tattoo at work generates the question. The question generates the story. The story generates interest in the kit. The tattoo designs must be legible and funny at conversational distance (~3-4 feet).

**Key Psychological Insight:**
- Temporary tattoos have an adoption barrier that stickers and cards don't. Cards get read. Stickers get stuck on things. Tattoos require the recipient to commit — apply water, wait, put something on their body. The box + achievement card must lower that barrier by making the concept so compelling and the designs so funny that application feels inevitable. The achievement card is the key mechanism: it turns "should I put this on?" into "which one did I earn?"

---

## CONTEXT
*The specific circumstances under which the audience will encounter this design.*

**Physical / Digital Environment:**
- **Where:** A desk, kitchen table, or break room during a gift-opening session
- **Discovery moment:** Tray 1 of the briefcase, wide back recess, alongside the Turf Tags box
- **Medium:** Physical object — small flat tuck-end box (~5" x 3.5" x 0.5"), held in one hand
- **Viewing distance:** Arm's length initially (~18-24"), then closer when reading (~12-14")
- **Environmental conditions:** Social — someone is probably watching

**Spatial Relationship:**
- Shares the wide back recess of Tray 1 with the Turf Tags box
- Both boxes are approximately the same size (~5" x 3.5" x 0.5")
- Both are flat-format tuck-end boxes, seen side by side simultaneously
- The Cubicle Shank (pen) box sits in the narrow front recess, separate from these two
- **Implication:** These two boxes are directly compared on first sight. They must feel related (same brand family) but immediately distinct.

**Sought vs. Served:**
- **Served, then Sought.** The recipient didn't go looking for this box — they discovered it in the tray. But once picked up, they're in sought mode. The front face must earn the pickup (served). Everything after that is sought — they chose to keep reading.

**Attention Available:**
- **Time window:** 15-30 seconds per item box during initial tray exploration. Extended reading happens only if the front face hooks them.
- **Competing stimuli:** Other Tray 1 items, the social setting, the urge to keep exploring the kit
- **Decision mode:** Experiential / discovery. No purchase decision.

**What's Inside the Box:**
- 6 individual temporary tattoos (individual cut-out sheets, not one big sheet) — LOCKED June 23
- 1 achievement card (~5" x 3.5" or largest size that fits) — one-line commendation per tattoo, copy LOCKED
- Tattoo sheet format: standard temporary tattoo transfer paper, water application

**Technical / Physical Constraints:**
- **Box type:** Tuck-end (~5" x 3.5" x 0.5")
- **Material:** Printed paperboard (14-18pt)
- **Print:** Full color, all 6 exterior sides
- **Interior space:** Mostly consumed by tattoo sheets + achievement card. Interior print is a nice-to-have, not a priority.
- **Brand system:** Brad Sterling / Elevate Co. retail branding — same family as all 6 item boxes
- **Character voice:** Brad Sterling (B.S.) — sole voice. Mode 1 (product copy) + Mode 2 (personal brand) — see `brad-copy-voice-guide.md`
- **Product name (Brad's rebrand):** Motivational Body Art Collection(TM) — LOCKED
- **Non-negotiables:**
  - Comedy rule: "Format stays buttoned-up, content gets unleashed"
  - The world is played straight — nobody comments on the prison metaphor
  - Brad Sterling sole voice — no secondary characters, no annotations
  - Brad genuinely thinks these tattoos are professional and workplace-appropriate. He is not in on the joke.

**Context Shifts:**
- **Primary:** In-tray discovery during gift reveal — first impression, quick scan
- **Secondary:** Held in hand, read closely — the recipient has picked it up and committed
- **Tertiary:** Desk display / re-read — box lives near the briefcase, gets re-read by coworkers
- **Quaternary:** Amazon listing photography — may appear in styled product photos

---

## COMPONENTS

This item box contains three distinct design surfaces that must work together:

### Component 1: The Box (6 exterior faces)
The packaging itself. Brad's Elevate Co. retail product box for the "Motivational Body Art Collection(TM)."

### Component 2: The Tattoo Designs (6 individual tattoos — LOCKED)
The actual temporary tattoos people apply to their skin. Each is a self-contained joke that must be funny at conversational distance (~3-4 feet) on someone's arm, wrist, or wherever they put it. Final 6 designs locked June 23: Teardrop, LIFER, Paper Airplane, Pen Through Tallies, Chalk Outline (Sandwich), Cell Block (Spreadsheet).

### Component 3: The Achievement Card (1 card, fits inside box — COPY LOCKED)
A card listing the office survival achievement you must complete to earn each tattoo. Format: tattoo image + one-line commendation. No follow-up copy, no taglines. Copy for all 6 lines locked. This is the mechanism that turns tattoo application into a game. Modeled on prison tattoo culture where specific tattoos are earned for specific acts — translated into Brad's corporate language with dual prison/office readings.

---

## THE BOX — EXISTING DRAFT EVALUATION

Draft renders exist for all 7 surfaces. Here's the evaluation based on the project goals:

### Front Face — COPY LOCKED (Updated June 26)
**Current locked copy:** "ELEVATE CO." / "Bureau of Permanent Records" (LOCK-12) / "LIFER INK™" (LOCK-2) / "Motivational Body Art Collection" (LOCK-3) / "Your career on file. And on your face." (LOCK-13) / "Goes on like confidence. Comes off like evidence." (LOCK-20) / "6 designs. 0 approved by HR. Which is how we knew they were good." (QTY-2b) / "DERMATOLOGIST RECOMMENDED / (By the receptionist. 'I don't see why not.') / She's been there 11 years." (LOCK-4/5)

**Design direction:** Dark/black background, red accent lines, white condensed type, red italic for tagline/subline. Design system matches Cubicle Shank packaging.

**What's working:**
- Division name "Bureau of Permanent Records" has three simultaneous layers: government records bureau, school "permanent record" threat, irony (tattoos are temporary)
- Brand subline "Your career on file. And on your face." creates a two-beat flip that plays off the division name
- Tagline "Goes on like confidence. Comes off like evidence." has strong parallel structure and a pivot from positive to incriminating
- "DERMATOLOGIST RECOMMENDED" seal with receptionist quote and "She's been there 11 years" adds specific character comedy
- Quantity line "6 designs. 0 approved by HR." is Brad-voice product copy with a Rule of Three

**Remaining work:** Visual execution — renders need regeneration with current copy and design system. The copy is locked; the design still needs final polish.

### Back Face — COPY LOCKED (Updated June 26)
**Current locked copy:** "OUR MOST DECORATED" header (LOCK-14). Karen Whitfield — Associate Account Manager (Formerly Assistant) — 3 Years (LOCK-15) with teardrop-earning quote (LOCK-16). Dennis Rourke — Senior Operations Analyst — 14 Years (Consecutive) (LOCK-17) with efficiency-thesis quote (LOCK-18). Brad quote: "I was going to get a real tattoo once..." (BRAD-13), attributed as "Brad Sterling, Chief of Permanent Records."

**What's working:**
- "OUR MOST DECORATED" does triple duty: honored with commendations / covered in tattoos / corporate recognition
- Karen and Dennis have distinct character voices: Karen = bright, eager, evangelical about the teardrop she earned (implying cubicle neighbor's disappearance). Dennis = strategic, measured, mentoring (tattoos as workplace efficiency tools). The contrast IS the comedy.
- Karen's "(Formerly Assistant)" implies promotion after neighbor's disappearance. Dennis's "(Consecutive)" notes 14 years like a prison sentence served without parole.
- Brad quote reframes avoidance of real tattoos as entrepreneurship — classic Mode 2.
- The key visual joke: professional corporate headshots of employees who happen to have prison tattoos, presented completely straight in employee-of-the-month format.

**Remaining work:** Photo execution remains the highest-risk element. Getting corporate headshots that look real with convincing tattoos needs exploration (AI-generated, illustrated, stylized photography). The copy and concept are locked; the visual execution is the open question.

### Top Long Edge (APPLICATION: CUT / WET / 30 SEC / DISPLAY) — STRONG
**What's working:** Clean, functional, funny. The airline safety card / laundry care aesthetic is perfect. "DISPLAY" as the final step instead of "done" or "enjoy" is a subtle joke — Brad's application process ends with showing it off, not personal satisfaction. Keep as-is with potential minor tweaks.

### Bottom Long Edge (IF SWALLOWED...) — STRONG
**What's working:** "IF SWALLOWED, CONTACT YOUR SUPERVISOR. NOT BECAUSE IT'S DANGEROUS. BECAUSE WE HAVE QUESTIONS." is the single funniest line on the box. Pharmaceutical safety warning format played perfectly straight. Keep as-is.

### Short Side A (Laundry Care Symbols) — STRONG
**What's working:** Four standard textile care symbols, all with X marks (do not wash, do not iron, etc.). No text, no explanation. The joke is that these symbols are on a temporary tattoo box — format fidelity at its best. Keep as-is.

### Short Side B (PERMANENT RECORD stamp) — STRONG
**What's working:** Institutional rubber stamp aesthetic. "PERMANENT RECORD" on a temporary tattoo box. The irony is the joke. Keep as-is.

### Tuck Flap (BOLD. BRAVE. WASHABLE.) — STRONG
**What's working:** Three-word Brad tagline discovered when opening the box. The deflation from "BOLD. BRAVE." to "WASHABLE." is a perfect comedy beat. This is the transition moment from box to contents. Keep as-is.

### Hero Shot (3/4 Angle) — USEFUL FOR REFERENCE
The 3/4 hero render shows the box in context with moody lighting. Useful for visualization and stakeholder communication, not a production asset.

---

## TATTOO DESIGNS — FINAL 6 (LOCKED June 23)

### Count: 6 individual tattoos
### Format: Individual cut-out sheets (not one combined sheet)
### Physical: Standard temporary tattoo transfer paper, water application

### Design Direction (LOCKED)
The official design direction says "subtle enough to actually wear to work." **This is the joke Brad tells himself.** The actual design goal is: **genuinely funny tattoos that make someone laugh and want to apply one immediately.** They should generate "where did you get that?" — not be forgettable.

Brad presents these as professional commendations. The comedy is that he genuinely believes a teardrop face tattoo is workplace-appropriate if it's "earned." The tattoos should be funny enough that someone actually wants to wear one — the humor itself is the motivation to apply.

### Final 6 Designs (LOCKED)

| ID | Design | Visual Description | Size | Achievement Line (LOCKED) |
|---|---|---|---|---|
| TATT-1 | Teardrop | Classic teardrop under the eye | Small (~3cm) | One for every name they — or you — crossed off the list. |
| TATT-2 | LIFER | Block letters across knuckles | Small (3-4cm) | For employees whose sentence has no end date. |
| TATT-3 | Paper Airplane | Paper airplane in flight | Small-med (4-5cm) | For anyone who's updated their credentials while still on the inside. |
| TATT-4 | Pen Through Tallies | Ballpoint pen stabbed through tally marks. Cubicle Shank crossover. | Medium (4-5cm) | For keeping score with something sharper than necessary. |
| TATT-5 | Chalk Outline (Sandwich) | Crime-scene chalk outline of a sandwich | Medium (5-6cm) | Issued upon the confirmed loss of a labeled food item. |
| TATT-6 | Cell Block (Spreadsheet) | Stick figure trapped in a spreadsheet cell, gripping the borders. Alternating row colors. Landscape. | Medium-large | For doing hard time in someone else's cell. |

### What Makes These Work
Every achievement line uses the same engine: **prison language that simultaneously reads as office language.** "Sentence" = prison sentence / employment tenure. "Credentials" = prison reputation / resume. "Cell" = prison cell / spreadsheet cell. "Labeled" = named food / marked evidence. "Crossed off the list" = layoff list / hit list. The reader's brain does the flip without being told.

### Selection History
Narrowed from 21 original concepts + new concepts developed in June 22-23 sessions. Primary filter: "laugh, not nod" — a tattoo that gets recognition ("oh that's clever") fails; it must trigger an actual laugh at conversational distance on someone's skin. 15 original concepts killed, 2 conditionally killed. 2 new concepts added (Cell Block, Pen Through Tallies). See Section 15 of working doc for full evaluation history.

### Key Learnings from Tattoo Development
- **Image-first comedy:** The visual must be funny before any copy is read. If the concept needs explanation, it doesn't work as a tattoo.
- **Physical constraints kill concepts:** At 5-7cm, anything requiring legible text + multiple visual elements + recognition of a specific reference has too many failure points.
- **Setup lines stand alone:** Every attempt to add follow-up lines after a strong setup either explained the joke, repeated it, or got less funny. Format: image + one line. Period.
- **Stop grinding when stuck:** After 7+ batches of replacement concepts with diminishing returns, ship with fewer tattoos rather than force weak concepts to fill a quota.

---

## ACHIEVEMENT CARD — COPY LOCKED (June 23)

### Concept
A printed card inside the box that lists the commendation requirement for each tattoo — the office scenario you must survive to earn that ink. Every line uses prison language that simultaneously reads as office language.

### Format (LOCKED)
- **Size:** ~5" x 3.5" (same as box interior) or largest size that fits flat inside the box with tattoo sheets on top
- **Material:** Printed card stock — same weight/feel as the box
- **Layout:** Each tattoo paired with its one-line commendation. Image + one line per tattoo. No follow-up copy. No taglines.

### Final Copy (LOCKED — all 6 lines)

| Tattoo | Achievement Line |
|--------|-----------------|
| Teardrop | One for every name they — or you — crossed off the list. |
| LIFER | For employees whose sentence has no end date. |
| Paper Airplane | For anyone who's updated their credentials while still on the inside. |
| Pen Through Tallies | For keeping score with something sharper than necessary. |
| Chalk Outline (Sandwich) | Issued upon the confirmed loss of a labeled food item. |
| Cell Block (Spreadsheet) | For doing hard time in someone else's cell. |

### Development History
Follow-up joke lines (2-3 lines after setup) were attempted and rejected — every attempt either explained the joke, repeated it, or got less funny. Short caption taglines (3-10 words each) were also attempted and rejected — same dilution problem. The final format decision: image + one-line commendation. Nothing else. The setup lines work precisely because they're short and the reader's brain fills in the rest.

### Status: LOCKED — ready for design layout.

---

## PROBLEM IDENTIFICATION & PRIORITIZATION

**All problems this design must solve (updated June 26 — many resolved):**
1. ~~Land a joke on the front face immediately~~ — **RESOLVED.** Tagline, subline, seal, and quantity line all deliver comedy. Multiple locked jokes above the fine print.
2. Make the recipient actually apply a tattoo (overcome the adoption barrier) — **ONGOING design/execution concern**
3. ~~Reframe "temporary tattoos" from childish to hilarious corporate commendations~~ — **RESOLVED.** Copy does this across all surfaces.
4. Execute the back face "Distinguished Honorees" concept at quality — **OPEN.** Copy locked. Photo execution remains highest-risk element.
5. ~~Narrow 21 tattoo concepts to 8-12~~ — **RESOLVED.** Narrowed to 6 final designs. LOCKED June 23.
6. ~~Write the achievement card copy~~ — **RESOLVED.** All 6 lines LOCKED.
7. ~~Write full panel-by-panel box copy~~ — **RESOLVED.** All copy LOCKED across all 9 surfaces (7 box + 2 blister card).
8. Differentiate visually from Turf Tags box — **OPEN.** Copy differentiation exists. Visual differentiation TBD.
9. ~~Maintain Brad's two-mode voice across all surfaces~~ — **RESOLVED.** WY voice sweep completed June 19-24.
10. ~~Fit achievement card + tattoo sheets inside box~~ — **SIMPLIFIED.** 6 tattoos (not 8-12) + 1 card. Easier fit.

**Causal Chain (Attention > Message > Action):**

1. **ATTENTION: The box must earn the pickup** *(If we fail here, tattoos stay in the tray)*
   - Recipient is scanning Tray 1 — multiple items in recesses. This flat box is one of two similarly-sized boxes in the wide back recess. It must differentiate from Turf Tags at a glance.
   - Competing with: Turf Tags box (same recess), Cubicle Shank box (front recess), the urge to keep exploring

2. **MESSAGE (Primary): This is immediately funny — and it's earned ink**
   - The front face must land a joke within 3 seconds. "Lifer Ink" as a name helps, but the layout and supporting copy need to deliver the laugh, not just the premium feel. Brad thinks temporary face tattoos are professional achievements — that absurdity should be accessible on the front, not saved for the back.
   - The audience's before state: they might dismiss temporary tattoos. The immediate humor intercepts that dismissal.

3. **MESSAGE (Secondary): These tattoos are ones you'd actually apply**
   - If the front face concept lands, the next question is "but would I actually put one on?" The achievement card is the answer — it reframes application as "which one did I earn?" instead of "should I bother?" The box copy should signal that the designs are genuinely funny and the application process is part of the joke.

4. **MESSAGE (Tertiary): Brad thinks this is a real corporate program**
   - The back face (Distinguished Honorees or equivalent) and Brad's presence demonstrate that he genuinely believes this is a professional achievement system. The gap between Brad's sincerity and the absurdity of the product is the comedy engine for the entire box.

5. **ACTION: Apply a tattoo now — during the unboxing, not later**
   - The desired action is physical and immediate. The achievement card creates the game mechanic ("which one did you earn?"). The application instructions on the top edge lower the friction ("CUT / WET / 30 SEC / DISPLAY"). If the recipient sets the box aside for "later," the tattoos may never get applied.

---

## MESSAGES & CONSTRAINTS

**Specific messages to convey (prioritized):**
1. **Immediate comedy** — The front face lands a joke before the box is opened
2. **Product identity** — "Lifer Ink" / "Motivational Body Art Collection(TM)" — what's inside
3. **Concept framing** — Corporate commendations in the form of temporary tattoos. Brad thinks this is professional. The recipient thinks this is hilarious.
4. **World consistency** — Same Brad Sterling / Elevate Co. retail packaging as every other item box
5. **Application activation** — The achievement card + application instructions make applying a tattoo feel like an obvious, immediate next step
6. **Brad's dual voice** — Mode 1 (competent product copy) on functional surfaces, Mode 2 (delusional personal brand) on branding and founder content. The gap between the two is the joke.

**Constraints:**
- **Budget:** TBD — part of the gang-run with all 6 item boxes. Achievement card is additional COGS (single printed card, near-zero incremental cost if produced alongside other print components).
- **Format/size:** ~5" x 3.5" x 0.5" tuck-end box. Six printable exterior faces. Interior print is a nice-to-have.
- **Companion box:** Must coordinate visually with Turf Tags (same recess, same dimensions) while remaining distinct. Tattoos vs. stickers. Body art vs. workspace marking.
- **Voice:** Brad Sterling only. See `brad-copy-voice-guide.md`.
- **Copy status:** ALL copy LOCKED across all surfaces. Achievement card copy LOCKED. See working doc for full LOCK ID reference.
- **Stakeholder review required:** Boss and coworkers need to review box design, tattoo selection, and comedy before final decisions. The brief should support that review — anyone reading it should understand the full concept without explanation.

---

## OPEN QUESTIONS (Updated June 26)

**Resolved questions marked with ~~strikethrough~~. Remaining open questions below.**

### Box Design
- [x] ~~Front face revision~~ — **RESOLVED.** Full copy locked with multiple comedy beats. Design system established (dark/red/white).
- [ ] Back face execution: Can the "Distinguished Honorees" photos be executed at quality? Explore alternatives to AI-generated photorealistic portraits (illustrated portraits, stylized photography, different approach). **Copy is locked; photo execution is the remaining risk.**
- [x] ~~Full box copy~~ — **RESOLVED.** All copy locked across all 9 surfaces. See `lifer-ink-box-copy.md`.
- [ ] How do Lifer Ink and Turf Tags differentiate visually? Both use the same dark/red/white system. Visual differentiation TBD.
- [x] ~~"Contains [X] Commendations"~~ — **RESOLVED.** 6 designs. Quantity line locked as QTY-2b.

### Tattoo Designs
- [x] ~~Narrow concepts to final set~~ — **RESOLVED.** 6 final designs locked June 23.
- [ ] Final artwork for selected designs — who creates this? (Internal, freelance illustrator, AI-assisted?)
- [x] ~~Individual tattoo sizes~~ — **RESOLVED.** Mix of small (~3cm) to medium-large. See final 6 table.
- [x] ~~Text on tattoo vs. image-only~~ — **RESOLVED.** TATT-2 ("LIFER") includes text; others are image-only. Copy lives on achievement card.

### Achievement Card
- [x] ~~Full copy writing~~ — **RESOLVED.** All 6 lines locked.
- [ ] Card size confirmation — largest that fits flat inside the box with 6 tattoo sheets
- [ ] Single-sided or double-sided print?
- [ ] Card title/header — TBD

### Production
- [ ] Individual tattoo sheets vs. kiss-cut backing sheet — get recommendation from tattoo printer for 6 designs in this box size
- [ ] Achievement card paper stock — should it match the box material or feel different?
- [ ] Interior box print — worth the cost, or keep the budget for better tattoo print quality?
- [ ] Can the achievement card and tattoo sheets be produced by the same print supplier?

### Stakeholder Review
- [ ] Schedule review session with boss and coworkers — they need to see: updated box renders (with current copy), final tattoo designs, achievement card, and this brief
- [ ] Boss has not reviewed any Lifer Ink copy beyond the v01 blanket rejection. All current copy is session-locked, not boss-approved.

**Validated assumptions:**
- 6 tattoo sheets + 1 achievement card fits comfortably in a 5" x 3.5" x 0.5" box (reduced from 8-12).
- Brad's retail branding follows the dark/red/white design system established by Cubicle Shank.
- The achievement card is near-zero incremental COGS when produced alongside other print components.
- "Lifer" is used in its affectionate/earned sense — the comedy comes from Brad's framing, not from mocking tenure.

---
---

# Recommended Approach: Lifer Ink Item Box

## Strategic Direction

**Recommended overall approach:**
The Lifer Ink box is a premium corporate award package for temporary tattoos — played completely straight by Brad, who genuinely believes he's created a professional achievement program. The comedy lives in three layers: (1) the box format is ceremonial and prestigious while the content is absurd, (2) Brad thinks face tattoos are workplace-appropriate professional commendations, and (3) the achievement card turns "should I apply a temporary tattoo?" into "which one did I earn?"

The box must be immediately funny on the front face, not just premium. The current draft nails the premium register but buries the comedy in fine print. The revision should bring a joke up to where it hits in the first 3 seconds — without sacrificing the quality feel.

**Rationale:**
- **Given the goal:** The box must overcome the temporary tattoo adoption barrier. Premium packaging alone doesn't do this — humor does. The recipient must laugh first, then apply. The achievement card is the key conversion mechanism.
- **Given the audience's before state:** They may dismiss temporary tattoos. The front face's immediate joke intercepts that dismissal. The back face's "Distinguished Honorees" concept (Brad showcasing employees with visible tattoos as professional achievements) reinforces the absurdity.
- **Given the context:** Social gift-opening with 15-30 seconds of attention per item. The front face gets 3 seconds to earn a pickup. The achievement card gets passed around the group and turns application into a social game.

**Design principles for this project:**
- **Immediately funny AND premium.** These are not in conflict. The format is the straight man; the content is the comedian. The box should look like it costs more than it does AND land a joke on the front face.
- **Brad doesn't know it's funny.** Every element is something Brad genuinely produced for his corporate achievement program. He is sincere. He is proud. He is wrong. That gap is the comedy.
- **The tattoos are the payoff.** The box sells the concept. The achievement card creates the game. The tattoos deliver the joke on skin. All three must be funny independently, and funnier together.
- **Each tattoo stands alone.** No cross-references to other kit items needed. A coworker who sees the tattoo at work should get the joke without knowing about the kit.
- **Activate, don't display.** Every design choice should lower the barrier to application. The achievement card turns "should I?" into "which one?" The application instructions make it feel easy and fast.

## Action Plan (Updated June 26)

**Phase 1: Stakeholder Alignment** — ~~PENDING~~
- ~~Share this brief with boss and coworkers~~ — Brief updated. Ready for review.
- ~~Present the 21 tattoo concepts~~ — Narrowed to 6, locked. Ready for review.
- Boss has not reviewed any copy beyond v01 blanket rejection. Session is needed.

**Phase 2: Tattoo Selection & Achievement Card** — **COMPLETE**
- ✅ Narrowed to 6 final tattoo designs (from 21 original + new concepts)
- ✅ Achievement card copy locked for all 6 lines
- ✅ Individual tattoo sizes determined
- ✅ Format locked: image + one-line commendation per tattoo

**Phase 3: Front Face Revision** — **COMPLETE (copy)**
- ✅ Front face copy locked with multiple comedy beats above fine print
- ✅ Division name, subline, tagline, seal, quantity line all locked
- Remaining: Visual execution with current copy. Renders need regeneration.

**Phase 4: Full Box Copy & Back Face Resolution** — **COMPLETE (copy)**
- ✅ Full panel-by-panel copy locked for all 9 surfaces (7 box + 2 blister card)
- ✅ Back face copy locked: OUR MOST DECORATED + Karen/Dennis + Brad
- Remaining: Back face photo execution (highest-risk production element)

**Phase 5: Visual Differentiation (with Turf Tags)** — OPEN
- Define how Lifer Ink and Turf Tags differentiate within the shared design system
- Both use dark/red/white — need visual distinction beyond copy differences
- Test both boxes side by side at actual scale

**Phase 6: Production Design & Review** — OPEN
- Design all surfaces at production dimensions using dieline templates
- Design achievement card at final size
- Commission or create final tattoo artwork for 6 selected designs
- Resolve back face photo execution approach
- Review all components together: box + card + tattoos as complete package
- Print at 100% scale for physical review

**Key remaining milestones:**
- Boss review of locked copy (all copy is session-locked, not boss-approved)
- Back face photo execution resolved
- Visual differentiation from Turf Tags locked
- Final tattoo artwork commissioned
- Physical proof from manufacturer

## Resources Needed

**From design team:**
- Packaging designer familiar with tuck-end box construction and print-ready file prep
- Illustrator or tattoo artist for final tattoo designs (6 individual designs, clean line art)
- Same designer should ideally work on both Lifer Ink and Turf Tags for coordinated differentiation
- Photo execution for Distinguished Honorees (back face) — corporate headshots with tattoos

**From product owner / stakeholders:**
- Stakeholder review session — boss needs to review all locked copy (has not seen anything since v01)
- Back face photo approach approval
- Sign-off before production

**From copywriter:**
- ~~All copy work is complete.~~ No outstanding copy tasks. All surfaces locked.

**External resources:**
- Box manufacturer: print area templates, bleed requirements, tuck-end fold tolerances
- Tattoo printer: recommendation on individual sheets vs. kiss-cut, print quality samples, file format requirements, size constraints
- Print proof / physical samples of box + card + tattoos

## Risks & Mitigations

| Risk | Likelihood | Impact | Mitigation | Status |
|------|-----------|--------|------------|--------|
| Tattoo designs aren't funny enough — nobody applies them | Medium | Critical | Stakeholder gut-check needed. 6 final designs locked based on "laugh, not nod" filter across 10+ evaluation batches. | Designs locked — needs boss review |
| Back face AI portraits can't be executed at quality | High | Medium | Have backup plan: illustrated portraits, stylized photography, or different approach. Don't invest in photorealistic approach until a test proves it works. | **OPEN — highest-risk element** |
| Stakeholder review kills momentum | Medium | Medium | Structure review session with locked copy as foundation. Most creative decisions are made — review is validation, not starting over. | Pending boss review |
| Lifer Ink and Turf Tags look identical in the tray | Medium | Medium | Design both boxes simultaneously. Both use dark/red/white — need visual differentiation strategy. | **OPEN** |
| Boss rejects locked copy | Medium | High | All copy developed through 8+ rounds of WY voice sweep and iterative refinement. Quality bar set by Cubicle Shank. If rejected, working doc preserves development history for efficient revision. | Pending boss review |
| ~~Front face revision loses premium feel~~ | ~~Medium~~ | ~~High~~ | | **RESOLVED** — copy locked, format stays premium |
| ~~Achievement card copy is hard to write~~ | ~~Medium~~ | ~~Medium~~ | | **RESOLVED** — all 6 lines locked |
| ~~8-12 tattoo sheets don't fit~~ | ~~Low~~ | ~~High~~ | | **RESOLVED** — reduced to 6 |
| ~~Box copy voice doesn't match~~ | ~~Low~~ | ~~Medium~~ | | **RESOLVED** — WY voice sweep completed |

---

## CHANGELOG

| Date | Change | Author |
|------|--------|--------|
| May 14, 2026 | Initial brief created via DesignClarity interview process. Evaluated existing draft renders. Documented 21 tattoo concepts, achievement card concept, and full project state. | DesignClarity / Claude |
| June 26, 2026 | Comprehensive update to reflect current project state. Updated: Current Project State, File Index, Components (6 tattoos not 8-12), Front Face (locked copy with current LOCK IDs), Back Face (locked copy with current Karen/Dennis/Brad), Tattoo Designs (21 concepts → 6 final locked), Achievement Card (copy locked for all 6 lines), Problem Identification (7 of 10 resolved), Open Questions (many resolved), Action Plan (Phases 2-4 complete), Resources Needed (no copy work remaining), Risks (4 resolved). All copy now traces to LOCK IDs from working doc. | Claude |
