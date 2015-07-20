'use strict';

angular.module('tiles.service', ['tiles.data'])

    .factory('Tiles', ['TilesData', '$filter',
        function (TilesData, $filter) {

            var tiles = TilesData.load();

            function all() {
                return tiles;
            }

            function searchByTitle(text) {
                return $filter('filter')(tiles, function (tile, index, tiles) {
                        return (tile.title.toUpperCase().indexOf(text.toUpperCase()) >= 0)
                    }) || [];
            }

            return {
                all: all,
                searchByTitle: searchByTitle
            }
        }]);