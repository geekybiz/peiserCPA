angular.module('peiserApp')
.controller('blogCtrl', ['$scope', '$firebaseArray', function($scope, $firebaseArray){
  var firebaseObj = new Firebase("https://peisercpa.firebaseio.com/Articles");

var syncArray = $firebaseArray(firebaseObj);

$scope.articles = syncArray




}]);
