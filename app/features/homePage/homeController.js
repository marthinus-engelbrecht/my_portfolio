(function (app) {
    'use strict';
    app.controller('HomeController', function ($scope, $http) {
        $http.get('common/imageSources.json').success(function(response){
            $scope.pictures = response.data;
        });
    });
})(angular.module('blaze.homeController', []));