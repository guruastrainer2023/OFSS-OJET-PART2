require([
    "require", 
    "exports", 
    "knockout", 
    "ojs/ojbootstrap", 
    "ojs/ojconverterutils-i18n",
    "ojs/ojasyncvalidator-datetimerange",
    "ojs/ojdatetimepicker", 
    "ojs/ojknockout", 
    "ojs/ojformlayout"], 
    function (require, exports, ko, Bootstrap,  ojconverterutils_i18n_1,AsyncDateTimeRangeValidator) {
    "use strict";
    
    class DemoViewModel {
        constructor() {
            this.dateValue = ko.observable(ojconverterutils_i18n_1.IntlConverterUtils.dateToLocalIso(new Date('2021-06-04T02:30:00Z')));
            
           
           this.validators = [
                new AsyncDateTimeRangeValidator({
                    min: ojconverterutils_i18n_1.IntlConverterUtils.dateToLocalIso(new Date('2021-01-01T00:00:00-04:00')),
                    max: ojconverterutils_i18n_1.IntlConverterUtils.dateToLocalIso(new Date('2021-12-31T00:00:00-04:00')),
                    
                    messageDetail: { exact: 'Date should be between {min} and {max}' }
                })
            ];
        }
    }
    Bootstrap.whenDocumentReady().then(() => {
        ko.cleanNode(document.getElementById('div1'))
        ko.applyBindings(new DemoViewModel(), document.getElementById('div1'));
    });
});