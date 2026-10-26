// Cleanup — removes all items from master pages A through F
// Run this before running the fixed master page script

#target indesign

(function() {
    var doc = app.activeDocument;

    var prefixes = ["A", "B", "C", "D", "E", "F"];

    for (var p = 0; p < prefixes.length; p++) {
        for (var i = 0; i < doc.masterSpreads.length; i++) {
            if (doc.masterSpreads[i].namePrefix === prefixes[p]) {
                var master = doc.masterSpreads[i];
                // Remove all page items from each page
                for (var j = 0; j < master.pages.length; j++) {
                    var page = master.pages[j];
                    while (page.pageItems.length > 0) {
                        page.pageItems[0].remove();
                    }
                }
            }
        }
    }

    alert("Cleaned up all master page items from A through F.");
})();
