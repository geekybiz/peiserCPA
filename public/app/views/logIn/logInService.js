angular.module('peiserApp')
.service('CommonProp', ['$location', '$firebaseAuth', function($location, $firebaseAuth){
  var user = '';
  var firebaseObj = new Firebase("https://peisercpa.firebaseio.com");
  var logInObj = $firebaseAuth(firebaseObj);

  return {
    getUser: function(){
      return user;
    },
    setUser: function(value){
      user = value;
    },
    logOutUser: function() {
      logInObj.$unauth();
      console.log('done logout');
      $location.path('/home');
    }
  };
}]);
