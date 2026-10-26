> **⚠ SUPERSEDED (June 2026):** The compartment cover described in this brief has been removed from the product. The interior now uses a flat blister pack stacking system with no dividers or compartment covers. This document is retained for design history only. See `product/specs/packaging-spec-v11.md` for the current interior layout spec.

# Design Brief: Compartment Cover

## Project Overview
- **Project:** Design for the J-shaped compartment cover — the interior surface that conceals the hidden mug compartment inside the Office Survival Kit
- **Date:** May 14, 2026
- **Requester:** Internal (product owner)
- **Designer(s):** TBD — this brief is the canonical reference document for all future handoffs, prompts, reviews, and stakeholder communication
- **Complexity:** Complex — 3 distinct printable surfaces seen at different moments in the experience, plus a hidden floor flap. Narrative sequencing across the entire unboxing. The underside is the kit's penultimate comedy beat.

### Purpose of This Document
This is the **single source of truth** for the compartment cover. Everything — design direction, copy, surface mapping, production specs, open decisions — lives here. When something changes after a review, it gets updated here. Every future prompt, designer handoff, coworker review, or AI-assisted session should reference this document.

### Current Project State
- **Design:** No visual design work started. No renders, no concepts, no image prompts.
- **Copy:** Draft directions exist in Copy Doc v7 (lines 303-317) for top and underside. Vertical wall copy direction has been **upgraded** from "minimal/blank" to "Brad's copy with progressive reveals" per product owner (this brief session). No final copy written for any surface.
- **Production files:** No dielines or templates created yet for this piece. Compartment cover dimensions are documented in Dimensions Spec v10.
- **Physical construction:** J-shaped rigid paperboard confirmed. Manufacturer consultation pending on attachment mechanism.

### File Index
| Asset | Path | Status |
|-------|------|--------|
| This brief | `product/vibe-design/briefs/compartment-cover.md` | Active — canonical reference |
| Starter brief | `product/vibe-design/briefs/00-STARTER-compartment-cover.md` | Archive — interview template |
| Copy doc (compartment cover section) | `product/copy/copy-doc-v7.md` (lines 303-317) | Draft directions only — copy TBD |
| Brand context | `product/vibe-design/shared/brand-context.md` | Reference — locked |
| Brad voice guide | `product/copy/brad-copy-voice-guide.md` | Reference — locked |
| Dimensions spec | `product/specs/dimensions-spec-v10.md` (lines 422-438) | Reference — physical specs |
| Packaging spec | `product/specs/packaging-spec-v9.md` (Section 7, Section 11) | Reference — narrative role |
| Concepts folder | `product/vibe-design/concepts/compartment-cover/` | Empty — placeholder for iterations |

### Important: Spec Updates Required
This brief documents several decisions that **diverge from the current Copy Doc v7 and Packaging Spec v9**. These specs need updating:

1. **Vertical wall:** Copy Doc v7 says "Minimal — institutional marking or blank. Not a primary copy surface." **Updated direction:** Active copy surface with Brad's branding and jokes, progressively revealed as trays are removed.
2. **Floor flap:** Not previously documented as a design surface. **New direction:** Printable surface, hidden under tray stack, revealed when trays are removed.
3. **Underside tone:** Copy Doc v7 draft direction was institutional ("RELEASE AUTHORIZED" / "PAROLE REVIEW" / "CLEARANCE GRANTED"). **Updated direction:** Funny Brad comedy beat — memorable, strong closer. Not institutional tension.
4. **Reveal sequence:** The full-briefcase divider sheet (between Doc Set 1 and Tray 1) is a newly confirmed element not yet in the specs.

---

## THE COMPARTMENT COVER — PHYSICAL DESCRIPTION

### What It Is
A single rigid paperboard piece with four distinct zones formed by two 90-degree bends:

```
    ┌──────────────────────────────┐
    │                              │  ← FLAT TOP (facing up)
    │   Top Surface (~13.5" x ~4") │     Platform for Doc Set 2
    │   Both sides printable       │     Underside = penultimate reveal
    │                              │
    ├──────────────────────────────┤  ← BEND #1 (top edge)
    │                              │
    │   VERTICAL WALL              │  ← Zone separator / divider
    │   (~13.5" wide x ~4.16" tall)│     Visible from front zone
    │   Front face printable       │     Progressive reveal with tray removal
    │                              │
    ├──────────────────────────────┤  ← BEND #2 (bottom edge)
    │                              │
    │   FLOOR FLAP (~13.5" x ~3") │  ← Extends forward under tray stack
    │   Top face printable         │     Hidden until trays removed
    │                              │     Locks cover in place
    └──────────────────────────────┘
```

