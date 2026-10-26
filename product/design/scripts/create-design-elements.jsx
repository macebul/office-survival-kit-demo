// ELEVATE Magazine — Design Elements for Pages 4-5
// Run this in InDesign via Window > Utilities > Scripts
//
// Creates all design elements on PAGE 6 (index 5) as a staging area.
// Move them to their final positions on pages 4-5 manually.
//
// Elements created:
//   1. Semi-transparent dark bar for hero caption (page 4)
//   2. Semi-transparent dark bar for badge caption (page 4)
//   3. Navy color block for Brad quote area (page 4 bottom-right)
//   4. Brad quote text + attribution on the navy block
//   5. Color block for page 5 deck/sub-headline area
//   6. Gold horizontal rule #1
//   7. Gold horizontal rule #2
//   8. Gold horizontal rule #3

#target indesign

(function() {
    var doc = app.activeDocument;
    var created = [];

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

    // Helper: create a text frame
    function makeTF(page, bounds, text) {
        var tf = page.textFrames.add();
        tf.geometricBounds = bounds;
        tf.contents = text;
        return tf;
    }

    // ============================================================
    // COLORS
    // ============================================================
    var navyBlock = getOrCreateColor("Navy Block", 90, 70, 30, 60);
    var tealBlock = getOrCreateColor("Institutional Teal", 80, 0, 30, 20);
    var gold = getOrCreateColor("Gold", 0, 15, 80, 10);
    var cream = getOrCreateColor("Cream", 3, 5, 10, 0);
    var warmGray15 = getOrCreateColor("Warm Gray 15", 0, 2, 4, 12);
    var matteBlack = getOrCreateColor("Matte Black", 0, 0, 0, 100);

    // ============================================================
    // STAGING POSITIONS (stacked vertically on page 6)
    // ============================================================

    var yPos = 0.5;

    // ============================================================
    // 1. SEMI-TRANSPARENT DARK BAR — Hero Caption
    // ============================================================
    var heroBar = makeRect(stagePage, [yPos, 0.5, yPos + 0.35, 6.5], matteBlack);
    heroBar.transparencySettings.blendingSettings.opacity = 65;
    heroBar.label = "HERO-CAPTION-BAR";

    var heroCaptionTF = makeTF(stagePage,
        [yPos + 0.05, 0.6, yPos + 0.3, 6.4],
        "Onboarding intake, Day One. All personal items will be returned.");
    heroCaptionTF.label = "HERO-CAPTION-TEXT";
    try {
        var ht = heroCaptionTF.parentStory.texts[0];
        ht.fillColor = cream;
        ht.appliedFont = app.fonts.itemByName("IBM Plex Mono");
        ht.fontStyle = "Regular";
        ht.pointSize = 9;
        ht.leading = 12;
        ht.tracking = 10;
    } catch(e) {}

    created.push("Semi-transparent dark bar + text (hero caption)");
    yPos += 0.6;

    // ============================================================
    // 2. SEMI-TRANSPARENT DARK BAR — Badge Caption
    // ============================================================
    var badgeBar = makeRect(stagePage, [yPos, 0.5, yPos + 0.35, 5.0], matteBlack);
    badgeBar.transparencySettings.blendingSettings.opacity = 65;
    badgeBar.label = "BADGE-CAPTION-BAR";

    var badgeCaptionTF = makeTF(stagePage,
        [yPos + 0.05, 0.6, yPos + 0.3, 4.9],
        "Graded 3.8. Deduction for \u201Cenergy.\u201D");
    badgeCaptionTF.label = "BADGE-CAPTION-TEXT";
    try {
        var bt = badgeCaptionTF.parentStory.texts[0];
        bt.fillColor = cream;
        bt.appliedFont = app.fonts.itemByName("IBM Plex Mono");
        bt.fontStyle = "Regular";
        bt.pointSize = 9;
        bt.leading = 12;
        bt.tracking = 10;
    } catch(e) {}

    created.push("Semi-transparent dark bar + text (badge caption)");
    yPos += 0.6;

    // ============================================================
    // 3. NAVY COLOR BLOCK — Brad Quote (page 4 bottom-right)
    // ============================================================
    var quoteBlockRect = makeRect(stagePage, [yPos, 0.5, yPos + 2.5, 5.0], navyBlock);
    quoteBlockRect.label = "BRAD-QUOTE-BLOCK";

    // Gold left-rule border
    var goldRuleRect = makeRect(stagePage, [yPos + 0.2, 0.7, yPos + 2.3, 0.74], gold);
    goldRuleRect.label = "BRAD-QUOTE-GOLD-RULE";

    // Quote text
    var quoteTF = makeTF(stagePage,
        [yPos + 0.3, 0.95, yPos + 1.9, 4.8],
        "\u201CI update my badge photo quarterly. Not because I\u2019ve changed. Because the camera technology has finally caught up.\u201D");
    quoteTF.label = "BRAD-QUOTE-TEXT";
    try {
        var qt = quoteTF.parentStory.texts[0];
        qt.fillColor = cream;
        qt.appliedFont = app.fonts.itemByName("Freight Text Pro");
        qt.fontStyle = "Book Italic";
        qt.pointSize = 16;
        qt.leading = 22;
        qt.tracking = 5;
    } catch(e) {}

    // Quote attribution
    var quoteAttrTF = makeTF(stagePage,
        [yPos + 1.95, 0.95, yPos + 2.25, 4.8],
        "BRAD STERLING");
    quoteAttrTF.label = "BRAD-QUOTE-ATTRIBUTION";
    try {
        var qa = quoteAttrTF.parentStory.texts[0];
        qa.fillColor = gold;
        qa.appliedFont = app.fonts.itemByName("Barlow Condensed");
        qa.fontStyle = "SemiBold";
        qa.pointSize = 10;
        qa.leading = 13;
        qa.tracking = 120;
        qa.capitalization = Capitalization.ALL_CAPS;
    } catch(e) {}

    created.push("Navy color block + gold rule + quote text + attribution (Brad quote)");
    yPos += 2.8;

    // ============================================================
    // 4. COLOR BLOCK — Page 5 deck/sub-headline background
    // ============================================================
    var deckBlock = makeRect(stagePage, [yPos, 0.5, yPos + 0.9, 7.5], warmGray15);
    deckBlock.label = "DECK-BACKGROUND-BLOCK";

    created.push("Warm gray block (deck/sub-headline background for page 5)");
    yPos += 1.2;

    // ============================================================
    // 5. GOLD HORIZONTAL RULE #1
    // ============================================================
    var goldLine1 = makeRect(stagePage, [yPos, 0.5, yPos + 0.02, 7.5], gold);
    goldLine1.label = "GOLD-RULE-1";

    created.push("Gold horizontal rule #1 (below byline)");
    yPos += 0.3;

    // ============================================================
    // 6. GOLD HORIZONTAL RULE #2
    // ============================================================
    var goldLine2 = makeRect(stagePage, [yPos, 0.5, yPos + 0.02, 7.5], gold);
    goldLine2.label = "GOLD-RULE-2";

    created.push("Gold horizontal rule #2 (section divider)");
    yPos += 0.3;

    // ============================================================
    // 7. GOLD HORIZONTAL RULE #3
    // ============================================================
    var goldLine3 = makeRect(stagePage, [yPos, 0.5, yPos + 0.02, 7.5], gold);
    goldLine3.label = "GOLD-RULE-3";

    created.push("Gold horizontal rule #3 (spare divider)");
    yPos += 0.3;

    // ============================================================
    // 8. TEAL ACCENT BAR
    // ============================================================
    var tealAccent = makeRect(stagePage, [yPos, 0.5, yPos + 0.06, 3.0], tealBlock);
    tealAccent.label = "TEAL-ACCENT-BAR";

    created.push("Teal accent bar (optional design element)");

    // ============================================================
    // RESULTS
    // ============================================================

    var msg = "DESIGN ELEMENTS CREATED ON PAGE 6\n\n";
    msg += "Created " + created.length + " elements:\n\n";
    for (var i = 0; i < created.length; i++) {
        msg += (i + 1) + ". " + created[i] + "\n";
    }
    msg += "\nAll elements are labeled. Use the Layers panel or";
    msg += "\nEdit > Find/Change to locate them by label.";
    msg += "\n\nMove them to pages 4-5 and position as needed.";
    msg += "\n\nTIP: Select a bar + its text, then Group (Ctrl+G)";
    msg += "\nbefore moving so they stay aligned.";

    alert(msg);

})();
