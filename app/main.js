(function (app) {
    'use strict';
    function setupState($stateProvider) {
        var home = {
            templateUrl: 'features/homePage/partials/home.html',
            controller: 'HomeController'
        };

        $stateProvider
            .state('home', home);
    }

    app.config(function ($stateProvider) {
        setupState($stateProvider);
    });

    app.run(function($state){
       $state.go('home');
    });
})(angular.module('blaze', [
    'ui.router',
    'blaze.homeController',
]));