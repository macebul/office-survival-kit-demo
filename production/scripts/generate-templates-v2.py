"""
Generate production-ready template SVGs for all box types.
Each template includes: color-coded panels, 3D isometric reference,
fold direction arrows, assembly sequence, bleed/safety zones, and print specs.
All fonts at readable sizes (7-14px range).
"""

import os

FONT_SIZES = {
    "title": 14,
    "subtitle": 8,
    "panel_id": 9,
    "panel_detail": 6,
    "fold_label": 7,
    "dim_text": 7,
    "legend_text": 7,
    "note": 6,
    "spec_title": 9,
    "spec_text": 7,
    "assembly_num": 10,
    "ref_title": 9,
    "ref_label": 6,
    "flap_label": 6,
}

COMMON_STYLE = f"""
    .cut {{ fill: none; stroke: #E60000; stroke-width: 0.5; stroke-linejoin: round; }}
    .fold {{ fill: none; stroke: #0055CC; stroke-width: 0.35; stroke-dasharray: 3,1.5; }}
    .bleed-zone {{ fill: none; stroke: #00AA44; stroke-width: 0.4; stroke-dasharray: 1.5,1; }}
    .safety-zone {{ fill: none; stroke: #CC0066; stroke-width: 0.3; stroke-dasharray: 1,1; }}

    .fill-glue {{ fill: #E0D8D0; stroke: none; opacity: 0.4; }}
    .fill-front {{ fill: #B8E6B8; stroke: none; opacity: 0.6; }}
    .fill-back {{ fill: #B3D4F0; stroke: none; opacity: 0.6; }}
    .fill-side {{ fill: #F5D0A0; stroke: none; opacity: 0.6; }}
    .fill-top {{ fill: #D0E8D0; stroke: none; opacity: 0.5; }}
    .fill-bottom {{ fill: #E0D0E0; stroke: none; opacity: 0.5; }}
    .fill-flap {{ fill: #F0E8E0; stroke: none; opacity: 0.3; }}
    .fill-base {{ fill: #E8E8E8; stroke: none; }}
    .fill-wall {{ fill: #F5D0A0; stroke: none; opacity: 0.5; }}
    .fill-tab {{ fill: #F0E0E0; stroke: none; opacity: 0.4; }}
    .fill-tray-base {{ fill: #F5F5F5; stroke: none; }}
    .fill-tray-wall {{ fill: #E2ECF4; stroke: none; opacity: 0.4; }}
    .fill-sleeve {{ fill: #FEF3E2; stroke: none; opacity: 0.3; }}
    .recess {{ fill: none; stroke: #00AA00; stroke-width: 0.4; stroke-dasharray: 2,1.5; }}
    .recess-fill {{ fill: #e8f4e8; stroke: none; opacity: 0.4; }}
    .fill-top-surface {{ fill: #B3D4F0; stroke: none; opacity: 0.5; }}
    .fill-vert-wall {{ fill: #B8E6B8; stroke: none; opacity: 0.5; }}
    .fill-floor-flap {{ fill: #F5D0A0; stroke: none; opacity: 0.5; }}
    .fill-lid {{ fill: #B3D4F0; stroke: none; opacity: 0.4; }}
    .fill-panel {{ fill: #FEF3E2; stroke: none; opacity: 0.4; }}

    .title {{ font-family: 'Helvetica Neue', Arial, sans-serif; font-size: {FONT_SIZES['title']}px; fill: #222; font-weight: bold; text-anchor: middle; }}
    .subtitle {{ font-family: 'Helvetica Neue', Arial, sans-serif; font-size: {FONT_SIZES['subtitle']}px; fill: #555; text-anchor: middle; }}
    .panel-id {{ font-family: 'Helvetica Neue', Arial, sans-serif; font-size: {FONT_SIZES['panel_id']}px; fill: #222; font-weight: bold; text-anchor: middle; dominant-baseline: central; }}
    .panel-detail {{ font-family: 'Helvetica Neue', Arial, sans-serif; font-size: {FONT_SIZES['panel_detail']}px; fill: #666; text-anchor: middle; dominant-baseline: central; }}
    .fold-label {{ font-family: 'Helvetica Neue', Arial, sans-serif; font-size: {FONT_SIZES['fold_label']}px; fill: #0055CC; font-weight: bold; }}
    .dim-text {{ font-family: 'Helvetica Neue', Arial, sans-serif; font-size: {FONT_SIZES['dim_text']}px; fill: #333; text-anchor: middle; }}
    .dim-line {{ stroke: #333; stroke-width: 0.25; }}
    .dim-arrow {{ stroke: #333; stroke-width: 0.25; }}
    .legend-text {{ font-family: 'Helvetica Neue', Arial, sans-serif; font-size: {FONT_SIZES['legend_text']}px; fill: #333; }}
    .note {{ font-family: 'Helvetica Neue', Arial, sans-serif; font-size: {FONT_SIZES['note']}px; fill: #888; text-anchor: middle; }}
    .spec-title {{ font-family: 'Helvetica Neue', Arial, sans-serif; font-size: {FONT_SIZES['spec_title']}px; fill: #222; font-weight: bold; }}
    .spec-text {{ font-family: 'Helvetica Neue', Arial, sans-serif; font-size: {FONT_SIZES['spec_text']}px; fill: #444; }}
    .assembly-num {{ font-family: 'Helvetica Neue', Arial, sans-serif; font-size: {FONT_SIZES['assembly_num']}px; fill: white; font-weight: bold; text-anchor: middle; dominant-baseline: central; }}
    .assembly-circle {{ fill: #0055CC; stroke: none; }}
    .ref-title {{ font-family: 'Helvetica Neue', Arial, sans-serif; font-size: {FONT_SIZES['ref_title']}px; fill: #222; font-weight: bold; text-anchor: middle; }}
    .ref-label {{ font-family: 'Helvetica Neue', Arial, sans-serif; font-size: {FONT_SIZES['ref_label']}px; fill: #444; }}
    .flap-label {{ font-family: 'Helvetica Neue', Arial, sans-serif; font-size: {FONT_SIZES['flap_label']}px; fill: #888; text-anchor: middle; dominant-baseline: central; }}
"""

DEFS = """  <defs>
    <marker id="arrow-start" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto-start-reverse">
      <path d="M 6,0 L 0,3 L 6,6 Z" fill="#333"/>
    </marker>
    <marker id="arrow-end" markerWidth="6" markerHeight="6" refX="1" refY="3" orient="auto">
      <path d="M 0,0 L 6,3 L 0,6 Z" fill="#333"/>
    </marker>
    <marker id="fold-arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M 1,1 L 7,4 L 1,7 Z" fill="#0055CC"/>
    </marker>
  </defs>"""

