angular.module('tiles.filters', [])
    .filter('beautify', ['colorizeFilter', 'categoryFilter', 'tagTypeFilter', 'likeIconFilter', 'followIconFilter',
        function (colorizeFilter, categoryFilter, tagTypeFilter, likeIconFilter, followIconFilter) {
            return function (tiles) {
                for (var t in tiles) {
                    var tile = tiles[t];
                    tile.tags = tagTypeFilter(tile.tags);
                }

                tiles = colorizeFilter(tiles);
                tiles = categoryFilter(tiles);
                tiles = likeIconFilter(tiles);
                tiles = followIconFilter(tiles);
                return tiles;
            }
        }])

    .filter('colorize', function () {
        return function (tiles) {
            for (var t in tiles) {
                var tile = tiles[t];
                tile.color = 'stable';
                switch (tile.subtype) {
                    case 'collection':
                        tile.color = 'energized';
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
                        tile.color = 'stable';
                        break;
                    case 'event':
                        tile.color = 'royal';
                        break;
                    case 'email':
                        tile.color = 'dark';
                        break;
                }
            }
            return tiles;
        }
    })

    .filter('category', function () {
        return function (tiles) {
            for (var t in tiles) {
                var tile = tiles[t];
                switch (tile.category) {
                    case 'Web':
                        tile.categoryIcon = 'globe';
                        break;
                    case 'Utilisateurs':
                        tile.categoryIcon = 'user';
                        break;
                    case 'Fichiers':
                        tile.categoryIcon = 'file';
                        break;
                    case 'Collections':
                        tile.categoryIcon = 'th-list';
                        break;
                    case 'Ev\u00e8nements':
                        tile.categoryIcon = 'calendar';
                        break;
                    case 'Emails':
                        tile.categoryIcon = 'envelope';
                        break;
                    default:
                        tile.categoryIcon = '';
                }
            }
            return tiles;
        }
    })

    .filter('tagType', function () {
        return function (tags) {
            if (!tags) {
                return [];
            }
            for (var t in tags) {
                var tag = tags[t];
                switch (tag.tagType) {
                    case 'technology':
                        tag.icon = 'cog';
                        break;
                    case 'type of document':
                        tag.icon = 'file';
                        break;
                    case 'industry':
                        tag.icon = 'wrench';
                        break;
                    case 'language':
                        tag.icon = 'flag';
                        break;
                    case 'th\u00e8mes':
                        tag.icon = 'education';
                        break;
                    case 'organization':
                        tag.icon = 'th-large';
                        break;
                    case 'source':
                        tag.icon = 'bullhorn';
                        break;
                    case 'place':
                        tag.icon = 'globe';
                        break;
                    case 'people':
                        tag.icon = 'user';
                        break;
                }
            }
            return tags;
        }
    })

    .filter('likeIcon', function () {
        return function (tiles) {
            if (!tiles) {
                return [];
            }
            for (var tileCounter in tiles) {
                var tile = tiles[tileCounter];
                if (tile.iLike) {
                    tile.likeIcon = 'heart';
                } else {
                    tile.likeIcon = 'heart-empty';
                }
            }
            return tiles;
        }
    })

    .filter('followIcon', function () {
        return function (tiles) {
            if (!tiles) {
                return [];
            }
            for (var tileCounter in tiles) {
                var tile = tiles[tileCounter];
                if (tile.follow) {
                    tile.followIcon = 'star';
                } else {
                    tile.followIcon = 'star-empty';
                }
            }
            return tiles;
        }
    })

    .filter('highlight', function () {
        return function (text, query) {
            if (query && query != '') {
                var queryExpression = new RegExp(query, 'gi');
                return text.replace(queryExpression, '<b>' + query + '</b>');
            } else {
                return text;
            }
        }
    })

    .filter('highlightTiles', ['highlightFilter', function (highlightFilter) {
        return function (tiles, query) {
            if (query && query != '') {
                for (var tileCounter in tiles) {
                    var tile = tiles[tileCounter];
                    if (tile.title) {
                        tile.title = highlightFilter(tile.title, query);
                    }
                    if (tile.description) {
                        tile.description = highlightFilter(tile.description, query);
                    }
                    if(tile.tags) {
                        for (var tagIndex = 0; tagIndex < tile.tags.length; tagIndex++) {
                            tile.tags[tagIndex].name = highlightFilter(tile.tags[tagIndex].name, query);
                        }
                    }
                }
            }
            return tiles
        }
    }]);