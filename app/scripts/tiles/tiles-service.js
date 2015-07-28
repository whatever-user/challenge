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

            function create(title, tags) {
                if (title) {
                    var tile = {'title': title};
                    if (tags) {
                        var tagArray = tags.replace(/, /g, ',').split(',');
                        tile.tags = [];
                        for (var tagArrayIndex in tagArray) {
                            var tag = tagArray[tagArrayIndex];
                            var tagFound = false;
                            for (var tagsIndex = 0; tagsIndex < tile.tags.length && !tagFound; tagsIndex++) {
                                if (tile.tags[tagsIndex].name == tag) {
                                    tagFound = true;
                                }
                            }
                            if (!tagFound) {
                                tile.tags.push({name: tag});
                            }
                        }
                    }
                    var beautifulTile = beautifyFilter([tile]);
                    tiles.unshift(beautifulTile[0]);
                    return true;
                } else {
                    return false;
                }
            }

            return {
                all: all,
                search: search,
                create: create
            }
        }]);