'use strict';

angular.module('tiles.service', ['tiles.data', 'tiles.filters'])

    .factory('Tiles', ['TilesData', '$filter', 'beautifyFilter',
        function (TilesData, $filter, beautifyFilter) {

            var tiles = beautifyFilter(TilesData.load());

            function all() {
                return tiles;
            }

            function search(content) {
                return $filter('filter')(tiles, function (tile, index, tiles) {
                        var inTitle = (tile.title.toUpperCase().indexOf(content.toUpperCase()) >= 0);
                        var inDescription = (tile.description.toUpperCase().indexOf(content.toUpperCase()) >= 0);
                        var foundTags = (tile.tags.filter(function (value) {
                            return (value.name.indexOf(content) >= 0)
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