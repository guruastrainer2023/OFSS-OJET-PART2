require(
    ["require", 
    "exports", 
    "knockout", 
    "ojs/ojbootstrap", 
    "ojs/ojarraydataprovider", 
    "ojs/ojknockout-keyset", 
    "ojs/ojknockout-keyset", 
    "ojs/ojknockout", 
    "ojs/ojkeyset", 
    "ojs/ojlabel", 
    "oj-c/avatar", 
    "oj-c/list-item-layout", 
    "oj-c/list-view", 
    "oj-c/selector", 
    "oj-c/selector-all"], 
    function (require, exports, ko, ojbootstrap_1, ArrayDataProvider, ojknockout_keyset_1) {
    "use strict";
    
    class SelectionViewModel {
        constructor() {
            this.data = [
                {
                    id: 1,
                    name: 'Chris Black',
                    title: 'Oracle Cloud Infrastructure GTM Channel Director EMEA',
                    image: '../images/01.jpg'
                },
                {
                    id: 2,
                    name: 'Christine Cooper',
                    title: 'Senior Principal Escalation Manager',
                    image: '../images/09.jpg'
                },
                {
                    id: 3,
                    name: 'Chris Benalamore',
                    title: 'Area Business Operations Director EMEA & JAPAC',
                    image: '../images/02.jpg'
                },
                {
                    id: 4,
                    name: 'Christopher Johnson',
                    title: 'Vice-President HCM Application Development',
                    image: '../images/03.jpg'
                },
                {
                    id: 5,
                    name: 'Samire Christian',
                    title: 'Consulting Project Technical Manager',
                    image: '../images/04.jpg'
                },
                {
                    id: 6,
                    name: 'Kurt Marchris',
                    title: 'Customer Service Analyst',
                    image: '../images/05.jpg'
                },
                {
                    id: 7,
                    name: 'Zelda Christian Cooperman',
                    title: 'Senior Principal Escalation Manager',
                    image: '../images/09.jpg'
                }
            ];
            this.selectedItems = new ojknockout_keyset_1.ObservableKeySet(); // observable bound to selection option to monitor current selections
            this.selectedIds = ko.observable();
            // Current selection is already monitored through this.selectedItems observable.
            // To perform custom selection logic on selected elements and/or on current item, an option change callback can be used:
            this.handleSelectedChanged = (event) => {
                // show selected list item elements' ids
                this.selectedIds(this.getDisplayValue(event.detail.value));
                const totalSize = this.data.length;
                if (!event.detail.value.isAddAll()) {
                    // when all items are selected
                    const currSize = this.selectedItems().keys.keys?.size;
                    currSize === totalSize && this.selectedItems.addAll();
                }
                else {
                    // when all items are unselected 
                    const currSize = this.selectedItems().keys.deletedKeys?.size;
                    currSize === totalSize && this.selectedItems(this.selectedItems().clear());
                }
            };
            this.dataProvider = new ArrayDataProvider(this.data, {
                keyAttributes: 'id'
            });
        }
        getDisplayValue({ keys }) {
            let text = '';
            const set = keys.all === true ? keys.deletedKeys : keys.keys;
            if (keys.all) {
                text = 'Everything selected';
                if (set.size > 0) {
                    text = text + ' except: ';
                }
            }
            return text + JSON.stringify(Array.from(set.values()));
        }
    }
    (0, ojbootstrap_1.whenDocumentReady)().then(() => {
        ko.cleanNode( document.getElementById('div1'))
        ko.applyBindings(new SelectionViewModel(), document.getElementById('div1'));
    });
});