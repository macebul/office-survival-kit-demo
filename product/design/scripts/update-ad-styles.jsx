// ELEVATE Magazine — Ad Style Size Update Script (v3)
// Run this in InDesign via Window > Utilities > Scripts
//
// What this script does:
//   Updates paragraph style sizes for the Cubicle Shank ad spread (pp. 10-11).
//   v3: Pushes body, testimonial, and fine print even larger for comfortable
//   reading at actual print scale. The cards have room — use it.
//
// Changes from original spec → v3:
//   - Ad Headline: 54/50pt → 42/40pt (good — no change)
//   - Ad Subhead: 18/22pt → 24/28pt (bigger presence)
//   - Ad Body: 11/15pt → 15/20pt (comfortable reading)
//   - Ad Testimonial: 11/15pt → 14/18pt (fills the cards properly)
//   - Ad Testimonial Attribution: 7.5/10pt → 11/14pt (no squinting)
//   - Ad CTA: 13/15pt → 18/20pt (product name demands attention)
//   - Ad Fine Print: 6/8pt → 10/13pt (the comedy MUST land)
//   - Legal Fine Print: 5.5/7.5pt → 9/11pt (readable)
//   - Callout Label: 10/12pt → 13/15pt (BEFORE/AFTER labels)

#target indesign

(function() {
    var doc = app.activeDocument;
    var changes = [];
    var errors = [];

    function findStyle(name) {
        for (var i = 0; i < doc.paragraphStyles.length; i++) {
            if (doc.paragraphStyles[i].name === name) {
                return doc.paragraphStyles[i];
            }
        }
        for (var g = 0; g < doc.paragraphStyleGroups.length; g++) {
            var group = doc.paragraphStyleGroups[g];
            for (var j = 0; j < group.paragraphStyles.length; j++) {
                if (group.paragraphStyles[j].name === name) {
                    return group.paragraphStyles[j];
                }
            }
        }
        return null;
    }

    function updateStyle(name, newSize, newLeading) {
        var style = findStyle(name);
        if (!style) {
            errors.push("NOT FOUND: " + name);
            return;
        }

        var oldSize = style.pointSize;
        var oldLeading;
        try { oldLeading = style.leading; } catch(e) { oldLeading = "auto"; }

        style.pointSize = newSize;
        style.leading = newLeading;

        changes.push(name + ": " + oldSize + "/" + oldLeading + " -> " + newSize + "/" + newLeading);
    }

    // ============================================================
    // AD STYLE UPDATES (v3 — comfortable reading at print scale)
    // ============================================================

    // Ad Headline: 42/40pt — no change, reads well
    updateStyle("Ad Headline", 42, 40);

    // Ad Subhead: → 24/28pt
    updateStyle("Ad Subhead", 24, 28);

    // Ad Body: → 15/20pt
    updateStyle("Ad Body", 15, 20);

    // Ad Testimonial: → 14/18pt
    updateStyle("Ad Testimonial", 14, 18);

    // Ad Testimonial Attribution: → 11/14pt
    updateStyle("Ad Testimonial Attribution", 11, 14);

    // Ad CTA: → 18/20pt
    updateStyle("Ad CTA", 18, 20);

    // Ad Fine Print: → 10/13pt
    updateStyle("Ad Fine Print", 10, 13);

    // Legal Fine Print: → 9/11pt
    updateStyle("Legal Fine Print", 9, 11);

    // Callout Label: → 13/15pt
    updateStyle("Callout Label", 13, 15);

    // ============================================================
    // RESULTS
    // ============================================================

    var msg = "AD STYLE UPDATE v3 COMPLETE\n\n";
    msg += "Updated " + changes.length + " styles:\n";
    for (var c = 0; c < changes.length; c++) {
        msg += "  > " + changes[c] + "\n";
    }

    if (errors.length > 0) {
        msg += "\n! " + errors.length + " style(s) not found:\n";
        for (var e = 0; e < errors.length; e++) {
            msg += "  X " + errors[e] + "\n";
        }
    }

    msg += "\n\nText frames may need resizing to fit the larger type.";

    alert(msg);

})();
