
var modal = (function(){                          // Declare modal object

  var $modal = $('<div class="modal"/>'),         // Create markup for modal
      $content = $('<div class="modal-content"/>'),
      $close = $('<button role="button" class="modal-close">Close</button>');
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