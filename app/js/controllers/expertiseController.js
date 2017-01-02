'use strict';

chrysalisApp.controller('ExpertiseController', ['$scope', '$http', function($scope, $http) {

  $http.get('data/expertiseItems.json').success(function(expertiseItemsData) {
    $scope.items = expertiseItemsData;
  });

  $scope.initialDelay = 0.3;
  $scope.delayInterval = 0.7;

  $scope.animationTimeDelay = [
    $scope.initialDelay + "s",
    $scope.initialDelay + "s",
    $scope.initialDelay + "s",
    $scope.initialDelay + "s",
    ($scope.initialDelay + $scope.delayInterval) + "s",
    ($scope.initialDelay + $scope.delayInterval) + "s",
    ($scope.initialDelay + $scope.delayInterval) + "s",
    ($scope.initialDelay + ($scope.delayInterval * 2)) + "s",
    ($scope.initialDelay + ($scope.delayInterval * 2)) + "s",
    ($scope.initialDelay + ($scope.delayInterval * 2)) + "s",
    ($scope.initialDelay + ($scope.delayInterval * 2)) + "s"
  ];

}]);