LEGEND_BASIC = """  <line x1="30" y1="{y}" x2="45" y2="{y}" stroke="#E60000" stroke-width="0.5" fill="none"/>
  <text x="48" y="{y1}" class="legend-text" text-anchor="start">Cut / Die</text>
  <line x1="100" y1="{y}" x2="115" y2="{y}" stroke="#0055CC" stroke-width="0.35" stroke-dasharray="3,1.5" fill="none"/>
  <text x="118" y="{y1}" class="legend-text" text-anchor="start">Fold / Score</text>
  <line x1="185" y1="{y}" x2="200" y2="{y}" stroke="#00AA44" stroke-width="0.4" stroke-dasharray="1.5,1" fill="none"/>
  <text x="203" y="{y1}" class="legend-text" text-anchor="start">Bleed (3mm)</text>
  <line x1="280" y1="{y}" x2="295" y2="{y}" stroke="#CC0066" stroke-width="0.3" stroke-dasharray="1,1" fill="none"/>
  <text x="298" y="{y1}" class="legend-text" text-anchor="start">Safety (5mm)</text>"""


def make_legend(y):
    return LEGEND_BASIC.format(y=y, y1=y + 1)


def assembly_step(x, y, num, text):
    return f"""  <circle cx="{x}" cy="{y}" r="5.5" class="assembly-circle"/>
  <text x="{x}" y="{y}" class="assembly-num">{num}</text>
  <text x="{x + 10}" y="{y + 1}" class="spec-text">{text}</text>"""


PRINT_SPECS = """  <text x="{x}" y="{y}" class="spec-text">Color mode: CMYK only</text>
  <text x="{x}" y="{yy}" class="spec-text">Resolution: 300 dpi minimum</text>
  <text x="{x}" y="{yyy}" class="spec-text">Bleed: Extend artwork 3mm past cut line (green)</text>
  <text x="{x}" y="{yyyy}" class="spec-text">Safety: Keep critical content 5mm inside cut (magenta)</text>
  <text x="{x}" y="{yyyyy}" class="spec-text">File format: PDF/X-4 preferred</text>"""


def print_specs(x, y, extra_lines=None):
    lines = PRINT_SPECS.format(x=x, y=y, yy=y+10, yyy=y+20, yyyy=y+30, yyyyy=y+40)
    if extra_lines:
        for i, line in enumerate(extra_lines):
            lines += f'\n  <text x="{x}" y="{y + 50 + i * 10}" class="spec-text">{line}</text>'
    return lines


# ============================================================
# SMALL TUCK-END (Cell Talk / Rap Sheets / Sweet Nothings)
# 101.6 x 63.5 x 19.05 mm
# ============================================================

