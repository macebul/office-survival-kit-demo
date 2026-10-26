// ELEVATE Magazine — Pull Quote Element for Page 5
// Run this in InDesign via Window > Utilities > Scripts
//
// Creates a pull quote element on PAGE 6 (index 5) as a staging area.
// Move it to page 5 between the two body paragraphs.
//
// Elements created:
//   1. Gold rule (top)
//   2. Warm gray background block
//   3. Pull quote text (using Pull Quote paragraph style)
//   4. Gold rule (bottom)

#target indesign

(function() {
    var doc = app.activeDocument;

    // Use page 6 (index 5) as staging area
    var stagePage;
    try {
        stagePage = doc.pages[5];
    } catch(e) {
        alert("Page 6 not found. Make sure the document has at least 6 pages.");
        return;
    }

    // ============================================================
    // HELPER: Get or create a color swatch
    // ============================================================
    function getOrCreateColor(name, c, m, y, k) {
        for (var i = 0; i < doc.colors.length; i++) {
            if (doc.colors[i].name === name) {
                return doc.colors[i];
            }
        }
        var color = doc.colors.add();
        color.name = name;
        color.model = ColorModel.PROCESS;
        color.space = ColorSpace.CMYK;
        color.colorValue = [c, m, y, k];
        return color;
    }

    // Helper: create a rectangle with no stroke
    function makeRect(page, bounds, fill) {
        var rect = page.rectangles.add();
        rect.geometricBounds = bounds;
        rect.fillColor = fill;
        rect.strokeWeight = 0;
        rect.strokeColor = doc.swatches.itemByName("None");
        return rect;
    }

    // ============================================================
    // COLORS
    // ============================================================
    var gold = getOrCreateColor("Gold", 0, 15, 80, 10);
    var warmGray15 = getOrCreateColor("Warm Gray 15", 0, 2, 4, 12);

    // ============================================================
    // PULL QUOTE ELEMENT
    // ============================================================
    // Positioned in the upper half of page 6 for easy access.
    // Width matches columns 1-3 (~3.75 inches from left margin).

    var leftEdge = 0.75;       // inside margin
    var rightEdge = 4.25;      // ~3 columns wide
    var topStart = 1.0;        // starting Y position on staging page
    var ruleWeight = 0.02;     // gold rule thickness (just under 1.5pt)
    var blockPadTop = 0.15;    // padding above text inside block
    var blockPadBot = 0.15;    // padding below text inside block
    var textHeight = 0.9;      // height for quote text frame
    var totalHeight = blockPadTop + textHeight + blockPadBot;

    // 1. GOLD RULE — TOP
    var topRule = makeRect(stagePage,
        [topStart, leftEdge, topStart + ruleWeight, rightEdge],
        gold);
    topRule.label = "PULL-QUOTE-RULE-TOP";

    // 2. WARM GRAY BACKGROUND BLOCK
    var blockTop = topStart + ruleWeight;
    var bgBlock = makeRect(stagePage,
        [blockTop, leftEdge, blockTop + totalHeight, rightEdge],
        warmGray15);
    bgBlock.label = "PULL-QUOTE-BG-BLOCK";

    // 3. PULL QUOTE TEXT
    var textTop = blockTop + blockPadTop;
    var tf = stagePage.textFrames.add();
    tf.geometricBounds = [textTop, leftEdge + 0.2, textTop + textHeight, rightEdge - 0.2];
    tf.contents = "\u201CMost facilities rush the process. The best ones don\u2019t.\u201D";
    tf.label = "PULL-QUOTE-TEXT";

    // Apply the Pull Quote paragraph style if it exists, otherwise style manually
    var pullQuoteStyle = null;
    try {
        pullQuoteStyle = doc.paragraphStyles.itemByName("Pull Quote");
        if (pullQuoteStyle.isValid) {
            tf.parentStory.texts[0].appliedParagraphStyle = pullQuoteStyle;
        } else {
            pullQuoteStyle = null;
        }
    } catch(e) {
        pullQuoteStyle = null;
    }

    // If no Pull Quote style found, try Brad Quote
    if (!pullQuoteStyle) {
        try {
            var bradQuoteStyle = doc.paragraphStyles.itemByName("Brad Quote");
            if (bradQuoteStyle.isValid) {
                tf.parentStory.texts[0].appliedParagraphStyle = bradQuoteStyle;
            }
        } catch(e) {
            // Manual fallback styling
            try {
                var txt = tf.parentStory.texts[0];
                txt.appliedFont = app.fonts.itemByName("Freight Text Pro");
                txt.fontStyle = "Book Italic";
                txt.pointSize = 18;
                txt.leading = 24;
                txt.tracking = 5;
                txt.justification = Justification.CENTER_ALIGN;
            } catch(e2) {}
        }
    }

    // 4. GOLD RULE — BOTTOM
    var bottomRuleTop = blockTop + totalHeight;
    var bottomRule = makeRect(stagePage,
        [bottomRuleTop, leftEdge, bottomRuleTop + ruleWeight, rightEdge],
        gold);
    bottomRule.label = "PULL-QUOTE-RULE-BOTTOM";

    // ============================================================
    // RESULTS
    // ============================================================
    var msg = "PULL QUOTE ELEMENT CREATED ON PAGE 6\n\n";
    msg += "Elements created:\n\n";
    msg += "1. Gold rule (top) — PULL-QUOTE-RULE-TOP\n";
    msg += "2. Warm gray background block — PULL-QUOTE-BG-BLOCK\n";
    msg += "3. Pull quote text frame — PULL-QUOTE-TEXT\n";
    msg += "4. Gold rule (bottom) — PULL-QUOTE-RULE-BOTTOM\n";
    msg += "\nAll elements are labeled and stacked vertically.\n";
    msg += "\nSelect all four elements, Group (Ctrl+G), then\n";
    msg += "move the group to page 5 between the two body paragraphs.\n";
    msg += "\nRemember to remove the quote line from the first\n";
    msg += "body paragraph since it now lives in the pull quote.";

    alert(msg);

})();
