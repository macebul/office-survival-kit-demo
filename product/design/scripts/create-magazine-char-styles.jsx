// ELEVATE Magazine — Character Style Generator
// Run this in InDesign via Window > Utilities > Scripts
// Creates all character styles for inline overrides

#target indesign

(function() {
    var doc = app.activeDocument;

    // Helper: create a character style
    function createCharStyle(name, props) {
        var style = null;

        for (var i = 0; i < doc.characterStyles.length; i++) {
            if (doc.characterStyles[i].name === name) {
                style = doc.characterStyles[i];
                break;
            }
        }

        if (!style) {
            style = doc.characterStyles.add();
            style.name = name;
        }

        if (props.fontFamily) {
            try {
                style.appliedFont = props.fontFamily;
            } catch(e) {}
        }
        if (props.fontStyle) {
            try { style.fontStyle = props.fontStyle; } catch(e) {}
        }
        if (props.pointSize) style.pointSize = props.pointSize;
        if (props.tracking !== undefined) style.tracking = props.tracking;
        if (props.capitalization) style.capitalization = props.capitalization;
        if (props.fillColor) {
            try {
                style.fillColor = doc.swatches.itemByName(props.fillColor);
            } catch(e) {}
        }
        if (props.position) style.position = props.position;

        return style;
    }

    // ============================================================
    // CHARACTER STYLES
    // ============================================================

    // Bold — inherits font family from paragraph, just switches to Bold
    createCharStyle("Bold", {
        fontStyle: "Bold"
    });

    // Italic — inherits font family from paragraph, just switches to Italic
    createCharStyle("Italic", {
        fontStyle: "Italic"
    });

    // Bold Italic
    createCharStyle("Bold Italic", {
        fontStyle: "Bold Italic"
    });

    // Product Name — inline treatment for "Executive Tactical Stylus" etc.
    createCharStyle("Product Name", {
        fontFamily: "Barlow Condensed",
        fontStyle: "SemiBold",
        tracking: 30
    });

    // Brad Title — inline for "Chief Vision Officer & Founder" etc.
    createCharStyle("Brad Title", {
        fontFamily: "Barlow Condensed",
        fontStyle: "Medium",
        tracking: 60,
        capitalization: Capitalization.ALL_CAPS,
        fillColor: "Gold"
    });

    // Monospace — inline for data, codes, technical terms
    createCharStyle("Monospace", {
        fontFamily: "IBM Plex Mono",
        fontStyle: "Regular"
    });

    // Gold Accent — gold text emphasis
    createCharStyle("Gold Accent", {
        fillColor: "Gold"
    });

    // Red Accent — warnings, alerts
    createCharStyle("Red Accent", {
        fontStyle: "Bold",
        fillColor: "Classified Red"
    });

    // Superscript — trademark symbols, footnote markers
    createCharStyle("Superscript", {
        position: Position.SUPERSCRIPT
    });

    // ============================================================
    // DONE
    // ============================================================

    alert("Done! Created 9 character styles:\n\n- Bold\n- Italic\n- Bold Italic\n- Product Name\n- Brad Title\n- Monospace\n- Gold Accent\n- Red Accent\n- Superscript");

})();
