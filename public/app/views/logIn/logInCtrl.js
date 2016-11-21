'use strict';

angular.module('peiserApp')
.controller('logInCtrl', ['$scope', '$firebaseAuth', '$location', 'CommonProp', function($scope, $firebaseAuth, $location, CommonProp){
  var firebaseObj = new Firebase("https://peisercpa.firebaseio.com");
  var loginObj = $firebaseAuth(firebaseObj);

  $scope.signIn = function(e) {
    e.preventDefault();
    var username = $scope.user.email;
    var password = $scope.user.password;

    loginObj.$authWithPassword({
      email: username,
      password: password
    })
    .then(function(user){
      $location.path('/');
      CommonProp.setUser(user.password.email);
    }, function(error) {
    });
  }

}]);
