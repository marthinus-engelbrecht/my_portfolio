describe('Flow controller is initialized', function () {

    beforeEach(module('blaze.flowController', 'ui.router'));

    var state, controller, scope;

    beforeEach(inject(function($state, $controller, $rootScope){
        state = $state;
        controller = $controller;
        scope = $rootScope.$new();
    }));

    it('should set state to home', function () {
        var goSpy = spyOn(state, 'go');
        controller('FlowController', {
            $scope: scope
        });
        expect(goSpy).toHaveBeenCalledWith('home');
    });
});