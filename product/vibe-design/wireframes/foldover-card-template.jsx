/*
 * Fold-Over Flap Card -- GENERIC TEMPLATE
 * Adobe Illustrator ExtendScript (.jsx)
 *
 * Run via: File > Scripts > Other Script... > select this file
 *
 * TEMPLATE VERSION: Each block has a large descriptive label (e.g. "BRAND LOGO",
 * "HERO HEADLINE") instead of product-specific copy. Duplicate this file for each
 * product, then swap in that product's copy.
 *
 * Creates two artboards:
 *   1. CARD FRONT (display face)
 *   2. CARD BACK (information face)
 *
 * Card: 13.25" wide x 10.75" tall, L-shaped (4.75" x 3.75" notch upper-left).
 * Fold-over flap extends from card bottom edge, folds upward over product.
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
 * drawZone() - Template version of drawBlock.
 * Draws a colored rectangle with a LARGE centered label describing
 * what content goes in this zone. No product-specific copy.
 */
function drawZone(layer, left, top, w, h, label, sublabel, fillClr, strokeClr) {
    var rect = drawRect(layer, left, top, w, h, fillClr || CLR_ELEMENT, strokeClr || CLR_ELEMENT_STROKE, 1);

    // Large centered label
    var labelSize = 10;
    if (w < 2 * PT || h < 0.5 * PT) labelSize = 8;
    if (w < 1.5 * PT || h < 0.35 * PT) labelSize = 7;
    var labelX = left + w / 2 - (label.length * labelSize * 0.3);
    var labelY = top - h / 2 + labelSize / 2;
    if (sublabel) labelY = top - h / 2 + labelSize; // shift up if sublabel
    drawLabel(layer, label, labelX, labelY, labelSize, CLR_TEXT, FONT_BOLD);

    // Smaller sublabel below
    if (sublabel) {
        var subSize = 6.5;
        if (w < 2 * PT) subSize = 5.5;
        var subX = left + w / 2 - (sublabel.length * subSize * 0.28);
        var subY = labelY - labelSize - 4;
        drawLabel(layer, sublabel, subX, subY, subSize, CLR_GRAY, FONT_LABEL);
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

    // Card outline
    drawLCard(frontLayer, ox, oy, CLR_WHITE, CLR_OUTLINE, 2);

    // Notch
    var frontNotch = drawRect(frontLayer, ox, oy, NOTCH_W, NOTCH_H, CLR_NOTCH, CLR_NOTCH_STROKE, 0.5);
    frontNotch.zOrder(ZOrderMethod.SENDTOBACK);
    drawLabel(frontLayer, "STRUCTURAL NOTCH\n4.75\" x 3.75\"\n(mug box clearance)\nNo design content", ox + 8, oy - 16, 6, CLR_GRAY, FONT_LABEL);

    // Usable area coordinates
    var topRow_x = ox + NOTCH_W + pad;
    var topRow_y = oy - pad;
    var topRow_w = CARD_W - NOTCH_W - pad * 2;

    var fullRow_x = ox + pad;
    var fullRow_y = oy - NOTCH_H - pad;
    var fullRow_w = CARD_W - pad * 2;

    // ---- TOP ROW (right of notch, top 3.75") ----
    // Reading order: brand > division > slogan > hero > subtitle > tagline

    drawZone(frontLayer, topRow_x, topRow_y, 2.5 * PT, 0.3 * PT,
        "BRAND LOGO", "[your brand here]");

    var e2y = topRow_y - 0.3 * PT - 3;
    drawZone(frontLayer, topRow_x, e2y, 5.5 * PT, 0.4 * PT,
        "DIVISION NAME + TAGLINE", "[sub-brand / division identifier]");

    var e3y = e2y - 0.4 * PT - 3;
    drawZone(frontLayer, topRow_x, e3y, 5.5 * PT, 0.35 * PT,
        "DIVISION SLOGAN", "[with paired icons]");

    var e4y = e3y - 0.35 * PT - 4;
    drawZone(frontLayer, topRow_x, e4y, topRow_w, 1.0 * PT,
        "HERO HEADLINE", "[product name -- largest text on card]");

    var e5y = e4y - 1.0 * PT - 3;
    drawZone(frontLayer, topRow_x, e5y, topRow_w, 0.4 * PT,
        "PRIMARY SUBTITLE", "[one-liner below product name]");

    var e6y = e5y - 0.4 * PT - 3;
    drawZone(frontLayer, topRow_x, e6y, topRow_w, 0.4 * PT,
        "PRIMARY TAGLINE", "[punchy marketing line]");


    // ---- FULL-WIDTH AREA (below notch line) ----

    var sealW = 2.5 * PT;
    var sealH = 1.6 * PT;
    var sealX = fullRow_x + fullRow_w - sealW;
    drawZone(frontLayer, sealX, fullRow_y, sealW, sealH,
        "SEAL / BADGE", "[parody seal element]");

    var qtyW = fullRow_w - sealW - 8;
    drawZone(frontLayer, fullRow_x, fullRow_y, qtyW, sealH,
        "QUANTITY + FOOTNOTE", "[qty line + accessories footnote]");

    var fpY = fullRow_y - sealH - 4;
    drawZone(frontLayer, fullRow_x, fpY, fullRow_w, 0.45 * PT,
        "FINE PRINT 1", "[legal / comedic fine print]");

    var fp2Y = fpY - 0.45 * PT - 3;
    drawZone(frontLayer, fullRow_x, fp2Y, fullRow_w, 0.45 * PT,
        "FINE PRINT 2", "[legal / comedic fine print]");

    var tag1Y = fp2Y - 0.45 * PT - 6;
    drawZone(frontLayer, fullRow_x, tag1Y, fullRow_w, 0.45 * PT,
        "TAGLINE A", "[secondary tagline -- from back overflow]");

    var tag2Y = tag1Y - 0.45 * PT - 3;
    drawZone(frontLayer, fullRow_x, tag2Y, fullRow_w, 0.45 * PT,
        "TAGLINE B", "[tertiary tagline -- from back overflow]");


    // ---- PEN / PRODUCT AREA + HIDDEN COPY ----
    var penW = 5.5 * PT;
    var penH = 0.6 * PT;
    var flap_x = fullRow_x + (fullRow_w - FLAP_W) / 2;
    var foldY = oy - CARD_H;

    var hiddenH = 0.35 * PT;
    var hiddenY = foldY + pad + hiddenH;
    drawZone(frontLayer, flap_x, hiddenY, FLAP_W, hiddenH,
        "HIDDEN COPY", "[revealed when product removed]",
        CLR_FLAP, CLR_FLAP_STROKE);

    var pen_top = hiddenY + 4;
    var pen_x = flap_x + (FLAP_W - penW) / 2;
    drawDashedRect(frontLayer, pen_x, pen_top, penW, penH, CLR_FLAP_STROKE, 0.75);
    drawLabel(frontLayer, "PRODUCT AREA", pen_x + 30, pen_top - penH / 2 + 4, 6, CLR_FLAP_STROKE, FONT_BOLD);

    // Fold line
    var foldLine = frontLayer.pathItems.add();
    foldLine.setEntirePath([[flap_x - 8, foldY], [flap_x + FLAP_W + 8, foldY]]);
    noFill(foldLine);
    applyStroke(foldLine, CLR_FLAP_STROKE, 1.5);
    foldLine.strokeDashes = [8, 4];
    drawLabel(frontLayer, "--- FOLD LINE (card bottom edge) ---", flap_x + 20, foldY + 10, 6.5, CLR_FLAP_STROKE, FONT_BOLD);

    // Flap exterior
    drawZone(frontLayer, flap_x, foldY, FLAP_W, FLAP_H,
        "FLAP EXTERIOR", "[visible when closed -- marketing surface]",
        CLR_FLAP, CLR_FLAP_STROKE);

    // Flap interior
    var flapIntY = foldY - FLAP_H - 6;
    var flapIntH = FLAP_H * 0.6;
    drawZone(frontLayer, flap_x, flapIntY, FLAP_W, flapIntH,
        "FLAP INTERIOR", "[hidden content -- Layer 4 discovery]",
        CLR_FLAP, CLR_FLAP_STROKE);

    // Annotations
    drawLabel(frontLayer, "FLAP folds UP from bottom edge", flap_x + FLAP_W + 10, foldY - 10, 6, CLR_FLAP_STROKE, FONT_BOLD);
    drawDimension(frontLayer, flap_x + FLAP_W + 30, foldY, flap_x + FLAP_W + 30, foldY - FLAP_H, "1.5\" flap");

    // Dimensions
    drawDimension(frontLayer, ox, oy + 22, ox + CARD_W, oy + 22, "13.25\"");
    drawDimension(frontLayer, ox - 22, oy, ox - 22, oy - CARD_H, "10.75\"");
    drawDimension(frontLayer, ox, oy + 11, ox + NOTCH_W, oy + 11, "4.75\"");
    drawDimension(frontLayer, ox - 11, oy, ox - 11, oy - NOTCH_H, "3.75\"");

    drawLabel(frontLayer, "CARD FRONT -- GENERIC TEMPLATE (Fold-Over Flap)", ox, oy + 38, 12, CLR_TEXT, FONT_BOLD);
    drawLabel(frontLayer, "Duplicate this file per product  |  Replace zone labels with actual copy  |  Adjust block heights to fit content", ox, oy + 52, 7, CLR_GRAY, FONT_LABEL);


    // ============================================================
    // CARD BACK
    // ============================================================

    var backLayer = doc.layers.add();
    backLayer.name = "Card Back";

    var bx = ab2Offset;
    var by = 0;

    drawLCardMirrored(backLayer, bx, by, CLR_WHITE, CLR_OUTLINE, 2);

    // Notch
    drawLabel(backLayer, "STRUCTURAL NOTCH\n4.75\" x 3.75\"\n(mirrored - upper right)\nNo design content", bx + CARD_W - NOTCH_W + 8, by - 16, 6, CLR_GRAY, FONT_LABEL);
    var notchInd = drawRect(backLayer, bx + CARD_W - NOTCH_W, by, NOTCH_W, NOTCH_H, CLR_NOTCH, CLR_NOTCH_STROKE, 0.5);
    notchInd.zOrder(ZOrderMethod.SENDTOBACK);

    var backTopRow_x = bx + pad;
    var backTopRow_y = by - pad;
    var backTopRow_w = CARD_W - NOTCH_W - pad * 2;

    var backFull_x = bx + pad;
    var backFull_y = by - NOTCH_H - pad;
    var backFull_w = CARD_W - pad * 2;

    // ---- BACK TOP ROW (left of notch) ----

    drawZone(backLayer, backTopRow_x, backTopRow_y, backTopRow_w, 0.55 * PT,
        "FEATURE BULLET 1", "[product feature / selling point]");

    var fb2y = backTopRow_y - 0.55 * PT - 4;
    drawZone(backLayer, backTopRow_x, fb2y, backTopRow_w, 0.45 * PT,
        "FEATURE BULLET 2", "[product feature / selling point]");

    var fb3y = fb2y - 0.45 * PT - 4;
    drawZone(backLayer, backTopRow_x, fb3y, backTopRow_w, 0.55 * PT,
        "FEATURE BULLET 3", "[product feature / selling point]");

    var pny = fb3y - 0.55 * PT - 4;
    drawZone(backLayer, backTopRow_x, pny, backTopRow_w, 0.55 * PT,
        "WORDPLAY TAGLINE", "[chain pun or thematic tagline]");


    // ---- FULL-WIDTH AREA (below notch line) ----

    drawZone(backLayer, backFull_x, backFull_y, backFull_w, 0.4 * PT,
        "CHART / TABLE TITLE", "[comparison or data header]");

    var chartY = backFull_y - 0.4 * PT - 4;
    var chartH = 3.2 * PT;
    drawZone(backLayer, backFull_x, chartY, backFull_w, chartH,
        "COMPARISON CHART", "[main content block -- table / grid / matrix]");

    // Column + row guides in chart
    var colW = backFull_w / 4;
    for (var c = 1; c < 4; c++) {
        drawDashedLine(backLayer, backFull_x + colW * c, chartY, backFull_x + colW * c, chartY - chartH, CLR_ELEMENT_STROKE, 0.3);
    }
    var rowH = chartH / 8;
    for (var r = 1; r < 8; r++) {
        drawDashedLine(backLayer, backFull_x, chartY - rowH * r, backFull_x + backFull_w, chartY - rowH * r, CLR_ELEMENT_STROKE, 0.2);
    }

    var footY = chartY - chartH - 4;
    drawZone(backLayer, backFull_x, footY, backFull_w, 0.3 * PT,
        "CHART FOOTER", "[closing line for chart section]");

    // Post-chart content
    var revY = footY - 0.3 * PT - 6;
    var revW = backFull_w / 2 - 4;
    drawZone(backLayer, backFull_x, revY, revW, 0.6 * PT,
        "REVIEW 1", "[fake review / testimonial]");

    drawZone(backLayer, backFull_x + revW + 8, revY, revW, 0.6 * PT,
        "REVIEW 2", "[fake review / testimonial]");

    var promoY = revY - 0.6 * PT - 4;
    var promoW = backFull_w * 0.5;
    drawZone(backLayer, backFull_x, promoY, promoW, 1.2 * PT,
        "PROMO / TEASER BLOCK", "[cross-sell, coming soon, or ad panel]");

    var warnX = backFull_x + promoW + 8;
    var warnW = backFull_w - promoW - 8;
    drawZone(backLayer, warnX, promoY, warnW, 0.55 * PT,
        "WARNING 1", "[caution / disclaimer]");

    var w2y = promoY - 0.55 * PT - 3;
    drawZone(backLayer, warnX, w2y, warnW, 0.55 * PT,
        "WARNING 2", "[caution / disclaimer]");


    // Dimensions
    drawDimension(backLayer, bx, by + 22, bx + CARD_W, by + 22, "13.25\"");
    drawDimension(backLayer, bx - 22, by, bx - 22, by - CARD_H, "10.75\"");

    drawLabel(backLayer, "CARD BACK -- GENERIC TEMPLATE", bx, by + 38, 12, CLR_TEXT, FONT_BOLD);
    drawLabel(backLayer, "Duplicate per product  |  Replace zone labels with copy  |  Adjust heights to fit  |  Add/remove zones as needed", bx, by + 52, 7, CLR_GRAY, FONT_LABEL);


    // ============================================================
    // LEGEND
    // ============================================================

    var legendLayer = doc.layers.add();
    legendLayer.name = "Legend";

    var ly = oy - CARD_H - 40;
    drawLabel(legendLayer, "LEGEND", ox, ly, 10, CLR_TEXT, FONT_BOLD);

    var sw_y = ly - 18;
    drawRect(legendLayer, ox, sw_y, 14, 14, CLR_ELEMENT, CLR_ELEMENT_STROKE, 1);
    drawLabel(legendLayer, "= Content zone (replace label with actual copy)", ox + 20, sw_y - 2, 7, CLR_TEXT, FONT_LABEL);

    var sw2_y = sw_y - 18;
    drawRect(legendLayer, ox, sw2_y, 14, 14, CLR_FLAP, CLR_FLAP_STROKE, 1);
    drawLabel(legendLayer, "= Fold-over flap surface", ox + 20, sw2_y - 2, 7, CLR_TEXT, FONT_LABEL);

    var sw3_y = sw2_y - 18;
    drawRect(legendLayer, ox, sw3_y, 14, 14, CLR_NOTCH, CLR_NOTCH_STROKE, 0.5);
    drawLabel(legendLayer, "= Structural notch (no design content)", ox + 20, sw3_y - 2, 7, CLR_TEXT, FONT_LABEL);

    var sw4_y = sw3_y - 22;
    drawLabel(legendLayer, "HOW TO USE: 1. Duplicate this file  2. Rename for your product  3. Replace zone labels with copy from surface map  4. Resize blocks to fit content",
        ox, sw4_y, 7, CLR_TEXT, FONT_BOLD);
    drawLabel(legendLayer, "CARD STRUCTURE: 13.25\" x 10.75\" L-shaped card, 18pt matte black paperboard, printed both sides. Fold-over flap from bottom edge.",
        ox, sw4_y - 13, 7, CLR_TEXT, FONT_LABEL);
    drawLabel(legendLayer, "READING ORDER: Brand > Division > Slogan > Hero Headline > Subtitle > Tagline > Seal/Qty > Fine Print > Product Area > Flap",
        ox, sw4_y - 26, 7, CLR_TEXT, FONT_LABEL);


    // Clean up
    try {
        var defaultLayer = doc.layers.getByName("Layer 1");
        if (defaultLayer.pageItems.length === 0) { defaultLayer.remove(); }
    } catch (e) {}

    doc.artboards.setActiveArtboardIndex(0);

    alert("Template wireframe created!\n\nGENERIC TEMPLATE -- not product-specific\n\nArtboard 1: Card Front (zone labels)\nArtboard 2: Card Back (zone labels)\n\nHOW TO USE:\n1. Duplicate this file\n2. Rename for your product\n3. Replace zone labels with copy\n4. Resize blocks to fit content\n\nBlue = content zones\nPeach = flap surfaces\nGray = structural notch");

})();