def gen_small_tuckend(name, product_name, product_desc, tray_num):
    """Generate template for small tuck-end box."""
    # Dieline geometry from cell-talk-box.svg
    # Panels left to right: Glue(55-67) | Side(67-86.05) | Front(86.05-187.65) | Side(187.65-206.7) | Back(206.7-308.3)
    # Vertical: tuck flaps at y=55-70 and y=133.5-148.5, main panels y=70-133.5

    vw, vh = 620, 290
    cx = 190  # center of dieline area

    svg = f"""<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {vw} {vh}" width="{vw}mm" height="{vh}mm">
{DEFS}
  <style>{COMMON_STYLE}</style>

  <text x="{cx}" y="14" class="title">{product_name} — TUCK END PRODUCTION TEMPLATE</text>
  <text x="{cx}" y="24" class="subtitle">101.6 x 63.5 x 19.05 mm (4.0" x 2.5" x 0.75") | {product_desc} | {tray_num}</text>

{make_legend(36)}

  <!-- BLEED ZONE -->
  <rect x="52" y="52" width="259.3" height="99.5" class="bleed-zone"/>

  <!-- PANEL FILLS — color coded -->
  <rect x="55" y="70" width="12" height="63.5" class="fill-glue"/>
  <rect x="67" y="70" width="19.05" height="63.5" class="fill-side"/>
  <rect x="86.05" y="70" width="101.6" height="63.5" class="fill-front"/>
  <rect x="187.65" y="70" width="19.05" height="63.5" class="fill-side"/>
  <rect x="206.7" y="70" width="101.6" height="63.5" class="fill-back"/>
  <!-- Tuck flaps -->
  <rect x="86.05" y="55" width="101.6" height="15" class="fill-flap"/>
  <rect x="206.7" y="55" width="101.6" height="15" class="fill-flap"/>
  <rect x="86.05" y="133.5" width="101.6" height="15" class="fill-flap"/>
  <rect x="206.7" y="133.5" width="101.6" height="15" class="fill-flap"/>
  <!-- Dust flaps -->
  <rect x="67" y="62" width="19.05" height="8" class="fill-flap"/>
  <rect x="187.65" y="62" width="19.05" height="8" class="fill-flap"/>
  <rect x="67" y="133.5" width="19.05" height="8" class="fill-flap"/>
  <rect x="187.65" y="133.5" width="19.05" height="8" class="fill-flap"/>

  <!-- CUT LINE -->
  <path class="cut" d="
    M 67,70 L 55,73 L 55,130.5 L 67,133.5
    L 68.5,141.5 L 84.55,141.5 L 86.05,133.5
    L 87.55,148.5 L 186.15,148.5 L 187.65,133.5
    L 189.15,141.5 L 205.2,141.5 L 206.7,133.5
    L 208.2,148.5 L 306.8,148.5 L 308.3,133.5
    L 308.3,70
    L 306.8,55 L 208.2,55 L 206.7,70
    L 205.2,62 L 189.15,62 L 187.65,70
    L 186.15,55 L 87.55,55 L 86.05,70
    L 84.55,62 L 68.5,62 L 67,70 Z
  "/>

  <!-- FOLD LINES -->
  <line x1="67" y1="70" x2="67" y2="133.5" class="fold"/>
  <line x1="86.05" y1="70" x2="86.05" y2="133.5" class="fold"/>
  <line x1="187.65" y1="70" x2="187.65" y2="133.5" class="fold"/>
  <line x1="206.7" y1="70" x2="206.7" y2="133.5" class="fold"/>
  <line x1="67" y1="70" x2="308.3" y2="70" class="fold"/>
  <line x1="67" y1="133.5" x2="308.3" y2="133.5" class="fold"/>

  <!-- SAFETY ZONE -->
  <rect x="60" y="60" width="243.3" height="83.5" class="safety-zone"/>

  <!-- PANEL LABELS -->
  <text x="61" y="101" class="panel-id" transform="rotate(-90, 61, 101)" style="font-size: 7px;">GLUE</text>
  <text x="76.5" y="98" class="panel-id" transform="rotate(-90, 76.5, 98)" style="font-size: 7px;">B: SIDE</text>
  <text x="136.85" y="95" class="panel-id">C: FRONT PANEL</text>
  <text x="136.85" y="104" class="panel-detail">101.6 x 63.5 — primary artwork face</text>
  <text x="197.2" y="98" class="panel-id" transform="rotate(-90, 197.2, 98)" style="font-size: 7px;">D: SIDE</text>
  <text x="257.5" y="95" class="panel-id">E: BACK PANEL</text>
  <text x="257.5" y="104" class="panel-detail">101.6 x 63.5</text>

  <!-- FOLD ARROWS -->
  <text x="76.5" y="72" class="fold-label" text-anchor="middle" style="font-size: 5px;">FOLD →</text>
  <text x="197.2" y="72" class="fold-label" text-anchor="middle" style="font-size: 5px;">FOLD →</text>

  <!-- DIMENSIONS -->
  <line x1="86.05" y1="152" x2="86.05" y2="165" class="dim-line"/>
  <line x1="187.65" y1="152" x2="187.65" y2="165" class="dim-line"/>
  <line x1="86.05" y1="162" x2="187.65" y2="162" class="dim-arrow"/>
  <text x="136.85" y="160" class="dim-text">L = 101.6</text>

  <line x1="67" y1="152" x2="67" y2="158" class="dim-line"/>
  <line x1="67" y1="155" x2="86.05" y2="155" class="dim-arrow"/>
  <text x="76.5" y="153" class="dim-text">19.05</text>

  <line x1="308.3" y1="70" x2="325" y2="70" class="dim-line"/>
  <line x1="308.3" y1="133.5" x2="325" y2="133.5" class="dim-line"/>
  <line x1="322" y1="70" x2="322" y2="133.5" class="dim-arrow"/>
  <text x="322" y="101" class="dim-text" transform="rotate(-90, 322, 101)">W = 63.5</text>

  <!-- ============================================ -->
  <!-- 3D REFERENCE — Isometric closed box           -->
  <!-- ============================================ -->
  <!-- Box: 101.6mm L x 63.5mm W x 19.05mm D -->
  <!-- Scale: 0.8 units/mm. L_s=81.3, W_s=50.8, D_s=15.2 -->
  <!-- Iso: x=(0.866,0.5), z=(-0.866,0.5), y=(0,-1) -->
  <!-- Origin (back-left top): (460, 80) -->
  <!-- BL: (460, 80) -->
  <!-- BR: (460+81.3*0.866, 80+81.3*0.5) = (530.4, 120.7) -->
  <!-- FL: (460-50.8*0.866, 80+50.8*0.5) = (416, 105.4) -->
  <!-- FR: (416+70.4, 105.4+40.7) = (486.4, 146.1) -->
  <!-- Bottom: +15.2 to y -->

  <text x="475" y="60" class="ref-title">3D REFERENCE — CLOSED BOX</text>
  <text x="475" y="70" class="subtitle">Colors match flat dieline panels</text>

  <!-- Top face (shows tuck flap closed) -->
  <polygon points="460,80 530.4,120.7 486.4,146.1 416,105.4" fill="#F0E8E0" stroke="#444" stroke-width="0.5"/>

  <!-- Front face (C: green) — visible, lower-left -->
  <polygon points="416,105.4 486.4,146.1 486.4,161.3 416,120.6" fill="#B8E6B8" stroke="#444" stroke-width="0.5"/>

  <!-- Right side (D: orange) — visible, lower-right -->
  <polygon points="530.4,120.7 486.4,146.1 486.4,161.3 530.4,135.9" fill="#F5D0A0" stroke="#444" stroke-width="0.5"/>

  <!-- Labels -->
  <text x="455" y="132" class="ref-label">C: Front (green)</text>
  <text x="506" y="142" class="ref-label">D: Side (orange)</text>
  <text x="465" y="118" class="ref-label" text-anchor="middle">Top (tuck flap)</text>

  <!-- 3D open view — tuck flap open -->
  <text x="475" y="182" class="ref-title">3D — TUCK FLAP OPEN</text>

  <!-- Same box but with top tuck flap lifted -->
  <polygon points="460,195 530.4,235.7 486.4,261.1 416,220.4" fill="#F0E8E0" stroke="#444" stroke-width="0.5" opacity="0.3"/>
  <polygon points="416,220.4 486.4,261.1 486.4,276.3 416,235.6" fill="#B8E6B8" stroke="#444" stroke-width="0.5"/>
  <polygon points="530.4,235.7 486.4,261.1 486.4,276.3 530.4,250.9" fill="#F5D0A0" stroke="#444" stroke-width="0.5"/>

  <!-- Tuck flap lifted up from front edge -->
  <polygon points="416,220.4 486.4,261.1 486.4,250 416,209" fill="#F0E8E0" stroke="#444" stroke-width="0.4" opacity="0.6"/>
  <text x="455" y="240" class="ref-label">Interior visible</text>
  <text x="440" y="215" class="ref-label" fill="#888">Tuck flap (open)</text>

  <!-- ASSEMBLY -->
  <text x="475" y="300" class="spec-title" text-anchor="middle">ASSEMBLY</text>
{assembly_step(410, 315, 1, "Fold side panels (B, D) inward 90deg.")}
{assembly_step(410, 330, 2, "Glue tab adheres to back panel interior.")}
{assembly_step(410, 345, 3, "Fold dust flaps inward, then tuck flaps.")}
{assembly_step(410, 360, 4, "Box forms rectangular tube, tuck flaps close ends.")}

  <!-- PRINT SPECS -->
  <text x="410" y="385" class="spec-title">PRINT SPECIFICATIONS</text>
{print_specs(410, 398)}

  <!-- NOTES -->
  <text x="{cx}" y="255" class="note">PRODUCTION TEMPLATE — Panel colors match 3D reference. Grain direction runs vertically (parallel to height).</text>
  <text x="{cx}" y="263" class="note">Glue tab folds inward and bonds to back panel (E) interior. All four tuck flaps interlock to close top and bottom.</text>
  <text x="{cx}" y="271" class="note">All dimensions in millimeters. Scale: 1:1 when printed at 100%.</text>

</svg>"""
    return svg


# ============================================================
# MEDIUM TUCK-END (Lifer Ink / Turf Tags)
# 127.0 x 88.9 x 12.7 mm
# ============================================================

