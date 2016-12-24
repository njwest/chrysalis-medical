'use strict';

chrysalisApp.controller('howWeWorkController', ['$scope', function($scope) {

  var howWeWork = this;

  $scope.howWeWorkText = [
    "Chrysalis values the partnerships we have built with both our clients and our internal team members.",
    "Each day we strive to meet our 5 core values…"
  ];

  howWeWork.icons = [
    {
      name: "Integrity",
      fileName: "integrity"
    },
    {
      name: "Sound Science",
      fileName: "sound-science"
    },
    {
      name: "Commitment",
      fileName: "commitment"
    },
    {
      name: "Passion",
      fileName: "passion"
    },
    {
      name: "Partnership",
      fileName: "partnership"
    }
  ];
}]);
