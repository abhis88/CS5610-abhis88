var app = angular.module("TravelApp", []);

app.controller("Travel-Controller",
    function ($scope, $http) {

        var places = [];

        $scope.searchAirports = function () {

            var oCity = $scope.oCity;
            var dCity = $scope.dCity;

            $http.get("http://free.rome2rio.com/api/1.2/json/Search?key=eU7G6lzt&oName=" + oCity + "&dName=" + dCity)
            .success(function (response) {
                console.log(response);
                $scope.places = response.places;
            })
        }

        $scope.selectPlace = function (place) {

            console.log(place);
            var position = place.pos.split(",");
            
            console.log(position[0] + " --- " + position[1]);

            var mapOptions = {
                center: new google.maps.LatLng(position[0], position[1]),
                zoom: 5,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };

            var map = new google.maps.Map(document.getElementById('googlemap'), mapOptions);

            var v_markerOptions = {
                position: new google.maps.LatLng(position[0], position[1])
            };
            var v_marker = new google.maps.Marker(v_markerOptions);
            v_marker.setMap(map);

            var v_info = {
                content: place.longName
            };

            var v_infoWindow = new google.maps.InfoWindow(v_info);
            google.maps.event.addListener(v_marker, 'click', function (e) {
                v_infoWindow.open(map, v_marker);
            });
        }
    });