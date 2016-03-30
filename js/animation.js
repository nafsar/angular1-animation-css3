(function() {
  "use strict";
  angular.module('myApp', [])
    .controller('DataCtrl', function($scope, $http) {

      $http.get("js/data.json").then(function(response) {
        $scope.items = response.data.store;
      });

      $scope.addItem = function() {
        $scope.items.push($scope.item);
        $scope.item = {};
      };

      $scope.removeItem = function(index) {
        $scope.items.splice(index, 1);
      };
    })
    .directive('submitData', submitData)
    .directive('displayData', displayData);

  function submitData() {
    return {
      restrict: 'E',
      templateUrl: 'submit.html'
    };
  };

  function displayData() {
    return {
      restrict: 'A',
      templateUrl: 'display.html'
    };
  };
})();
