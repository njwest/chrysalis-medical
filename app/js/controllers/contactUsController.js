'use strict';

chrysalisApp.controller('ContactUsController', ['$scope', '$http', '$log', '$timeout', function($scope, $http, $log, $timeout) {

  $http.get('data/contactUsProfiles.json').success(function(contactUsProfilesData) {
    $scope.profiles = contactUsProfilesData;
  });

  // $scope.fadeOutTimeDelay = 3000;
  $scope.removeRedBorderDelayTimer = 5000;

  $scope.formInputs = [
    angular.element( document.querySelector( '#name-input' ) ),
    angular.element( document.querySelector( '#email-input' ) ),
    angular.element( document.querySelector( '#message-input' ) )
  ];

  // remove red border and invalid msgs after time delay
  $scope.resetNameInput = function() {
    $timeout(function() {
      $scope.formInputs[0].removeClass('ng-touched').addClass('ng-untouched')
    }, $scope.removeRedBorderDelayTimer);
  };
  $scope.resetEmailInput = function() {
    $timeout(function() {
      $scope.formInputs[1].removeClass('ng-touched').addClass('ng-untouched')
    }, $scope.removeRedBorderDelayTimer);
  };
  $scope.resetMessageInput = function() {
    $timeout(function() {
      $scope.formInputs[2].removeClass('ng-touched').addClass('ng-untouched')
    }, $scope.removeRedBorderDelayTimer);
  };

}]);
