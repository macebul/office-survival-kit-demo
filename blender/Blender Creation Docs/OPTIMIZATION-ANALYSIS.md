# Office Survival Kit — Documentation Optimization Analysis

**Date:** March 11, 2026
**Scope:** All 14 documents in the Blender Creation Docs folder
**Goals:** Improve cross-doc coherence + LLM executability for Blender work (with future sourcing handoff in mind)

---

# What's Working Well

## The Authority Architecture Is Excellent

- The ownership table in the Authority Block is one of the best cross-doc governance systems I've seen in a product spec set
  - "Each piece of information lives in ONE document. Other documents reference it, not restate it."
  - This is the right principle — the execution just needs tightening (see recommendations)
- The Cross-Reference Map in the Roadmap gives any reader (human or LLM) instant navigation
- The "designated owner wins" tiebreaker rule eliminates ambiguity

## The Blender Briefing Is Exceptionally LLM-Ready

- Clean tables, explicit coordinate system, ASCII layout diagrams, named materials with RGB values
  - An LLM can execute from this document with minimal clarification
- The "What's Been REMOVED (do not model)" section is critical for preventing hallucinated geometry from older context
- Object naming convention table means generated code will be consistent across sessions

## The Packaging Spec Narrative Design Is Strong

- The 14-step reveal sequence is one of the best unboxing designs I've reviewed — each layer has purpose
  - The compartment cover as narrative gate (teaser top / payoff underside) is genuinely clever
- The OG character concept gives the whole kit a coherent voice that distinguishes it from generic gag gift packaging
- The "Contraband Manual" framing turns the packaging itself into part of the product

## The Exterior Copy Is Genuinely Funny

- The Nutrition Facts parody lands because it follows the real FDA format faithfully before going absurd
- "Kevin" as a recurring unnamed threat is the right kind of running joke — it escalates without explanation
- MONDAY in ransom note style is a visual gag that works at a distance and up close

## The Cascade Discipline Is Impressive

- You tracked the 3-tray → 2-zone redesign across every single document with explicit changelogs
- Every document has a version history that an LLM can use to understand what changed and why
- The "WORKING ESTIMATE" tags create a built-in sourcing checklist — nothing gets accidentally locked

---

# Issues Found

## Critical: Data Conflicts Between Documents

### Blender Script Foam Padding vs. Dimensions Spec

- **blender-v2.py line 206:** `FOAM_PAD_T = 0.25` — uses 0.25" for BOTH top and bottom foam
- **Dimensions Spec:** Bottom foam = 0.50", Top foam = 0.125"
- This cascades into wrong Z coordinates throughout the back zone:
  - Script puts mug bottom at Z = 0.50" (should be 0.75")
  - Script puts mug center at Z = 2.25" (should be 2.50")
  - Script's total back zone stack = 4.5625" (spec says 4.6875")
- **Impact:** Any Blender session using this script will have the mug sitting 0.25" too low and the foam proportions wrong
- *Fix: Split FOAM_PAD_T into FOAM_BOTTOM_T = 0.50 and FOAM_TOP_T = 0.125*

### Passport Dimensions in Script vs. Spec

- **blender-v2.py line 358:** Passport modeled as `(3.5, 2.5, 0.25)` — that's 3.5" × 2.5"
- **Dimensions Spec + Item Specs:** Passport is 5.0" × 3.5" × 0.25"
- The script has the dimensions swapped/wrong — the passport would render too small
- *Fix: Update to (5.0, 3.5, 0.25) or (3.5, 5.0, 0.25) depending on orientation*

### Yard Pass Dimensions in Script vs. Spec

- **blender-v2.py line 362:** Yard Pass modeled as `(3.5, 2.5, 0.10)` — that's 3.5" × 2.5"
- **Dimensions Spec + Item Specs:** Yard Pass is 4.0" × 2.5" × 0.10"
- Length is 0.5" short
- *Fix: Update to (4.0, 2.5, 0.10)*

---

## High Impact: The Roadmap Is Significantly Stale

