angular.module('tiles.filters', [])
    .filter('beautify', ['colorizeFilter', 'categoryFilter', 'tagTypeFilter', function (colorizeFilter, categoryFilter, tagTypeFilter) {
        return function (tiles) {
            for (var t in tiles) {
                var tile = tiles[t];
                tile.tags = tagTypeFilter(tile.tags);
            }

            return colorizeFilter(categoryFilter(tiles))
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
                        tile.categoryIcon = 'cog';
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
                        tag.icon = 'floppy-disk';
                        break;
                    case 'type of document':
                        tag.icon = 'file';
                        break;
                    case 'industry':
                        tag.icon = 'wrench';
                        break;
                    case 'language':
                        tag.icon = 'text-color';
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
    });