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
                        var inTitle = (tile.title.toUpperCase().indexOf(content.toUpperCase()) >= 0);
                        var inDescription = (tile.description.toUpperCase().indexOf(content.toUpperCase()) >= 0);
                        var foundTags = (tile.tags.filter(function (value) {
                            return (value.name === content)
                        }));
                        var inTags = (foundTags.length > 0);
                        return inTitle || inDescription || inTags;
                    }) || [];
            }

            return {
                all: all,
                search: search
            }
        }]);