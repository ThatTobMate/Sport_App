angular.module('sportsAppApp')
  .config(function($httpProvider) {
    $httpProvider.interceptors.push(function($localStorage) {
      return {
        'request': function(config) {
          config.headers['X-USER-EMAIL'] = $localStorage.user_email;
          config.headers['X-USER-TOKEN'] = $localStorage.user_token;
          return config;
        }
      };
    });
  });