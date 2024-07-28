require([
    "require", 
    "exports", 
    "knockout", 
    "ojs/ojbootstrap", 
    "text!data/treeViewData.json", 
    "ojs/ojarraytreedataprovider", 
    "ojs/ojknockout", "ojs/ojtreeview"], 
    function (require, exports, ko, ojbootstrap_1, jsonData, ArrayTreeDataProvider) {
    "use strict";
    
    class TreeViewModel {
        constructor() {
            this.data = new ArrayTreeDataProvider(JSON.parse(jsonData), {
                keyAttributes: "id",
            });
        }
    }
    (0, ojbootstrap_1.whenDocumentReady)().then(() => {
        ko.cleanNode(document.getElementById("div1"));
        ko.applyBindings(new TreeViewModel(), document.getElementById("div1"));
    });
});