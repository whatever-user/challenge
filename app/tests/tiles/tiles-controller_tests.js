'use strict';

describe('Testing the controller "TilesController"', function () {
    beforeEach(module('knowledge'));

    var TilesController, scope;
    beforeEach(inject(function ($controller) {
        scope = {};
        TilesController = $controller('TilesController', {
            $scope: scope
        })
    }));

    it('should have 100 tiles on creation', function () {
        expect(scope.tiles.length).toBe(100);
    });
});