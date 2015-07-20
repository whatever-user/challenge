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

    describe('searching by content"', function () {

        it('there is 1 tile with the word "enterprise"', function () {
            expect(Tiles.search('enterprise').length).toBe(1);
        });

        it('there are 3 tiles with the word "My"', function () {
            expect(Tiles.search('My').length).toBe(3);
        });

        it('is case insensitive', function () {
            expect(Tiles.search('My').length).toBe(Tiles.search('my').length);
        });

        it('there are no tiles with the word "xxxxxx"', function () {
            expect(Tiles.search('xxxxxx').length).toBe(0);
        });

        it('there is 1 tile with the word "Hermansen" in the description', function(){
            expect(Tiles.search('Hermansen').length).toBe(1);
        });

        it('there is 1 tile with the tag "web article"', function(){
            expect(Tiles.search('web article').length).toBe(36);
        });

        it('there are 2 tiles with content or tags "agriculture"', function(){
            expect(Tiles.search('agriculture').length).toBe(2);
        })

    });
});