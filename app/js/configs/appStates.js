'use strict';

chrysalisApp.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('/', {
        url: '/',
        templateUrl: 'views/home.html'
      })

      .state('about-us', {
        url: '/about-us',
        templateUrl: 'views/about-us.html'
      })

      .state('how-we-work', {
        url: '/how-we-work',
        templateUrl: 'views/how-we-work.html'
      })

      .state('expertise', {
        url: '/expertise',
        templateUrl: 'views/expertise.html'
      })

      .state('contact-us', {
        url: '/contact-us',
        templateUrl: 'views/contact-us.html'
      });

      $locationProvider.html5Mode(true);

  }]);