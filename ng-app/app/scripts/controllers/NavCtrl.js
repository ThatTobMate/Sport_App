'use strict';


angular.module('sportsAppApp')
.controller('NavCtrl', [
'$scope',
'$localStorage',
'Auth',
'User',
function($scope, $localStorage, User){

  // User.currentUser().then(function(data){
  //    $scope.user = data.data
  // })

  // $scope.signedIn = function(){
  //   if($scope.user){
  //     return true;
  //   }else{
  //     return false;
  //   };
  // };

  // $scope.logout = function(){
  //   $localStorage.$reset();
  //   $scope.user = {};
  // }
  // // Auth.currentUser().then(function (user){
  // //   $scope.user = user;
  // // });

  // $scope.$on('devise:new-registration', function (e, user){
  //   $scope.user = user;
  // });

  // $scope.$on('devise:login', function (e, user){
  //   $scope.user = user;
  // });

  // $scope.$on('devise:logout', function (e, user){
  //   $localStorage.$reset();
  //   $scope.user = {};
  // });


}]);