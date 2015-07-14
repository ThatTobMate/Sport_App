'use strict';

/**
 * @ngdoc overview
 * @name sportsAppApp
 * @description
 * # sportsAppApp
 *
 * Main module of the application.
 */
angular
  .module('sportsAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'Devise',
    'ui.router'
  ])
  .config(['$stateProvider', '$urlRouterProvider',function ($routeProvider, $stateProvider, $urlRouterProvider) {

    $stateProvider.state('about', {
        url: '/about',
        templateUrl: 'about.html',
        controller: 'AboutCtrl'
      })
      // .state('login', {
      //   url: '/login',
      //   templateUrl: 'auth/_login.html',
      //   controller: 'AuthCtrl',
      //   onEnter: ['$state', 'Auth', function($state, Auth) {
      //     Auth.currentUser().then(function (){
      //       $state.go('home');
      //     })
      //   }]
      // })
      // .state('register', {
      //   url: '/register',
      //   templateUrl: 'auth/_register.html',
      //   controller: 'AuthCtrl',
      //   onEnter: ['$state', 'Auth', function($state, Auth) {
      //     Auth.currentUser().then(function (){
      //       $state.go('home');
      //     })
      //   }]
      // });

      // $routeProvider
      //   .when('/about', {
      //     templateUrl: 'views/about.html',
      //     controller: 'AboutCtrl'
      //   })

    $urlRouterProvider.otherwise('about');
  }])
