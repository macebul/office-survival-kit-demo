/*
 * List all paragraph styles in the active document,
 * including styles inside group folders.
 * Run from InDesign: File > Scripts > list-styles.jsx
 */
(function () {
    if (app.documents.length === 0) {
        alert("No document open.");
        return;
    }

    var doc = app.activeDocument;

    // allParagraphStyles includes styles nested inside groups
    var styles = doc.allParagraphStyles;
    var names = [];

    for (var i = 0; i < styles.length; i++) {
        names.push(styles[i].name);
    }

    // Also list the group names for reference
    var groups = doc.paragraphStyleGroups;
    var groupNames = [];
    for (var g = 0; g < groups.length; g++) {
        groupNames.push(groups[g].name);
    }

    var msg = "Paragraph styles (" + names.length + "):\n\n" + names.join("\n");
    if (groupNames.length > 0) {
        msg += "\n\n--- Style Groups ---\n" + groupNames.join("\n");
    }

    alert(msg);
})();
