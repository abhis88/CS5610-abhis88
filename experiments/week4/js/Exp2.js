var app = angular.module("firstController", [])

app.controller("Controller",
    function ($scope) {
        var employee = {
            firstName: "",
            lastName: "",
            mobile: "",
            county: "",
            address:"",
        };

        $scope.employee = employee;

    });