(function () {
    'use strict';

    var app = angular.module('blaze.navbarController', []);

    app.controller('NavbarController', function ($scope, $location) {
        $scope.menu = [
            {
                title: 'Home',
                state: 'home'
            },
            {
                title: 'Jesus',
                state: 'jesus'
            },
            {
                title: 'Need a lift',
                state: 'lifts'
            },
            {
                title: 'Talks',
                state: 'talks'
            },
            {
                title: 'Wall of Life',
                state: 'wallOfLife'
            },
            {
                title: 'What\'s happening',
                state: 'news'
            },
            {
                title: 'Give',
                state: 'give'
            },
            {

            }
        ];
        $scope.isActive = function (route) {
            return route === $location.path();
        };
    });
})();


