var app = angular.module("RoutingApp", ['ngRoute']);

app.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
          when('/india', {
              templateUrl: 'webpage/india.html'
          }).
          when('/zimbabwe', {
              templateUrl: 'webpage/zimbabwe.html',
          }).
          when('/southafrica', {
              templateUrl: 'webpage/southafrica.html',
          }).
          when('/srilanka', {
              templateUrl: 'webpage/srilanka.html',
          }).
          when('/australia', {
              templateUrl: 'webpage/australia.html',
          }).
          when('/newzealand', {
              templateUrl: 'webpage/newzealand.html',
          }).
          when('/england', {
              templateUrl: 'webpage/england.html',
          }).
          when('/pakistan', {
              templateUrl: 'webpage/pakistan.html',
          }).
          otherwise({
              redirectTo: 'india'
          });
    }]);
