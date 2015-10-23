'use strict';

/**
 * @ngdoc function
 * @name sportsAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sportsAppApp
 */
angular.module('sportsAppApp')
  .controller('NavBarCtrl', function ($scope, $localStorage, User) {

    // User.currentUser().then(function(data){
    //   if(data.data){
    //     $scope.user = data.data
    //   }
       
    // })

    // $scope.signedIn = function(){
    //   if($scope.user){
    //     return true;
    //   }else{
    //     return false;
    //   };
    // };

    // $scope.getUsers = function(){
    //   User.getUsers().then(function(data){
    //      console.log(data)
    //   })
    // }

    // $scope.logout = function(){
    //   $localStorage.$reset();
    //   delete $scope.user
    //   $scope.signedIn = false
    // }

  });
