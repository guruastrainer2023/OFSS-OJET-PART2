require(
    ["require", 
    "exports", 
    "knockout", 
    "ojs/ojbootstrap", 
    "ojs/ojasyncvalidator-length", 
    "ojs/ojknockout", 
    "oj-c/input-text", 
    "ojs/ojformlayout"], function (require, exports, ko, Bootstrap, AsyncLengthValidator) {
    "use strict";
    
    class DemoViewModel {
        constructor() {
            this.lengthValue1 = ko.observable('');
            this.lengthValue2 = ko.observable('');
            this.lengthValue3 = ko.observable('');
            this.lengthValue4 = ko.observable('');
            this.validators = ko.observableArray([new AsyncLengthValidator({ min: 5, max: 10 })]);
            this.validators2 = ko.observableArray([
                new AsyncLengthValidator({ min: 5, max: 10 })
            ]);
            this.validators3 = ko.observableArray([
                new AsyncLengthValidator({
                    min: 5,
                    max: 10,
                    
                    hint: {
                        inRange: 'Custom hint: value must have at least {min} characters but not more than {max}'
                    },
                    messageDetail: {
                        tooLong: 'Custom: Number of characters is too high. Enter at most {max} characters',
                        tooShort: 'Custom: Number of characters is too low. Enter at least {min} characters.'
                    }
                })
            ]);
            this.validators4 = ko.observableArray([
                new AsyncLengthValidator({ min: 5, max: 10 })
            ]);
            // to default the countBy app-wide, use the LengthValidator.defaults
            // setting countBy on LengthValidator.defaults.countBy applies
            // to both LengthValidators and AsyncLengthValidators.
            //LengthValidator.defaults.countBy = 'codePoint';
        }
    }
    Bootstrap.whenDocumentReady().then(() => {
        ko.cleanNode(document.getElementById('validator-example'))
        ko.applyBindings(new DemoViewModel(), document.getElementById('validator-example'));
    });
});