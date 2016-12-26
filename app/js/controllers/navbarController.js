'use strict';

chrysalisApp.controller('NavbarController', ['$scope', '$http', '$location', function($scope, $http, $location) {

  $http.get('data/navItems.json').success(function(navItemsData) {
    $scope.navItems = navItemsData;

    // set class='active' when user types in url in address bar
    $scope.url = $location.$$url; // route with '/'
    // route name without '/' except for home
    $scope.fixLink = function() {
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
        $scope.navItems[i].active = true;
      }
    }

  });

  // change class to active when user clicks on nav links
  $scope.currentPageCheck = function() {
    $scope.itemSelected = this;
    if ($scope.itemSelected.navItem.active === false) {
      for (var i = 0; i < $scope.navItems.length; i++) {
        if ($scope.navItems[i].active === true) {
          $scope.navItems[i].active = false;
        }
      }
      $scope.itemSelected.navItem.active = true;
    }
  };

}]);
