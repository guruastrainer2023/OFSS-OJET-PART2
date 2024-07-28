require(
    ["require", 
    "exports", 
    "knockout", 
    "ojs/ojbootstrap", 
    "ojs/ojknockout", 
    "oj-c/input-text"], function (require, exports, ko, Bootstrap) {
    "use strict";
    
    class SimpleModel {
        constructor() {
            this.value = ko.observable("");
            this.rawValue = ko.observable("");
        }
    }
    Bootstrap.whenDocumentReady().then(() => {
        ko.cleanNode(document.getElementById("div1"))
        ko.applyBindings(new SimpleModel(), document.getElementById("div1"));
    });
});