'use strict';

chrysalisApp.controller('navbarController', ['$scope', function($scope) {
  var navbar = this;

  navbar.navItems = [
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
    // write function to change navItem to green to signify as active
  }
}]);
