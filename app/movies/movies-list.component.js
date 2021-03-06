/**
 * Created by srini on 24-06-2016.
 */
(function () {
    var app = angular.module('movies');

    function controller($http) {
        var model = this;
        model.$onInit = function () {
            fetchMovies($http).then(function (data) {
                model.movies = data;
            });
        };

        model.setRating = function (movie, newRating) {
            movie.rating = newRating;
        };

        model.upRating = function (movie) {
            if (movie.rating < 5) {
                movie.rating += 1;
            }
        }
        model.downRating = function (movie) {
            if (movie.rating > 1) {
                movie.rating -= 1;
            }
        }
    }

    function fetchMovies($http) {
        return $http.get('Data/movies.json').then(function (response) {
            return response.data;
        });
    }

    app.component('moviesList', {
        templateUrl: 'movies/movies-list.component.html',
        controllerAs: 'model',
        controller: ['$http', controller]
    });
}());