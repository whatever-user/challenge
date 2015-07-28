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

        it('there is 1 tile with the word "Hermansen" in the description', function () {
            expect(Tiles.search('Hermansen').length).toBe(1);
        });

        it('there is 1 tile with the tag "web article"', function () {
            expect(Tiles.search('web article').length).toBe(36);
        });

        it('there are 2 tiles with content or tags "agriculture"', function () {
            expect(Tiles.search('agriculture').length).toBe(2);
        })
    });

    describe('creating a tile"', function () {
        beforeEach(inject(function (_Tiles_) {
            Tiles = _Tiles_;
        }));

        it('there are 101 tile after creating one with just the title', function () {
            Tiles.create('Test tile');
            expect(Tiles.all().length).toBe(101);
        });
        it('the recently created tile is the first one', function () {
            Tiles.create('Test tile');
            expect(Tiles.all()[0].title).toBe('Test tile');
        });
        it('it is not possible to create a tile without a title', function () {
            expect(Tiles.create()).toBe(false);
        });
        it('it is possible to create a tile with one tag', function () {
            Tiles.create('Test tile', 'tag');
            expect(Tiles.all()[0].tags.length).toBe(1);
        });
        it('the tag is created by the name', function () {
            Tiles.create('Test tile', 'tag');
            expect(Tiles.all()[0].tags[0].name).toBe('tag');
        });
        it('it is possible to create a tile with multiple tags sepparated by commas', function () {
            Tiles.create('Test tile', 'tag one, tag two');
            expect(Tiles.all()[0].tags.length).toBe(2);
        });
        it('multiple tags are created by name', function () {
            Tiles.create('Test tile', 'tag one, tag two');
            expect(Tiles.all()[0].tags[0].name).toBe('tag one');
            expect(Tiles.all()[0].tags[1].name).toBe('tag two');
        });
        it('two equal tags only create one tag', function () {
            Tiles.create('Test tile', 'tag one, tag one');
            expect(Tiles.all()[0].tags.length).toBe(1);
        });
        it('two equal tags and a different one only create two tags', function () {
            Tiles.create('Test tile', 'tag one, tag one, tag two');
            expect(Tiles.all()[0].tags.length).toBe(2);
        });
    });
});