def gen_medium_tuckend(name, product_name, product_desc, tray_num):
    """Generate template for medium tuck-end box."""
    # Panels: Glue(50-62) | Side(62-74.7) | Front(74.7-201.7) | Side(201.7-214.4) | Back(214.4-341.4)
    # Vertical: tuck flaps at y=50-60 and y=148.9-158.9, main panels y=60-148.9

    vw, vh = 660, 310
    cx = 200

    svg = f"""<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {vw} {vh}" width="{vw}mm" height="{vh}mm">
{DEFS}
  <style>{COMMON_STYLE}</style>

  <text x="{cx}" y="14" class="title">{product_name} — TUCK END PRODUCTION TEMPLATE</text>
  <text x="{cx}" y="24" class="subtitle">127.0 x 88.9 x 12.7 mm (5.0" x 3.5" x 0.5") | {product_desc} | {tray_num}</text>

{make_legend(36)}

  <!-- BLEED ZONE -->
  <rect x="47" y="47" width="297.4" height="114.9" class="bleed-zone"/>

  <!-- PANEL FILLS -->
  <rect x="50" y="60" width="12" height="88.9" class="fill-glue"/>
  <rect x="62" y="60" width="12.7" height="88.9" class="fill-side"/>
  <rect x="74.7" y="60" width="127.0" height="88.9" class="fill-front"/>
  <rect x="201.7" y="60" width="12.7" height="88.9" class="fill-side"/>
  <rect x="214.4" y="60" width="127.0" height="88.9" class="fill-back"/>
  <!-- Tuck/dust flaps -->
  <rect x="74.7" y="50" width="127.0" height="10" class="fill-flap"/>
  <rect x="214.4" y="50" width="127.0" height="10" class="fill-flap"/>
  <rect x="74.7" y="148.9" width="127.0" height="10" class="fill-flap"/>
  <rect x="214.4" y="148.9" width="127.0" height="10" class="fill-flap"/>

  <!-- CUT LINE -->
  <path class="cut" d="
    M 62,60 L 50,63 L 50,145.9 L 62,148.9
    L 63.5,154.9 L 73.2,154.9 L 74.7,148.9
    L 76.2,158.9 L 200.2,158.9 L 201.7,148.9
    L 203.2,154.9 L 212.9,154.9 L 214.4,148.9
    L 215.9,158.9 L 339.9,158.9 L 341.4,148.9
    L 341.4,60
    L 339.9,50 L 215.9,50 L 214.4,60
    L 212.9,54 L 203.2,54 L 201.7,60
    L 200.2,50 L 76.2,50 L 74.7,60
    L 73.2,54 L 63.5,54 L 62,60 Z
  "/>

  <!-- FOLD LINES -->
  <line x1="62" y1="60" x2="62" y2="148.9" class="fold"/>
  <line x1="74.7" y1="60" x2="74.7" y2="148.9" class="fold"/>
  <line x1="201.7" y1="60" x2="201.7" y2="148.9" class="fold"/>
  <line x1="214.4" y1="60" x2="214.4" y2="148.9" class="fold"/>
  <line x1="62" y1="60" x2="341.4" y2="60" class="fold"/>
  <line x1="62" y1="148.9" x2="341.4" y2="148.9" class="fold"/>

  <!-- SAFETY ZONE -->
  <rect x="55" y="55" width="281.4" height="98.9" class="safety-zone"/>

  <!-- PANEL LABELS -->
  <text x="56" y="104" class="panel-id" transform="rotate(-90, 56, 104)" style="font-size: 7px;">GLUE</text>
  <text x="68.3" y="101" class="panel-id" transform="rotate(-90, 68.3, 101)" style="font-size: 7px;">B: SIDE</text>
  <text x="138.2" y="98" class="panel-id">C: FRONT PANEL</text>
  <text x="138.2" y="108" class="panel-detail">127.0 x 88.9 — primary artwork face</text>
  <text x="208" y="101" class="panel-id" transform="rotate(-90, 208, 101)" style="font-size: 7px;">D: SIDE</text>
  <text x="277.9" y="98" class="panel-id">E: BACK PANEL</text>
  <text x="277.9" y="108" class="panel-detail">127.0 x 88.9</text>

  <!-- DIMENSIONS -->
  <line x1="74.7" y1="162" x2="74.7" y2="175" class="dim-line"/>
  <line x1="201.7" y1="162" x2="201.7" y2="175" class="dim-line"/>
  <line x1="74.7" y1="172" x2="201.7" y2="172" class="dim-arrow"/>
  <text x="138.2" y="170" class="dim-text">L = 127.0</text>

  <line x1="341.4" y1="60" x2="360" y2="60" class="dim-line"/>
  <line x1="341.4" y1="148.9" x2="360" y2="148.9" class="dim-line"/>
  <line x1="357" y1="60" x2="357" y2="148.9" class="dim-arrow"/>
  <text x="357" y="104" class="dim-text" transform="rotate(-90, 357, 104)">W = 88.9</text>

  <!-- 3D REFERENCE -->
  <!-- Box: 127mm L x 88.9mm W x 12.7mm D — flatter box -->
  <!-- Scale: 0.6. L_s=76.2, W_s=53.3, D_s=7.6 -->
  <!-- Origin (back-left top): (500, 80) -->
  <!-- BL: (500, 80), BR: (566, 118.1), FL: (453.8, 106.7), FR: (519.8, 144.8) -->
  <!-- Bottom: +7.6 to y -->

  <text x="510" y="60" class="ref-title">3D REFERENCE — CLOSED</text>
  <text x="510" y="70" class="subtitle">Thin box (12.7mm depth)</text>

  <!-- Top -->
  <polygon points="500,80 566,118.1 519.8,144.8 453.8,106.7" fill="#F0E8E0" stroke="#444" stroke-width="0.5"/>
  <!-- Front (green) -->
  <polygon points="453.8,106.7 519.8,144.8 519.8,152.4 453.8,114.3" fill="#B8E6B8" stroke="#444" stroke-width="0.5"/>
  <!-- Right side (orange) -->
  <polygon points="566,118.1 519.8,144.8 519.8,152.4 566,125.7" fill="#F5D0A0" stroke="#444" stroke-width="0.5"/>

  <text x="490" y="130" class="ref-label">C: Front (green)</text>
  <text x="543" y="138" class="ref-label">D: Side</text>
  <text x="505" y="118" class="ref-label" text-anchor="middle">Top (tuck)</text>

  <!-- ASSEMBLY -->
  <text x="510" y="175" class="spec-title" text-anchor="middle">ASSEMBLY</text>
{assembly_step(445, 190, 1, "Fold sides (B, D) inward 90deg.")}
{assembly_step(445, 205, 2, "Glue tab bonds to back panel interior.")}
{assembly_step(445, 220, 3, "Fold dust flaps, then tuck flaps to close.")}

  <!-- PRINT SPECS -->
  <text x="445" y="245" class="spec-title">PRINT SPECIFICATIONS</text>
{print_specs(445, 258)}

  <!-- NOTES -->
  <text x="{cx}" y="270" class="note">PRODUCTION TEMPLATE — Thinner box (12.7mm). Same tuck-end construction as card deck boxes but wider panels.</text>
  <text x="{cx}" y="278" class="note">All dimensions in millimeters. Scale: 1:1 when printed at 100%.</text>

</svg>"""
    return svg


