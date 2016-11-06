(function(){

  "use strict";

  var app = angular.module('ShoppingListCheckOff',[]);

  app.controller('ToBuyController', ToBuyController)
  app.controller('AlreadyBoughtController', AlreadyBoughtController)
  app.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var that = this;

    that.items = ShoppingListCheckOffService.getItems();

    var toBuy_arr = that.items.toBuy;
    var bought_arr = that.items.bought;


    that.moveInboughtList = function(itemIndex){
      addBoughtProduct(itemIndex);
      removeBoughtProduct(itemIndex);    
    };

    var addBoughtProduct = function(itemIndex){
      var obj = {name : toBuy_arr[itemIndex].name, quantity:toBuy_arr[itemIndex].quantity};
      var arr = bought_arr;
      ShoppingListCheckOffService.addItem(obj,arr);
    };

    var removeBoughtProduct = function(itemIndex){
      ShoppingListCheckOffService.removeItem(itemIndex, toBuy_arr);
    };
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var that = this;

    that.items = ShoppingListCheckOffService.getItems();

  }

  function ShoppingListCheckOffService() {
      var service = this;

      var qty = 10;

      var store = {
          toBuy :[{ name: "Cookies", quantity: qty},
                   { name: "Cakes", quantity: qty},
                   { name: "Pinutts", quantity: qty},
                   { name: "Pizzas", quantity: qty},
                   { name: "Tomatoes", quantity: qty}
                  ],
          bought :[]
      };

      service.getItems = function () {
        return store;
      };

      service.addItem = function(obj,arr){
          arr.push(obj);
      };

      service.removeItem = function(itemIdex,arr){
        arr.splice(itemIdex,1);
      };
  }

})();
