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

  // navbar.currentPageCheck = function() {
  //   if (navbar.navItems.active === false) {
  //     navbar.navItems.active = true;
  //   }
  // };
  //
  // console.log(navbar.navItems[1].active);

}]);
