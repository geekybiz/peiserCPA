angular.module('peiserApp', ['ui.router', 'firebase', 'ui.materialize', 'ui.tinymce', 'ngSanitize'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

  $stateProvider

  .state('home', {
    url: '/',
    templateUrl: 'app/views/home/home.html',
    controller: 'homeCtrl'
  })

  .state('blog', {
    url: '/blog',
    templateUrl: 'app/views/blog/blog.html',
    controller: 'blogCtrl'
  })

  .state('logIn', {
    url: '/logIn',
    templateUrl: 'app/views/logIn/logIn.html',
    controller: 'logInCtrl'
  })

  .state('addPost', {
    url: '/addPost',
    templateUrl: 'app/views/addPost/addPost.html',
    controller: 'addPostCtrl'
  })

  .state('logOut', {
    url: '/logOut',
    templateUrl: 'app/views/logOut/logOut.html',
    controller: 'logOutCtrl'
  })

  $urlRouterProvider.otherwise('/');

}]);
