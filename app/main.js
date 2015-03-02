(function (app) {
    'use strict';
    function setupState($stateProvider) {
        var home = {
            templateUrl: 'features/homePage/partials/home.html',
            controller: 'HomeController'
        };

        var about = {
            templateUrl: 'partials/about',
            controller: 'AboutController'
        };

        var questions = {
            templateUrl: 'partials/questions',
            controller: 'QuestionsController'
        };

        var talks = {
            templateUrl: 'partials/talks',
            controller: 'TalksController'
        };

        $stateProvider
            .state('home', home)
            .state('talks', talks)
            .state('about', about)
            .state('questions', questions);
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
    'slick',
    'blaze.navbar'
]));