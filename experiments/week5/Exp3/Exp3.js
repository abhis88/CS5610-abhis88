var app = angular.module("MovieApp", []);

app.controller("Movie-Controller",
    function ($scope, $http) {

        var movies = [];

        $scope.searchMovies = function () {

            var title = $scope.searchByTitle;

            $http.jsonp("http://www.myapifilms.com/imdb?title=" + title + "&format=JSONP&aka=0&business=0&seasons=0&seasonYear=0&technical=0&filter=N&exactFilter=0&limit=10&lang=en-us&actors=N&biography=0&trailer=0&uniqueName=0&filmography=0&bornDied=0&starSign=0&actorActress=0&actorTrivia=0&movieTrivia=0&awards=0&moviePhotos=N&movieVideos=N&callback=JSON_CALLBACK")
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