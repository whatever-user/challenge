'use strict';

describe('Testing the tiles filters', function () {
    beforeEach(module('knowledge'));

    describe('colorizeFilter', function () {
        it('"collection" subtype should be "stable" color', inject(function (colorizeFilter) {
            expect(colorizeFilter([{subtype: 'collection'}])[0].color).toBe('stable');
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
        it('"reference" subtype should be "energized" color', inject(function (colorizeFilter) {
            expect(colorizeFilter([{subtype: 'reference'}])[0].color).toBe('energized');
        }));
        it('"event" subtype should be "royal" color', inject(function (colorizeFilter) {
            expect(colorizeFilter([{subtype: 'event'}])[0].color).toBe('royal');
        }));
        it('"email" subtype should be "dark" color', inject(function (colorizeFilter) {
            expect(colorizeFilter([{subtype: 'email'}])[0].color).toBe('dark');
        }));
        it('any other subtype should be "dark" color', inject(function (colorizeFilter) {
            expect(colorizeFilter([{subtype: ''}])[0].color).toBe('dark');
        }));
    })

    describe('categoryFilter', function () {
        it('"Web" category should be "globe" icon', inject(function (categoryFilter) {
            expect(categoryFilter([{category: 'Web'}])[0].categoryIcon).toBe('globe');
        }));
        it('"Utilisateurs" category should be "cog" icon', inject(function (categoryFilter) {
            expect(categoryFilter([{category: 'Utilisateurs'}])[0].categoryIcon).toBe('cog');
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
        it('any other category should be "info-sign" icon', inject(function (categoryFilter) {
            expect(categoryFilter([{category: ''}])[0].categoryIcon).toBe('info-sign');
        }));
    })
});