'use strict';

chrysalisApp.controller('ContactUsController', ['$scope', '$http', '$log', '$timeout', function($scope, $http, $log, $timeout) {

  $http.get('data/contactUsProfiles.json').success(function(contactUsProfilesData) {
    $scope.profiles = contactUsProfilesData;
  });

  // $scope.fadeOutTimeDelay = 3000;
  $scope.removeRedBorderDelayTimer = 5000;

  $scope.formInputs = [
    angular.element( document.querySelector( '#name-input' ) ),
    angular.element( document.querySelector( '#email-input' ) ),
    angular.element( document.querySelector( '#message-input' ) )
  ];

  // remove red border and invalid msgs after time delay
  $scope.resetNameInput = function() {
    $timeout(function() {
      $scope.formInputs[0].removeClass('ng-touched').addClass('ng-untouched');
    }, $scope.removeRedBorderDelayTimer);
  };
  $scope.resetEmailInput = function() {
    $timeout(function() {
      $scope.formInputs[1].removeClass('ng-touched').addClass('ng-untouched');
    }, $scope.removeRedBorderDelayTimer);
  };
  $scope.resetMessageInput = function() {
    $timeout(function() {
      $scope.formInputs[2].removeClass('ng-touched').addClass('ng-untouched');
    }, $scope.removeRedBorderDelayTimer);
  };


  // submit button function
  // $scope.contactForm = angular.element( document.querySelector( '#contact-form' ) );
  //
  // $scope.formMessages = angular.element( document.querySelector( '#form-messages' ) );

  $scope.url = "http://www.chrysalismedical.com/emailapi/api/email";

  $scope.successResponse = "<i class='fa fa-check' aria-hidden='true'></i> Your message has been sent.";
  $scope.errorResponse = "<i class='fa fa-exclamation-circle' aria-hidden='true'></i> An error has occurred. Please try again.";
  $scope.blankFieldError = "<small><i class='fa fa-exclamation-circle' aria-hidden='true'></i> Please fill out all fields before clicking 'Submit'.</small>";

  // $scope.removeShake = function() {
  //   $scope.formMessages.removeClass('shake');
  // };
  // $scope.removeBounceIn = function() {
  //   $scope.formMessages.removeClass('bounceIn');
  // };
  // $scope.addZoomOut = function() {
  //   $scope.formMessages.addClass('zoomOut');
  // };

  $scope.submit = function() {
    console.log('submit button clicked');
    $scope.$watch('contact.name', function(val) {
    });

    // Check for blank fields before submitting ajax request
    if (
      ($scope.contact === undefined) || ($scope.contact.name === "") || ($scope.contact.email === "") || ($scope.contact.message === "")
    ) {

      document.getElementById('form-messages').className = 'bg-danger text-danger shake wow';

      document.getElementById('form-messages').innerHTML = $scope.blankFieldError;

      // $timeout(function() {
      //   $scope.removeShake();
      // }, 1000);
      //
      // $timeout(function() {
      //   $scope.addZoomOut();
      // }, 10000);

    } // /if statement

    // else {
    // $scope.jsondata = {
    //     "UserEmail" : $scope.contact.email,
    //     "UserName" : $scope.contact.name,
    //     "FromEmail" : "test@n24i.com",
    //     "ToEmail" : "darryl.mendonez@nucleuscentral.com;",
    //     "ReplyToEmail" : "",
    //     "CopyToEmail" : "",
    //     "Subject" : "Chrysalis Contacts",
    //     "EmailContent" : $scope.contact.message
    // };
    //   $.ajax({
    //     type: "POST",
    //     url: url,
    //     data: jsondata,
    //     success: function (msg) {
    //         $(formMessages).removeClass('bg-danger text-danger shake zoomOut');
    //         $(formMessages).addClass('bg-success text-success bounceIn');
    //         $(formMessages).html(successResponse);
    //         $('#name').val('');
    //         $('#email').val('');
    //         $('#message').val('');
    //         setTimeout(function() {
    //           removeBounceIn();
    //         }, 1000);
    //         setTimeout(function() {
    //           addZoomOut();
    //         }, 10000);
    //     },
    //     error: function (msg) {
    //       $(formMessages).removeClass('bg-success text-success bounceIn zoomOut');
    //       $(formMessages).addClass('bg-danger text-danger shake');
    //       $(formMessages).html(errorResponse);
    //       setTimeout(function() {
    //         removeShake();
    //       }, 1000);
    //       setTimeout(function() {
    //         addZoomOut();
    //       }, 10000);
    //     }
    //   });
    // }

  }; // /submit btn

}]);
