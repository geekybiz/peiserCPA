'use strict';

angular.module('peiserApp')
  .controller('addPostCtrl', ['$scope', '$firebase', '$firebaseArray', 'CommonProp', '$location', function($scope, $firebase, $firebaseArray, CommonProp, $location) {
    $scope.addPost = function() {
      var firebaseObj = new Firebase("https://peisercpa.firebaseio.com/Articles");
      var fb = $firebaseArray(firebaseObj);
      var title = $scope.post.title;
      var post = $scope.post.content;
      // var myJSONString = JSON.stringify(post);
      // var myEscapedJSONString = myJSONString.replace(/\\n/g, "\\n")
      //                                 .replace(/\\'/g, "\\'")
      //                                 .replace(/\\"/g, '\\"')
      //                                 .replace(/\\&/g, "\\&")
      //                                 .replace(/\\r/g, "\\r")
      //                                 .replace(/\\t/g, "\\t")
      //                                 .replace(/\\b/g, "\\b")
      //                                 .replace(/\\f/g, "\\f");

      fb.$add({
        title: title,
        post: post,
        emailId: CommonProp.getUser(),
        date: Firebase.ServerValue.TIMESTAMP
      }).then(function(ref) {
        $location.path('/blog');
        console.log(ref);
      }, function(error) {
        console.log("Error:", error);
      });
    }


  // function init() {
  //   var firepadRef = new Firebase("https://peisercpa.firebaseio.com");
  //   var codeMirror = CodeMirror(document.getElementById('firepad'), {
  //     lineWrapping: true
  //   });
  //   var firepad = Firepad.fromCodeMirror(firepadRef, codeMirror, {
  //     richTextShortcuts: true,
  //     richTextToolbar: true
  //   });



  //   firepad.on('ready', function(){
  //     // if (firepad.isHistoryEmpty()) {
  //     //   firepad.setHtml(
  //     //     '<p> Enter text here </p>'
  //     //   )
  //     // }
  //   });
  // }
  //
  // init();





  }]);
