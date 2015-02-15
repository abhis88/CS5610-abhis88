var app = angular.module('FilterApp', []);

app.controller("FilterController", function ($scope) {
    $scope.players = [
        { name: "Sachin Ramesh Tendulkar", club: "Mumbai Indians", country: "India" },
        { name: "Yuvraj Singh", club: "Kingfisher XI", country: "India" },
        { name: "ICC World Cup", club: "ICC", country: "World" },
        { name: "Steave Smith", club: "ICC", country: "Australia" }
    ];

    $scope.firstLetter = function (provided, expected) {
        return (provided + "").toLowerCase().indexOf(expected.toLowerCase()) === 0;
    };
});