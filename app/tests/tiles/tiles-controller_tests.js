'use strict';

describe('Testing the controller "TilesController"', function () {
    beforeEach(module('knowledge'));

    var TilesController, scope, $timeout;
    beforeEach(inject(function ($controller, $rootScope, _$timeout_) {
        $timeout = _$timeout_;
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

    describe('showing an alert message', function () {
        it('the alert is shown', function () {
            scope.showAlert();
            expect(scope.alert.hidden).toBeFalsy();
        });

        it('the alert is shown with a specific message', function () {
            scope.showAlert('Specific message');
            expect(scope.alert.message).toBe('Specific message');
        });

        it('the default message is "Oops, something went wrong... :("', function () {
            scope.showAlert();
            expect(scope.alert.message).toBe('Oops, something went wrong... :(');
        });

        it('the alert is hidden after the timeout', function () {
            scope.showAlert();
            $timeout.flush();
            expect(scope.alert.hidden).toBeTruthy();
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