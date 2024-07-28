require([
    "require", 
    "exports", 
    "ojs/ojbootstrap", 
    "knockout", 
    "ojs/ojmodule-element-utils", 
    "ojs/ojmodule-element", 
    "ojs/ojknockout", 
    "ojs/ojmodule"], 
    function (require, exports, ojbootstrap_1, ko, ModuleElementUtils) {
    "use strict";
    
    class ViewModel {
        constructor() {
            this.ModuleElementUtils = ModuleElementUtils;
        }
    }
    (0, ojbootstrap_1.whenDocumentReady)().then(function () {
        ko.cleanNode(document.getElementById("div1"));
        ko.applyBindings(new ViewModel(), document.getElementById("div1"));
    });
});