angular.module('peiserApp')
.controller('homeCtrl', ['$scope', function($scope){

  // Years in business

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
  // $('nav a').on('click', function() {
  //   $('nav a.active').removeClass('active');
  //   $(this).addClass('active')
  // })

  // Link highlighting mobile
  $('.nav-list-mobile a').on('click', function() {
    $('.nav-list-mobile a.active').removeClass('active');
    $(this).addClass('active')
  })

  // Smooth scrolling to sections desktop
  // $('.nav-item a[href^="#"]').on('click', function(e) {
  //   e.preventDefault();
  //
  //   var target = this.hash;
  //   var $target = $(target);
  //
  //   $('html, body').stop().animate({
  //     'scrollTop': $target.offset().top - 73
  //   }, 900, 'swing');
  //
  // });

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

  var aChildren = $('.nav-item-mobile').children(); // find the a children of the list items
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
      var divPosId = $(theID);
      if (!divPosId.length) {
        return;
      }
      var divPos = $(theID).offset().top - 180;
      var divHeight = $(theID).height();
      if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
        $("a[href='" + theID + "']").addClass('active');
      } else {
        $("a[href='" + theID + "']").removeClass('active');
      }
    }

    if (windowPos + windowHeight == docHeight) {
      if (!$('.nav-item a').eq(0).hasClass("active")) {
        var navActiveCurrent = $(".active").attr("href");
        $("a[href='" + navActiveCurrent + "']").removeClass("active");
        $('nav li a').eq(0).addClass("active");
      }
    }
  });



    // Modal Code

  var modal = (function(){                          // Declare modal object

    var $modal = $('<div class="homeModal"/>'),         // Create markup for modal
        $content = $('<div class="homeModal-content"/>'),
        $close = $('<button role="button" class="homeModal-close">Close</button>');
        $overlay = $('<div class="overlay"/>');     // Create overlay element

    $modal.append($content, $close);                // Add close button to modal

    $close.click(function(e){                       // If user clicks on close
      e.preventDefault();                           // Prevent link behavior
      modal.close();                                // Close the modal window
    });

    $(document).click(function(){
      modal.close();
    });
    $(document).keyup(function(e){
      if (e.keyCode === 27) {
        modal.close();
      }
    });
    $('.share').click(function(e){
      e.stopPropagation();
    });



    return {                                         // Add code to modal
      center: function () {                          // Define center() method
        // Calculate distance from top and left of window to center the modal
        var top = Math.max($(window).height() - $modal.outerHeight(), 0) / 2,
            left = Math.max($(window).width() - $modal.outerWidth(), 0) / 2;
        $modal.css({                                 // Set CSS for the modal
          top:top + $(window).scrollTop(),           // Center vertically
          left:left + $(window).scrollLeft()         // Center horizontally
        });
      },
      open: function (settings) {                    // Define open() method
        $content.empty().append(settings.content);   // Set new content of modal

        $modal.css({                                 // Set modal dimensions
          width: settings.width || 'auto',           // Set width
          height: settings.height || 'auto'          // Set height
        }).appendTo('body');                         // Add it to the page
        $('#page').css('opacity', '0.2'); //set background opacity to 0.2

        modal.center();                              // Call center() method
        $(window).on('resize', modal.center);        // Call it if window resized
        $('.modal').after($overlay);
      },
      close: function () {                           // Define close() method
          $content.empty();                          // Remove content from modal
          $modal.detach();                           // Remove modal from page
          $overlay.detach();                         // Remove the overlay
          $(window).off('resize', modal.center);     // Remove event handler
          $('#page').css('opacity', '1'); //set background opacity back to 1
      }
    };
  }());



  // Modal Init

  (function() {
    var $content = $('#contact-options').detach(); // Remove modal from page

    $('.share').on('click', function() { // Click handler to open modal
      modal.open({
        content: $content,
        width: 340,
        height: 400
      });
    });
  }());

}]);
