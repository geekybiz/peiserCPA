angular.module('peiserApp')
.service('CommonProp', function(){
  var user = '';

  return {
    getUser: function(){
      return user;
    },
    setUser: function(value){
      user = value;
    }
  };
});
