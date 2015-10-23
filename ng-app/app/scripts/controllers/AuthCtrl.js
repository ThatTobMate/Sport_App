'use strict';


angular.module('sportsAppApp')
.controller('AuthCtrl', [
'$scope',
'$state',
'$localStorage',
'$http',
'Auth',
function($scope, $state, $localStorage, $http, Auth){
  console.log('Authctrl')
  // $scope.$storage = $localStorage
  $scope.login = function() {
    Auth.login($scope.user.username, $scope.user.password).then(function(data){
      console.log(data)
      debugger;
    })
    // Auth.login($scope.user).then(function(){
    //   $state.go('home');
    // });
  };

  // $scope.register = function() {
  //   console.log($scope.user)
  //   Auth.register($scope.user).then(function(){
  //     $state.go('home');
  //   });
  // };

  // $scope.editUser = function(){
  //   // $scope.user.id = $localStorage.user.id
  //   $http.put('/api/users', $scope.user).then(function(data){
  //     console.log(data)
  //   })
  // }
}]);