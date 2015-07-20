'use strict';

angular.module('tiles.service', ['tiles.data'])

    .factory('Tiles', ['TilesData', '$filter',
        function (TilesData, $filter) {

            var tiles = TilesData.load();

            function all() {
                return tiles;
            }

            function search(content) {
                return $filter('filter')(tiles, function (tile, index, tiles) {
                        return (tile.title.toUpperCase().indexOf(content.toUpperCase()) >= 0)
                    }) || [];
            }

            return {
                all: all,
                search: search
            }
        }]);