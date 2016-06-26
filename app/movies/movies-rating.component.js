/**
 * Created by srini on 25-06-2016.
 */
(function () {
    'use strict';
    var app = angular.module('movies');

    function controller() {
        var model = this;
        model.$onInit = function () {
            //model.entries = new Array(model.max);
            model.entries = buildEntries(model.value,model.max);
        };

        model.$onChanges = function () {
            model.entries = buildEntries(model.value,model.max);
        }
    }

    function buildEntries(value, max) {
        var entries = [];
        for (var i = 1; i <= max; i++) {
            var entry = i<=value ? "fa-star":"fa-star-o";
            entries.push(entry);
        }
        return entries;
    }

    app.component('moviesRating', {
        templateUrl: 'movies/movies-rating.component.html',
        bindings: {
            value: '<',
            max: '<',
            setRating : '&'
        },
        //transclude : true,
        controllerAs: 'model',
        controller: controller
    });
}());