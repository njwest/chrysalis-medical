'use strict';

chrysalisApp.controller('TitleController', ['$scope', '$http', '$location', function($scope, $http, $location) {

  $http.get('data/navItems.json').success(function(navItemsData) {
    $scope.navItems = navItemsData;
    console.log('navItems = ', $scope.navItems);
    $scope.url = $location.$$url; // route with '/'
    console.log('url = ', $scope.url);
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
      console.log('link = ', $scope.link);
    };
    $scope.fixLink();
    for (var i = 0; i < $scope.navItems.length; i++) {
      console.log('navItems[' + i + '].link = ', $scope.navItems[i].link)
      if ($scope.navItems[i].link === $scope.link) {
        $scope.currentTitle = $scope.navItems[i].name;
        console.log('currentTitle = ', $scope.currentTitle);
        console.log('IF STATEMENT FIRED!!!')
      }
      else {
        console.log('if statement did not fire');
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
