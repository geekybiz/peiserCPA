angular.module('peiserApp')
.service('CommonProp', ['$location', '$firebaseAuth', function($location, $firebaseAuth){
  var user = '';
  var firebaseObj = new Firebase("https://peisercpa.firebaseio.com");
  var logInObj = $firebaseAuth(firebaseObj);

  return {
    user: user,
    getUser: function(){
      if(!user){
        user = localStorage.getItem('userEmail');
      }
      return user;
    },
    setUser: function(value){
      localStorage.setItem("userEmail", value);
      user = value;
    },
    logOutUser: function() {
      logInObj.$unauth();
      user = '';
      localStorage.removeItem('userEmail');
      console.log('done logout');
      $location.path('/home');
    }
    // loggedIn: function(){
    //   if(user){
    //     return true;
    //   } else {
    //     return false;
    //   }
    // }
  };
}]);
