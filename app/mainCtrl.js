angular.module('peiserApp')
.controller('mainCtrl', function($scope){

  var date = new Date();

  $scope.year = date.getFullYear();

  $scope.businessYears = $scope.year - 1993;

  $(document).ready(function() {
    $(window).scroll(function(){
      if ($(this).scrollTop() > 300) {
        $('#slideIn-mobile').css('display', 'block');
        $('#slideIn-mobile').show();
      } else {
        $('#slideIn-mobile').hide();
      }
    });

    $(window).scroll(function(){
      if ($(this).scrollTop() > 350) {
        $('#slideIn-desktop').css('display', 'block');
        $('#slideIn-desktop').show();
      } else {
         $('#slideIn-desktop').hide();
      }
    });
  });
});
