'use strict';

angular.module('tiles.service', ['tiles.data'])

    .factory('Tiles', ['TilesData', '$filter',
        function (TilesData, $filter) {

            var tiles = TilesData.load();

            function all() {
                return tiles;
            }

            function searchByTitle(text) {
                return $filter('filter')(tiles, {title: text}, function (a, b) {
                        return a.toLowerCase().indexOf(b.toLowerCase()) >= 0;
                    }) || [];
            }

            return {
                all: all,
                searchByTitle: searchByTitle
            }
        }]);