# Office Survival Kit — Document Index

> **Last updated:** June 24, 2026
> **Purpose:** Hierarchical map of all project documentation. Provide this file to your boss or alongside any prompt so they know where everything lives and what state it's in.
> **Location:** `product/governance/DOCUMENT-INDEX.md`

---

## How to Use This Index

- **For boss review:** Sections 1-15 cover all current product documentation. Section 22 has a progress summary and remaining work list.
- **For focus group / analysis prompts:** Use files marked CURRENT below. All core documents have been updated to the single-character system (OG removed, June 2026).
- **For sourcing:** Use the Core Specs (Section 2) + Dielines (Section 9).
- **Authoritative versions are always the highest version number** in their folder.
- Archive folders contain historical versions only — never reference these for current product state.

---

## 1. PRODUCT OVERVIEW (Start Here)

| File | Path | Status | What It Covers |
|------|------|--------|----------------|
| Product Profile | `product/product-profile.md` | CURRENT | Complete product overview — pitch, items, character, comedy architecture, competitive positioning, pricing |
| Authority Block v5 | `product/governance/updated-authority-block-v3.md` | CURRENT | All locked decisions, what's been removed, governance. **Read this first.** |
| Documentation Roadmap v8 | `product/governance/documentation-roadmap-v6.md` | CURRENT | Master version tracker, document relationships, component list |
| Open Items Tracker | `product/open-items.md` | NEEDS UPDATE | All unresolved questions, pending decisions, action items (~150+ items). Some items now resolved — see Section 22. |

---

## 2. CORE PRODUCT SPECS (Sourcing-Ready)

These are the source-of-truth documents. All updated April 2026 — OG removed, single tray mold, pen box corrected.

| File | Path | Status | What It Covers |
|------|------|--------|----------------|
| Dimensions Spec v11 | `product/specs/dimensions-spec-v10.md` | CURRENT | Every measurement in the product. Use for quoting. |
| Item Specs v9 | `product/specs/item-specs-v7.md` | CURRENT | Physical specs for all 7 items + components A-J. Sourcing-ready. |
| Packaging Spec v10 | `product/specs/packaging-spec-v9.md` | CURRENT | Box construction, tray layout, reveal sequence, parts list |
| Copy Doc v9 | `product/copy/copy-doc-v7.md` | CURRENT | All interior + item copy text. Brad Sterling sole voice. |

---

## 3. CHARACTER & VOICE

| File | Path | Status | What It Covers |
|------|------|--------|----------------|
| World Rules v2 | `product/copy/world-rules.md` | CURRENT | "Office = prison" reality framework, vocabulary, tone rules |
| Brad Copy Voice Guide v3 | `product/copy/brad-copy-voice-guide.md` | CURRENT | Brad's two writing modes, comedy patterns, voice rules, recurring characters (Kevin, Gary, Diane) |
| Brad Sterling Profile v3 | `product/copy/brad-sterling-profile.md` | CURRENT | Character profile, visual DNA. Single-character system, OG removed. |

---

## 4. EXTERIOR & PACKAGING COPY

| File | Path | Status | What It Covers |
|------|------|--------|----------------|
| Exterior Copy v5 | `product/copy/exterior-copy-v5.md` | CURRENT | Briefcase exterior copy (belly band flagged TBD) |
| Exterior Spec v4 | `product/specs/exterior-spec-v4.md` | CURRENT | Briefcase exterior visual spec. OG removed, all copy refs updated to v5. |
| Outer Box Copy v1.2 | `product/copy/outer-box-copy-v1.md` | CURRENT | Amazon box copy (6 surfaces + interior lid). OG removed, Brad sole voice. |

---

## 5. DOC SET 1 — ELEVATE MAGAZINE

