'use strict';

chrysalisApp.controller('HowWeWorkController', ['$scope', '$http', function($scope, $http) {

  $http.get('data/howWeWorkText.json').success(function(howWeWorkTextData) {
    $scope.howWeWorkText = howWeWorkTextData;
  });

  $http.get('data/icons.json').success(function(iconData) {
    $scope.icons = iconData;
  });

  $scope.initialDelay = 0.4;
  $scope.delayInterval = 0.5;

  $scope.animationTimeDelay = [
    $scope.initialDelay + "s",
    ($scope.initialDelay + $scope.delayInterval) + "s",
    ($scope.initialDelay + ($scope.delayInterval * 2)) + "s",
    ($scope.initialDelay + ($scope.delayInterval * 3)) + "s",
    ($scope.initialDelay + ($scope.delayInterval * 4)) + "s",
    ($scope.initialDelay + ($scope.delayInterval * 5)) + "s",
    ($scope.initialDelay + ($scope.delayInterval * 6)) + "s",
    ($scope.initialDelay + ($scope.delayInterval * 7)) + "s",
    ($scope.initialDelay + ($scope.delayInterval * 8)) + "s",
    ($scope.initialDelay + ($scope.delayInterval * 9)) + "s",
    ($scope.initialDelay + ($scope.delayInterval * 10)) + "s",
  ];

}]);
