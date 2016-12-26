'use strict';

chrysalisApp.controller('HowWeWorkController', ['$scope', function($scope) {

  $scope.howWeWorkText = [
    "Chrysalis values the partnerships we have built with both our clients and our internal team members.",
    "Each day we strive to meet our 5 core values…"
  ];

  $scope.icons = [
    {
      name: "Integrity",
      imgPath: "img/icons/icon-integrity.jpg"
    },
    {
      name: "Sound Science",
      imgPath: "img/icons/icon-sound-science.jpg"
    },
    {
      name: "Commitment",
      imgPath: "img/icons/icon-commitment.jpg"
    },
    {
      name: "Passion",
      imgPath: "img/icons/icon-passion.jpg"
    },
    {
      name: "Partnership",
      imgPath: "img/icons/icon-partnership.jpg"
    }
  ];

}]);
