'use strict';

/**
 * @ngdoc overview
 * @name sportsAppApp
 * @description
 * # sportsAppApp
 *
 * Main module of the application.
 */
angular.module('sportsAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'Devise',
    'ui.router',
    'ngStorage'
    ])
  .config(function ($stateProvider, $urlRouterProvider, AuthProvider) {
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
    // $authProvider.configure({
    //     apiUrl: 'http://localhost:9000/api'
    // });

    $stateProvider.state('home', {
        url: '/home',
        templateUrl: 'views/home.html',
        controller: 'MainCtrl'
      })
      .state('about', {
              url: '/about',
              templateUrl: 'views/about.html',
              controller: 'AboutCtrl'
            })
      .state('contact', {
              url: '/contact',
              templateUrl: 'views/main.html',
              controller: 'MainCtrl'
            })
      .state('login', {
        url: '/login',
        templateUrl: 'views/Auth/_login.html',
        controller: 'AuthCtrl'
      })
      .state('register', {
        url: '/register',
        templateUrl: 'views/Auth/_register.html',
        controller: 'AuthCtrl'
      })
      .state('editUser', {
        url: '/edit',
        templateUrl: 'views/Auth/_edit.html',
        controller: 'AuthCtrl'
      });
    // $urlRouterProvider.otherwise('home')
      // AuthProvider.loginPath('/api/users/sign_in.json');
      // AuthProvider.loginMethod('POST');
      // // AuthProvider.resourceName('user');
      // AuthProvider.logoutPath('/api/users/sign_out');
      // AuthProvider.logoutMethod('DELETE');
      // // AuthProvider.resourceName('user');
      // AuthProvider.registerPath('/api/users');
      // AuthProvider.registerMethod('POST');
      // AuthProvider.resourceName('user');

  })
