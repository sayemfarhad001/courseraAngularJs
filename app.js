(function () {
  'use strict';

  angular.module("myFirstApp", [])
  .controller("MyFirstController", function($scope){
    $scope.name = "Sayem"
    $scope.sayHello = function(name) {
      return "Hello " + name + "!"
    }
  })

})();
