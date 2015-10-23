'use strict';

/**
 * @ngdoc function
 * @name sportsAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sportsAppApp
 */
angular.module('sportsAppApp')
  .controller('NavBarCtrl', function ($scope, $localStorage, User, Auth) {


    $scope.signedIn = Auth.isLoggedIn();


  });
