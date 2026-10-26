// ELEVATE Magazine — Create Dark Scrim Overlay
// Run this in InDesign via Window > Utilities > Scripts
//
// What this script does:
//   Creates a semi-transparent dark rectangle in the upper-left area
//   of page 10 (left page of the Cubicle Shank spread) to darken
//   the hero image behind the "THE CUBICLE SHANK" product name text.
//
// The rectangle:
//   - Filled with Matte Black (K:100)
//   - 70% opacity
//   - No stroke, no drop shadow
//   - Positioned at the top of the page, spanning the upper portion
//   - Sent behind all text frames but above the hero image

#target indesign

(function() {
    var doc = app.activeDocument;

    // Find page 10 (the left page of the spread)
    // InDesign pages are 0-indexed internally but named starting from 1
    var targetPage = null;
    for (var i = 0; i < doc.pages.length; i++) {
        if (doc.pages[i].name === "10") {
            targetPage = doc.pages[i];
            break;
        }
    }

    if (!targetPage) {
        alert("Could not find page 10. Make sure the Cubicle Shank spread is on pages 10-11.");
        return;
    }

    // Get page bounds [top, left, bottom, right]
    var bounds = targetPage.bounds;
    var pageTop = bounds[0];
    var pageLeft = bounds[1];
    var pageBottom = bounds[2];
    var pageRight = bounds[3];

    // Create the scrim rectangle
    // Covers the top portion of the page where the product name will sit
    // Extends from top trim to about 2.5" down, full page width
    var scrim = targetPage.rectangles.add();

    // Position: full width, top 2.5 inches of the page
    scrim.geometricBounds = [
        pageTop,           // top (trim edge)
        pageLeft,          // left (trim edge)
        pageTop + 2.5,     // bottom (2.5" down from top)
        pageRight           // right (full page width)
    ];

    // Fill with Matte Black
    try {
        scrim.fillColor = doc.swatches.itemByName("Matte Black");
    } catch(e) {
        // Fallback: create the swatch if it doesn't exist
        var swatch = doc.colors.add();
        swatch.name = "Matte Black";
        swatch.model = ColorModel.PROCESS;
        swatch.space = ColorSpace.CMYK;
        swatch.colorValue = [0, 0, 0, 100];
        scrim.fillColor = swatch;
    }

    // No stroke
    scrim.strokeWeight = 0;
    scrim.strokeColor = doc.swatches.itemByName("None");

    // Set opacity to 70%
    scrim.transparencySettings.blendingSettings.opacity = 70;

    // Remove any drop shadow (make sure it's clean)
    scrim.transparencySettings.dropShadowSettings.mode = ShadowMode.NONE;

    // Apply a gradient feather on the bottom edge so it fades out
    // This makes the scrim blend smoothly into the hero image below
    try {
        scrim.gradientFeatherSettings.applied = true;
        scrim.gradientFeatherSettings.type = GradientType.LINEAR;
        scrim.gradientFeatherSettings.angle = 90; // top to bottom
        // The gradient feather goes from opaque at top to transparent at bottom
        scrim.gradientFeatherSettings.opacitySourcePoint = 50; // start fading at 50%
        scrim.gradientFeatherSettings.length = 1.5; // fade over 1.5 inches
    } catch(e) {
        // Gradient feather may not be available in all versions
        // The flat opacity rectangle still works fine
    }

    // Name it for easy identification
    scrim.label = "Hero Scrim Overlay";

    // Send it backward — it should be above the hero image but below text
    // We'll send it to the back first, then bring it forward once
    scrim.sendToBack();
    // Bring forward once to sit above the background/hero image
    try {
        scrim.bringForward();
    } catch(e) {}

    alert("Scrim overlay created on page 10.\n\n" +
          "• Matte Black fill at 70% opacity\n" +
          "• Covers top 2.5\" of the page, full width\n" +
          "• Gradient feather on bottom edge\n" +
          "• No stroke, no drop shadow\n\n" +
          "Layer order: The scrim should be ABOVE the hero image\n" +
          "but BELOW the product name text.\n\n" +
          "If the layer order is wrong, select the scrim and use:\n" +
          "Object > Arrange > Send Backward (or Bring Forward)\n" +
          "until it sits between the image and the text.");

})();
