/*
 * Place "The Upgrade" Spread — Pages 14 (image) & 15 (text)
 * ===========================================================
 * Run from InDesign: File > Scripts > place-upgrade-spread-p15.jsx
 *
 * Page 14 (left/image page): Section label, headline, deck
 *   — positioned for overlay on a full-bleed image
 *   — text set to white via override (user adds dark overlay)
 *
 * Page 15 (right/text page): Editorial body, snippet note,
 *   specs table, verdict callout, Brad quote, DID YOU KNOW, kicker
 *
 * REQUIRES: All paragraph styles and color swatches must already
 * exist in the document. This script creates nothing new — it only
 * references what's already there.
 *
 * Paragraph styles used:
 *   Section Label, Article Headline Alt, Article Deck, Body,
 *   Body - First Paragraph, Callout Box Text, Callout Label,
 *   Spec Table Header, Spec Table Cell, Spec Table Label,
 *   Brad Quote, Brad Quote Attribution, Caption
 *
 * Color swatches used (for background fills on non-text frames):
 *   Elevate Black, Elevate Gold, Warm Gray 15%
 */

(function main() {

    if (app.documents.length === 0) {
        alert("No document open. Please open your InDesign document first.");
        return;
    }

    var doc = app.activeDocument;
    var IMAGE_PAGE_INDEX = 13; // 0-based, so page 14 (left/image page)
    var TEXT_PAGE_INDEX = 14;  // 0-based, so page 15 (right/text page)

    // Ensure we have enough pages
    while (doc.pages.length <= TEXT_PAGE_INDEX) {
        doc.pages.add();
    }

    var imagePage = doc.pages[IMAGE_PAGE_INDEX];
    var textPage = doc.pages[TEXT_PAGE_INDEX];

    // Set measurement units to inches
    var oldHUnits = doc.viewPreferences.horizontalMeasurementUnits;
    var oldVUnits = doc.viewPreferences.verticalMeasurementUnits;
    doc.viewPreferences.horizontalMeasurementUnits = MeasurementUnits.INCHES;
    doc.viewPreferences.verticalMeasurementUnits = MeasurementUnits.INCHES;

    // --------------------------------------------------------
    // HELPERS
    // --------------------------------------------------------

    function getStyle(name) {
        // allParagraphStyles includes styles inside groups/folders
        var all = doc.allParagraphStyles;
        for (var i = 0; i < all.length; i++) {
            if (all[i].name === name) {
                return all[i];
            }
        }
        return null;
    }

    function getColor(name) {
        for (var i = 0; i < doc.colors.length; i++) {
            if (doc.colors[i].name === name) {
                return doc.colors[i];
            }
        }
        return null;
    }

    function addTextFrame(pg, x, y, w, h, content, styleName, frameLabel) {
        var frame = pg.textFrames.add();
        frame.geometricBounds = [y, x, y + h, x + w];
        frame.contents = content;
        frame.label = frameLabel || styleName || "";
        frame.textFramePreferences.autoSizingType = AutoSizingTypeEnum.HEIGHT_ONLY;

        var style = getStyle(styleName);
        if (style) {
            frame.paragraphs.everyItem().appliedParagraphStyle = style;
        }

        return frame;
    }

    function addRect(pg, x, y, w, h, colorName, frameLabel) {
        var rect = pg.rectangles.add();
        rect.geometricBounds = [y, x, y + h, x + w];
        rect.label = frameLabel || "";
        rect.strokeWeight = 0;
        rect.strokeColor = "None";

        var c = getColor(colorName);
        if (c) {
            rect.fillColor = c;
        }

        return rect;
    }

    // --------------------------------------------------------
    // VERIFY REQUIRED STYLES EXIST
    // --------------------------------------------------------

    var requiredStyles = [
        "Section Label", "Article Headline Alt", "Article Deck",
        "Body", "Body - First Paragraph", "Callout Box Text", "Callout Label",
        "Spec Table Header", "Spec Table Cell", "Spec Table Label",
        "Brad Quote", "Brad Quote Attribution", "Caption"
    ];

    var missingStyles = [];
    for (var s = 0; s < requiredStyles.length; s++) {
        if (!getStyle(requiredStyles[s])) {
            missingStyles.push(requiredStyles[s]);
        }
    }

    if (missingStyles.length > 0) {
        alert("Missing paragraph styles:\n\n" + missingStyles.join("\n") +
              "\n\nPlease create these styles first, then run the script again.");
        doc.viewPreferences.horizontalMeasurementUnits = oldHUnits;
        doc.viewPreferences.verticalMeasurementUnits = oldVUnits;
        return;
    }

    // --------------------------------------------------------
    // CONTENT
    // --------------------------------------------------------

    var HEADLINE = "COMPARABLE LISTINGS";  // PLACEHOLDER — change as needed
    var SECTION_LABEL = "THE UPGRADE";
    var DECK = "Two Floor Plans. One Winner. Not the One You\u2019d Expect.";

    var EDITORIAL_BODY = "ELEVATE\u2019s editorial team put both floor plans through a rigorous side-by-side evaluation. We looked at square footage, natural light, climate control, storage, noise levels, amenities, dress code, scheduling flexibility, and 14 other categories we\u2019re not at liberty to disclose. We are prepared to make our recommendation.";

    var SNIPPET_NOTE = "Showing 3 of 23 evaluated categories. The results were consistent.";

    // Specs: [Category, Cell, Cubicle, Elevate's Take]
    var SPECS = [
        [
            "LAYOUT",
            "Private studio. Boundary walls. Door that locks.",
            "Partial walls. No door. Management calls it open concept.",
            "Proven to boost visibility, accountability, and the number of times someone asks if you\u2019re busy while you\u2019re clearly busy"
        ],
        [
            "DRESS CODE",
            "Issued daily \u2014 zero decisions, zero effort, matching every time",
            "Business casual, defined somewhere in a handbook nobody can find, enforced selectively by someone who violates it",
            "The freedom to choose your own outfit every morning is a privilege the cell simply cannot offer. We\u2019re told this matters"
        ],
        [
            "HOURS",
            "24/7 \u2014 all-inclusive, no commute, you\u2019re already there",
            "8 to 5 (suggested), 7 to 6 (observed), available-by-email until you fall asleep (expected)",
            "The cubicle offers something the cell never could: the theoretical possibility of leaving"
        ]
    ];

    var VERDICT_LABEL = "ELEVATE\u2019S PICK: THE CUBICLE";
    var VERDICT_BODY = "The specs are close. Closer than we expected, honestly. The cell offers more square footage, a window, enforced quiet hours, and a dress code that eliminates decision fatigue entirely. On paper, it\u2019s competitive.\n\nBut real estate has never been about specs. It\u2019s about location. And location is about one thing: the commute.\n\nThe cell has no commute. You\u2019re already there. Always. The cubicle requires forty-seven minutes of bumper-to-bumper traffic on a highway you\u2019ve memorized down to the pothole. And those forty-seven minutes? They\u2019re yours. Nobody can schedule a meeting during your commute. Nobody can forward you a chain with fourteen recipients and no clear ask. No one is going to appear at the opening of your car and ask if you \u201Chave a sec.\u201D You are between two places where people tell you what to do, and for forty-seven minutes, no one is telling you anything.\n\nThe cell resident doesn\u2019t get that. The cell resident is always at work and always at home. There is no in-between. There is no drive where you sit in silence and remember what your life was like before all of this.\n\nLocation. It always comes down to location.";

    var BRAD_QUOTE_TEXT = "\u201CPeople told me a closet wasn\u2019t an office. I said, \u2018Not with that attitude.\u2019\u201D";
    var BRAD_ATTR = "\u2014 BRAD STERLING, Founder & Spatial Visionary, Elevate Co.";

    var DYK_LABEL = "DID YOU KNOW?";
    var DYK_BODY = "The average new hire fills out 54 pages of paperwork on their first day. The average inmate fills out 12. We\u2019re not saying anything. We\u2019re just sharing data.";

    var KICKER = "A cubicle is 6\u00D78. A cell is 6\u00D79. We like to think of it as an upgrade.";

    // --------------------------------------------------------
    // LAYOUT CONSTANTS
    // --------------------------------------------------------

    var MARGIN_TOP = 0.625;
    var MARGIN_BOTTOM = 0.75;
    var MARGIN_OUTSIDE = 0.5;
    var MARGIN_INSIDE = 0.75;
    var PAGE_W = 8.5;
    var PAGE_H = 11;

    // Page 14 (image page) — left page in a spread, so inside=right, outside=left
    var IMG_LEFT = MARGIN_OUTSIDE;
    var IMG_W = PAGE_W - MARGIN_OUTSIDE - MARGIN_INSIDE;

    // Page 15 (text page) — right page in a spread, so inside=left, outside=right
    var TXT_LEFT = MARGIN_INSIDE;
    var TXT_W = PAGE_W - MARGIN_INSIDE - MARGIN_OUTSIDE;

    // --------------------------------------------------------
    // PAGE 14 — IMAGE PAGE (section label, headline, deck)
    // --------------------------------------------------------
    // Positioned in the lower third of the page for overlay on image.
    // User will add dark overlay and switch text to white.

    var imgY = PAGE_H - MARGIN_BOTTOM - 2.5; // start ~2.5" from bottom

    // 1. Section Label
    var slFrame = addTextFrame(imagePage, IMG_LEFT + 0.5, imgY, IMG_W - 1.0, 0.3,
        SECTION_LABEL, "Section Label", "Section-Label");
    imgY += 0.35;

    // 2. Headline
    var hlFrame = addTextFrame(imagePage, IMG_LEFT + 0.5, imgY, IMG_W - 1.0, 0.8,
        HEADLINE, "Article Headline Alt", "Headline");
    imgY += 0.9;

    // 3. Deck
    var dkFrame = addTextFrame(imagePage, IMG_LEFT + 0.5, imgY, IMG_W - 1.0, 0.5,
        DECK, "Article Deck", "Deck");

    // --------------------------------------------------------
    // PAGE 15 — TEXT PAGE (everything else, starting at top)
    // --------------------------------------------------------

    var yPos = MARGIN_TOP;

    // 4. Editorial Body — starts right at top margin now
    addTextFrame(textPage, TXT_LEFT, yPos, TXT_W, 1.0,
        EDITORIAL_BODY, "Body - First Paragraph", "Editorial-Body");
    yPos += 1.15;

    // 5. Snippet Note
    addTextFrame(textPage, TXT_LEFT, yPos, TXT_W, 0.35,
        SNIPPET_NOTE, "Caption", "Snippet-Note");
    yPos += 0.5;

    // --------------------------------------------------------
    // 6. SPECS TABLE (4 columns as individual frames in a grid)
    // --------------------------------------------------------

    var COL_WIDTHS = [0.9, 1.7, 1.9, 2.75];
    var totalCW = 0;
    for (var cw = 0; cw < COL_WIDTHS.length; cw++) totalCW += COL_WIDTHS[cw];
    var scale = TXT_W / totalCW;
    for (var cw = 0; cw < COL_WIDTHS.length; cw++) COL_WIDTHS[cw] *= scale;

    var HEADER_H = 0.35;
    var ROW_H = 0.65;

    // Header row
    var headers = ["", "THE CELL (6\u00D79)", "THE CUBICLE (6\u00D78)", "ELEVATE\u2019S TAKE"];
    var colX = TXT_LEFT;
    for (var h = 0; h < headers.length; h++) {
        addRect(textPage, colX, yPos, COL_WIDTHS[h], HEADER_H, "Elevate Black", "Table-Header-BG");

        var hf = addTextFrame(textPage, colX, yPos, COL_WIDTHS[h], HEADER_H,
            headers[h], "Spec Table Header", "Table-Header-Text");
        hf.textFramePreferences.insetSpacing = [0.055, 0.083, 0.055, 0.083];
        hf.textFramePreferences.autoSizingType = AutoSizingTypeEnum.OFF;

        colX += COL_WIDTHS[h];
    }
    yPos += HEADER_H;

    // Data rows
    var colStyles = ["Spec Table Label", "Spec Table Cell", "Spec Table Cell", "Callout Box Text"];

    for (var r = 0; r < SPECS.length; r++) {
        colX = TXT_LEFT;
        var isAlt = (r % 2 === 0);

        for (var col = 0; col < 4; col++) {
            if (isAlt) {
                addRect(textPage, colX, yPos, COL_WIDTHS[col], ROW_H, "Warm Gray 15%", "Table-Row-BG");
            }

            var cf = addTextFrame(textPage, colX, yPos, COL_WIDTHS[col], ROW_H,
                SPECS[r][col], colStyles[col], "Table-Data-R" + r + "C" + col);
            cf.textFramePreferences.insetSpacing = [0.04, 0.083, 0.04, 0.083];

            colX += COL_WIDTHS[col];
        }

        yPos += ROW_H + 0.02;
    }
    yPos += 0.25;

    // --------------------------------------------------------
    // 7. VERDICT CALLOUT
    // --------------------------------------------------------

    addRect(textPage, TXT_LEFT, yPos, TXT_W, 3.2, "Warm Gray 15%", "Verdict-BG");

    addTextFrame(textPage, TXT_LEFT + 0.2, yPos + 0.15, TXT_W - 0.4, 0.35,
        VERDICT_LABEL, "Callout Label", "Verdict-Label");

    addRect(textPage, TXT_LEFT + 0.2, yPos + 0.5, 2, 0.02, "Elevate Gold", "Verdict-Rule");

    addTextFrame(textPage, TXT_LEFT + 0.2, yPos + 0.6, TXT_W - 0.4, 2.5,
        VERDICT_BODY, "Body", "Verdict-Body");

    yPos += 3.4;

    // --------------------------------------------------------
    // 8. BRAD PULL QUOTE
    // --------------------------------------------------------

    addRect(textPage, TXT_LEFT + 0.2, yPos, 0.04, 0.7, "Elevate Gold", "Brad-Border");

    addTextFrame(textPage, TXT_LEFT + 0.45, yPos, TXT_W - 0.65, 0.5,
        BRAD_QUOTE_TEXT, "Brad Quote", "Brad-Quote-Text");
    yPos += 0.55;

    addTextFrame(textPage, TXT_LEFT + 0.45, yPos, TXT_W - 0.65, 0.25,
        BRAD_ATTR, "Brad Quote Attribution", "Brad-Attribution");
    yPos += 0.45;

    // --------------------------------------------------------
    // 9. DID YOU KNOW?
    // --------------------------------------------------------

    var halfW = TXT_W * 0.5;

    addRect(textPage, TXT_LEFT, yPos, halfW, 0.9, "Warm Gray 15%", "DYK-BG");

    addTextFrame(textPage, TXT_LEFT + 0.125, yPos + 0.08, halfW - 0.25, 0.2,
        DYK_LABEL, "Callout Label", "DYK-Label");

    addTextFrame(textPage, TXT_LEFT + 0.125, yPos + 0.3, halfW - 0.25, 0.55,
        DYK_BODY, "Callout Box Text", "DYK-Body");

    // --------------------------------------------------------
    // 10. KICKER LINE
    // --------------------------------------------------------

    addTextFrame(textPage, TXT_LEFT + halfW + 0.2, yPos + 0.25, halfW - 0.2, 0.4,
        KICKER, "Caption", "Kicker");

    // --------------------------------------------------------
    // CLEANUP
    // --------------------------------------------------------

    doc.viewPreferences.horizontalMeasurementUnits = oldHUnits;
    doc.viewPreferences.verticalMeasurementUnits = oldVUnits;

    alert("Done! Spread placed across pages 14 & 15.\n\n" +
          "PAGE 14 (image page):\n" +
          "\u2022 Section Label\n" +
          "\u2022 Headline (PLACEHOLDER \u2014 change as needed)\n" +
          "\u2022 Deck\n\n" +
          "PAGE 15 (text page):\n" +
          "\u2022 Editorial Body\n" +
          "\u2022 Snippet Note\n" +
          "\u2022 Specs Table: 4 headers + 12 data cells\n" +
          "\u2022 Verdict callout\n" +
          "\u2022 Brad Quote + Attribution\n" +
          "\u2022 DID YOU KNOW\n" +
          "\u2022 Kicker\n\n" +
          "All frames are labeled. No new styles, colors, or fonts were created.\n" +
          "Page 14 text will need white color override after dark overlay is added.");

})();
