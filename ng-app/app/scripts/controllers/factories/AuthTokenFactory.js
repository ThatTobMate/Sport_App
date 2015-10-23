'use strict';
angular.module('sportsAppApp')
  .factory('AuthToken', ['$window', function ($window) {
    
  var authTokenFactory = {};

  authTokenFactory.getToken = function(){
    return $window.localStorage.getItem('token');
  };

  authTokenFactory.setToken = function(token){
    if(token){
      $window.localStorage.setItem('token', token);
    }else{
      $window.localStorage.removeItem('token');
    }
  };

  return authTokenFactory;

}]);