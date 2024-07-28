require(
    ["require", 
    "exports", 
    "knockout", 
    "ojs/ojbootstrap", 
    "ojs/ojconverterutils-i18n", 
    "ojs/ojknockout", 
    "ojs/ojdatetimepicker", 
    "ojs/ojlabel"], function (require, exports, ko, Bootstrap, ojconverterutils_i18n_1) {
    "use strict";
    
    class SimpleModel {
        constructor() {
            this.value = ko.observable(ojconverterutils_i18n_1.IntlConverterUtils.dateToLocalIsoDateString(new Date(2013, 10, 26)));
            this.min = ojconverterutils_i18n_1.IntlConverterUtils.dateToLocalIsoDateString(new Date(2013, 10, 25));
        }
    }
    Bootstrap.whenDocumentReady().then(() => {
        ko.cleanNode(document.getElementById('div1'))
        ko.applyBindings(new SimpleModel(), document.getElementById('div1'));
    });
});