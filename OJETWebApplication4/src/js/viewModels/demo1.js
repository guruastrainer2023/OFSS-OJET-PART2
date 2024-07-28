require(["require", 
    "exports", 
    "knockout", 
    "ojs/ojbootstrap",
    "ojs/ojarraydataprovider", 
    "text!data/departmentData.json", 
    "ojs/ojtable", 
    "ojs/ojknockout"
    ], 
    function (require, exports, ko, Bootstrap,ArrayDataProvider, deptData) {
"use strict";

class DemoModel {
    constructor() {
        this.deptArray = JSON.parse(deptData);
        this.dataprovider = new ArrayDataProvider(this.deptArray, {
            keyAttributes: "DepartmentId",
            implicitSort: [{ attribute: "DepartmentId", direction: "ascending" }],
        });
    }
}
Bootstrap.whenDocumentReady().then(() => {
  ko.cleanNode(document.getElementById("div1"));
  ko.applyBindings(new DemoModel(), document.getElementById("div1"));
});
});