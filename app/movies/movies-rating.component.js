/**
 * Created by srini on 25-06-2016.
 */
(function () {
    'use strict';
    var app = angular.module('movies');
    function controller(){
        var model = this;
        model.$onInit = function(){
            model.entries = new Array(model.value);
        };
        function log(){
            console.log(model.value);
        }
        model.$onChanges = function () {
            model.entries = new Array(model.value);
        }
    }

    app.component('moviesRating', {
        templateUrl: 'movies/movies-rating.component.html',
        bindings : {
            value : '<'
        },
        transclude : true,
        controllerAs : 'model',
        controller: controller
    });
}());