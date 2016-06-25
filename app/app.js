/**
 * Created by srini on 24-06-2016.
 */
(function(){
    var app = angular.module('movies',["ngComponentRouter"]);

    //It tells angular which is the root component to be loaded.
    app.value("$routerRootComponent","moviesApp");

    app.component('appAbout',{
        template : '<h2>About Page!!!</h2>'
    });
}());