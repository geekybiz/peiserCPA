angular.module('peiserApp')
  .controller('mainCtrl', ['$scope', function($scope) {

    // Automatic time updates

    var date = new Date();

    $scope.year = date.getFullYear();

    $scope.businessYears = $scope.year - 1996;

    // Animated button
    $(document).ready(function() {
      $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
          $('#slideIn-mobile').css('display', 'block');
          $('#slideIn-mobile').show();
        } else {
          $('#slideIn-mobile').hide();
        }
      });

      $(window).scroll(function() {
        if ($(this).scrollTop() > 350) {
          $('#slideIn-desktop').css('display', 'block');
          $('#slideIn-desktop').show();
        } else {
          $('#slideIn-desktop').hide();
        }
      });
    });

    // Link highlighting desktop
    $('nav a').on('click', function() {
      $('nav a.active').removeClass('active');
      $(this).addClass('active')
    })

    // Link highlighting mobile
    $('.nav-list-mobile a').on('click', function() {
      $('.nav-list-mobile a.active').removeClass('active');
      $(this).addClass('active')
    })

    // Smooth scrolling to sections desktop
    $('.nav-item a[href^="#"]').on('click', function(e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $('html, body').stop().animate({
        'scrollTop': $target.offset().top - 73
      }, 900, 'swing');

    });

    // Smooth scrolling to sections mobile
    $('.nav-item-mobile a[href^="#"]').on('click', function(e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $('html, body').stop().animate({
        'scrollTop': $target.offset().top - 176
      }, 900, 'swing');

    });

    //Nav highlighting on scroll

    $(window).scroll(function() {
      var window_top = $(window).scrollTop();
    });

    var aChildren = $('nav li').children(); // find the a children of the list items
    var aArray = []; // create the empty aArray
    for (var i = 0; i < aChildren.length; i++) {
      var aChild = aChildren[i];
      var ahref = $(aChild).attr('href');
      aArray.push(ahref); // this for loop fills the aArray with attribute href values
    }

    $(window).scroll(function() {
      var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
      var windowHeight = $(window).height(); // get the height of the window
      var docHeight = $(document).height();

      for (var i = 0; i < aArray.length; i++) {
        var theID = aArray[i];
        var divPos = $(theID).offset().top - 180;
        var divHeight = $(theID).height();
        if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
          $("a[href='" + theID + "']").addClass('active');
        } else {
          $("a[href='" + theID + "']").removeClass('active');
        }
      }

      if (windowPos + windowHeight == docHeight) {
        if (!$('nav li a').eq(0).hasClass("active")) {
          var navActiveCurrent = $(".active").attr("href");
          $("a[href='" + navActiveCurrent + "']").removeClass("active");
          $('nav li a').eq(0).addClass("active");
        }
      }
    });
  }]);
