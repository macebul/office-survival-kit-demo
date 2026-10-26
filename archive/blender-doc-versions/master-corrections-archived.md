# ~~Office Survival Kit — Master Corrections & Task Assignment~~

## ⛔ SUPERSEDED — DO NOT USE

| Field | Detail |
|-------|--------|
| **Status** | ARCHIVED — All corrections applied |
| **Superseded by** | Updated Authority Block (March 11, 2026) |
| **Archived on** | March 11, 2026 |
| **Reason** | The corrections documented here (surface assignments, handle placement, MONDAY ransom-note style, booking frame as physical cutout, document ownership rules) have all been applied to their respective documents. A subsequent layout redesign (vertical 3-tray stack → 2-zone side-by-side with hidden mug compartment) introduced a new round of changes now tracked by the updated Authority Block. This document's task list, Authority Block, and correction instructions are no longer current. |
| **What changed after this doc** | Box dimensions (13×8×6.5 → 14×11.5×5), interior layout (3 trays → 2 trays + mug compartment), tray design (open trays → die-cut recesses), booklets (3 → 2, coil-bound), closure system (magnets + belly band), booking frame (die-cut lid cutout → separate removable frame on solid lid), and more. See updated Authority Block for full delta. |

**If you are reading this document for any task, STOP. Use the updated Authority Block instead.**

---

*Original document preserved below for reference only. Nothing below this line is authoritative.*

---

# Office Survival Kit — Master Corrections & Task Assignment

**Created:** March 10, 2026
**Purpose:** This document contains everything needed to correct all project documentation in parallel across multiple chat windows. Each task is self-contained — hand the relevant section plus the Authority Block to a new Claude session and it can execute independently.

---

## ⚠️ AUTHORITY BLOCK — INCLUDE IN EVERY CHAT SESSION

**Copy-paste this entire block into every new chat session before assigning a task. This is the single source of truth that overrides anything in any existing document.**

---

### Surface Map (AUTHORITATIVE — Overrides All Documents)

The case is a rigid paperboard briefcase. When lying flat on a table, closed, ready to be opened:

| Surface Name | Dimensions | Physical Description | Elements |
|---|---|---|---|
| **Lid (Top Surface)** | 13" × 8" | Faces the ceiling when lying flat. Faces outward (away from carrier) when carried by handle. The lid hinges along the back 13" edge and swings away from the user when opened. | Main label ("OFFICE SURVIVAL KIT / Standard issue for your corporate sentence."), red rubber stamp ("CLEARED FOR OFFICE USE"), evidence/barcode tag (CASE NO. 9-5), THIS SIDE UP (probably) label |
| **Front Face** | 13" × 6.5" | Vertical wall facing the person sitting at the table. Faces the carrier's body when carried. The user faces this surface when they open the lid. | Handle (die-cut cardboard, duct tape wrapped, centered on X, vertically centered on face), two printed flat clasps (flanking handle), IT Asset Tag, INSPECTED BY: GARY sticker, FRAGILE stamp — all spread across the full surface, not clustered |
| **Back Face** | 13" × 6.5" | Vertical wall away from the person. Contains the lid hinge along its top 13" edge. | Nutrition Facts parody label, Ingredients tag, Best By date, Care & Storage instructions, Recycling symbol ("RECYCLE YOUR EXPECTATIONS"), Made In label |
| **Bottom Surface** | 13" × 8" | Rests on the table. | NOTICE label, Margaritaville sticker (weathered, no explanation), NOT THIS SIDE UP, VOID IF OPENED |
| **Left Edge** | 8" × 6.5" | Short side, left when facing the front face. | MONDAY in ransom note style (each letter different font/size/weight from cut newspaper sources, large, diagonal across surface) |
| **Right Edge** | 8" × 6.5" | Short side, right when facing the front face. | Oval travel sticker cluster (CFR3, BRK2, PKG-B) |

### Coordinate System (for 3D/Blender work)

1 Blender Unit = 1 inch. Case lies flat on table, lid opens upward.

| Axis | Dimension | Description |
|---|---|---|
| X | 13.0" | Length (left to right) |
| Y | 8.0" | Width (front to back). Front face = +Y wall. Back wall (hinge + D-rings) = -Y wall. |
| Z | 6.5" | Depth (bottom to top when lying flat). Bottom = Z=0. Lid outer = Z=6.5" |

