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
            this.value = ko.observable(ojconverterutils_i18n_1.IntlConverterUtils.dateToLocalIsoDateString(new Date(2015, 11, 17)));
            this.datePicker = {
                numberOfMonths: 3
            };
            this.toValue = ko.observable('');
        }
    }
    Bootstrap.whenDocumentReady().then(() => {
        ko.cleanNode(document.getElementById('div1'))
        ko.applyBindings(new SimpleModel(), document.getElementById('div1'));
    });
});