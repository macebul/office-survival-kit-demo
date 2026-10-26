# Vibe Design SOP — Office Survival Kit

> **Created:** May 13, 2026
> **Purpose:** Organizational hub for the Vibe Design process. Tracks all medium context builds, design briefs, concept generation, and image production across every design surface in the product.
> **SOP Source:** "The Process: First Principles to Final Design" by Johnny Lasater (02/04/26)

---

## How This Works

The Vibe Design SOP takes you from zero knowledge of a design medium to finished images through five phases:

1. **Define What You're Making** — Design Brief + Product Profile
2. **Build Medium Context** — 8 knowledge documents that define what "good" looks like
3. **Create Concept Super Prompt** — a meta prompt that produces a custom concept generator
4. **Generate Concepts** — run the concept super prompt for creative directions + AI prompts
5. **Generate & Iterate** — Image Storm to final images

Most of this work is **one-time per medium**. Once a medium context library is built, future projects in that medium skip to Phase 4.

---

## Design Surfaces

Every physical surface in the product that needs artwork or design.

| Surface | Medium Group | Design Brief | Concepts |
|---------|-------------|--------------|----------|
| Briefcase (clamshell exterior) | `premium-box-packaging` | `briefs/briefcase.md` | `concepts/briefcase/` |
| Outer Amazon Box (mailer) | `mailer-box` | `briefs/outer-amazon-box.md` | `concepts/outer-amazon-box/` |
| Cubicle Shank box (pen) | `small-box-packaging` | `briefs/cubicle-shank-box.md` | `concepts/cubicle-shank-box/` |
| Cell Talk box (affirmation cards) | `small-box-packaging` | `briefs/cell-talk-box.md` | `concepts/cell-talk-box/` |
| Rap Sheets box (complaint cards) | `small-box-packaging` | `briefs/rap-sheets-box.md` | `concepts/rap-sheets-box/` |
| Sweet Nothings box (passive-agg cards) | `small-box-packaging` | `briefs/sweet-nothings-box.md` | `concepts/sweet-nothings-box/` |
| Lifer Ink box (tattoos) | `small-box-packaging` | `briefs/lifer-ink-box.md` | `concepts/lifer-ink-box/` |
| Turf Tags box (stickers) | `small-box-packaging` | `briefs/turf-tags-box.md` | `concepts/turf-tags-box/` |
| Office Survival Manual | `print-booklet` | `briefs/survival-manual.md` | `concepts/survival-manual/` |
| Compartment Cover | `interior-surfaces` | `briefs/compartment-cover.md` | `concepts/compartment-cover/` |
| Trays (x2 identical) | `interior-surfaces` | `briefs/trays.md` | `concepts/trays/` |

---

## Medium Groups

Surfaces that share the same design medium share one context library. This avoids redundant work — you build the medium knowledge once, then use it for every surface in that group.

| Medium | Folder | Surfaces Using It |
|--------|--------|-------------------|
| Small Box Packaging | `mediums/small-box-packaging/` | All 6 item boxes |
| Premium Box Packaging | `mediums/premium-box-packaging/` | Briefcase |
| Mailer Box | `mediums/mailer-box/` | Outer Amazon Box |
| Print Booklet | `mediums/print-booklet/` | Office Survival Manual |
| Interior Surfaces | `mediums/interior-surfaces/` | Compartment cover, trays |

---

## Execution Status Tracker

### Phase 1: Project Context

| Deliverable | Status | File |
|-------------|--------|------|
| Product Profile | NOT STARTED | `shared/product-profile.md` |
| Brand Context (compiled) | NOT STARTED | `shared/brand-context.md` |

#### Design Briefs

