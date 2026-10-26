/*
 * Lifer Ink -- REFERENCE WIREFRAME (Block IDs Only)
 * Adobe Illustrator ExtendScript (.jsx)
 *
 * Run via: File > Scripts > Other Script... > select this file
 *
 * PURPOSE: Screenshot this and send to AI image generator.
 * Each block shows ONLY its large ID label (F1, B4, etc.) so the layout
 * reads cleanly as a reference grid. No copy text inside blocks.
 *
 * Use the companion copy reference sheet to feed copy into each block
 * one at a time after choosing a visual theme.
 *
 * Layout is identical to lifer-ink-wireframe.jsx (the copy version).
 */

// ============================================================
// CONFIG
// ============================================================

var PT = 72;

var CARD_W = 13.25 * PT;
var CARD_H = 10.75 * PT;
var NOTCH_W = 4.75 * PT;
var NOTCH_H = 3.75 * PT;

var FLAP_W = 6.5 * PT;
var FLAP_H = 1.5 * PT;

var ARTBOARD_GAP = 1.5 * PT;

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
 * drawZone() - Creates a block with a LARGE CENTERED ID label only.
 * No copy text. Designed for clean screenshots to feed to image AI.
 */
function drawZone(layer, left, top, w, h, id, fillClr, strokeClr) {
    var rect = drawRect(layer, left, top, w, h, fillClr || CLR_ELEMENT, strokeClr || CLR_ELEMENT_STROKE, 1.5);

    // Large centered ID label
    var fontSize = 18;
    if (w < 2 * PT || h < 0.5 * PT) fontSize = 14;
    if (w < 1.5 * PT || h < 0.35 * PT) fontSize = 11;
    if (w > 4 * PT && h > 1 * PT) fontSize = 24;
    if (h > 2 * PT) fontSize = 28;

    var labelX = left + w / 2 - fontSize * id.length * 0.3;
    var labelY = top - h / 2 + fontSize / 3;
    drawLabel(layer, id, labelX, labelY, fontSize, CLR_TEXT, FONT_BOLD);

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

    var FLAP_EXTRA = FLAP_H + FLAP_H * 0.6 + 20;
    var doc = app.documents.add(DocumentColorSpace.RGB, CARD_W * 2 + ARTBOARD_GAP, CARD_H + FLAP_EXTRA);

    var margin = 0.5 * PT;
    var ab1 = doc.artboards[0];
    ab1.name = "CARD FRONT";
    ab1.artboardRect = [0 - margin, 0 + margin, CARD_W + margin, 0 - CARD_H - FLAP_EXTRA - margin];

    var ab2Offset = CARD_W + ARTBOARD_GAP;
    doc.artboards.add([ab2Offset - margin, 0 + margin, ab2Offset + CARD_W + margin, 0 - CARD_H - margin]);
    doc.artboards[1].name = "CARD BACK";


    // ============================================================
    // CARD FRONT
    // ============================================================

    var frontLayer = doc.layers.add();
    frontLayer.name = "Card Front";

    var ox = 0;
    var oy = 0;
    var pad = 10;

    drawLCard(frontLayer, ox, oy, CLR_WHITE, CLR_OUTLINE, 2);

    var frontNotch = drawRect(frontLayer, ox, oy, NOTCH_W, NOTCH_H, CLR_NOTCH, CLR_NOTCH_STROKE, 0.5);
    frontNotch.zOrder(ZOrderMethod.SENDTOBACK);
    drawLabel(frontLayer, "NOTCH", ox + NOTCH_W / 2 - 20, oy - NOTCH_H / 2 + 4, 10, CLR_GRAY, FONT_BOLD);

    var topRow_x = ox + NOTCH_W + pad;
    var topRow_y = oy - pad;
    var topRow_w = CARD_W - NOTCH_W - pad * 2;

    var fullRow_x = ox + pad;
    var fullRow_y = oy - NOTCH_H - pad;
    var fullRow_w = CARD_W - pad * 2;

    // ---- TOP ROW ----

    // F1
    var f1h = 0.3 * PT;
    var f1w = 2.5 * PT;
    drawZone(frontLayer, topRow_x, topRow_y, f1w, f1h, "F1");

    // F2
    var f2y = topRow_y - f1h - 3;
    var f2h = 0.35 * PT;
    var f2w = 5.5 * PT;
    drawZone(frontLayer, topRow_x, f2y, f2w, f2h, "F2");

    // F3
    var f3y = f2y - f2h - 3;
    var f3h = 0.3 * PT;
    var f3w = 5.5 * PT;
    drawZone(frontLayer, topRow_x, f3y, f3w, f3h, "F3");

    // F4
    var f4y = f3y - f3h - 4;
    var f4w = topRow_w;
    var f4h = 1.0 * PT;
    drawZone(frontLayer, topRow_x, f4y, f4w, f4h, "F4");

    // F5
    var f5y = f4y - f4h - 3;
    var f5h = 0.35 * PT;
    var f5w = topRow_w;
    drawZone(frontLayer, topRow_x, f5y, f5w, f5h, "F5");

    // F6
    var f6y = f5y - f5h - 3;
    var f6h = 0.4 * PT;
    var f6w = topRow_w;
    drawZone(frontLayer, topRow_x, f6y, f6w, f6h, "F6");

    // ---- FULL-WIDTH AREA ----

    // F7 (right side)
    var f7w = 2.5 * PT;
    var f7h = 1.6 * PT;
    var f7x = fullRow_x + fullRow_w - f7w;
    drawZone(frontLayer, f7x, fullRow_y, f7w, f7h, "F7");

    // F8 (left side, beside F7)
    var f8w = fullRow_w - f7w - 8;
    var f8h = 1.6 * PT;
    drawZone(frontLayer, fullRow_x, fullRow_y, f8w, f8h, "F8");

    // F9
    var f9y = fullRow_y - f8h - 4;
    var f9h = 0.45 * PT;
    drawZone(frontLayer, fullRow_x, f9y, fullRow_w, f9h, "F9");

    // F10
    var f10y = f9y - f9h - 3;
    var f10h = 0.45 * PT;
    drawZone(frontLayer, fullRow_x, f10y, fullRow_w, f10h, "F10");

    // F11
    var f11y = f10y - f10h - 4;
    var f11h = 0.45 * PT;
    var f11w = fullRow_w * 0.5;
    drawZone(frontLayer, fullRow_x, f11y, f11w, f11h, "F11");

    // F12
    var f12y = f11y - f11h - 3;
    var f12h = 0.4 * PT;
    drawZone(frontLayer, fullRow_x, f12y, fullRow_w, f12h, "F12");

    // F13
    var f13y = f12y - f12h - 3;
    var f13h = 0.35 * PT;
    drawZone(frontLayer, fullRow_x, f13y, fullRow_w, f13h, "F13", CLR_FLAP, CLR_FLAP_STROKE);

    // ---- TUCK-END BOX ZONE ----
    var boxW = 5.0 * PT;
    var boxH = 3.5 * PT;
    var flap_x = fullRow_x + (fullRow_w - FLAP_W) / 2;
    var foldY = oy - CARD_H;

    var box_top = f13y - f13h - 6;
    var box_x = flap_x + (FLAP_W - boxW) / 2;
    drawDashedRect(frontLayer, box_x, box_top, boxW, boxH, CLR_FLAP_STROKE, 0.75);
    drawLabel(frontLayer, "TUCK BOX", box_x + boxW / 2 - 30, box_top - boxH / 2 + 5, 10, CLR_FLAP_STROKE, FONT_BOLD);

    // FOLD LINE
    var foldLine = frontLayer.pathItems.add();
    foldLine.setEntirePath([[flap_x - 8, foldY], [flap_x + FLAP_W + 8, foldY]]);
    noFill(foldLine);
    applyStroke(foldLine, CLR_FLAP_STROKE, 1.5);
    foldLine.strokeDashes = [8, 4];
    drawLabel(frontLayer, "--- FOLD LINE ---", flap_x + FLAP_W / 2 - 40, foldY + 10, 7, CLR_FLAP_STROKE, FONT_BOLD);

    // FLAP EXTERIOR
    var flapExt_y = foldY;
    drawZone(frontLayer, flap_x, flapExt_y, FLAP_W, FLAP_H, "FLAP EXT", CLR_FLAP, CLR_FLAP_STROKE);

    // FLAP INTERIOR
    var flapInt_y = flapExt_y - FLAP_H - 6;
    var flapIntH = FLAP_H * 0.6;
    drawZone(frontLayer, flap_x, flapInt_y, FLAP_W, flapIntH, "FLAP INT", CLR_FLAP, CLR_FLAP_STROKE);

    // ---- DIMENSIONS ----
    drawDimension(frontLayer, ox, oy + 22, ox + CARD_W, oy + 22, "13.25\"");
    drawDimension(frontLayer, ox - 22, oy, ox - 22, oy - CARD_H, "10.75\"");
    drawDimension(frontLayer, ox, oy + 11, ox + NOTCH_W, oy + 11, "4.75\"");
    drawDimension(frontLayer, ox - 11, oy, ox - 11, oy - NOTCH_H, "3.75\"");

    drawLabel(frontLayer, "LIFER INK - CARD FRONT (Reference)", ox, oy + 38, 12, CLR_TEXT, FONT_BOLD);
    drawLabel(frontLayer, "Block IDs only -- screenshot for AI image generation  |  Blue = copy blocks  |  Peach = flap/hidden  |  Gray = notch", ox, oy + 52, 7, CLR_GRAY, FONT_LABEL);


    // ============================================================
    // CARD BACK
    // ============================================================

    var backLayer = doc.layers.add();
    backLayer.name = "Card Back";

    var bx = ab2Offset;
    var by = 0;

    drawLCardMirrored(backLayer, bx, by, CLR_WHITE, CLR_OUTLINE, 2);

    var notchIndicator = drawRect(backLayer, bx + CARD_W - NOTCH_W, by, NOTCH_W, NOTCH_H, CLR_NOTCH, CLR_NOTCH_STROKE, 0.5);
    notchIndicator.zOrder(ZOrderMethod.SENDTOBACK);
    drawLabel(backLayer, "NOTCH", bx + CARD_W - NOTCH_W / 2 - 20, by - NOTCH_H / 2 + 4, 10, CLR_GRAY, FONT_BOLD);

    var backTopRow_x = bx + pad;
    var backTopRow_y = by - pad;
    var backTopRow_w = CARD_W - NOTCH_W - pad * 2;

    var backFull_x = bx + pad;
    var backFull_y = by - NOTCH_H - pad;
    var backFull_w = CARD_W - pad * 2;

    // ---- BACK TOP ROW ----

    // B1
    var b1h = 0.4 * PT;
    drawZone(backLayer, backTopRow_x, backTopRow_y, backTopRow_w, b1h, "B1");

    // B2 (left)
    var b2y = backTopRow_y - b1h - 4;
    var b2w = backTopRow_w / 2 - 4;
    var b2h = 1.6 * PT;
    drawZone(backLayer, backTopRow_x, b2y, b2w, b2h, "B2");

    // B3 (right)
    drawZone(backLayer, backTopRow_x + b2w + 8, b2y, b2w, b2h, "B3");

    // B4
    var b4y = b2y - b2h - 4;
    var b4h = 0.55 * PT;
    drawZone(backLayer, backTopRow_x, b4y, backTopRow_w, b4h, "B4");

    // ---- FULL-WIDTH AREA ----

    // B5
    var b5h = 0.35 * PT;
    drawZone(backLayer, backFull_x, backFull_y, backFull_w, b5h, "B5");

    // B6
    var b6y = backFull_y - b5h - 4;
    var b6h = 1.8 * PT;
    drawZone(backLayer, backFull_x, b6y, backFull_w, b6h, "B6");

    // B7 (left, below B6)
    var b7y = b6y - b6h - 4;
    var b7w = backFull_w * 0.55;
    var b7h = 1.3 * PT;
    drawZone(backLayer, backFull_x, b7y, b7w, b7h, "B7");

    // B8 (right of B7, top)
    var b8x = backFull_x + b7w + 8;
    var b8w = backFull_w - b7w - 8;
    var b8h = 0.7 * PT;
    drawZone(backLayer, b8x, b7y, b8w, b8h, "B8");

    // B9 (right of B7, below B8)
    var b9y = b7y - b8h - 4;
    var b9h = 0.5 * PT;
    drawZone(backLayer, b8x, b9y, b8w, b9h, "B9");

    // B10 (left, below B7)
    var b10y = b7y - b7h - 4;
    var b10w = backFull_w * 0.5 - 4;
    var b10h = 0.5 * PT;
    drawZone(backLayer, backFull_x, b10y, b10w, b10h, "B10");

    // B11 (right, beside B10)
    drawZone(backLayer, backFull_x + b10w + 8, b10y, b10w, b10h, "B11");

    // B12
    var b12y = b10y - b10h - 4;
    var b12h = 0.35 * PT;
    drawZone(backLayer, backFull_x, b12y, backFull_w, b12h, "B12");

    // B13
    var b13y = b12y - b12h - 3;
    var b13h = 0.25 * PT;
    drawZone(backLayer, backFull_x, b13y, backFull_w, b13h, "B13");

    // Dimensions
    drawDimension(backLayer, bx, by + 22, bx + CARD_W, by + 22, "13.25\"");
    drawDimension(backLayer, bx - 22, by, bx - 22, by - CARD_H, "10.75\"");

    drawLabel(backLayer, "LIFER INK - CARD BACK (Reference)", bx, by + 38, 12, CLR_TEXT, FONT_BOLD);
    drawLabel(backLayer, "Block IDs only -- screenshot for AI image generation  |  B1-B4 top row  |  B5-B13 full-width", bx, by + 52, 7, CLR_GRAY, FONT_LABEL);


    // Clean up default layer
    try {
        var defaultLayer = doc.layers.getByName("Layer 1");
        if (defaultLayer.pageItems.length === 0) { defaultLayer.remove(); }
    } catch (e) {}

    doc.artboards.setActiveArtboardIndex(0);

    alert("Reference wireframe created!\n\nBLOCK IDs ONLY -- no copy text.\n\nScreenshot both artboards and send to your\nAI image generator with the companion prompt.\n\nUse the copy reference sheet to fill in\nblocks one at a time after choosing a theme.");

})();
