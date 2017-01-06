'use strict';

chrysalisApp.controller('ExpertiseController', ['$scope', '$http', '$timeout', function($scope, $http, $timeout) {

  $http.get('data/expertiseItems.json').success(function(expertiseItemsData) {
    $scope.items = expertiseItemsData;
  });

  $scope.firstDelay = "0.3s";
  $scope.secondDelay = "1s";
  $scope.thirdDelay = "1.7s";
  $scope.fourthDelay = "2.4s";

  $scope.animationTimeDelay = [
    $scope.firstDelay,
    $scope.firstDelay,
    $scope.firstDelay,
    $scope.firstDelay,
    $scope.secondDelay,
    $scope.secondDelay,
    $scope.secondDelay,
    $scope.secondDelay,
    $scope.thirdDelay,
    $scope.thirdDelay,
    $scope.thirdDelay,
    $scope.fourthDelay
  ];

}]);
