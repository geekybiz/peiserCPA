angular.module('peiserApp')
.controller('addPostCtrl', ['$scope','$firebase','$firebaseArray','CommonProp', function($scope, $firebase, $firebaseArray, CommonProp){
  $scope.addPost = function() {
    var firebaseObj = new Firebase("https://peisercpa.firebaseio.com/Articles");
    var fb = $firebaseArray(firebaseObj);
    var title = $scope.post.title;
    var post = $scope.post.content;

    fb.$add({
      title: title,
      post: post
    }).then(function(ref){
      console.log(ref);
    }, function(error) {
      console.log("Error:", error);
    });
  }
}]);
