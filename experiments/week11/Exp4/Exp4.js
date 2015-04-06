var app = angular.module("TravelApp", []);

app.controller("Travel-Controller",
    function ($scope, $http) {

        var airports = [];

        $scope.searchAirports = function () {

            var oCity = $scope.oCity;
            var dCity = $scope.dCity;

            $http.get("http://free.rome2rio.com/api/1.2/json/Search?key=eU7G6lzt&oName=" + oCity + "&dName=" + dCity)
            .success(function (response) {
                console.log(response);
                $scope.airports = response.airports;
            })
        }
    });