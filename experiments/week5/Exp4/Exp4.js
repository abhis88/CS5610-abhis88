var app = angular.module("CourseApp", ["ngRoute"]);

app.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
          when('/home', {
              templateUrl: 'course/home.html'
          }).
          when('/profile/:username', {
              templateUrl: 'course/profile.html',
              controller: 'ProfileController'
          }).
          when('/contact', {
              templateUrl: 'course/contact.html',
              controller: 'ContactController'
          }).
          when('/about', {
              templateUrl: 'course/about.html',
              controller: 'AboutController'
          }).
          otherwise({
              redirectTo: 'home'
          });
    }]);

app.controller("ProfileController", function ($scope, UserService, $routeParams) {
    var username = $routeParams.username;
    $scope.username = username;
    $scope.currentUser = UserService.getCurrentUser();
});

app.controller("ContactController", function ($scope, UserService, $routeParams) {
    var username = $routeParams.username;
    $scope.username = username;
    $scope.currentUser = UserService.getCurrentUser();
});

app.controller("AboutController", function ($scope, UserService, $routeParams) {
    var username = $routeParams.username;
    $scope.username = username;
    $scope.currentUser = UserService.getCurrentUser();
});

app.controller("navController", function ($scope, UserService) {
    $scope.login = function () {
        $scope.currentUser = null;
        $scope.logout = function () {
            $scope.currentUser = null;
            UserService.logout();
            $scope.username = null;
            $scope.password = null;
        }

        var username = $scope.username;
        var password = $scope.password;
        $scope.currentUser = UserService.login(username, password);
    }
});

app.factory("UserService", function () {
    var currentUser = null;

    var users = [
        { username: "admin", password: "admin", role: "admin" },
        { username: "faculty", password: "faculty", role: "faculty" },
        { username: "student", password: "student", role:"student" }
    ]
    
    var logout = function () {
        currentUser = null;
    };

    var login = function (username, password) {
        for (var u in users) {
            if (users[u].username == username) {
                currentUser = users[u];
                return users[u];
            }
        }
        return null;
    };

    var getCurrentUser = function () {
        return currentUser;
    }

    return {
        login: login,
        logout: logout,
        getCurrentUser: getCurrentUser
    }
});