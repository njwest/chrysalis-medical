'use strict';

chrysalisApp.controller('NavbarController', ['$scope', function($scope) {

  $scope.navItems = [
    {
      name: "Home",
      link: "/",
      active: true
    },
    {
      name: "About Us",
      link: "about-us",
      active: false
    },
    {
      name: "How We Work",
      link: "how-we-work",
      active: false
    },
    {
      name: "Expertise",
      link: "expertise",
      active: false
    },
    {
      name: "Contact Us",
      link: "contact-us",
      active: false
    }
  ];

  navbar.currentPageCheck = function() {
    // if (navbar.navItems.active === false) {
    //   navbar.navItems.active = true;
    // }
    var test = "test";
    console.log(test);
    console.log('Clicked!');
    console.log('navItem = ', navItem);

  };

}]);
