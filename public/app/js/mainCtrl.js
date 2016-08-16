angular.module('peiserApp')
.controller('mainCtrl', ['$scope', 'CommonProp', function($scope, CommonProp){

  // Automatic time updates

  var date = new Date();

  $scope.year = date.getFullYear();

  $scope.businessYears = $scope.year - 1996;

//logOut functionality

  $scope.logOut = function() {
    CommonProp.logOutUser();
    console.log('logged out');
  }

}]);
