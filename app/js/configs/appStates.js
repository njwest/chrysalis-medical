'use strict';

chrysalisApp.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('/', {
        url: '/',
        templateUrl: 'views/home.html'
      })

      .state('about-us', {
        url: '/about-us',
        templateUrl: 'views/about-us.html',
        controller: 'AboutUsController'
      })

      .state('how-we-work', {
        url: '/how-we-work',
        templateUrl: 'views/how-we-work.html',
        controller: 'HowWeWorkController'
      })

      .state('expertise', {
        url: '/expertise',
        templateUrl: 'views/expertise.html',
        controller: 'ExpertiseController'
      })

      .state('contact-us', {
        url: '/contact-us',
        templateUrl: 'views/contact-us.html',
        controller: 'ContactUsController'
      });

      $locationProvider.html5Mode(true);

  }]);
