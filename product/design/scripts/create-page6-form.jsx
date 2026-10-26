// ELEVATE Magazine — Page 6: Corporate Form Layout
// Run this in InDesign via Window > Utilities > Scripts
//
// Creates the full "corporate form" layout on a STAGING PAGE (page 8 / index 7).
// Move elements to page 6 after creation.
//
// Layout (top to bottom):
//   1. Full-page warm gray background with gold border
//   2. Form header: "STANDARD CREDENTIAL PHOTO PROTOCOL"
//   3. Subtitle: "As recommended by ELEVATE's Workplace Standards Division"
//   4. Thin hairline rule
//   5. Checklist items in two columns with hairline separators
//   6. Gold divider rule
//   7. Stat callout (orange text)
//   8. Gold divider rule
//   9. "BY THE NUMBERS" section header
//  10. Stats in 2x2 grid layout
//  11. Image placeholder for Gerald photo with caption
//  12. Form footer: "Form WSD-4817 Rev. 03/2026"

#target indesign

(function() {
    var doc = app.activeDocument;

    // Save original units and switch to inches
    var origH = doc.viewPreferences.horizontalMeasurementUnits;
    var origV = doc.viewPreferences.verticalMeasurementUnits;
    doc.viewPreferences.horizontalMeasurementUnits = MeasurementUnits.INCHES;
    doc.viewPreferences.verticalMeasurementUnits = MeasurementUnits.INCHES;

    // Use a staging page — add one if needed or use the last page
    var stagePage;
    var stagePageNum;
    try {
        // Try to use page index 7 (page 8)
        stagePage = doc.pages[7];
        stagePageNum = 8;
    } catch(e) {
        // Add pages until we have enough
        while (doc.pages.length < 8) {
            doc.pages.add();
        }
        stagePage = doc.pages[7];
        stagePageNum = 8;
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
            // Search in all style groups
            for (var g = 0; g < doc.paragraphStyleGroups.length; g++) {
                var group = doc.paragraphStyleGroups[g];
                for (var s = 0; s < group.paragraphStyles.length; s++) {
                    if (group.paragraphStyles[s].name === styleName) {
                        tf.parentStory.texts[0].appliedParagraphStyle = group.paragraphStyles[s];
                        return true;
                    }
                }
            }
            // Try root level
            var rootStyle = doc.paragraphStyles.itemByName(styleName);
            if (rootStyle.isValid) {
                tf.parentStory.texts[0].appliedParagraphStyle = rootStyle;
                return true;
            }
        } catch(e) {}
        return false;
    }

    // ============================================================
    // COLORS
    // ============================================================
    var gold = getOrCreateColor("Gold", 0, 15, 80, 10);
    var warmGray15 = getOrCreateColor("Warm Gray 15", 0, 2, 4, 12);
    var warmGray40 = getOrCreateColor("Warm Gray 40", 0, 3, 6, 30);
    var warmGray80 = getOrCreateColor("Warm Gray 80", 0, 5, 10, 65);
    var tealBlock = getOrCreateColor("Institutional Teal", 80, 0, 30, 20);
    var signalOrange = getOrCreateColor("Signal Orange", 0, 60, 100, 0);
    var matteBlack = getOrCreateColor("Matte Black", 0, 0, 0, 100);
    var charcoal = getOrCreateColor("Charcoal", 0, 0, 0, 85);
    var cream = getOrCreateColor("Cream", 3, 5, 10, 0);
    var none = doc.swatches.itemByName("None");

    // ============================================================
    // PAGE DIMENSIONS (8.5 x 11 inches)
    // A-Editorial margins: top 0.75, bot 0.75, inside 0.875, outside 0.625
    // ============================================================
    var pageW = 8.5;
    var pageH = 11.0;

    // Form sits within margins with slight inset
    var formLeft = 0.625;      // outside margin (right page) or adjust
    var formRight = 7.875;     // pageW - inside margin
    var formTop = 0.5;         // slightly above margin for full-page feel
    var formBottom = 10.5;     // slightly below bottom margin
    var formW = formRight - formLeft;

    // Content area within the form (inset from border)
    var contentLeft = formLeft + 0.3;
    var contentRight = formRight - 0.3;
    var contentW = contentRight - contentLeft;
    var midX = contentLeft + (contentW / 2) + 0.05; // center split for two columns

    // ============================================================
    // 1. FULL-PAGE WARM GRAY BACKGROUND WITH GOLD BORDER
    // ============================================================
    var bgRect = makeRectWithStroke(stagePage,
        [formTop, formLeft, formBottom, formRight],
        warmGray15, gold, 1.5);
    bgRect.label = "FORM-BG";
    created.push("Warm gray background with gold border");

    // ============================================================
    // 2. FORM HEADER
    // ============================================================
    var yPos = formTop + 0.35;

    var headerTF = makeTF(stagePage,
        [yPos, contentLeft, yPos + 0.35, contentRight],
        "STANDARD CREDENTIAL PHOTO PROTOCOL");
    headerTF.label = "FORM-HEADER";
    if (!applyStyle(headerTF, "Section Label")) {
        try {
            var ht = headerTF.parentStory.texts[0];
            ht.appliedFont = app.fonts.itemByName("Barlow Condensed");
            ht.fontStyle = "Bold";
            ht.pointSize = 14;
            ht.leading = 16;
            ht.tracking = 250;
            ht.capitalization = Capitalization.ALL_CAPS;
            ht.fillColor = gold;
            ht.justification = Justification.CENTER_ALIGN;
        } catch(e) {}
    }
    try {
        headerTF.parentStory.texts[0].justification = Justification.CENTER_ALIGN;
        headerTF.parentStory.texts[0].pointSize = 14;
    } catch(e) {}
    created.push("Form header: STANDARD CREDENTIAL PHOTO PROTOCOL");

    // ============================================================
    // 3. SUBTITLE
    // ============================================================
    yPos += 0.35;
    var subtitleTF = makeTF(stagePage,
        [yPos, contentLeft, yPos + 0.22, contentRight],
        "As recommended by ELEVATE\u2019s Workplace Standards Division");
    subtitleTF.label = "FORM-SUBTITLE";
    try {
        var st = subtitleTF.parentStory.texts[0];
        st.appliedFont = app.fonts.itemByName("IBM Plex Mono");
        st.fontStyle = "Regular";
        st.pointSize = 8;
        st.leading = 10;
        st.tracking = 20;
        st.fillColor = warmGray80;
        st.justification = Justification.CENTER_ALIGN;
    } catch(e) {}
    created.push("Subtitle line");

    // ============================================================
    // 4. HAIRLINE RULE BELOW HEADER
    // ============================================================
    yPos += 0.28;
    var headerRule = makeRect(stagePage,
        [yPos, contentLeft, yPos + 0.01, contentRight],
        charcoal);
    headerRule.label = "FORM-HEADER-RULE";
    created.push("Hairline rule below header");

    // ============================================================
    // 5. CHECKLIST — TWO COLUMNS
    // ============================================================
    yPos += 0.15;

    var checkItems = [
        // Left column
        [
            "\u2610  Front-facing photograph \u2014 expression neutral but employable",
            "\u2610  Side profile photograph \u2014 for interdepartmental recognition",
            "\u2610  Name and employee ID on placard \u2014 for archival clarity"
        ],
        // Right column
        [
            "\u2610  Height markers visible \u2014 considered essential",
            "\u2610  Personal belongings inventoried and stored",
            "\u2610  Biometric fingerprint scan \u2014 for \u201Cgeneral purposes\u201D"
        ]
    ];

    var rowHeight = 0.32;
    var colGap = 0.2;
    var colWidth = (contentW - colGap) / 2;

    // Left column items
    for (var i = 0; i < checkItems[0].length; i++) {
        var itemY = yPos + (i * rowHeight);

        // Hairline separator above each item (except first)
        if (i > 0) {
            var sep = makeRect(stagePage,
                [itemY - 0.02, contentLeft, itemY - 0.01, contentLeft + colWidth],
                warmGray40);
            sep.label = "FORM-CHECK-SEP-L" + i;
        }

        var checkTF = makeTF(stagePage,
            [itemY, contentLeft, itemY + rowHeight - 0.04, contentLeft + colWidth],
            checkItems[0][i]);
        checkTF.label = "FORM-CHECK-L" + i;
        try {
            var ct = checkTF.parentStory.texts[0];
            ct.appliedFont = app.fonts.itemByName("Freight Text Pro");
            ct.fontStyle = "Book";
            ct.pointSize = 9.5;
            ct.leading = 12;
            ct.tracking = 5;
            ct.fillColor = charcoal;
        } catch(e) {}
    }

    // Right column items
    var rightColLeft = contentLeft + colWidth + colGap;
    for (var j = 0; j < checkItems[1].length; j++) {
        var itemY2 = yPos + (j * rowHeight);

        // Hairline separator
        if (j > 0) {
            var sep2 = makeRect(stagePage,
                [itemY2 - 0.02, rightColLeft, itemY2 - 0.01, contentRight],
                warmGray40);
            sep2.label = "FORM-CHECK-SEP-R" + j;
        }

        var checkTF2 = makeTF(stagePage,
            [itemY2, rightColLeft, itemY2 + rowHeight - 0.04, contentRight],
            checkItems[1][j]);
        checkTF2.label = "FORM-CHECK-R" + j;
        try {
            var ct2 = checkTF2.parentStory.texts[0];
            ct2.appliedFont = app.fonts.itemByName("Freight Text Pro");
            ct2.fontStyle = "Book";
            ct2.pointSize = 9.5;
            ct2.leading = 12;
            ct2.tracking = 5;
            ct2.fillColor = charcoal;
        } catch(e) {}
    }

    created.push("Checklist: 6 items in 2 columns with hairline separators");

    // ============================================================
    // 6. GOLD DIVIDER RULE (below checklist)
    // ============================================================
    yPos += (checkItems[0].length * rowHeight) + 0.1;
    var goldDiv1 = makeRect(stagePage,
        [yPos, contentLeft, yPos + 0.015, contentRight],
        gold);
    goldDiv1.label = "FORM-GOLD-RULE-1";
    created.push("Gold divider rule (below checklist)");

    // ============================================================
    // 7. STAT CALLOUT (orange text)
    // ============================================================
    yPos += 0.1;
    var statTF = makeTF(stagePage,
        [yPos, contentLeft + 0.1, yPos + 0.45, contentRight - 0.1],
        "FACILITIES THAT FOLLOW THIS PROTOCOL REPORT A 97% CREDENTIAL SATISFACTION RATE. FACILITIES THAT DON\u2019T FOLLOW THIS PROTOCOL WERE NOT INCLUDED IN THE STUDY.");
    statTF.label = "FORM-STAT-CALLOUT";
    try {
        var stt = statTF.parentStory.texts[0];
        stt.appliedFont = app.fonts.itemByName("Barlow Condensed");
        stt.fontStyle = "SemiBold";
        stt.pointSize = 9;
        stt.leading = 12;
        stt.tracking = 80;
        stt.capitalization = Capitalization.ALL_CAPS;
        stt.fillColor = signalOrange;
        stt.justification = Justification.CENTER_ALIGN;
    } catch(e) {}
    created.push("Stat callout (orange text)");

    // ============================================================
    // 8. GOLD DIVIDER RULE (below stat callout)
    // ============================================================
    yPos += 0.55;
    var goldDiv2 = makeRect(stagePage,
        [yPos, contentLeft, yPos + 0.015, contentRight],
        gold);
    goldDiv2.label = "FORM-GOLD-RULE-2";
    created.push("Gold divider rule (below stat callout)");

    // ============================================================
    // 9. "BY THE NUMBERS" SECTION HEADER
    // ============================================================
    yPos += 0.12;
    var btnHeader = makeTF(stagePage,
        [yPos, contentLeft, yPos + 0.25, contentRight],
        "BY THE NUMBERS");
    btnHeader.label = "FORM-BTN-HEADER";
    if (!applyStyle(btnHeader, "Section Label")) {
        try {
            var bh = btnHeader.parentStory.texts[0];
            bh.appliedFont = app.fonts.itemByName("Barlow Condensed");
            bh.fontStyle = "Bold";
            bh.pointSize = 10;
            bh.leading = 12;
            bh.tracking = 250;
            bh.capitalization = Capitalization.ALL_CAPS;
            bh.fillColor = gold;
        } catch(e) {}
    }
    try {
        btnHeader.parentStory.texts[0].justification = Justification.CENTER_ALIGN;
    } catch(e) {}
    created.push("BY THE NUMBERS header");

    // ============================================================
    // 10. STATS — 2x2 GRID
    // ============================================================
    yPos += 0.3;

    var stats = [
        // Row 1
        { value: "4.7 seconds", desc: "Average time spent on a\nstandard badge photo" },
        { value: "11.3 years", desc: "Average time that photo\nremains in active circulation" },
        // Row 2
        { value: "1 in 4", desc: "Employees who say their badge\nphoto \u201Clooks like a different\nperson, possibly a missing one\u201D" },
        { value: "$240", desc: "Current estimated trade value\nof a pre-2008 badge featuring\nthe old logo, near-mint condition" }
    ];

    var statColWidth = (contentW - 0.3) / 2;
    var statRowHeight = 0.95;

    for (var si = 0; si < stats.length; si++) {
        var row = Math.floor(si / 2);
        var col = si % 2;

        var statX = contentLeft + (col * (statColWidth + 0.3));
        var statY = yPos + (row * statRowHeight);

        // Big number
        var valTF = makeTF(stagePage,
            [statY, statX, statY + 0.4, statX + statColWidth],
            stats[si].value);
        valTF.label = "FORM-STAT-VAL-" + si;
        if (!applyStyle(valTF, "Infographic Data Value")) {
            try {
                var vt = valTF.parentStory.texts[0];
                vt.appliedFont = app.fonts.itemByName("Barlow Condensed");
                vt.fontStyle = "Bold";
                vt.pointSize = 32;
                vt.leading = 34;
                vt.fillColor = tealBlock;
            } catch(e) {}
        }
        try {
            valTF.parentStory.texts[0].justification = Justification.LEFT_ALIGN;
            valTF.parentStory.texts[0].pointSize = 32;
            valTF.parentStory.texts[0].leading = 34;
        } catch(e) {}

        // Description text
        var descTF = makeTF(stagePage,
            [statY + 0.38, statX, statY + statRowHeight - 0.05, statX + statColWidth],
            stats[si].desc);
        descTF.label = "FORM-STAT-DESC-" + si;
        try {
            var dt = descTF.parentStory.texts[0];
            dt.appliedFont = app.fonts.itemByName("Freight Text Pro");
            dt.fontStyle = "Book";
            dt.pointSize = 10;
            dt.leading = 13;
            dt.tracking = 5;
            dt.fillColor = charcoal;
        } catch(e) {}
    }

    created.push("Stats: 4 items in 2x2 grid (values + descriptions)");

    // ============================================================
    // 11. GERALD IMAGE PLACEHOLDER + CAPTION
    // ============================================================
    yPos += (2 * statRowHeight) + 0.15;

    // Image placeholder rectangle
    var imgPlaceholder = makeRectWithStroke(stagePage,
        [yPos, contentLeft, yPos + 2.8, contentRight],
        warmGray40, charcoal, 0.5);
    imgPlaceholder.label = "FORM-GERALD-IMAGE-PLACEHOLDER";

    // Placeholder text
    var imgLabel = makeTF(stagePage,
        [yPos + 1.1, contentLeft + 1.5, yPos + 1.7, contentRight - 1.5],
        "PLACE GERALD IMAGE HERE");
    imgLabel.label = "FORM-GERALD-LABEL";
    try {
        var il = imgLabel.parentStory.texts[0];
        il.appliedFont = app.fonts.itemByName("Barlow Condensed");
        il.fontStyle = "SemiBold";
        il.pointSize = 14;
        il.leading = 16;
        il.tracking = 100;
        il.capitalization = Capitalization.ALL_CAPS;
        il.fillColor = warmGray80;
        il.justification = Justification.CENTER_ALIGN;
    } catch(e) {}

    // Caption bar (semi-transparent dark bar)
    var captionBarY = yPos + 2.8 - 0.35;
    var captionBar = makeRect(stagePage,
        [captionBarY, contentLeft, captionBarY + 0.35, contentRight],
        matteBlack);
    captionBar.transparencySettings.blendingSettings.opacity = 65;
    captionBar.label = "FORM-GERALD-CAPTION-BAR";

    var captionTF = makeTF(stagePage,
        [captionBarY + 0.08, contentLeft + 0.15, captionBarY + 0.3, contentRight - 0.15],
        "A good badge photo is always working for you.");
    captionTF.label = "FORM-GERALD-CAPTION-TEXT";
    try {
        var capt = captionTF.parentStory.texts[0];
        capt.appliedFont = app.fonts.itemByName("IBM Plex Mono");
        capt.fontStyle = "Regular";
        capt.pointSize = 9;
        capt.leading = 11;
        capt.tracking = 10;
        capt.fillColor = cream;
    } catch(e) {}

    // Figure label below image
    var figY = yPos + 2.85;
    var figTF = makeTF(stagePage,
        [figY, contentLeft, figY + 0.2, contentRight],
        "Fig. 1 \u2014 Credential photo session, Credentialing Department. Subject: Gerald Hutchins, ID: 04817.");
    figTF.label = "FORM-FIG-LABEL";
    try {
        var fig = figTF.parentStory.texts[0];
        fig.appliedFont = app.fonts.itemByName("IBM Plex Mono");
        fig.fontStyle = "Regular";
        fig.pointSize = 7;
        fig.leading = 9;
        fig.tracking = 10;
        fig.fillColor = warmGray80;
        fig.justification = Justification.CENTER_ALIGN;
    } catch(e) {}

    created.push("Gerald image placeholder + caption bar + figure label");

    // ============================================================
    // 12. FORM FOOTER
    // ============================================================
    var footerY = formBottom - 0.3;
    var footerTF = makeTF(stagePage,
        [footerY, contentLeft, footerY + 0.15, contentRight],
        "Form WSD-4817  \u2022  Rev. 03/2026  \u2022  ELEVATE Workplace Standards Division  \u2022  Internal Use Only");
    footerTF.label = "FORM-FOOTER";
    try {
        var ft = footerTF.parentStory.texts[0];
        ft.appliedFont = app.fonts.itemByName("IBM Plex Mono");
        ft.fontStyle = "Light";
        ft.pointSize = 6;
        ft.leading = 8;
        ft.tracking = 30;
        ft.fillColor = warmGray40;
        ft.justification = Justification.CENTER_ALIGN;
    } catch(e) {}
    created.push("Form footer: Form WSD-4817");

    // ============================================================
    // RESTORE UNITS
    // ============================================================
    doc.viewPreferences.horizontalMeasurementUnits = origH;
    doc.viewPreferences.verticalMeasurementUnits = origV;

    // ============================================================
    // RESULTS
    // ============================================================
    var msg = "PAGE 6 CORPORATE FORM CREATED ON PAGE " + stagePageNum + "\n\n";
    msg += "Created " + created.length + " element groups:\n\n";
    for (var r = 0; r < created.length; r++) {
        msg += (r + 1) + ". " + created[r] + "\n";
    }
    msg += "\n\u2022 All elements are labeled with FORM- prefix.\n";
    msg += "\u2022 Select all, Group (Ctrl+G), move to page 6.\n";
    msg += "\u2022 Replace the image placeholder with the Gerald photo.\n";
    msg += "\u2022 Place caption bar ON TOP of the image (bottom edge).\n";
    msg += "\n\u2022 The entire page should read as one corporate form/document.";

    alert(msg);

})();
