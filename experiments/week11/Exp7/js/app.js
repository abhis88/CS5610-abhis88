var app = angular.module("travelApp", ['ngRoute']);

app.controller("travelController",
		function ($scope, $http, $rootScope, $location) {

		    var places = [];
		    var routes = [];
		    var actualResponse = [];
		    var detail = [];
		    $scope.beforeSearch = 1;
		    $scope.afterSearch = null;
		    //$scope.newSearch = null;

		    $scope.searchRoutes = function () {

		        var oCity = angular.uppercase($scope.oCity);
		        var dCity = angular.uppercase($scope.dCity);

		        if (oCity == dCity) {
		            $scope.cantBeSame = 1;
		            $scope.oCity = "";
		            $scope.dCity = "";
		        } else {
		            $http.get("http://free.rome2rio.com/api/1.2/json/Search?key=eU7G6lzt&oName=" + oCity + "&dName=" + dCity)
                    .success(function (response) {
                        console.log(response);
                        $scope.places = response.places;
                        $scope.routes = response.routes;
                        $scope.actualResponse = response;
                        $scope.searchedCities = 1;
                        $scope.beforeSearch = null;
                        $scope.afterSearch = 1;
                        //$scope.newSearch = 1;
                        /* Google Map Coordinates */

                        var mapOptions = {
                            zoom: 3,
                            center: new google.maps.LatLng($scope.places[0].pos.split(",")[0], $scope.places[0].pos.split(",")[1]),
                            mapTypeId: google.maps.MapTypeId.TERRAIN
                        };

                        var map = new google.maps.Map(document.getElementById('mapCanvas'), mapOptions);

                        var routeCord = [];

                        $.each($scope.places, function (i, val) {
                            var position = val.pos;
                            var pos = position.split(",");
                            routeCord.push(new google.maps.LatLng(pos[0], pos[1]));
                        });

                        var flightPath = new google.maps.Polyline({
                            path: routeCord,
                            geodesic: true,
                            strokeColor: '#FF0000',
                            strokeOpacity: 1.0,
                            strokeWeight: 2
                        });

                        flightPath.setMap(map);
                    })
		        }
		    }

		    $scope.favouriteRoute = [];

		    $scope.addToFavourite = function (route) {
		        $scope.favouriteRoute.push(route);
		    }

		    $scope.favourite = function (fav) {
		        var index = $scope.actualResponse.routes.indexOf(fav);
		        console.log(index);

		        $http.get("http://free.rome2rio.com/api/1.2/json/Search?key=eU7G6lzt&oName=" + $scope.actualResponse.places[0].name + "&dName=" + $scope.actualResponse.places[1].name)
                .success(function (response) {
                    console.log(response.routes[index]);
                    $scope.detail = response.routes[index];
                    console.log($scope.detail);
                })
		    }

		    $scope.weathers = [];
		    $scope.futureWeather = [];
		    $scope.data = [];

		    $scope.searchWeather = function () {
		        var weatherCity = $scope.weatherCity;

		        $http.get("http://api.worldweatheronline.com/free/v2/weather.ashx?key=c3520deb638c23ce285718aeffaee&q=" + weatherCity + "&num_of_days=10&tp=3&format=json")
                .success(function (response) {
                    console.log(response);
                    $scope.weathers = response.data.current_condition;
                    console.log("You have requested details for the " + response.data.request[0].query);
                    $scope.weatherCity = response.data.request[0].query;
                    console.log("Input field values changed to " + $scope.weatherCity);
                    $scope.futureWeather = response.data.weather;
                    $scope.data = response.data;
                })
		    }

		    $scope.userDetails = [];

		    $scope.login = function (user) {
		        console.log(user);
		        $http.post("/login", user)
                .success(function (response) {
                    console.log(response);
                    $rootScope.currentUser = response;
                    $scope.firstName = response.first;
                    $scope.lastName = response.last;
                    console.log($scope.firstName);
                    angular.element('#closeModal').trigger('click');
                    $location.url("/profile");
                });
		    }

		    $scope.register = function (user) {
		        console.log(user);
		        if (user.password == user.reenterpassword) {
		            $http.post("/register", user)
                .success(function (response) {
                    console.log(response);
                    $rootScope.currentUser = response;
                    angular.element('#closeModal').trigger('click');
                    $location.url("/profile");
                });
		        }
		    }

		    $scope.logout = function () {
		        $http.post("/logout")
                .success(function (response) {
                    $rootScope.currentUser = null;
                    $location.url("/views/home");
                });
		    }

		    /*Might have to write the function to fethc the details on button click on future forecast*/
		    $scope.hourlyWeather = [];

		    $scope.fetchHourly = function (fW) {
		        var index = $scope.data.weather.indexOf(fW);
		        console.log(index);
		        $scope.hourlyWeather = $scope.data.weather[index].hourly;
		    }

		    //$scope.newSearch = function () {
		    //    $scope.searchedCities = null;
		    //    $scope.beforeSearch = 1;
		    //    $scope.afterSearch = null;
		    //    $scope.newSearch = null;
		    //}

		    //$scope.selectPlace = function (place) {

		    //    console.log(place);
		    //    var position = place.pos.split(",");

		    //    console.log(position[0] + " --- " + position[1]);


		    //    var mapOptions = {
		    //        center: new google.maps.LatLng(position[0], position[1]),
		    //        zoom: 5,
		    //        mapTypeId: google.maps.MapTypeId.ROADMAP
		    //    };

		    //    var map = new google.maps.Map(document.getElementById('googlemap'), mapOptions);

		    //    var v_markerOptions = {
		    //        position: new google.maps.LatLng(position[0], position[1])
		    //    };

		    //    var v_marker = new google.maps.Marker(v_markerOptions);
		    //    v_marker.setMap(map);

		    //    var v_info = {
		    //        content: place.longName
		    //    };

		    //    var v_infoWindow = new google.maps.InfoWindow(v_info);
		    //    google.maps.event.addListener(v_marker, 'click', function (e) {
		    //        v_infoWindow.open(map, v_marker);
		    //    });
		    //}


		});

app.config(['$routeProvider',
            function ($routeProvider) {
                $routeProvider.
                when('/home', {
                    templateUrl: 'views/home/home.html'
                }).
                when('/contact', {
                    templateUrl: 'views/contact/contact.html'
                }).
                when('/route', {
                    templateUrl: 'services/route/route.html',
                    controller: 'travelController'
                }).
                when('/profile', {
                    templateUrl: 'views/profile/profile.html',
                    resolve: {
                        loggedin: checkLoggedIn
                    },
                    controller: 'travelController'
                }).
                when('/weather', {
                    templateUrl: 'services/weather/weather.html',
                    controller: 'travelController'
                }).
                otherwise({
                    redirectTo: 'home'
                });
            }]);


var checkLoggedIn = function ($q, $timeout, $http, $location, $rootScope) {
    var deferred = $q.defer();

    $http.get('/loggedin').success(function (user) {
        $rootScope.errorMessage = null;
        // User is Authenticated
        if (user !== '0') {
            $rootScope.currentUser = user;
            deferred.resolve();
        }
            // User is Not Authenticated
        else {
            $rootScope.errorMessage = 'You need to log in.';
            deferred.reject();
            $location.url('/login');
        }
    });

    return deferred.promise;
};
