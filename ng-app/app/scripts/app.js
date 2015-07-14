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
  .config(function ($routeProvider, $stateProvider, $urlRouterProvider, AuthProvider) {
    // $routeProvider
    //   .when('/', {
    //     templateUrl: 'views/home.html',
    //     controller: 'MainCtrl'
    //   })
    //   .when('/main', {
    //     templateUrl: 'views/main.html',
    //     controller: 'MainCtrl'
    //   })
    //   .when('/about', {
    //     templateUrl: 'views/about.html',
    //     controller: 'AboutCtrl'
    //   })
    $stateProvider.state('home', {
        url: '/home',
        templateUrl: '/home.html',
        controller: 'MainCtrl'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'views/auth/_login.html',
        controller: 'AuthCtrl',
        onEnter: ['$state', 'Auth', function($state, Auth) {
          Auth.currentUser().then(function (){
            $state.go('home');
          })
        }]
      })
      .state('register', {
        url: '/register',
        templateUrl: 'views/auth/_register.html',
        controller: 'AuthCtrl',
        onEnter: ['$state', 'Auth', function($state, Auth) {
          Auth.currentUser().then(function (){
            $state.go('home');
          })
        }]
      });
    // $urlRouterProvider.otherwise('home')
      AuthProvider.loginPath('api/users/sign_in.json');
      AuthProvider.loginMethod('GET');
      AuthProvider.resourceName('customer');
      AuthProvider.logoutPath('api/users/sign_out.json');
      AuthProvider.logoutMethod('GET');
      AuthProvider.registerPath('api/users.json');
      AuthProvider.registerMethod('GET');
      AuthProvider.resourceName('customer');

  })
