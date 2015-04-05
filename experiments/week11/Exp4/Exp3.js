var app = angular.module("TravelApp", []);

app.controller("Travel-Controller",
    function ($scope, $http) {

        var movies = [];

        $scope.searchMovies = function () {

            var title = $scope.searchByTitle;

            $http.jsonp("http://free.rome2rio.com/api/1.2/json/Search?key=eU7G6lzt&oName=boston&dName=" + title)
            .success(function (response) {
                $scope.movies = response;
            })
        }

        $scope.favouriteMovies = [];

        $scope.addToFavourite = function (movie) {
            $scope.favouriteMovies.push(movie)
        }

        $scope.removeFavouriteMovie = function (movie) {
            var index = $scope.favouriteMovies.indexOf(movie);
            $scope.favouriteMovies.splice(index, 1);
        }

        $scope.databaseCall = function () {

            var count = $scope.favouriteMovies.length;

            if (count > 0) {
                alert(count + " Favourite Movies uploaded successfully.")
            }
            else {
                alert("No Favourite Movies to be uploaded.")
            }

        }

        $scope.movies = movies;

        $scope.addMovie = function () {
            var newMovie = {
                title: $scope.movie.title,
                year: $scope.movie.year,
                plot: $scope.movie.plot,
                rating: $scope.movie.rating
            }

            $scope.movies.push(newMovie);
        }

        $scope.selectMovie = function (movie) {
            $scope.movie = movie;
        }

        $scope.removeMovie = function (movie) {
            var index = $scope.movies.indexOf(movie);
            $scope.movies.splice(index, 1);
        }
    });