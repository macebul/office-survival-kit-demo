/*
 * Lifer Ink -- Fold-Over Flap Wireframe
 * Adobe Illustrator ExtendScript (.jsx)
 *
 * Run via: File > Scripts > Other Script... > select this file
 *
 * Creates two artboards:
 *   1. CARD FRONT (unified layout, notch structural only, flap at bottom edge)
 *   2. CARD BACK (all elements)
 *
 * All dimensions in inches, converted to points (1 inch = 72 pt).
 * Card: 13.25" wide x 10.75" tall, L-shaped (4.75" x 3.75" notch upper-left).
 * The notch is a structural cut for mug box clearance - NOT a design zone.
 * The entire card face is one continuous marketing surface.
 * The flap is a physical extension from the card's BOTTOM edge, folding upward
 * over the tuck-end box. Flap exterior + interior are shown below the fold line.
 *
 * FULL COPY version: Every block contains its complete text from the surface
 * map so block heights reflect real content density. Blocks are "Lego pieces"
 * that can be rearranged in Illustrator to fill available space.
 */

// ============================================================
// CONFIG
// ============================================================

var PT = 72; // points per inch

// Card dimensions
var CARD_W = 13.25 * PT;
var CARD_H = 10.75 * PT;
var NOTCH_W = 4.75 * PT;
var NOTCH_H = 3.75 * PT;

// Flap dimensions
var FLAP_W = 6.5 * PT;
var FLAP_H = 1.5 * PT;

// Spacing between artboards
var ARTBOARD_GAP = 1.5 * PT;

// Typography
var FONT_LABEL = "ArialMT";
var FONT_BOLD = "Arial-BoldMT";

// ============================================================
// HELPERS
// ============================================================

function makeColor(r, g, b) {
    var c = new RGBColor();
    c.red = r;
    c.green = g;
    c.blue = b;
    return c;
}

// Pre-build colors
var CLR_OUTLINE = makeColor(40, 40, 40);
var CLR_NOTCH = makeColor(220, 220, 220);
var CLR_NOTCH_STROKE = makeColor(170, 170, 170);
var CLR_ELEMENT = makeColor(180, 210, 240);
var CLR_ELEMENT_STROKE = makeColor(70, 130, 180);
var CLR_FLAP = makeColor(255, 220, 180);
var CLR_FLAP_STROKE = makeColor(200, 130, 60);
var CLR_TEXT = makeColor(30, 30, 30);
var CLR_GRAY = makeColor(120, 120, 120);
var CLR_DIM = makeColor(180, 50, 50);
var CLR_WHITE = makeColor(255, 255, 255);
var CLR_ID = makeColor(70, 130, 180); // block ID color (steel blue)

function applyFill(item, clr) { item.filled = true; item.fillColor = clr; }
function applyStroke(item, clr, w) { item.stroked = true; item.strokeColor = clr; item.strokeWidth = w || 1; }
function noFill(item) { item.filled = false; }
function noStroke(item) { item.stroked = false; }

function drawRect(layer, left, top, w, h, fillClr, strokeClr, strokeW) {
    var rect = layer.pathItems.rectangle(top, left, w, h);
    if (fillClr) { applyFill(rect, fillClr); } else { noFill(rect); }
    if (strokeClr) { applyStroke(rect, strokeClr, strokeW); } else { noStroke(rect); }
    return rect;
}

function drawLabel(layer, text, x, y, size, clr, fontName) {
    var tf = layer.textFrames.add();
    tf.contents = text;
    tf.position = [x, y];
    var attrs = tf.textRange.characterAttributes;
    attrs.size = size;
    attrs.fillColor = clr;
    try { attrs.textFont = app.textFonts.getByName(fontName || FONT_LABEL); } catch (e) {}
    return tf;
}

function drawLCard(layer, ox, oy, fillClr, strokeClr, strokeW) {
    var path = layer.pathItems.add();
    path.setEntirePath([
        [ox + NOTCH_W, oy],
        [ox + CARD_W, oy],
        [ox + CARD_W, oy - CARD_H],
        [ox, oy - CARD_H],
        [ox, oy - NOTCH_H],
        [ox + NOTCH_W, oy - NOTCH_H]
    ]);
    path.closed = true;
    if (fillClr) { applyFill(path, fillClr); } else { noFill(path); }
    if (strokeClr) { applyStroke(path, strokeClr, strokeW); } else { noStroke(path); }
    return path;
}