### Physical Specs
- **Material:** Rigid paperboard (~0.0625" / ~24pt)
- **Finish:** Dark carbon fiber texture (matching trays) — very dark charcoal with subtle metallic sheen
- **Accent:** Prison orange trim on top edge border (matching tray edge accents)
- **Top surface dimensions:** ~13.5" x ~4.0" (spans back zone opening)
- **Vertical wall height:** ~4.16" (full interior height from floor to top surface)
- **Floor flap depth:** ~3.0" forward into front zone (under tray stack)
- **Total printable surfaces:** 4 (top surface, underside of top surface, vertical wall front face, floor flap top face)
- **Mechanism:** Lift-off. Floor flap held in place by tray stack weight. Cannot be opened until both trays are removed.
- **Retention method:** Gravity + tray stack weight on floor flap. Manufacturer consultation pending on whether additional retention (magnets, friction fit, tab-and-slot) is needed.

---

## THE 4 PRINTABLE SURFACES — WHEN EACH IS SEEN

### Reveal Sequence (Confirmed)

| Step | Action | What's Seen |
|------|--------|-------------|
| 1 | Open briefcase lid | Inside lid surfaces visible |
| 2 | See Doc Set 1 | Full-footprint document on top of everything |
| 3 | Lift Doc Set 1 | Full-briefcase divider sheet (has copy/joke) |
| 4 | Lift divider sheet | Tray 1 visible (front) + **top ~half of vertical wall** visible (back) |
| 5 | Explore Tray 1 items | Cubicle Shank, Lifer Ink, Turf Tags in die-cut recesses |
| 6 | Lift Tray 1 | Tray 2 visible + **full vertical wall now revealed** (new copy exposed) |
| 7 | Explore Tray 2 items | Cell Talk, Rap Sheets, Sweet Nothings, Confiscated Stapler recess |
| 8 | Lift Tray 2 | **Floor flap revealed** + Doc Set 2 sitting on top surface + **top surface** teaser copy visible |
| 9 | Interact with Doc Set 2 | 16-page "Office Survival Manual Volume II" booklet |
| 10 | See flap markings | Clear "open me" indicators on the floor flap / top surface |
| 11 | Lift compartment cover flap | **Underside of flat top revealed** — penultimate comedy beat |
| 12 | See hidden mug compartment | Mug Shot in shredded "CLASSIFIED" paper. Final reveal. |

### Surface Map

| # | Surface | Dimensions (est.) | When First Seen | Role | Priority |
|---|---------|-------------------|-----------------|------|----------|
| 1 | **Vertical wall (front face)** | ~13.5" x ~4.16" | Step 4 (partially) / Step 6 (fully) | Background → progressive reveal. Brad's copy, jokes, branding. Ambient during tray exploration, rewarding when read closely. | Medium-High |
| 2 | **Top surface (facing up)** | ~13.5" x ~4.0" | Step 8 (after Tray 2 removed) | Platform for Doc Set 2. Teaser copy visible around/under Doc Set 2 edges. Must signal "something is below — lift me." | Medium |
| 3 | **Floor flap (top face)** | ~13.5" x ~3.0" | Step 8 (after Tray 2 removed) | Previously hidden. Now visible for the first time. Could carry copy or serve as part of the "open" mechanism signaling. | Low-Medium |
| 4 | **Underside of flat top** | ~13.5" x ~4.0" | Step 11 (when cover is lifted) | **The penultimate reveal.** Last thing seen before the mug. Must be a strong, funny, memorable Brad comedy beat. | **Critical** |

---

## GOAL
*What needs to be different in the world because of this design.*

**The Task vs. The Goal:**
- **Task (what's being made):** Production-ready artwork for all 4 printable surfaces of a J-shaped rigid paperboard compartment cover, plus copy for each surface
- **Goal (what changes in reality):** The compartment cover makes every layer of the unboxing feel purposeful and designed. The vertical wall rewards attention throughout the tray reveals. The top surface builds anticipation. The underside delivers a memorable comedy beat that makes lifting the cover feel like a climactic moment — so that when the hidden mug is revealed, it lands as a genuine surprise earned through the entire unboxing journey.

**Before State → After State:**
- **Before:** The recipient has explored both trays, interacted with 7 item boxes, discovered the Confiscated Stapler recess, and read Doc Set 2. They've been having a great time. They've seen the vertical wall in the background the whole time. Now both trays are gone and they see the top surface and the floor flap. They might think they've found everything. Or they might suspect something more is hidden. Either way, they haven't found the mug yet.
- **After:** The top surface copy makes it clear: there's something below. The flap lifts. The underside hits them with a Brad Sterling comedy beat strong enough to be the last joke they remember from the entire unboxing. Then the mug appears in shredded CLASSIFIED paper. The reveal sequence pays off. The recipient feels like they found something they earned — not something that was just sitting there.

**Downstream Goal:**
- The mug reveal is the emotional climax. The compartment cover's job is to make that climax feel earned. If the cover is just a blank slab that lifts off, the mug is a thing sitting in a box. If the cover has been building toward this moment across all four surfaces, the mug is a discovery.

**Upstream Goal Chain:**
- Recipient notices vertical wall copy during tray exploration (ambient engagement) → Reads more wall copy after Tray 1 is removed (progressive reward) → Lifts Tray 2, sees top surface teaser + floor flap (anticipation builds) → Interacts with Doc Set 2 → Sees "open" signals → Lifts cover → Underside comedy beat lands (memorable laugh) → Mug revealed → Emotional payoff → "There was a HIDDEN COMPARTMENT?" → Photos, sharing, retelling → Gift-giver is a hero → Reviews mention the hidden mug

**What Success Looks Like:**
- The vertical wall gets noticed during tray exploration — someone reads a line aloud
- After removing Tray 1, the newly revealed wall copy gets a reaction ("oh there's more down here")
- The top surface teaser creates a clear "wait, what's under this?" moment
- The underside comedy beat gets a laugh — a genuine, audible, quotable laugh
- The mug reveal feels like a surprise even if the recipient suspected something was hidden
- When retelling the unboxing, the recipient mentions the hidden compartment as a highlight

**What Failure Looks Like:**
- The vertical wall is ignored — it reads as structural, not designed
- The top surface doesn't signal anything is hidden — the recipient doesn't think to lift it
- The underside is forgettable — a missed opportunity before the biggest reveal
- The mug reveal feels flat because there was no buildup
- The cover feels like packaging, not part of the experience
- The progressive reveal on the vertical wall doesn't land because the copy isn't interesting enough to read during the excitement of tray exploration

**Risk of Misalignment:**
- This is a pacing piece, not a standalone comedy piece. The compartment cover doesn't need to be the funniest surface in the kit — it needs to be the best-sequenced. Each surface appears at a specific moment in the unboxing and must serve that moment. The vertical wall is ambient background that rewards attention. The top surface is a transition from "exploring items" to "there's something hidden." The underside is the comedy exclamation point before the visual punchline (the mug). If any surface is designed for the wrong moment — too loud when it should be ambient, too subtle when it should hit hard — the pacing breaks.

---

## AUDIENCE
*The specific humans whose state this design is trying to change.*

**Buyer vs. User:**
- **Are they the same person?** No — this is a gift product
- **The Buyer:** Already converted. Never sees the compartment cover in isolation. It's part of the integrated kit experience.
- **The User:** The office worker receiving the gift. They discover the compartment cover surfaces progressively across the entire unboxing — not all at once.
- **Optimizing for:** The recipient's experience at each reveal moment. This surface is encountered in pieces over several minutes, not in one glance.

**Primary Audience: "The Lifer"**
- **Who they are:** Same as the kit's primary audience — an office worker with enough corporate experience to live the vocabulary. They cope through humor.
- **Before State (at each surface encounter):**
  - *Vertical wall (Steps 4-7):* They're focused on the trays and item boxes. The wall is in their peripheral vision. They're not looking for it. But if they notice copy on it, they'll read it — they've learned by now that every surface in this kit rewards attention.
  - *Top surface (Step 8):* They've just finished both trays. They might think the kit is done. Or they're wondering what's at the bottom. Either way, this is a transition moment — the energy shifts from "explore items" to "what else?"
  - *Underside (Step 11):* Maximum anticipation. They know something is hidden. They're lifting the cover. This is the moment right before the payoff. Whatever they see needs to be worth the buildup.
- **The Gap:** Low for the vertical wall (they're already bought into the world — it just needs to be good enough to notice). Medium for the top surface (needs to clearly signal "there's more"). High for the underside (must deliver a comedy beat strong enough to be the second-to-last thing they experience in the kit).
- **What would make them say "this is for me":** Copy on the vertical wall that they discover mid-tray-exploration and read aloud. A top surface that makes them say "wait, there's something under here." An underside that makes them laugh right before they see the mug.
- **What would make them say "this isn't for me":** Blank or purely structural surfaces. Generic institutional copy that doesn't earn its space. An underside that's a letdown before the biggest reveal.

**Secondary Audience: The Gift-Giver (watching the reveal)**
- The gift-giver is watching the recipient work through the trays. When the recipient hits the bottom and discovers there's STILL more — a hidden compartment — the gift-giver gets to watch the surprise. The compartment cover is the gate that creates that moment. The better the buildup (vertical wall → top surface → underside), the bigger the gift-giver's payoff.

**Key Psychological Insight:**
- The compartment cover is the only surface in the kit that the recipient encounters progressively over the entire unboxing. Every other surface is seen once, in one moment. This surface appears in pieces: wall during tray reveals, top after trays removed, underside at the reveal. That progressive exposure is the design opportunity — each encounter can build on the last, creating a narrative arc that culminates in the mug reveal. No other surface in the kit has this structural advantage.

---

## CONTEXT
*The specific circumstances under which the audience will encounter this design.*

**Physical / Digital Environment:**
- **Where:** Same as all kit surfaces — desk, kitchen table, break room during gift-opening
- **Medium:** Rigid paperboard interior surface — part of the briefcase structure, not a standalone object
- **Viewing distance:** Vertical wall at arm's length (~18-24") during tray exploration. Top surface and underside at close range (~12-18") when the recipient is focused on the bottom of the briefcase.
- **Environmental conditions:** Social. Someone is watching. By this point in the unboxing (5-10+ minutes in), the social energy may have shifted — either more engaged (the kit keeps delivering) or less (people have drifted). The hidden compartment reveal can re-engage an audience that's started to lose focus.

**Spatial Relationship:**
- The vertical wall is the back boundary of the tray zone. It's always "there" but not the focus — items and trays are in front of it.
- The top surface is the floor of the briefcase's back zone (from the recipient's perspective) after trays are removed. Doc Set 2 sits on it.
- The floor flap extends forward under where the trays sat. It's flush with the briefcase floor.
- The underside of the flat top faces down into the mug compartment. It's only seen when the cover is lifted and the recipient looks at what they're holding.

**Sought vs. Served:**
- **Vertical wall:** Served. The recipient doesn't go looking for it — it's just there while they explore trays. But if the copy is interesting, they'll switch to sought mode and read it.
- **Top surface:** Served initially (discovered when Tray 2 comes out), then Sought (they read it, looking for the next thing).
- **Floor flap:** Served — revealed when trays are removed.
- **Underside:** Sought. By the time they're lifting the cover, they're actively looking for what's next. They will read whatever is there.

**Attention Available:**

| Surface | Attention Level | Competition | Read Probability |
|---------|----------------|-------------|------------------|
| Vertical wall (Tray 1 visible) | Low — background | Item boxes are the focus | Low-Medium — only if copy catches eye |
| Vertical wall (Tray 2 visible) | Medium — more wall exposed | Item boxes + Confiscated Stapler recess | Medium — new copy revealed, may get noticed |
| Top surface | High — transition moment | Doc Set 2 is the primary focus object | High — visible around Doc Set 2 edges |
| Floor flap | Medium — part of the "what now?" scan | Top surface copy is more prominent | Medium — depends on how integrated with top surface |
| Underside | **Maximum** — active reveal moment | Nothing — recipient is focused entirely on this | **Near-certain** — they're holding it, looking at it |

**Emotional / Mental State at Each Surface:**
- **Vertical wall (Tray 1):** Excited, scanning, discovering. High energy. Not focused on the wall.
- **Vertical wall (Tray 2):** Still engaged but deepening. The novelty of tray exploration is established. More likely to notice details.
- **Top surface / floor flap:** Transitional. "Did I find everything?" Energy shifts from item exploration to discovery mode.
- **Underside:** Peak anticipation. They know something is hidden. They're lifting the cover. This is the "and behind door number three..." moment.

**Technical / Physical Constraints:**
- **Material:** Rigid paperboard (~24pt), dark carbon fiber texture finish
- **Print:** Full color on all 4 surfaces. The dark carbon fiber base means light-colored copy (white, cream, prison orange) will be most legible.
- **Interior color scheme:** Dark charcoal base, prison orange accent trim, white/cream copy — consistent with trays and briefcase interior
- **Voice:** Brad Sterling only. Mode 1 (product copy) and Mode 2 (personal brand) — see `brad-copy-voice-guide.md`
- **Comedy rule:** "Format stays buttoned-up, content gets unleashed"
- **World:** Played straight. Nobody winks. The office is a prison — that's just how things are.
- **Non-negotiables:**
  - Brad Sterling sole voice — no secondary characters
  - The hidden compartment must feel like a genuine surprise/discovery, not something telegraphed too early
  - The underside must be a strong comedy beat — funny, memorable, Brad

**Context Shifts:**
- **Primary:** Progressive discovery during unboxing — each surface seen at a different moment across 5-10 minutes
- **Secondary:** Re-examination — when the recipient (or someone else) looks at the cover after the mug is revealed, seeing all surfaces together for the first time
- **Tertiary:** Retelling — the recipient describes the unboxing to someone else. "And then I lifted this thing and underneath it said..." The underside copy should be quotable.
- **Quaternary:** Amazon listing photography — the cover may appear in styled product photos showing the hidden compartment reveal

---

## PROBLEM IDENTIFICATION & PRIORITIZATION

**All problems this design must solve:**
1. Make the underside a strong, memorable, funny Brad comedy beat (the penultimate reveal before the mug)
2. Create a progressive reveal on the vertical wall — copy that rewards attention during tray exploration and reveals new content as each tray is removed
3. Signal clearly on the top surface/floor flap that there's something hidden below — earn the "lift me" moment without spoiling the surprise
4. Maintain visual cohesion with the briefcase interior (dark carbon fiber, prison orange accents, white/cream copy)
5. Write copy for 4 surfaces that each serve their specific moment in the unboxing sequence
6. Make the vertical wall feel like a designed surface, not structural filler
7. Ensure the progressive wall reveal actually works physically — copy placement must account for tray stack heights blocking visibility
8. The top surface must work as both a platform for Doc Set 2 AND a teaser surface — the booklet covers part of it
9. The floor flap needs to integrate with the "open" signaling — it's part of the mechanism
10. The entire cover must feel like one cohesive piece despite having 4 surfaces seen at different times

**Causal Chain (Attention > Message > Action):**

1. **ATTENTION (Ambient): The vertical wall earns peripheral reads during tray exploration**
   *(If we fail here, the wall is just a blank divider — a wasted surface)*
   - The recipient is focused on item boxes. The wall is behind/above the trays. Copy needs to be visible enough to catch the eye without demanding attention away from the items. This is ambient engagement — it rewards the curious without punishing the focused.
   - Challenge: The dark carbon fiber texture means copy must be high-contrast (white/cream/orange) to read at arm's length in a dimly-lit briefcase interior.

2. **ATTENTION (Progressive): New wall copy is revealed after Tray 1 is removed**
   *(If we fail here, removing Tray 1 doesn't feel like a new discovery)*
   - When Tray 1 comes out, the bottom half of the vertical wall is now visible for the first time. If there's new copy here that wasn't visible before, it creates a "oh, there's more" moment. This reinforces the kit's core mechanic: every layer has something new.

3. **MESSAGE (Transition): The top surface signals "there's something hidden below"**
   *(If we fail here, the recipient thinks the kit is done after Tray 2)*
   - After both trays are removed, the recipient sees the top surface (partially covered by Doc Set 2) and the floor flap. The top surface copy should create clear curiosity: this isn't just the bottom of the briefcase. Something is here. Combined with the floor flap's "open" indicators, the recipient should feel invited to investigate.
   - The message is NOT "there's a mug down here." The message is "you haven't found everything yet."

4. **MESSAGE (Comedy): The underside delivers a memorable Brad Sterling moment**
   *(If we fail here, the biggest structural reveal in the kit has no comedy payoff)*
   - The recipient has lifted the cover. They're holding it. They look at the underside. Whatever is there must be funny enough to be the second-to-last thing they remember from the entire unboxing. This is Brad's closing argument — his final monologue before the mug steals the show. It should be quotable, shareable, and worth reading aloud.

5. **ACTION: The recipient lifts the cover and discovers the hidden mug**
   *(If we fail here, the mug reveal is an anticlimax)*
   - The entire sequence — wall buildup, top surface teaser, floor flap mechanism, underside comedy — exists to make this moment land. The action is physical: lift the cover. The emotional payoff is the gap between "there might be something" and "THERE'S A HIDDEN COMPARTMENT WITH A MUG IN IT." The compartment cover's job is to widen that gap.

---

## SURFACE-BY-SURFACE DESIGN DIRECTION

### Surface 1: Vertical Wall (Front Face)
**Dimensions:** ~13.5" wide x ~4.16" tall
**When seen:** Background during Tray 1 (top ~half visible), fully revealed after Tray 1 removed
**Role:** Ambient engagement → progressive reveal → depth signal

**Design Direction:**
- This wall should carry Brad's copy — not blank, not minimal. It's a large visible surface (~56 sq inches) that the recipient sees for several minutes during tray exploration. It should feel designed and intentional, consistent with the premium quality of every other surface in the kit.
- **Top half (visible during Tray 1):** Brad's institutional branding. Could be Elevate Co. interior branding, a department designation, a motto, or a formatted notice. Something that reads as "this briefcase is a real corporate product" when glanced at peripherally. The copy should work at arm's length on a dark background.
- **Bottom half (revealed after Tray 1 removed):** New copy that wasn't visible before. This is the progressive reveal payoff. Could be a continuation of the top half's format with escalating content, a new joke, or additional Brad branding. The key is that it feels like a discovery — removing the tray reveals something new.
- **Format:** Consistent with interior design language — dark carbon fiber base, white/cream and prison orange copy. Could use institutional formats (notices, plaques, warnings, departmental signage) filled with Brad's content.

**Copy Status:** Not written. Draft direction needed.

### Surface 2: Top Surface (Facing Up)
**Dimensions:** ~13.5" x ~4.0"
**When seen:** After Tray 2 removed (Step 8). Doc Set 2 booklet sits on top, partially covering it.
**Role:** Platform for Doc Set 2 + teaser that signals something is hidden below

**Design Direction:**
- Doc Set 2 (5.5" x 4.25" booklet) covers a portion of this surface. The teaser copy must be visible around the edges of the booklet — not hidden under it.
- The teaser should create a "wait, what's under this?" moment without spelling out "there's a mug." It should make the recipient want to investigate further.
- **Copy Doc v7 draft directions (for reference, not locked):** "RELEASE AUTHORIZED — OPEN" / "PAROLE REVIEW — SEE INSIDE" / "CLEARANCE GRANTED" / institutional command that makes you want to flip it. **Note:** These draft directions lean institutional. The product owner has shifted the underside away from institutional tension toward funny Brad — but the TOP surface teaser can still use institutional formatting to create contrast with the funny underside. The teaser is the setup; the underside is the punchline.
- **Key consideration:** The top surface and floor flap are seen simultaneously (Step 8). They should work together to guide the recipient toward opening the cover.

**Copy Status:** Draft directions exist. No final copy written.

### Surface 3: Floor Flap (Top Face)
**Dimensions:** ~13.5" x ~3.0"
**When seen:** After Tray 2 removed (Step 8). Was hidden under tray stack.
**Role:** Mechanism signaling ("open here") + newly revealed surface

**Design Direction:**
- This surface was hidden under the tray stack for the entire unboxing. Its sudden appearance is itself a minor discovery.
- It should integrate with the top surface to create the "open" mechanism signaling. Clear indicators that the cover lifts — could be graphic (arrows, lift tab, fold line markings) and/or copy-driven.
- Lower priority for comedy than the vertical wall or underside. Functional clarity matters most here — the recipient needs to understand that this piece lifts up.
- Could carry a small amount of Brad copy (a label, a warning, a fine-print joke) but the primary job is: help the recipient figure out how to access the hidden compartment.

**Copy Status:** Not written. No draft direction exists.

### Surface 4: Underside of Flat Top (THE KEY SURFACE)
**Dimensions:** ~13.5" x ~4.0"
**When seen:** Step 11 — when the cover is lifted
**Role:** **The penultimate reveal. The kit's second-to-last comedy beat before the mug.**

**Design Direction:**
- This is the most important surface on the compartment cover. It's the last designed surface the recipient sees before discovering the mug. It must be **funny, memorable, and Brad.**
- **Tone:** Not institutional tension. Not "CLASSIFIED / AUTHORIZED PERSONNEL ONLY." This is Brad Sterling's closing moment — the last thing he gets to say before the mug steals the spotlight. It should be a comedy beat strong enough that the recipient reads it aloud, laughs, and then turns to find the mug.
- **Format options (to explore in concept phase):**
  - Brad's personal message / founder's note in an absurd format (award acceptance speech, retirement toast, corporate memo)
  - A formatted Brad comedy piece (his manifesto, his origin story in 50 words, his "final thoughts")
  - A product-copy format played to the extreme (the "terms and conditions" of the hidden compartment, a "certificate of discovery")
  - Something that makes the mug reveal funnier by contrast — the underside is Brad at his most Brad, and then you look down and there's a mug in shredded classified documents
- **The test:** Would the recipient quote this surface when retelling the unboxing? If yes, it's working. If no, it's not strong enough.
- **Size advantage:** ~13.5" x ~4.0" is a generous canvas — roughly the size of a bumper sticker or a wide bookmark. Enough room for a substantial comedy piece, not just a one-liner.

**Copy Status:** Not written. Draft direction in Copy Doc v7 ("you've done your time" moment) has been **superseded** by product owner direction: funny Brad, not institutional payoff.

---

## MESSAGES & CONSTRAINTS

**Specific messages to convey (prioritized by surface):**

1. **Underside (Critical):** A memorable Brad Sterling comedy beat. Funny. Quotable. The kind of thing someone reads aloud. This is the last laugh before the mug. Brad at his most Brad.
2. **Vertical wall:** Brad's world is everywhere — even the structural surfaces are designed. Progressive content rewards the curious. "Every surface in this kit has something on it" reinforces premium quality perception.
3. **Top surface:** Something is hidden below. You haven't found everything. Lift this.
4. **Floor flap:** Here's how to open it. Clear, functional, possibly with a small Brad joke.

**Constraints:**
- **Budget:** Part of the briefcase interior production run. No separate print run — the compartment cover is produced as part of the briefcase structure.
- **Material:** Rigid paperboard (~24pt), dark carbon fiber texture. All copy must be legible against a very dark background.
- **Color palette:** White/cream copy, prison orange accents — consistent with briefcase interior and tray design language.
- **Voice:** Brad Sterling only. Mode 1 (product copy) on functional elements. Mode 2 (personal brand) wherever Brad can't help himself.
- **Copy Doc update required:** Several draft directions in Copy Doc v7 have been superseded by this brief. Copy Doc needs updating after this brief is finalized.
- **Physical dependency:** The vertical wall's progressive reveal depends on exact tray stack heights. Copy placement must be validated against the physical prototype to confirm which portions are visible/hidden at each stage.
- **Doc Set 2 placement:** The booklet's exact position on the top surface determines which portions of the teaser copy are visible. Need to account for this in layout.
- **Manufacturer consultation pending:** Retention mechanism (gravity only vs. magnets vs. tab-and-slot) affects whether the floor flap has visible mechanical elements that constrain print area.

---

## OPEN QUESTIONS

**Questions to resolve before proceeding:**

### Vertical Wall
- [ ] What institutional format works best for the wall copy? Options: departmental signage, framed motto/plaque, formatted notice, Brad's Elevate Co. interior branding, or a combination.
- [ ] How does the progressive reveal map to actual tray heights? Need physical measurements: when Tray 1 is in place, what vertical portion of the wall is hidden? When Tray 2 is in place (Tray 1 removed), what's hidden?
- [ ] Should the wall have one continuous piece of copy, or distinct "zones" (top half / bottom half) with different content?

### Top Surface
- [ ] Where exactly does Doc Set 2 sit on the surface? Need the booklet footprint mapped to determine visible teaser area.
- [ ] Should the teaser copy be institutional (setup for the funny underside) or funny in its own right?
- [ ] Does the top surface need to clearly read as a "lid" — or is the floor flap's mechanism signaling sufficient?

### Underside
- [ ] What Brad comedy format works best for the underside? Needs exploration in concept phase. Options: personal message, certificate, memo, manifesto, terms & conditions, etc.
- [ ] Length: Is this a single knockout line, a short paragraph, or a longer formatted piece? (~13.5" x ~4.0" allows for substantial content.)
- [ ] Should the underside copy reference the mug (spoiler risk) or be self-contained (funnier as a standalone beat)?

### Floor Flap
- [ ] How does the flap mechanism work? Does it lift from the front edge? Is there a tab or finger notch?
- [ ] How much of the floor flap surface is usable for print vs. consumed by mechanical elements (fold line, finger notch, etc.)?
- [ ] Should the flap carry any copy, or just mechanism indicators?

### Production
- [ ] Manufacturer recommendation on retention mechanism — gravity only, or additional fixturing needed?
- [ ] Print feasibility: Can all 4 surfaces be printed in the same production step as the exterior carbon fiber texture? Or does the underside require a separate print pass?
- [ ] Prototyping: A physical mockup is essential for this piece. The progressive reveal (tray heights blocking wall copy) and the flap mechanism must be tested physically — screen mockups can't validate the spatial relationships.
- [ ] Does the dark carbon fiber texture reproduce consistently on all 4 surfaces, or do bend lines create texture discontinuities?

### Copy Dependencies
- [ ] Vertical wall copy needs to be written — no existing drafts
- [ ] Top surface copy needs to be written — draft directions exist but aren't locked
- [ ] Underside copy needs to be written — draft direction has been superseded
- [ ] Floor flap copy/signaling needs to be designed — no existing direction
- [ ] All copy must be validated against physical prototype for legibility and visibility at each reveal stage

**Assumptions made (flagged for validation):**
- The tray stack height divides the vertical wall roughly in half — top half visible during Tray 1, bottom half revealed after Tray 1 removed. This needs physical validation.
- The dark carbon fiber texture provides enough contrast for white/cream copy to be legible. If not, the copy areas may need a lighter background treatment (subtle panel, lighter zone within the carbon fiber pattern).
- The floor flap's retention (gravity + tray weight) is sufficient. If the manufacturer recommends additional fixturing, this may affect print area and design.
- Doc Set 2 booklet (5.5" x 4.25") sits roughly centered on the top surface (~13.5" x ~4.0"), leaving teaser copy visible on the long edges. This needs to be confirmed.
- The underside will be seen by the recipient as they lift the cover — it naturally rotates into view. If the cover lifts straight up and away without rotating, the underside may not be naturally visible and the design may need a "flip it over" cue.
- Both trays and all items must be removed before the cover can be opened. The floor flap extends far enough forward to be trapped under the tray stack.

---
---

# Recommended Approach: Compartment Cover

## Strategic Direction

**Recommended overall approach:**
The compartment cover is the kit's pacing engine — the surface that transforms "a box of stuff" into "a layered experience with a hidden finale." It should be designed as a narrative sequence, not as a single surface. Each of the four printable areas serves a specific moment in the unboxing, and each moment has a different job:

1. **Vertical wall = ambient depth.** It's there the whole time, quietly proving that every surface in this kit is designed. The curious get rewarded. The focused aren't distracted.
2. **Top surface = the pivot.** The energy shifts from "explore items" to "wait, there's more." This surface manages that transition.
3. **Floor flap = the gate.** Functional clarity. "Here's how you open it."
4. **Underside = the comedy climax.** Brad's closing argument. The last laugh before the mug.

The cover should feel like one cohesive piece — same material, same design language, same character voice — but each surface should be calibrated for its moment. The vertical wall is ambient. The top surface is transitional. The floor flap is functional. The underside is the star.

**Rationale:**
- **Given the goal:** The mug reveal is the emotional climax of the entire kit. The compartment cover is the only thing standing between 10 minutes of building anticipation and that payoff. A well-designed cover widens the gap between "exploring items" and "HIDDEN COMPARTMENT" — and the wider that gap, the bigger the payoff.
- **Given the audience's state:** By the time they encounter the underside, the recipient has been engaging with the kit for 5-10+ minutes. They're invested. They've been laughing. They trust that every surface delivers. The underside must honor that trust with the strongest comedy beat it can.
- **Given the context:** The vertical wall is seen peripherally over several minutes. The top surface and floor flap get focused attention in the transition moment. The underside gets maximum attention during the active reveal. Each surface has a different attention budget, and the design must match.

**Design principles for this project:**
- **Pacing over density.** Not every surface needs to be packed with copy. The vertical wall should reward attention without demanding it. The top surface should build curiosity. The underside should hit hard. Less can be more on surfaces 1-3 if it makes surface 4 land harder.
- **Progressive revelation.** The vertical wall is the only surface in the kit that reveals new content over time (as trays are removed). Lean into this — it's a unique structural advantage. Make the progressive reveal feel intentional, not accidental.
- **Brad's closing moment.** The underside is Brad's last solo before the mug finale. Write it like a closing number. This is where Brad's voice should be at its most characteristic — whichever mode (1, 2, or both) produces the funniest result.
- **The cover is a setup; the mug is the punchline.** The underside is funny on its own, but it also makes the mug funnier by contrast. Brad's words → shredded CLASSIFIED paper → mug in hiding. The tonal shift from Brad's voice to the wordless mug reveal should feel like a comedy beat itself.
- **Functional clarity on the mechanism.** The recipient has never opened a hidden briefcase compartment before. The floor flap and top surface must make the action obvious. No one should be confused about how to access the mug.

## Action Plan

**Phase 1: Physical Validation**
- Get exact measurements of tray stack heights to map the vertical wall's visible/hidden zones at each stage
- Determine Doc Set 2 booklet placement on top surface — map visible teaser area
- Prototype the lift mechanism — does the flap lift from the front? Is a finger notch needed?
- Confirm that the underside is naturally visible when the cover is lifted (rotation into view vs. straight lift-off)
- Test copy legibility: white/cream text on dark carbon fiber texture at arm's length (vertical wall) and close range (underside)
- Deliverable: Annotated physical measurements document + mechanism prototype notes

**Phase 2: Underside Concept Development (THE PRIORITY)**
- This is the most important surface and should be developed first
- Explore 3-5 different Brad comedy formats for the underside (personal message, certificate, memo, manifesto, terms & conditions, etc.)
- Write draft copy for each format — test which is funniest
- Get stakeholder gut-check on the top 2-3 concepts
- The underside should be the kind of thing someone quotes when retelling the unboxing
- Deliverable: 3-5 underside concept drafts with copy, ranked by comedy strength

**Phase 3: Vertical Wall Copy & Progressive Reveal Design**
- Map copy zones to the physical reveal stages (what's visible with Tray 1 in place, what's revealed after)
- Write copy for both zones — top half (ambient) and bottom half (progressive reveal)
- Test institutional format options: departmental signage, framed motto, notice, Brad branding
- Confirm copy legibility against dark carbon fiber texture at arm's length viewing distance
- Deliverable: Vertical wall copy draft with zone mapping

**Phase 4: Top Surface & Floor Flap Integration**
- Design the top surface teaser — accounting for Doc Set 2 booklet footprint
- Design the floor flap mechanism signaling — arrows, tab, lift indicators
- Integrate both surfaces into a cohesive "here's how you discover the hidden compartment" experience
- Write teaser copy for top surface and any copy/labeling for floor flap
- Deliverable: Top surface + floor flap layout with copy

**Phase 5: Cohesion Review**
- Review all 4 surfaces together as one piece — do they feel like one designed object?
- Walk through the full reveal sequence with the physical prototype — does each surface serve its moment?
- Test the progressive reveal on the vertical wall with actual trays in place
- Test the underside reveal with the actual lift mechanism
- Confirm the underside is visible and readable during the natural lift action
- Get stakeholder feedback on the complete compartment cover experience
- Deliverable: All 4 surfaces reviewed in context, adjustments documented

**Phase 6: Production Design**
- Create production-ready artwork for all 4 surfaces
- Account for bend lines, fold tolerances, and any mechanical elements (finger notch, retention features)
- Confirm print feasibility with manufacturer — same production step as exterior, or separate?
- Physical proof at production quality
- Deliverable: Production-ready artwork package + manufacturer specifications

**Key milestones/checkpoints:**
- Physical measurements validated (blocks vertical wall zone mapping)
- Underside comedy concept selected (blocks everything — this is the star)
- Vertical wall copy approved (blocks production design)
- Mechanism prototype validated (blocks floor flap design)
- Stakeholder review of complete cover experience
- Physical proof from manufacturer

## Resources Needed

**From design team:**
- Interior packaging designer familiar with rigid paperboard construction and multi-surface print
- Same designer should work on the compartment cover and the briefcase interior — they're part of the same physical object and visual system

**From product owner / stakeholders:**
- Physical measurements of tray stack heights and Doc Set 2 placement
- Manufacturer consultation on retention mechanism
- Stakeholder review of underside comedy concepts
- Sign-off at each phase

**From copywriter (or AI-assisted writing session):**
- Underside comedy concept drafts (3-5 formats explored)
- Vertical wall copy (both zones — ambient and progressive reveal)
- Top surface teaser copy
- Floor flap copy/labeling (if any)

**External resources:**
- Briefcase manufacturer: print feasibility for 4 surfaces, bend line tolerances, mechanism options
- Physical prototype for reveal sequence testing
- Print proof at production quality

## Risks & Mitigations

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Underside comedy beat is weak — forgettable before the mug reveal | Medium | Critical | Develop multiple concepts. Test with stakeholders. The underside is the single most important surface on this piece — invest disproportionate effort here. If the first round of concepts isn't funny enough, iterate before moving to other surfaces. |
| Progressive reveal on vertical wall doesn't work physically — tray heights don't divide the wall as expected | Medium | High | Validate with physical measurements FIRST (Phase 1). Don't write copy until you know exactly which zones are visible at each stage. If the division point is awkward, adjust copy layout to match reality. |
| The recipient doesn't realize the cover opens — the mug is never discovered | Low | Critical | The top surface teaser and floor flap mechanism must be unambiguous. Test with someone unfamiliar with the kit. If they don't figure out the cover opens within 30 seconds of seeing the bottom of the briefcase, the signaling needs work. |
| Copy is illegible on dark carbon fiber texture | Medium | Medium | Test white/cream copy on the actual texture early. If contrast is insufficient, introduce lighter background panels or zones within the carbon fiber pattern. The vertical wall (viewed at arm's length) is the highest risk for legibility. |
| The underside isn't naturally visible when the cover is lifted | Low | High | Test with physical prototype. If the cover lifts straight up without rotating, the underside won't be seen naturally. In that case, either redesign the mechanism to encourage a flip motion or add a visual cue ("TURN OVER" or "SEE OTHER SIDE") on the top surface near the lift point. |
| Four surfaces designed in isolation don't feel cohesive | Medium | Medium | Design all surfaces together, not sequentially. Review them as a set in Phase 5. They share material, texture, and color palette — visual cohesion should come naturally if the same designer handles all four. |
| Copy Doc v7 and Packaging Spec v9 are out of sync with this brief's updated directions | High | Medium | Update Copy Doc and Packaging Spec after this brief is finalized and stakeholder-reviewed. Flag the specific changes (vertical wall upgraded, underside tone changed, floor flap added as design surface, reveal sequence updated). |
| Manufacturer says gravity-only retention isn't sufficient — fixturing needed | Medium | Low | If additional retention is needed (magnets, tab-and-slot), account for mechanical elements in the print layout. These features may constrain the floor flap's printable area but shouldn't affect other surfaces. |

---

## CHANGELOG

| Date | Change | Author |
|------|--------|--------|
| May 14, 2026 | Initial brief created via DesignClarity interview process. Documented physical construction, 4 printable surfaces, reveal sequence, and design direction for each surface. Key updates from interview: vertical wall upgraded to active copy surface, underside tone changed from institutional to funny Brad, floor flap confirmed as printable surface, full reveal sequence including new divider sheet confirmed. | DesignClarity / Claude |
