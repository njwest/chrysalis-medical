'use strict';

chrysalisApp.controller('HowWeWorkController', ['$scope', '$http', function($scope, $http) {

  $http.get('data/howWeWorkText.json').success(function(howWeWorkTextData) {
    $scope.howWeWorkText = howWeWorkTextData;
  });

  $http.get('data/icons.json').success(function(iconData) {
    $scope.icons = iconData;
  });

  // animations
  $scope.firstDelay = "0.3s";
  $scope.secondDelay = "1s";
  $scope.thirdDelay = "1.7s";
  $scope.fourthDelay = "2.4s";
  $scope.fifthDelay = "3.1s";
  $scope.sixthDelay = "3.8s";

  $scope.animationTimeDelay = [
    $scope.firstDelay,
    $scope.secondDelay,
    $scope.thirdDelay,
    $scope.fourthDelay,
    $scope.fifthDelay,
    $scope.sixthDelay
  ];

}]);
