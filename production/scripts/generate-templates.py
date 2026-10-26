"""
Generate production-ready template SVGs from dieline SVGs.

For each dieline, creates a template with:
- Original dieline content preserved
- Bleed zone (3mm outside cut line) in green
- Safety zone (5mm inside cut line) in magenta
- Layered groups for artwork placement
- Print specification notes
- Panel identification for artwork placement
"""

import os
import re
import xml.etree.ElementTree as ET

ET.register_namespace('', 'http://www.w3.org/2000/svg')
ET.register_namespace('xlink', 'http://www.w3.org/1999/xlink')

BLEED_MM = 3
SAFETY_MM = 5

# Template metadata per dieline
TEMPLATES = {
    "cell-talk-box": {
        "title": "CELL TALK — TUCK END TEMPLATE",
        "subtitle": "101.6 x 63.5 x 19.05 mm | Affirmation Cards | Tray 2",
        "panels": [
            {"name": "P1: GLUE TAB", "x": 55, "y": 70, "w": 12, "h": 63.5, "printable": False},
            {"name": "P2: LEFT SIDE", "x": 67, "y": 70, "w": 19.05, "h": 63.5, "printable": True},
            {"name": "P3: FRONT PANEL", "x": 86.05, "y": 70, "w": 101.6, "h": 63.5, "printable": True},
            {"name": "P4: RIGHT SIDE", "x": 187.65, "y": 70, "w": 19.05, "h": 63.5, "printable": True},
            {"name": "P5: BACK PANEL", "x": 206.7, "y": 70, "w": 101.6, "h": 63.5, "printable": True},
        ],
        "cut_bbox": {"x": 55, "y": 55, "w": 253.3, "h": 93.5},
        "viewBox_expand": 20,
    },
    "rap-sheets-box": {
        "title": "RAP SHEETS — TUCK END TEMPLATE",
        "subtitle": "101.6 x 63.5 x 19.05 mm | Complaint Cards | Tray 2",
        "panels": [
            {"name": "P1: GLUE TAB", "x": 55, "y": 70, "w": 12, "h": 63.5, "printable": False},
            {"name": "P2: LEFT SIDE", "x": 67, "y": 70, "w": 19.05, "h": 63.5, "printable": True},
            {"name": "P3: FRONT PANEL", "x": 86.05, "y": 70, "w": 101.6, "h": 63.5, "printable": True},
            {"name": "P4: RIGHT SIDE", "x": 187.65, "y": 70, "w": 19.05, "h": 63.5, "printable": True},
            {"name": "P5: BACK PANEL", "x": 206.7, "y": 70, "w": 101.6, "h": 63.5, "printable": True},
        ],
        "cut_bbox": {"x": 55, "y": 55, "w": 253.3, "h": 93.5},
        "viewBox_expand": 20,
    },
    "sweet-nothings-box": {
        "title": "SWEET NOTHINGS — TUCK END TEMPLATE",
        "subtitle": "101.6 x 63.5 x 19.05 mm | Passive-Aggressive Cards | Tray 2",
        "panels": [
            {"name": "P1: GLUE TAB", "x": 55, "y": 70, "w": 12, "h": 63.5, "printable": False},
            {"name": "P2: LEFT SIDE", "x": 67, "y": 70, "w": 19.05, "h": 63.5, "printable": True},
            {"name": "P3: FRONT PANEL", "x": 86.05, "y": 70, "w": 101.6, "h": 63.5, "printable": True},
            {"name": "P4: RIGHT SIDE", "x": 187.65, "y": 70, "w": 19.05, "h": 63.5, "printable": True},
            {"name": "P5: BACK PANEL", "x": 206.7, "y": 70, "w": 101.6, "h": 63.5, "printable": True},
        ],
        "cut_bbox": {"x": 55, "y": 55, "w": 253.3, "h": 93.5},
        "viewBox_expand": 20,
    },
    "lifer-ink-box": {
        "title": "LIFER INK — TUCK END TEMPLATE",
        "subtitle": "127.0 x 88.9 x 12.7 mm | Temporary Tattoos | Tray 1",
        "panels": [
            {"name": "P1: GLUE TAB", "x": 55, "y": 55, "w": 12, "h": 88.9, "printable": False},
            {"name": "P2: LEFT SIDE", "x": 67, "y": 55, "w": 12.7, "h": 88.9, "printable": True},
            {"name": "P3: FRONT PANEL", "x": 79.7, "y": 55, "w": 127.0, "h": 88.9, "printable": True},
            {"name": "P4: RIGHT SIDE", "x": 206.7, "y": 55, "w": 12.7, "h": 88.9, "printable": True},
            {"name": "P5: BACK PANEL", "x": 219.4, "y": 55, "w": 127.0, "h": 88.9, "printable": True},
        ],
        "cut_bbox": {"x": 55, "y": 42, "w": 291.4, "h": 108.9},
        "viewBox_expand": 20,
    },
    "turf-tags-box": {
        "title": "TURF TAGS — TUCK END TEMPLATE",
        "subtitle": "127.0 x 88.9 x 12.7 mm | Stickers | Tray 1",
        "panels": [
            {"name": "P1: GLUE TAB", "x": 55, "y": 55, "w": 12, "h": 88.9, "printable": False},
            {"name": "P2: LEFT SIDE", "x": 67, "y": 55, "w": 12.7, "h": 88.9, "printable": True},
            {"name": "P3: FRONT PANEL", "x": 79.7, "y": 55, "w": 127.0, "h": 88.9, "printable": True},
            {"name": "P4: RIGHT SIDE", "x": 206.7, "y": 55, "w": 12.7, "h": 88.9, "printable": True},
            {"name": "P5: BACK PANEL", "x": 219.4, "y": 55, "w": 127.0, "h": 88.9, "printable": True},
        ],
        "cut_bbox": {"x": 55, "y": 42, "w": 291.4, "h": 108.9},
        "viewBox_expand": 20,
    },
    "cubicle-shank-box": {
        "title": "CUBICLE SHANK — TRAY & SLEEVE TEMPLATE",
        "subtitle": "165.1 x 44.45 x 25.4 mm | Pen | Tray 1 | Two-piece (sleeve + tray)",
        "panels": [
            # Sleeve panels
            {"name": "S1: GLUE TAB", "x": 55, "y": 55, "w": 12, "h": 165.1, "printable": False},
            {"name": "S2: SIDE", "x": 67, "y": 55, "w": 25.4, "h": 165.1, "printable": True},
            {"name": "S3: TOP FACE", "x": 92.4, "y": 55, "w": 44.45, "h": 165.1, "printable": True},
            {"name": "S4: SIDE", "x": 136.85, "y": 55, "w": 25.4, "h": 165.1, "printable": True},
            {"name": "S5: BOTTOM FACE", "x": 162.25, "y": 55, "w": 44.45, "h": 165.1, "printable": True},
            # Tray panels
            {"name": "T1: TRAY BASE", "x": 55, "y": 280, "w": 163, "h": 43, "printable": True},
        ],
        "cut_bbox": {"x": 43, "y": 43, "w": 175.7, "h": 398},
        "viewBox_expand": 20,
    },
    "tray": {
        "title": "TRAY — TEMPLATE (x2 IDENTICAL)",
        "subtitle": "342.9 x 165.1 x 28.575 mm | 18pt paperboard | Both Tray 1 and Tray 2",
        "panels": [
            {"name": "P1: BASE", "x": 78.575, "y": 78.575, "w": 342.9, "h": 165.1, "printable": True},
            {"name": "P2: BACK WALL", "x": 78.575, "y": 50, "w": 342.9, "h": 28.575, "printable": True},
            {"name": "P3: FRONT WALL", "x": 78.575, "y": 243.675, "w": 342.9, "h": 28.575, "printable": True},
            {"name": "P4: LEFT WALL", "x": 50, "y": 78.575, "w": 28.575, "h": 165.1, "printable": True},
            {"name": "P5: RIGHT WALL", "x": 421.475, "y": 78.575, "w": 28.575, "h": 165.1, "printable": True},
        ],
        "cut_bbox": {"x": 50, "y": 50, "w": 400.05, "h": 222.25},
        "viewBox_expand": 20,
    },
    "compartment-cover": {
        "title": "COMPARTMENT COVER — TEMPLATE",
        "subtitle": "342.9 x 283.5 mm flat | J-shaped fold | Dark carbon fiber both sides",
        "panels": [
            {"name": "P1: TOP SURFACE", "x": 55, "y": 55, "w": 342.9, "h": 101.6, "printable": True},
            {"name": "P2: VERTICAL WALL", "x": 55, "y": 156.6, "w": 342.9, "h": 105.7, "printable": True},
            {"name": "P3: FLOOR FLAP", "x": 55, "y": 262.3, "w": 342.9, "h": 76.2, "printable": True},
        ],
        "cut_bbox": {"x": 55, "y": 55, "w": 342.9, "h": 283.5},
        "viewBox_expand": 20,
    },
    "outer-amazon-box": {
        "title": "OUTER AMAZON BOX — TUCK-TOP MAILER TEMPLATE",
        "subtitle": "393.7 x 330.2 x 165.1 mm | Corrugated | SCALE: 35%",
        "panels": [
            {"name": "P1: GLUE TAB", "x": 40, "y": 63.9, "w": 5.25, "h": 137.8, "printable": False},
            {"name": "P2: FRONT WALL", "x": 45.25, "y": 63.9, "w": 57.8, "h": 137.8, "printable": True},
            {"name": "P3: BOTTOM", "x": 103.05, "y": 63.9, "w": 115.6, "h": 137.8, "printable": True},
            {"name": "P4: BACK WALL", "x": 218.65, "y": 63.9, "w": 57.8, "h": 137.8, "printable": True},
            {"name": "P5: LID / TOP", "x": 276.45, "y": 63.9, "w": 115.6, "h": 137.8, "printable": True},
            {"name": "P6: TUCK TAB", "x": 392.05, "y": 63.9, "w": 14, "h": 137.8, "printable": False},
        ],
        "cut_bbox": {"x": 40, "y": 35, "w": 366.05, "h": 195.6},
        "viewBox_expand": 15,
        "scale_note": "IMPORTANT: This template is at 35% scale. Multiply all measurements by ~2.857 for actual size.",
    },
    "briefcase": {
        "title": "BRIEFCASE — HINGED CLAMSHELL TEMPLATE",
        "subtitle": "355.6 x 292.1 x 127.0 mm | 24pt paperboard, matte black",
        "panels": [
            {"name": "P1: LID INTERIOR", "x": 73.025, "y": 50, "w": 355.6, "h": 292.1, "printable": True},
            {"name": "P2: BASE INTERIOR", "x": 73.025, "y": 400, "w": 355.6, "h": 292.1, "printable": True},
        ],
        "cut_bbox": {"x": 50, "y": 50, "w": 610, "h": 860},
        "viewBox_expand": 25,
    },
}


