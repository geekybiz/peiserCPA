angular.module('peiserApp')
.controller('mainCtrl', function($scope){

  var date = new Date();

  $scope.year = date.getFullYear();

  $(function() {
    $(window).scroll(function(){
      if ($(this).scrollTop() > 350) {
        $('#slideIn-mobile').css('display', 'block');
        $('ul.nav-list-mobile').hide() && $('#slideIn-mobile').fadeIn(1000);
      } else {
        $('ul.nav-list-mobile').fadeIn(1000) && $('#slideIn-mobile').hide();
      }
    });

    $(window).scroll(function(){
      if ($(this).scrollTop() > 350) {
        $('#slideIn-desktop').css('display', 'block');
        $('#slideIn-desktop').show() && $('li.nav-item').hide();
      } else {
         $('#slideIn-desktop').hide() && $('li.nav-item').show();
      }
    });


  });
});
