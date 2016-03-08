angular.module('peiserApp')
.controller('mainCtrl', ['$scope', function($scope){

  // Automatic time updates

  var date = new Date();

  $scope.year = date.getFullYear();

  $scope.businessYears = $scope.year - 1996;

}]);