function drawLCardMirrored(layer, ox, oy, fillClr, strokeClr, strokeW) {
    var path = layer.pathItems.add();
    path.setEntirePath([
        [ox, oy],
        [ox + CARD_W - NOTCH_W, oy],
        [ox + CARD_W - NOTCH_W, oy - NOTCH_H],
        [ox + CARD_W, oy - NOTCH_H],
        [ox + CARD_W, oy - CARD_H],
        [ox, oy - CARD_H]
    ]);
    path.closed = true;
    if (fillClr) { applyFill(path, fillClr); } else { noFill(path); }
    if (strokeClr) { applyStroke(path, strokeClr, strokeW); } else { noStroke(path); }
    return path;
}

function drawDashedRect(layer, left, top, w, h, strokeClr, strokeW) {
    var rect = layer.pathItems.rectangle(top, left, w, h);
    noFill(rect);
    applyStroke(rect, strokeClr, strokeW || 0.75);
    rect.strokeDashes = [6, 3];
    return rect;
}

function drawDashedLine(layer, x1, y1, x2, y2, strokeClr, strokeW) {
    var line = layer.pathItems.add();
    line.setEntirePath([[x1, y1], [x2, y2]]);
    noFill(line);
    applyStroke(line, strokeClr, strokeW || 0.5);
    line.strokeDashes = [3, 3];
    return line;
}

/*
 * drawBlock() - Creates a content block with full copy text.
 *
 * Parameters:
 *   layer    - target layer
 *   left     - x position (points)
 *   top      - y position (points, Illustrator top-down)
 *   w        - block width (points)
 *   h        - block height (points)
 *   id       - block ID label, e.g. "F4" (drawn in top-left corner in bold)
 *   copyText - full copy text (drawn as area text filling the block)
 *   fillClr  - optional fill color (default blue)
 *   strokeClr - optional stroke color
 *
 * The block ID sits in the top-left as a small bold tag.
 * The full copy text fills the remaining block area using an area text frame
 * so it wraps naturally within the block boundaries.
 */
function drawBlock(layer, left, top, w, h, id, copyText, fillClr, strokeClr) {
    // Background rectangle
    var rect = drawRect(layer, left, top, w, h, fillClr || CLR_ELEMENT, strokeClr || CLR_ELEMENT_STROKE, 1);

    // Block ID tag (top-left corner, bold, small)
    var idSize = 6;
    if (w > 3 * PT) idSize = 7;
    drawLabel(layer, id, left + 3, top - 3, idSize, CLR_ID, FONT_BOLD);

    // Full copy as area text frame (wraps within block)
    if (copyText && h > 14 && w > 40) {
        var inset = 3;
        var textTop = top - idSize - 5; // below the ID tag
        var textH = h - idSize - 8;
        var textW = w - inset * 2;

        if (textH > 6 && textW > 20) {
            // Create area text frame using a rectangle path
            var textRect = layer.pathItems.rectangle(textTop, left + inset, textW, textH);
            noFill(textRect);
            noStroke(textRect);
            var areaText = layer.textFrames.areaText(textRect);
            areaText.contents = copyText;

            // Style the text
            var attrs = areaText.textRange.characterAttributes;
            // Scale font size based on block size
            var fontSize = 5.5;
            if (w > 4 * PT && h > 0.8 * PT) fontSize = 6.5;
            else if (w > 2 * PT && h > 0.5 * PT) fontSize = 6;
            else if (w < 1.5 * PT || h < 0.4 * PT) fontSize = 4.5;
            attrs.size = fontSize;
            attrs.fillColor = CLR_TEXT;
            try { attrs.textFont = app.textFonts.getByName(FONT_LABEL); } catch (e) {}
        }
    }

    return rect;
}

function drawDimension(layer, x1, y1, x2, y2, label) {
    drawDashedLine(layer, x1, y1, x2, y2, CLR_DIM, 0.5);
    var mx = (x1 + x2) / 2;
    var my = (y1 + y2) / 2;
    drawLabel(layer, label, mx - 15, my + 10, 6, CLR_DIM, FONT_LABEL);
}


// ============================================================
// MAIN
// ============================================================

