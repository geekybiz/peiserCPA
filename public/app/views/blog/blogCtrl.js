angular.module('peiserApp')
  .controller('blogCtrl', ['$scope', '$firebaseArray', '$firebaseObject', 'CommonProp', function($scope, $firebaseArray, $firebaseObject, CommonProp) {
    var firebaseObj = new Firebase("https://peisercpa.firebaseio.com/Articles");

    var syncArray = $firebaseArray(firebaseObj);
    $scope.username = CommonProp.getUser();

    $scope.loggedIn = function () {
      if ($scope.username) {
        return true;
      } else {
        return false;
      }
    }


    $scope.articles = syncArray;


    $scope.editPost = function(id) {
      var firebaseObj = new Firebase("https://peisercpa.firebaseio.com/Articles/" + id);

      $scope.postToUpdate = $firebaseObject(firebaseObj);
    }

    $scope.update = function() {
      var firebaseObj = new Firebase("https://peisercpa.firebaseio.com/Articles/" + $scope.postToUpdate.$id);

      var article = firebaseObj;

      var onComplete = function(error) {
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

      var onComplete = function(error) {
        if (error) {
          console.log("Error", error);
        } else {
          console.log("Update successful");
        }
      };

      article.remove(onComplete);

    }

    $(document).ready(function() {
      $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
          $('#slideIn-mobile').css('display', 'block');
          $('#slideIn-mobile').show();
        } else {
          $('#slideIn-mobile').hide();
        }
      })
    })

    var modal = (function() { // Declare modal object

      var $modal = $('<div class="homeModal"/>'), // Create markup for modal
        $content = $('<div class="homeModal-content"/>'),
        $close = $('<button role="button" class="homeModal-close">Close</button>');
      $overlay = $('<div class="overlay"/>'); // Create overlay element

      $modal.append($content, $close); // Add close button to modal

      $close.click(function(e) { // If user clicks on close
        e.preventDefault(); // Prevent link behavior
        modal.close(); // Close the modal window
      });

      $(document).click(function() {
        modal.close();
      });
      $(document).keyup(function(e) {
        if (e.keyCode === 27) {
          modal.close();
        }
      });
      $('.share').click(function(e) {
        e.stopPropagation();
      });



      return { // Add code to modal
        center: function() { // Define center() method
          // Calculate distance from top and left of window to center the modal
          var top = Math.max($(window).height() - $modal.outerHeight(), 0) / 2,
            left = Math.max($(window).width() - $modal.outerWidth(), 0) / 2;
          $modal.css({ // Set CSS for the modal
            top: top + $(window).scrollTop(), // Center vertically
            left: left + $(window).scrollLeft() // Center horizontally
          });
        },
        open: function(settings) { // Define open() method
          $content.empty().append(settings.content); // Set new content of modal

          $modal.css({ // Set modal dimensions
            width: settings.width || 'auto', // Set width
            height: settings.height || 'auto' // Set height
          }).appendTo('body'); // Add it to the page
          $('#blogWrapper').css('opacity', '0.2'); //set background opacity to 0.2

          modal.center(); // Call center() method
          $(window).on('resize', modal.center); // Call it if window resized
          $('.modal').after($overlay);
        },
        close: function() { // Define close() method
          $content.empty(); // Remove content from modal
          $modal.detach(); // Remove modal from page
          $overlay.detach(); // Remove the overlay
          $(window).off('resize', modal.center); // Remove event handler
          $('#blogWrapper').css('opacity', '1'); //set background opacity back to 1
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




    // function() {
    //       if (user = '') {
    //         return false;
    //       } else {
    //         return true;
    //       }
    //     }







    // if (CommonProp.setUser() === true) {
    //   $scope.loggedIn === true;
    // }
    // return $scope.loggedIn === true;
    // if (CommonProp.setUser() === true) {
    //     $scope.loggedIn = true;
    //   }

    // if (CommonProp.logOutUser() === true) {
    //   $scope.loggedOut;
    // };


  }]);
