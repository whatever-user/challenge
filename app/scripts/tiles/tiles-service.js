'use strict';

angular.module('tiles.service', ['tiles.data'])

    .factory('Tiles', ['TilesData',
        function (TilesData) {

            var tiles = TilesData;

            function all() {
                return tiles;
            }

            return {
                all: all
            }
        }]);