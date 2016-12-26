'use strict';

chrysalisApp.controller('contactUsController', ['$scope', function($scope) {

  var contactUs = this;

  contactUs.profiles = [
    {
      name: "Stacey Everett",
      position: "VP, Client Services",
      email: "stacey.everett@chrysalismedical.com",
      imgPath: "img/profiles/stacey-everett.png"
    },
    {
      name: "Dan Hutta, PhD",
      position: "VP, Scientific and Medical Services",
      email: "daniel.hutta@chrysalismedical.com",
      imgPath: "img/profiles/dan-hutta.png"
    }

  ];

}]);
