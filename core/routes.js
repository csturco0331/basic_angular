angular.module('app').
  config(['$routeProvider',
    function config($routeProvider) {

      $routeProvider.
      	when('/home', {

          templateUrl: 'home/HomeTemplate.html',
          controller: 'HomeController',
          controllerAs: 'homeCtrl'

        }).
      	when('/welcome', {

          templateUrl: 'dashboard/DashboardTemplate.html' ,
          controller: 'DashboardController',
          controllerAs: 'dashboardCtrl',
        }).
        otherwise('/home');
    }
  ]);
