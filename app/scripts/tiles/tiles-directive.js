angular.module('tiles.directives', [])

    .directive('tile', function () {
        return {
            scope: { tile: '=data' },
            templateUrl: 'scripts/tiles/tile.html'
        };
    });