'use strict';

angular.module('tiles.service', ['tiles.data', 'tiles.filters'])

    .factory('Tiles', ['TilesData', '$filter', 'beautifyFilter', 'likeIconFilter', 'followIconFilter',
        function (TilesData, $filter, beautifyFilter, likeIconFilter, followIconFilter) {

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

            function searchIndexById(id) {
                for (var tileIndex = 0; tileIndex < tiles.length; tileIndex++) {
                    var tile = tiles[tileIndex];
                    if (tile.id == id) {
                        return tileIndex;
                    }
                }
            }

            function getById(id) {
                var tileIndex = searchIndexById(id);
                return (tileIndex >= 0 ? tiles[tileIndex] : null)
            }

            function like(id) {
                var tileIndex = searchIndexById(id);
                var tile = tiles[tileIndex];
                if (tile && tile.canLike) {
                    tile.iLike = !tile.iLike;
                    tile.nLikes += tile.iLike ? 1 : -1;
                    likeIconFilter([tile]);
                }
            }

            function follow(id) {
                var tileIndex = searchIndexById(id);
                var tile = tiles[tileIndex];
                if (tile && tile.follow_active) {
                    tile.follow = !tile.follow;
                    tile.nFollowers += tile.follow ? 1 : -1;
                    followIconFilter([tile]);
                }
            }

            return {
                all: all,
                search: search,
                create: create,
                getById: getById,
                like: like,
                follow: follow
            }
        }]);