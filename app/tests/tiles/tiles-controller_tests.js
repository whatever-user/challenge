'use strict';

describe('Testing the controller "TilesController"', function () {
    beforeEach(module('knowledge'));

    var tilesController, scope;
    beforeEach(inject(function ($controller) {
        scope = {};
        tilesController = $controller('TilesController', {
            $scope: scope
        })
    }));

    it('should have Eder by name', function () {
        expect(scope.name).toBe('Eder');
    });
});