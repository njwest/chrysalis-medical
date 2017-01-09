'use strict';

chrysalisApp.controller('ContactUsController', ['$scope', '$http', '$log', '$timeout', function($scope, $http, $log, $timeout) {

  // get profile data
  $http.get('data/contactUsProfiles.json').success(function(contactUsProfilesData) {
    $scope.profiles = contactUsProfilesData;
  });

  $scope.firstDelay = "0.3s";
  $scope.secondDelay = "1s";
  $scope.thirdDelay = "1.7s";
  $scope.removeRedBorderDelayTimer = 5000;
  $scope.removeBtnAnimationClassDelayTimer = 1250;
  $scope.formInputs = [
    angular.element( document.querySelector( '#name-input' ) ),
    angular.element( document.querySelector( '#email-input' ) ),
    angular.element( document.querySelector( '#message-input' ) )
  ];
  $scope.url = "http://www.chrysalismedical.com/emailapi/api/email";

  // remove red border after time delay
  $scope.resetNameInput = function() {
    if ($scope.formInputs[0].hasClass('ng-invalid')) {
      $scope.formInputs[0].removeClass('ng-untouched').addClass('invalid-input');
    }
    $timeout(function() {
      $scope.formInputs[0].removeClass('ng-touched invalid-input').addClass('ng-untouched');
    }, $scope.removeRedBorderDelayTimer);
  };
  $scope.resetEmailInput = function() {
    if ($scope.formInputs[1].hasClass('ng-invalid')) {
      $scope.formInputs[1].removeClass('ng-untouched').addClass('invalid-input');
    }
    $timeout(function() {
      $scope.formInputs[1].removeClass('ng-touched invalid-input').addClass('ng-untouched');
    }, $scope.removeRedBorderDelayTimer);
  };
  $scope.resetMessageInput = function() {
    if ($scope.formInputs[2].hasClass('ng-invalid')) {
      $scope.formInputs[2].removeClass('ng-untouched').addClass('invalid-input');
    }
    $timeout(function() {
      $scope.formInputs[2].removeClass('ng-touched invalid-input').addClass('ng-untouched');
    }, $scope.removeRedBorderDelayTimer);
  };

  // form messages
  $scope.successResponse = "<i class='fa fa-check-circle' aria-hidden='true'></i> Your message has been sent.";
  $scope.errorResponse = "<i class='fa fa-exclamation-circle' aria-hidden='true'></i> An error has occurred. Please try again.";
  $scope.blankFieldError = "<small><i class='fa fa-exclamation-circle' aria-hidden='true'></i> Please fill out all fields before clicking 'Submit'.</small>";
  $scope.emailError = "<small><i class='fa fa-exclamation-circle' aria-hidden='true'></i> Please enter a valid email before clicking 'Submit'.</small>";

  // animations
  $scope.removeBtnAnimationClass = function() {
    document.getElementById('submit-btn').className = 'btn btn-success pull-right disabled-btn';
  };
  $scope.zoomOutDanger = function() {
    document.getElementById('form-messages').className = 'animated zoomOut bg-danger text-danger';
  }
  $scope.zoomOutSuccess = function() {
    document.getElementById('form-messages').className = 'animated zoomOut bg-success text-success';
  };
  $scope.zoomOutError = function() {
    document.getElementById('form-messages').className = 'animated zoomOut bg-danger text-danger';
  };
  $scope.removeZoomOut = function() {
    document.getElementById('form-messages').className = 'center-block text-center';
    document.getElementById('form-messages').innerHTML = '';
  };

  $scope.submit = function() {

    // check for blank fields or invalid email before submitting ajax request
    if (
      ($scope.contact === undefined) || ($scope.contact.name === undefined) || ($scope.contact.email === undefined) || ($scope.contact.message === undefined)
    ) {
      document.getElementById('form-messages').className = 'bg-danger text-danger animated zoomIn'; // show error msg
      document.getElementById('submit-btn').className = 'btn btn-success pull-right animated shake disabled-btn';

      $timeout(function() { // remove shake animation class
        $scope.removeBtnAnimationClass();
      }, $scope.removeBtnAnimationClassDelayTimer);

      if ( // show blank field error
        ($scope.contact === undefined) ||
        ($scope.contact.name === undefined) || ($scope.contact.message === undefined)
      ) {
        document.getElementById('form-messages').innerHTML = $scope.blankFieldError;
        $timeout($scope.zoomOutDanger, 5000);
      }
      else { // show email error
        document.getElementById('form-messages').innerHTML = $scope.emailError;
        $timeout($scope.zoomOutDanger, 5000);
        $timeout($scope.removeZoomOut, 6000);
      }

      // apply red border if invalid
      if ($scope.contact === undefined) {
        $scope.formInputs[0].addClass('ng-invalid ng-touched').removeClass('ng-valid ng-untouched');
        $scope.formInputs[1].addClass('ng-invalid ng-touched').removeClass('ng-valid ng-untouched');
        $scope.formInputs[2].addClass('ng-invalid ng-touched').removeClass('ng-valid ng-untouched');
      }
      else {
        if ($scope.contact.name === undefined) {
          $scope.formInputs[0].addClass('ng-invalid ng-touched').removeClass('ng-valid ng-untouched');
        }
        if ($scope.contact.email === undefined) {
          $scope.formInputs[1].addClass('ng-invalid ng-touched').removeClass('ng-valid ng-untouched');
        }
        if ($scope.contact.message === undefined) {
          $scope.formInputs[2].addClass('ng-invalid ng-touched').removeClass('ng-valid ng-untouched');
        }
      }
      $scope.resetNameInput();
      $scope.resetEmailInput();
      $scope.resetMessageInput();

    } // end if statement

    else {

      $scope.contactData = {
          "UserEmail" : $scope.contact.email,
          "UserName" : $scope.contact.name,
          "FromEmail" : "test@n24i.com",
          "ToEmail" : "darryl.mendonez@nucleuscentral.com;",
          "ReplyToEmail" : "",
          "CopyToEmail" : "",
          "Subject" : "Chrysalis Contacts",
          "EmailContent" : $scope.contact.message
      };
      console.log('contactData = ', $scope.contactData);

      var request = {
        method: 'POST',
        url: $scope.url,
        headers: {
          'Content-Type': 'application/json'
        },
        data: $scope.contactData
      };

      $http(request).success(function(){
        $scope.formInputs[0].removeClass('ng-touched invalid-input').addClass('ng-untouched');
        $scope.formInputs[1].removeClass('ng-touched invalid-input').addClass('ng-untouched');
        $scope.formInputs[2].removeClass('ng-touched invalid-input').addClass('ng-untouched');
        document.getElementById('form-messages').innerHTML = $scope.successResponse;
        document.getElementById('form-messages').className = 'bg-success text-success animated zoomIn';
        $timeout(function() {
          $scope.removeBtnAnimationClass(); // remove animated tada
        }, $scope.removeBtnAnimationClassDelayTimer);
        document.getElementById('name-input').value = '';
        document.getElementById('email-input').value = '';
        document.getElementById('message-input').value = '';
        $scope.contact.name = undefined;
        $scope.contact.email = undefined;
        $scope.contact.message = undefined;
        $timeout($scope.zoomOutSuccess, 5000);
        $timeout($scope.removeZoomOut, 6000);
      }).error(function(){
        console.log('Email not sent');
        document.getElementById('form-messages').innerHTML = $scope.errorResponse;
        document.getElementById('name-input').value = '';
        document.getElementById('email-input').value = '';
        document.getElementById('message-input').value = '';
        $scope.contact.name = undefined;
        $scope.contact.email = undefined;
        $scope.contact.message = undefined;
        $timeout($scope.zoomOutError, 5000);
        $timeout($scope.removeZoomOut, 6000);
      });
    }
  }; // /submit btn

}]);
