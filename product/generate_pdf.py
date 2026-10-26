"""
Convert the Office Survival Kit Final Copy Reference from Markdown to a
clean, professional PDF suitable for stakeholder review.

Uses: markdown (MD -> HTML) + xhtml2pdf (HTML -> PDF)

xhtml2pdf has limited CSS support, so we use simple selectors and classes
rather than pseudo-selectors or attribute selectors.
"""

import markdown
from xhtml2pdf import pisa
import os
import re

# --- Paths ---
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
MD_PATH = os.path.join(SCRIPT_DIR, "Office Survival Kit - Final Copy Reference.md")
PDF_PATH = os.path.join(SCRIPT_DIR, "Office Survival Kit - Final Copy Reference.pdf")

# --- Read Markdown ---
with open(MD_PATH, "r", encoding="utf-8") as f:
    md_text = f.read()

# --- Convert Markdown to HTML ---
extensions = ["tables", "smarty", "sane_lists"]
html_body = markdown.markdown(md_text, extensions=extensions)

# --- Post-process HTML ---
# 1. Add class="doc-title" to the first H1 (document title)
# 2. Add class="item-header" to all subsequent H1s (item sections)
h1_count = 0

def replace_h1(match):
    global h1_count
    h1_count += 1
    inner = match.group(1)
    if h1_count == 1:
        return f'<h1 class="doc-title">{inner}</h1>'
    else:
        return f'<h1 class="item-header">{inner}</h1>'

html_body = re.sub(r'<h1>(.*?)</h1>', replace_h1, html_body)

# --- Professional CSS for the PDF (xhtml2pdf-compatible) ---
CSS = """
@page {
    size: letter;
    margin: 0.85in 0.8in 0.85in 0.8in;

    @frame footer {
        -pdf-frame-content: footerContent;
        bottom: 0.3in;
        left: 0.8in;
        right: 0.8in;
        height: 0.35in;
    }
}

body {
    font-family: Helvetica, Arial, sans-serif;
    font-size: 10pt;
    line-height: 1.5;
    color: #1a1a1a;
}

/* --- Document Title (first H1) --- */
h1.doc-title {
    font-size: 20pt;
    font-weight: bold;
    color: #111111;
    margin-top: 0;
    margin-bottom: 6pt;
    border-bottom: 2pt solid #333333;
    padding-bottom: 8pt;
}

/* --- Item Section Headers (subsequent H1s) --- */
h1.item-header {
    font-size: 16pt;
    font-weight: bold;
    color: #111111;
    margin-top: 0;
    margin-bottom: 8pt;
    padding-bottom: 6pt;
    border-bottom: 2pt solid #333333;
    page-break-before: always;
}

/* --- Surface Headers (H2) --- */
h2 {
    font-size: 12pt;
    font-weight: bold;
    color: #2c2c2c;
    margin-top: 16pt;
    margin-bottom: 5pt;
    padding-bottom: 3pt;
    border-bottom: 1pt solid #cccccc;
}

/* --- Blockquotes: the actual copy text --- */
blockquote {
    background-color: #f4f4ee;
    border-left: 3pt solid #555555;
    margin: 8pt 0;
    padding: 8pt 12pt;
    font-size: 9.5pt;
    line-height: 1.55;
    color: #222222;
}

/* --- Tables --- */
table {
    width: 100%;
    border-collapse: collapse;
    margin: 10pt 0;
    font-size: 9pt;
}

th {
    background-color: #333333;
    color: #ffffff;
    font-weight: bold;
    padding: 6pt 8pt;
    text-align: left;
    border: 1pt solid #333333;
}

td {
    padding: 5pt 8pt;
    border: 1pt solid #cccccc;
    vertical-align: top;
}

/* --- Horizontal rules --- */
hr {
    border: none;
    border-top: 1pt solid #dddddd;
    margin: 12pt 0;
}

/* --- Lists --- */
ul {
    margin: 6pt 0;
    padding-left: 18pt;
}

ol {
    margin: 6pt 0;
    padding-left: 18pt;
}

li {
    margin-bottom: 3pt;
    font-size: 10pt;
}

/* --- Emphasis / Italic --- */
em {
    font-style: italic;
    color: #444444;
}

/* --- Strong --- */
strong {
    font-weight: bold;
}

/* --- Paragraphs --- */
p {
    margin: 4pt 0;
}
"""

# --- Full HTML document ---
FULL_HTML = f"""<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <style>
{CSS}
    </style>
</head>
<body>
{html_body}

    <div id="footerContent" style="text-align: center; font-size: 7.5pt; color: #999999; border-top: 1pt solid #dddddd; padding-top: 3pt;">
        Office Survival Kit &mdash; Final Copy Reference &nbsp;|&nbsp; Elevate Co. &nbsp;|&nbsp; June 2026 &nbsp;|&nbsp; CONFIDENTIAL
    </div>
</body>
</html>"""

# --- Generate PDF ---
with open(PDF_PATH, "w+b") as pdf_file:
    status = pisa.CreatePDF(FULL_HTML, dest=pdf_file)

if status.err:
    print(f"ERROR: PDF generation failed with {status.err} error(s).")
else:
    size_kb = os.path.getsize(PDF_PATH) / 1024
    print(f"SUCCESS: PDF generated at:\n  {PDF_PATH}")
    print(f"  Size: {size_kb:.1f} KB")