The Documentation Roadmap (v2) has multiple incorrect statuses that would mislead any reader:

| What Roadmap Says | Reality |
|---|---|
| Dimensions Spec: "Not started — CRITICAL PRIORITY" | dimensions-spec-v61.md exists, 30KB, fully written |
| Blender Session Briefing: "needs major rewrite" | blender-briefing-v2.md exists, complete rewrite done |
| Blender Script: "needs major rewrite" | blender-v2.py exists, complete rewrite done |
| Quick Start #1: "Create Dimensions Spec" | Already created |
| Quick Start #5-6: "Blender Briefing/Script full rewrite" | Already done |
| Folder structure shows "Blender-Session-Briefing.md 🔴" | Should be ✅ |

- **Impact:** Anyone (including future-you) reading the Roadmap will waste time on already-completed work or think the project is further behind than it is
- *Fix: Update all statuses, mark completed items, update Quick Start list*

---

## High Impact: Cross-Doc Redundancy Despite Ownership Rules

The ownership rules are clearly stated, but several documents violate them by restating rather than referencing. This creates:
1. **Drift risk** — when one copy gets updated and the other doesn't (already happening with the foam values)
2. **Token waste** — when pasting full docs to LLMs, the same information appears 2-3 times

### Key Redundancy Hotspots

| Information | Authoritative Owner | Also Restated In |
|---|---|---|
| Box dimensions (14 × 11.5 × 5) | Dimensions Spec | Authority Block, Blender Briefing, Packaging Spec, Image Prompts |
| Back zone stack math | Dimensions Spec | Authority Block, Blender Briefing |
| Reveal sequence (14 steps) | Packaging Spec | Authority Block, Blender Briefing, Copy Doc |
| Booking frame specs | Dimensions Spec (dims) / Packaging Spec (design) | Authority Block, Blender Briefing, Item Specs |
| Tray item assignments | Packaging Spec | Authority Block, Blender Briefing, Dimensions Spec, Item Specs, Copy Doc |
| Booklet specs | Dimensions Spec (dims) / Packaging Spec (narrative) | Authority Block, Blender Briefing, Item Specs |
| "What's removed" list | Authority Block | Blender Briefing, Packaging Spec |
| Closure system | Dimensions Spec (hardware) / Packaging Spec (design) | Authority Block, Blender Briefing, Exterior Spec |

The **Authority Block** is the biggest offender — it restates nearly everything from the Dimensions Spec and Packaging Spec. This made sense when it was created as a "delta document" during the redesign, but now that the child docs are updated, it's ~11KB of duplicated content.

The **Blender Briefing** is the second biggest — it was designed to be self-contained ("hand this to Claude"), but that means it duplicates significant chunks of the Dimensions Spec and Packaging Spec.

### The Tradeoff

Self-contained docs (Briefing, Authority Block) are convenient for single-doc pasting but create drift. Reference-based docs are safer but require pasting multiple files. Given that you paste full docs to LLMs anyway, the self-contained approach is costing you accuracy without saving tokens.

---

## Medium Impact: Packaging Spec Is Very Large (48KB)

At ~48KB, the Packaging Spec is the largest document and consumes significant context window when pasted to an LLM. Several sections could be trimmed:

- **Section 15 (Removed/Superseded Elements)** is ~2KB of "don't do this" content that's useful during the transition but will become noise over time
- **Reveal sequence** appears in full detail (~1KB) and is also in the Authority Block, Blender Briefing, and Copy Doc
- **Several sections restate Dimensions Spec values** despite the ownership header saying not to

---

## Medium Impact: Image Prompts Are Incomplete for Interior

The Image Prompts doc has 6 exterior artboard prompts + 2 interior shots, but the reveal sequence has 14 steps. Missing shots:

- Tray 2 revealed (after Tray 1 lifted)
- Compartment cover visible (after Tray 2 lifted)
- Compartment revealed (mug + passport + yard pass in foam)
- Base message
- Closed case with belly band
- Individual item glamour shots

These are explicitly listed in the Blender Briefing's camera needs but don't have corresponding image prompts.

