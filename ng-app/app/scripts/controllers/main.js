'use strict';

/**
 * @ngdoc function
 * @name sportsAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sportsAppApp
 */
angular.module('sportsAppApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
