(function (window){
    'use strict';

    let App = window.App;
    let Truck = App.Truck;
    let DataStore = App.DataStore;

    let myTruck = new App.Truck('12345', new App.DataStore());

    window.myTruck = myTruck;
    
})(window);