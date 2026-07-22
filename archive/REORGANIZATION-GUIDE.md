# Project Reorganization Guide

> **Date:** May 13, 2026
> **Purpose:** Reference for finding files after the project restructure. Use this until you're comfortable with the new layout.

---

## Quick Navigation

| I'm looking for... | Go to... |
|---------------------|----------|
| Product specs (dimensions, items, packaging) | `product/specs/` |
| Copy & written content | `product/copy/` |
| Card deck full content | `product/copy/card-decks/` |
| AI image generation prompts | `product/image-prompts/` |
| Product surface art & reference images | `product/images/` |
| Prison version page illustrations | `product/images/Doc Set 1/v02/` |
| Authority block & roadmap | `product/governance/` |
| Master document index | `product/governance/DOCUMENT-INDEX.md` |
| Amazon strategy & goals | `product/strategy/` |
| Doc Set 1 content & design | `product/doc-sets/` |
| Editorial reviews | `product/editorial/` |
| Risk analysis / pre-mortem | `product/risk-analysis/` |
| Print-ready PDF manuals | `product/PDFs/` |
| Die-cuts for manufacturing | `production/dielines/` |
| Design templates with artwork zones | `production/templates/` |
| Template generation scripts | `production/scripts/` |
| Blender 3D files & scripts | `blender/` |
| 3D renders & handoff screenshots | `renders/` |
| AI content generation prompts | `prompts/` |
| Prison version experimental docs | `Prison Version Docs/` |
| Old document versions (v2–v8 specs) | `archive/blender-doc-versions/` |
| Pre-pivot OG character docs | `archive/og-version/` |
| Original marketing images | `archive/marketing-images/` |
| Session handoff notes | `archive/session-handoffs/` |
| Web app source code | `src/` |
| Website images, models, fonts | `public/` |

---

## What Moved Where

### From `blender/Blender Creation Docs/` (the big one)

This folder was the de-facto product documentation hub. It has been broken up by category:

| File | Old Location | New Location |
|------|-------------|--------------|
| updated-authority-block-v3.md | `blender/Blender Creation Docs/` | `product/governance/` |
| documentation-roadmap-v6.md | `blender/Blender Creation Docs/` | `product/governance/` |
| dimensions-spec-v10.md | `blender/Blender Creation Docs/` | `product/specs/` |
| item-specs-v7.md | `blender/Blender Creation Docs/` | `product/specs/` |
| packaging-spec-v9.md | `blender/Blender Creation Docs/` | `product/specs/` |
| exterior-spec-v3.md | `blender/Blender Creation Docs/` | `product/specs/` |
| copy-doc-v7.md | `blender/Blender Creation Docs/` | `product/copy/` |
| exterior-copy-v5.md | `blender/Blender Creation Docs/` | `product/copy/` |
| outer-box-copy-v1.md | `blender/Blender Creation Docs/` | `product/copy/` |
| world-rules.md | `blender/Blender Creation Docs/` | `product/copy/` |
| brad-copy-voice-guide.md | `blender/Blender Creation Docs/` | `product/copy/` |
| brad-sterling-profile.md | `blender/Blender Creation Docs/` | `product/copy/` |
| activity-guide-recs v2.md | `blender/Blender Creation Docs/` | `product/copy/` |
| image-prompts-v5.md | `blender/Blender Creation Docs/` | `product/image-prompts/` |
| briefcase-image-prompts-v1.md | `blender/Blender Creation Docs/` | `product/image-prompts/` |
| outer-box-image-prompts-v1.md | `blender/Blender Creation Docs/` | `product/image-prompts/` |
| box-mockup-prompts-v1.md | `blender/Blender Creation Docs/` | `product/image-prompts/` |
| doc-set-1-image-prompts.md | `blender/Blender Creation Docs/` | `product/image-prompts/` |
| amazon-strategy-v1.md | `blender/Blender Creation Docs/` | `product/strategy/` |
| goals-metrics v01.md | `blender/Blender Creation Docs/` | `product/strategy/` |
| card-decks-pitch.md | `blender/Blender Creation Docs/` | `product/strategy/` |
| doc-set-1-copy-v1.md | `blender/Blender Creation Docs/` | `product/doc-sets/` |
| doc-set-1-design-system.md | `blender/Blender Creation Docs/` | `product/doc-sets/` |
| ideation-results-v1.md | `blender/Blender Creation Docs/` | `product/editorial/` |
| pre-mortem-analysis.md | `blender/Blender Creation Docs/` | `product/risk-analysis/` |
| pre-mortem-action-plan.md | `blender/Blender Creation Docs/` | `product/risk-analysis/` |
| pre-mortem-risk-mitigation.md | `blender/Blender Creation Docs/` | `product/risk-analysis/` |
| OPTIMIZATION-ANALYSIS.md | `blender/Blender Creation Docs/` | `product/risk-analysis/` |
| images/ (entire folder) | `blender/Blender Creation Docs/images/` | `product/images/` |
| AW - rev 022 - OSK Manual 03-13-26.pdf | `blender/Blender Creation Docs/` | `product/PDFs/` |
| OSK - rev 001 - OSK Manual.pdf | `blender/Blender Creation Docs/` | `product/PDFs/` |
| blender-briefing-v6.md | `blender/Blender Creation Docs/` | `blender/` (moved up one level) |
| blender-v5.py | `blender/Blender Creation Docs/` | `blender/` (moved up one level) |
| SESSION-HANDOFF-2026-03-11.md | `blender/Blender Creation Docs/` | `archive/session-handoffs/` |
| SESSION-HANDOFF-2026-03-18.md | `blender/Blender Creation Docs/` | `archive/session-handoffs/` |
| archive/ (33 old versions) | `blender/Blender Creation Docs/archive/` | `archive/blender-doc-versions/` |
| OG Version Archive/ (14 files) | `blender/Blender Creation Docs/OG Version Archive/` | `archive/og-version/` |

