'use strict';

describe('Testing the tiles filters', function () {
    beforeEach(module('knowledge'));

    describe('beautifyFilter', function () {
        it('"collection" subtype should be "energized" color', inject(function (beautifyFilter) {
            expect(beautifyFilter([{subtype: 'collection'}])[0].color).toBe('energized');
        }));
        it('"Web" category should be "globe" icon', inject(function (beautifyFilter) {
            expect(beautifyFilter([{category: 'Web'}])[0].categoryIcon).toBe('globe');
        }));
        it('"technology" tag type should be "cog" icon', inject(function (beautifyFilter) {
            var tiles = [{
                tags: [{tagType: 'technology'}]
            }];
            var beautifulTiles = beautifyFilter(tiles);
            expect(beautifulTiles[0].tags[0].icon).toBe('cog');
        }));
        it('unliked tile should be "heart-empty" like icon', inject(function (beautifyFilter) {
            expect(beautifyFilter([{iLike: false}])[0].likeIcon).toBe('heart-empty');
        }));
        it('unfollowed tile should be "star-empty" follow icon', inject(function (beautifyFilter) {
            expect(beautifyFilter([{follow: false}])[0].followIcon).toBe('star-empty');
        }));
    });

    describe('colorizeFilter', function () {
        it('"collection" subtype should be "energized" color', inject(function (colorizeFilter) {
            expect(colorizeFilter([{subtype: 'collection'}])[0].color).toBe('energized');
        }));
        it('"document" subtype should be "positive" color', inject(function (colorizeFilter) {
            expect(colorizeFilter([{subtype: 'document'}])[0].color).toBe('positive');
        }));
        it('"site" subtype should be "calm" color', inject(function (colorizeFilter) {
            expect(colorizeFilter([{subtype: 'site'}])[0].color).toBe('calm');
        }));
        it('"expertprofile" subtype should be "balanced" color', inject(function (colorizeFilter) {
            expect(colorizeFilter([{subtype: 'expertprofile'}])[0].color).toBe('balanced');
        }));
        it('"reference" subtype should be "stable" color', inject(function (colorizeFilter) {
            expect(colorizeFilter([{subtype: 'reference'}])[0].color).toBe('stable');
        }));
        it('"event" subtype should be "royal" color', inject(function (colorizeFilter) {
            expect(colorizeFilter([{subtype: 'event'}])[0].color).toBe('royal');
        }));
        it('"email" subtype should be "dark" color', inject(function (colorizeFilter) {
            expect(colorizeFilter([{subtype: 'email'}])[0].color).toBe('dark');
        }));
        it('any other subtype should be "stable" color', inject(function (colorizeFilter) {
            expect(colorizeFilter([{subtype: ''}])[0].color).toBe('stable');
        }));
    });

    describe('categoryFilter', function () {
        it('"Web" category should be "globe" icon', inject(function (categoryFilter) {
            expect(categoryFilter([{category: 'Web'}])[0].categoryIcon).toBe('globe');
        }));
        it('"Utilisateurs" category should be "user" icon', inject(function (categoryFilter) {
            expect(categoryFilter([{category: 'Utilisateurs'}])[0].categoryIcon).toBe('user');
        }));
        it('"Fichiers" category should be "file" icon', inject(function (categoryFilter) {
            expect(categoryFilter([{category: 'Fichiers'}])[0].categoryIcon).toBe('file');
        }));
        it('"Collections" category should be "th-list" icon', inject(function (categoryFilter) {
            expect(categoryFilter([{category: 'Collections'}])[0].categoryIcon).toBe('th-list');
        }));
        it('"Ev\u00e8nements" category should be "calendar" icon', inject(function (categoryFilter) {
            expect(categoryFilter([{category: 'Ev\u00e8nements'}])[0].categoryIcon).toBe('calendar');
        }));
        it('"Emails" category should be "envelope" icon', inject(function (categoryFilter) {
            expect(categoryFilter([{category: 'Emails'}])[0].categoryIcon).toBe('envelope');
        }));
        it('any other category should be no icon', inject(function (categoryFilter) {
            expect(categoryFilter([{category: ''}])[0].categoryIcon).toBe('');
        }));
    });

    describe('tagTypeFilter', function () {
        it('"technology" tag type should be "cog" icon', inject(function (tagTypeFilter) {
            expect(tagTypeFilter([{tagType: 'technology'}])[0].icon).toBe('cog');
        }));
        it('"type of document" tag type should be "file" icon', inject(function (tagTypeFilter) {
            expect(tagTypeFilter([{tagType: 'type of document'}])[0].icon).toBe('file');
        }));
        it('"industry" tag type should be "wrench" icon', inject(function (tagTypeFilter) {
            expect(tagTypeFilter([{tagType: 'industry'}])[0].icon).toBe('wrench');
        }));
        it('"language" tag type should be "text-color" icon', inject(function (tagTypeFilter) {
            expect(tagTypeFilter([{tagType: 'language'}])[0].icon).toBe('flag');
        }));
        it('"th\u00e8mes" tag type should be "education" icon', inject(function (tagTypeFilter) {
            expect(tagTypeFilter([{tagType: 'th\u00e8mes'}])[0].icon).toBe('education');
        }));
        it('"organization" tag type should be "th-large" icon', inject(function (tagTypeFilter) {
            expect(tagTypeFilter([{tagType: 'organization'}])[0].icon).toBe('th-large');
        }));
        it('"source" tag type should be "bullhorn" icon', inject(function (tagTypeFilter) {
            expect(tagTypeFilter([{tagType: 'source'}])[0].icon).toBe('bullhorn');
        }));
        it('"place" tag type should be "globe" icon', inject(function (tagTypeFilter) {
            expect(tagTypeFilter([{tagType: 'place'}])[0].icon).toBe('globe');
        }));
        it('"people" tag type should be "user" icon', inject(function (tagTypeFilter) {
            expect(tagTypeFilter([{tagType: 'people'}])[0].icon).toBe('user');
        }));
        it('no tags, no problem', inject(function (tagTypeFilter) {
            expect(tagTypeFilter([])).toEqual([]);
        }));
    });

    describe('likeIconFilter', function () {
        it('unliked tile should be "heart-empty" like icon', inject(function (likeIconFilter) {
            expect(likeIconFilter([{iLike: false}])[0].likeIcon).toBe('heart-empty');
        }));
        it('liked tile should be "heart" like icon', inject(function (likeIconFilter) {
            expect(likeIconFilter([{iLike: true}])[0].likeIcon).toBe('heart');
        }));
    });

    describe('followIconFilter', function () {
        it('unfollowed tile should be "star-empty" follow icon', inject(function (followIconFilter) {
            expect(followIconFilter([{follow: false}])[0].followIcon).toBe('star-empty');
        }));
        it('followed tile should be "star" follow icon', inject(function (followIconFilter) {
            expect(followIconFilter([{follow: true}])[0].followIcon).toBe('star');
        }));
    });

    describe('highlightFilter', function () {
        it('highlight a whole word', inject(function (highlightFilter) {
            expect(highlightFilter('Lorem ipsum dolor sit amet', 'dolor')).toBe('Lorem ipsum <b>dolor</b> sit amet');
        }));

        it('highlight is case insensitive', inject(function (highlightFilter) {
            expect(highlightFilter('Lorem ipsum dolor sit amet', 'DOLOR')).toBe('Lorem ipsum <b>DOLOR</b> sit amet');
        }));

        it('highlight a whole word multiple times', inject(function (highlightFilter) {
            expect(highlightFilter('Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet', 'dolor')).toBe('Lorem ipsum <b>dolor</b> sit amet, lorem ipsum <b>dolor</b> sit amet');
        }));

        it('highlight a partial word', inject(function (highlightFilter) {
            expect(highlightFilter('Lorem ipsum dolor sit amet', 'dol')).toBe('Lorem ipsum <b>dol</b>or sit amet');
        }));

        it('highlight a partial word multiple times', inject(function (highlightFilter) {
            expect(highlightFilter('Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet', 'dol')).toBe('Lorem ipsum <b>dol</b>or sit amet, lorem ipsum <b>dol</b>or sit amet');
        }));

        it('don\'t hightlight anything if there is no match', inject(function (highlightFilter) {
            expect(highlightFilter('Lorem ipsum dolor sit amet', 'xxx')).toBe('Lorem ipsum dolor sit amet');
        }));

        it('don\'t hightlight anything if there is no search text', inject(function (highlightFilter) {
            expect(highlightFilter('Lorem ipsum dolor sit amet', '')).toBe('Lorem ipsum dolor sit amet');
        }));

    });

    describe('highlightTilesFilter', function () {
        it('do not hightlight anything if there are no tiles', inject(function (highlightTilesFilter) {
            expect(highlightTilesFilter([], 'dolor').length).toBe(0);
        }));

        it('highlight a word in the title', inject(function (highlightTilesFilter) {
            expect(highlightTilesFilter([{title: 'Lorem ipsum dolor sit amet'}], 'dolor')[0].title).toBe('Lorem ipsum <b>dolor</b> sit amet');
        }));

        it('highlight a word in the description', inject(function (highlightTilesFilter) {
            expect(highlightTilesFilter([{description: 'Lorem ipsum dolor sit amet'}], 'dolor')[0].description).toBe('Lorem ipsum <b>dolor</b> sit amet');
        }));

        it('highlight a word in the tags', inject(function (highlightTilesFilter) {
            var tags = [{name: 'tag one'}];
            expect(highlightTilesFilter([{tags: tags}], 'one')[0].tags[0].name).toBe('tag <b>one</b>');
        }));
    });
});
