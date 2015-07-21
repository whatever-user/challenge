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
});