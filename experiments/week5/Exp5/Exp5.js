var app = angular.module("TextApp", []);

app.controller("AppController", function ($scope) {
    $scope.blogs = [];
    $scope.message = "";

    $scope.left = function () {
        var rem = 100 - $scope.message.length;
        return rem;
    };

    $scope.clearMessage = function () {
        $scope.message = "";
    };

    $scope.saveBlog = function () {
        $scope.currentDate = new Date();
        var blog = {
            title: $scope.message,
            date: $scope.currentDate
        }
        $scope.blogs.push(blog);
    };

    $scope.removeBlog = function (blog) {
        var index = $scope.blogs.indexOf(blog);
        $scope.blogs.splice(index, 1);
    }
});