| File | Path | Status | What It Covers |
|------|------|--------|----------------|
| Magazine Structure v1 | `product/copy/magazine-structure-v1.md` | CURRENT | Full 30-page magazine page-by-page structure, voice architecture, format specs. **Read this for Doc Set 1 direction.** |
| Magazine Structure v2 | `product/copy/magazine-structure-v2.md` | CURRENT | Updated magazine structure |
| Cubicle Shank Spread Copy v1 | `product/copy/cubicle-shank-spread-copy-v1.md` | CURRENT | Full copy for the pp.10-11 Cubicle Shank ad spread |
| The Block Source Material v1 | `product/copy/the-block-source-material-v1.md` | CURRENT | Source material for The Block magazine content |
| The Upgrade Spread Copy v1 | `product/copy/the-upgrade-spread-copy-v1.md` | CURRENT | Copy for The Upgrade spread in the magazine |
| Welcome to the Workforce v2 | `product/copy/welcome-to-the-workforce-copy-v2.md` | CURRENT | Welcome spread copy |
| Full Kit Audit | `product/copy/full-kit-audit.md` | CURRENT | Complete audit of all kit copy elements |
| Cubicle Shank Spread Prompt | `prompts/cubicle-shank-spread-prompt.md` | CURRENT | Self-contained prompt for developing the pp.10-11 Shank ad spread |

