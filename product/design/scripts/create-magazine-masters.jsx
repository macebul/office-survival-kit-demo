// ELEVATE Magazine — Master Page Generator
// Run this in InDesign via Window > Utilities > Scripts
// Deletes existing A-F masters, recreates them fresh with correct values
// Uses inches directly to avoid unit conversion issues

#target indesign

(function() {
    var doc = app.activeDocument;

    // Save original units and switch to inches
    var origH = doc.viewPreferences.horizontalMeasurementUnits;
    var origV = doc.viewPreferences.verticalMeasurementUnits;
    doc.viewPreferences.horizontalMeasurementUnits = MeasurementUnits.INCHES;
    doc.viewPreferences.verticalMeasurementUnits = MeasurementUnits.INCHES;

    // Step 1: Delete existing masters B through F (keep A since InDesign
    // requires at least one master spread to exist at all times)
    var prefixesToDelete = ["F", "E", "D", "C", "B"]; // reverse order, skip A
    for (var d = 0; d < prefixesToDelete.length; d++) {
        for (var s = doc.masterSpreads.length - 1; s >= 0; s--) {
            if (doc.masterSpreads[s].namePrefix === prefixesToDelete[d]) {
                doc.masterSpreads[s].remove();
            }
        }
    }

    // Step 2: Clean up A-Master (clear all page items, rename it)
    for (var a = 0; a < doc.masterSpreads.length; a++) {
        if (doc.masterSpreads[a].namePrefix === "A") {
            var existingA = doc.masterSpreads[a];
            existingA.baseName = "Editorial";
            for (var p = 0; p < existingA.pages.length; p++) {
                while (existingA.pages[p].pageItems.length > 0) {
                    existingA.pages[p].pageItems[0].remove();
                }
            }
            break;
        }
    }

    // Helper: get existing master by prefix, or create a new one
    function createMaster(prefix, name) {
        // Check if it already exists (for A-Master)
        for (var i = 0; i < doc.masterSpreads.length; i++) {
            if (doc.masterSpreads[i].namePrefix === prefix) {
                return doc.masterSpreads[i];
            }
        }
        var master = doc.masterSpreads.add();
        master.namePrefix = prefix;
        master.baseName = name;
        return master;
    }

    // Helper: set margins and columns on all pages of a master
    // All values in INCHES
    function setMargins(master, top, bottom, inside, outside, cols, gutter) {
        for (var i = 0; i < master.pages.length; i++) {
            var page = master.pages[i];
            page.marginPreferences.columnCount = 1;
            page.marginPreferences.top = top;
            page.marginPreferences.bottom = bottom;
            page.marginPreferences.left = inside;
            page.marginPreferences.right = outside;
            page.marginPreferences.columnGutter = gutter;
            page.marginPreferences.columnCount = cols;
        }
    }

    // ============================================================
    // A-MASTER: EDITORIAL (default interior pages)
    // Cream bg, running header, page number, 6-column grid
    // ============================================================
    var masterA = createMaster("A", "Editorial");
    //                    top    bot    inside  outside  cols  gutter
    setMargins(masterA, 0.75,  0.75,  0.875,  0.625,   6,   0.1667);

    // ============================================================
    // B-MASTER: FEATURE SPREAD
    // Same grid as A, for feature article openers
    // ============================================================
    var masterB = createMaster("B", "Feature Spread");
    setMargins(masterB, 0.75,  0.75,  0.875,  0.625,   6,   0.1667);

    // ============================================================
    // C-MASTER: FULL PAGE AD
    // Black bg, no headers/folios, 1-column freeform
    // ============================================================
    var masterC = createMaster("C", "Full Page Ad");
    setMargins(masterC, 0.5,   0.5,   0.5,    0.5,     1,   0.1667);

    // ============================================================
    // D-MASTER: SPREAD AD
    // Black bg, tight inside gutter for cross-page layouts
    // ============================================================
    var masterD = createMaster("D", "Spread Ad");
    setMargins(masterD, 0.5,   0.5,   0.25,   0.5,     1,   0.1667);

    // ============================================================
    // E-MASTER: COVER
    // No furniture, no background, for cover photo
    // ============================================================
    var masterE = createMaster("E", "Cover");
    setMargins(masterE, 0.75,  0.75,  0.625,  0.625,   1,   0.1667);

    // ============================================================
    // F-MASTER: BACK COVER / FINE PRINT
    // Cream bg, 4-column grid, page number only
    // ============================================================
    var masterF = createMaster("F", "Back Cover");
    setMargins(masterF, 0.625, 0.625, 0.625,  0.625,   4,   0.125);

    // Restore original units
    doc.viewPreferences.horizontalMeasurementUnits = origH;
    doc.viewPreferences.verticalMeasurementUnits = origV;

    // ============================================================
    // DONE
    // ============================================================

    alert("Done! Created 6 master pages with margins and columns:\n\n" +
        "A-Editorial — 6-col, 0.875in inside / 0.625in outside\n" +
        "B-Feature Spread — same as A\n" +
        "C-Full Page Ad — 1-col, 0.5in all sides\n" +
        "D-Spread Ad — 1-col, 0.25in inside / 0.5in outside\n" +
        "E-Cover — 1-col, 0.625in all sides\n" +
        "F-Back Cover — 4-col, 0.625in all sides\n\n" +
        "Next: Add background rectangles and text frames manually.");

})();
