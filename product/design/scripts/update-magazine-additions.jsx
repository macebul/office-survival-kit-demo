// ELEVATE Magazine — Update Script: Missing Styles & Swatches
// Run this in InDesign via Window > Utilities > Scripts
// Run AFTER create-magazine-styles.jsx and create-magazine-char-styles.jsx
//
// What this script does:
//   1. Creates all 14 CMYK color swatches (idempotent — skips existing)
//   2. Adds "Cover Teaser Page" paragraph style to Headlines & Labels
//   3. Adds "Redacted" paragraph style to Data & Fine Print
//
// These additions were identified in the cross-format review (May 25, 2026)
// and added to the InDesign Reference but were not in the original scripts.

#target indesign

(function() {
    var doc = app.activeDocument;

    // ============================================================
    // 1. COLOR SWATCHES
    // ============================================================
    // Creates all named CMYK swatches from the InDesign Reference
    // Section 3. Safe to re-run — skips any swatch that already exists.

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

    // Primary Palette
    ensureSwatch("Matte Black",         0,  0,  0, 100);
    ensureSwatch("Cream",               3,  5, 10,   0);
    ensureSwatch("Gold",                0, 15, 80,  10);
    ensureSwatch("Charcoal",            0,  0,  0,  85);
    // "White" uses [Paper] — no custom swatch needed

    // Accent Palette
    ensureSwatch("Purple",             60, 80,  0,   0);
    ensureSwatch("Classified Red",      0,100, 90,  10);
    ensureSwatch("Signal Orange",       0, 60,100,   0);
    ensureSwatch("Highlight Yellow",    0,  5, 90,   0);
    ensureSwatch("Institutional Teal", 80,  0, 30,  20);

    // Utility Swatches
    ensureSwatch("Warm Gray 80",        0,  5, 10,  50);
    ensureSwatch("Warm Gray 40",        0,  3,  5,  25);
    ensureSwatch("Warm Gray 15",        0,  2,  4,  12);

    // Rich Black — for dark page background rectangles only, never for text
    ensureSwatch("Rich Black",         60, 40, 20, 100);

    alert("Swatches: 14 CMYK swatches verified/created.");

    // ============================================================
    // 2. PARAGRAPH STYLES — ADDITIONS
    // ============================================================

    // Helper: get or create a style group (folder)
    function getOrCreateGroup(name) {
        for (var i = 0; i < doc.paragraphStyleGroups.length; i++) {
            if (doc.paragraphStyleGroups[i].name === name) {
                return doc.paragraphStyleGroups[i];
            }
        }
        var g = doc.paragraphStyleGroups.add();
        g.name = name;
        return g;
    }

    // Helper: create a paragraph style in a group (idempotent)
    function createStyle(group, name, props) {
        var style = null;

        // Check if style already exists in group
        for (var i = 0; i < group.paragraphStyles.length; i++) {
            if (group.paragraphStyles[i].name === name) {
                style = group.paragraphStyles[i];
                break;
            }
        }

        if (!style) {
            style = group.paragraphStyles.add();
            style.name = name;
        }

        // Apply properties
        if (props.fontFamily) {
            try {
                style.appliedFont = app.fonts.itemByName(props.fontFamily);
                if (!style.appliedFont.isValid) {
                    style.appliedFont = props.fontFamily;
                }
            } catch(e) {
                try {
                    style.appliedFont = props.fontFamily;
                } catch(e2) {}
            }
        }

        if (props.fontStyle) {
            try { style.fontStyle = props.fontStyle; } catch(e) {}
        }
        if (props.pointSize) style.pointSize = props.pointSize;
        if (props.leading !== undefined) {
            if (props.leading === "auto") {
                style.leading = Leading.AUTO;
            } else {
                style.leading = props.leading;
            }
        }
        if (props.tracking !== undefined) style.tracking = props.tracking;
        if (props.capitalization) style.capitalization = props.capitalization;
        if (props.fillColor) {
            try {
                style.fillColor = doc.swatches.itemByName(props.fillColor);
            } catch(e) {}
        }
        if (props.justification) style.justification = props.justification;
        if (props.spaceBefore !== undefined) style.spaceBefore = props.spaceBefore;
        if (props.spaceAfter !== undefined) style.spaceAfter = props.spaceAfter;
        if (props.firstLineIndent !== undefined) style.firstLineIndent = props.firstLineIndent;
        if (props.leftIndent !== undefined) style.leftIndent = props.leftIndent;
        if (props.rightIndent !== undefined) style.rightIndent = props.rightIndent;
        if (props.hyphenation !== undefined) style.hyphenation = props.hyphenation;
        if (props.keepWithNext !== undefined) style.keepWithNext = props.keepWithNext;

        // Strikethrough
        if (props.strikeThru) {
            try {
                style.strikeThru = true;
                if (props.strikeThroughWeight) style.strikeThroughWeight = props.strikeThroughWeight;
                if (props.strikeThroughColor) {
                    style.strikeThroughColor = doc.swatches.itemByName(props.strikeThroughColor);
                }
                if (props.strikeThroughOffset !== undefined) style.strikeThroughOffset = props.strikeThroughOffset;
            } catch(e) {}
        }

        return style;
    }

    // -------------------------------------------------------
    // Cover Teaser Page
    // Headlines & Labels folder
    // Spec: IBM Plex Mono Regular, 8/10pt, Gold, +50 tracking
    // Used for page references below cover teasers ("p. 12")
    // -------------------------------------------------------

    var grpHeadlines = getOrCreateGroup("Headlines & Labels");

    createStyle(grpHeadlines, "Cover Teaser Page", {
        fontFamily: "IBM Plex Mono",
        fontStyle: "Regular",
        pointSize: 8,
        leading: 10,
        tracking: 50,
        capitalization: Capitalization.NORMAL,
        justification: Justification.LEFT_ALIGN,
        spaceBefore: 0,
        spaceAfter: 12,
        fillColor: "Gold",
        hyphenation: false
    });

    // -------------------------------------------------------
    // Redacted
    // Data & Fine Print folder
    // Spec: IBM Plex Mono Bold, 9/12pt, Matte Black text,
    //       120% strikethrough in Matte Black to obscure text
    // Used for [REDACTED] fields on evidence page (p. 27)
    // -------------------------------------------------------

    var grpData = getOrCreateGroup("Data & Fine Print");

    createStyle(grpData, "Redacted", {
        fontFamily: "IBM Plex Mono",
        fontStyle: "Bold",
        pointSize: 9,
        leading: 12,
        tracking: 0,
        capitalization: Capitalization.NORMAL,
        justification: Justification.LEFT_ALIGN,
        fillColor: "Matte Black",
        hyphenation: false,
        strikeThru: true,
        strikeThroughWeight: "10.8pt",  // 120% of 9pt
        strikeThroughColor: "Matte Black",
        strikeThroughOffset: 0
    });

    alert("Styles: 'Cover Teaser Page' and 'Redacted' paragraph styles verified/created.\n\nDone! The InDesign file now has all 14 swatches and 50 paragraph styles.");

})();
