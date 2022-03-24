(function (window){
    'use strict';

    const FORM_SELECTOR = '[data-coffee-order="form"]';
    const CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';
    const SERVER_URL = 'https://saturn.rochesterschools.org:8080/json';
    let App = window.App;
    let Truck = App.Truck;
    let RemoteDataStore = App.RemoteDataStore;
    let FormHandler = App.FormHandler;
    let CheckList = App.checkList;
    let Validation = App.Validation;

    let remoteDS = new RemoteDataStore(SERVER_URL);
    let myTruck = new App.Truck('12345',remoteDS);
    window.myTruck = myTruck;
    
    let formHandler = new FormHandler(FORM_SELECTOR);
    let checkList = new CheckList(CHECKLIST_SELECTOR);
    checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));
    


    formHandler.addSubmitHandler(function (data){ 
        myTruck.createOrder.call(myTruck, data);
        checkList.addRow.call(checkList, data);
    })

    formHandler.addInputHandler(Validation.isCompanyEmail);

})(window);