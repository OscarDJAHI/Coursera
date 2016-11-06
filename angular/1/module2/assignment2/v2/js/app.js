(function(){

	"use strict";

  var app = angular.module('shopApp',[]);

  app.controller("ShopCtrl",ShopCtrl);

  ShopCtrl.$inject = ["$scope"];

  function ShopCtrl($scope){

    var toBuylgh,boughtlgh ='';
    var stock = 20;

    $scope.store = {
                toBuy :[{ name: "Cookies", quantity: 0, stock:stock, "boughtBtn":false},
                         { name: "Cakes", quantity: 0, stock:stock, "boughtBtn":false},
                         { name: "Pinutts", quantity: 0, stock:stock, "boughtBtn":false},
                         { name: "Pizzas", quantity: 0, stock:stock, "boughtBtn":false},
                         { name: "Tomatoes", quantity: 0, stock:stock, "boughtBtn":false}
                        ],
                bought :[]
                };
    
    $scope.shop = function(){
      return $scope.store;
    };
    
    $scope.toBuy = function(prdctIndex,qty){
      newStock(prdctIndex,qty);
    };
    
    var newStock = function(prdctIndex, qty){
         
        if(qty > $scope.store.toBuy[prdctIndex].stock){
          $scope.message = "You can buy at most "+$scope.store.toBuy[prdctIndex].stock+" "+$scope.store.toBuy[prdctIndex].name;
        }
        else if(qty==0){
          $scope.message = "Buy at least one "+ $scope.store.toBuy[prdctIndex].name +" or more !";
        }
        else{
          $scope.store.toBuy[prdctIndex].stock = $scope.store.toBuy[prdctIndex].stock - qty;
          updateStore(prdctIndex, qty);
          $scope.message=false;
          
          if($scope.store.toBuy[prdctIndex].stock==0){
            $scope.store.toBuy.splice(prdctIndex,1);
            toBuylgh = $scope.store.toBuy.length;
            boughtlgh = $scope.store.bought.length;
          }
        }
    };
    
    var updateStore = function(prdctIndex, qty){
        $scope.store.toBuy[prdctIndex].quantity=0;
        $scope.store.bought.push({name :$scope.store.toBuy[prdctIndex].name, quantity:qty});
    };
    
  }

})();