| Surface | Status | File |
|---------|--------|------|
| Briefcase | NOT STARTED | `briefs/briefcase.md` |
| Outer Amazon Box | NOT STARTED | `briefs/outer-amazon-box.md` |
| Cubicle Shank box | NOT STARTED | `briefs/cubicle-shank-box.md` |
| Cell Talk box | NOT STARTED | `briefs/cell-talk-box.md` |
| Rap Sheets box | NOT STARTED | `briefs/rap-sheets-box.md` |
| Sweet Nothings box | NOT STARTED | `briefs/sweet-nothings-box.md` |
| Lifer Ink box | NOT STARTED | `briefs/lifer-ink-box.md` |
| Turf Tags box | NOT STARTED | `briefs/turf-tags-box.md` |
| Survival Manual | NOT STARTED | `briefs/survival-manual.md` |
| Compartment Cover | NOT STARTED | `briefs/compartment-cover.md` |
| Trays | NOT STARTED | `briefs/trays.md` |

### Phase 2: Medium Context Libraries

Each medium needs 8 documents. Track per-document status here.

#### Small Box Packaging

| # | Document | Status | File |
|---|----------|--------|------|
| 1 | Field Overview | NOT STARTED | `mediums/small-box-packaging/01-field-overview.md` |
| 2 | First Principles | NOT STARTED | `mediums/small-box-packaging/02-first-principles.md` |
| 3 | MECE Principles | NOT STARTED | `mediums/small-box-packaging/03-mece-principles.md` |
| 4 | MECE Mistakes | NOT STARTED | `mediums/small-box-packaging/04-mece-mistakes.md` |
| 5 | MECE Artifacts | NOT STARTED | `mediums/small-box-packaging/05-mece-artifacts.md` |
| 6 | Archetypes | NOT STARTED | `mediums/small-box-packaging/06-archetypes.md` |
| 7 | Rules | NOT STARTED | `mediums/small-box-packaging/07-rules.md` |
| 8 | Tips & Tricks | NOT STARTED | `mediums/small-box-packaging/08-tips-tricks.md` |

#### Premium Box Packaging

| # | Document | Status | File |
|---|----------|--------|------|
| 1 | Field Overview | NOT STARTED | `mediums/premium-box-packaging/01-field-overview.md` |
| 2 | First Principles | NOT STARTED | `mediums/premium-box-packaging/02-first-principles.md` |
| 3 | MECE Principles | NOT STARTED | `mediums/premium-box-packaging/03-mece-principles.md` |
| 4 | MECE Mistakes | NOT STARTED | `mediums/premium-box-packaging/04-mece-mistakes.md` |
| 5 | MECE Artifacts | NOT STARTED | `mediums/premium-box-packaging/05-mece-artifacts.md` |
| 6 | Archetypes | NOT STARTED | `mediums/premium-box-packaging/06-archetypes.md` |
| 7 | Rules | NOT STARTED | `mediums/premium-box-packaging/07-rules.md` |
| 8 | Tips & Tricks | NOT STARTED | `mediums/premium-box-packaging/08-tips-tricks.md` |

#### Mailer Box

| # | Document | Status | File |
|---|----------|--------|------|
| 1 | Field Overview | NOT STARTED | `mediums/mailer-box/01-field-overview.md` |
| 2 | First Principles | NOT STARTED | `mediums/mailer-box/02-first-principles.md` |
| 3 | MECE Principles | NOT STARTED | `mediums/mailer-box/03-mece-principles.md` |
| 4 | MECE Mistakes | NOT STARTED | `mediums/mailer-box/04-mece-mistakes.md` |
| 5 | MECE Artifacts | NOT STARTED | `mediums/mailer-box/05-mece-artifacts.md` |
| 6 | Archetypes | NOT STARTED | `mediums/mailer-box/06-archetypes.md` |
| 7 | Rules | NOT STARTED | `mediums/mailer-box/07-rules.md` |
| 8 | Tips & Tricks | NOT STARTED | `mediums/mailer-box/08-tips-tricks.md` |

#### Print Booklet

