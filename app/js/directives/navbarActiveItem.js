'use strict';

chrysalisApp.directive('navbarActiveItem', function() {
  return {

    restrict: 'E',
    scope: {
      active: '='
    },
    templateUrl: 'views/navbar.html',
    controller: function($scope) {
      $scope.classActive = function() {
        console.log('classActive() fired!');
        $scope.active = true;
      }
    }

  };
});
