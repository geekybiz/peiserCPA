angular.module('peiserApp')
.controller('mainCtrl', ['$scope', 'CommonProp', '$location', function($scope, CommonProp, $location){

  // Automatic time updates

  var date = new Date();

  $scope.year = date.getFullYear();

  $scope.businessYears = $scope.year - 1996;

//logOut functionality

  $scope.logOut = function() {
    CommonProp.logOutUser();
    $location.path('/logOut');
    console.log('logged out');
  }

}]);
