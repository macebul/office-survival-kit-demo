// ELEVATE Magazine — Page 7: The Collectors Layout
// Run this in InDesign via Window > Utilities > Scripts
//
// Creates the collectors page layout on a STAGING PAGE (page 10 / index 9).
// Move elements to page 7 after creation.
//
// Layout (top to bottom):
//   1. Section header: "THE COLLECTORS"
//   2. Deck line: "Corporate America's Fastest-Growing Underground Hobby"
//   3. Opening paragraph (intro to badge collecting)
//   4. Grading rubric table (5 criteria + composite)
//   5. Annotation below table ("A perfect 5.0 has never been recorded...")
//   6. Newspaper clipping — "CREDENTIAL QUARTERLY" trade story
//   7. Pull quote — Brad Sterling
//   8. Teaser line — "Full Collector's Guide and Grading Standards in Issue 2."

#target indesign

(function() {
    var doc = app.activeDocument;

    // Save original units and switch to inches
    var origH = doc.viewPreferences.horizontalMeasurementUnits;
    var origV = doc.viewPreferences.verticalMeasurementUnits;
    doc.viewPreferences.horizontalMeasurementUnits = MeasurementUnits.INCHES;
    doc.viewPreferences.verticalMeasurementUnits = MeasurementUnits.INCHES;

    // Use a staging page — page 10 (index 9)
    var stagePage;
    try {
        stagePage = doc.pages[9];
    } catch(e) {
        while (doc.pages.length < 10) {
            doc.pages.add();
        }
        stagePage = doc.pages[9];
    }

    var created = [];

    // ============================================================
    // HELPERS
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

    function makeRect(page, bounds, fill) {
        var rect = page.rectangles.add();
        rect.geometricBounds = bounds;
        rect.fillColor = fill;
        rect.strokeWeight = 0;
        rect.strokeColor = doc.swatches.itemByName("None");
        return rect;
    }

    function makeRectWithStroke(page, bounds, fill, strokeColor, strokeWt) {
        var rect = page.rectangles.add();
        rect.geometricBounds = bounds;
        rect.fillColor = fill;
        rect.strokeColor = strokeColor;
        rect.strokeWeight = strokeWt;
        return rect;
    }

    function makeTF(page, bounds, text) {
        var tf = page.textFrames.add();
        tf.geometricBounds = bounds;
        tf.contents = text;
        return tf;
    }

    function applyStyle(tf, styleName) {
        try {
            for (var g = 0; g < doc.paragraphStyleGroups.length; g++) {
                var group = doc.paragraphStyleGroups[g];
                for (var s = 0; s < group.paragraphStyles.length; s++) {
                    if (group.paragraphStyles[s].name === styleName) {
                        tf.parentStory.texts[0].appliedParagraphStyle = group.paragraphStyles[s];
                        return true;
                    }
                }
            }
            var rootStyle = doc.paragraphStyles.itemByName(styleName);
            if (rootStyle.isValid) {
                tf.parentStory.texts[0].appliedParagraphStyle = rootStyle;
                return true;
            }
        } catch(e) {}
        return false;
    }

    function findStyle(styleName) {
        try {
            for (var g = 0; g < doc.paragraphStyleGroups.length; g++) {
                var group = doc.paragraphStyleGroups[g];
                for (var s = 0; s < group.paragraphStyles.length; s++) {
                    if (group.paragraphStyles[s].name === styleName) {
                        return group.paragraphStyles[s];
                    }
                }
            }
            var rootStyle = doc.paragraphStyles.itemByName(styleName);
            if (rootStyle.isValid) return rootStyle;
        } catch(e) {}
        return null;
    }

    // ============================================================
    // COLORS
    // ============================================================
    var gold = getOrCreateColor("Gold", 0, 15, 80, 10);
    var warmGray15 = getOrCreateColor("Warm Gray 15", 0, 2, 4, 12);
    var warmGray40 = getOrCreateColor("Warm Gray 40", 0, 3, 6, 30);
    var warmGray80 = getOrCreateColor("Warm Gray 80", 0, 5, 10, 65);
    var teal = getOrCreateColor("Institutional Teal", 80, 0, 30, 20);
    var charcoal = getOrCreateColor("Charcoal", 0, 0, 0, 85);
    var cream = getOrCreateColor("Cream", 3, 5, 10, 0);
    var matteBlack = getOrCreateColor("Matte Black", 0, 0, 0, 100);
    var navy = getOrCreateColor("Navy", 85, 65, 10, 40);
    var none = doc.swatches.itemByName("None");

    // ============================================================
    // PAGE DIMENSIONS (8.5 x 11 inches)
    // A-Editorial margins: top 0.75, bot 0.75, inside 0.875, outside 0.625
    // ============================================================
    var pageW = 8.5;
    var pageH = 11.0;
    var marginTop = 0.75;
    var marginBot = 0.75;
    var marginInside = 0.875;
    var marginOutside = 0.625;

    // Content area
    var contentLeft = marginOutside;
    var contentRight = pageW - marginInside;
    var contentW = contentRight - contentLeft;
    var contentTop = marginTop;
    var contentBottom = pageH - marginBot;

    // ============================================================
    // 1. SECTION HEADER — "THE COLLECTORS"
    // ============================================================
    var yPos = contentTop;

    var headerTF = makeTF(stagePage,
        [yPos, contentLeft, yPos + 0.3, contentRight],
        "THE COLLECTORS");
    headerTF.label = "COLL-HEADER";
    applyStyle(headerTF, "Section Label");
    try {
        headerTF.parentStory.texts[0].pointSize = 14;
        headerTF.parentStory.texts[0].justification = Justification.LEFT_ALIGN;
    } catch(e) {}
    created.push("Section header: THE COLLECTORS");

    // ============================================================
    // 2. DECK LINE
    // ============================================================
    yPos += 0.3;

    var deckTF = makeTF(stagePage,
        [yPos, contentLeft, yPos + 0.3, contentRight],
        "Corporate America\u2019s Fastest-Growing Underground Hobby");
    deckTF.label = "COLL-DECK";
    applyStyle(deckTF, "Article Deck");
    created.push("Deck line");

    // ============================================================
    // 3. OPENING PARAGRAPH
    // ============================================================
    yPos += 0.35;

    var introCopy = "What started as break room boredom is now a nationwide movement. Across an estimated 340 facilities, employees are trading, grading, and cataloguing current and former employee credentials. They show no signs of slowing down.";

    var introTF = makeTF(stagePage,
        [yPos, contentLeft, yPos + 0.7, contentRight],
        introCopy);
    introTF.label = "COLL-INTRO";
    applyStyle(introTF, "Body - First Paragraph");
    created.push("Opening paragraph");

    // ============================================================
    // 4. GRADING RUBRIC TABLE
    // ============================================================
    yPos += 0.8;

    // Table lives in a text frame
    var tableW = 3.4;
    var tableH = 2.2;
    var tableLeft = contentLeft;
    var tableRight = tableLeft + tableW;

    var tableTF = stagePage.textFrames.add();
    tableTF.geometricBounds = [yPos, tableLeft, yPos + tableH, tableRight];
    tableTF.label = "COLL-GRADING-TABLE";

    // Insert table: 7 rows (1 header + 5 data + 1 footer), 2 columns
    tableTF.contents = "";
    var theTable = tableTF.insertionPoints[0].tables.add({
        headerRowCount: 1,
        bodyRowCount: 5,
        footerRowCount: 1,
        columnCount: 2
    });

    // Column widths
    theTable.columns[0].width = "2.2 in";
    theTable.columns[1].width = "1.2 in";

    // Row heights
    for (var r = 0; r < theTable.rows.length; r++) {
        theTable.rows[r].height = "0.28 in";
        theTable.rows[r].autoGrow = false;
    }

    // Styles
    var sectionLabelStyle = findStyle("Section Label");
    var calloutBoxStyle = findStyle("Callout Box Text");
    var calloutLabelStyle = findStyle("Callout Label");

    // --- HEADER ROW ---
    theTable.rows[0].cells[0].contents = "CRITERION";
    theTable.rows[0].cells[1].contents = "SCORE";
    try {
        theTable.rows[0].fillColor = charcoal;
        for (var hc = 0; hc < 2; hc++) {
            var hText = theTable.rows[0].cells[hc].texts[0];
            if (sectionLabelStyle) hText.appliedParagraphStyle = sectionLabelStyle;
            hText.justification = Justification.CENTER_ALIGN;
            hText.pointSize = 8;
        }
    } catch(e) {}

    // --- DATA ROWS ---
    var criteria = ["Expression", "Chin Angle", "Shelf Appeal", "Intent", "\u201CEnergy\u201D"];
    var scores = ["2.4", "2.1", "2.6", "3.1", "1.8"];

    for (var di = 0; di < 5; di++) {
        var dataRow = theTable.rows[di + 1]; // +1 because row 0 is header
        dataRow.cells[0].contents = criteria[di];
        dataRow.cells[1].contents = scores[di];

        // Alternating row fills
        if (di % 2 === 1) {
            dataRow.fillColor = warmGray15;
        } else {
            dataRow.fillColor = none;
        }

        try {
            // Criterion name — Callout Box Text
            var cText = dataRow.cells[0].texts[0];
            if (calloutBoxStyle) cText.appliedParagraphStyle = calloutBoxStyle;
            cText.justification = Justification.LEFT_ALIGN;

            // Score — Callout Label, override to Teal
            var sText = dataRow.cells[1].texts[0];
            if (calloutLabelStyle) sText.appliedParagraphStyle = calloutLabelStyle;
            sText.fillColor = teal;
            sText.justification = Justification.CENTER_ALIGN;
            sText.pointSize = 12;
        } catch(e) {}
    }

    // --- FOOTER ROW (COMPOSITE) ---
    var footerRow = theTable.rows[6];
    footerRow.cells[0].contents = "COMPOSITE";
    footerRow.cells[1].contents = "2.4";
    try {
        footerRow.fillColor = charcoal;

        var fText0 = footerRow.cells[0].texts[0];
        if (sectionLabelStyle) fText0.appliedParagraphStyle = sectionLabelStyle;
        fText0.justification = Justification.CENTER_ALIGN;
        fText0.pointSize = 8;

        var fText1 = footerRow.cells[1].texts[0];
        if (calloutLabelStyle) fText1.appliedParagraphStyle = calloutLabelStyle;
        fText1.fillColor = teal;
        fText1.justification = Justification.CENTER_ALIGN;
        fText1.pointSize = 14;
    } catch(e) {}

    // Table border — gold outer, subtle inner
    try {
        // Outer border
        theTable.topBorderStrokeWeight = 1;
        theTable.topBorderStrokeColor = gold;
        theTable.bottomBorderStrokeWeight = 1;
        theTable.bottomBorderStrokeColor = gold;
        theTable.leftBorderStrokeWeight = 1;
        theTable.leftBorderStrokeColor = gold;
        theTable.rightBorderStrokeWeight = 1;
        theTable.rightBorderStrokeColor = gold;
    } catch(e) {}

    // Cell insets
    try {
        for (var ci = 0; ci < theTable.cells.length; ci++) {
            theTable.cells[ci].topInset = "0.04 in";
            theTable.cells[ci].bottomInset = "0.04 in";
            theTable.cells[ci].leftInset = "0.08 in";
            theTable.cells[ci].rightInset = "0.08 in";
        }
    } catch(e) {}

    created.push("Grading rubric table (5 criteria + composite)");

    // ============================================================
    // 5. ANNOTATION BELOW TABLE
    // ============================================================
    var annotY = yPos + tableH + 0.08;

    var annotTF = makeTF(stagePage,
        [annotY, tableLeft, annotY + 0.25, tableRight],
        "A perfect 5.0 has never been recorded. Most fall between 2.1 and 2.6.");
    annotTF.label = "COLL-TABLE-ANNOTATION";
    applyStyle(annotTF, "Infographic Annotation");
    created.push("Table annotation");

    // ============================================================
    // 6. NEWSPAPER CLIPPING — "CREDENTIAL QUARTERLY"
    // ============================================================
    // Positioned to the right of the table, slightly rotated
    var clipLeft = tableRight + 0.35;
    var clipRight = contentRight;
    var clipTop = yPos - 0.1;
    var clipW = clipRight - clipLeft;
    var clipH = 3.4;

    // Cream background rectangle (the "clipping")
    var clipBg = makeRectWithStroke(stagePage,
        [clipTop, clipLeft, clipTop + clipH, clipRight],
        cream, warmGray40, 0.5);
    clipBg.label = "COLL-CLIP-BG";
    // Rotate slightly
    try {
        clipBg.rotationAngle = -1.5;
    } catch(e) {}
    // Drop shadow
    try {
        clipBg.transparencySettings.dropShadowSettings.mode = ShadowMode.DROP;
        clipBg.transparencySettings.dropShadowSettings.angle = 135;
        clipBg.transparencySettings.dropShadowSettings.xOffset = "2pt";
        clipBg.transparencySettings.dropShadowSettings.yOffset = "2pt";
        clipBg.transparencySettings.dropShadowSettings.size = "4pt";
        clipBg.transparencySettings.dropShadowSettings.opacity = 18;
        clipBg.transparencySettings.dropShadowSettings.color = matteBlack;
    } catch(e) {}

    // Clipping content inset
    var cInset = 0.2;
    var cLeft = clipLeft + cInset;
    var cRight = clipRight - cInset;
    var cTop = clipTop + cInset;

    // Masthead
    var mastTF = makeTF(stagePage,
        [cTop, cLeft, cTop + 0.28, cRight],
        "CREDENTIAL QUARTERLY");
    mastTF.label = "COLL-CLIP-MASTHEAD";
    try {
        var mt = mastTF.parentStory.texts[0];
        mt.appliedFont = app.fonts.itemByName("Barlow Condensed");
        mt.fontStyle = "Black";
        mt.pointSize = 16;
        mt.leading = 18;
        mt.tracking = 60;
        mt.capitalization = Capitalization.ALL_CAPS;
        mt.fillColor = charcoal;
        mt.justification = Justification.CENTER_ALIGN;
    } catch(e) {}

    // Rule under masthead
    var mastRuleY = cTop + 0.3;
    var mastRule = makeRect(stagePage,
        [mastRuleY, cLeft, mastRuleY + 0.01, cRight],
        charcoal);
    mastRule.label = "COLL-CLIP-MAST-RULE";

    // Dateline
    var dateY = mastRuleY + 0.04;
    var dateTF = makeTF(stagePage,
        [dateY, cLeft, dateY + 0.15, cRight],
        "Vol. 12, No. 47 \u2014 Internal Circulation Only");
    dateTF.label = "COLL-CLIP-DATELINE";
    applyStyle(dateTF, "Photo Credit");
    try {
        dateTF.parentStory.texts[0].justification = Justification.CENTER_ALIGN;
    } catch(e) {}

    // Headline
    var headY = dateY + 0.18;
    var headTF = makeTF(stagePage,
        [headY, cLeft, headY + 0.55, cRight],
        "EMPLOYEE SURRENDERS ACTIVE CREDENTIAL IN UNPRECEDENTED TRADE");
    headTF.label = "COLL-CLIP-HEADLINE";
    try {
        var ht = headTF.parentStory.texts[0];
        ht.appliedFont = app.fonts.itemByName("Barlow Condensed");
        ht.fontStyle = "Bold";
        ht.pointSize = 14;
        ht.leading = 16;
        ht.tracking = 20;
        ht.capitalization = Capitalization.ALL_CAPS;
        ht.fillColor = charcoal;
        ht.justification = Justification.LEFT_ALIGN;
    } catch(e) {}

    // Body copy
    var bodyY = headY + 0.55;
    var bodyCopy = "An employee at an undisclosed facility recently surrendered his active credential in exchange for a 2003 pre-merger badge featuring the discontinued logo. When asked about the transaction, he cited \u201Cpersonal errands\u201D \u2014 specifically a stop at the bank, a visit to the jewelry store, and what he described as \u201Can extended trip.\u201D He was not sure when he\u2019d return. Both parties described the terms as \u201Cfair.\u201D The credential has not been reissued.";

    var bodyTF = makeTF(stagePage,
        [bodyY, cLeft, bodyY + 1.3, cRight],
        bodyCopy);
    bodyTF.label = "COLL-CLIP-BODY";
    applyStyle(bodyTF, "Callout Box Text");
    try {
        bodyTF.parentStory.texts[0].justification = Justification.FULLY_JUSTIFIED;
        bodyTF.parentStory.texts[0].leftIndent = 0;
        bodyTF.parentStory.texts[0].rightIndent = 0;
    } catch(e) {}

    // Staff attribution
    var staffY = bodyY + 1.3;
    var staffTF = makeTF(stagePage,
        [staffY, cLeft, staffY + 0.15, cRight],
        "\u2014 Staff Report");
    staffTF.label = "COLL-CLIP-STAFF";
    applyStyle(staffTF, "Photo Credit");
    try {
        staffTF.parentStory.texts[0].justification = Justification.RIGHT_ALIGN;
    } catch(e) {}

    // Rotate all clipping elements to match background
    try {
        mastTF.rotationAngle = -1.5;
        mastRule.rotationAngle = -1.5;
        dateTF.rotationAngle = -1.5;
        headTF.rotationAngle = -1.5;
        bodyTF.rotationAngle = -1.5;
        staffTF.rotationAngle = -1.5;
    } catch(e) {}

    created.push("Newspaper clipping: CREDENTIAL QUARTERLY");

    // ============================================================
    // 7. PULL QUOTE — BRAD STERLING
    // ============================================================
    var quoteY = annotY + 0.35;

    // Navy background block for the quote
    var quoteBgH = 1.3;
    var quoteBg = makeRect(stagePage,
        [quoteY, contentLeft, quoteY + quoteBgH, contentRight],
        navy);
    quoteBg.label = "COLL-QUOTE-BG";

    // Quote text
    var quoteInset = 0.3;
    var quoteTF = makeTF(stagePage,
        [quoteY + 0.2, contentLeft + quoteInset, quoteY + quoteBgH - 0.35, contentRight - quoteInset],
        "\u201CI\u2019ve had the same badge photo since 2019. Not because I haven\u2019t aged. Because I peaked.\u201D");
    quoteTF.label = "COLL-QUOTE-TEXT";
    applyStyle(quoteTF, "Pull Quote");
    try {
        quoteTF.parentStory.texts[0].fillColor = cream;
        quoteTF.parentStory.texts[0].pointSize = 20;
        quoteTF.parentStory.texts[0].leading = 26;
    } catch(e) {}

    // Attribution
    var attrTF = makeTF(stagePage,
        [quoteY + quoteBgH - 0.35, contentLeft + quoteInset, quoteY + quoteBgH - 0.15, contentRight - quoteInset],
        "BRAD STERLING");
    attrTF.label = "COLL-QUOTE-ATTR";
    applyStyle(attrTF, "Pull Quote Attribution");
    created.push("Pull quote: Brad Sterling");

    // ============================================================
    // 8. TEASER LINE
    // ============================================================
    var teaserY = quoteY + quoteBgH + 0.2;

    var teaserTF = makeTF(stagePage,
        [teaserY, contentLeft, teaserY + 0.2, contentRight],
        "Full Collector\u2019s Guide and Grading Standards in Issue 2.");
    teaserTF.label = "COLL-TEASER";
    applyStyle(teaserTF, "Infographic Annotation");
    try {
        teaserTF.parentStory.texts[0].justification = Justification.CENTER_ALIGN;
        teaserTF.parentStory.texts[0].fontStyle = "Italic";
    } catch(e) {}
    created.push("Teaser line: Issue 2 reference");

    // ============================================================
    // RESTORE UNITS
    // ============================================================
    doc.viewPreferences.horizontalMeasurementUnits = origH;
    doc.viewPreferences.verticalMeasurementUnits = origV;

    // ============================================================
    // RESULTS
    // ============================================================
    var msg = "PAGE 7 COLLECTORS LAYOUT CREATED ON PAGE 10\n\n";
    msg += "Created " + created.length + " element groups:\n\n";
    for (var r = 0; r < created.length; r++) {
        msg += (r + 1) + ". " + created[r] + "\n";
    }
    msg += "\n\u2022 All elements are labeled with COLL- prefix.\n";
    msg += "\u2022 The newspaper clipping is rotated 1.5\u00B0 with a drop shadow.\n";
    msg += "\u2022 Select all, Group (Ctrl+G), move to page 7.\n";
    msg += "\u2022 You may need to adjust spacing between elements after moving.\n";
    msg += "\n\u2022 The clipping text frames are rotated to match the background \u2014\n";
    msg += "  if alignment is off, select all clipping elements and group them,\n";
    msg += "  then rotate the group as one unit.\n";

    alert(msg);

})();