# ============================================================
# CUBICLE SHANK PEN BOX (Tray & Sleeve)
# 165.1 x 44.45 x 25.4 mm — two piece
# ============================================================

def gen_pen_box():
    vw, vh = 560, 560
    cx = 155

    svg = f"""<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {vw} {vh}" width="{vw}mm" height="{vh}mm">
{DEFS}
  <style>{COMMON_STYLE}</style>

  <text x="{cx}" y="14" class="title">CUBICLE SHANK — TRAY &amp; SLEEVE TEMPLATE</text>
  <text x="{cx}" y="24" class="subtitle">165.1 x 44.45 x 25.4 mm (6.5" x 1.75" x 1.0") | Pen | Tray 1 | Two-piece matchbox style</text>

{make_legend(36)}

  <!-- ===== COMPONENT 1: SLEEVE ===== -->
  <text x="40" y="55" class="spec-title">COMPONENT 1: SLEEVE (outer cover)</text>

  <!-- Panel fills -->
  <rect x="40" y="65" width="12" height="165.1" class="fill-glue"/>
  <rect x="52" y="65" width="25.4" height="165.1" class="fill-side"/>
  <rect x="77.4" y="65" width="44.45" height="165.1" class="fill-top"/>
  <rect x="121.85" y="65" width="25.4" height="165.1" class="fill-side"/>
  <rect x="147.25" y="65" width="44.45" height="165.1" class="fill-bottom"/>

  <!-- Cut line -->
  <path class="cut" d="M 52,65 L 40,68 L 40,227.1 L 52,230.1 L 191.7,230.1 L 191.7,65 Z"/>

  <!-- Fold lines -->
  <line x1="52" y1="65" x2="52" y2="230.1" class="fold"/>
  <line x1="77.4" y1="65" x2="77.4" y2="230.1" class="fold"/>
  <line x1="121.85" y1="65" x2="121.85" y2="230.1" class="fold"/>
  <line x1="147.25" y1="65" x2="147.25" y2="230.1" class="fold"/>

  <!-- Bleed / Safety -->
  <rect x="37" y="62" width="157.7" height="171.1" class="bleed-zone"/>
  <rect x="45" y="70" width="141.7" height="155.1" class="safety-zone"/>

  <!-- Labels -->
  <text x="46" y="148" class="panel-id" transform="rotate(-90, 46, 148)" style="font-size: 7px;">GLUE</text>
  <text x="64.7" y="145" class="panel-id" transform="rotate(-90, 64.7, 145)">B: SIDE</text>
  <text x="99.6" y="135" class="panel-id" transform="rotate(-90, 99.6, 135)">C: TOP FACE</text>
  <text x="99.6" y="165" class="panel-detail" transform="rotate(-90, 99.6, 165)">44.45 x 165.1 — main artwork</text>
  <text x="134.5" y="145" class="panel-id" transform="rotate(-90, 134.5, 145)">D: SIDE</text>
  <text x="169.5" y="140" class="panel-id" transform="rotate(-90, 169.5, 140)">E: BOTTOM</text>

  <text x="121" y="60" class="flap-label">← OPEN END (tray slides in/out) →</text>
  <text x="121" y="240" class="flap-label">← OPEN END (tray slides in/out) →</text>

  <!-- ===== COMPONENT 2: TRAY ===== -->
  <text x="40" y="262" class="spec-title">COMPONENT 2: TRAY (inner, with pen recess)</text>

  <!-- Panel fills -->
  <rect x="64" y="294" width="163" height="43" class="fill-tray-base"/>
  <rect x="64" y="270" width="163" height="24" class="fill-tray-wall"/>
  <rect x="64" y="337" width="163" height="24" class="fill-tray-wall"/>
  <rect x="40" y="294" width="24" height="43" class="fill-tray-wall"/>
  <rect x="227" y="294" width="24" height="43" class="fill-tray-wall"/>
  <rect x="40" y="270" width="24" height="24" class="fill-tab"/>
  <rect x="227" y="270" width="24" height="24" class="fill-tab"/>
  <rect x="40" y="337" width="24" height="24" class="fill-tab"/>
  <rect x="227" y="337" width="24" height="24" class="fill-tab"/>

  <!-- Pen recess -->
  <rect x="68" y="310" width="155" height="14" rx="7" ry="7" class="recess-fill"/>
  <rect x="68" y="310" width="155" height="14" rx="7" ry="7" class="recess"/>

  <!-- Cut / fold -->
  <rect x="40" y="270" width="211" height="91" class="cut"/>
  <line x1="40" y1="270" x2="64" y2="294" class="cut"/>
  <line x1="227" y1="294" x2="251" y2="270" class="cut"/>
  <line x1="40" y1="361" x2="64" y2="337" class="cut"/>
  <line x1="227" y1="337" x2="251" y2="361" class="cut"/>
  <line x1="64" y1="270" x2="64" y2="361" class="fold"/>
  <line x1="227" y1="270" x2="227" y2="361" class="fold"/>
  <line x1="40" y1="294" x2="251" y2="294" class="fold"/>
  <line x1="40" y1="337" x2="251" y2="337" class="fold"/>

  <text x="145.5" y="306" class="panel-id">F: TRAY BASE</text>
  <text x="145.5" y="330" class="panel-detail" fill="#00AA00">Pen recess ~155 x 14mm, rounded</text>
  <text x="145.5" y="280" class="panel-detail">BACK WALL (24mm)</text>
  <text x="145.5" y="352" class="panel-detail">FRONT WALL (24mm)</text>

  <!-- ===== 3D REFERENCE ===== -->
  <!-- Closed: sleeve wrapping tray -->
  <text x="420" y="70" class="ref-title">3D REFERENCE — ASSEMBLED</text>

  <!-- Isometric closed pen box. 165.1mm L x 44.45mm W x 25.4mm H -->
  <!-- Scale 0.55. L_s=90.8, W_s=24.4, H_s=14.0 -->
  <!-- Origin BL_top: (370, 105) -->
  <!-- BR: (370+78.6, 105+45.4) = (448.6, 150.4) -->
  <!-- FL: (370-21.1, 105+12.2) = (348.9, 117.2) -->
  <!-- FR: (348.9+78.6, 117.2+45.4) = (427.5, 162.6) -->
  <!-- Bottom: +14 to y -->

  <polygon points="370,105 448.6,150.4 427.5,162.6 348.9,117.2" fill="#D0E8D0" stroke="#444" stroke-width="0.5"/>
  <polygon points="348.9,117.2 427.5,162.6 427.5,176.6 348.9,131.2" fill="#B8E6B8" stroke="#444" stroke-width="0.5"/>
  <polygon points="448.6,150.4 427.5,162.6 427.5,176.6 448.6,164.4" fill="#F5D0A0" stroke="#444" stroke-width="0.5"/>

  <text x="395" y="140" class="ref-label" text-anchor="middle">C: Top (sleeve)</text>
  <text x="375" y="155" class="ref-label">Front</text>
  <text x="443" y="163" class="ref-label">Side</text>

  <!-- Open: tray sliding out -->
  <text x="420" y="200" class="ref-title">3D — TRAY SLIDING OUT</text>

  <!-- Sleeve (left, shorter) -->
  <polygon points="340,230 390,259 376,267 326,238" fill="#D0E8D0" stroke="#444" stroke-width="0.5" opacity="0.6"/>
  <polygon points="326,238 376,267 376,281 326,252" fill="#B8E6B8" stroke="#444" stroke-width="0.5" opacity="0.6"/>

  <!-- Tray sliding right -->
  <polygon points="380,250 458,295 444,303 366,258" fill="#F5F5F5" stroke="#444" stroke-width="0.5"/>
  <polygon points="366,258 444,303 444,313 366,268" fill="#E2ECF4" stroke="#444" stroke-width="0.5"/>
  <!-- Recess hint -->
  <line x1="384" y1="264" x2="450" y2="302" stroke="#00AA00" stroke-width="0.5" stroke-dasharray="2,1"/>

  <text x="350" y="248" class="ref-label">Sleeve</text>
  <text x="420" y="285" class="ref-label" text-anchor="middle">Tray (slides out)</text>
  <text x="430" y="310" class="ref-label" fill="#00AA00">pen recess</text>

  <!-- ASSEMBLY -->
  <text x="420" y="340" class="spec-title" text-anchor="middle">ASSEMBLY</text>
{assembly_step(350, 355, 1, "SLEEVE: Fold sides around, glue tab to close tube.")}
{assembly_step(350, 370, 2, "TRAY: Fold all four walls up, tuck corner tabs.")}
{assembly_step(350, 385, 3, "Slide tray into sleeve. Open on both short ends.")}

  <!-- PRINT SPECS -->
  <text x="350" y="410" class="spec-title">PRINT SPECIFICATIONS</text>
{print_specs(350, 423)}

  <!-- NOTES -->
  <text x="280" y="490" class="note">PRODUCTION TEMPLATE — Two separate pieces. Sleeve prints full-color exterior. Tray is interior-only.</text>
  <text x="280" y="498" class="note">Tray is slightly smaller than sleeve interior for sliding fit. Confirm clearance with manufacturer.</text>
  <text x="280" y="506" class="note">Pen recess: die-cut rounded channel ~155 x 14mm. Depth TBD with sourcing.</text>

</svg>"""
    return svg


