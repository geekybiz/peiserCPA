'use strict';

angular.module('peiserApp')
.controller('addPostCtrl', ['$scope','$firebase','$firebaseArray','CommonProp', '$location', function($scope, $firebase, $firebaseArray, CommonProp, $location){
  $scope.addPost = function() {
    var firebaseObj = new Firebase("https://peisercpa.firebaseio.com/Articles");
    var fb = $firebaseArray(firebaseObj);
    var title = $scope.post.title;
    var post = $scope.post.content;


    fb.$add({
      title: title,
      post: post,
      emailId: CommonProp.getUser(),
      date: Firebase.ServerValue.TIMESTAMP
    }).then(function(ref){
      $location.path('/blog');
      console.log(ref);
    }, function(error) {
      console.log("Error:", error);
    });
  }
}]);
