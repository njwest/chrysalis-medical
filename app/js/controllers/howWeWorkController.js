'use strict';

chrysalisApp.controller('HowWeWorkController', ['$scope', '$http', function($scope, $http) {

  $http.get('data/howWeWorkText.json').success(function(howWeWorkTextData) {
    $scope.howWeWorkText = howWeWorkTextData;
  });

  $http.get('data/icons.json').success(function(iconData) {
    $scope.icons = iconData;
  });



}]);
