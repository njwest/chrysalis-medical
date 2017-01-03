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

  // start video after text animations complete
  $scope.videoSection = '<video autoplay class="responsive-video"><source id="about-us-video" src="videos/dna-green-segment.mp4" type="video/mp4"; codecs="avc1.42E01E, mp4a.40.2" /></video>'

  console.log('video time delay = ', ($scope.initialDelay + ($scope.delayInterval * 3) ));

  $timeout(function () {
    document.getElementById('about-us-video-container').innerHTML = $scope.videoSection;
  }, (($scope.initialDelay + ($scope.delayInterval * 2) )) * 1000 );

}]);