**Note:** The magazine format (8.5x11", 30-page glossy) supersedes the previous 12-page, 5.5x7" booklet format. Previous booklet docs are archived at `archive/doc-set-1-booklet/`.

---

## 6. AMAZON & MARKETING

| File | Path | Status | What It Covers |
|------|------|--------|----------------|
| Amazon Strategy v1.1 | `product/strategy/amazon-strategy-v1.md` | CURRENT | Listing images, A+ content, launch plan. OG removed, single-character system. |
| Card Decks Pitch | `product/strategy/card-decks-pitch.md` | REFERENCE | Original pitch for card deck items |
| Goals & Metrics v1 | `product/strategy/goals-metrics v01.md` | REFERENCE | Early goals doc |

---

## 7. IMAGE GENERATION PROMPTS

| File | Path | Status | What It Covers |
|------|------|--------|----------------|
| Image Prompts v6 | `product/image-prompts/image-prompts-v5.md` | CURRENT | Interior shot prompts (Brad-only) |
| Briefcase Image Prompts v2 | `product/image-prompts/briefcase-image-prompts-v1.md` | CURRENT | Briefcase exterior surface prompts (belly band TBD) |
| Outer Box Image Prompts v2.2 | `product/image-prompts/outer-box-image-prompts-v1.md` | CURRENT | Amazon box surface prompts |
| Art Direction Brief v1 | `product/image-prompts/art-direction-brief-v1.md` | CURRENT | Master art direction for all AI image generation |
| Image Prompt Spec v1 | `product/image-prompts/image-prompt-spec-v1.md` | CURRENT | Specification for how image prompts should be structured |
| Box Mockup Prompts v1 | `product/image-prompts/box-mockup-prompts-v1.md` | CURRENT | Prompts for generating item box mockup images |
| Cell Talk Image Prompts | `product/image-prompts/cell-talk-image-prompts.md` | CURRENT | Prompts for Cell Talk box surfaces |
| Rap Sheets Image Prompts | `product/image-prompts/rap-sheets-image-prompts.md` | CURRENT | Prompts for Rap Sheets box surfaces |
| Sweet Nothings Image Prompts | `product/image-prompts/sweet-nothings-image-prompts.md` | CURRENT | Prompts for Sweet Nothings box surfaces |
| Lifer Ink Image Prompts | `product/image-prompts/lifer-ink-image-prompts.md` | CURRENT | Prompts for tattoo box surfaces (all 6 faces) |
| Doc Set 1 Image Prompts | `product/image-prompts/doc-set-1-image-prompts.md` | CURRENT | Prompts for magazine interior illustrations |
| Doc Set 1 Photorealistic | `product/image-prompts/doc-set-1-photorealistic-prompts.md` | CURRENT | Photorealistic image prompts for magazine |
| Booklet Pages 10-15 | `product/image-prompts/booklet-pages-10-15-image-prompts.md` | CURRENT | Prompts for specific magazine spreads |
| Manual Image Brief v1 | `product/image-prompts/manual-image-generation-brief-v1.md` | CURRENT | Brief for manual/booklet images |
| Welcome to Workforce Prompts | `product/image-prompts/welcome-to-workforce-image-prompts-v1.md` | CURRENT | Prompts for welcome spread imagery |
| Protocol Checklist Backgrounds | `product/image-prompts/protocol-checklist-background-prompts.md` | CURRENT | Background image prompts for protocol pages |
| Style Reference Template v1 | `product/image-prompts/style-reference-template-v1.md` | REFERENCE | Template for style references |
| Prompt Conversion Examples | `product/image-prompts/prompt-conversion-examples.md` | REFERENCE | How to convert concepts to image prompts |
| Prison/Office Overlap Matrix | `product/image-prompts/prison-office-overlap-matrix.md` | REFERENCE | Visual vocabulary mapping prison-to-office |
| Test Batch 01 | `product/image-prompts/test-batch-01.md` | REFERENCE | Early test batch results |

---

## 8. 3D MODEL & BLENDER

| File | Path | Status | What It Covers |
|------|------|--------|----------------|
| Blender Briefing v6 | `blender/blender-briefing-v6.md` | CURRENT | 3D modeling session guide. Updated for all April changes. |
| Blender Script v5 | `blender/blender-v5.py` | CURRENT | Python script that generates the Blender model |
| Kit Views Panel | `blender/kit_views_panel.py` | DEFERRED | Camera presets. Has stale booking frame + Doc Set 3 names. Will rebuild post-sourcing. |

---

## 9. DIELINES (Sourcing Reference — All Verified)

All SVGs in `production/dielines/` folder. Dimensions in millimeters. Verified and audited.

| File | Component | Dimensions (mm) |
|------|-----------|-----------------|
| `production/dielines/cell-talk-box.svg` | Cell Talk cards (tuck-end) | 101.6 x 63.5 x 19.05 |
| `production/dielines/rap-sheets-box.svg` | Rap Sheets cards (tuck-end) | 101.6 x 63.5 x 19.05 |
| `production/dielines/sweet-nothings-box.svg` | Sweet Nothings cards (tuck-end) | 101.6 x 63.5 x 19.05 |
| `production/dielines/lifer-ink-box.svg` | Lifer Ink tattoos (tuck-end) | 127.0 x 88.9 x 12.7 |
| `production/dielines/turf-tags-box.svg` | Turf Tags stickers (tuck-end) | 127.0 x 88.9 x 12.7 |
| `production/dielines/cubicle-shank-box.svg` | Cubicle Shank pen (tray-and-sleeve) | 165.1 x 44.45 x 25.4 |
| `production/dielines/tray.svg` | Universal tray x2 (identical mold) | 342.9 x 165.1 x 28.575 |
| `production/dielines/compartment-cover.svg` | J-shaped compartment cover | 342.9 x 283.5 (flat) |
| `production/dielines/outer-amazon-box.svg` | Outer mailer box (35% scale) | 393.7 x 330.2 x 165.1 |
| `production/dielines/briefcase.svg` | Briefcase clamshell | 355.6 x 292.1 x 127.0 |

---

## 10. CONTENT & WEB DATA

| File | Path | Status | What It Covers |
|------|------|--------|----------------|
| Content Data | `src/data/content.ts` | CURRENT | All website copy, item descriptions, specs. OG notes cleared. |
| Camera Presets | `src/data/cameraPresets.ts` | DEFERRED | 3D viewer camera positions. Has stale names. |

---

## 11. REFERENCE / HISTORICAL (Do Not Use for Current Product State)

| File | Path | Notes |
|------|------|-------|
| Activity Guide Recs v2 | `product/copy/archive/activity-guide-recs-v2-ARCHIVED-2026-06-24.md` | Content recs for Doc Set 2. Archived June 24 — pre-Brad consolidation. |
| Magazine Structure v1 | `product/copy/archive/magazine-structure-v1-ARCHIVED-2026-06-24.md` | Superseded by v2 (May 26). Archived June 24. |
| Welcome to Workforce v1 | `product/copy/archive/welcome-to-the-workforce-copy-v1-ARCHIVED-2026-06-24.md` | Superseded by v2 (May 27). Archived June 24. |
| Ideation Results v1 | `product/editorial/ideation-results-v1.md` | 100+ brainstorm ideas |
| Pre-Mortem Analysis | `product/risk-analysis/pre-mortem-*.md` | 3 files — risk analysis |
| Optimization Analysis | `product/risk-analysis/OPTIMIZATION-ANALYSIS.md` | Cost optimization |
| Session Handoffs | `archive/session-handoffs/SESSION-HANDOFF-*.md` | Historical session notes |
| Editorial Pass Results | `product/editorial/editorial-pass-results.md` | Editorial review findings |
| Cubicle Shank Box Copy | `product/copy/box-copy/archive/cubicle-shank-box-copy-ARCHIVED-2026-06-24.md` | Superseded by surface map. Archived June 24. |
| Lifer Ink Copy Pool | `product/copy/box-copy/archive/lifer-ink-copy-pool-ARCHIVED-2026-06-24.md` | Deprecated in favor of working doc. Archived June 24. |
| tmpclaude cleanup | `archive/tmpclaude-cleanup-2026-06-24/` | 615+ Claude session temp files cleaned up June 24. |

---

## 12. PROMPT TEMPLATES

| File | Path | Status | What It Covers |
|------|------|--------|----------------|
| Card Deck Copy | `prompts/01-card-deck-copy.md` | HAS OG REFS | Prompt for generating card deck copy |
| Doc Set Content | `prompts/03-doc-set-content.md` | HAS OG REFS | Prompt for doc set content generation |
| Product Handoff | `prompts/product-handoff-brad-only.md` | HAS OG REFS | Full product handoff doc (also .html) |
| Cubicle Shank Spread | `prompts/cubicle-shank-spread-prompt.md` | CURRENT | Self-contained prompt for pp.10-11 magazine ad spread |

---

## 13. ITEM CONTENT & CARD DECKS

Complete card deck content for all three card items.

| File | Path | Status | What It Covers |
|------|------|--------|----------------|
| Cell Talk Full Deck | `product/copy/card-decks/cell-talk-full-deck.md` | CURRENT | Complete 15-card affirmation deck (front/back copy for each card) |
| Rap Sheets Full Deck | `product/copy/card-decks/rap-sheets-full-deck.md` | CURRENT | Complete complaint card deck (front: charge, back: Brad's take) |
| Sweet Nothings v8 | `product/copy/card-decks/sweet-nothings-v8.md` | CURRENT | Complete passive-aggressive card deck (front: nice, back: truth) |

---

## 14. ITEM BOX COPY & SURFACE MAPS

Surface-by-surface copy for each individual item box. All Brad Sterling / Elevate Co. voice.

**Two document types exist:** Box Copy files (original format) and Surface Maps (production-ready format with design notes, decisions log, and image prompts). Surface Maps supersede Box Copy files when both exist. See `product/copy/box-copy/BOX-COPY-WORKFLOW.md` for the full workflow.

### Surface Maps (Production-Ready -- Source of Truth)

| File | Path | Status | What It Covers |
|------|------|--------|----------------|
| Cubicle Shank Surface Map | `product/copy/box-copy/cubicle-shank-surface-map.md` | CURRENT (June 19) | All surfaces of pen blister card. Element-by-element copy, design notes, decisions log, image prompts. |
| Mug Shot Surface Map | `product/copy/box-copy/mug-shot-surface-map.md` | CURRENT (June 23) | All 6 box surfaces + 2 mug surfaces. Center for Drinkable Chemicals (CDC). Includes Field Report, SDS, booking photo concept. |

### Box Copy Files (Current until Surface Map replaces them)

| File | Path | Status | What It Covers |
|------|------|--------|----------------|
| Cell Talk Box Copy | `product/copy/box-copy/cell-talk-box-copy.md` | CURRENT (v2) | All surfaces of the Cell Talk card box (tuck-end). Center for Normative Optimization. |
| Rap Sheets Box Copy | `product/copy/box-copy/rap-sheets-box-copy.md` | CURRENT (v1) | All surfaces of the Rap Sheets card box (tuck-end). Interpersonal Accountability Division. |
| Sweet Nothings Box Copy | `product/copy/box-copy/sweet-nothings-box-copy.md` | CURRENT (v1) | All surfaces of the Sweet Nothings card box (tuck-end). Ambient Relations Bureau. |
| Lifer Ink Box Copy | `product/copy/box-copy/lifer-ink-box-copy.md` | CURRENT (v1) | All 6 surfaces + tuck flap of the tattoo box. Center for Dermal Achievement. |
| Turf Tags Box Copy | `product/copy/box-copy/turf-tags-box-copy.md` | CURRENT (v1) | All 7 surfaces of the sticker box. Bureau of Territorial Affairs. IKEA strip. |
| Cubicle Shank Box Copy | Archived | ARCHIVED (June 24) | Superseded by surface map. See `product/copy/box-copy/archive/`. |

### Not Yet Started

| Item | Status | Notes |
|------|--------|-------|
| Briefcase Box Copy | NOT STARTED | Briefcase exterior surface-by-surface print copy (separate from Exterior Copy v5 which covers content/voice). |

### Workflow & Status Dashboard

| File | Path | Status | What It Covers |
|------|------|--------|----------------|
| Box Copy Workflow | `product/copy/box-copy/BOX-COPY-WORKFLOW.md` | CURRENT | Session instructions: document hierarchy, naming, file locations, archive rules |
| Cross-Item Status | `product/copy/box-copy/cross-item-status.md` | CURRENT | At-a-glance dashboard: copy status, image status, division names, next actions |

---

## 15. SUPPLEMENTAL COPY & SPECS

| File | Path | Status | What It Covers |
|------|------|--------|----------------|
| Missing Copy Items v1 | `product/copy/missing-copy-items-v1.md` | CURRENT | Mug Shot descriptions (3 lengths + on-mug options + insert card), card deck descriptions, compartment cover copy, confiscated stapler label, hidden easter eggs |
| Weight Estimate Table | `product/specs/weight-estimate-table.md` | CURRENT | Component-by-component weight breakdown (~4.91 lbs total), FBA compliance check |

---

## 16. ITEM BOX PACKAGING IMAGES (AI-Generated Surface Art)

All at `product/images/0 - NEW IMAGES/`. 43 final images in consolidated folder + 6 item-specific subfolders. All surfaces v01.

| Item | Folder | Images | Surfaces Covered |
|------|--------|--------|-----------------|
| Cell Talk | `Cards - Cell Talk/` | 7 | Front, Back, Long Side A, Long Side B, Short Side A, Short Side B, Tuck Flap |
| Rap Sheets | `Cards - Rap Sheets/` | 7 | Front, Back, Long Side A, Long Side B, Short Side A, Short Side B, Tuck Flap |
| Sweet Nothings | `Cards - Sweet Nothings/` | 7 | Front, Back, Long Side A, Long Side B, Short Side A, Short Side B, Tuck Flap |
| Cubicle Shank | `Pen - Cubicle Shank/` | 8 | Front, Back, Long Side A, Long Side B, Short Side A, Short Side B, Extra Side, Inside Case |
| Lifer Ink | `Tattoo - Lifer Ink/` | 7 | Front, Back, Long Side A, Short Side A, Short Side B, Full Case Front, Tuck Flap |
| Turf Tags | `Sticker - Turf Tags/` | 7 | Front, Back, Long Side A, Long Side B, Short Side A, Short Side B, Tuck Flap |

**Mug Shot** (at `product/images/0 - Images/v01/Mug - Mug Shot/`):
- 8 images: 6 box surfaces (Front, Back, Side A, Side B, Top, Bottom) + 2 mug surfaces (Front, Back)
- Copy updated June 23 — surface map documents all changes from v01. V02 images not yet generated.

**Not yet created:**
- Briefcase box surface images — Exterior surfaces exist at `Briefcase Box/Briefcase - Exterior/` (6 images) but no dedicated box-copy-aligned packaging art

---

## 17. PRODUCT PROFILES (Marketing Analysis)

Complete marketing analysis profiles for 8 product items. Each profile contains 14 standardized analysis documents.

| Profile | Path | Contents |
|---------|------|----------|
| Kit (main product) | `product/profiles/kit/` | 14 docs: basic profile, strategic overview, features/benefits, buyer psychology, personas, JTBD, prioritized benefits, objections, buyer questions, competitive differentiation, non-obvious angles, big idea, assumptions/gaps, final recommendations |
| Cubicle Shank | `product/profiles/cubicle-shank/` | 14 docs (same structure) |
| Lifer Ink | `product/profiles/lifer-ink/` | 14 docs |
| Turf Tags | `product/profiles/turf-tags/` | 14 docs |
| Card Decks | `product/profiles/card-decks/` | 14 docs (covers all 3 card items) |
| Confiscated Stapler | `product/profiles/confiscated-stapler/` | 14 docs |
| Mug Shot | `product/profiles/mug-shot/` | 14 docs |
| Doc Set 1 | `product/profiles/doc-set-1/` | 14 docs |

Each profile directory also contains a `copy-helper.html` for quick reference.

---

## 18. ARCHIVES (Historical Only)

| Folder | What's Inside |
|--------|---------------|
| `archive/blender-doc-versions/` | All superseded document versions (v2-v8 of various specs) |
| `archive/og-version/` | Pre-April-2026 docs preserving the two-character (OG + Brad) narrative system |
| `archive/og-prompts/` | OG-specific prompt templates (sticky notes, OG voice) |
| `archive/session-handoffs/` | Historical session notes |
| `archive/original-docs/` | Early project docs (original style guide, generic README) |
| `archive/doc-set-1-booklet/` | Pre-magazine Doc Set 1 booklet format (12-page, 5.5x7"). Superseded by ELEVATE magazine (May 2026). |

---

## 19. WEBSITE (Live Demo)

| Resource | URL / Path |
|----------|------------|
| Live Site | https://office-survival-kit-demo.netlify.app |
| Admin | https://app.netlify.com/projects/office-survival-kit-demo |

The website is for team visualization and alignment — not direct sales. It includes an interactive 3D briefcase model, item detail views, and gallery images. Note: the 3D model and some camera presets still reference removed elements (booking frame, Doc Set 3 names). The site copy in `src/data/content.ts` has been updated.

---

## 20. IMAGERY & VISUAL ASSETS

### Generated Surface Art (AI-generated, for production reference)

All at `product/images/`. Organized by component:

| Folder | Contents | Notes |
|--------|----------|-------|
| `0 - NEW IMAGES/` | **43 final item box packaging images** (all 6 items, all surfaces) | Latest packaging art — use these for review. See Section 16 for breakdown. |
| `Outer Box/` | 7 outer Amazon box surfaces (front, back, top, bottom, left, right, interior lid) | Full-resolution for print production |
| `Outer Box - Website/` | Web-optimized outer box surfaces + hero 3/4 view | For website/marketing use |
| `Briefcase Box/Briefcase - Exterior/` | 6 briefcase exterior surfaces (front, back, top, bottom, left, right) | Full-resolution |
| `Briefcase Box/` | Interior lid | |
| `Briefcase - Website/` | Briefcase surfaces web-optimized + interior lid, divider, trays, booking frame | Some images reference removed elements (booking frame) |
| `Top Layer/` | Doc Set 1 (Manual 1) front/back, booking frame front/back, orange divider | Booking frame images now historical reference |
| `Tray 1/` | Tray 1 empty and filled views | |
| `Tray 2/` | Tray 2 empty and filled views, Doc Set 2 (Manual 2) front/back | |
| `Back Zone Compartment/` | Compartment cover (top, vertical front, bottom flap, back wall, floor), Doc Set 2 booklet front/back | |
| `Items/` | Individual item hero shots (pen, tattoos, stickers, cards x3, stapler) | |
| `Items/Pen/` | Pen box — all surfaces, Blender vs. full versions, interior views | Tray-and-sleeve box |
| `Items/Stickers/` | Sticker box — all surfaces | Tuck-end box |
| `Items/Tats/` | Tattoo box — all surfaces | Tuck-end box |
| `Doc Set 1/` | Magazine page imagery across 4 versions (v01-v04, ~147 files) | Illustrations for ELEVATE magazine |

### Blender Renders (3D Model Screenshots)

All at `renders/`:

| Folder/Files | Contents |
|-------------|----------|
| `shot1_interior_hero.png` through `shot7_empty_case.png` | Final interior reveal sequence shots |
| `interior_shot*` files | Earlier iterations of interior shots |
| `handoff-screenshots/` | 26 camera-preset screenshots: Amazon views (CAM_Amz_*), exterior views (CAM_Ext_*), interior views (CAM_Int_*), item box views (CAM_PenBox_*, CAM_TatBox_*, CAM_StkBox_*) |

### Website Images

| Folder | Contents |
|--------|----------|
| `public/images/gallery/` | 6 gallery images (01-06.png) — hero, lifestyle, content spread, closeup, unboxing, gifting |
| `public/images/items/` | 7 item images used on website (shank, ink, tags, affirmations, complaints, passive-aggressive, stapler) |
| `public/images/booklet/` | 38 booklet/magazine pages (page-01 through page-38) |
| `public/images/trays/` | 5 tray-level item images (shank, switch, ink, tags, rags) |

### 3D Models

| File | Path | Purpose |
|------|------|---------|
| `kit.glb` | `public/models/` | Main product briefcase model (4.2MB) |
| `pen-box.glb` | `public/models/` | Cubicle Shank pen packaging box (4.7MB) |
| `stk-box.glb` | `public/models/` | Turf Tags sticker packaging (5.0MB) |
| `tat-box.glb` | `public/models/` | Lifer Ink tattoo packaging (5.3MB) |

### Image Notes

- All surface art is AI-generated (image prompts documented in Section 7)
- Outer box and briefcase surfaces are concept art for production — manufacturer will produce final print-ready files
- Some older images still show removed elements (booking frame, OG sticky notes) — these are historical and do not reflect current product design
- The 3D Blender model is the most accurate structural representation of the product

---

## 21. PRODUCTION ASSETS

| Folder | What's Inside |
|--------|---------------|
| `production/dielines/` | Raw structural die-cuts (SVG + PDF) — all 10 components |
| `production/templates/` | Design-ready templates with artwork zones (SVG + PDF) — all 10 components |
| `production/scripts/` | Template generation Python scripts (v1 + v2) |
| `production/PRODUCTION-WORKFLOW.md` | Production process documentation |

---

## 22. VIBE DESIGN SOP

The Vibe Design process ("First Principles to Final Design") generates medium context libraries, concept super prompts, and final image concepts for every design surface in the product.

| Resource | Path | What It Covers |
|----------|------|----------------|
| SOP Hub & Status Tracker | `product/vibe-design/README.md` | Master tracker — all phases, all surfaces, execution map |
| Brand Context (compiled) | `product/vibe-design/shared/brand-context.md` | Distilled voice, world, character reference for super prompts |
| Product Profile | `product/vibe-design/shared/product-profile.md` | Phase 1 output |
| Design Briefs | `product/vibe-design/briefs/` | One per design surface (11 total) |
| Medium Context Libraries | `product/vibe-design/mediums/` | 5 medium groups, 8 docs each |
| Concept Super Prompts | `product/vibe-design/mediums/*/concept-super-prompt.md` | Phase 3 outputs — one per medium |
| Generated Concepts | `product/vibe-design/concepts/` | Phase 4 outputs — one folder per surface |
| SOP Super Prompt Templates | `product/vibe-design/super-prompts/` | The reusable prompt tools |

**Medium Groups:** small-box-packaging, premium-box-packaging, mailer-box, print-booklet, interior-surfaces

**Design Surfaces (11):** Briefcase, Outer Amazon Box, 6 item boxes (Cubicle Shank, Cell Talk, Rap Sheets, Sweet Nothings, Lifer Ink, Turf Tags), Survival Manual, Compartment Cover, Trays

---

## PROGRESS SUMMARY & REMAINING WORK

### What's Done (as of June 24, 2026)

**Surface Maps (Production-Ready) — 2 of 7 items:**
- Cubicle Shank (June 19 — complete with design notes, decisions log, image prompts)
- Mug Shot (June 23 — all 6 box surfaces + 2 mug surfaces, complete with design notes, image prompts)

**Box Copy — COMPLETE for all 7 item boxes:**
- Cell Talk (v2 — reviewed and locked with stakeholder)
- Rap Sheets (v1 — full copy all surfaces)
- Sweet Nothings (v1 — full copy all surfaces)
- Cubicle Shank (archived — superseded by surface map)
- Lifer Ink (v1 — all 6 surfaces + tuck flap)
- Turf Tags (v1 — all 7 surfaces)
- Mug Shot (surface map serves as box copy — no separate box copy file)

**Packaging Images — v01 COMPLETE for all 7 items:**
- 43 total surface images across 6 items (at `product/images/0 - Images/v01/`)
- Mug Shot: 8 images (6 box + 2 mug) at `product/images/0 - Images/v01/Mug - Mug Shot/`
- v02 images only exist for Cubicle Shank (1 file)

**Card Deck Copy — COMPLETE for all 3 card items:**
- Cell Talk (15-card deck, front/back)
- Rap Sheets (full deck, front/back)
- Sweet Nothings (v8, full deck, front/back)

**Working Docs — Active development material:**
- Cubicle Shank (June 24 — extensive draft pool, status-tagged)
- Lifer Ink (June 24 — WY voice sweep complete, material being developed)
- Cell Talk, Rap Sheets, Sweet Nothings, Turf Tags (working docs current)

**Governance (June 24):**
- Box Copy Workflow document created (`BOX-COPY-WORKFLOW.md`)
- Cross-item status dashboard created (`cross-item-status.md`)
- Stale/superseded files archived with timestamps
- 615+ tmpclaude temp files cleaned up

**Other Completed Work:**
- All OG character references removed from active documents (Brad Sterling sole voice)
- Product profiles complete for all 8 items (14 analysis docs each)
- Dielines complete and verified for all 10 components
- Production templates generated for all components
- Outer box copy and images complete
- Briefcase exterior copy and images complete
- Weight estimate table created (~4.91 lbs, FBA compliant)
- Brad voice guide updated with recurring characters
- Doc Set 1 magazine structure and multiple spreads written
- 38 booklet pages generated

### What's Remaining

**Surface Maps (5 items need surface maps):**
- [ ] Cell Talk — box copy exists (v2), needs surface map conversion
- [ ] Rap Sheets — box copy exists (v1), needs surface map conversion
- [ ] Sweet Nothings — box copy exists (v1), needs surface map conversion
- [ ] Lifer Ink — box copy exists (v1), needs surface map conversion
- [ ] Turf Tags — box copy exists (v1), needs surface map conversion

**v02 Mockup Images (6 items need updated images):**
- [ ] Mug Shot — copy updated from v01, new mockups needed
- [ ] Lifer Ink — copy being updated, new mockups needed
- [ ] Cell Talk, Rap Sheets, Sweet Nothings, Turf Tags — pending surface map completion

**Briefcase Box (NOT STARTED):**
- [ ] Dedicated briefcase box surface-by-surface print copy (aligned to surface map format)
- [ ] Briefcase exterior print-production images (concept art exists but not surface-map-aligned)

**Other Remaining Items:**
- [ ] Compartment cover — 4-surface copy not finalized (draft in missing-copy-items-v1.md)
- [ ] Tray surface copy — not started
- [ ] Survival Manual (Doc Set 2) — activity content needs full rewrite for Brad's voice
- [ ] Doc Set 1 (ELEVATE Magazine) — format TBD, lid pocket content TBD
- [ ] Belly band — copy and inclusion TBD
- [ ] Sticker/tattoo final artwork — concepts exist, final art not created
- [ ] Physical prototyping — none started
- [ ] Sourcing — pending manufacturer quotes and samples

See `product/open-items.md` for the full ~150+ item tracker.
See `product/copy/box-copy/cross-item-status.md` for item-level dashboard.

---

## CURRENT PRODUCT STATE (Quick Reference)

- **Character:** Brad Sterling / Elevate Co. (sole voice — OG character removed April 2026)
- **Items:** 7 items + 1 empty recess (confiscated stapler chalk outline)
- **Item Boxes:** 5 tuck-end + 1 tray-and-sleeve (pen). All 6 have complete box copy and packaging images.
- **Trays:** 2 identical (single mold), landscape die-cut recesses
- **Doc Sets:** 2 (Doc Set 1 = ELEVATE Magazine, 8.5x11" glossy, on top layer; Doc Set 2 on compartment cover under Tray 2)
- **Layer Order (top to bottom):** Doc Set 1 → Tray 1 → Tray 2 → Doc Set 2 → Compartment Cover → Mug
- **Compartment Cover:** J-shaped, vertical surface = divider (no separate divider wall)
- **Removed:** Booking frame, OG sticky notes, between-trays doc set, OG character
- **Belly Band:** TBD / under review
- **Active Components:** A (item boxes), B (compartment cover), C (shredded packing), E (belly band TBD), F (outer Amazon box), G (Doc Set 2), H (Doc Set 1)