def generate_template_svg(dieline_name, meta):
    """Generate a template SVG for the given dieline."""
    # Read original SVG
    src_path = os.path.join("dielines", f"{dieline_name}.svg")
    tree = ET.parse(src_path)
    root = tree.getroot()

    ns = "http://www.w3.org/2000/svg"

    # Get original viewBox and dimensions
    vb = root.get("viewBox", "0 0 500 500")
    vb_parts = [float(x) for x in vb.split()]
    orig_w = root.get("width", f"{vb_parts[2]}mm").replace("mm", "")
    orig_h = root.get("height", f"{vb_parts[3]}mm").replace("mm", "")

    # Expand viewBox to fit bleed + template chrome
    expand = meta.get("viewBox_expand", 20)
    new_vb = f"{vb_parts[0] - expand} {vb_parts[1] - expand} {vb_parts[2] + expand * 2} {vb_parts[3] + expand * 2}"
    new_w = f"{float(orig_w) + expand * 2}mm"
    new_h = f"{float(orig_h) + expand * 2}mm"

    bbox = meta["cut_bbox"]

    # Build the template SVG from scratch
    svg = ET.Element(f"{{{ns}}}svg")
    svg.set("xmlns", ns)
    svg.set("viewBox", new_vb)
    svg.set("width", new_w)
    svg.set("height", new_h)

    # Copy defs from original
    for defs in root.findall(f"{{{ns}}}defs"):
        svg.append(defs)

    # Add template styles
    style = ET.SubElement(svg, f"{{{ns}}}style")
    style.text = """
    .bleed-zone { fill: none; stroke: #00AA44; stroke-width: 0.4; stroke-dasharray: 1.5,1; }
    .safety-zone { fill: none; stroke: #CC0066; stroke-width: 0.3; stroke-dasharray: 1,1; }
    .bleed-fill { fill: #e8f8ec; stroke: none; opacity: 0.25; }
    .safety-fill { fill: #fce8f0; stroke: none; opacity: 0.2; }
    .artwork-zone { fill: #fffff0; stroke: #CCCC88; stroke-width: 0.15; stroke-dasharray: 2,2; opacity: 0.5; }
    .template-title { font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 7px; fill: #222; font-weight: bold; text-anchor: middle; }
    .template-subtitle { font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 4px; fill: #666; text-anchor: middle; }
    .panel-id { font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 4px; fill: #CC0066; font-weight: bold; text-anchor: middle; dominant-baseline: central; }
    .panel-id-bg { fill: white; stroke: none; opacity: 0.8; }
    .spec-note { font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 3px; fill: #666; text-anchor: middle; }
    .legend-bleed { stroke: #00AA44; stroke-width: 0.4; stroke-dasharray: 1.5,1; }
    .legend-safety { stroke: #CC0066; stroke-width: 0.3; stroke-dasharray: 1,1; }
    .legend-text { font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 3.5px; fill: #333; }
    .cut { fill: none; stroke: #E60000; stroke-width: 0.5; stroke-linejoin: round; }
    .fold { fill: none; stroke: #0055CC; stroke-width: 0.35; stroke-dasharray: 3,1.5; }
    .panel-label { font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 5px; fill: #444; text-anchor: middle; dominant-baseline: central; }
    .flap-label { font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 3px; fill: #888; text-anchor: middle; dominant-baseline: central; }
    .dim-line { stroke: #333; stroke-width: 0.25; }
    .dim-arrow { stroke: #333; stroke-width: 0.25; }
    .dim-text { font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 3.5px; fill: #333; text-anchor: middle; }
    .note { font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 3px; fill: #999; text-anchor: middle; }
    .title { font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 7px; fill: #222; font-weight: bold; text-anchor: middle; }
    .subtitle { font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 4px; fill: #666; text-anchor: middle; }
    .recess { fill: none; stroke: #00AA00; stroke-width: 0.4; stroke-dasharray: 2,1.5; }
    .recess-fill { fill: #e8f4e8; stroke: none; opacity: 0.4; }
    .recess-label { font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 3.5px; fill: #00AA00; text-anchor: middle; dominant-baseline: central; }
    .base-fill { fill: #f5f5f5; stroke: none; }
    .wall-fill { fill: #fef3e2; stroke: none; opacity: 0.5; }
    .tab-fill { fill: #f0f0f0; stroke: none; opacity: 0.5; }
    """

    center_x = bbox["x"] + bbox["w"] / 2
    title_y = vb_parts[1] - expand + 10

    # Template title
    t = ET.SubElement(svg, f"{{{ns}}}text")
    t.set("x", str(center_x))
    t.set("y", str(title_y))
    t.set("class", "template-title")
    t.text = meta["title"]

    st = ET.SubElement(svg, f"{{{ns}}}text")
    st.set("x", str(center_x))
    st.set("y", str(title_y + 7))
    st.set("class", "template-subtitle")
    st.text = meta["subtitle"]

    # Legend
    legend_y = title_y + 15
    legend_items = [
        (0, "legend-bleed", "Bleed zone (3mm outside cut)"),
        (80, "legend-safety", "Safety zone (5mm inside cut)"),
    ]
    legend_x = center_x - 80
    for offset, cls, label in legend_items:
        line = ET.SubElement(svg, f"{{{ns}}}line")
        line.set("x1", str(legend_x + offset))
        line.set("y1", str(legend_y))
        line.set("x2", str(legend_x + offset + 15))
        line.set("y2", str(legend_y))
        line.set("class", cls)
        line.set("fill", "none")
        txt = ET.SubElement(svg, f"{{{ns}}}text")
        txt.set("x", str(legend_x + offset + 18))
        txt.set("y", str(legend_y + 1))
        txt.set("class", "legend-text")
        txt.set("text-anchor", "start")
        txt.text = label

    # --- LAYER: Bleed zone ---
    bleed_group = ET.SubElement(svg, f"{{{ns}}}g")
    bleed_group.set("id", "bleed-guide")

    bleed_rect_fill = ET.SubElement(bleed_group, f"{{{ns}}}rect")
    bleed_rect_fill.set("x", str(bbox["x"] - BLEED_MM))
    bleed_rect_fill.set("y", str(bbox["y"] - BLEED_MM))
    bleed_rect_fill.set("width", str(bbox["w"] + BLEED_MM * 2))
    bleed_rect_fill.set("height", str(bbox["h"] + BLEED_MM * 2))
    bleed_rect_fill.set("class", "bleed-fill")

    bleed_rect = ET.SubElement(bleed_group, f"{{{ns}}}rect")
    bleed_rect.set("x", str(bbox["x"] - BLEED_MM))
    bleed_rect.set("y", str(bbox["y"] - BLEED_MM))
    bleed_rect.set("width", str(bbox["w"] + BLEED_MM * 2))
    bleed_rect.set("height", str(bbox["h"] + BLEED_MM * 2))
    bleed_rect.set("class", "bleed-zone")

    # --- LAYER: Safety zone ---
    safety_group = ET.SubElement(svg, f"{{{ns}}}g")
    safety_group.set("id", "safety-guide")

    safety_rect_fill = ET.SubElement(safety_group, f"{{{ns}}}rect")
    safety_rect_fill.set("x", str(bbox["x"] + SAFETY_MM))
    safety_rect_fill.set("y", str(bbox["y"] + SAFETY_MM))
    safety_rect_fill.set("width", str(bbox["w"] - SAFETY_MM * 2))
    safety_rect_fill.set("height", str(bbox["h"] - SAFETY_MM * 2))
    safety_rect_fill.set("class", "safety-fill")

    safety_rect = ET.SubElement(safety_group, f"{{{ns}}}rect")
    safety_rect.set("x", str(bbox["x"] + SAFETY_MM))
    safety_rect.set("y", str(bbox["y"] + SAFETY_MM))
    safety_rect.set("width", str(bbox["w"] - SAFETY_MM * 2))
    safety_rect.set("height", str(bbox["h"] - SAFETY_MM * 2))
    safety_rect.set("class", "safety-zone")

    # --- LAYER: Artwork placeholders ---
    artwork_group = ET.SubElement(svg, f"{{{ns}}}g")
    artwork_group.set("id", "artwork-placeholder")

    for panel in meta["panels"]:
        if panel.get("printable", False):
            rect = ET.SubElement(artwork_group, f"{{{ns}}}rect")
            rect.set("x", str(panel["x"] + 1))
            rect.set("y", str(panel["y"] + 1))
            rect.set("width", str(panel["w"] - 2))
            rect.set("height", str(panel["h"] - 2))
            rect.set("class", "artwork-zone")

    # --- LAYER: Original dieline content ---
    dieline_group = ET.SubElement(svg, f"{{{ns}}}g")
    dieline_group.set("id", "dieline")

    # Copy all visual elements from original (skip defs, style)
    for child in root:
        tag = child.tag.split("}")[-1] if "}" in child.tag else child.tag
        if tag not in ("defs", "style"):
            dieline_group.append(child)

    # --- LAYER: Panel IDs ---
    panel_id_group = ET.SubElement(svg, f"{{{ns}}}g")
    panel_id_group.set("id", "panel-ids")

    for panel in meta["panels"]:
        cx = panel["x"] + panel["w"] / 2
        cy = panel["y"] + panel["h"] / 2

        # Background for readability
        label_w = len(panel["name"]) * 2.5 + 6
        bg = ET.SubElement(panel_id_group, f"{{{ns}}}rect")
        bg.set("x", str(cx - label_w / 2))
        bg.set("y", str(cy - 3))
        bg.set("width", str(label_w))
        bg.set("height", "6")
        bg.set("rx", "1")
        bg.set("class", "panel-id-bg")

        txt = ET.SubElement(panel_id_group, f"{{{ns}}}text")
        txt.set("x", str(cx))
        txt.set("y", str(cy))
        txt.set("class", "panel-id")
        txt.text = panel["name"]

    # --- Print spec notes ---
    note_y = bbox["y"] + bbox["h"] + expand + 15
    specs = [
        "TEMPLATE FILE — Extend artwork 3mm past cut line (green) into bleed zone. Keep critical content inside safety zone (magenta).",
        "Color: CMYK only. Resolution: 300 dpi minimum. Overprint: check with printer. File format: PDF/X-4 for final artwork.",
    ]
    if "scale_note" in meta:
        specs.append(meta["scale_note"])

    for i, spec in enumerate(specs):
        n = ET.SubElement(svg, f"{{{ns}}}text")
        n.set("x", str(center_x))
        n.set("y", str(note_y + i * 5))
        n.set("class", "spec-note")
        n.text = spec

    # Write output
    out_path = os.path.join("templates", f"{dieline_name}-template.svg")
    tree = ET.ElementTree(svg)
    ET.indent(tree, space="  ")
    tree.write(out_path, encoding="unicode", xml_declaration=True)
    return out_path


def main():
    os.makedirs("templates", exist_ok=True)

    for name, meta in TEMPLATES.items():
        out = generate_template_svg(name, meta)
        print(f"OK  {out}")

    print(f"\nDone. {len(TEMPLATES)} templates generated.")


if __name__ == "__main__":
    main()
