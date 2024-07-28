require(
    ["require",
     "exports", 
     "knockout", 
     "ojs/ojbootstrap", 
     "ojs/ojconverter-number", 
     "ojs/ojasyncvalidator-numberrange", 
     "ojs/ojknockout", 
     "ojs/ojformlayout", 
     "oj-c/input-text", 
     "oj-c/input-number"], function (require, exports, ko, Bootstrap, ojconverter_number_1, AsyncNumberRangeValidator) {
    "use strict";
    
    class DemoViewModel {
        constructor() {
            this.numberValue1 = ko.observable('');
            this.numberValue2 = ko.observable(null);
            this.numberValue3 = ko.observable('');
            this.numberValue4 = ko.observable(null);
            this.numberConverter = new ojconverter_number_1.IntlNumberConverter();
            this.currencyConverter = new ojconverter_number_1.IntlNumberConverter({
                style: 'currency',
                currency: 'USD'
            });
            this.validators = [
                new AsyncNumberRangeValidator({
                    min: 10000.05,
                    max: 25000.95,
                    hint: { inRange: 'Custom: Enter a value between {min} and {max}.' },
                    converter: this.currencyConverter
                })
            ];
            this.validators2 = [
                new AsyncNumberRangeValidator({
                    min: 1,
                    max: 1,
                    hint: { exact: 'Custom: The only value you can enter is {num}.' },
                    messageDetail: { exact: 'Custom: Please enter the value {num}' }
                })
            ];
        }
    }
    Bootstrap.whenDocumentReady().then(() => {
        ko.cleanNode(document.getElementById('validator-example'))
        ko.applyBindings(new DemoViewModel(), document.getElementById('validator-example'));
    });
});