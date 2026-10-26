/*
 * Cubicle Shank -- WIREFRAME WITH COPY (Per-Block Layers)
 * Adobe Illustrator ExtendScript (.jsx)
 *
 * Run via: File > Scripts > Other Script... > select this file
 *
 * PURPOSE: Each block is on its own named layer so you can show/hide
 * individually. Blocks are outlined text frames (no background fill)
 * containing the actual copy, so the AI image generator sees a wireframe
 * text box and replaces the area appropriately.
 *
 * WORKFLOW:
 *   1. Run this script
 *   2. In the Layers panel, hide all layers except the one block you want
 *   3. Screenshot that block
 *   4. Feed to AI image generator with theme prompt
 *   5. Hide that layer, show next block, repeat
 *   6. Assemble all generated pieces in Photoshop
 */

// ============================================================
// CONFIG
// ============================================================

var PT = 72;

var CARD_W = 13.25 * PT;
var CARD_H = 10.75 * PT;
var NOTCH_W = 3.75 * PT;
var NOTCH_H = 4.75 * PT;

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
var CLR_ELEMENT_STROKE = makeColor(70, 130, 180);
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

function drawDashedLine(layer, x1, y1, x2, y2, strokeClr, strokeW) {
    var line = layer.pathItems.add();
    line.setEntirePath([[x1, y1], [x2, y2]]);
    noFill(line);
    applyStroke(line, strokeClr, strokeW || 0.5);
    line.strokeDashes = [3, 3];
    return line;
}

function drawDimension(layer, x1, y1, x2, y2, label) {
    drawDashedLine(layer, x1, y1, x2, y2, CLR_DIM, 0.5);
    var mx = (x1 + x2) / 2;
    var my = (y1 + y2) / 2;
    drawLabel(layer, label, mx - 15, my + 10, 6, CLR_DIM, FONT_LABEL);
}

/*
 * drawCopyBlock() - Creates an OUTLINED text frame with copy inside.
 * No background fill. Just a stroked border around an area text frame
 * containing the actual copy. Each block goes on its own layer.
 *
 * @param doc       - Document reference
 * @param left      - X position (left edge)
 * @param top       - Y position (top edge, positive in Illustrator coords)
 * @param w         - Width in points
 * @param h         - Height in points
 * @param id        - Block ID string (e.g., "E1")
 * @param copyText  - The actual copy to place inside the text frame
 * @param fontSize  - Font size for the copy (default 8)
 * @param strokeClr - Outline color (default CLR_ELEMENT_STROKE)
 * @param fontName  - Font name (default FONT_LABEL)
 */
function drawCopyBlock(doc, left, top, w, h, id, copyText, fontSize, strokeClr, fontName) {
    var layer = doc.layers.add();
    layer.name = id;

    // Area text frame -- stroke the text path itself as the outline
    var textRect = layer.pathItems.rectangle(top, left, w, h);
    var areaText = layer.textFrames.areaText(textRect);
    areaText.contents = copyText;
    var attrs = areaText.textRange.characterAttributes;
    attrs.size = fontSize || 8;
    attrs.fillColor = CLR_TEXT;
    try { attrs.textFont = app.textFonts.getByName(fontName || FONT_LABEL); } catch (e) {}

    // Stroke the text frame's own path as its outline
    var tp = areaText.textPath;
    tp.filled = false;
    tp.stroked = true;
    tp.strokeColor = strokeClr || CLR_ELEMENT_STROKE;
    tp.strokeWidth = 1;

    return layer;
}


// ============================================================
// COPY DATA
// ============================================================