| # | Document | Status | File |
|---|----------|--------|------|
| 1 | Field Overview | NOT STARTED | `mediums/print-booklet/01-field-overview.md` |
| 2 | First Principles | NOT STARTED | `mediums/print-booklet/02-first-principles.md` |
| 3 | MECE Principles | NOT STARTED | `mediums/print-booklet/03-mece-principles.md` |
| 4 | MECE Mistakes | NOT STARTED | `mediums/print-booklet/04-mece-mistakes.md` |
| 5 | MECE Artifacts | NOT STARTED | `mediums/print-booklet/05-mece-artifacts.md` |
| 6 | Archetypes | NOT STARTED | `mediums/print-booklet/06-archetypes.md` |
| 7 | Rules | NOT STARTED | `mediums/print-booklet/07-rules.md` |
| 8 | Tips & Tricks | NOT STARTED | `mediums/print-booklet/08-tips-tricks.md` |

#### Interior Surfaces

| # | Document | Status | File |
|---|----------|--------|------|
| 1 | Field Overview | NOT STARTED | `mediums/interior-surfaces/01-field-overview.md` |
| 2 | First Principles | NOT STARTED | `mediums/interior-surfaces/02-first-principles.md` |
| 3 | MECE Principles | NOT STARTED | `mediums/interior-surfaces/03-mece-principles.md` |
| 4 | MECE Mistakes | NOT STARTED | `mediums/interior-surfaces/04-mece-mistakes.md` |
| 5 | MECE Artifacts | NOT STARTED | `mediums/interior-surfaces/05-mece-artifacts.md` |
| 6 | Archetypes | NOT STARTED | `mediums/interior-surfaces/06-archetypes.md` |
| 7 | Rules | NOT STARTED | `mediums/interior-surfaces/07-rules.md` |
| 8 | Tips & Tricks | NOT STARTED | `mediums/interior-surfaces/08-tips-tricks.md` |

### Phase 3: Concept Super Prompts

| Medium | Status | File |
|--------|--------|------|
| Small Box Packaging | NOT STARTED | `mediums/small-box-packaging/concept-super-prompt.md` |
| Premium Box Packaging | NOT STARTED | `mediums/premium-box-packaging/concept-super-prompt.md` |
| Mailer Box | NOT STARTED | `mediums/mailer-box/concept-super-prompt.md` |
| Print Booklet | NOT STARTED | `mediums/print-booklet/concept-super-prompt.md` |
| Interior Surfaces | NOT STARTED | `mediums/interior-surfaces/concept-super-prompt.md` |

### Phase 4: Concept Generation

| Surface | Status | Folder |
|---------|--------|--------|
| Briefcase | NOT STARTED | `concepts/briefcase/` |
| Outer Amazon Box | NOT STARTED | `concepts/outer-amazon-box/` |
| Cubicle Shank box | NOT STARTED | `concepts/cubicle-shank-box/` |
| Cell Talk box | NOT STARTED | `concepts/cell-talk-box/` |
| Rap Sheets box | NOT STARTED | `concepts/rap-sheets-box/` |
| Sweet Nothings box | NOT STARTED | `concepts/sweet-nothings-box/` |
| Lifer Ink box | NOT STARTED | `concepts/lifer-ink-box/` |
| Turf Tags box | NOT STARTED | `concepts/turf-tags-box/` |
| Survival Manual | NOT STARTED | `concepts/survival-manual/` |
| Compartment Cover | NOT STARTED | `concepts/compartment-cover/` |
| Trays | NOT STARTED | `concepts/trays/` |

### Phase 5: Image Generation

Track in each surface's `concepts/` folder as generation rounds proceed.

---

## Parallel Execution Map

### Wave 1 — Project Context (parallel)
- [ ] Product Profile (1 session)
- [ ] Design Brief: Briefcase (1 session)
- [ ] Design Brief: Outer Amazon Box (1 session)

