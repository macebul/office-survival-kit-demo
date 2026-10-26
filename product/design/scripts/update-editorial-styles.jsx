// ELEVATE Magazine — Editorial Style Size Update Script
// Run this in InDesign via Window > Utilities > Scripts
//
// What this script does:
//   Updates paragraph style sizes for feature article spreads (pp. 4-5 etc.)
//   to be comfortably readable at actual print scale. The ad styles were
//   already bumped in update-ad-styles.jsx — this does the same for editorial.
//
// Changes from original spec → updated:
//   - Article Deck: 14/19pt → 18/24pt (needs presence below headline)
//   - Article Byline: 9/11pt → 11/14pt (readable, not squinting)
//   - Body: 12/15pt → 14/18pt (comfortable reading at booklet scale)
//   - Body - First Paragraph: 12/15pt → 14/18pt (matches Body)
//   - Body - Editor Letter: 12/15pt → 14/18pt (matches Body)
//   - Article Subhead: 14/17pt → 18/21pt (clear section breaks)
//   - Article Subhead 2: 12/15pt → 14/18pt (matches body weight)
//   - Brad Quote: 12/16pt → 15/20pt (quotes should breathe)
//   - Brad Quote Attribution: 8/10pt → 10/13pt (readable)
//   - Pull Quote: 24/30pt → 28/34pt (more presence)
//   - Pull Quote Attribution: 9/11pt → 11/14pt (readable)
//   - Caption: 8/11pt → 9/12pt (slight bump, captions stay small)
//   - Callout Box Text: 10/14pt → 13/17pt (readable in callout boxes)
//   - Section Label: 10/12pt → 12/15pt (slightly more presence)

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
    // EDITORIAL STYLE UPDATES
    // ============================================================

    // Article Deck: 14/19pt → 18/24pt
    updateStyle("Article Deck", 18, 24);

    // Article Byline: 9/11pt → 11/14pt
    updateStyle("Article Byline", 11, 14);

    // Body: 12/15pt → 14/18pt
    updateStyle("Body", 14, 18);

    // Body - First Paragraph: 12/15pt → 14/18pt
    updateStyle("Body - First Paragraph", 14, 18);

    // Body - Editor Letter: 12/15pt → 14/18pt
    updateStyle("Body - Editor Letter", 14, 18);

    // Article Subhead: 14/17pt → 18/21pt
    updateStyle("Article Subhead", 18, 21);

    // Article Subhead 2: 12/15pt → 14/18pt
    updateStyle("Article Subhead 2", 14, 18);

    // Brad Quote: 12/16pt → 15/20pt
    updateStyle("Brad Quote", 15, 20);

    // Brad Quote Attribution: 8/10pt → 10/13pt
    updateStyle("Brad Quote Attribution", 10, 13);

    // Pull Quote: 24/30pt → 28/34pt
    updateStyle("Pull Quote", 28, 34);

    // Pull Quote Attribution: 9/11pt → 11/14pt
    updateStyle("Pull Quote Attribution", 11, 14);

    // Caption: 8/11pt → 9/12pt
    updateStyle("Caption", 9, 12);

    // Callout Box Text: 10/14pt → 13/17pt
    updateStyle("Callout Box Text", 13, 17);

    // Section Label: 10/12pt → 12/15pt
    updateStyle("Section Label", 12, 15);

    // ============================================================
    // RESULTS
    // ============================================================

    var msg = "EDITORIAL STYLE UPDATE COMPLETE\n\n";
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
