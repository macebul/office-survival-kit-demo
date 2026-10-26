// ELEVATE Magazine — Cubicle Shank Spread Visual Elements
// Run this in InDesign via Window > Utilities > Scripts
//
// What this script does:
//   Creates ALL visual design elements for pages 10-11 that make
//   this spread look like a real magazine ad instead of text on black.
//
// Elements created on LEFT PAGE (Page 10):
//   1. Top scrim — dark gradient overlay behind "THE CUBICLE SHANK" product name
//   2. Headline scrim — dark gradient overlay behind the headline area
//   3. Three testimonial card background panels (dark gray with gold border)
//   4. Gold hairline rule between body copy and testimonials
//   5. Decorative gold open-quote marks behind each testimonial
//
// Elements created on RIGHT PAGE (Page 11):
//   6. Gold hairline rule above the CTA block
//   7. Dark panel with gold border behind the CTA product name
//   8. Thin gold accent lines flanking "by Elevate Co."
//   9. Subtle border treatment on Before/After photo areas
//
// IMPORTANT: After running this script, you will need to:
//   - Arrange layer order (Object > Arrange) so panels are behind text
//   - Position your text frames and images on top of these elements
//   - The script creates elements at approximate positions — nudge as needed

#target indesign

(function() {
    var doc = app.activeDocument;

    // ============================================================
    // FIND PAGES 10 AND 11
    // ============================================================

    var page10 = null;
    var page11 = null;
    for (var i = 0; i < doc.pages.length; i++) {
        if (doc.pages[i].name === "10") page10 = doc.pages[i];
        if (doc.pages[i].name === "11") page11 = doc.pages[i];
    }

    if (!page10 || !page11) {
        alert("Could not find pages 10 and 11.\nMake sure the Cubicle Shank spread is on pages 10-11.");
        return;
    }

    // Page bounds [top, left, bottom, right]
    var b10 = page10.bounds;
    var b11 = page11.bounds;

    // Page 10 edges
    var p10Top = b10[0];
    var p10Left = b10[1];
    var p10Bottom = b10[2];
    var p10Right = b10[3];

    // Page 11 edges
    var p11Top = b11[0];
    var p11Left = b11[1];
    var p11Bottom = b11[2];
    var p11Right = b11[3];

    // Margins
    var marginTop = 0.5;
    var marginBottom = 0.5;
    var marginLeft = 0.5;
    var marginGutter = 0.25; // inside margin

    // Helper: ensure a swatch exists
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

    // Ensure swatches we need
    var matteBlack = ensureSwatch("Matte Black", 0, 0, 0, 100);
    var gold = ensureSwatch("Gold", 0, 15, 80, 10);
    var charcoal = ensureSwatch("Charcoal", 0, 0, 0, 85);
    var warmGray40 = ensureSwatch("Warm Gray 40", 0, 3, 5, 25);
    var signalOrange = ensureSwatch("Signal Orange", 0, 60, 100, 0);

    // A slightly lighter dark for card backgrounds
    var cardBg = null;
    try {
        cardBg = doc.colors.itemByName("Card Dark");
        if (!cardBg.isValid) throw "not found";
    } catch(e) {
        cardBg = doc.colors.add();
        cardBg.name = "Card Dark";
        cardBg.model = ColorModel.PROCESS;
        cardBg.space = ColorSpace.CMYK;
        cardBg.colorValue = [0, 0, 0, 90]; // slightly lighter than Matte Black
    }

    // Helper: create a rectangle with common settings
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

    // Helper: create a line
    function makeLine(page, y, xStart, xEnd, strokeColor, weight, label) {
        var line = page.graphicLines.add();
        line.paths[0].entirePath = [[xStart, y], [xEnd, y]];
        line.strokeWeight = weight;
        line.strokeColor = strokeColor;
        line.fillColor = doc.swatches.itemByName("None");
        line.transparencySettings.dropShadowSettings.mode = ShadowMode.NONE;
        line.label = label || "";
        return line;
    }

    var createdCount = 0;

    // ============================================================
    // LEFT PAGE (Page 10) ELEMENTS
    // ============================================================

    // ----------------------------------------------------------
    // 1. TOP SCRIM — behind "THE CUBICLE SHANK" product name
    // Dark overlay at top of page, fading down
    // ----------------------------------------------------------
    var topScrim = makeRect(
        page10,
        p10Top,                    // top: trim edge
        p10Left,                   // left: trim edge
        p10Top + 2.75,             // bottom: 2.75" down
        p10Right,                  // right: full page width
        matteBlack,
        75,                        // 75% opacity
        "Top Scrim - Product Name"
    );
    // Apply gradient feather so it fades at the bottom
    try {
        topScrim.gradientFeatherSettings.applied = true;
        topScrim.gradientFeatherSettings.type = GradientType.LINEAR;
        topScrim.gradientFeatherSettings.angle = 90;
    } catch(e) {}
    topScrim.sendToBack();
    try { topScrim.bringForward(); } catch(e) {}
    createdCount++;

    // ----------------------------------------------------------
    // 2. HEADLINE SCRIM — behind the headline and body copy
    // Dark overlay in the middle zone where headline sits
    // ----------------------------------------------------------
    var headlineScrim = makeRect(
        page10,
        p10Top + 4.0,              // top: starts at 4" (where headline area begins)
        p10Left,                   // left: trim edge
        p10Top + 6.75,             // bottom: extends to 6.75" (covers headline + body)
        p10Right,                  // right: full page width
        matteBlack,
        65,                        // 65% opacity (lighter than top scrim)
        "Headline Scrim"
    );
    // Gradient feather on both top and bottom edges
    try {
        headlineScrim.gradientFeatherSettings.applied = true;
        headlineScrim.gradientFeatherSettings.type = GradientType.LINEAR;
        headlineScrim.gradientFeatherSettings.angle = 90;
    } catch(e) {}
    headlineScrim.sendToBack();
    try { headlineScrim.bringForward(); } catch(e) {}
    createdCount++;

    // ----------------------------------------------------------
    // 3. GOLD HAIRLINE RULE — between body copy and testimonials
    // ----------------------------------------------------------
    var bodyTestimonialRule = makeLine(
        page10,
        p10Top + 7.0,                          // Y position: below body copy
        p10Left + marginLeft,                   // start at left margin
        p10Left + marginLeft + 3.0,             // 3" wide (not full width — elegant)
        gold,
        0.5,                                    // 0.5pt hairline
        "Gold Rule - Body to Testimonials"
    );
    createdCount++;

    // ----------------------------------------------------------
    // 4. TESTIMONIAL CARD PANELS — three dark panels with gold border
    // Each card: full width, ~1.15" tall, Card Dark fill, 1pt gold stroke
    // ----------------------------------------------------------

    var cardLeft = p10Left + marginLeft;
    var cardRight = p10Right - marginGutter;
    var cardWidth = cardRight - cardLeft;
    var cardHeight = 1.15;
    var cardGap = 0.15;
    var card1Top = p10Top + 7.25;

    // Card 1 — Darnell
    var card1 = makeRect(
        page10,
        card1Top,
        cardLeft,
        card1Top + cardHeight,
        cardRight,
        cardBg,
        100,
        "Testimonial Card - Darnell"
    );
    card1.strokeWeight = 0.75;
    card1.strokeColor = gold;
    // Rounded corners
    try {
        card1.topLeftCornerOption = CornerOptions.ROUNDED_CORNER;
        card1.topRightCornerOption = CornerOptions.ROUNDED_CORNER;
        card1.bottomLeftCornerOption = CornerOptions.ROUNDED_CORNER;
        card1.bottomRightCornerOption = CornerOptions.ROUNDED_CORNER;
        card1.topLeftCornerRadius = 0.08;
        card1.topRightCornerRadius = 0.08;
        card1.bottomLeftCornerRadius = 0.08;
        card1.bottomRightCornerRadius = 0.08;
    } catch(e) {}
    card1.sendToBack();
    try { card1.bringForward(); } catch(e) {}
    createdCount++;

    // Card 2 — Megan
    var card2Top = card1Top + cardHeight + cardGap;
    var card2 = makeRect(
        page10,
        card2Top,
        cardLeft,
        card2Top + cardHeight,
        cardRight,
        cardBg,
        100,
        "Testimonial Card - Megan"
    );
    card2.strokeWeight = 0.75;
    card2.strokeColor = gold;
    try {
        card2.topLeftCornerOption = CornerOptions.ROUNDED_CORNER;
        card2.topRightCornerOption = CornerOptions.ROUNDED_CORNER;
        card2.bottomLeftCornerOption = CornerOptions.ROUNDED_CORNER;
        card2.bottomRightCornerOption = CornerOptions.ROUNDED_CORNER;
        card2.topLeftCornerRadius = 0.08;
        card2.topRightCornerRadius = 0.08;
        card2.bottomLeftCornerRadius = 0.08;
        card2.bottomRightCornerRadius = 0.08;
    } catch(e) {}
    card2.sendToBack();
    try { card2.bringForward(); } catch(e) {}
    createdCount++;

    // Card 3 — Dave
    var card3Top = card2Top + cardHeight + cardGap;
    var card3 = makeRect(
        page10,
        card3Top,
        cardLeft,
        card3Top + cardHeight,
        cardRight,
        cardBg,
        100,
        "Testimonial Card - Dave"
    );
    card3.strokeWeight = 0.75;
    card3.strokeColor = gold;
    try {
        card3.topLeftCornerOption = CornerOptions.ROUNDED_CORNER;
        card3.topRightCornerOption = CornerOptions.ROUNDED_CORNER;
        card3.bottomLeftCornerOption = CornerOptions.ROUNDED_CORNER;
        card3.bottomRightCornerOption = CornerOptions.ROUNDED_CORNER;
        card3.topLeftCornerRadius = 0.08;
        card3.topRightCornerRadius = 0.08;
        card3.bottomLeftCornerRadius = 0.08;
        card3.bottomRightCornerRadius = 0.08;
    } catch(e) {}
    card3.sendToBack();
    try { card3.bringForward(); } catch(e) {}
    createdCount++;

    // ----------------------------------------------------------
    // 5. DECORATIVE GOLD QUOTE MARKS — large, low-opacity
    // One per card, positioned at the left edge behind the quote text
    // ----------------------------------------------------------

    function makeQuoteMark(page, top, left, label) {
        var tf = page.textFrames.add();
        tf.geometricBounds = [top, left, top + 0.8, left + 0.6];
        tf.contents = "\u201C"; // left double quotation mark
        tf.parentStory.texts[0].pointSize = 72;
        tf.parentStory.texts[0].leading = 72;
        try {
            tf.parentStory.texts[0].appliedFont = app.fonts.itemByName("Freight Display Pro\tBold");
        } catch(e) {
            try {
                tf.parentStory.texts[0].appliedFont = "Freight Display Pro";
                tf.parentStory.texts[0].fontStyle = "Bold";
            } catch(e2) {}
        }
        tf.parentStory.texts[0].fillColor = gold;
        tf.transparencySettings.blendingSettings.opacity = 20;
        tf.textFramePreferences.verticalJustification = VerticalJustification.TOP_ALIGN;
        tf.fillColor = doc.swatches.itemByName("None");
        tf.strokeColor = doc.swatches.itemByName("None");
        tf.transparencySettings.dropShadowSettings.mode = ShadowMode.NONE;
        tf.label = label || "";
        return tf;
    }

    // Quote marks positioned at the left inside each card
    var qm1 = makeQuoteMark(page10, card1Top + 0.05, cardLeft + 0.1, "Quote Mark - Darnell");
    qm1.sendToBack();
    try { qm1.bringForward(); qm1.bringForward(); } catch(e) {}
    createdCount++;

    var qm2 = makeQuoteMark(page10, card2Top + 0.05, cardLeft + 0.1, "Quote Mark - Megan");
    qm2.sendToBack();
    try { qm2.bringForward(); qm2.bringForward(); } catch(e) {}
    createdCount++;

    var qm3 = makeQuoteMark(page10, card3Top + 0.05, cardLeft + 0.1, "Quote Mark - Dave");
    qm3.sendToBack();
    try { qm3.bringForward(); qm3.bringForward(); } catch(e) {}
    createdCount++;


    // ============================================================
    // RIGHT PAGE (Page 11) ELEMENTS
    // ============================================================

    // ----------------------------------------------------------
    // 6. BEFORE/AFTER PHOTO BORDERS — subtle dark panels with border
    // ----------------------------------------------------------

    var photoTop = p11Top + 1.25;     // below "REAL RESULTS. REAL KYLE."
    var photoHeight = 4.0;
    var photoGap = 0.3;
    var photoWidth = 3.4;
    var photosLeft = p11Left + marginGutter + 0.15;

    // Before photo border
    var beforeBorder = makeRect(
        page11,
        photoTop,
        photosLeft,
        photoTop + photoHeight,
        photosLeft + photoWidth,
        doc.swatches.itemByName("None"),
        100,
        "Before Photo Border"
    );
    beforeBorder.strokeWeight = 1.0;
    beforeBorder.strokeColor = warmGray40;
    beforeBorder.sendToBack();
    try { beforeBorder.bringForward(); } catch(e) {}
    createdCount++;

    // After photo border
    var afterLeft = photosLeft + photoWidth + photoGap;
    var afterBorder = makeRect(
        page11,
        photoTop,
        afterLeft,
        photoTop + photoHeight,
        afterLeft + photoWidth,
        doc.swatches.itemByName("None"),
        100,
        "After Photo Border"
    );
    afterBorder.strokeWeight = 1.0;
    afterBorder.strokeColor = warmGray40;
    afterBorder.sendToBack();
    try { afterBorder.bringForward(); } catch(e) {}
    createdCount++;

    // ----------------------------------------------------------
    // 7. GOLD HAIRLINE RULE — above CTA block
    // Centered, 60% of text column width
    // ----------------------------------------------------------

    var ctaRuleY = p11Top + 7.0;
    var p11LiveLeft = p11Left + marginGutter;
    var p11LiveRight = p11Right - marginLeft;
    var p11LiveWidth = p11LiveRight - p11LiveLeft;
    var ruleWidth = p11LiveWidth * 0.6;
    var ruleLeftStart = p11LiveLeft + (p11LiveWidth - ruleWidth) / 2;

    var ctaRule = makeLine(
        page11,
        ctaRuleY,
        ruleLeftStart,
        ruleLeftStart + ruleWidth,
        gold,
        0.75,
        "Gold Rule - Above CTA"
    );
    createdCount++;

    // ----------------------------------------------------------
    // 8. CTA PANEL — dark panel with gold border behind product name
    // Centered, enough width for "THE EXECUTIVE TACTICAL STYLUS"
    // ----------------------------------------------------------

    var ctaPanelWidth = 5.0;
    var ctaPanelLeft = p11LiveLeft + (p11LiveWidth - ctaPanelWidth) / 2;
    var ctaPanelTop = p11Top + 7.25;
    var ctaPanelHeight = 0.45;

    var ctaPanel = makeRect(
        page11,
        ctaPanelTop,
        ctaPanelLeft,
        ctaPanelTop + ctaPanelHeight,
        ctaPanelLeft + ctaPanelWidth,
        cardBg,
        100,
        "CTA Product Name Panel"
    );
    ctaPanel.strokeWeight = 0.75;
    ctaPanel.strokeColor = gold;
    // Rounded corners
    try {
        ctaPanel.topLeftCornerOption = CornerOptions.ROUNDED_CORNER;
        ctaPanel.topRightCornerOption = CornerOptions.ROUNDED_CORNER;
        ctaPanel.bottomLeftCornerOption = CornerOptions.ROUNDED_CORNER;
        ctaPanel.bottomRightCornerOption = CornerOptions.ROUNDED_CORNER;
        ctaPanel.topLeftCornerRadius = 0.06;
        ctaPanel.topRightCornerRadius = 0.06;
        ctaPanel.bottomLeftCornerRadius = 0.06;
        ctaPanel.bottomRightCornerRadius = 0.06;
    } catch(e) {}
    ctaPanel.sendToBack();
    try { ctaPanel.bringForward(); } catch(e) {}
    createdCount++;

    // ----------------------------------------------------------
    // 9. DECORATIVE GOLD ACCENT LINES — flanking "by Elevate Co."
    // Two short horizontal lines on either side of the text
    // ----------------------------------------------------------

    var accentY = p11Top + 7.95;
    var accentWidth = 0.75;
    var centerX = p11LiveLeft + p11LiveWidth / 2;

    // Left accent line
    var leftAccent = makeLine(
        page11,
        accentY,
        centerX - 2.0,
        centerX - 1.25,
        gold,
        0.5,
        "Gold Accent - Left of Elevate Co"
    );
    createdCount++;

    // Right accent line
    var rightAccent = makeLine(
        page11,
        accentY,
        centerX + 1.25,
        centerX + 2.0,
        gold,
        0.5,
        "Gold Accent - Right of Elevate Co"
    );
    createdCount++;

    // ----------------------------------------------------------
    // 10. BOTTOM SCRIM on Right Page — subtle dark area for disclaimers
    // ----------------------------------------------------------
    var bottomScrim = makeRect(
        page11,
        p11Bottom - 2.0,           // starts 2" from bottom
        p11Left,                    // full width
        p11Bottom,                  // to bottom trim
        p11Right,
        matteBlack,
        40,                         // subtle 40% opacity
        "Bottom Scrim - Disclaimers"
    );
    try {
        bottomScrim.gradientFeatherSettings.applied = true;
        bottomScrim.gradientFeatherSettings.type = GradientType.LINEAR;
        bottomScrim.gradientFeatherSettings.angle = -90; // fades upward
    } catch(e) {}
    bottomScrim.sendToBack();
    try { bottomScrim.bringForward(); } catch(e) {}
    createdCount++;


    // ============================================================
    // RESULTS
    // ============================================================

    alert("SPREAD ELEMENTS CREATED: " + createdCount + " items\n\n" +
          "LEFT PAGE (10):\n" +
          "  - Top scrim (behind product name)\n" +
          "  - Headline scrim (behind headline area)\n" +
          "  - 3 testimonial card panels (dark bg + gold border)\n" +
          "  - 3 decorative gold quote marks\n" +
          "  - Gold hairline rule (body to testimonials)\n\n" +
          "RIGHT PAGE (11):\n" +
          "  - 2 Before/After photo borders\n" +
          "  - Gold hairline rule (above CTA)\n" +
          "  - CTA product name panel (dark bg + gold border)\n" +
          "  - 2 gold accent lines (flanking Elevate Co.)\n" +
          "  - Bottom scrim (disclaimer area)\n\n" +
          "NEXT STEPS:\n" +
          "1. Check layer order — panels should be BEHIND text/images\n" +
          "   Use Object > Arrange > Send Backward/Bring Forward\n" +
          "2. Position your text frames INSIDE the testimonial cards\n" +
          "   Portrait circle (1\" dia) on the left, quote to the right\n" +
          "3. Position CTA text centered inside the CTA panel\n" +
          "4. Nudge any element that needs fine-tuning\n\n" +
          "All elements are labeled — use the Layers panel to find them.");

})();
