'use strict';

describe('Testing the service "Tiles"', function () {
    beforeEach(module('knowledge'));

    var Tiles;
    beforeEach(inject(function (_Tiles_) {
        Tiles = _Tiles_;
    }));

    it('should have 100 tiles', function () {
        expect(Tiles.all().length).toBe(100);
    });
});