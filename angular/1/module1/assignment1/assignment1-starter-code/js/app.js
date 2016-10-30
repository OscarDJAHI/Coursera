(function(){

	"use strict";

  var lunchCheckApp = angular.module('LunchCheck',[]);

  lunchCheckApp.controller("LunchCheckController",LunchCheckController);

  LunchCheckController.$inject = ["$scope"];

  function LunchCheckController($scope){
    var regex = /[a-zA-Z0-9]/;
      
    $scope.getLunchList = function(){
        // Get textbox string
        var str = $scope.lunch;
      
        // if textbox is empty
        if(str){
          // to hide empty error message
          $scope.textboxEmpty = false;
          
          // split string in array and filter that array from empty element 
          $scope.lunchList = str.split(',').filter(cleanArray);
          
          //return length of clean array
          $scope.counter = $scope.lunchList.length;
        }
        else{
          // to dispay empty error message
          $scope.textboxEmpty = true;
          $scope.counter = "";
          $scope.lunchList ="";
        } 
        
        return $scope.lunchList; 
      };
     
      // filter an array form (''=>empty and ' '=>white-space) element
      var cleanArray = function(el){
        return regex.test(el);
      };
  }

})();
