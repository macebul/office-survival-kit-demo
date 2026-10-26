// ELEVATE Magazine — Add elements to master pages
// Run AFTER create-magazine-masters.jsx
// Adds background rectangles, running headers, and page numbers

#target indesign

(function() {
    var doc = app.activeDocument;

    // Save original units and switch to inches
    var origH = doc.viewPreferences.horizontalMeasurementUnits;
    var origV = doc.viewPreferences.verticalMeasurementUnits;
    doc.viewPreferences.horizontalMeasurementUnits = MeasurementUnits.INCHES;
    doc.viewPreferences.verticalMeasurementUnits = MeasurementUnits.INCHES;

    var bleed = 0.125; // 1/8 inch bleed

    // Helper: find a master spread by prefix
    function findMaster(prefix) {
        for (var i = 0; i < doc.masterSpreads.length; i++) {
            if (doc.masterSpreads[i].namePrefix === prefix) {
                return doc.masterSpreads[i];
            }
        }
        return null;
    }

    // Helper: find paragraph style by name (searches groups too)
    function findStyle(name) {
        for (var i = 0; i < doc.paragraphStyleGroups.length; i++) {
            var group = doc.paragraphStyleGroups[i];
            for (var j = 0; j < group.paragraphStyles.length; j++) {
                if (group.paragraphStyles[j].name === name) {
                    return group.paragraphStyles[j];
                }
            }
        }
        for (var k = 0; k < doc.paragraphStyles.length; k++) {
            if (doc.paragraphStyles[k].name === name) {
                return doc.paragraphStyles[k];
            }
        }
        return null;
    }

    // Helper: add a full-bleed background rectangle to a page
    function addBackground(page, colorName) {
        var b = page.bounds; // [top, left, bottom, right] in inches
        var rect = page.rectangles.add();
        rect.geometricBounds = [
            b[0] - bleed,  // top - bleed
            b[1] - bleed,  // left - bleed
            b[2] + bleed,  // bottom + bleed
            b[3] + bleed   // right + bleed
        ];
        try {
            rect.fillColor = doc.swatches.itemByName(colorName);
        } catch(e) {}
        rect.strokeWeight = 0;
        rect.strokeColor = doc.swatches.itemByName("None");
        rect.sendToBack();
        return rect;
    }

    // Helper: add running header text frame
    function addHeader(page, isLeft) {
        var b = page.bounds; // [top, left, bottom, right]
        var mTop = page.marginPreferences.top;
        var mLeft = page.marginPreferences.left;   // inside margin
        var mRight = page.marginPreferences.right;  // outside margin

        // For left page: outside is on the left, inside on the right
        // For right page: inside is on the left, outside on the right
        var frameLeft, frameRight;
        if (isLeft) {
            frameLeft = b[1] + mRight;   // outside margin from left edge
            frameRight = b[3] - mLeft;   // inside margin from right edge (spine)
        } else {
            frameLeft = b[1] + mLeft;    // inside margin from left edge (spine)
            frameRight = b[3] - mRight;  // outside margin from right edge
        }

        var headerFrame = page.textFrames.add();
        headerFrame.geometricBounds = [
            b[0] + 0.375,    // 0.375in from top
            frameLeft,
            b[0] + 0.625,    // 0.25in tall
            frameRight
        ];
        headerFrame.textFramePreferences.verticalJustification = VerticalJustification.CENTER_ALIGN;
        headerFrame.contents = isLeft ? "SECTION NAME" : "ELEVATE";
        headerFrame.paragraphs[0].justification = isLeft ? Justification.LEFT_ALIGN : Justification.RIGHT_ALIGN;

        var style = findStyle("Running Header");
        if (style) {
            headerFrame.paragraphs[0].appliedParagraphStyle = style;
        }
        return headerFrame;
    }

    // Helper: add page number (folio) text frame
    function addFolio(page, isLeft) {
        var b = page.bounds; // [top, left, bottom, right]
        var mLeft = page.marginPreferences.left;   // inside
        var mRight = page.marginPreferences.right;  // outside

        var folioW = 0.5;
        var folioH = 0.2;
        var folioY = b[2] - 0.5; // 0.5in from bottom edge

        var folioX;
        if (isLeft) {
            folioX = b[1] + mRight; // outside margin on left page
        } else {
            folioX = b[3] - mRight - folioW; // outside margin on right page
        }

        var folioFrame = page.textFrames.add();
        folioFrame.geometricBounds = [folioY, folioX, folioY + folioH, folioX + folioW];
        folioFrame.textFramePreferences.verticalJustification = VerticalJustification.CENTER_ALIGN;
        folioFrame.parentStory.insertionPoints[0].contents = SpecialCharacters.AUTO_PAGE_NUMBER;
        folioFrame.paragraphs[0].justification = isLeft ? Justification.LEFT_ALIGN : Justification.RIGHT_ALIGN;

        var style = findStyle("Folio");
        if (style) {
            folioFrame.paragraphs[0].appliedParagraphStyle = style;
        }
        return folioFrame;
    }

    // Helper: check if page is left-hand
    function isLeft(page) {
        return page.side === PageSideOptions.LEFT_HAND;
    }

    // ============================================================
    // A-EDITORIAL: cream bg + running header + folio
    // ============================================================
    var masterA = findMaster("A");
    if (masterA) {
        for (var a = 0; a < masterA.pages.length; a++) {
            var pA = masterA.pages[a];
            addBackground(pA, "Cream");
            addHeader(pA, isLeft(pA));
            addFolio(pA, isLeft(pA));
        }
    }

    // ============================================================
    // B-FEATURE SPREAD: cream bg + running header + folio
    // ============================================================
    var masterB = findMaster("B");
    if (masterB) {
        for (var b = 0; b < masterB.pages.length; b++) {
            var pB = masterB.pages[b];
            addBackground(pB, "Cream");
            addHeader(pB, isLeft(pB));
            addFolio(pB, isLeft(pB));
        }
    }

    // ============================================================
    // C-FULL PAGE AD: black bg only
    // ============================================================
    var masterC = findMaster("C");
    if (masterC) {
        for (var c = 0; c < masterC.pages.length; c++) {
            addBackground(masterC.pages[c], "Matte Black");
        }
    }

    // ============================================================
    // D-SPREAD AD: black bg only
    // ============================================================
    var masterD = findMaster("D");
    if (masterD) {
        for (var dd = 0; dd < masterD.pages.length; dd++) {
            addBackground(masterD.pages[dd], "Matte Black");
        }
    }

    // ============================================================
    // E-COVER: nothing (intentionally blank for cover photo)
    // ============================================================

    // ============================================================
    // F-BACK COVER: cream bg + folio only (no running header)
    // ============================================================
    var masterF = findMaster("F");
    if (masterF) {
        for (var f = 0; f < masterF.pages.length; f++) {
            var pF = masterF.pages[f];
            addBackground(pF, "Cream");
            addFolio(pF, isLeft(pF));
        }
    }

    // Restore original units
    doc.viewPreferences.horizontalMeasurementUnits = origH;
    doc.viewPreferences.verticalMeasurementUnits = origV;

    alert("Done! Added elements to master pages:\n\n" +
        "A-Editorial: Cream bg + header + page number\n" +
        "B-Feature Spread: Cream bg + header + page number\n" +
        "C-Full Page Ad: Matte Black bg\n" +
        "D-Spread Ad: Matte Black bg\n" +
        "E-Cover: (nothing added)\n" +
        "F-Back Cover: Cream bg + page number");

})();
