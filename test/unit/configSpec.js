'use strict';

describe('Testing config block', function () {
    var stateProvider;

    beforeEach(function () {
        module('ui.router', function ($stateProvider) {
            stateProvider = $stateProvider;
        });
        module('blaze');
    });

    it('should set various states', function () {
        inject();
        var stateSpy = spyOn(stateProvider, 'state').and.callFake(function(){
            return stateProvider;
        });
        var configBlock = angular.module('blaze')._configBlocks[0];
        configBlock[2][0](stateProvider);
        expect(stateSpy).toHaveBeenCalled();
    });

});