### Wave 2 — Remaining Briefs (parallel, while Wave 1 finishes)
- [ ] Design Briefs: Item boxes — batch 2-3 per session
- [ ] Design Brief: Survival Manual (1 session)
- [ ] Design Brief: Interior Surfaces (1 session — covers compartment cover + trays)

### Wave 3 — Medium Context Builds (parallel, 5 sessions)
- [ ] Small Box Packaging (8 docs)
- [ ] Premium Box Packaging (8 docs)
- [ ] Mailer Box (8 docs)
- [ ] Print Booklet (8 docs)
- [ ] Interior Surfaces (8 docs)

### Wave 4 — Concept Super Prompts (parallel, 5 sessions)
- [ ] One per medium — each session produces a concept super prompt

### Wave 5 — Concept Generation (parallel, up to 11 sessions)
- [ ] Run concept super prompt per surface

### Wave 6 — Image Generation & Iteration
- [ ] Image Storm per surface

---

## Folder Structure

```
product/vibe-design/
├── README.md                    ← You are here
├── shared/                      # Reusable context
│   ├── product-profile.md       # Phase 1 — built once
│   └── brand-context.md         # Compiled voice/world/character reference
├── mediums/                     # Phase 2 — one folder per medium type
│   ├── small-box-packaging/     # 8 context docs + concept super prompt
│   ├── premium-box-packaging/
│   ├── mailer-box/
│   ├── print-booklet/
│   └── interior-surfaces/
├── briefs/                      # Phase 1 — one design brief per surface
├── concepts/                    # Phase 4 — generated concepts per surface
│   ├── briefcase/
│   ├── outer-amazon-box/
│   ├── cubicle-shank-box/
│   ├── cell-talk-box/
│   ├── rap-sheets-box/
│   ├── sweet-nothings-box/
│   ├── lifer-ink-box/
│   ├── turf-tags-box/
│   ├── survival-manual/
│   ├── compartment-cover/
│   └── trays/
└── super-prompts/               # The SOP super prompt templates (tools)
    ├── 01-design-brief-generator.md
    ├── 02-product-profile-generator.md
    ├── 03-field-overview.md
    ├── 04-first-principles.md
    ├── 05-mece-principles.md
    ├── 06-mece-mistakes.md
    ├── 07-mece-artifacts.md
    ├── 08-archetypes.md
    ├── 09-rules.md
    ├── 10-tips-tricks.md
    ├── 11-concept-super-prompt-generator.md
    └── 12-image-storm.md
```

---

## Existing Project Resources

These documents already exist and feed into the Vibe Design process. Don't rebuild what's already done.

| Resource | Location | Use In SOP |
|----------|----------|------------|
| World Rules | `product/copy/world-rules.md` | Product Profile, Design Briefs |
| Brad Voice Guide | `product/copy/brad-copy-voice-guide.md` | Product Profile, Design Briefs |
| Brad Sterling Profile | `product/copy/brad-sterling-profile.md` | Product Profile (NEEDS UPDATE — has OG refs) |
| Copy Doc v7 | `product/copy/copy-doc-v7.md` | Design Briefs (all copy text) |
| Exterior Copy v5 | `product/copy/exterior-copy-v5.md` | Brief: Briefcase |
| Outer Box Copy v1 | `product/copy/outer-box-copy-v1.md` | Brief: Outer Amazon Box (NEEDS UPDATE) |
| Item Specs v7 | `product/specs/item-specs-v7.md` | All item box briefs |
| Dimensions Spec v10 | `product/specs/dimensions-spec-v10.md` | Physical constraints for all surfaces |
| Packaging Spec v9 | `product/specs/packaging-spec-v9.md` | Structure, reveal sequence |
| Dielines (all 10) | `production/dielines/` | Physical dimensions for every surface |
| Design Templates | `production/templates/` | Artwork zones for every surface |
| Existing Image Prompts | `product/image-prompts/` | Reference for iteration |
| Product Surface Art | `product/images/` | Reference images for generation |