# ============================================================
# COMPARTMENT COVER (J-shaped fold)
# 342.9 x 283.5 mm flat
# ============================================================

def gen_compartment_cover():
    vw, vh = 650, 450
    cx = 250

    svg = f"""<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {vw} {vh}" width="{vw}mm" height="{vh}mm">
{DEFS}
  <style>{COMMON_STYLE}</style>

  <text x="{cx}" y="14" class="title">COMPARTMENT COVER — PRODUCTION TEMPLATE</text>
  <text x="{cx}" y="24" class="subtitle">342.9 x 283.5 mm flat | J-shaped fold | ~24pt rigid paperboard | Dark carbon fiber both sides</text>
  <text x="{cx}" y="32" class="subtitle">Separates front tray zone from back mug compartment. Vertical surface acts as divider wall.</text>

{make_legend(44)}

  <!-- BLEED ZONE -->
  <rect x="47" y="57" width="348.9" height="289.5" class="bleed-zone"/>

  <!-- PANEL FILLS — 3 zones -->
  <rect x="50" y="60" width="342.9" height="101.6" class="fill-top-surface"/>
  <rect x="50" y="161.6" width="342.9" height="105.7" class="fill-vert-wall"/>
  <rect x="50" y="267.3" width="342.9" height="76.2" class="fill-floor-flap"/>

  <!-- CUT LINE -->
  <rect x="50" y="60" width="342.9" height="283.5" class="cut"/>

  <!-- FOLD LINES -->
  <line x1="50" y1="161.6" x2="392.9" y2="161.6" class="fold"/>
  <line x1="50" y1="267.3" x2="392.9" y2="267.3" class="fold"/>

  <!-- SAFETY ZONE -->
  <rect x="55" y="65" width="332.9" height="273.5" class="safety-zone"/>

  <!-- PANEL LABELS -->
  <text x="221.45" y="108" class="panel-id">A: TOP SURFACE</text>
  <text x="221.45" y="118" class="panel-detail">342.9 x 101.6 mm — rests on back zone walls, visible when Tray 2 is removed</text>
  <text x="221.45" y="128" class="panel-detail">Doc Set 2 sits ON this surface</text>

  <text x="221.45" y="210" class="panel-id">B: VERTICAL WALL</text>
  <text x="221.45" y="220" class="panel-detail">342.9 x 105.7 mm — drops straight down as divider between zones</text>

  <text x="221.45" y="300" class="panel-id">C: FLOOR FLAP</text>
  <text x="221.45" y="310" class="panel-detail">342.9 x 76.2 mm — extends forward under tray stack, trapped by weight</text>

  <!-- FOLD ARROWS -->
  <text x="400" y="162" class="fold-label">FOLD DOWN 90° ↓</text>
  <text x="400" y="268" class="fold-label">FOLD FORWARD 90° →</text>

  <!-- ===== 3D REFERENCE ===== -->
  <!-- J-profile side view -->
  <text x="545" y="70" class="ref-title">3D REFERENCE — J-PROFILE</text>
  <text x="545" y="80" class="subtitle">Side view showing fold angles</text>

  <!-- Top surface (blue, horizontal) -->
  <line x1="490" y1="120" x2="560" y2="120" stroke="#444" stroke-width="1"/>
  <rect x="490" y="117" width="70" height="6" fill="#B3D4F0" stroke="#444" stroke-width="0.5"/>
  <text x="525" y="113" class="ref-label" text-anchor="middle">A: Top surface</text>

  <!-- Vertical wall (green, drops down from left edge of top) -->
  <rect x="487" y="123" width="6" height="72" fill="#B8E6B8" stroke="#444" stroke-width="0.5"/>
  <text x="480" y="160" class="ref-label" text-anchor="end">B: Wall</text>

  <!-- Floor flap (orange, extends right from bottom of wall) -->
  <rect x="490" y="192" width="50" height="6" fill="#F5D0A0" stroke="#444" stroke-width="0.5"/>
  <text x="525" y="206" class="ref-label" text-anchor="middle">C: Floor flap</text>

  <!-- 90° angle indicators -->
  <rect x="490" y="120" width="8" height="8" fill="none" stroke="#0055CC" stroke-width="0.3"/>
  <rect x="490" y="189" width="8" height="8" fill="none" stroke="#0055CC" stroke-width="0.3"/>
  <text x="505" y="130" class="ref-label" fill="#0055CC">90°</text>
  <text x="505" y="198" class="ref-label" fill="#0055CC">90°</text>

  <!-- Context diagram -->
  <text x="545" y="235" class="ref-title">IN CONTEXT — BRIEFCASE CROSS-SECTION</text>

  <!-- Simplified briefcase cross-section -->
  <!-- Outer box -->
  <rect x="480" y="260" width="130" height="90" fill="none" stroke="#444" stroke-width="0.5"/>
  <text x="545" y="255" class="ref-label" text-anchor="middle">Briefcase (side view)</text>

  <!-- Compartment cover J-piece inside -->
  <line x1="540" y1="260" x2="540" y2="330" stroke="#B8E6B8" stroke-width="2"/>
  <line x1="540" y1="330" x2="510" y2="330" stroke="#F5D0A0" stroke-width="2"/>
  <line x1="540" y1="260" x2="570" y2="260" stroke="#B3D4F0" stroke-width="2"/>

  <!-- Zone labels -->
  <text x="510" y="295" class="ref-label" text-anchor="middle" fill="#00AA00">Back zone</text>
  <text x="510" y="305" class="ref-label" text-anchor="middle" fill="#00AA00">(mug)</text>
  <text x="570" y="295" class="ref-label" text-anchor="middle" fill="#00AA00">Front zone</text>
  <text x="570" y="305" class="ref-label" text-anchor="middle" fill="#00AA00">(trays)</text>

  <!-- ASSEMBLY -->
  <text x="545" y="370" class="spec-title" text-anchor="middle">ASSEMBLY</text>
{assembly_step(480, 385, 1, "Fold at first crease: wall drops 90deg down.")}
{assembly_step(480, 400, 2, "Fold at second crease: flap extends 90deg forward.")}
{assembly_step(480, 415, 3, "Insert into briefcase. Top rests on walls, flap under trays.")}

  <!-- NOTES -->
  <text x="{cx}" y="370" class="note">PRODUCTION TEMPLATE — Single flat piece, two folds create J-profile. Both sides printable.</text>
  <text x="{cx}" y="378" class="note">Top surface = Doc Set 2 platform. Wall = zone divider. Flap = trapped by tray stack weight.</text>
  <text x="{cx}" y="386" class="note">All dimensions in millimeters. Scale: 1:1 when printed at 100%.</text>

</svg>"""
    return svg


