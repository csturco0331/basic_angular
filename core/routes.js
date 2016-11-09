angular.module('app').
  config(['$routeProvider',
    function config($routeProvider) {

      $routeProvider.
      	when('/home', {

          template: `
            <div class='pageWidth pageHeight outerContainer red'>
              <div class='centerBox translucentGrey'>
              <label>Enter your name</label><br/>
                <input ng-model='homeCtrl.userService.name' type='text'></input><br/>
                <a ng-href='#welcome'>Enter the Website, {{homeCtrl.userService.name}}!</a></br>
                <input type='button' ng-click='homeCtrl.userService.clear()' value='Clear'></input>
              </div>
            </div>
          `,
          controller: 'HomeController',
          controllerAs: 'homeCtrl'

        }).
      	when('/welcome', {

          template: `
            <div class='pageWidth pageHeight'>
              <label> Welcome to AngularJS, {{dashboardCtrl.userService.name}}!</label>
            </div>
          `,
          controller: 'DashboardController',
          controllerAs: 'dashboardCtrl',
        }).
        otherwise('/home');
    }
  ]);
