'use strict';
angular.module('sportsAppApp')
  .factory('AuthToken', ['$window', '$localStorage', function ($window, $localStorage) {
    
  var authTokenFactory = {};

  authTokenFactory.getToken = function(){
    return $localStorage.token;
  };

  authTokenFactory.setToken = function(token){
    debugger;
    if(token){
      $localStorage.token = token;
    }else{
      delete $localStorage.token;
    }
  };

  return authTokenFactory;

}]);