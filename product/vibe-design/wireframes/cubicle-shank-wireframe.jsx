/*
 * Cubicle Shank -- Fold-Over Flap Wireframe
 * Adobe Illustrator ExtendScript (.jsx)
 *
 * Run via: File > Scripts > Other Script... > select this file
 *
 * Creates two artboards:
 *   1. CARD FRONT (unified layout, notch structural only, flap at bottom edge)
 *   2. CARD BACK (all 14 elements)
 *
 * All dimensions in inches, converted to points (1 inch = 72 pt).
 * Card: 13.25" wide x 10.75" tall, L-shaped (4.75" x 3.75" notch upper-left).
 * The notch is a structural cut for mug box clearance - NOT a design zone.
 * The entire card face is one continuous marketing surface.
 * The flap is a physical extension from the card's BOTTOM edge, folding upward
 * over the pen. Flap exterior + interior are shown below the fold line.
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

// Flap dimensions (pen area)
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
 *   id       - block ID label, e.g. "E4" (drawn in top-left corner in bold)
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
    // Reading order: E1 (brand) > E2 (division) > E3 (slogan) > E4 (hero) > E5 > E6
    // All stacked vertically in the top row so the eye flows naturally top-to-bottom.

    // E1: Brand Logo
    var e1h = 0.3 * PT;
    var e1w = 2.5 * PT;
    drawBlock(frontLayer, topRow_x, topRow_y, e1w, e1h,
        "E1",
        "WITTY YETI\n\n[Brand logo]");

    // E2: Division Name + Tagline
    var e2y = topRow_y - e1h - 3;
    var e2h = 0.4 * PT;
    var e2w = 5.5 * PT;
    drawBlock(frontLayer, topRow_x, e2y, e2w, e2h,
        "E2",
        "O3 -- Office Offense Outfitters\nBecause it keeps you more alive than O2.\n\n[Visually subordinate tagline]");

    // E3: Division Slogan + icons
    var e3y = e2y - e2h - 3;
    var e3h = 0.35 * PT;
    var e3w = 5.5 * PT;
    drawBlock(frontLayer, topRow_x, e3y, e3w, e3h,
        "E3",
        "Arming the 9-to-5 since the 5-to-9.\n\n[Clock/briefcase + jail cell icons]");

    // E4: Product Name (hero headline - in top row, right of notch)
    var e4y = e3y - e3h - 4;
    var e4w = topRow_w;
    var e4h = 1.0 * PT;
    drawBlock(frontLayer, topRow_x, e4y, e4w, e4h,
        "E4",
        "CUBICLE SHANK\n\n[Hero headline -- largest text on card. Large, bold, condensed. Should read from several feet away. Dominant visual element.]");

    // E5: Primary Subtitle
    var e5y = e4y - e4h - 3;
    var e5h = 0.4 * PT;
    var e5w = topRow_w;
    drawBlock(frontLayer, topRow_x, e5y, e5w, e5h,
        "E5",
        "The pen that ends sentences. May also extend yours.\n\n[Subtitle directly below product name, smaller]");

    // E6: Primary Tagline
    var e6y = e5y - e5h - 3;
    var e6h = 0.4 * PT;
    var e6w = topRow_w;
    drawBlock(frontLayer, topRow_x, e6y, e6w, e6h,
        "E6",
        "Writes in black. Moonlights in red. Racks up PTO and a body count spread.\n\n[Primary tagline]");


    // ---- FULL-WIDTH AREA (below notch line) ----
    // E7-E8 side by side, then E9-E10 fine print, then B13+B14 (moved from back)

    // E7: Good Shanking Seal of Approval (right side)
    var e7w = 2.5 * PT;
    var e7h = 1.6 * PT;
    var e7x = fullRow_x + fullRow_w - e7w;
    drawBlock(frontLayer, e7x, fullRow_y, e7w, e7h,
        "E7",
        "GOOD SHANKING\nSEAL OF APPROVAL\n\n[Oval/shield seal with ornate border and ribbon, styled as Good Housekeeping Seal parody]\n\n[Center: Retro-illustrated Carl (custodial worker) with mop]\n\n\"That'll buff out.\"\n-- Carl, Custodial");

    // E8: Quantity Line + Premium Experience footnote (left side, beside seal)
    var e8w = fullRow_w - e7w - 8;
    var e8h = 1.6 * PT;
    drawBlock(frontLayer, fullRow_x, fullRow_y, e8w, e8h,
        "E8",
        "Qty: 1 pen. Ink refills sold separately. Accessories sold very separately.*\n\n*The Cubicle Shank Premium Experience(TM) includes: holster (thigh or desk-mount), burner phone (pre-loaded), getaway car (compact), and one (1) character witness named Doug. Doug has been briefed. Doug will not break.\n\n[Small institutional text. The footnote is the full Premium Experience accessories list. The TM on \"Premium Experience\" is intentional.]");

    // E9: Fine Print Line 1
    var e9y = fullRow_y - e8h - 4;
    var e9h = 0.45 * PT;
    drawBlock(frontLayer, fullRow_x, e9y, fullRow_w, e9h,
        "E9",
        "Patent pending. Trial also pending. Jury still out. Literally.\n\n[7pt fine print -- bottom edge]");

    // E10: Fine Print Line 2
    var e10y = e9y - e9h - 3;
    var e10h = 0.45 * PT;
    drawBlock(frontLayer, fullRow_x, e10y, fullRow_w, e10h,
        "E10",
        "Tested on animals would've been easier to explain to HR.\n\n[7pt fine print -- bottom edge]");

    // B13: Smooth Criminal (moved from back to front)
    var fb13y = e10y - e10h - 6;
    var fb13h = 0.45 * PT;
    drawBlock(frontLayer, fullRow_x, fb13y, fullRow_w, fb13h,
        "B13",
        "Smooth ink. Smooth barrel. Smooth criminal. One of those got past Legal.\n\n[Secondary tagline -- moved to front for balance]");

    // B14: Excalibur (moved from back to front)
    var fb14y = fb13y - fb13h - 3;
    var fb14h = 0.45 * PT;
    drawBlock(frontLayer, fullRow_x, fb14y, fullRow_w, fb14h,
        "B14",
        "Excalibur had a stone. Ours had an intern. HR had questions.\n\n[Fine print tagline -- moved to front for balance]");

    // ---- E11 (directly below B14) ----
    var e11y = fb14y - fb14h - 3;
    var e11h = 0.35 * PT;
    drawBlock(frontLayer, fullRow_x, e11y, fullRow_w, e11h,
        "E11",
        "CUSTOMER QUESTION: \"Does it come in red?\"\nANSWER: Eventually.\n\n[Layer 4 discovery -- hidden under pen. Small Q&A block revealed when pen is removed.]",
        CLR_FLAP, CLR_FLAP_STROKE);

    // ---- PEN AREA (below E11) ----
    var penW = 5.5 * PT;
    var penH = 0.6 * PT;
    var flap_x = fullRow_x + (fullRow_w - FLAP_W) / 2;
    var foldY = oy - CARD_H; // card bottom edge

    var pen_top = e11y - e11h - 4;
    var pen_x = flap_x + (FLAP_W - penW) / 2;
    drawDashedRect(frontLayer, pen_x, pen_top, penW, penH, CLR_FLAP_STROKE, 0.75);
    drawLabel(frontLayer, "PEN (5.5\" x 0.6\")", pen_x + 10, pen_top - penH / 2 + 4, 5.5, CLR_FLAP_STROKE, FONT_LABEL);

    // FOLD LINE at card bottom edge (foldY already defined above)
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
        "Flap exterior -- 6.5\" x 1.5\"\nFolds UP over pen -- visible when closed.\n\n[Marketing surface: product branding, tagline, or call to action. This is the first thing a customer sees before opening.]",
        CLR_FLAP, CLR_FLAP_STROKE);

    // FLAP INTERIOR (inside face, revealed on open)
    var flapInt_y = flapExt_y - FLAP_H - 6;
    var flapIntH = FLAP_H * 0.6;
    drawBlock(frontLayer, flap_x, flapInt_y, FLAP_W, flapIntH,
        "FLAP INT",
        "Flap interior -- revealed when opened.\nHidden content / Layer 4 discovery.\n\n[Easter egg, secret message, or bonus content visible only after flap is lifted.]",
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
    drawLabel(frontLayer, "CUBICLE SHANK - CARD FRONT (Fold-Over Flap)", ox, oy + 38, 12, CLR_TEXT, FONT_BOLD);
    drawLabel(frontLayer, "Full copy in every block  |  Blue = copy elements  |  Peach = flap surfaces  |  Notch = structural only  |  Blocks are movable Lego pieces", ox, oy + 52, 7, CLR_GRAY, FONT_LABEL);


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
    // B4-B6 (Feature Bullets) + B12 (Chain Pun Tagline) go here.
    // These are direct extensions of the chart argument -- reads naturally
    // before/alongside the comparison chart below.

    // B4: Feature Bullet 1
    var b4h = 0.55 * PT;
    drawBlock(backLayer, backTopRow_x, backTopRow_y, backTopRow_w, b4h,
        "B4",
        "Other pens quit mid-sentence. Ours keeps going. Through the sentence. Through the paragraph. Through a light jacket...\n\n[Feature bullet 1]");

    // B5: Feature Bullet 2
    var b5y = backTopRow_y - b4h - 4;
    var b5h = 0.45 * PT;
    drawBlock(backLayer, backTopRow_x, b5y, backTopRow_w, b5h,
        "B5",
        "Grip tested across relaxed hands, writing hands, and one we'd describe as \"determined.\"\n\n[Feature bullet 2]");

    // B6: Feature Bullet 3
    var b6y = b5y - b5h - 4;
    var b6h = 0.55 * PT;
    drawBlock(backLayer, backTopRow_x, b6y, backTopRow_w, b6h,
        "B6",
        "Other pens leak in your pocket. This one doesn't leak anywhere. Not in your pocket. Not in your hand. Not in Kevin. Completely leak-proof design.\n\n[Feature bullet 3 -- boss-approved]");

    // B12: Chain Pun Tagline
    var b12y = b6y - b6h - 4;
    var b12h = 0.55 * PT;
    drawBlock(backLayer, backTopRow_x, b12y, backTopRow_w, b12h,
        "B12",
        "We put the pen in penitentiary. The con in conference room. The shank in Shawshank. And the stab in stability.\n\n[Chain pun -- words \"pen,\" \"con,\" \"shank,\" \"stab\" visually emphasized (italic, bold, or different color) within the larger words.]");


    // ---- FULL-WIDTH AREA (below notch line) ----

    // B1: Chart Title
    var b1h = 0.4 * PT;
    drawBlock(backLayer, backFull_x, backFull_y, backFull_w, b1h,
        "B1",
        "BEFORE YOU COMMIT: KNOW YOUR OPTIONS\n\n[Chart title -- prominent header, bold condensed uppercase]");

    // B2: Comparison Chart (7 rows x 4 columns -- main content block)
    var b2y = backFull_y - b1h - 4;
    var b2h = 3.2 * PT;
    drawBlock(backLayer, backFull_x, b2y, backFull_w, b2h,
        "B2",
        "A GOOSE | A BABY | A NURSING HOME | CUBICLE SHANK\n\nTHROWABLE: It'll throw itself | Farther than you'd think | The bedpan incident is on file | Aerodynamic, actually\n\nCAN BE RETURNED: It comes back anyway | Check local laws | Ask the family | Not while it's still in Kevin\n\nESCAPE RISK: Runs at 20. Flies at 40. You do neither. | It has your face and your DNA. Good luck. | Room 4 keeps trying | Once it's in, it's in\n\nELEMENT OF SURPRISE: Has teeth on its tongue. What else don't you know? | Sleeper agent | Edith has a taser | Writes beautifully, actually\n\nSMELLS: Pond water and rage | Both ends | Something they keep spraying over | Fear, tears, then beers\n\nTHANKSGIVING: Stuffed and in the oven | Mandatory | Grandma's coming either way | Uncle Steve did\n\nODDS OF WALKING AWAY: Yours? Not great | 18+ years | Declining but gently | They'll be carried, actually");

    // Column dividers inside chart
    var colW = backFull_w / 4;
    for (var c = 1; c < 4; c++) {
        drawDashedLine(backLayer,
            backFull_x + colW * c, b2y,
            backFull_x + colW * c, b2y - b2h,
            CLR_ELEMENT_STROKE, 0.3);
    }
    // Row dividers (7 rows + header = 8 sections)
    var rowH = b2h / 8;
    for (var r = 1; r < 8; r++) {
        drawDashedLine(backLayer,
            backFull_x, b2y - rowH * r,
            backFull_x + backFull_w, b2y - rowH * r,
            CLR_ELEMENT_STROKE, 0.2);
    }

    // B3: Chart Footer
    var b3y = b2y - b2h - 4;
    var b3h = 0.3 * PT;
    drawBlock(backLayer, backFull_x, b3y, backFull_w, b3h,
        "B3",
        "Study discontinued. Not because of the goose. We wish it had been the goose.\n\n[Chart footer -- italic]");

    // ---- POST-CHART: B7-B11 (Reviews, Assisted Shiving, Warnings) ----
    // These are self-contained blocks that work as secondary content below the chart.

    // B7-B8: Coroner Reviews (side by side)
    var b7y = b3y - b3h - 6;
    var b7w = backFull_w / 2 - 4;
    var b7h = 0.6 * PT;
    drawBlock(backLayer, backFull_x, b7y, b7w, b7h,
        "B7",
        "\"Five stars. And we don't usually rate the evidence.\"\n-- County Coroner's Office\n\n[Styled as product review quote. Star rating visual (5 stars) optional.]");

    drawBlock(backLayer, backFull_x + b7w + 8, b7y, b7w, b7h,
        "B8",
        "\"Effective. Reliable. Surprisingly comfortable to hold. We shouldn't know that last part.\"\n-- Office of the Medical Examiner\n\n[Product review quote format.]");

    // B9: Assisted Shiving (below reviews, left side)
    var b9y = b7y - b7h - 4;
    var b9h = 1.2 * PT;
    var b9w = backFull_w * 0.5;
    drawBlock(backLayer, backFull_x, b9y, b9w, b9h,
        "B9",
        "COMING TO A FACILITY NEAR YOU\n\nASSISTED SHIVING\n\nFits walkers, canes, and hip replacements. Talk to your doctor.\n\n\"Finally.\" -- Edith, Room 4\n\nEDITOR'S PICK -- Geriatric Defense Quarterly\n\n[Self-contained teaser block. Illustration: Edith with walker and taser holster. \"ASSISTED SHIVING\" plays on \"assisted living.\"]");

    // B10-B11: Warnings (right of B9, stacked)
    var warnX = backFull_x + b9w + 8;
    var warnW = backFull_w - b9w - 8;
    var b10h = 0.55 * PT;
    drawBlock(backLayer, warnX, b9y, warnW, b10h,
        "B10",
        "CAUTION: Not a letter opener. We know. We saw the video. So did the jury.\n\n[Warning format -- institutional caution label]");

    var b11y = b9y - b10h - 3;
    var b11h = 0.55 * PT;
    drawBlock(backLayer, warnX, b11y, warnW, b11h,
        "B11",
        "AGES 16+. Child labor laws. You can't shank someone if you can't legally be in the building.\n\n[Warning format -- age restriction label]");

    // B13+B14 moved to card front


    // Dimensions
    drawDimension(backLayer, bx, by + 22, bx + CARD_W, by + 22, "13.25\"");
    drawDimension(backLayer, bx - 22, by, bx - 22, by - CARD_H, "10.75\"");

    // Title
    drawLabel(backLayer, "CUBICLE SHANK - CARD BACK", bx, by + 38, 12, CLR_TEXT, FONT_BOLD);
    drawLabel(backLayer, "Full copy in every block  |  B4-B6, B12 top row  |  B1-B3 chart  |  B7-B11 below chart  |  B13-B14 on front  |  All blocks movable", bx, by + 52, 7, CLR_GRAY, FONT_LABEL);


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
    drawLabel(legendLayer, "= Fold-over flap surface (replaces PETG blister)", ox + 20, sw2_y - 2, 7, CLR_TEXT, FONT_LABEL);

    var sw3_y = sw2_y - 18;
    drawRect(legendLayer, ox, sw3_y, 14, 14, CLR_NOTCH, CLR_NOTCH_STROKE, 0.5);
    drawLabel(legendLayer, "= Structural notch (no design content)", ox + 20, sw3_y - 2, 7, CLR_TEXT, FONT_LABEL);

    var sw4_y = sw3_y - 18;
    drawLabel(legendLayer, "Red dashed = dimension annotation", ox + 20, sw4_y - 2, 7, CLR_DIM, FONT_LABEL);

    var sw5_y = sw4_y - 22;
    drawLabel(legendLayer, "LAYOUT: Each block contains FULL COPY from surface map. Heights reflect actual content density. Move blocks like Lego pieces to optimize layout.",
        ox, sw5_y, 7, CLR_TEXT, FONT_BOLD);
    drawLabel(legendLayer, "STACK PROFILE: ~0.70\" per card. 7 cards = 4.10\" total. Fold-over flap replaces PETG blister, adds ~26 sq in printable surface.",
        ox, sw5_y - 13, 7, CLR_TEXT, FONT_LABEL);
    drawLabel(legendLayer, "FLAP STRUCTURE: Flap is a physical extension of card stock below the bottom edge. It folds upward to cover the pen.",
        ox, sw5_y - 26, 7, CLR_TEXT, FONT_LABEL);


    // Clean up default layer
    try {
        var defaultLayer = doc.layers.getByName("Layer 1");
        if (defaultLayer.pageItems.length === 0) { defaultLayer.remove(); }
    } catch (e) {}

    doc.artboards.setActiveArtboardIndex(0);

    alert("Wireframe created!\n\nFULL COPY VERSION\n\nArtboard 1: Card Front (11 elements + flap)\nArtboard 2: Card Back (14 elements)\n\nEvery block contains its complete copy text.\nBlock heights reflect actual content density.\nBlocks are movable -- rearrange like Lego pieces.\n\nBlue = copy elements\nPeach = flap surfaces\nGray = structural notch");

})();
