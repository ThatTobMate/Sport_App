'use strict';
angular.module('sportsAppApp')
  .factory('User', ['$http', function ($http) {
    
   var User = {}
  
  // var User = {
  //   currentUser: function() {
  //     return $http.post('http://localhost:3000/api/login', {username:'Jones', password:'test'});
  //   },
  //   getUsers: function(){
  //     return $http.get('/api/users');
  //   }
  // };

  return User;
}]);