'use strict';

chrysalisApp.controller('ExpertiseController', ['$scope', '$http', '$timeout', function($scope, $http, $timeout) {

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

  // start video after text animations complete
  $scope.videoSection = '<video autoplay class="responsive-video"><source id="expertise-video" src="videos/dna-blue-segment.mp4" type="video/mp4"; codecs="avc1.42E01E, mp4a.40.2" /></video>';

  $timeout(function () {
    document.getElementById('expertise-video-container').innerHTML = $scope.videoSection;
  }, (($scope.initialDelay + ($scope.delayInterval * 2) )) * 1000 );

}]);
