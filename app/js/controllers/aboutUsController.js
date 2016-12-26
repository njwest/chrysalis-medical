'use strict';

chrysalisApp.controller('AboutUsController', ['$scope', '$http', function($scope, $http) {

  $http.get('data/aboutUsText.json').success(function(aboutUsTextData) {
    $scope.aboutUsText = aboutUsTextData;
  });

}]);
