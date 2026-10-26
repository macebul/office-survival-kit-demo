// ELEVATE Magazine — Paragraph Style Generator
// Run this in InDesign via Window > Utilities > Scripts
// Creates all paragraph styles organized in folders

#target indesign

(function() {
    var doc = app.activeDocument;

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

    // Helper: create a paragraph style in a group
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
        // Always reset spacing and indents to 0 (prevents unit-conversion issues)
        style.spaceBefore = 0;
        style.spaceAfter = 0;
        style.firstLineIndent = 0;
        style.leftIndent = 0;
        style.rightIndent = 0;
        if (props.hyphenation !== undefined) style.hyphenation = props.hyphenation;
        if (props.keepWithNext !== undefined) style.keepWithNext = props.keepWithNext;

        // Based on
        if (props.basedOn) {
            try {
                for (var j = 0; j < group.paragraphStyles.length; j++) {
                    if (group.paragraphStyles[j].name === props.basedOn) {
                        style.basedOn = group.paragraphStyles[j];
                        break;
                    }
                }
            } catch(e) {}
        }

        // Rule below
        if (props.ruleBelow) {
            try {
                style.ruleBelow = true;
                if (props.ruleBelowWeight) style.ruleBelowLineWeight = props.ruleBelowWeight;
                if (props.ruleBelowColor) {
                    style.ruleBelowColor = doc.swatches.itemByName(props.ruleBelowColor);
                }
                if (props.ruleBelowOffset) style.ruleBelowOffset = props.ruleBelowOffset;
            } catch(e) {}
        }

        return style;
    }

    // ============================================================
    // CREATE STYLE GROUPS (FOLDERS)
    // ============================================================

    var grpBody = getOrCreateGroup("Body & Editorial");
    var grpHeadlines = getOrCreateGroup("Headlines & Labels");
    var grpQuotes = getOrCreateGroup("Quotes & Callouts");
    var grpAds = getOrCreateGroup("Ads & Products");
    var grpData = getOrCreateGroup("Data & Fine Print");
    var grpNav = getOrCreateGroup("Navigation");

    // ============================================================
    // MAGAZINE - BODY & EDITORIAL
    // ============================================================

    createStyle(grpBody, "Body", {
        fontFamily: "Freight Text Pro",
        fontStyle: "Book",
        pointSize: 12,
        leading: 15,
        tracking: 5,
        justification: Justification.LEFT_JUSTIFIED,

        fillColor: "Charcoal",
        hyphenation: true
    });

    createStyle(grpBody, "Body - First Paragraph", {
        fontFamily: "Freight Text Pro",
        fontStyle: "Book",
        pointSize: 12,
        leading: 15,
        tracking: 5,
        justification: Justification.LEFT_JUSTIFIED,

        fillColor: "Charcoal",
        hyphenation: true,
        basedOn: "Body"
    });

    createStyle(grpBody, "Body - Editor Letter", {
        fontFamily: "Freight Text Pro",
        fontStyle: "Book",
        pointSize: 12,
        leading: 15,
        tracking: 5,
        justification: Justification.LEFT_ALIGN,

        fillColor: "Charcoal",
        hyphenation: true
    });

    createStyle(grpBody, "Article Deck", {
        fontFamily: "Freight Text Pro",
        fontStyle: "Medium",
        pointSize: 14,
        leading: 19,
        tracking: 0,
        justification: Justification.LEFT_ALIGN,

        fillColor: "Warm Gray 80",
        hyphenation: false
    });

    createStyle(grpBody, "Article Byline", {
        fontFamily: "Barlow Condensed",
        fontStyle: "Medium",
        pointSize: 9,
        leading: 11,
        tracking: 80,
        capitalization: Capitalization.ALL_CAPS,
        justification: Justification.LEFT_ALIGN,

        fillColor: "Gold",
        hyphenation: false
    });

    // ============================================================
    // MAGAZINE - HEADLINES & LABELS
    // ============================================================

    createStyle(grpHeadlines, "Cover Masthead", {
        fontFamily: "Barlow Condensed",
        fontStyle: "Black",
        pointSize: 72,
        leading: 64,
        tracking: 80,
        capitalization: Capitalization.ALL_CAPS,
        fillColor: "White",
        hyphenation: false
    });

    createStyle(grpHeadlines, "Cover Subtitle", {
        fontFamily: "Barlow Condensed",
        fontStyle: "Medium",
        pointSize: 11,
        leading: 13,
        tracking: 200,
        capitalization: Capitalization.ALL_CAPS,

        fillColor: "Gold",
        hyphenation: false
    });

    createStyle(grpHeadlines, "Cover Teaser Primary", {
        fontFamily: "Barlow Condensed",
        fontStyle: "Bold",
        pointSize: 24,
        leading: 26,
        tracking: 20,
        capitalization: Capitalization.ALL_CAPS,

        fillColor: "White",
        hyphenation: false
    });

    createStyle(grpHeadlines, "Cover Teaser Secondary", {
        fontFamily: "Barlow Condensed",
        fontStyle: "Regular",
        pointSize: 14,
        leading: 16,
        tracking: 30,
        capitalization: Capitalization.ALL_CAPS,

        fillColor: "Highlight Yellow",
        hyphenation: false
    });

    createStyle(grpHeadlines, "Article Headline", {
        fontFamily: "Freight Display Pro",
        fontStyle: "Bold",
        pointSize: 48,
        leading: 48,
        tracking: -10,
        justification: Justification.LEFT_ALIGN,

        fillColor: "Matte Black",
        hyphenation: false
    });

    createStyle(grpHeadlines, "Article Headline Alt", {
        fontFamily: "Barlow Condensed",
        fontStyle: "Black",
        pointSize: 42,
        leading: 42,
        tracking: 10,
        capitalization: Capitalization.ALL_CAPS,
        justification: Justification.LEFT_ALIGN,

        fillColor: "Matte Black",
        hyphenation: false
    });

    createStyle(grpHeadlines, "Section Label", {
        fontFamily: "Barlow Condensed",
        fontStyle: "Bold",
        pointSize: 18,
        leading: 20,
        tracking: 250,
        capitalization: Capitalization.ALL_CAPS,

        fillColor: "Gold",
        hyphenation: false
    });

    createStyle(grpHeadlines, "Article Subhead", {
        fontFamily: "Barlow Condensed",
        fontStyle: "SemiBold",
        pointSize: 14,
        leading: 17,
        tracking: 40,
        capitalization: Capitalization.ALL_CAPS,
        justification: Justification.LEFT_ALIGN,
        fillColor: "Matte Black",
        hyphenation: false,
        keepWithNext: 2
    });

    createStyle(grpHeadlines, "Article Subhead 2", {
        fontFamily: "Freight Text Pro",
        fontStyle: "Bold",
        pointSize: 12,
        leading: 15,
        tracking: 0,
        justification: Justification.LEFT_ALIGN,
        fillColor: "Charcoal",
        hyphenation: false,
        keepWithNext: 2
    });

    createStyle(grpHeadlines, "Classified Header", {
        fontFamily: "Barlow Condensed",
        fontStyle: "Black",
        pointSize: 18,
        leading: 18,
        tracking: 100,
        capitalization: Capitalization.ALL_CAPS,

        fillColor: "Matte Black",
        hyphenation: false,
        ruleBelow: true,
        ruleBelowWeight: 1,
        ruleBelowColor: "Matte Black",
        ruleBelowOffset: 6
    });

    // ============================================================
    // MAGAZINE - QUOTES & CALLOUTS
    // ============================================================

    createStyle(grpQuotes, "Pull Quote", {
        fontFamily: "Freight Display Pro",
        fontStyle: "Bold",
        pointSize: 24,
        leading: 30,
        tracking: -5,
        justification: Justification.LEFT_ALIGN,
        fillColor: "Purple",
        hyphenation: false
    });

    createStyle(grpQuotes, "Pull Quote Attribution", {
        fontFamily: "Barlow Condensed",
        fontStyle: "Medium",
        pointSize: 9,
        leading: 11,
        tracking: 80,
        capitalization: Capitalization.ALL_CAPS,
        fillColor: "Gold",
        hyphenation: false
    });

    createStyle(grpQuotes, "Brad Quote", {
        fontFamily: "Freight Text Pro",
        fontStyle: "Book Italic",
        pointSize: 12,
        leading: 16,
        tracking: 5,
        justification: Justification.LEFT_ALIGN,
        fillColor: "Charcoal",
        hyphenation: false
    });

    createStyle(grpQuotes, "Brad Quote Attribution", {
        fontFamily: "Barlow Condensed",
        fontStyle: "SemiBold",
        pointSize: 8,
        leading: 10,
        tracking: 120,
        capitalization: Capitalization.ALL_CAPS,
        fillColor: "Gold",
        hyphenation: false
    });

    createStyle(grpQuotes, "Callout Label", {
        fontFamily: "Barlow Condensed",
        fontStyle: "Bold",
        pointSize: 10,
        leading: 12,
        tracking: 200,
        capitalization: Capitalization.ALL_CAPS,

        fillColor: "Signal Orange",
        hyphenation: false
    });

    createStyle(grpQuotes, "Callout Box Text", {
        fontFamily: "Freight Text Pro",
        fontStyle: "Medium",
        pointSize: 10,
        leading: 14,
        tracking: 5,
        justification: Justification.LEFT_ALIGN,
        fillColor: "Charcoal",
        hyphenation: true
    });

    createStyle(grpQuotes, "Advice Question", {
        fontFamily: "Freight Text Pro",
        fontStyle: "Book Italic",
        pointSize: 12,
        leading: 15,
        tracking: 5,
        justification: Justification.LEFT_ALIGN,
        fillColor: "Charcoal",
        hyphenation: true
    });

    createStyle(grpQuotes, "Advice Question Signature", {
        fontFamily: "IBM Plex Mono",
        fontStyle: "Regular",
        pointSize: 8,
        leading: 10,
        tracking: 20,
        justification: Justification.RIGHT_ALIGN,
        fillColor: "Warm Gray 80",
        hyphenation: false
    });

    createStyle(grpQuotes, "Advice Answer Label", {
        fontFamily: "Barlow Condensed",
        fontStyle: "Bold",
        pointSize: 11,
        leading: 13,
        tracking: 150,
        capitalization: Capitalization.ALL_CAPS,

        fillColor: "Gold",
        hyphenation: false
    });

    createStyle(grpQuotes, "Advice Answer", {
        fontFamily: "Freight Text Pro",
        fontStyle: "Book",
        pointSize: 12,
        leading: 15,
        tracking: 5,
        justification: Justification.LEFT_JUSTIFIED,
        fillColor: "Charcoal",
        hyphenation: true
    });

    // ============================================================
    // MAGAZINE - ADS & PRODUCTS
    // ============================================================

    createStyle(grpAds, "Ad Headline", {
        fontFamily: "Barlow Condensed",
        fontStyle: "Black",
        pointSize: 54,
        leading: 50,
        tracking: 20,
        capitalization: Capitalization.ALL_CAPS,

        fillColor: "White",
        hyphenation: false
    });

    createStyle(grpAds, "Ad Subhead", {
        fontFamily: "Freight Text Pro",
        fontStyle: "Bold Italic",
        pointSize: 18,
        leading: 22,
        tracking: 0,

        fillColor: "Gold",
        hyphenation: false
    });

    createStyle(grpAds, "Ad Body", {
        fontFamily: "Freight Text Pro",
        fontStyle: "Book",
        pointSize: 11,
        leading: 15,
        tracking: 5,
        justification: Justification.LEFT_ALIGN,

        fillColor: "White",
        hyphenation: true
    });

    createStyle(grpAds, "Ad Testimonial", {
        fontFamily: "Freight Text Pro",
        fontStyle: "Book Italic",
        pointSize: 11,
        leading: 15,
        tracking: 0,
        justification: Justification.LEFT_ALIGN,
        fillColor: "White",
        hyphenation: false
    });

    createStyle(grpAds, "Ad Testimonial Attribution", {
        fontFamily: "IBM Plex Mono",
        fontStyle: "Regular",
        pointSize: 7.5,
        leading: 10,
        tracking: 20,
        fillColor: "Gold",
        hyphenation: false
    });

    createStyle(grpAds, "Ad CTA", {
        fontFamily: "Barlow Condensed",
        fontStyle: "Bold",
        pointSize: 13,
        leading: 15,
        tracking: 150,
        capitalization: Capitalization.ALL_CAPS,
        justification: Justification.CENTER_ALIGN,
        fillColor: "Matte Black",
        hyphenation: false
    });

    createStyle(grpAds, "Ad Fine Print", {
        fontFamily: "IBM Plex Mono",
        fontStyle: "Light",
        pointSize: 6,
        leading: 8,
        tracking: 10,
        justification: Justification.LEFT_ALIGN,

        fillColor: "Warm Gray 40",
        hyphenation: true
    });

    createStyle(grpAds, "Classified Ad Title", {
        fontFamily: "Barlow Condensed",
        fontStyle: "SemiBold",
        pointSize: 10,
        leading: 12,
        tracking: 60,
        capitalization: Capitalization.ALL_CAPS,
        fillColor: "Matte Black",
        hyphenation: false
    });

    createStyle(grpAds, "Classified Ad Body", {
        fontFamily: "Freight Text Pro",
        fontStyle: "Book",
        pointSize: 8,
        leading: 11,
        tracking: 5,
        justification: Justification.LEFT_ALIGN,

        fillColor: "Charcoal",
        hyphenation: true
    });

    createStyle(grpAds, "Reveal Headline", {
        fontFamily: "Barlow Condensed",
        fontStyle: "Black",
        pointSize: 72,
        leading: 66,
        tracking: 30,
        capitalization: Capitalization.ALL_CAPS,

        fillColor: "Gold",
        hyphenation: false
    });

    createStyle(grpAds, "Reveal Body", {
        fontFamily: "Freight Text Pro",
        fontStyle: "Book",
        pointSize: 12,
        leading: 17,
        tracking: 5,
        justification: Justification.LEFT_ALIGN,

        fillColor: "Cream",
        hyphenation: false
    });

    // ============================================================
    // MAGAZINE - DATA & FINE PRINT
    // ============================================================

    createStyle(grpData, "Spec Table Header", {
        fontFamily: "Barlow Condensed",
        fontStyle: "SemiBold",
        pointSize: 9,
        leading: 11,
        tracking: 120,
        capitalization: Capitalization.ALL_CAPS,
        fillColor: "White",
        hyphenation: false
    });

    createStyle(grpData, "Spec Table Cell", {
        fontFamily: "IBM Plex Mono",
        fontStyle: "Regular",
        pointSize: 8,
        leading: 11,
        tracking: 0,
        fillColor: "Charcoal",
        hyphenation: false
    });

    createStyle(grpData, "Spec Table Label", {
        fontFamily: "IBM Plex Mono",
        fontStyle: "Medium",
        pointSize: 8,
        leading: 11,
        tracking: 0,
        fillColor: "Charcoal",
        hyphenation: false
    });

    createStyle(grpData, "Infographic Headline", {
        fontFamily: "Barlow Condensed",
        fontStyle: "Black",
        pointSize: 36,
        leading: 36,
        tracking: 20,
        capitalization: Capitalization.ALL_CAPS,

        fillColor: "Institutional Teal",
        hyphenation: false
    });

    createStyle(grpData, "Infographic Data Label", {
        fontFamily: "IBM Plex Mono",
        fontStyle: "Medium",
        pointSize: 9,
        leading: 11,
        tracking: 30,
        capitalization: Capitalization.ALL_CAPS,
        fillColor: "Charcoal",
        hyphenation: false
    });

    createStyle(grpData, "Infographic Data Value", {
        fontFamily: "Barlow Condensed",
        fontStyle: "Bold",
        pointSize: 36,
        leading: 36,
        tracking: 0,
        justification: Justification.CENTER_ALIGN,
        fillColor: "Institutional Teal",
        hyphenation: false
    });

    createStyle(grpData, "Infographic Annotation", {
        fontFamily: "IBM Plex Mono",
        fontStyle: "Regular",
        pointSize: 7.5,
        leading: 10,
        tracking: 10,
        fillColor: "Warm Gray 80",
        hyphenation: false
    });

    createStyle(grpData, "Evidence Header", {
        fontFamily: "IBM Plex Mono",
        fontStyle: "Bold",
        pointSize: 14,
        leading: 16,
        tracking: 120,
        capitalization: Capitalization.ALL_CAPS,

        fillColor: "Classified Red",
        hyphenation: false
    });

    createStyle(grpData, "Evidence Field Label", {
        fontFamily: "IBM Plex Mono",
        fontStyle: "Medium",
        pointSize: 9,
        leading: 13,
        tracking: 60,
        capitalization: Capitalization.ALL_CAPS,
        fillColor: "Warm Gray 80",
        hyphenation: false
    });

    createStyle(grpData, "Evidence Field Value", {
        fontFamily: "IBM Plex Mono",
        fontStyle: "Regular",
        pointSize: 10,
        leading: 13,
        tracking: 0,
        fillColor: "Charcoal",
        hyphenation: false
    });

    createStyle(grpData, "Caption", {
        fontFamily: "IBM Plex Mono",
        fontStyle: "Regular",
        pointSize: 8,
        leading: 11,
        tracking: 10,
        fillColor: "Warm Gray 80",
        hyphenation: false
    });

    createStyle(grpData, "Photo Credit", {
        fontFamily: "IBM Plex Mono",
        fontStyle: "Light",
        pointSize: 6.5,
        leading: 8,
        tracking: 30,
        capitalization: Capitalization.ALL_CAPS,
        fillColor: "Warm Gray 40",
        hyphenation: false
    });

    createStyle(grpData, "Legal Fine Print", {
        fontFamily: "IBM Plex Mono",
        fontStyle: "Light",
        pointSize: 5.5,
        leading: 7.5,
        tracking: 10,
        justification: Justification.LEFT_JUSTIFIED,
        fillColor: "Warm Gray 80",
        hyphenation: true
    });

    // ============================================================
    // MAGAZINE - NAVIGATION
    // ============================================================

    createStyle(grpNav, "Running Header", {
        fontFamily: "Barlow Condensed",
        fontStyle: "Medium",
        pointSize: 7.5,
        leading: 9,
        tracking: 200,
        capitalization: Capitalization.ALL_CAPS,
        fillColor: "Warm Gray 40",
        hyphenation: false
    });

    createStyle(grpNav, "Folio", {
        fontFamily: "Barlow Condensed",
        fontStyle: "SemiBold",
        pointSize: 9,
        leading: 9,
        tracking: 0,
        fillColor: "Warm Gray 80",
        hyphenation: false
    });

    createStyle(grpNav, "TOC Section Label", {
        fontFamily: "Barlow Condensed",
        fontStyle: "SemiBold",
        pointSize: 12,
        leading: 15,
        tracking: 150,
        capitalization: Capitalization.ALL_CAPS,
        fillColor: "Gold",
        hyphenation: false,
        ruleBelow: true,
        ruleBelowWeight: 0.5,
        ruleBelowColor: "Gold",
        ruleBelowOffset: 3
    });

    createStyle(grpNav, "TOC Entry", {
        fontFamily: "Freight Text Pro",
        fontStyle: "Book",
        pointSize: 11,
        leading: 15,
        tracking: 0,

        fillColor: "Charcoal",
        hyphenation: false
    });

    createStyle(grpNav, "TOC Description", {
        fontFamily: "Freight Text Pro",
        fontStyle: "Book Italic",
        pointSize: 9,
        leading: 12,
        tracking: 0,

        fillColor: "Warm Gray 80",
        hyphenation: false
    });

    createStyle(grpNav, "Masthead Title", {
        fontFamily: "Barlow Condensed",
        fontStyle: "Black",
        pointSize: 24,
        leading: 24,
        tracking: 60,
        capitalization: Capitalization.ALL_CAPS,

        fillColor: "Matte Black",
        hyphenation: false
    });

    createStyle(grpNav, "Masthead Staff", {
        fontFamily: "IBM Plex Mono",
        fontStyle: "Regular",
        pointSize: 7.5,
        leading: 10,
        tracking: 20,

        fillColor: "Warm Gray 80",
        hyphenation: false
    });

    // ============================================================
    // LISTING PAGE VARIANTS
    // ============================================================

    // Infographic Data Label - Large — larger variant for property feature names
    // Goes in Data & Fine Print (same group as Infographic Data Label)
    createStyle(grpData, "Infographic Data Label - Large", {
        fontFamily: "IBM Plex Mono",
        fontStyle: "Medium",
        pointSize: 12,
        leading: 14,
        tracking: 30,
        capitalization: Capitalization.ALL_CAPS,
        fillColor: "Charcoal",
        hyphenation: false
    });

    // Callout Box Text - Large — larger variant without indents
    // Goes in Quotes & Callouts (same group as Callout Box Text)
    createStyle(grpQuotes, "Callout Box Text - Large", {
        fontFamily: "Freight Text Pro",
        fontStyle: "Medium",
        pointSize: 11,
        leading: 15,
        tracking: 5,
        justification: Justification.LEFT_ALIGN,
        fillColor: "Charcoal",
        hyphenation: false
    });

    // Classified Ad Title - Teal — teal variant at 13pt for related property names
    // Goes in Ads & Products (same group as Classified Ad Title)
    createStyle(grpAds, "Classified Ad Title - Teal", {
        fontFamily: "Barlow Condensed",
        fontStyle: "SemiBold",
        pointSize: 13,
        leading: 15,
        tracking: 60,
        capitalization: Capitalization.ALL_CAPS,
        fillColor: "Institutional Teal",
        hyphenation: false
    });

    // ============================================================
    // DONE
    // ============================================================

    alert("Done! Created 51 paragraph styles in 6 folders.\n\nFolders:\n- Body & Editorial\n- Headlines & Labels\n- Quotes & Callouts (+ Callout Box Text - Large)\n- Ads & Products (+ Classified Ad Title - Teal)\n- Data & Fine Print (+ Infographic Data Label - Large)\n- Navigation");

})();
