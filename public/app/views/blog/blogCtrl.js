angular.module('peiserApp')
.controller('blogCtrl', ['$scope', '$firebaseArray', '$firebaseObject', function($scope,  $firebaseArray, $firebaseObject){
  var firebaseObj = new Firebase("https://peisercpa.firebaseio.com/Articles");

var syncArray = $firebaseArray(firebaseObj);

$scope.articles = syncArray;



// $scope.trim = function(text) {
//   return text.replace("/\n\n/g", "<br />");
// }


$scope.editPost = function(id) {
  var firebaseObj = new Firebase("https://peisercpa.firebaseio.com/Articles/" + id);

  $scope.postToUpdate = $firebaseObject(firebaseObj);
}

$scope.update = function() {
  var firebaseObj = new Firebase("https://peisercpa.firebaseio.com/Articles/" + $scope.postToUpdate.$id);

  var article = firebaseObj;

  var onComplete = function(error){
    if (error) {
      console.log("Error", error);
    } else {
      console.log("Update successful");
    }
  };
  article.update({
    title: $scope.postToUpdate.title,
    post: $scope.postToUpdate.post,
    emailId: $scope.postToUpdate.emailId
  }, onComplete);
}

$scope.confirmDelete = function(id) {
  var firebaseObj = new Firebase("https://peisercpa.firebaseio.com/Articles/" + id);

  $scope.postToDelete = $firebaseObject(firebaseObj);
}

$scope.deletePost = function() {
    var firebaseObj = new Firebase("https://peisercpa.firebaseio.com/Articles/" + $scope.postToDelete.$id);

    var article = firebaseObj;

    var onComplete = function(error){
      if (error) {
        console.log("Error", error);
      } else {
        console.log("Update successful");
      }
    };

    article.remove(onComplete);

}

}]);
