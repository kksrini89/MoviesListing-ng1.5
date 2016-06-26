/**
 * Created by srini on 26-06-2016.
 */
(function () {
    var app = angular.module('movies');

    function controller($http) {
        var model = this;
        model.$routerOnActivate = function (next) {
            console.log(next.params.id);
            getMovie($http, next.params.id).then(function (data) {
                model.movie = data[0];
            });
        };
    }

    function getMovie($http, id) {
        return $http.get('Data/movies.json').then(function (response) {
           return response.data.filter(function(d){
              return d.id == id;
           });
        });
    }

    app.component('movieDetails', {
        templateUrl: 'movies/movie-details.component.html',
        //$canActivate (component router life cycle hooks) will be activated before controller gets instantiated
        //$canActivate : function () {
        //  return false;
        //},
        controllerAs :'model',
        controller: controller
    });
}());