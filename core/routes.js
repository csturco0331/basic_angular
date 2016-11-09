angular.module('app').
  config(['$routeProvider',
    function config($routeProvider) {

      $routeProvider.
      	when('/home', {

          template: `
            <div class="pageWidth pageHeight outerContainer red">
              <a ng-href="#welcome" class="centerBox translucentGrey" ng-click="homeCtrl.userService.resetScore()">
                New
              </a>
              <a ng-href="#welcome" class="centerBox translucentGrey" ng-show="homeCtrl.userService.hasScore()">
                Continue
              </a>
            </div>
          `,
          controller: 'HomeController',
          controllerAs: 'homeCtrl'

        }).
      	when('/welcome', {

          template: `
            <div class="pageWidth pageHeight container red">
              <label class="scoreboard"> Current Score: {{dashboardCtrl.userService.score}}!</label>
              <div class="scoreButton">
                <div ng-click="dashboardCtrl.userService.incScore()" class="centerBox translucentGrey circle">+1</div>
              </div>
            </div>
          `,
          controller: 'DashboardController',
          controllerAs: 'dashboardCtrl',
        }).
        otherwise('/home');
    }
  ]);
