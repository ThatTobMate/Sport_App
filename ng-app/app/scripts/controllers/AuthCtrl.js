'use strict';

/**
 * @ngdoc function
 * @name sportsAppApp.controller:AuthCtrl
 * @description
 * # AuthCtrl
 * Controller of the sportsAppApp
 */

angular.module('sportsAppApp')
.controller('AuthCtrl', [
'$scope',
'$state',
'Auth',
function($scope, $state, Auth){
  $scope.login = function() {
      Auth.login($scope.user).then(function(){
        $state.go('home');
      });
    };

  $scope.register = function() {
    Auth.register($scope.user).then(function(){
      $state.go('home');
    });
  };
}]);