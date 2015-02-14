var app = angular.module("cal", [])

app.controller("Controller-Cal", function ($scope) {

    $scope.sum = function () {
        var i1 = $scope.input1;
        var i2 = $scope.input2;
        $scope.result = parseInt(i1) + parseInt(i2);
    }

    $scope.minus = function () {
        var i1 = $scope.input1;
        var i2 = $scope.input2;
        $scope.result = parseInt(i1) - parseInt(i2);
    }

    $scope.multiply = function () {
        var i1 = $scope.input1;
        var i2 = $scope.input2;
        $scope.result = parseInt(i1) * parseInt(i2);
    }

    $scope.divide = function () {
        var i1 = $scope.input1;
        var i2 = $scope.input2;
        $scope.result = parseInt(i1) / parseInt(i2);
    }
});