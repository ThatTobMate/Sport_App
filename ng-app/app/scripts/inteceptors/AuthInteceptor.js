'use strict';
angular.module('sportsAppApp')
  .factory('AuthInteceptor', ['$q', '$location', 'AuthToken', function ($window, $q, AuthToken) {
    
  var inteceptorFactory = {};

  inteceptorFactory.request = function(config){
    var token = AuthToken.getToken();

    if(token){
      config.headers['x-access-token'] = token;
    }
    return config;
  };

  inteceptorFactory.responseError = function(response){
    if(response.status == 403){
      $location.path('/login');
    }

    return $q.reject(response);
  };

  return inteceptorFactory;

}]);