# ============================================================
# OUTER AMAZON BOX (Tuck-top mailer)
# 393.7 x 330.2 x 165.1 mm — at 35% scale in dieline
# ============================================================

def gen_outer_box():
    vw, vh = 520, 330
    cx = 230

    svg = f"""<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {vw} {vh}" width="{vw}mm" height="{vh}mm">
{DEFS}
  <style>{COMMON_STYLE}</style>

  <text x="{cx}" y="14" class="title">OUTER AMAZON BOX — TUCK-TOP MAILER TEMPLATE</text>
  <text x="{cx}" y="24" class="subtitle">393.7 x 330.2 x 165.1 mm (15.5" x 13.0" x 6.5") | Corrugated (E/B-flute) | SCALE: 35%</text>
  <text x="{cx}" y="32" class="subtitle">Product packaging, NOT shipping box. Full-color print. Tuck-top lid (single panel, not 4-flap).</text>

{make_legend(44)}

  <!-- BLEED (at 35% scale) -->
  <rect x="37" y="32" width="372.05" height="201.6" class="bleed-zone"/>

  <!-- Panel fills (35% scale positions from original dieline) -->
  <rect x="40" y="63.9" width="5.25" height="137.8" class="fill-glue"/>
  <rect x="45.25" y="63.9" width="57.8" height="137.8" class="fill-front"/>
  <rect x="103.05" y="63.9" width="115.6" height="137.8" class="fill-base"/>
  <rect x="218.65" y="63.9" width="57.8" height="137.8" class="fill-back"/>
  <rect x="276.45" y="63.9" width="115.6" height="137.8" class="fill-lid"/>
  <rect x="392.05" y="63.9" width="14" height="137.8" class="fill-flap"/>
  <!-- Side flaps -->
  <rect x="45.25" y="35" width="57.8" height="28.9" class="fill-flap"/>
  <rect x="103.05" y="35" width="115.6" height="28.9" class="fill-flap"/>
  <rect x="218.65" y="35" width="57.8" height="28.9" class="fill-flap"/>
  <rect x="276.45" y="35" width="115.6" height="28.9" class="fill-flap"/>
  <rect x="45.25" y="201.7" width="57.8" height="28.9" class="fill-flap"/>
  <rect x="103.05" y="201.7" width="115.6" height="28.9" class="fill-flap"/>
  <rect x="218.65" y="201.7" width="57.8" height="28.9" class="fill-flap"/>
  <rect x="276.45" y="201.7" width="115.6" height="28.9" class="fill-flap"/>

  <!-- CUT LINE -->
  <path class="cut" d="
    M 45.25,63.9 L 40,66.9 L 40,198.7 L 45.25,201.7
    L 45.25,230.6 L 103.05,230.6 L 103.05,201.7
    L 218.65,230.6 L 218.65,201.7
    L 218.65,230.6 L 276.45,230.6 L 276.45,201.7
    L 276.45,230.6 L 392.05,230.6 L 392.05,201.7
    L 406.05,204.7 L 406.05,60.9 L 392.05,63.9
    L 392.05,35 L 276.45,35 L 276.45,63.9
    L 218.65,35 L 218.65,63.9
    L 103.05,35 L 103.05,63.9
    L 45.25,35 L 45.25,63.9 Z
  "/>

  <!-- FOLD LINES -->
  <line x1="45.25" y1="35" x2="45.25" y2="230.6" class="fold"/>
  <line x1="103.05" y1="35" x2="103.05" y2="230.6" class="fold"/>
  <line x1="218.65" y1="35" x2="218.65" y2="230.6" class="fold"/>
  <line x1="276.45" y1="35" x2="276.45" y2="230.6" class="fold"/>
  <line x1="392.05" y1="63.9" x2="392.05" y2="201.7" class="fold"/>
  <line x1="45.25" y1="63.9" x2="392.05" y2="63.9" class="fold"/>
  <line x1="45.25" y1="201.7" x2="392.05" y2="201.7" class="fold"/>

  <!-- PANEL LABELS -->
  <text x="42.6" y="133" class="panel-detail" transform="rotate(-90, 42.6, 133)" style="font-size: 5px;">GLUE</text>
  <text x="74" y="125" class="panel-id" transform="rotate(-90, 74, 125)" style="font-size: 7px;">B: FRONT</text>
  <text x="74" y="145" class="panel-detail" transform="rotate(-90, 74, 145)">165.1 x 393.7</text>
  <text x="160.85" y="128" class="panel-id">C: BOTTOM</text>
  <text x="160.85" y="140" class="panel-detail">330.2 x 393.7</text>
  <text x="247.5" y="125" class="panel-id" transform="rotate(-90, 247.5, 125)" style="font-size: 7px;">D: BACK</text>
  <text x="334.25" y="125" class="panel-id">E: LID / TOP</text>
  <text x="334.25" y="137" class="panel-detail">330.2 x 393.7</text>
  <text x="334.25" y="147" class="panel-detail">Interior printed: welcome + photo</text>
  <text x="399" y="133" class="panel-detail" transform="rotate(-90, 399, 133)" style="font-size: 5px;">TUCK</text>

  <!-- 3D REFERENCE -->
  <!-- At 35% scale this is compact, so 3D goes to the right -->
  <!-- Box: large. Iso scale 0.15 (since already at 35%). -->
  <!-- Actual: 393.7 x 330.2 x 165.1. Use scale 0.2 from actual dims. -->
  <!-- L_s=78.7, W_s=66, H_s=33 -->
  <!-- Origin BL_top: (440, 90) -->
  <!-- BR: (440+68.2, 90+39.4) = (508.2, 129.4) -->
  <!-- FL: (440-57.1, 90+33) = (382.9, 123) -->
  <!-- FR: (382.9+68.2, 123+39.4) = (451.1, 162.4) -->
  <!-- Bottom: +33 to y -->

  <text x="450" y="70" class="ref-title">3D — CLOSED</text>

  <!-- Top/Lid (blue) -->
  <polygon points="440,90 508.2,129.4 451.1,162.4 382.9,123" fill="#B3D4F0" stroke="#444" stroke-width="0.5"/>
  <!-- Front (green) -->
  <polygon points="382.9,123 451.1,162.4 451.1,195.4 382.9,156" fill="#B8E6B8" stroke="#444" stroke-width="0.5"/>
  <!-- Right side -->
  <polygon points="508.2,129.4 451.1,162.4 451.1,195.4 508.2,162.4" fill="#F5D0A0" stroke="#444" stroke-width="0.5"/>

  <text x="445" y="135" class="ref-label" text-anchor="middle">E: Lid (blue)</text>
  <text x="405" y="160" class="ref-label">B: Front (green)</text>

  <text x="450" y="210" class="ref-title">3D — LID OPEN</text>

  <!-- Base -->
  <polygon points="440,240 508.2,279.4 451.1,312.4 382.9,273" fill="#E8E8E8" stroke="#444" stroke-width="0.5"/>
  <!-- Front wall -->
  <polygon points="382.9,273 451.1,312.4 451.1,335.4 382.9,296" fill="#B8E6B8" stroke="#444" stroke-width="0.5"/>
  <!-- Lid open (hinged from back) -->
  <polygon points="440,240 508.2,279.4 490,250 422,210.6" fill="#B3D4F0" stroke="#444" stroke-width="0.5" opacity="0.6"/>
  <!-- Hinge line -->
  <line x1="440" y1="240" x2="508.2" y2="279.4" stroke="#CC6600" stroke-width="0.8" stroke-dasharray="3,2"/>

  <text x="460" y="235" class="ref-label" fill="#CC6600">hinge (back)</text>
  <text x="450" y="225" class="ref-label" fill="#4477AA">E: Lid (open)</text>
  <text x="445" y="290" class="ref-label" text-anchor="middle">C: Bottom</text>
  <text x="420" y="322" class="ref-label">Tuck tab inserts into front</text>

  <!-- NOTES -->
  <text x="{cx}" y="255" class="note">PRODUCTION TEMPLATE — ALL DIMENSIONS AT 35% SCALE. Multiply displayed measurements by ~2.857 for actual size.</text>
  <text x="{cx}" y="263" class="note">Tuck-top mailer: lid is one panel that folds from back, over top, and tucks behind front wall. NOT a 4-flap box.</text>
  <text x="{cx}" y="271" class="note">Lid interior is printed (welcome letter + Brad's photo). This is product packaging, not shipping packaging.</text>
  <text x="{cx}" y="279" class="note">FBA Large Standard tier compliant. Corrugated (E-flute or B-flute). Full-color print exterior + lid interior.</text>

</svg>"""
    return svg