### From `docs/`

The `docs/` folder has been eliminated. Contents moved to `product/`:

| File | Old Location | New Location |
|------|-------------|--------------|
| cell-talk-full-deck.md | `docs/` | `product/copy/card-decks/` |
| rap-sheets-full-deck.md | `docs/` | `product/copy/card-decks/` |
| sweet-nothings-v8.md | `docs/` | `product/copy/card-decks/` |
| lifer-ink-image-prompts.md | `docs/` | `product/image-prompts/` |
| editorial-pass-results.md | `docs/` | `product/editorial/` |

### From Project Root

| File | Old Location | New Location |
|------|-------------|--------------|
| DOCUMENT-INDEX.md | root | `product/governance/` |
| packaging-dimensions.md | root | `product/specs/` |
| goals and success metrics.md | root | `product/strategy/` |
| generate-templates.py | root | `production/scripts/` |
| generate-templates-v2.py | root | `production/scripts/` |
| addon copy.py | root | `archive/` |
| blender-example.png | root | `archive/` |
| OLD ORIGINAL - MASTER ILLUSTRATION STYLE GUIDE.md | root | `archive/original-docs/` |
| README.md | root | `archive/original-docs/` (copy — original kept) |

### From `images/` (root-level)

The root-level `images/` folder (12 marketing images) moved to `archive/marketing-images/`.

### From `dielines/` and `templates/`

Both moved under `production/`:

| Old Location | New Location |
|-------------|--------------|
| `dielines/` | `production/dielines/` |
| `templates/` | `production/templates/` |

### From `prompts/archive/`

| File | Old Location | New Location |
|------|-------------|--------------|
| 02-og-sticky-notes.md | `prompts/archive/` | `archive/og-prompts/` |
| 04-og-voice-throughout.md | `prompts/archive/` | `archive/og-prompts/` |

---

## What Did NOT Move

| Item | Location | Why |
|------|----------|-----|
| `src/` | root | Web app source code — untouched to avoid breaking imports |
| `public/` | root | Web assets — untouched to avoid breaking asset paths |
| `renders/` | root | Already well-organized |
| `prompts/` (active files) | root | Only the archive subfolder was moved out |
| `Prison Version Docs/` | root | Active experimental work |
| `Office Survival Kit.blend` | root | Blender needs this at root for relative paths |
| `Office Survival Kit.blend1` | root | Blender auto-backup |
| Config files | root | package.json, vite.config.ts, tsconfig, etc. |

---

## What Was Deleted

| Item | Reason |
|------|--------|
| ~150 `tmpclaude-*-cwd` files | Claude session temp artifacts (66 bytes each) |
| `nul` | Windows system artifact |
| `desktop.ini` | Windows folder metadata |
| `blender/Blender Creation Docs/` directory | Emptied and removed (all contents relocated) |

---

## Final Directory Structure

```
office-survival-kit-demo/
│
├── product/                        # All product documentation
│   ├── governance/                 #   Authority block, roadmap, master index
│   ├── specs/                      #   Dimensions, items, packaging specs
│   ├── copy/                       #   All written content + voice guides
│   │   └── card-decks/             #     Full card deck content
│   ├── image-prompts/              #   AI image generation prompts
│   ├── strategy/                   #   Amazon, goals, marketing
│   ├── doc-sets/                   #   Document set content & design
│   ├── editorial/                  #   Editorial reviews & ideation
│   ├── risk-analysis/              #   Pre-mortem & optimization
│   ├── images/                     #   Product surface art by component zone
│   │   ├── Doc Set 1/v02/         #     ← Prison version illustrations are HERE
│   │   └── (10 other zone folders)
│   └── PDFs/                       #   Print-ready manuals
│
├── production/                     # Manufacturing assets
│   ├── dielines/                   #   Raw die-cuts (SVG + PDF)
│   ├── templates/                  #   Design templates (SVG + PDF)
│   └── scripts/                    #   Template generation Python scripts
│
├── blender/                        # 3D tooling only (5 files)
├── renders/                        # 3D renders & handoff screenshots
├── prompts/                        # Active AI content prompts (7 files)
├── Prison Version Docs/            # Active experimental work (3 files)
│
├── archive/                        # All historical/superseded content
│   ├── blender-doc-versions/       #   33 old spec versions (v2–v8)
│   ├── og-version/                 #   14 pre-pivot OG character docs
│   ├── og-prompts/                 #   OG-specific prompt templates
│   ├── session-handoffs/           #   Historical session notes
│   ├── original-docs/              #   Old style guide, generic README
│   └── marketing-images/           #   12 original marketing images
│
├── src/                            # React/TypeScript web app (unchanged)
├── public/                         # Web assets — models, images, fonts (unchanged)
│
├── Office Survival Kit.blend       # Production 3D model
├── Office Survival Kit.blend1      # Blender backup
└── (config files)                  # package.json, vite, tsconfig, etc.
```
