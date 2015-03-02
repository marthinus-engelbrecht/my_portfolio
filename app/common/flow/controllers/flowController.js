(function () {
    'use strict';
    var module = angular.module('blaze.flowController', []);

    module.controller('FlowController', function($state) {
        $state.go('home');
    });
})();