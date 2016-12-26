'use strict';

chrysalisApp.controller('TitleController', ['$scope', '$http', '$location', function($scope, $http, $location) {

  $http.get('data/navItems.json').success(function(navItemsData) {

    $scope.navItems = navItemsData;

    $scope.url = $location.$$url; // route name with '/'

    $scope.fixLink = function() { // route name without '/' except for home
      if ($scope.url === '/') {
        // for homepage
        $scope.link = '/';
      }
      // for all other pages
      else {
        $scope.link = $scope.url.replace('/','');
      }
    };

    $scope.fixLink();

    for (var i = 0; i < $scope.navItems.length; i++) {
      if ($scope.navItems[i].link === $scope.link) {
        $scope.currentTitle = $scope.navItems[i].name;
      }
    }

  });

}]);
