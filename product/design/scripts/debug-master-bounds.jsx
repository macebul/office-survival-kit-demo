// Diagnostic: report page bounds for A-Master
#target indesign

(function() {
    var doc = app.activeDocument;

    var origH = doc.viewPreferences.horizontalMeasurementUnits;
    var origV = doc.viewPreferences.verticalMeasurementUnits;
    doc.viewPreferences.horizontalMeasurementUnits = MeasurementUnits.INCHES;
    doc.viewPreferences.verticalMeasurementUnits = MeasurementUnits.INCHES;

    var info = "Document size: " + doc.documentPreferences.pageWidth + " x " + doc.documentPreferences.pageHeight + "\n\n";

    for (var i = 0; i < doc.masterSpreads.length; i++) {
        var ms = doc.masterSpreads[i];
        if (ms.namePrefix === "A") {
            info += "A-Master has " + ms.pages.length + " pages:\n\n";
            for (var p = 0; p < ms.pages.length; p++) {
                var page = ms.pages[p];
                var b = page.bounds;
                info += "Page " + p + ":\n";
                info += "  side: " + page.side + "\n";
                info += "  bounds [top, left, bottom, right]: [" + b[0] + ", " + b[1] + ", " + b[2] + ", " + b[3] + "]\n";
                info += "  margins: T=" + page.marginPreferences.top + " B=" + page.marginPreferences.bottom + " L=" + page.marginPreferences.left + " R=" + page.marginPreferences.right + "\n\n";
            }
            break;
        }
    }

    doc.viewPreferences.horizontalMeasurementUnits = origH;
    doc.viewPreferences.verticalMeasurementUnits = origV;

    alert(info);
})();
