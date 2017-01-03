'use strict';

chrysalisApp.controller('NavbarController', ['$scope', '$http', '$location', function($scope, $http, $location) {

  $http.get('data/navItems.json').success(function(navItemsData) {

    $scope.navItems = navItemsData;

    // set class='active' when user types in url in address bar
    $scope.url = $location.$$url; // route name with '/'

    $scope.fixLink = function() { // route name without '/' except for home
      if ($scope.url === '/') { // for homepage
        $scope.link = '/';
      }
      else { // for all other pages
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
    // mark unselected items innactive
    if ( ($scope.itemSelected.navItem === undefined) || ($scope.itemSelected.navItem.active === false) || ($scope.itemSelected.navItem === undefined) ) {
      for (var i = 0; i < $scope.navItems.length; i++) {
        if ($scope.navItems[i].active === true) {
          $scope.navItems[i].active = false;
        }
      }
      // mark selected item active
      if ($scope.itemSelected.navItem === undefined) { // when user clicks navbar brand
        $scope.navItems[0].active = true;
      }
      else { // when user clicks nav items
        $scope.itemSelected.navItem.active = true;
      }
    }
  };

}]);
