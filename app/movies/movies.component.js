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
        }
    }

    function fetchMovies($http) {
        return $http.get('Data/movies.json').then(function (response) {
            return response.data;
        });
    }

    app.component('moviesList', {
        templateUrl: 'movies/movies.component.html',
        controllerAs: 'model',
        controller: ['$http', controller]
    });
}());