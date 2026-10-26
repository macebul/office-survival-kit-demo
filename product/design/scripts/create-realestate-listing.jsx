// ELEVATE Magazine — Real Estate Listing Page (v2)
// Run this in InDesign via Window > Utilities > Scripts
//
// Creates the "Your Personal Workspace" real estate listing on PAGE 11 (index 10).
// Mimics a Zillow-style property listing layout.
//
// Components (top to bottom):
//   1. Headline: "YOUR PERSONAL WORKSPACE"
//   2. Deck: "Now Showing: A Cozy 48-Square-Foot Studio With Character"
//   3. Gold hairline rule
//   4. Dimensions callout block (6x8 FT on charcoal) — left side
//   5. Short listing description paragraph — right side
//   6. Gold hairline rule
//   7. "PROPERTY DETAILS" header + bulleted feature list
//   8. Upgrade note
//   9. Gold hairline rule
//  10. "RELATED PROPERTIES" header + three mini-listings

#target indesign

(function() {
    var doc = app.activeDocument;

    // Save original units and switch to inches
    var origH = doc.viewPreferences.horizontalMeasurementUnits;
    var origV = doc.viewPreferences.verticalMeasurementUnits;
    doc.viewPreferences.horizontalMeasurementUnits = MeasurementUnits.INCHES;
    doc.viewPreferences.verticalMeasurementUnits = MeasurementUnits.INCHES;

    // Clear existing RE- labeled items on page 11 first
    var stagePage;
    try {
        stagePage = doc.pages[10];
    } catch(e) {
        while (doc.pages.length < 11) {
            doc.pages.add();
        }
        stagePage = doc.pages[10];
    }

    // Remove old RE- elements
    for (var pi = stagePage.pageItems.length - 1; pi >= 0; pi--) {
        try {
            if (stagePage.pageItems[pi].label && stagePage.pageItems[pi].label.indexOf("RE-") === 0) {
                stagePage.pageItems[pi].remove();
            }
        } catch(e) {}
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

    var contentLeft = marginOutside;
    var contentRight = pageW - marginInside;
    var contentW = contentRight - contentLeft;
    var contentTop = marginTop;
    var contentBottom = pageH - marginBot;

    // ============================================================
    // 1. HEADLINE — "YOUR PERSONAL WORKSPACE"
    // ============================================================
    var yPos = contentTop;

    var headTF = makeTF(stagePage,
        [yPos, contentLeft, yPos + 0.6, contentRight],
        "YOUR PERSONAL WORKSPACE");
    headTF.label = "RE-HEADLINE";
    applyStyle(headTF, "Article Headline Alt");
    created.push("Headline: YOUR PERSONAL WORKSPACE");

    // ============================================================
    // 2. DECK
    // ============================================================
    yPos += 0.6;

    var deckTF = makeTF(stagePage,
        [yPos, contentLeft, yPos + 0.3, contentRight],
        "Now Showing: A Cozy 48-Square-Foot Studio With Character");
    deckTF.label = "RE-DECK";
    applyStyle(deckTF, "Article Deck");
    created.push("Deck line");

    // ============================================================
    // 3. GOLD HAIRLINE RULE
    // ============================================================
    yPos += 0.35;

    var rule1 = makeRect(stagePage,
        [yPos, contentLeft, yPos + 0.01, contentRight],
        gold);
    rule1.label = "RE-RULE-1";
    created.push("Gold hairline rule 1");

    // ============================================================
    // 4. DIMENSIONS CALLOUT (left) + LISTING COPY (right)
    // ============================================================
    yPos += 0.15;

    // Left side: dimensions callout block
    var dimBlockW = 2.2;
    var dimBlockH = 1.5;

    var dimBg = makeRect(stagePage,
        [yPos, contentLeft, yPos + dimBlockH, contentLeft + dimBlockW],
        charcoal);
    dimBg.label = "RE-DIM-BG";

    // Big number: "6x8"
    var dimNumTF = makeTF(stagePage,
        [yPos + 0.15, contentLeft + 0.1, yPos + 0.8, contentLeft + dimBlockW - 0.1],
        "6\u00D78");
    dimNumTF.label = "RE-DIM-NUMBER";
    try {
        var dt = dimNumTF.parentStory.texts[0];
        dt.appliedFont = app.fonts.itemByName("Barlow Condensed");
        dt.fontStyle = "Black";
        dt.pointSize = 64;
        dt.leading = 64;
        dt.tracking = 20;
        dt.fillColor = gold;
        dt.justification = Justification.CENTER_ALIGN;
    } catch(e) {}

    // "FT" label
    var dimFtTF = makeTF(stagePage,
        [yPos + 0.8, contentLeft + 0.1, yPos + 1.0, contentLeft + dimBlockW - 0.1],
        "FT");
    dimFtTF.label = "RE-DIM-FT";
    applyStyle(dimFtTF, "Section Label");
    try {
        dimFtTF.parentStory.texts[0].justification = Justification.CENTER_ALIGN;
        dimFtTF.parentStory.texts[0].fillColor = gold;
        dimFtTF.parentStory.texts[0].pointSize = 16;
    } catch(e) {}

    // "TOTAL WORKSPACE" subtitle
    var dimSubTF = makeTF(stagePage,
        [yPos + 1.05, contentLeft + 0.1, yPos + 1.25, contentLeft + dimBlockW - 0.1],
        "TOTAL WORKSPACE");
    dimSubTF.label = "RE-DIM-SUBTITLE";
    applyStyle(dimSubTF, "Section Label");
    try {
        dimSubTF.parentStory.texts[0].justification = Justification.CENTER_ALIGN;
        dimSubTF.parentStory.texts[0].fillColor = cream;
        dimSubTF.parentStory.texts[0].pointSize = 9;
    } catch(e) {}

    created.push("Dimensions callout block (6\u00D78 FT on charcoal)");

    // Right side: short listing description
    var listingLeft = contentLeft + dimBlockW + 0.25;
    var listingCopy = "Welcome to your new home away from home away from anywhere you\u2019d actually want to be. Previously occupied. Lightly used. One careful owner who left abruptly and took the good chair.";

    var listingTF = makeTF(stagePage,
        [yPos, listingLeft, yPos + dimBlockH, contentRight],
        listingCopy);
    listingTF.label = "RE-LISTING-COPY";
    applyStyle(listingTF, "Body - First Paragraph");
    created.push("Listing description (short)");

    // ============================================================
    // 5. GOLD HAIRLINE RULE
    // ============================================================
    yPos += dimBlockH + 0.15;

    var rule2 = makeRect(stagePage,
        [yPos, contentLeft, yPos + 0.01, contentRight],
        gold);
    rule2.label = "RE-RULE-2";
    created.push("Gold hairline rule 2");

    // ============================================================
    // 6. "PROPERTY DETAILS" HEADER
    // ============================================================
    yPos += 0.12;

    var detailsHeaderTF = makeTF(stagePage,
        [yPos, contentLeft, yPos + 0.2, contentRight],
        "PROPERTY DETAILS");
    detailsHeaderTF.label = "RE-DETAILS-HEADER";
    applyStyle(detailsHeaderTF, "Section Label");
    created.push("Property Details header");

    // ============================================================
    // 7. BULLETED FEATURE LIST (two columns)
    // ============================================================
    yPos += 0.28;

    // Each feature has a bold label and a description
    // Left column: Layout, Lighting, Views, Climate
    // Right column: Storage, Amenities, Parking, Noise Level

    var colGutter = 0.3;
    var colW = (contentW - colGutter) / 2;
    var featureRowH = 0.32;

    var leftFeatures = [
        ["Layout", "Open concept (walls stop at 5 feet \u2014 for ventilation, we\u2019re told)"],
        ["Lighting", "Overhead fluorescent with a gentle industrial hum"],
        ["Views", "Rotating selection of your neighbor\u2019s monitor"],
        ["Climate", "Aggressive air conditioning, April through eternity"]
    ];

    var rightFeatures = [
        ["Storage", "One overhead bin, one file drawer (jammed since 2019)"],
        ["Amenities", "Shared printer (see Disputed Territory, p. 14)"],
        ["Parking", "Not included. Not available. Not discussed."],
        ["Noise Level", "Yes"]
    ];

    // Build feature styles
    var specLabelStyle = findStyle("Spec Table Label");
    var specCellStyle = findStyle("Spec Table Cell");
    var calloutBoxStyle = findStyle("Callout Box Text");

    // Left column features
    for (var li = 0; li < leftFeatures.length; li++) {
        var fy = yPos + (li * featureRowH);
        var fLeft = contentLeft;

        // Label (bold)
        var labelTF = makeTF(stagePage,
            [fy, fLeft, fy + 0.14, fLeft + colW],
            leftFeatures[li][0]);
        labelTF.label = "RE-FEAT-L" + li + "-LABEL";
        applyStyle(labelTF, "Infographic Data Label");

        // Value
        var valTF = makeTF(stagePage,
            [fy + 0.13, fLeft, fy + featureRowH, fLeft + colW],
            leftFeatures[li][1]);
        valTF.label = "RE-FEAT-L" + li + "-VAL";
        applyStyle(valTF, "Classified Ad Body");
    }

    // Right column features
    for (var ri = 0; ri < rightFeatures.length; ri++) {
        var fy2 = yPos + (ri * featureRowH);
        var fRight = contentLeft + colW + colGutter;

        // Label (bold)
        var labelTF2 = makeTF(stagePage,
            [fy2, fRight, fy2 + 0.14, fRight + colW],
            rightFeatures[ri][0]);
        labelTF2.label = "RE-FEAT-R" + ri + "-LABEL";
        applyStyle(labelTF2, "Infographic Data Label");

        // Value
        var valTF2 = makeTF(stagePage,
            [fy2 + 0.13, fRight, fy2 + featureRowH, fRight + colW],
            rightFeatures[ri][1]);
        valTF2.label = "RE-FEAT-R" + ri + "-VAL";
        applyStyle(valTF2, "Classified Ad Body");
    }

    created.push("Property features (8 items in 2 columns)");

    // ============================================================
    // 8. UPGRADE NOTE
    // ============================================================
    yPos += (4 * featureRowH) + 0.15;

    var upgradeTF = makeTF(stagePage,
        [yPos, contentLeft, yPos + 0.25, contentRight],
        "Larger units (6\u00D79) available for pre-qualified applicants. Inquire with management. Do not inquire with management.");
    upgradeTF.label = "RE-UPGRADE-NOTE";
    applyStyle(upgradeTF, "Infographic Annotation");
    try {
        upgradeTF.parentStory.texts[0].fontStyle = "Italic";
    } catch(e) {}
    created.push("Upgrade note (6\u00D79 teaser)");

    // ============================================================
    // 9. GOLD HAIRLINE RULE
    // ============================================================
    yPos += 0.3;

    var rule3 = makeRect(stagePage,
        [yPos, contentLeft, yPos + 0.01, contentRight],
        gold);
    rule3.label = "RE-RULE-3";
    created.push("Gold hairline rule 3");

    // ============================================================
    // 10. "RELATED PROPERTIES" HEADER
    // ============================================================
    yPos += 0.12;

    var relHeaderTF = makeTF(stagePage,
        [yPos, contentLeft, yPos + 0.2, contentRight],
        "RELATED PROPERTIES");
    relHeaderTF.label = "RE-RELATED-HEADER";
    applyStyle(relHeaderTF, "Section Label");
    created.push("Related Properties header");

    // ============================================================
    // 11. THREE RELATED PROPERTIES (side by side)
    // ============================================================
    yPos += 0.25;

    var propGutter = 0.2;
    var propW = (contentW - (propGutter * 2)) / 3;
    var propImageH = 0.9;

    // Image placeholders
    for (var pi = 0; pi < 3; pi++) {
        var pLeft = contentLeft + (pi * (propW + propGutter));
        var pRight = pLeft + propW;

        var imgRect = makeRect(stagePage,
            [yPos, pLeft, yPos + propImageH, pRight],
            warmGray15);
        imgRect.label = "RE-PROP-IMG-" + (pi + 1);
        imgRect.strokeWeight = 0.5;
        imgRect.strokeColor = warmGray40;
    }

    var propTextY = yPos + propImageH + 0.08;

    // --- PROPERTY 1: THE CORNER OFFICE ---
    var p1Left = contentLeft;
    var p1Right = p1Left + propW;

    var p1TitleTF = makeTF(stagePage,
        [propTextY, p1Left, propTextY + 0.2, p1Right],
        "THE CORNER OFFICE");
    p1TitleTF.label = "RE-PROP1-TITLE";
    applyStyle(p1TitleTF, "Classified Ad Title");

    var p1DimTF = makeTF(stagePage,
        [propTextY + 0.2, p1Left, propTextY + 0.35, p1Right],
        "12\u00D712 FT");
    p1DimTF.label = "RE-PROP1-DIM";
    applyStyle(p1DimTF, "Callout Label");
    try { p1DimTF.parentStory.texts[0].fillColor = teal; } catch(e) {}

    var p1BodyTF = makeTF(stagePage,
        [propTextY + 0.38, p1Left, propTextY + 1.2, p1Right],
        "Above your pay grade. Natural light on two sides. Occupied by someone who arrives after you and leaves before you. Not currently available. Not projected to become available.");
    p1BodyTF.label = "RE-PROP1-BODY";
    applyStyle(p1BodyTF, "Classified Ad Body");

    // --- PROPERTY 2: THE PANIC POD ---
    var p2Left = contentLeft + propW + propGutter;
    var p2Right = p2Left + propW;

    var p2TitleTF = makeTF(stagePage,
        [propTextY, p2Left, propTextY + 0.2, p2Right],
        "THE PANIC POD");
    p2TitleTF.label = "RE-PROP2-TITLE";
    applyStyle(p2TitleTF, "Classified Ad Title");

    var p2DimTF = makeTF(stagePage,
        [propTextY + 0.2, p2Left, propTextY + 0.35, p2Right],
        "3\u00D73 FT");
    p2DimTF.label = "RE-PROP2-DIM";
    applyStyle(p2DimTF, "Callout Label");
    try { p2DimTF.parentStory.texts[0].fillColor = teal; } catch(e) {}

    var p2BodyTF = makeTF(stagePage,
        [propTextY + 0.38, p2Left, propTextY + 1.2, p2Right],
        "The only truly private office in the building. No windows. One lock. Full soundproofing. Limited availability during peak hours (Monday through Friday, 8 AM to 6 PM).");
    p2BodyTF.label = "RE-PROP2-BODY";
    applyStyle(p2BodyTF, "Classified Ad Body");

    // --- PROPERTY 3: THE PARKING SPOT ---
    var p3Left = contentLeft + (2 * (propW + propGutter));
    var p3Right = p3Left + propW;

    var p3TitleTF = makeTF(stagePage,
        [propTextY, p3Left, propTextY + 0.2, p3Right],
        "THE PARKING SPOT");
    p3TitleTF.label = "RE-PROP3-TITLE";
    applyStyle(p3TitleTF, "Classified Ad Title");

    var p3DimTF = makeTF(stagePage,
        [propTextY + 0.2, p3Left, propTextY + 0.35, p3Right],
        "0 SQ FT");
    p3DimTF.label = "RE-PROP3-DIM";
    applyStyle(p3DimTF, "Callout Label");
    try { p3DimTF.parentStory.texts[0].fillColor = teal; } catch(e) {}

    var p3BodyTF = makeTF(stagePage,
        [propTextY + 0.38, p3Left, propTextY + 1.2, p3Right],
        "You\u2019ll never get one. The waitlist is longer than your mortgage. Dave from Accounting has had the same spot since 1997. Dave is not going anywhere. Neither is his Camry.");
    p3BodyTF.label = "RE-PROP3-BODY";
    applyStyle(p3BodyTF, "Classified Ad Body");

    created.push("Related Property 1: The Corner Office");
    created.push("Related Property 2: The Panic Pod");
    created.push("Related Property 3: The Parking Spot");

    // ============================================================
    // RESTORE UNITS
    // ============================================================
    doc.viewPreferences.horizontalMeasurementUnits = origH;
    doc.viewPreferences.verticalMeasurementUnits = origV;

    // ============================================================
    // RESULTS
    // ============================================================
    var msg = "REAL ESTATE LISTING PAGE v2 CREATED ON PAGE 11\n\n";
    msg += "Created " + created.length + " elements:\n\n";
    for (var r = 0; r < created.length; r++) {
        msg += (r + 1) + ". " + created[r] + "\n";
    }
    msg += "\n\u2022 All elements labeled with RE- prefix.\n";
    msg += "\u2022 Old RE- elements were removed before creating new ones.\n";
    msg += "\u2022 Property features are in 2 columns (4 items each).\n";
    msg += "\u2022 Feature labels use Infographic Data Label style.\n";
    msg += "\u2022 Feature values use Classified Ad Body style.\n";
    msg += "\u2022 Gray rectangles are image placeholders for related properties.\n";
    msg += "\u2022 Upgrade note teases the 6\u00D79 without revealing the joke.\n";

    alert(msg);

})();
