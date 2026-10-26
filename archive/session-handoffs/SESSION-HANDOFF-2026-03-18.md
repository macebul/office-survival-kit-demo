# Session Handoff — March 18, 2026

## What You Are

You are continuing a creative session helping design AI image generation prompts for the **Office Survival Kit** — a prison-themed office humor gift product. The prompts generate flat 2D photorealistic texture maps that get applied to a 3D model for a pitch meeting and website.

---

## What Was Completed This Session

### Briefcase Exterior Image Prompts — DONE (v2.0)

All 6 exterior surface prompts + belly band are written and saved in:
**`blender/Blender Creation Docs/briefcase-image-prompts-v1.md`** (v2.0)

| Surface | Content | Status |
|---------|---------|--------|
| Lid (14" × 11.5") | Main label, CLEARED stamp, evidence tag, "HELLO MY NAME IS / STILL HERE SOMEHOW — O.G." name tag | ✅ Done |
| Front Face (14" × 5") | Duct tape handle, printed clasps, IT Asset Tag, Gary QC sticker, FRAGILE (EMOTIONALLY), THIS SIDE UP (probably) | ✅ Done |
| Back Face (14" × 5") | Nutrition Facts parody, Ingredients, Best By, Care & Storage, Recycling, Made In | ✅ Done |
| Bottom (14" × 11.5") | NOTICE label (no "use it at home" line), OG sticky note, PLU 4011 sticker, NOT THIS SIDE UP, VOID escalation, RECEIVED stamp, "SECRET COMPARTMENT →" scratched arrow aligned to actual mug compartment position on other side | ✅ Done |
| Left Edge (11.5" × 5") | "DAYS WITHOUT INCIDENT: 0" workplace safety sign — giant zero, "Previous record: 1 (See: The Printer Incident of 2019)", "Reset by: Kevin" | ✅ Done |
| Right Edge (11.5" × 5") | MISSING poster for confiscated stapler — hand-drawn sketch, tear-off tabs with "EXT. 404" (not found error), some tabs torn off | ✅ Done |
| Belly Band (front + back) | Brad Sterling / Elevate Co. corporate wrapper | ✅ Done |

### Key Decisions Made This Session

