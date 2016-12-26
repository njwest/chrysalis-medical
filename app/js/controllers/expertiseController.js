'use strict';

chrysalisApp.controller('ExpertiseController', ['$scope', '$http', function($scope, $http) {

  $http.get('data/expertiseItems.json').success(function(expertiseItemsData) {
    $scope.items = expertiseItemsData;
  });

}]);