Element placement in coordinate system:
- **Handle + clasps** → Front face (+Y wall, 13" × 6.5"). Handle vertically centered on face (Z = BOX_D / 2 = 3.25").
- **Main label + stamp + barcode tag** → Lid outer surface (+Z face, 13" × 8").
- **D-rings** → Back wall interior (-Y), flat edge down, curve toward +Y and +Z.
- **Lid hinge** → Back 13" edge where lid meets back face.

### Key Design Decisions (AUTHORITATIVE)

| Decision | Answer |
|---|---|
| Handle & clasp surface | Front face (13" × 6.5"), NOT the lid |
| Main label surface | Lid / top surface (13" × 8"), NOT the front face |
| Handle Z-position | Vertically centered on front face |
| Panel lines on exterior | NO — none on any surface |
| Booking frame (inside lid) | PHYSICAL DIE-CUT CUTOUT through the lid — not a printed graphic. ~6" × 4" opening, 1.5"–2" frame border with height rulers, "CORPORATE CORRECTIONAL FACILITY — BOOKING DEPT." across top |
| Clasps | Flat printed graphics only — no embossing, no physical hardware. Magnets hidden behind them for closure. |
| Exterior finish | Fully matte black box. Applied elements (stickers, labels, stamps) get subtle satin finish to read as separate objects. Nothing glossy. Overall look is slightly worn. |
| MONDAY (left edge) | Ransom note style — NOT COEXIST bumper sticker icons |
| Tattoo item name | "Lifer Ink" — NOT "Achievement Tats" |
| Check-in card (inside lid pocket) | Library-style date card aesthetic (old-school library date card format), but themed as a correctional facility check-in/out card. Tracks previous "inmates" who had this manual. Pre-filled with fake names and dates in different handwriting styles. |
| Spot gloss | No spot gloss on box surface. Satin finish only on applied elements. |
| Document architecture | Each document has ONE job. No duplicated specs across documents. Master doc references others, does not repeat them. |

---

## TASK LIST — Organized for Parallel Execution

### Dependencies

```
TIER 1 (No dependencies — can start immediately, in parallel):
  Task A: Exterior Spec rewrite
  Task B: Packaging Spec rewrite
  Task C: Item Specifications expansion
  Task D: Exterior Copy Doc corrections

TIER 2 (Depends on Tier 1 being complete):
  Task E: Physical Dimensions & Sourcing Spec corrections
  Task F: Blender Session Briefing corrections
  Task G: Blender Script corrections
  Task H: Image Prompts corrections

TIER 3 (Depends on Tier 2):
  Task I: Documentation Roadmap update
  Task J: Copy Document reconciliation
```

Tier 1 tasks can ALL be executed simultaneously in separate chat windows. Hand each window the Authority Block above plus the relevant task instructions below.

---

## TASK A: Exterior Spec Rewrite

**Input document:** `Office Survival Kit — Exterior Spec (Locked).md`
**Job after rewrite:** Owns ALL exterior visual decisions — finish, materials, what goes on each surface, element treatments, what is NOT on the exterior. Does NOT contain actual copy text (points to Exterior Copy Doc) or dimensions (points to Physical Dimensions Spec).

### What's Wrong

1. The current doc puts handle, clasps, AND main label all on one surface called "front face." In reality, the label is on the **lid (13" × 8")** and the handle/clasps are on the **front face (13" × 6.5")** — two different surfaces.
2. Section 8 ("Additional Exterior Surface Space") says surfaces are TBD. They're now fully assigned — see Authority Block surface map.
3. "What Is NOT on the Exterior" section says "Nothing on the top face except handle base attachment points" — wrong, the top face IS the lid and has the main label. Says "Nothing on the back face" — wrong, back face has Nutrition Facts cluster. Says "No glossy elements" — partially wrong, applied elements get satin finish.
4. Says "No panel lines" — this is CORRECT, keep it.
5. Handle position says "Top center of the FRONT FACE" — the surface is correct (front face) but the vertical position should be "vertically centered on the front face," not top center.
6. The document references only the front face elements. It needs to be expanded to cover all 6 surfaces.
7. Status should change from "LOCKED" to a new version number reflecting these corrections.

### Instructions

Rewrite the Exterior Spec from scratch using the Authority Block surface map. Organize by surface (6 sections). For each surface:
- State the surface name, dimensions, and physical description
- List every element on that surface with: element name, treatment (printed label / rubber stamp / sticker / physical hardware / etc.), position on surface, and brief visual description
- Do NOT include the actual copy text — write "[See Exterior Copy Doc]" and describe only the visual treatment

Include these sections:
- Overall first impression (keep existing — it's good)
- Overall finish (update to reflect matte + satin on applied elements)
- Per-surface element maps (6 sections)
- "What Is NOT on the Exterior" (rewritten to be accurate)
- Exterior Elements Master List (all 21 elements with correct surface assignments)
- Changelog (note this is a corrective rewrite)

Preserve everything from the original doc that is still correct (paperboard material, worn aesthetic, construction feel, corner/edge descriptions, handle material/texture/shape, clasp style, label material/edges/aging, stamp style, barcode tag style).

---

## TASK B: Packaging Spec Rewrite

**Input document:** `Office Survival Kit — Packaging Spec.md`
**Job after rewrite:** Owns ALL physical structure decisions — box construction, tray system, binder mechanism, interior layout, reveal sequence, stack math, inside lid design, interior color scheme, tray copy zones. Points to other docs for everything else.

### What's Wrong

1. **Critical correction notice at top is itself wrong.** It says handle should be on "TOP SURFACE (+Z face)." Handle is on the FRONT FACE (+Y wall). The label is on the lid/top surface (+Z face). The correction notice should be deleted entirely and replaced with accurate information.
2. **Exterior surface map is duplicated from Exterior Spec.** Per new document architecture, this entire section (Surfaces 1–6, Illustrator artboards, Exterior Element Master List) should be REMOVED and replaced with a brief summary + pointer to the Exterior Spec.
3. **Artboard dimensions were swapped.** Artboard 1 (label surface) was listed as 13" × 6.5" — should be 13" × 8". Artboard 2 (handle surface) was listed as 13" × 8" — should be 13" × 6.5". Since the full artboard table is moving to the Exterior Spec, this is resolved by removal, but confirm the Exterior Spec task gets the right dimensions.
4. **Clasp description says "printed/embossed, press-button detail."** Should be "flat printed graphics only."
5. **Closure line says "hidden behind printed faux-clasp graphics on top surface."** Should say "on front face."
6. **Check-in card description contradicts itself.** One paragraph says "NOT a library card" and the next says "Styled as an old-school library date card." Reconcile per Authority Block: library-style date card aesthetic, correctional facility theming.
7. **Copy status column shows "Copy TBD" for elements that have Draft v1 copy.** Update to "Draft v1 complete — see Exterior Copy Doc."
8. **Open Questions list has duplicate numbers** (two #15s and two #16s). Renumber.
9. **Open Question #7 says handle/clasp placement is on "TOP SURFACE (corrected from prior error)."** This is wrong. Should say "FRONT FACE."
10. **MONDAY element in master list (#20) says "ransom note style"** — this is actually CORRECT per user decision. But the Surface 5 description in the same document says "COEXIST bumper sticker." The Surface 5 description is wrong.
11. **"Locked Exterior Copy" section** duplicates copy from the Exterior Copy Doc. Remove and point to that doc.

### Instructions

Rewrite the Packaging Spec with the following structure:
- Delete the critical correction notice entirely
- **Concept section** — keep "The Contraband Binder" description
- **Box outer dimensions** — keep, but correct the closure line to reference "front face"
- **Exterior Design** — REPLACE the full surface map, artboard table, per-surface breakdowns, and master element list with: a brief 2-paragraph summary of the exterior approach + "For complete exterior surface specifications, see Exterior Spec. For all exterior copy, see Exterior Copy Doc."
- **Interior Design** — keep color scheme, chalk outline style, tray anatomy diagram
- **Interior Structure: Contraband Binder System** — keep stack order, reveal sequence, binder ring mechanism (all correct)
- **Tray Specifications** — keep all three tray specs (correct)
- **Lift Tab System** — keep (correct)
- **Inside Lid** — keep, but reconcile the check-in card description per Authority Block. Also confirm booking frame is described as a physical die-cut cutout.
- **Binder Pages** — keep (correct), including WARNING/DOCUMENTED CASES note
- **Copy Surfaces — Each Tray** — keep visible/hidden copy zone descriptions
- **Additional Inserts** — keep tattoo guide card, sticker guide card, fake polaroids
- **Base Copy** — keep (correct)
- **OG Character** — keep placeholder
- **Production Notes** — keep sourcing questions (correct)
- **Quality Checklist** — keep (correct)
- **Open Questions** — renumber, correct #7 to "FRONT FACE", remove any resolved items
- **Next Steps** — update to reflect current state (exterior copy draft exists, surface map is done, etc.)
- **Changelog** — add entry for this corrective rewrite

---

## TASK C: Item Specifications Expansion

**Input document:** `Office Survival Kit — Item Specifications.md`
**Job after rewrite:** Owns the physical spec for every item — material, dimensions, customization, sourcing questions. One section per item.

### What's Wrong

1. Only covers 5 of 12 items (Cubicle Shank, Snitch Switch, Achievement Tats, Turf Tags, Contraband Cry Rags).
2. "Achievement Tats" should be renamed "Lifer Ink."
3. Missing items: Solitary (ear plugs), Ankle Monitor (wristband), Evidence Eraser, Mug Shot (mug), Rap Sheet (notepad), Corporate Parole Passport (booklet), Yard Pass (novelty card).

### Instructions

1. Rename "Achievement Tats" to "Lifer Ink" throughout Item 3. Update the product name, any references to "achievements" in the description, and the reference notes.
2. Add new item sections for each missing item, following the same format as existing items. Use dimensions from the Physical Dimensions & Sourcing Spec:

| Item | Internal Name | Key Specs to Include |
|---|---|---|
| Ear plugs | Solitary | Standard foam ear plugs, packaged pair, 2.0" × 1.0" packaged |
| Silicone wristband | Ankle Monitor | Silicone, 8.0" × 0.75" flat, coils to ~3.0" × 3.0", color TBD |
| Novelty eraser | Evidence Eraser | Standard eraser size, 2.0" × 0.75", custom print/shape TBD |
| Enamel camp mug | Mug Shot | 11oz enamel camp mug, 3.5" dia × 3.5" H, enamel-coated steel preferred, custom print on one side, lies on side in tray |
| Notepad | Rap Sheet | 4.0" × 5.5", custom cover, page count TBD, institutional/incident report styling |
| Passport booklet | Corporate Parole Passport | 5.0" × 3.5" × 0.25", saddle-stitched, 8–12 pages, 80–100lb cover, 60–70lb text interior |
| Novelty card | Yard Pass | 4.0" × 2.5" × 0.10", card stock, custom print both sides |

3. For each new item, include: Product name, What it is, Quantity per kit (1 each), Physical Requirements, Customization, Reference Notes, and Questions for Sourcing.
4. Update the Summary table at the bottom to include all 12 items.
5. Update the document date.

### Reference

The Copy Document has approved copy for the original 5 items. The new items don't have finalized copy yet — note "[COPY TBD — see Copy Document]" in each new item's customization section.

---

## TASK D: Exterior Copy Doc Corrections

**Input document:** `Office Survival Kit — Exterior Copy (Draft v1, March 9, 2026).md`
**Job after rewrite:** Owns ALL words that appear on the outside of the case. Organized by surface. Does NOT contain visual treatment descriptions (that's the Exterior Spec's job).

### What's Wrong

1. **Artboard 1 is labeled "Lid Face (13.0" × 6.5")"** — dimensions are wrong. The lid is 13.0" × 8.0". The elements assigned to it (label, stamp, evidence tag, THIS SIDE UP) are correct.
2. **Artboard 2 is labeled "Top Surface (13.0" × 8.0")"** — this is actually the Front Face, and dimensions should be 13.0" × 6.5". The elements assigned to it (handle/clasp hardware, IT Asset Tag, INSPECTED BY, FRAGILE) are correct.
3. **Artboard 5 describes MONDAY as a "Bumper Sticker" with "COEXIST" format and office supply icons per letter.** This should be changed to **ransom note style** — each letter of MONDAY cut from a different newspaper/magazine source, different font/size/weight per letter, large, at a diagonal angle across the surface. Remove the icon assignment table (M = Coffee mug, O = Paperclip, etc.).
4. **Copy Status Summary at bottom** — the element numbering is 1–19 but should be 1–21 to match the Packaging Spec's master list. Currently missing the handle (#5) and clasps (#6) as numbered elements. Reconcile the numbering.

### Instructions

1. Correct Artboard 1 header to: "Lid / Top Surface (13.0" × 8.0")"
2. Correct Artboard 2 header to: "Front Face (13.0" × 6.5")"
3. Rewrite Artboard 5 (Element 18) to describe MONDAY in ransom note style. Remove icon assignments. Keep it as a visual design description (the copy is just the word "MONDAY" — no change there).
4. Reconcile the Copy Status Summary numbering with the master element list.
5. Add a note at top: "For visual treatments and surface positions of each element, see Exterior Spec."
6. Update document date and changelog.

All actual copy text in this document is correct and approved — do not change any of the words, only the surface labels, dimensions, and MONDAY treatment description.

---

## TASK E: Physical Dimensions & Sourcing Spec Corrections

**Input document:** `Office Survival Kit — Physical Dimensions & Sourcing Spec (Corrected).md`
**Depends on:** Authority Block only (Tier 1 knowledge is sufficient)

### What's Wrong

1. **Exterior Hardware section header says "All on Front Face (+Y face)"** — this is CORRECT for handle and clasps. But the section also includes "Main label," "Barcode tag," and "Stamp" in the same table, implying they're on the front face. Those three elements are on the **Lid (+Z face)**, not the front face.
2. **The Coordinate System Reference table** has entries for label and stamp positions that may reference the wrong surface. "Label + Stamp wall" is listed at Y = +4.0" (front face). Labels and stamps are on the +Z surface (lid), not the +Y wall.
3. **Changelog v4 entry** is confusing — it references correcting a correction of a correction. Replace with a clean statement of current truth.
4. **Changelog v3 entry** says handle and clasps were moved from front face to top surface — this was an error that v4 reversed. The changelog should clearly note that v3 was wrong and v4 restored the correct placement, and that labels were always meant for the lid surface.

### Instructions

1. Split the Exterior Hardware section into two:
   - "Exterior Hardware — Front Face (+Y)" containing handle and clasps only
   - "Exterior Labels — Lid Surface (+Z)" containing main label, barcode tag, stamp, and THIS SIDE UP
2. Update the Coordinate System Reference table to reflect label/stamp on +Z surface
3. Rewrite the changelog to be clear and accurate
4. Everything else in this document (box dimensions, tray specs, stack math, interior dimensions, binder rings, item dimensions) is correct — do not change

---

## TASK F: Blender Session Briefing Corrections

**Input document:** `blender_briefing.md`
**Depends on:** Authority Block only

### What's Wrong

1. **Exterior Features table** lists "Panel detail: Two recessed panel lines on lid face (decorative, institutional)" — DELETE this row. No panel lines on any surface.
2. **Exterior Features table** lists handle, clasps, exterior label, and barcode tag all with the note "on lid face (+Y)." The handle and clasps are correct on +Y (front face). But the exterior label and barcode tag should be on +Z (lid/top surface), not +Y.
3. **Lid Interior section** describes booking frame as "Printed on lid interior." This should be "PHYSICAL DIE-CUT CUTOUT through the lid — open rectangular hole ~6" × 4" with 1.5"–2" frame border."
4. **CRITICAL note** says "Handle and clasps are both on the FRONT FACE (+Y). The top surface (+Z) has no hardware — lid surface only." The first sentence is correct. The second sentence should say "The top surface (+Z) has no hardware — it carries the main label, stamp, and evidence tag."

### Instructions

1. Delete panel detail row from Exterior Features table
2. Move exterior label and barcode tag to a new row or rows indicating they're on +Z (lid surface)
3. Update booking frame description to physical cutout
4. Correct the CRITICAL note
5. Add a header note: "This document derives from the Physical Dimensions & Sourcing Spec and the Exterior Spec. If dimensions or exterior details conflict, those documents are authoritative."
6. Everything else (dimensions, tray specs, materials, object naming, binder pages) is correct — do not change

---

## TASK G: Blender Script Corrections

**Input document:** `blender_script.py`
**Depends on:** Task F (or Authority Block)

### What's Wrong

1. **Exterior label, stamp, and barcode tag geometry** are placed on the front face (+Y = BOX_W/2). They should be on the lid/top surface (+Z = lid_z or slightly above).
2. **Handle Z-position comment** references an "explicit user override" for center placement. This is confirmed correct — handle stays at Z = BOX_D / 2 (vertically centered on front face). But clean up the comment to just state "Handle vertically centered on front face per spec" without the historical note.
3. **Docstring** at the top says "+Y wall = FRONT FACE — faces user — handle, clasps, labels and stamps." Remove "labels and stamps" from the +Y description. Add a line: "+Z = TOP (lid) — main label, stamp, evidence tag."
4. **Summary print block** — no changes needed, handle placement printout is correct.

### Instructions

1. Move `Exterior_Label`, `Exterior_Stamp`, and `Exterior_Barcode_Tag` geometry from Y = BOX_W/2 (front face) to Z = lid_z + small offset (lid top surface). Adjust their orientation from YZ plane to XY plane (they're now lying flat on top of the lid instead of standing on the front face).
2. Clean up handle comment
3. Update docstring
4. All other geometry (handle, clasps, trays, rings, items, pages, lid, box body) is correct — do not change

---

## TASK H: Image Prompts Corrections

**Input document:** `Office Survival Kit — Image Prompts (Draft v1, March 9, 2026).md`
**Depends on:** Authority Block

### What's Wrong

1. **Hero Product Photo prompt** describes the case standing upright with "THE LID FACE (the large front-facing vertical surface, 13" wide × 6.5" tall)" containing the label AND handle on the same surface. These are on different surfaces. The lid (13" × 8") has the label. The front face (13" × 6.5") has the handle.
2. **Artboard 1 prompt** is labeled "Lid Face (13.0" × 6.5")" — should be "Lid / Top Surface (13.0" × 8.0")."
3. **Artboard 2 prompt** is labeled "Top Surface (13.0" × 8.0")" — should be "Front Face (13.0" × 6.5")."
4. **Artboard 5 prompt** describes MONDAY as office supply icons. Should be ransom note style.
5. **Interior shots** describe booking frame as a printed graphic in some places and a physical cutout in others. Should consistently be a physical cutout.

### Instructions

1. Rewrite the Hero Product Photo prompt to show the case standing upright with the lid face (top when lying flat, hero face when standing) showing the label, and the front face (with handle) visible as a secondary surface.
2. Correct Artboard 1 and 2 headers and dimensions.
3. Rewrite Artboard 5 MONDAY prompt for ransom note style.
4. Ensure all interior shot prompts describe booking frame as physical cutout.
5. All other prompts (Artboards 3, 4, 6, interior shots) — verify against Authority Block and correct any surface dimension references, but the content/copy described in them is likely correct.

---

## TASK I: Documentation Roadmap Update

**Input document:** `Office Survival Kit — Documentation Roadmap.md`
**Depends on:** All Tier 1 tasks complete

### Instructions

Update the status of every document listed. Add any documents not currently listed (Exterior Copy Doc, Image Prompts, Blender Session Briefing, Blender Script). Note the new document architecture principle: each doc has one job, no duplicated specs.

---

## TASK J: Copy Document Reconciliation

**Input document:** `Office Survival Kit — Copy Document.md`
**Depends on:** Tasks A and B

### What's Wrong

1. Item 3 is titled "Lifer Ink" (correct) but the Item Specifications doc uses "Achievement Tats." This will be fixed by Task C.
2. Inside lid copy and base copy currently live in both the Copy Document and the Packaging Spec. Per new architecture, decide: does interior copy live in the Copy Document (and the Packaging Spec points to it), or does it stay in the Packaging Spec (since it's structural/positional)?

### Recommendation

Interior copy that's tied to physical placement (inside lid copy, base copy, tray visible/hidden copy) stays in the Packaging Spec because it's inseparable from the structure. Item copy (per-item short/medium/long descriptions, tattoo designs, sticker designs) stays in the Copy Document. The Copy Document should note "For interior placement copy (inside lid, base, tray zones), see Packaging Spec."

---

## TASK CHECKLIST

| Task | Document | Tier | Assignable Now? | Status |
|------|----------|------|-----------------|--------|
| A | Exterior Spec | 1 | ✅ Yes | ⬜ Not started |
| B | Packaging Spec | 1 | ✅ Yes | ⬜ Not started |
| C | Item Specifications | 1 | ✅ Yes | ⬜ Not started |
| D | Exterior Copy Doc | 1 | ✅ Yes | ⬜ Not started |
| E | Physical Dimensions Spec | 2 | After A,B | ⬜ Not started |
| F | Blender Briefing | 2 | After A,B | ⬜ Not started |
| G | Blender Script | 2 | After F | ⬜ Not started |
| H | Image Prompts | 2 | After A,B | ⬜ Not started |
| I | Documentation Roadmap | 3 | After all Tier 1 | ⬜ Not started |
| J | Copy Document | 3 | After A,B | ⬜ Not started |

---

## HOW TO USE THIS DOCUMENT

1. Open a new Claude chat window
2. Upload the relevant input document(s) for the task
3. Copy-paste the **Authority Block** (the section between the two horizontal rules near the top)
4. Copy-paste the **specific Task instructions** (e.g., "TASK A: Exterior Spec Rewrite")
5. Ask Claude to execute the task, producing the corrected document as an artifact
6. Review the output against the Authority Block to confirm accuracy
7. Mark the task as complete in this checklist

**For Tier 2 tasks:** Also include the completed Tier 1 documents as context if they're available, but the Authority Block alone is sufficient for most corrections.