- **"THIS SIDE UP (probably)"** moved from lid to front face (logically belongs on the side you see when orienting)
- **OG sticky note removed from front face** (was reacting to IT Asset Tag — cut for cleanliness)
- **All prompts switched from flat graphic design to photorealistic product photography** — real paperboard texture, real sticker edge thickness, even studio lighting
- **MONDAY ransom note (left edge) REPLACED** with Days Without Incident safety sign — visual-first comedy
- **Travel sticker cluster (right edge) REPLACED** with MISSING stapler poster — cross-surface callback to Tray 2 chalk outline
- **"HELLO MY NAME IS" name tag added to lid** — "STILL HERE SOMEHOW — O.G." (double meaning: O.G. = slang + Owen Granger's initials)
- **Bottom surface wear dialed back** — "slightly lived-in" not "war zone" (first generations were too distressed)
- **Bottom additions:** OG sticky note near NOTICE ("Management is not responsible. First honest thing they've printed."), RECEIVED date stamp, SECRET COMPARTMENT arrow
- **Missing stapler tear-off tabs use EXT. 404** — "not found" error as phone extension
- **Image prompts must be single continuous text blocks** — no line breaks within prompts

---

## What Needs To Be Done Next — Interior Surfaces

The user wants to create image prompts for the **briefcase INTERIOR** surfaces next. Priority surfaces:

### 1. Interior Lid (~13.5" × ~11.0")
The underside of the lid — first thing seen when the case opens.

**From the specs:**
- Dark charcoal surface (warmer than exterior matte black)
- Two pockets: horizontal pocket (4.5" × 1.25") for intake/custody transfer card + vertical pocket (3.5" × 4.5") for map
- Remaining surface available for printed copy (currently TBD in docs)
- The intake card is an "INMATE TRANSFER LOG" — columnar date-card format with pre-filled fake handwritten entries

**Open question from last session:** Interior lid copy is TBD in the docs. Need to decide: leave as dark charcoal with just pockets? Or design institutional elements for it?

### 2. Top-Down View — First Thing You See When Lid Opens
This is the composed view looking straight down into the open case.

**What's visible:**
- **Booking frame** (~11" × ~9" outer, ~7" × ~5" opening) resting on top of everything
  - Height ruler markings on both vertical sides
  - "CORPORATE CORRECTIONAL FACILITY — BOOKING DEPT." across top border
  - Case number across bottom border
  - Black and white / muted palette
  - Back side has additional comedy copy (TBD)
- **Document Set 1** (~13.0" × ~6.5") partially visible beneath/around the booking frame — format TBD
- **Tray 1 edges** visible — dark carbon fiber texture with **prison orange accent trim** on top edge
- **Divider wall** visible at the back — dark charcoal, hides mug compartment

**The user referred to "that orange divider block or sheet at the very top"** — this likely refers to the prison orange accent trim on the tray borders, or possibly Document Set 1's appearance. Clarify with them.

### 3. Additional Interior Surfaces (Future)
- Tray 1 top-down (3 item boxes in Pelican-style recesses with chalk outlines)
- Tray 2 top-down (3 card boxes + empty stapler recess with orange chalk outline)
- Compartment cover (top teaser + underside payoff)
- Individual item box faces (6 boxes × 6 sides each)
- Booking frame front and back as standalone textures

---

## Key Reference Documents

All docs at: `blender/Blender Creation Docs/`

| Document | What It Owns |
|----------|-------------|
| `briefcase-image-prompts-v1.md` | All briefcase exterior image prompts (v2.0 — CURRENT) |
| `exterior-spec-v3.md` | Physical specs for briefcase exterior surfaces |
| `exterior-copy-v4.md` | All copy text for briefcase exterior |
| `packaging-spec-v9.md` | Box structure, interior layout, reveal sequence, color scheme, tray design |
| `dimensions-spec-v10.md` | All measurements, coordinates, stack math |
| `copy-doc-v7.md` | All interior and item copy text |
| `world-rules.md` | Shared reality, vocabulary (office = prison) |
| `brad-copy-voice-guide.md` | Two-character voice system |
| `brad-sterling-profile.md` | Brad character profile |
| `outer-box-copy-v1.md` | Outer Amazon box copy (Brad's voice) |
| `outer-box-image-prompts-v1.md` | Outer Amazon box image prompts |
| `item-specs-v7.md` | Physical specs for each item |

---

## Interior Design Specs (Quick Reference)

### Color Scheme
- Interior walls: dark charcoal (warmer than exterior black)
- Tray surfaces: dark carbon fiber texture — very dark charcoal with subtle metallic sheen
- Tray top edge border: **prison orange** accent trim
- Tray floors (where boxes sit): slightly lighter gray/warm dark tone (contrast for chalk outlines)
- Chalk outlines: white/cream (EXCEPT confiscated stapler = **prison orange**)
- Inside lid: same dark charcoal as walls
- Divider wall: same dark charcoal
- Compartment cover: dark carbon fiber (matching trays)
- Finger notch trim: prison orange U-shaped inserts

### Interior Layout (Top-Down)
```
┌─────────────────────────────────────────────────────┐
│                  FRONT ZONE (6.5" deep)              │
│  ┌─────────────────────────────────────────────────┐ │
│  │              TRAY 1 (on top)                     │ │
│  │  [PEN BOX 6.5"×1.75"] [TATTOO 5"×3.5"] [STICKER]│ │
│  └─────────────────────────────────────────────────┘ │
│  ┌─────────────────────────────────────────────────┐ │
│  │              TRAY 2 (beneath)                    │ │
│  │  [AFFIRM] [COMPLAINT] [PASSIVE-AGG] [STAPLER∅]  │ │
│  └─────────────────────────────────────────────────┘ │
├─ DIVIDER WALL (0.25" thick) ─────────────────────────┤
│                  BACK ZONE (4.25" deep)              │
│         [MUG on side] + shredded paper               │
│         [ACTIVITY GUIDE on floor under trays]        │
└─────────────────────────────────────────────────────┘
```

### Reveal Sequence (Relevant Steps)
1. Open lid → see inside lid + booking frame on top
2. Pick up booking frame → photo prop moment
3. See Document Set 1 on Tray 1
4. Interact with Tray 1 items (pen, tattoos, stickers)
5. Lift Tray 1 → see Document Set 2 on Tray 2
6. Interact with Tray 2 items (cards × 3, empty stapler recess)
7. Lift Tray 2 → compartment cover visible
8. Lift cover → mug revealed in shredded classified paper

---

## Product Context

- **Office Survival Kit** — prison-themed office humor gift in a matte black paperboard briefcase
- **Two-character system:** OG (Owen Granger, original creator, dry/deadpan) vs. Brad Sterling (B.S., corporate nemesis, Elevate Co., repackaged the OG's kit)
- **Outer Amazon box** = 100% Brad's polished corporate branding
- **Briefcase exterior** = OG's institutional/prison aesthetic (rubber stamps, evidence tags, duct tape)
- **Interior** = OG's design + Brad's item repackaging + OG's sticky note corrections
- **7 items + 1 empty recess** (confiscated stapler chalk outline)
- **Comedy rule:** "Format stays buttoned-up, content gets unleashed"
- **Target:** Q4 2026, ~$24.99-29.99 retail, Amazon primary channel
- These images are for a **pitch meeting 3D model + website**, not final production

---

## User Preferences

- Image prompts must be **single continuous text blocks** — no line breaks within prompts
- All prompts use **photorealistic product photography** style (not flat graphic design)
- No auto-rotate on 3D model
- Uses dictation — keep buttons away from bottom screen edge
- Prefers plan mode for non-trivial tasks
- Wants visual-first comedy (instant visual reads, not dense text walls) for side surfaces
- Bottom surface should be "slightly lived-in" not heavily distressed
