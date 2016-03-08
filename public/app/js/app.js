angular.module('peiserApp', ['ui.router'])
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

  $urlRouterProvider.otherwise('/');

}]);
