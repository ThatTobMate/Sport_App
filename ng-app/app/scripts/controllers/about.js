'use strict';

/**
 * @ngdoc function
 * @name sportsAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the sportsAppApp
 */
angular.module('sportsAppApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
