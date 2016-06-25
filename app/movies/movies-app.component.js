/**
 * Created by srini on 25-06-2016.
 */
(function () {
    var app = angular.module('movies');
    app.component('moviesApp', {
        templateUrl: 'movies/movies-app.component.html',
        $routeConfig: [
            {path: '/list', component: 'moviesList', name: 'List'},
            {path: '/about', component: 'appAbout', name: 'About'},
            {path: '/**', redirectTo: ["List"]}
        ]
    });
}());
