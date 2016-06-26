/**
 * Created by srini on 26-06-2016.
 */
(function () {
    var app = angular.module('movies');

    function controller($http) {
        var model = this;
        model.$routerOnActivate = function (next) {
            getMovie($http, next.params.id).then(function (data) {
                model.movie = data[0];
            });
        };
    }

    function getMovie($http, id) {
        return $http.get('Data/movies.json').then(function (response) {
            return response.data.filter(function (d) {
                return d.id == id;
            });
        });
    }

    app.component('movieDetails', {
        templateUrl: 'movies/movie-details.component.html',
        $routeConfig: [
            {path: "/overview", component: "movieOverview", name: "Overview"},
            {path: "/cast", component: "movieCast", name: "Cast"},
            {path: "/director", component: "movieDirector", name: "Director"}
        ],
        controllerAs: 'model',
        controller: controller
    });
    app.component('movieOverview', {
        template: '<h4>This is an overview</h4>'
    });
    app.component('movieCast', {
        template: '<h4>This is about Cast</h4>'
    });
    app.component('movieDirector', {
        template: '<h4>Director details</h4>'
    });
}());