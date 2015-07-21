'use strict';

describe('Testing the controller "TilesController"', function () {
    beforeEach(module('knowledge'));

    var TilesController, scope;
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        TilesController = $controller('TilesController', {
            $scope: scope
        })
    }));

    it('should have 100 tiles on creation', function () {
        expect(scope.tiles.length).toBe(100);
    });

    it('after creating a tile, the title is cleared', function () {
        scope.newTile = {
            title: "New tile"
        };
        scope.create();
        expect(scope.newTile.title).toBe('');
    });

    it('after creating a tile, the tags are cleared', function () {
        scope.newTile = {
            title: "New tile",
            tags: 'tag one, tag two'
        };
        scope.create();
        expect(scope.newTile.tags).toBe('');
    });
});