---

## Low Impact: Archived Docs in Working Folder

The two archived docs (`booklet-conversion-archived.md`, `master-corrections-archived.md`) are properly marked as superseded but still sit in the same folder as active docs. For an LLM scanning the folder, they're noise — and at ~21KB + ~27KB, they're significant context pollution if accidentally included.

---

## Low Impact: Copy Doc Items 6-12 Still TBD

Items 6-12 in the Copy Doc are placeholder stubs. The tattoo working list has 21 candidates (needs narrowing to 4-6) and stickers have 10 (needs narrowing to 6-8). This isn't a document quality issue — it's just incomplete work. Noting it because it blocks tray recess copy, which blocks Blender label textures.

---

# Recommendations

## High Impact

### 1. Fix the Blender Script Data Conflicts

- Split `FOAM_PAD_T` into `FOAM_BOTTOM_T = 0.50` and `FOAM_TOP_T = 0.125`
- Update all downstream Z coordinates in the back zone
- Fix Passport dimensions: `(5.0, 3.5, 0.25)` or `(3.5, 5.0, 0.25)`
- Fix Yard Pass dimensions: `(4.0, 2.5, 0.10)`
- Verify the corrected back zone stack total matches Dimensions Spec (~4.69")
- *Quick win — 10 minutes of code changes*

### 2. Update the Roadmap Statuses

- Mark Dimensions Spec as ✅ Complete (v6.1)
- Mark Blender Session Briefing as ✅ Complete (v2)
- Mark Blender Script as ✅ Complete (v2)
- Update Quick Start list to remove completed items
- Update folder structure emoji statuses
- *Quick win — 15 minutes*

### 3. Slim Down the Authority Block

The Authority Block was born as a redesign delta document. Now that all child docs are updated, it should evolve into a **lightweight index** rather than a full restatement. Proposed structure:

- Keep: "The Change" summary (3 sentences)
- Keep: "Locked Decisions" table (this is genuinely unique to the Authority Block)
- Keep: "What's REMOVED / ADDED / UNCHANGED" lists (unique governance value)
- Keep: "Sourcing Action Items" (unique)
- **Remove or replace with cross-references:** Box Dimensions table, Interior Zone Split, full Reveal Sequence, Booking Frame spec, Closure System spec, Inside Lid spec, Tray Items table, Booklet specs, Surface Map — all of these now live in their owner documents
- **Result:** ~11KB → ~4KB. Less drift risk. Faster to paste. Still serves its role as the "what changed" record.
- *Bigger lift — 30-45 minutes*

### 4. Add a "Blender Quick-Paste" Section to the Briefing

Since you paste full docs and the Briefing is the primary Blender-session document, add a top-of-file block that tells the LLM which other docs matter and which to ignore:

```markdown
## For This Session, You Need:
- THIS document (Blender Briefing) — primary reference
- Dimensions Spec — if you need exact coordinates or stack math
- Packaging Spec — if you need design decisions or narrative context

## You Do NOT Need:
- Authority Block (content is in the docs above)
- Exterior Copy Doc (unless modeling text geometry)
- Item Specs (unless modeling specific item shapes)
- Archived docs (superseded)
```

This costs almost nothing to add and prevents LLMs from getting confused by redundant or outdated context.
- *Quick win — 5 minutes*

---

## Medium Impact

### 5. Move Archived Docs Out of Working Folder

- Create a subfolder: `Blender Creation Docs/archive/`
- Move `booklet-conversion-archived.md` and `master-corrections-archived.md` into it
- Prevents accidental inclusion when pasting "all docs in the folder" to an LLM
- *Quick win — 2 minutes*

### 6. Reduce Blender Briefing Duplication (Carefully)

The Briefing restates a lot from Dimensions Spec and Packaging Spec. For the values it restates, add a comment noting the authoritative source:

```markdown
| Outer box | 14.0" × 11.5" × 5.0" | WORKING ESTIMATE — see Dimensions Spec for derived values |
```

Don't strip all values — the Briefing needs to be readable standalone for quick orientation. But anywhere it goes into stack math detail or zone split calculations, replace with "See Dimensions Spec, Section X" rather than restating the full tables.

**Key principle:** The Briefing should have enough to orient an LLM and model geometry. The Dimensions Spec should be the source when exact positions matter.
- *Bigger lift — 30 minutes*

### 7. Add Missing Interior Image Prompts

Write prompts for the remaining reveal sequence shots:
- Tray 2 with 7-item recesses (after Tray 1 + Booklet 2 removed)
- Compartment cover visible (after Tray 2 lifted)
- Compartment open (mug in foam, passport + yard pass flanking)
- Closed case with belly band (Step 0 state)

These are needed for listing photography direction and 3D camera angle planning.
- *Bigger lift — 45-60 minutes of prompt writing*

---

## Polish

### 8. Standardize Version Numbering

Some docs use v3, others v6.1, others v2. The numbering reflects real history, but for a reader encountering the set fresh, it's confusing. Consider adding a "current version" line in the Roadmap's document list:

```
| Packaging Spec | v6.1 | ✅ | packaging-spec-v61.md |
| Dimensions Spec | v6.1 | ✅ | dimensions-spec-v61.md |
| Exterior Spec | v3 | ✅ | exterior-spec-v3.md |
```

This makes it instantly clear which file is the current version of which doc.
- *Quick win — 10 minutes*

### 9. Add a "Sourcing Handoff" Note to Dimensions Spec + Item Specs

Since these may eventually go to a sourcing partner, add a brief header note:

```markdown
> **For sourcing partners:** This document contains all physical measurements
> for quoting. Items marked [WORKING ESTIMATE] need confirmation before
> production tooling. See "Key Questions for Sourcing" at the end for
> priority items.
```

This takes 2 minutes and makes the doc self-explanatory for a non-project reader.
- *Quick win — 5 minutes*

---

# Priority Execution Order

| # | Action | Impact | Effort | Dependencies |
|---|--------|--------|--------|-------------|
| 1 | Fix Blender Script data conflicts | Critical | 10 min | None |
| 2 | Update Roadmap statuses | High | 15 min | None |
| 3 | Move archived docs to subfolder | Medium | 2 min | None |
| 4 | Add "Quick-Paste" guidance to Briefing | High | 5 min | None |
| 5 | Slim down Authority Block | High | 30-45 min | None |
| 6 | Reduce Briefing duplication | Medium | 30 min | After #5 |
| 7 | Add sourcing handoff notes | Low | 5 min | None |
| 8 | Standardize version table in Roadmap | Low | 10 min | After #2 |
| 9 | Write missing image prompts | Medium | 45-60 min | None |

Items 1-4 are quick wins you could knock out in one session. Items 5-6 are the "bigger lift" structural work. Item 9 is independent and can happen anytime.

---

# Tradeoffs to Be Aware Of

## Self-Contained vs. Reference-Based Docs

**Current approach:** The Briefing and Authority Block try to be self-contained (paste one doc, get everything).
**Recommendation:** Move toward reference-based (paste the Briefing + Dimensions Spec when you need exact coordinates).
**Tradeoff:** Slightly more files to paste per session, but you eliminate the #1 source of data drift. Given that you already paste full docs, the extra file is minimal overhead.

## Trimming the Authority Block

**Risk:** If you slim it down, new chat sessions that only get the Authority Block won't have full context.
**Mitigation:** The Authority Block's role shifts from "everything you need" to "here's what changed and what's locked." The Briefing becomes the primary Blender context doc. For non-Blender work, paste the relevant spec doc directly.

## Keeping Archived Docs at All

**Option A:** Move to subfolder (recommended — preserves history, removes noise).
**Option B:** Delete entirely (cleaner, but you lose the decision-trail for the binder→booklet conversion).
**Recommendation:** Option A. The history has value if you ever need to explain why D-rings were removed.

---

*Want me to go deeper on any of these, or should I start executing the fixes — starting with the Blender Script data conflicts?*
