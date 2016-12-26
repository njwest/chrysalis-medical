'use strict';

chrysalisApp.controller('NavbarController', ['$scope', '$http', function($scope, $http) {

  $http.get('data/navItems.json').success(function(navItemsData) {
    $scope.navItems = navItemsData;
  });

  $scope.currentPageCheck = function() {
    // if (navbar.navItems.active === false) {
    //   navbar.navItems.active = true;
    // }
    var test = "test";
    console.log(test);
    console.log('Clicked!');
    console.log('navItem = ', navItem);

  };

}]);
