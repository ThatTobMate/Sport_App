'use strict';

/**
 * @ngdoc function
 * @name sportsAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sportsAppApp
 */
angular.module('sportsAppApp')
  .controller('MainCtrl', function ($scope, $http, $localStorage, User, Auth) {
    // $scope.get = function(){
      

    // }

    // User.currentUser().then(function(data){
    //   // debugger;
    //    $scope.user = data.data
    // })

    // $scope.getUsers = function(){
    //   User.getUsers().then(function(data){
    //      console.log(data)
    //   })
    // }

    $scope.getMe = Auth.getUser().then(function(data){
      debugger;
      $scope.user = data;
    })

    // $scope.logout = Auth.logout();
    // $scope.logout = function(){
    //   $localStorage.$reset();
    //   $scope.user = {};
    // }

    // $scope.get()

  });
