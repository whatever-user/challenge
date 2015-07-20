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

    describe('searching by title"', function () {

        it('there is 1 tile with the word "enterprise"', function () {
            expect(Tiles.searchByTitle('enterprise').length).toBe(1);
        });

        it('there are 3 tiles with the word "My"', function () {
            expect(Tiles.searchByTitle('My').length).toBe(3);
        });

        it('is case insensitive', function () {
            expect(Tiles.searchByTitle('My').length).toBe(Tiles.searchByTitle('my').length);
        });

        it('there are no tiles with the word "xxxxxx"', function () {
            expect(Tiles.searchByTitle('xxxxxx').length).toBe(0);
        });

    });
});