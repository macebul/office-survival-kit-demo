// ELEVATE Magazine — Right Page Content Panels (Preview on Page 4)
// Run this in InDesign via Window > Utilities > Scripts
//
// Creates differentiated content panels for the Cubicle Shank right page.
// These are DIFFERENT from the testimonial cards on the left page:
//   - Sharp rectangular corners (no rounded corners)
//   - No full border — only a gold gradient accent along the top edge
//   - Near-black fill (darker than the testimonial card charcoal)
//   - Panels feel like surfaces, not cards
//
// Elements created:
//   1. Result Copy Panel — behind the "Same intern. Same desk..." paragraph
//   2. CTA Panel — behind the full CTA block (product name through availability)
//   3. Gold top-edge accent line on each panel
//   4. Gold hairline divider between the two panels
//   5. Thin gold accent lines flanking "by Elevate Co."
//
// All elements are placed on PAGE 4 for preview. Move them to page 11 when ready.

#target indesign

(function() {
    var doc = app.activeDocument;

    // ============================================================
    // FIND PAGE 4 FOR PREVIEW
    // ============================================================

    var targetPage = null;
    for (var i = 0; i < doc.pages.length; i++) {
        if (doc.pages[i].name === "4") {
            targetPage = doc.pages[i];
            break;
        }
    }

    if (!targetPage) {
        alert("Could not find page 4.\nMake sure page 4 exists in the document.");
        return;
    }

    var bounds = targetPage.bounds; // [top, left, bottom, right]
    var pageTop = bounds[0];
    var pageLeft = bounds[1];
    var pageBottom = bounds[2];
    var pageRight = bounds[3];

    // Use D-Spread Ad margins for reference (same as pages 10-11)
    var marginTop = 0.5;
    var marginBottom = 0.5;
    var marginOutside = 0.5;
    var marginGutter = 0.25;

    // Live area bounds (for a right-hand page like page 11)
    var liveLeft = pageLeft + marginGutter;
    var liveRight = pageRight - marginOutside;
    var liveTop = pageTop + marginTop;
    var liveBottom = pageBottom - marginBottom;
    var liveWidth = liveRight - liveLeft;

    // ============================================================
    // ENSURE SWATCHES
    // ============================================================

    function ensureSwatch(name, c, m, y, k) {
        try {
            var existing = doc.colors.itemByName(name);
            if (existing.isValid) return existing;
        } catch(e) {}
        var swatch = doc.colors.add();
        swatch.name = name;
        swatch.model = ColorModel.PROCESS;
        swatch.space = ColorSpace.CMYK;
        swatch.colorValue = [c, m, y, k];
        return swatch;
    }

    var matteBlack = ensureSwatch("Matte Black", 0, 0, 0, 100);
    var gold = ensureSwatch("Gold", 0, 15, 80, 10);

    // Near-black panel fill — darker than Card Dark (K:90) used for testimonials
    var panelBg = null;
    try {
        panelBg = doc.colors.itemByName("Panel Near Black");
        if (!panelBg.isValid) throw "not found";
    } catch(e) {
        panelBg = doc.colors.add();
        panelBg.name = "Panel Near Black";
        panelBg.model = ColorModel.PROCESS;
        panelBg.space = ColorSpace.CMYK;
        panelBg.colorValue = [0, 0, 0, 95]; // Almost black, just barely visible
    }

    var createdCount = 0;

    // ============================================================
    // HELPER FUNCTIONS
    // ============================================================

    function makeRect(page, top, left, bottom, right, fillColor, opacity, label) {
        var rect = page.rectangles.add();
        rect.geometricBounds = [top, left, bottom, right];
        rect.fillColor = fillColor;
        rect.strokeWeight = 0;
        rect.strokeColor = doc.swatches.itemByName("None");
        if (opacity !== 100) {
            rect.transparencySettings.blendingSettings.opacity = opacity;
        }
        rect.transparencySettings.dropShadowSettings.mode = ShadowMode.NONE;
        rect.label = label || "";
        return rect;
    }

    function makeLine(page, y, xStart, xEnd, strokeColor, weight, opacity, label) {
        var line = page.graphicLines.add();
        line.paths[0].entirePath = [[xStart, y], [xEnd, y]];
        line.strokeWeight = weight;
        line.strokeColor = strokeColor;
        line.fillColor = doc.swatches.itemByName("None");
        line.transparencySettings.dropShadowSettings.mode = ShadowMode.NONE;
        if (opacity !== 100) {
            line.transparencySettings.blendingSettings.opacity = opacity;
        }
        line.label = label || "";
        return line;
    }

    // ============================================================
    // PANEL LAYOUT — Positioned relative to right page content zones
    // These Y values assume:
    //   - "REAL RESULTS. REAL KYLE." at ~0.5-0.75" from top
    //   - Before/After photos from ~1.25" to ~5.25"
    //   - "THE CUBICLE SHANK" product name label ~5.5"
    //   - Result copy starts ~5.75"
    //   - CTA block starts ~7.5"
    //   - Disclaimer at ~9.5"
    // ============================================================

    // ----------------------------------------------------------
    // 1. RESULT COPY PANEL
    // Sharp corners, near-black fill, no full border
    // Houses: "Same intern. Same desk..." paragraph + footnote
    // ----------------------------------------------------------

    var resultPanelTop = pageTop + 5.5;
    var resultPanelBottom = resultPanelTop + 1.7;
    var resultPanelLeft = liveLeft + 0.1;
    var resultPanelRight = liveRight - 0.1;

    var resultPanel = makeRect(
        targetPage,
        resultPanelTop,
        resultPanelLeft,
        resultPanelBottom,
        resultPanelRight,
        panelBg,
        85,
        "Right Page - Result Copy Panel"
    );
    // NO rounded corners — sharp edges differentiate from testimonial cards
    // NO full border — intentionally different from left page cards
    resultPanel.sendToBack();
    createdCount++;

    // ----------------------------------------------------------
    // 2. GOLD TOP-EDGE ACCENT on Result Panel
    // A gold line along the top edge that fades — like a highlight
    // This replaces the full gold border of the testimonial cards
    // ----------------------------------------------------------

    var resultAccentLine = makeLine(
        targetPage,
        resultPanelTop,
        resultPanelLeft,
        resultPanelRight,
        gold,
        1.5,       // slightly thicker than a hairline for visibility
        70,        // faded — not as bold as testimonial card borders
        "Right Page - Result Panel Top Accent"
    );
    createdCount++;

    // ----------------------------------------------------------
    // 3. GOLD HAIRLINE DIVIDER between Result and CTA panels
    // Centered, ~40% of live width — elegant separator
    // ----------------------------------------------------------

    var dividerY = resultPanelBottom + 0.25;
    var dividerWidth = liveWidth * 0.35;
    var dividerLeft = liveLeft + (liveWidth - dividerWidth) / 2;

    var panelDivider = makeLine(
        targetPage,
        dividerY,
        dividerLeft,
        dividerLeft + dividerWidth,
        gold,
        0.5,
        50,        // subtle
        "Right Page - Panel Divider Rule"
    );
    createdCount++;

    // ----------------------------------------------------------
    // 4. CTA PANEL
    // Larger than result panel — this is the focal point
    // Houses: product name, "by Elevate Co.", tagline, availability
    // ----------------------------------------------------------

    var ctaPanelTop = dividerY + 0.2;
    var ctaPanelBottom = ctaPanelTop + 2.2;
    var ctaPanelLeft = liveLeft + 0.1;
    var ctaPanelRight = liveRight - 0.1;

    var ctaPanel = makeRect(
        targetPage,
        ctaPanelTop,
        ctaPanelLeft,
        ctaPanelBottom,
        ctaPanelRight,
        panelBg,
        90,        // slightly more opaque than result panel — more prominent
        "Right Page - CTA Panel"
    );
    ctaPanel.sendToBack();
    createdCount++;

    // ----------------------------------------------------------
    // 5. GOLD TOP-EDGE ACCENT on CTA Panel
    // Same treatment as result panel — gold line along top edge
    // ----------------------------------------------------------

    var ctaAccentLine = makeLine(
        targetPage,
        ctaPanelTop,
        ctaPanelLeft,
        ctaPanelRight,
        gold,
        1.5,
        70,
        "Right Page - CTA Panel Top Accent"
    );
    createdCount++;

    // ----------------------------------------------------------
    // 6. GOLD ACCENT LINES flanking "by Elevate Co."
    // Short decorative lines — same concept as existing script
    // Positioned relative to CTA panel center
    // ----------------------------------------------------------

    var accentY = ctaPanelTop + 0.65;   // roughly where "by Elevate Co." sits
    var centerX = liveLeft + liveWidth / 2;

    var leftFlank = makeLine(
        targetPage,
        accentY,
        centerX - 2.0,
        centerX - 1.25,
        gold,
        0.5,
        60,
        "Right Page - Left Elevate Co Accent"
    );
    createdCount++;

    var rightFlank = makeLine(
        targetPage,
        accentY,
        centerX + 1.25,
        centerX + 2.0,
        gold,
        0.5,
        60,
        "Right Page - Right Elevate Co Accent"
    );
    createdCount++;

    // ----------------------------------------------------------
    // 7. SMOKE PLACEMENT GUIDE
    // One dashed gold outline showing where to place a single
    // gold smoke wisp along the bottom edge of the page.
    // Delete this guide after placing the actual smoke image.
    // ----------------------------------------------------------

    // Bottom smoke zone — wisp along bottom edge, adds warmth and dimension
    var bottomSmokeGuide = makeRect(
        targetPage,
        pageBottom - 1.75,
        pageLeft,
        pageBottom,
        pageRight,
        doc.swatches.itemByName("None"),
        100,
        "GUIDE - Bottom Smoke Zone (place wisp here, 40-50% opacity)"
    );
    bottomSmokeGuide.strokeWeight = 0.5;
    bottomSmokeGuide.strokeColor = gold;
    bottomSmokeGuide.strokeType = doc.strokeStyles.itemByName("Dashed");
    createdCount++;


    // ============================================================
    // RESULTS
    // ============================================================

    alert("RIGHT PAGE PANELS CREATED: " + createdCount + " items on PAGE 4\n\n" +
          "PANELS:\n" +
          "  1. Result Copy Panel (near-black, sharp corners)\n" +
          "  2. CTA Panel (near-black, sharp corners, slightly more opaque)\n\n" +
          "ACCENTS:\n" +
          "  3. Gold top-edge accent on Result Panel\n" +
          "  4. Gold top-edge accent on CTA Panel\n" +
          "  5. Gold hairline divider between panels\n" +
          "  6. Gold accent lines flanking 'by Elevate Co.'\n\n" +
          "SMOKE GUIDE (dashed gold outline):\n" +
          "  7. Bottom zone — along bottom edge (40-50% opacity)\n\n" +
          "HOW THESE DIFFER FROM TESTIMONIAL CARDS:\n" +
          "  - Sharp corners (no rounded)\n" +
          "  - No full border (gold accent on top edge only)\n" +
          "  - Darker fill (K:95 vs K:90)\n" +
          "  - Same visual family, different rank\n\n" +
          "NEXT STEPS:\n" +
          "1. Review on page 4, then move panels to page 11\n" +
          "2. Place a gold smoke wisp in the bottom guide zone\n" +
          "3. Delete the dashed guide rectangle after placing smoke\n" +
          "4. Arrange layer order: smoke behind panels, panels behind text");

})();
