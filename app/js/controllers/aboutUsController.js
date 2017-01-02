'use strict';

chrysalisApp.controller('AboutUsController', ['$scope', '$http', function($scope, $http) {

  $http.get('data/aboutUsText.json').success(function(aboutUsTextData) {
    $scope.aboutUsText = aboutUsTextData;
  });

  $scope.initialDelay = 0.3;
  $scope.delayInterval = 0.7;

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
