'use strict';

chrysalisApp.controller('AboutUsController', ['$scope', '$http', '$timeout', function($scope, $http, $timeout) {

  $http.get('data/aboutUsText.json').success(function(aboutUsTextData) {
    $scope.aboutUsText = aboutUsTextData;
  });

  // animations
  $scope.firstDelay = "0.3s";
  $scope.secondDelay = "1s";
  $scope.thirdDelay = "1.7s";
  $scope.fourthDelay = "2.4s";

  $scope.animationTimeDelay = [
    $scope.firstDelay,
    $scope.secondDelay,
    $scope.thirdDelay,
    $scope.fourthDelay
  ];

}]);
