'use strict';

describe('Testing the service "Tiles"', function () {
    beforeEach(module('knowledge'));

    var tiles;
    beforeEach(inject(function (Tiles) {
        tiles = Tiles;
    }));

    it('should have 100 tiles', function () {
        expect(tiles.all().length).toBe(100);
    });
});