var COPY = {
    // FRONT
    E1: "WITTY YETI",
    E2: "O3 -- Office Offense Outfitters\nBecause it keeps you more alive than O2.",
    E3: "Arming the 9-to-5 since the 5-to-9.",
    E4: "CUBICLE SHANK",
    E5: "The pen that ends sentences. May also extend yours.",
    E6: "Writes in black. Moonlights in red. Racks up PTO and a body count spread.",
    E7: "GOOD SHANKING\nSEAL OF APPROVAL\n\n\"That'll buff out.\" -- Carl, Custodial",
    E8: "Qty: 1 pen. Ink refills sold separately. Accessories sold very separately.*\n\n*The Cubicle Shank Premium Experience(TM) includes: holster (thigh or desk-mount), burner phone (pre-loaded), getaway car (compact), and one (1) character witness named Doug. Doug has been briefed. Doug will not break.",
    E9: "Patent pending. Trial also pending. Jury still out. Literally.",
    E10: "Tested on animals would've been easier to explain to HR.",
    B13: "Smooth ink. Smooth barrel. Smooth criminal. One of those got past Legal.",
    B14: "Excalibur had a stone. Ours had an intern. HR had questions.",
    E11: "CUSTOMER QUESTION: \"Does it come in red?\"\nANSWER: Eventually.",
    FLAP_EXT: "[Marketing surface -- product branding, tagline, or call to action.\nThis is the first thing a customer sees before opening.\n6.5\" x 1.5\", folds UP over pen.]",
    FLAP_INT: "[Hidden content / Layer 4 discovery.\nEaster egg, secret message, or bonus content.\nRevealed when flap is lifted.]",

    // BACK
    B4: "Other pens quit mid-sentence. Ours keeps going. Through the sentence. Through the paragraph. Through a light jacket...",
    B5: "Grip tested across relaxed hands, writing hands, and one we'd describe as \"determined.\"",
    B6: "Other pens leak in your pocket. This one doesn't leak anywhere. Not in your pocket. Not in your hand. Not in Kevin. Completely leak-proof design.",
    B12: "We put the pen in penitentiary. The con in conference room. The shank in Shawshank. And the stab in stability.",
    B1: "BEFORE YOU COMMIT: KNOW YOUR OPTIONS",
    B2: "A GOOSE | A BABY | A NURSING HOME | CUBICLE SHANK\n\nTHROWABLE: It'll throw itself | Farther than you'd think | The bedpan incident is on file | Aerodynamic, actually\n\nCAN BE RETURNED: It comes back anyway | Check local laws | Ask the family | Not while it's still in Kevin\n\nESCAPE RISK: Runs at 20. Flies at 40. You do neither. | It has your face and your DNA. Good luck. | Room 4 keeps trying | Once it's in, it's in\n\nELEMENT OF SURPRISE: Has teeth on its tongue. What else don't you know? | Sleeper agent | Edith has a taser | Writes beautifully, actually\n\nSMELLS: Pond water and rage | Both ends | Something they keep spraying over | Fear, tears, then beers\n\nTHANKSGIVING: Stuffed and in the oven | Mandatory | Grandma's coming either way | Uncle Steve did\n\nODDS OF WALKING AWAY: Yours? Not great | 18+ years | Declining but gently | They'll be carried, actually",
    B3: "Study discontinued. Not because of the goose. We wish it had been the goose.",
    B7: "\"Five stars. And we don't usually rate the evidence.\"\n-- County Coroner's Office",
    B8: "\"Effective. Reliable. Surprisingly comfortable to hold. We shouldn't know that last part.\"\n-- Office of the Medical Examiner",
    B9: "COMING TO A FACILITY NEAR YOU\n\nASSISTED SHIVING\n\nFits walkers, canes, and hip replacements. Talk to your doctor.\n\n\"Finally.\" -- Edith, Room 4\n\nEDITOR'S PICK -- Geriatric Defense Quarterly",
    B10: "CAUTION: Not a letter opener. We know. We saw the video. So did the jury.",
    B11: "AGES 16+. Child labor laws. You can't shank someone if you can't legally be in the building."
};


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
    // CARD FRONT -- Structure Layer (card outline, notch, dims)
    // ============================================================

    var frontStructure = doc.layers.add();
    frontStructure.name = "FRONT Structure";

    var ox = 0;
    var oy = 0;
    var pad = 10;

    drawLCard(frontStructure, ox, oy, CLR_WHITE, CLR_OUTLINE, 2);

    var frontNotch = drawRect(frontStructure, ox, oy, NOTCH_W, NOTCH_H, CLR_NOTCH, CLR_NOTCH_STROKE, 0.5);
    frontNotch.zOrder(ZOrderMethod.SENDTOBACK);
    drawLabel(frontStructure, "NOTCH", ox + NOTCH_W / 2 - 20, oy - NOTCH_H / 2 + 4, 10, CLR_GRAY, FONT_BOLD);

    drawDimension(frontStructure, ox, oy + 22, ox + CARD_W, oy + 22, "13.25\"");
    drawDimension(frontStructure, ox - 22, oy, ox - 22, oy - CARD_H, "10.75\"");
    drawDimension(frontStructure, ox, oy + 11, ox + NOTCH_W, oy + 11, "3.75\"");
    drawDimension(frontStructure, ox - 11, oy, ox - 11, oy - NOTCH_H, "4.75\"");

    drawLabel(frontStructure, "CUBICLE SHANK - CARD FRONT", ox, oy + 38, 12, CLR_TEXT, FONT_BOLD);
    drawLabel(frontStructure, "Each block is on its own layer -- toggle visibility in Layers panel", ox, oy + 52, 7, CLR_GRAY, FONT_LABEL);


    // ============================================================
    // CARD FRONT -- Per-Block Layers
    // ============================================================

    var topRow_x = ox + NOTCH_W + pad;
    var topRow_y = oy - pad;
    var topRow_w = CARD_W - NOTCH_W - pad * 2;

    var fullRow_x = ox + pad;
    var fullRow_y = oy - NOTCH_H - pad;
    var fullRow_w = CARD_W - pad * 2;

    // ---- TOP ROW ----

    // E1
    var e1h = 0.3 * PT;
    var e1w = 2.5 * PT;
    drawCopyBlock(doc, topRow_x, topRow_y, e1w, e1h, "E1", COPY.E1, 36, CLR_ELEMENT_STROKE, FONT_BOLD);

    // E2
    var e2y = topRow_y - e1h - 3;
    var e2h = 0.4 * PT;
    var e2w = 5.5 * PT;
    drawCopyBlock(doc, topRow_x, e2y, e2w, e2h, "E2", COPY.E2, 20);

    // E3
    var e3y = e2y - e2h - 3;
    var e3h = 0.35 * PT;
    var e3w = 5.5 * PT;
    drawCopyBlock(doc, topRow_x, e3y, e3w, e3h, "E3", COPY.E3, 20);

    // E4
    var e4y = e3y - e3h - 4;
    var e4w = topRow_w;
    var e4h = 1.0 * PT;
    drawCopyBlock(doc, topRow_x, e4y, e4w, e4h, "E4", COPY.E4, 72, CLR_ELEMENT_STROKE, FONT_BOLD);

    // E5
    var e5y = e4y - e4h - 3;
    var e5h = 0.4 * PT;
    var e5w = topRow_w;
    drawCopyBlock(doc, topRow_x, e5y, e5w, e5h, "E5", COPY.E5, 24);

    // E6
    var e6y = e5y - e5h - 3;
    var e6h = 0.4 * PT;
    var e6w = topRow_w;
    drawCopyBlock(doc, topRow_x, e6y, e6w, e6h, "E6", COPY.E6, 20);

    // ---- FULL-WIDTH AREA ----

    // E7 (right side)
    var e7w = 2.5 * PT;
    var e7h = 1.6 * PT;
    var e7x = fullRow_x + fullRow_w - e7w;
    drawCopyBlock(doc, e7x, fullRow_y, e7w, e7h, "E7", COPY.E7, 18);

    // E8 (left side, beside E7)
    var e8w = fullRow_w - e7w - 8;
    var e8h = 1.6 * PT;
    drawCopyBlock(doc, fullRow_x, fullRow_y, e8w, e8h, "E8", COPY.E8, 18);

    // E9
    var e9y = fullRow_y - e8h - 4;
    var e9h = 0.45 * PT;
    drawCopyBlock(doc, fullRow_x, e9y, fullRow_w, e9h, "E9", COPY.E9, 16);

    // E10
    var e10y = e9y - e9h - 3;
    var e10h = 0.45 * PT;
    drawCopyBlock(doc, fullRow_x, e10y, fullRow_w, e10h, "E10", COPY.E10, 16);

    // B13
    var fb13y = e10y - e10h - 6;
    var fb13h = 0.45 * PT;
    drawCopyBlock(doc, fullRow_x, fb13y, fullRow_w, fb13h, "B13", COPY.B13, 20);

    // B14
    var fb14y = fb13y - fb13h - 3;
    var fb14h = 0.45 * PT;
    drawCopyBlock(doc, fullRow_x, fb14y, fullRow_w, fb14h, "B14", COPY.B14, 16);

    // E11
    var e11y = fb14y - fb14h - 3;
    var e11h = 0.35 * PT;
    drawCopyBlock(doc, fullRow_x, e11y, fullRow_w, e11h, "E11", COPY.E11, 16, CLR_FLAP_STROKE);

    // ---- PEN AREA (on structure layer) ----
    var penLayer = doc.layers.add();
    penLayer.name = "PEN";
    var penW = 5.5 * PT;
    var penH = 0.6 * PT;
    var flap_x = fullRow_x + (fullRow_w - FLAP_W) / 2;
    var foldY = oy - CARD_H;
    var pen_top = e11y - e11h - 4;
    var pen_x = flap_x + (FLAP_W - penW) / 2;
    var penRect = penLayer.pathItems.rectangle(pen_top, pen_x, penW, penH);
    noFill(penRect);
    applyStroke(penRect, CLR_FLAP_STROKE, 0.75);
    penRect.strokeDashes = [6, 3];
    drawLabel(penLayer, "PEN", pen_x + penW / 2 - 12, pen_top - penH / 2 + 5, 10, CLR_FLAP_STROKE, FONT_BOLD);

    // FOLD LINE (on structure layer - always visible)
    var foldLine = frontStructure.pathItems.add();
    foldLine.setEntirePath([[flap_x - 8, foldY], [flap_x + FLAP_W + 8, foldY]]);
    noFill(foldLine);
    applyStroke(foldLine, CLR_FLAP_STROKE, 1.5);
    foldLine.strokeDashes = [8, 4];
    drawLabel(frontStructure, "--- FOLD LINE ---", flap_x + FLAP_W / 2 - 40, foldY + 10, 7, CLR_FLAP_STROKE, FONT_BOLD);

    // FLAP EXT
    var flapExt_y = foldY;
    drawCopyBlock(doc, flap_x, flapExt_y, FLAP_W, FLAP_H, "FLAP_EXT", COPY.FLAP_EXT, 16, CLR_FLAP_STROKE);

    // FLAP INT
    var flapInt_y = flapExt_y - FLAP_H - 6;
    var flapIntH = FLAP_H * 0.6;
    drawCopyBlock(doc, flap_x, flapInt_y, FLAP_W, flapIntH, "FLAP_INT", COPY.FLAP_INT, 14, CLR_FLAP_STROKE);


    // ============================================================
    // CARD BACK -- Structure Layer
    // ============================================================

    var backStructure = doc.layers.add();
    backStructure.name = "BACK Structure";

    var bx = ab2Offset;
    var by = 0;

    drawLCardMirrored(backStructure, bx, by, CLR_WHITE, CLR_OUTLINE, 2);

    var notchIndicator = drawRect(backStructure, bx + CARD_W - NOTCH_W, by, NOTCH_W, NOTCH_H, CLR_NOTCH, CLR_NOTCH_STROKE, 0.5);
    notchIndicator.zOrder(ZOrderMethod.SENDTOBACK);
    drawLabel(backStructure, "NOTCH", bx + CARD_W - NOTCH_W / 2 - 20, by - NOTCH_H / 2 + 4, 10, CLR_GRAY, FONT_BOLD);

    drawDimension(backStructure, bx, by + 22, bx + CARD_W, by + 22, "13.25\"");
    drawDimension(backStructure, bx - 22, by, bx - 22, by - CARD_H, "10.75\"");

    drawLabel(backStructure, "CUBICLE SHANK - CARD BACK", bx, by + 38, 12, CLR_TEXT, FONT_BOLD);
    drawLabel(backStructure, "Each block is on its own layer -- toggle visibility in Layers panel", bx, by + 52, 7, CLR_GRAY, FONT_LABEL);


    // ============================================================
    // CARD BACK -- Per-Block Layers
    // ============================================================

    var backTopRow_x = bx + pad;
    var backTopRow_y = by - pad;
    var backTopRow_w = CARD_W - NOTCH_W - pad * 2;

    var backFull_x = bx + pad;
    var backFull_y = by - NOTCH_H - pad;
    var backFull_w = CARD_W - pad * 2;

    // ---- BACK TOP ROW ----

    // B4
    var b4h = 0.55 * PT;
    drawCopyBlock(doc, backTopRow_x, backTopRow_y, backTopRow_w, b4h, "B4", COPY.B4, 20);

    // B5
    var b5y = backTopRow_y - b4h - 4;
    var b5h = 0.45 * PT;
    drawCopyBlock(doc, backTopRow_x, b5y, backTopRow_w, b5h, "B5", COPY.B5, 20);

    // B6
    var b6y = b5y - b5h - 4;
    var b6h = 0.55 * PT;
    drawCopyBlock(doc, backTopRow_x, b6y, backTopRow_w, b6h, "B6", COPY.B6, 20);

    // B12
    var b12y = b6y - b6h - 4;
    var b12h = 0.55 * PT;
    drawCopyBlock(doc, backTopRow_x, b12y, backTopRow_w, b12h, "B12", COPY.B12, 20);

    // ---- FULL-WIDTH AREA ----

    // B1
    var b1h = 0.4 * PT;
    drawCopyBlock(doc, backFull_x, backFull_y, backFull_w, b1h, "B1", COPY.B1, 36, CLR_ELEMENT_STROKE, FONT_BOLD);

    // B2
    var b2y = backFull_y - b1h - 4;
    var b2h = 3.2 * PT;
    drawCopyBlock(doc, backFull_x, b2y, backFull_w, b2h, "B2", COPY.B2, 14);

    // B3
    var b3y = b2y - b2h - 4;
    var b3h = 0.3 * PT;
    drawCopyBlock(doc, backFull_x, b3y, backFull_w, b3h, "B3", COPY.B3, 16);

    // B7 (left)
    var b7y = b3y - b3h - 6;
    var b7w = backFull_w / 2 - 4;
    var b7h = 0.6 * PT;
    drawCopyBlock(doc, backFull_x, b7y, b7w, b7h, "B7", COPY.B7, 18);

    // B8 (right)
    drawCopyBlock(doc, backFull_x + b7w + 8, b7y, b7w, b7h, "B8", COPY.B8, 18);

    // B9 (left)
    var b9y = b7y - b7h - 4;
    var b9h = 1.2 * PT;
    var b9w = backFull_w * 0.5;
    drawCopyBlock(doc, backFull_x, b9y, b9w, b9h, "B9", COPY.B9, 18);

    // B10 (right, top)
    var warnX = backFull_x + b9w + 8;
    var warnW = backFull_w - b9w - 8;
    var b10h = 0.55 * PT;
    drawCopyBlock(doc, warnX, b9y, warnW, b10h, "B10", COPY.B10, 18);

    // B11 (right, bottom)
    var b11y = b9y - b10h - 3;
    var b11h = 0.55 * PT;
    drawCopyBlock(doc, warnX, b11y, warnW, b11h, "B11", COPY.B11, 18);


    // Clean up default layer
    try {
        var defaultLayer = doc.layers.getByName("Layer 1");
        if (defaultLayer.pageItems.length === 0) { defaultLayer.remove(); }
    } catch (e) {}

    doc.artboards.setActiveArtboardIndex(0);

    alert("Wireframe created!\n\nEach block is on its own LAYER.\n\nUse the Layers panel to show/hide blocks individually.\n\nWorkflow:\n1. Hide all layers except one block\n2. Screenshot it\n3. Feed to AI image generator\n4. Repeat for each block\n5. Assemble in Photoshop");

})();
