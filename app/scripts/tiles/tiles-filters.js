angular.module('tiles.filters', [])

    .filter('colorize', function () {
        return function (tiles) {
            for (var t in tiles) {
                var tile = tiles[t];
                switch (tile.subtype) {
                    case 'collection':
                        tile.color = 'stable';
                        break;
                    case 'document':
                        tile.color = 'positive';
                        break;
                    case 'site':
                        tile.color = 'calm';
                        break;
                    case 'expertprofile':
                        tile.color = 'balanced';
                        break;
                    case 'reference':
                        tile.color = 'energized';
                        break;
                    case 'event':
                        tile.color = 'royal';
                        break;
                    case 'email':
                        tile.color = 'dark';
                        break;
                    default:
                        tile.color = 'dark';
                }
            }
            return tiles;
        }
    });