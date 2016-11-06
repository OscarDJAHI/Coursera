(function(){

	"use strict";

  var app = angular.module('shopApp',[]);
  app.controller("ShopCtrl",ShopCtrl);
  
  ShopCtrl.$inject = ["$scope"];

  function ShopCtrl($scope){

    var qty = 20;

    $scope.store = {
        toBuy :[{ name: "Cookies", quantity: qty, "boughtBtn":false},
                 { name: "Cakes", quantity: qty, "boughtBtn":false},
                 { name: "Pinutts", quantity: qty, "boughtBtn":false},
                 { name: "Pizzas", quantity: qty, "boughtBtn":false},
                 { name: "Tomatoes", quantity: qty, "boughtBtn":false}
                ],
        bought :[]
    };
    
    $scope.toBuy = function(item,qty){

      // show bought btn before changing of item value
      showBoughtButton(item);

      item = $scope.store.toBuy[item].quantity;
      updateQty(item,qty);
    };

    $scope.moveInboughtList = function(item){
      var obj = {name :$scope.store.toBuy[item].name, quantity:$scope.store.toBuy[item].quantity};
      var arr = $scope.store.bought;
      addItem(obj,arr);

      arr = $scope.store.toBuy;
      removeItem(item, arr);
    };
    
    var showBoughtButton = function(item){
        $scope.store.toBuy[item].boughtBtn = true;
    };
    
    var updateQty = function(item, qty){
        item = qty;
    };

    var addItem = function(obj,arr){
        arr.push(obj);
    };

    var removeItem = function(item,arr){
      arr.splice(item,1);
    };
  }

})();
