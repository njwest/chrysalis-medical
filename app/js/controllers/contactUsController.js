'use strict';

chrysalisApp.controller('ContactUsController', ['$scope', '$http', function($scope, $http) {

  $http.get('data/contactUsProfiles.json').success(function(contactUsProfilesData) {
    $scope.profiles = contactUsProfilesData;
  });

}]);
