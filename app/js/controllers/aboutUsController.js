'use strict';

chrysalisApp.controller('AboutUsController', ['$scope', '$http', '$timeout', function($scope, $http, $timeout) {

  $http.get('data/aboutUsText.json').success(function(aboutUsTextData) {
    $scope.aboutUsText = aboutUsTextData;
  });

  $scope.initialDelay = 0.3;
  $scope.delayInterval = 0.7;

  $scope.animationTimeDelay = [
    $scope.initialDelay + "s",
    ($scope.initialDelay + $scope.delayInterval) + "s",
    ($scope.initialDelay + ($scope.delayInterval * 2)) + "s",
    ($scope.initialDelay + ($scope.delayInterval * 3)) + "s"
  ];

}]);