# ============================================================
# MAIN
# ============================================================

def main():
    os.makedirs("templates", exist_ok=True)

    templates = {
        "cell-talk-box-template": gen_small_tuckend(
            "cell-talk-box", "CELL TALK", "Affirmation Cards", "Tray 2"),
        "rap-sheets-box-template": gen_small_tuckend(
            "rap-sheets-box", "RAP SHEETS", "Complaint Cards", "Tray 2"),
        "sweet-nothings-box-template": gen_small_tuckend(
            "sweet-nothings-box", "SWEET NOTHINGS", "Passive-Aggressive Cards", "Tray 2"),
        "lifer-ink-box-template": gen_medium_tuckend(
            "lifer-ink-box", "LIFER INK", "Temporary Tattoos", "Tray 1"),
        "turf-tags-box-template": gen_medium_tuckend(
            "turf-tags-box", "TURF TAGS", "Stickers", "Tray 1"),
        "cubicle-shank-box-template": gen_pen_box(),
        "compartment-cover-template": gen_compartment_cover(),
        "outer-amazon-box-template": gen_outer_box(),
    }

    for name, svg_content in templates.items():
        path = os.path.join("templates", f"{name}.svg")
        with open(path, "w", encoding="utf-8") as f:
            f.write(svg_content)
        print(f"OK  {path}")

    print(f"\nDone. {len(templates)} templates generated.")
    print("NOTE: tray-template.svg and briefcase-template.svg are NOT overwritten (hand-built).")


if __name__ == "__main__":
    main()
