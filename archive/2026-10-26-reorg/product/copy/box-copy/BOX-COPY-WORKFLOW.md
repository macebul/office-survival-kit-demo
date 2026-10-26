# Box Copy Workflow -- Session Instructions

> **Last Updated:** July 6, 2026
> **Purpose:** Every session that works on item box copy MUST read this file first. It defines where files go, what format to use, and how to keep the directory clean.
> **Location:** `product/copy/box-copy/BOX-COPY-WORKFLOW.md`

---

## Document Hierarchy

There are two active document types per item. Each serves a different purpose.

### 1. Working Doc (`{item}-working-doc.md`)

**Purpose:** The workshop. All drafts, all status tags, all cut material, all session history.

**What goes in it:**
- Product context (division, rebrand, SKU)
- Every copy line developed, tagged with status (`[LOCKED]`, `[KEEP]`, `[MAYBE]`, `[NEEDS WORK]`, etc.)
- Cut material with reasons (never delete -- move to Cut sections)
- Session notes and decisions made during development
- Voice sweep results and quality assessments

**When to create:** At the start of the first working session for an item.

**When to update:** Every session that develops copy for that item. The working doc is always growing.

**Naming:** `{item-slug}-working-doc.md` (e.g., `cubicle-shank-working-doc.md`)

---

### 2. Surface Map (`{item}-surface-map.md`)

**Purpose:** The final blueprint. Production-ready specification with exact locked copy, design notes, and image prompts. A designer should be able to execute from this document alone.

**What goes in it:**
- Physical specs (dimensions, material, format)
- Every surface, numbered element by element
- Exact locked copy in code blocks
- Design notes for visual treatment (fonts, icons, illustrations)
- Decisions log (every locked decision with rationale)
- Changes from v01 (what was updated from the mockup designs)
- Image prompts (Midjourney or equivalent)

**When to create:** After all copy for an item is locked and reviewed.

**When to update:** Only when locked copy changes (rare -- these are stable documents).

**Naming:** `{item-slug}-surface-map.md` (e.g., `mug-shot-surface-map.md`)

**Format reference:** Use `cubicle-shank-surface-map.md` as the template.

---

### Deprecated: Box Copy (`{item}-box-copy.md`)

The box copy format was the original surface-by-surface copy document. It has been superseded by the surface map format, which adds design notes, decisions log, and image prompts.

**For items that still only have box copy files:** Those files remain the current source of truth until a surface map is created. Do NOT create new box copy files -- go directly to surface map format when the copy is ready.

**For items that already have surface maps:** The box copy file has been archived. The surface map is the source of truth.

---

## Source of Truth Per Item

| Item | Current Source of Truth | Path |
|------|----------------------|------|
| Cubicle Shank | **Surface Map** | `cubicle-shank-surface-map.md` |
| Mug Shot | **Surface Map** | `mug-shot-surface-map.md` |
| Cell Talk | **Box Copy** (pending surface map) | `cell-talk-box-copy.md` |
| Rap Sheets | **Box Copy** (pending surface map) | `rap-sheets-box-copy.md` |
| Sweet Nothings | **Box Copy** (pending surface map) | `sweet-nothings-box-copy.md` |
| Lifer Ink | **Box Copy** (pending surface map) | `lifer-ink-box-copy.md` |
| Turf Tags | **Surface Map** | `turf-tags-surface-map.md` |

**Dashboard:** See `cross-item-status.md` for the full status matrix.

---

## File Naming Conventions

All files use kebab-case slugs:

| Item | Slug |
|------|------|
| Cubicle Shank | `cubicle-shank` |
| Mug Shot | `mug-shot` |
| Cell Talk | `cell-talk` |
| Rap Sheets | `rap-sheets` |
| Sweet Nothings | `sweet-nothings` |
| Lifer Ink | `lifer-ink` |
| Turf Tags | `turf-tags` |

**Pattern:** `{slug}-working-doc.md`, `{slug}-surface-map.md`

---

## Session Workflow

### When starting a copy session for an item:

1. **Read this file** (you're doing that now)
2. **Read the item's working doc** if one exists (for context and existing material)
3. **Read the item's current source of truth** (surface map or box copy, per table above)
4. **Read the v01 mockup images** at `product/images/0 - Images/v01/{item folder}/`
5. **Load the comedy-writing skill** before writing any product copy
6. Work on copy development, updating the working doc as you go
7. When copy is locked for all surfaces, create or update the surface map

### When creating a surface map:

1. Use `cubicle-shank-surface-map.md` as the format template
2. Include ALL of: physical specs, element-by-element copy, design notes, decisions log, changes from v01, image prompts
3. Save to `product/copy/box-copy/{slug}-surface-map.md`
4. Update the source of truth table in this file
5. Update `cross-item-status.md`
6. If a box copy file existed, archive it: move to `archive/{slug}-box-copy-ARCHIVED-{date}.md`

### When archiving files:

1. Move (never delete) to `product/copy/box-copy/archive/`
2. Add timestamp suffix: `-ARCHIVED-YYYY-MM-DD`
3. Keep original filename readable before the suffix

---

## Directory Structure

```
product/copy/box-copy/
|-- BOX-COPY-WORKFLOW.md          <-- This file (session instructions)
|-- cross-item-status.md          <-- Dashboard (status matrix)
|-- cross-item-ideas-bank.md      <-- Shared copy ideas across items
|
|-- cubicle-shank-surface-map.md  <-- SOURCE OF TRUTH
|-- cubicle-shank-working-doc.md  <-- Workshop
|
|-- mug-shot-surface-map.md       <-- SOURCE OF TRUTH
|
|-- cell-talk-box-copy.md         <-- Source of truth (pending surface map)
|-- cell-talk-working-doc.md      <-- Workshop
|
|-- rap-sheets-box-copy.md        <-- Source of truth (pending surface map)
|-- rap-sheets-working-doc.md     <-- Workshop
|
|-- sweet-nothings-box-copy.md    <-- Source of truth (pending surface map)
|-- sweet-nothings-working-doc.md <-- Workshop
|
|-- lifer-ink-box-copy.md         <-- Source of truth (pending surface map)
|-- lifer-ink-working-doc.md      <-- Workshop
|
|-- turf-tags-surface-map.md       <-- SOURCE OF TRUTH
|-- turf-tags-mockup-prompts.md   <-- Image prompts
|-- turf-tags-working-doc.md      <-- Workshop
|
|-- item-box-copy-session-prompt.md         <-- Reusable session template
|-- item-copy-variation-session-prompt.md   <-- Reusable session template
|-- cubicle-shank-session-prompt.md         <-- Reusable session template
|-- cubicle-shank-parallel-session-prompt.md
|-- cubicle-shank-red-team-prompt.md
|
|-- archive/                      <-- All superseded/deprecated files
```

---

## Related Documents

- **Master copy doc:** `product/copy/copy-doc-v7.md`
- **Comedy writing rules:** `.claude/rules/comedy-writing.md`
- **Document index:** `product/governance/DOCUMENT-INDEX.md`
- **V01 mockup images:** `product/images/0 - Images/v01/`
- **Card deck copy:** `product/copy/card-decks/` (separate from box copy)
- **Image prompts:** `product/image-prompts/` (kit-level; item-specific prompts also in surface maps)