(function main() {

    // Extra height for flap extending below card bottom + flap interior annotation
    var FLAP_EXTRA = FLAP_H + FLAP_H * 0.6 + 20; // flap exterior + interior + spacing
    var doc = app.documents.add(DocumentColorSpace.RGB, CARD_W * 2 + ARTBOARD_GAP, CARD_H + FLAP_EXTRA);

    // Artboard 1: Card Front
    var margin = 0.5 * PT;
    var ab1 = doc.artboards[0];
    ab1.name = "CARD FRONT";
    ab1.artboardRect = [0 - margin, 0 + margin, CARD_W + margin, 0 - CARD_H - FLAP_EXTRA - margin];

    // Artboard 2: Card Back
    var ab2Offset = CARD_W + ARTBOARD_GAP;
    doc.artboards.add([ab2Offset - margin, 0 + margin, ab2Offset + CARD_W + margin, 0 - CARD_H - margin]);
    doc.artboards[1].name = "CARD BACK";


    // ============================================================
    // CARD FRONT -- Unified surface (no zone system)
    // ============================================================

    var frontLayer = doc.layers.add();
    frontLayer.name = "Card Front";

    var ox = 0;
    var oy = 0;
    var pad = 10; // padding from card edges

    // Card outline (L-shape)
    drawLCard(frontLayer, ox, oy, CLR_WHITE, CLR_OUTLINE, 2);

    // Notch -- structural annotation only (grayed, labeled as dead space)
    var frontNotch = drawRect(frontLayer, ox, oy, NOTCH_W, NOTCH_H, CLR_NOTCH, CLR_NOTCH_STROKE, 0.5);
    frontNotch.zOrder(ZOrderMethod.SENDTOBACK);
    drawLabel(frontLayer, "STRUCTURAL NOTCH\n4.75\" x 3.75\"\n(mug box clearance)\nNo design content", ox + 8, oy - 16, 6, CLR_GRAY, FONT_LABEL);

    // --- Usable area coordinates ---
    // Top row: from notch right edge to card right, full 3.75" tall
    var topRow_x = ox + NOTCH_W + pad;
    var topRow_y = oy - pad;
    var topRow_w = CARD_W - NOTCH_W - pad * 2;
    var topRow_h = NOTCH_H - pad * 2; // usable height in top row

    // Full-width row: below notch, card goes full width
    var fullRow_x = ox + pad;
    var fullRow_y = oy - NOTCH_H - pad;
    var fullRow_w = CARD_W - pad * 2;

    // ---- TOP ROW (right of notch, top 3.75") ----
    // F1 (brand) > F2 (division) > F3 (subline) > F4 (hero) > F5 (subtitle) > F6 (tagline)

    // F1: Brand Logo
    var f1h = 0.3 * PT;
    var f1w = 2.5 * PT;
    drawBlock(frontLayer, topRow_x, topRow_y, f1w, f1h,
        "F1",
        "WITTY YETI\n\n[Brand logo]");

    // F2: Division Name
    var f2y = topRow_y - f1h - 3;
    var f2h = 0.35 * PT;
    var f2w = 5.5 * PT;
    drawBlock(frontLayer, topRow_x, f2y, f2w, f2h,
        "F2",
        "Bureau of Permanent Records\n\n[Division name -- institutional government bureau feel]");

    // F3: Division Subline
    var f3y = f2y - f2h - 3;
    var f3h = 0.3 * PT;
    var f3w = 5.5 * PT;
    drawBlock(frontLayer, topRow_x, f3y, f3w, f3h,
        "F3",
        "Your career on file. And on your face.\n\n[Subline -- smaller, subordinate to division name]");

    // F4: Product Name (hero headline - in top row, right of notch)
    var f4y = f3y - f3h - 4;
    var f4w = topRow_w;
    var f4h = 1.0 * PT;
    drawBlock(frontLayer, topRow_x, f4y, f4w, f4h,
        "F4",
        "LIFER INK\n\n[Hero headline -- largest text on card. Large, bold, condensed. Should read from several feet away. Dominant visual element. TM mark.]");

    // F5: Subtitle
    var f5y = f4y - f4h - 3;
    var f5h = 0.35 * PT;
    var f5w = topRow_w;
    drawBlock(frontLayer, topRow_x, f5y, f5w, f5h,
        "F5",
        "Motivational Body Art Collection\n\n[Subtitle -- Brad's official rebrand of temporary tattoos]");

    // F6: Primary Tagline
    var f6y = f5y - f5h - 3;
    var f6h = 0.4 * PT;
    var f6w = topRow_w;
    drawBlock(frontLayer, topRow_x, f6y, f6w, f6h,
        "F6",
        "Goes on like confidence. Comes off like evidence.\n\n[Primary tagline -- red italic, high-impact line]");


    // ---- FULL-WIDTH AREA (below notch line) ----

    // F7: Dermatologist Recommended Seal (right side)
    var f7w = 2.5 * PT;
    var f7h = 1.6 * PT;
    var f7x = fullRow_x + fullRow_w - f7w;
    drawBlock(frontLayer, f7x, fullRow_y, f7w, f7h,
        "F7",
        "DERMATOLOGIST\nRECOMMENDED\n\n(By the receptionist. \"I don't see why not.\")\n\nShe's been there 11 years.\n\n[Oval/shield seal with ornate border and ribbon, styled like a medical endorsement badge. No doctor -- just the receptionist.]");

    // F8: Quantity Line + Feature Bullets (left side, beside seal)
    var f8w = fullRow_w - f7w - 8;
    var f8h = 1.6 * PT;
    drawBlock(frontLayer, fullRow_x, fullRow_y, f8w, f8h,
        "F8",
        "6 designs. 0 approved by HR. Which is how we knew they were good.\n\n* Will not set off a metal detector.\n* Not visible under a standard polygraph.\n* Has never, to our knowledge, caused a custody dispute.\n\n(Plus a few we're still arguing about internally.)\n(If you can hold a wet paper towel, you're overqualified.)\n\n[Quantity line up top, then 3 feature bullets, then parenthetical spec-line pairings. Small institutional text.]");

    // F9: Fine Print / Accent Line
    var f9y = fullRow_y - f8h - 4;
    var f9h = 0.45 * PT;
    drawBlock(frontLayer, fullRow_x, f9y, fullRow_w, f9h,
        "F9",
        "Probably not the second worst decision you'll make this week.\n\n[Accent line -- 7pt fine print, centered or left-aligned]");

    // F10: Age Statement
    var f10y = f9y - f9h - 3;
    var f10h = 0.45 * PT;
    drawBlock(frontLayer, fullRow_x, f10y, fullRow_w, f10h,
        "F10",
        "Ages 12 and up. Emotional age: no minimum. Honestly, no maximum either. We've seen things.\n\n[Age restriction -- 7pt fine print]");

    // F11: Badge
    var f11y = f10y - f10h - 4;
    var f11h = 0.45 * PT;
    var f11w = fullRow_w * 0.5;
    drawBlock(frontLayer, fullRow_x, f11y, f11w, f11h,
        "F11",
        "#1 SELLING TEMPORARY TATTOO IN THIS BRIEFCASE\n\n[Corner badge / ribbon element -- self-referential superlative]");

    // F12: Application Icons
    var f12y = f11y - f11h - 3;
    var f12h = 0.4 * PT;
    drawBlock(frontLayer, fullRow_x, f12y, fullRow_w, f12h,
        "F12",
        "CUT / WET / 30 SEC / DISPLAY\n\n[Four application step icons in airline-safety-card style. Functional but the final step \"DISPLAY\" is the joke -- Brad's process ends with showing off, not personal satisfaction.]");

    // F13: Hidden Copy Under Box (Layer 4 discovery)
    var f13y = f12y - f12h - 3;
    var f13h = 0.35 * PT;
    drawBlock(frontLayer, fullRow_x, f13y, fullRow_w, f13h,
        "F13",
        "\"It washed off.\" -- Yes. That is the product.\n\n[Layer 4 discovery -- printed on card, hidden under tuck-end box. Revealed when box is removed. Small complaint/response block.]",
        CLR_FLAP, CLR_FLAP_STROKE);

    // ---- TUCK-END BOX ZONE (below F13) ----
    var boxW = 5.0 * PT;
    var boxH = 3.5 * PT;
    var flap_x = fullRow_x + (fullRow_w - FLAP_W) / 2;
    var foldY = oy - CARD_H; // card bottom edge

    var box_top = f13y - f13h - 6;
    var box_x = flap_x + (FLAP_W - boxW) / 2;
    drawDashedRect(frontLayer, box_x, box_top, boxW, boxH, CLR_FLAP_STROKE, 0.75);
    drawLabel(frontLayer, "TUCK-END BOX\n(~5.0\" x 3.5\" x 0.5\")\nContains: 6 tattoo sheets\n+ 1 achievement card\n\n[Separate design piece --\nbox copy is a separate\nwireframe task]", box_x + 10, box_top - 12, 5.5, CLR_FLAP_STROKE, FONT_LABEL);

    // FOLD LINE at card bottom edge
    var foldLine = frontLayer.pathItems.add();
    foldLine.setEntirePath([[flap_x - 8, foldY], [flap_x + FLAP_W + 8, foldY]]);
    noFill(foldLine);
    applyStroke(foldLine, CLR_FLAP_STROKE, 1.5);
    foldLine.strokeDashes = [8, 4];
    drawLabel(frontLayer, "--- FOLD LINE (card bottom edge) ---", flap_x + 20, foldY + 10, 6.5, CLR_FLAP_STROKE, FONT_BOLD);

    // FLAP EXTERIOR (extends below card bottom edge)
    var flapExt_y = foldY;
    drawBlock(frontLayer, flap_x, flapExt_y, FLAP_W, FLAP_H,
        "FLAP EXT",
        "Flap exterior -- 6.5\" x 1.5\"\nFolds UP over tuck-end box -- visible when closed.\n\nBOLD. BRAVE. WASHABLE.\n\n[Three-word Brad tagline. The deflation from \"BOLD. BRAVE.\" to \"WASHABLE.\" is the comedy beat. This is the transition moment.]",
        CLR_FLAP, CLR_FLAP_STROKE);

    // FLAP INTERIOR (inside face, revealed on open)
    var flapInt_y = flapExt_y - FLAP_H - 6;
    var flapIntH = FLAP_H * 0.6;
    drawBlock(frontLayer, flap_x, flapInt_y, FLAP_W, flapIntH,
        "FLAP INT",
        "Flap interior -- revealed when opened.\nIF SWALLOWED, CONTACT YOUR SUPERVISOR. NOT BECAUSE IT'S DANGEROUS. BECAUSE WE HAVE QUESTIONS.\n\n[Layer 4 discovery -- pharmaceutical safety warning played straight.]",
        CLR_FLAP, CLR_FLAP_STROKE);

    // Flap annotations
    drawLabel(frontLayer, "FLAP folds UP from bottom edge", flap_x + FLAP_W + 10, foldY - 10, 6, CLR_FLAP_STROKE, FONT_BOLD);
    var arrowX = flap_x + FLAP_W + 16;
    var arrowLine = frontLayer.pathItems.add();
    arrowLine.setEntirePath([[arrowX, flapExt_y - FLAP_H + 5], [arrowX, foldY + 20]]);
    noFill(arrowLine);
    applyStroke(arrowLine, CLR_FLAP_STROKE, 1);
    drawDimension(frontLayer, flap_x + FLAP_W + 30, foldY, flap_x + FLAP_W + 30, foldY - FLAP_H, "1.5\" flap");

    // ---- DIMENSIONS ----
    drawDimension(frontLayer, ox, oy + 22, ox + CARD_W, oy + 22, "13.25\"");
    drawDimension(frontLayer, ox - 22, oy, ox - 22, oy - CARD_H, "10.75\"");
    drawDimension(frontLayer, ox, oy + 11, ox + NOTCH_W, oy + 11, "4.75\"");
    drawDimension(frontLayer, ox - 11, oy, ox - 11, oy - NOTCH_H, "3.75\"");

    // Title
    drawLabel(frontLayer, "LIFER INK - CARD FRONT (Fold-Over Flap)", ox, oy + 38, 12, CLR_TEXT, FONT_BOLD);
    drawLabel(frontLayer, "Full copy in every block  |  Blue = copy elements  |  Peach = flap/hidden surfaces  |  Notch = structural only  |  Blocks are movable Lego pieces", ox, oy + 52, 7, CLR_GRAY, FONT_LABEL);


    // ============================================================
    // CARD BACK
    // ============================================================

    var backLayer = doc.layers.add();
    backLayer.name = "Card Back";

    var bx = ab2Offset;
    var by = 0;

    // Card outline (mirrored L, notch upper-right)
    drawLCardMirrored(backLayer, bx, by, CLR_WHITE, CLR_OUTLINE, 2);

    // Notch annotation (upper-right)
    var notchLabelX = bx + CARD_W - NOTCH_W + 8;
    var notchLabelY = by - 16;
    drawLabel(backLayer, "STRUCTURAL NOTCH\n4.75\" x 3.75\"\n(mirrored - upper right)\nNo design content", notchLabelX, notchLabelY, 6, CLR_GRAY, FONT_LABEL);
    var notchIndicator = drawRect(backLayer, bx + CARD_W - NOTCH_W, by, NOTCH_W, NOTCH_H, CLR_NOTCH, CLR_NOTCH_STROKE, 0.5);
    notchIndicator.zOrder(ZOrderMethod.SENDTOBACK);

    // Back usable area
    var backTopRow_x = bx + pad;
    var backTopRow_y = by - pad;
    var backTopRow_w = CARD_W - NOTCH_W - pad * 2;

    var backFull_x = bx + pad;
    var backFull_y = by - NOTCH_H - pad;
    var backFull_w = CARD_W - pad * 2;

    // ---- BACK TOP ROW (left of notch, top 3.75") ----
    // B1 (Distinguished Honorees header), B2-B3 (Karen + Dennis side by side),
    // B4 (Brad quote)

    // B1: Distinguished Honorees Header
    var b1h = 0.4 * PT;
    drawBlock(backLayer, backTopRow_x, backTopRow_y, backTopRow_w, b1h,
        "B1",
        "OUR MOST DECORATED\n\n[Section header -- prominent, bold condensed uppercase. Triple meaning: honored with commendations / covered in tattoos / corporate recognition]");

    // B2: Karen Profile (left half of top row, below B1)
    var b2y = backTopRow_y - b1h - 4;
    var b2w = backTopRow_w / 2 - 4;
    var b2h = 1.6 * PT;
    drawBlock(backLayer, backTopRow_x, b2y, b2w, b2h,
        "B2",
        "Karen Whitfield\nAssociate Account Manager (Formerly Assistant)\n3 Years\n\n[Employee-of-the-month style corporate portrait headshot -- business attire, dead-serious expression, but with visible teardrop + starburst face tattoos. THE PHOTO IS THE JOKE.]\n\n\"I earned my first teardrop last week. I'd rather not say how. But I will say my cubicle neighbor's desk is available if anyone needs one. Anyway -- hoping to earn a second one soon.\"\n\n[Quote formatted as testimonial below photo]");

    // B3: Dennis Profile (right half, beside B2)
    drawBlock(backLayer, backTopRow_x + b2w + 8, b2y, b2w, b2h,
        "B3",
        "Dennis Rourke\nSenior Operations Analyst\n14 Years (Consecutive)\n\n[Employee-of-the-month headshot -- corporate portrait, business attire, dead-serious, but with \"LIFER\" across knuckles visible in chin-rest pose. THE PHOTO IS THE JOKE.]\n\n\"People think the tattoos are about expression. They're not. They're about efficiency. I tell every new hire the same thing: skip the icebreakers. Get the teardrop. It's an introduction, a boundary, and a conversation starter. Three birds. One tattoo.\"\n\n[Quote formatted as testimonial below photo]");

    // B4: Brad Quote (full width of top row, below profiles)
    var b4y = b2y - b2h - 4;
    var b4h = 0.55 * PT;
    drawBlock(backLayer, backTopRow_x, b4y, backTopRow_w, b4h,
        "B4",
        "\"I was going to get a real tattoo once. Then I thought, what if I could have the experience without the experience? That's when I knew I was an entrepreneur.\"\n-- Brad Sterling, Chief of Permanent Records\n\n[Brad Mode 2 quote -- personal brand sincerity. Anchor at bottom of Distinguished Honorees section.]");


    // ---- FULL-WIDTH AREA (below notch line) ----

    // B5: Achievement Section Header
    var b5h = 0.35 * PT;
    drawBlock(backLayer, backFull_x, backFull_y, backFull_w, b5h,
        "B5",
        "COMMENDATIONS: EARNED, NOT GIVEN\n\n[Achievement section header -- bold condensed uppercase. Introduces the 6 tattoo achievement lines below.]");

    // B6: Achievement Lines (6 tattoos with commendation text -- 3x2 grid layout)
    var b6y = backFull_y - b5h - 4;
    var b6h = 1.8 * PT;
    drawBlock(backLayer, backFull_x, b6y, backFull_w, b6h,
        "B6",
        "[6 tattoo images paired with commendation lines -- 3 across x 2 rows grid]\n\nTeardrop -- \"One for every name they -- or you -- crossed off the list.\"\nLIFER -- \"For employees whose sentence has no end date.\"\nPaper Airplane -- \"For anyone who's updated their credentials while still on the inside.\"\nPen Through Tallies -- \"For keeping score with something sharper than necessary.\"\nChalk Outline (Sandwich) -- \"Issued upon the confirmed loss of a labeled food item.\"\nCell Block (Spreadsheet) -- \"For doing hard time in someone else's cell.\"\n\n[Each: tattoo image above, one-line commendation below. No follow-up copy.]");

    // B7: Application Instructions (7-step)
    var b7y = b6y - b6h - 4;
    var b7w = backFull_w * 0.55;
    var b7h = 1.3 * PT;
    drawBlock(backLayer, backFull_x, b7y, b7w, b7h,
        "B7",
        "APPLICATION PROCEDURE\n\n1. CUT -- Select your commendation. Carefully.\n2. REMOVE -- Peel the clear film. Don't peel anything else.\n3. PLACE -- Apply image-side down on skin. Clean skin. Yours or someone else's -- your call.\n4. APPLY -- Press with a wet cloth for 30 seconds. Like CPR, but for your reputation.\n5. PEEL -- Slide off the backing. Admire yourself. You've earned this.\n6. ALLOW -- Let dry for 60 seconds. Resist the urge to touch it. Or explain it.\n7. DISPLAY -- Wear it to the Monday stand-up. Maintain eye contact.\n\n[7-step instructions in institutional manual style. Each step has a functional directive + editorial commentary.]");

    // B8: Product Description (right of B7, top)
    var b8x = backFull_x + b7w + 8;
    var b8w = backFull_w - b7w - 8;
    var b8h = 0.7 * PT;
    drawBlock(backLayer, b8x, b7y, b8w, b8h,
        "B8",
        "Six commendations. Each one earned through documented workplace experience. The branding iron tested well internally. Legal suggested something \"reversible.\" We compromised. Reluctantly.\n\n[Product description -- institutional paragraph format]");

    // B9: Care Tips (right of B7, below B8)
    var b9y = b7y - b8h - 4;
    var b9h = 0.5 * PT;
    drawBlock(backLayer, b8x, b9y, b8w, b9h,
        "B9",
        "LASTS 3-5 DAYS. Someone will scratch it. With a fingernail, that's curiosity. With a coin, that's due diligence. With a lighter, that's a felony.\n\n[Care/durability note -- dry institutional tone]");

    // B10: Customer Review (below B7 instructions, left)
    var b10y = b7y - b7h - 4;
    var b10w = backFull_w * 0.5 - 4;
    var b10h = 0.5 * PT;
    drawBlock(backLayer, backFull_x, b10y, b10w, b10h,
        "B10",
        "****  -- \"Four stars. Only comes with one teardrop. Some of us have had a busy quarter.\"\n\n[Customer review format -- 4 of 5 stars visual]");

    // B11: Disclaimer + Ingredients (right side, beside B10)
    drawBlock(backLayer, backFull_x + b10w + 8, b10y, b10w, b10h,
        "B11",
        "Do not apply to open wounds, job interviews, or your forehead. One of those is from experience.\n\nActive Ingredients: Commitment (2-5 Day Supply). Inactive Ingredients: Everything else in your career.\n\n[Disclaimer + ingredients -- pharmaceutical label format]");

    // B12: Kevin Callout + Orphaned Small Copy
    var b12y = b10y - b10h - 4;
    var b12h = 0.35 * PT;
    drawBlock(backLayer, backFull_x, b12y, backFull_w, b12h,
        "B12",
        "May contain traces of Kevin.  |  PERMANENT RECORD  |  [4 laundry care symbols, all X'd out]\n\n[Full-width fine print strip -- Kevin callout left, PERMANENT RECORD rubber stamp center, X'd care symbols right. Orphaned small-surface copy consolidated into one decorative strip.]");

    // B13: Removal (functional line)
    var b13y = b12y - b12h - 3;
    var b13h = 0.25 * PT;
    drawBlock(backLayer, backFull_x, b13y, backFull_w, b13h,
        "B13",
        "REMOVAL: Apply rubbing alcohol or baby oil. Gently rub. If anyone asks, you were never here.\n\n[Functional removal instructions with one editorial flourish at the end]");


    // Dimensions
    drawDimension(backLayer, bx, by + 22, bx + CARD_W, by + 22, "13.25\"");
    drawDimension(backLayer, bx - 22, by, bx - 22, by - CARD_H, "10.75\"");

    // Title
    drawLabel(backLayer, "LIFER INK - CARD BACK", bx, by + 38, 12, CLR_TEXT, FONT_BOLD);
    drawLabel(backLayer, "Full copy in every block  |  B1-B4 top row (Distinguished Honorees)  |  B5-B13 full-width (achievements, instructions, fine print)  |  All blocks movable", bx, by + 52, 7, CLR_GRAY, FONT_LABEL);


    // ============================================================
    // LEGEND
    // ============================================================

    var legendLayer = doc.layers.add();
    legendLayer.name = "Legend";

    var ly = oy - CARD_H - 40;
    drawLabel(legendLayer, "LEGEND", ox, ly, 10, CLR_TEXT, FONT_BOLD);

    var sw_y = ly - 18;
    drawRect(legendLayer, ox, sw_y, 14, 14, CLR_ELEMENT, CLR_ELEMENT_STROKE, 1);
    drawLabel(legendLayer, "= Copy element block (full text inside -- movable)", ox + 20, sw_y - 2, 7, CLR_TEXT, FONT_LABEL);

    var sw2_y = sw_y - 18;
    drawRect(legendLayer, ox, sw2_y, 14, 14, CLR_FLAP, CLR_FLAP_STROKE, 1);
    drawLabel(legendLayer, "= Fold-over flap / hidden surface (replaces PETG blister)", ox + 20, sw2_y - 2, 7, CLR_TEXT, FONT_LABEL);

    var sw3_y = sw2_y - 18;
    drawRect(legendLayer, ox, sw3_y, 14, 14, CLR_NOTCH, CLR_NOTCH_STROKE, 0.5);
    drawLabel(legendLayer, "= Structural notch (no design content)", ox + 20, sw3_y - 2, 7, CLR_TEXT, FONT_LABEL);

    var sw4_y = sw3_y - 18;
    drawLabel(legendLayer, "Red dashed = dimension annotation", ox + 20, sw4_y - 2, 7, CLR_DIM, FONT_LABEL);

    var sw5_y = sw4_y - 22;
    drawLabel(legendLayer, "LAYOUT: Each block contains FULL COPY from surface map. Heights reflect actual content density. Move blocks like Lego pieces to optimize layout.",
        ox, sw5_y, 7, CLR_TEXT, FONT_BOLD);
    drawLabel(legendLayer, "ITEM: Tuck-end box (~5.0\" x 3.5\" x 0.5\") containing 6 tattoo sheets + 1 achievement card. Held by fold-over flap.",
        ox, sw5_y - 13, 7, CLR_TEXT, FONT_LABEL);
    drawLabel(legendLayer, "FLAP STRUCTURE: Flap is a physical extension of card stock below the bottom edge. It folds upward to cover the tuck-end box.",
        ox, sw5_y - 26, 7, CLR_TEXT, FONT_LABEL);


    // Clean up default layer
    try {
        var defaultLayer = doc.layers.getByName("Layer 1");
        if (defaultLayer.pageItems.length === 0) { defaultLayer.remove(); }
    } catch (e) {}

    doc.artboards.setActiveArtboardIndex(0);

    alert("Wireframe created!\n\nFULL COPY VERSION\n\nArtboard 1: Card Front (13 elements + flap + tuck box zone)\nArtboard 2: Card Back (13 elements)\n\nEvery block contains its complete copy text.\nBlock heights reflect actual content density.\nBlocks are movable -- rearrange like Lego pieces.\n\nBlue = copy elements\nPeach = flap/hidden surfaces\nGray = structural notch");

})();
