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

    describe('creating a new tile', function () {
        it('after a successful tile creation, the new title info is cleared', function () {
            scope.newTile = {
                title: 'New tile'
            };
            scope.create();
            expect(scope.newTile.title).toBe('');
        });

        it('after a successful tile creation, the tags are cleared', function () {
            scope.newTile = {
                title: "New tile",
                tags: 'tag one, tag two'
            };
            scope.create();
            expect(scope.newTile.tags).toBe('');
        });


        it('after an unsuccessful tile creation, the new title info is not cleared', function () {
            scope.newTile = {
                title: '',
                tags: 'tag one, tag two'
            };
            scope.create();
            expect(scope.newTile.tags).toBe('tag one, tag two');
        });
    });

    describe('liking a tile', function () {
        it('after liking a previously unliked tile it changes to liked', function () {
            scope.like(2731);
            expect(scope.tiles[0].iLike).toBeTruthy();
        });
    });

    describe('following a tile', function () {
        it('after following a previously unfollowed tile it changes to followed', function () {
            scope.follow(2730);
            expect(scope.tiles[1].follow).toBeTruthy();
        });
    });
});