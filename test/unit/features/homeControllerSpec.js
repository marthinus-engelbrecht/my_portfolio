describe('Home controller is initialized', function () {

    beforeEach(module('blaze.homeController'));

    var controller, scope, httpBackend;

    beforeEach(inject(function($controller, $rootScope, $httpBackend){
        controller = $controller;
        scope = $rootScope.$new();
        httpBackend = $httpBackend;
    }));

    it('should read pictures into scope from location', function () {
        httpBackend.expectGET('../../mockData/images/imageSources.json').respond;

        controller('HomeController', {
            $scope: scope
        });

        httpBackend.flush();
        expect(scope.pictures).toBeDefined();
        expect(scope.pictures.length).toBeGreaterThan(0);
    });
});