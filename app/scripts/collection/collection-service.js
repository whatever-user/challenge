'use strict';

angular.module('collection.service', [])

    .factory('Collections', [
        function () {
            function get(collectionId) {
                var collection = [];
                for (var collectionIndex = 0; collectionIndex < 6; collectionIndex++) {
                    collection.push({
                        title: faker.company.catchPhrase(),
                        thumb: faker.image.image(),
                        date: new Date(faker.date.past()).toISOString().slice(0, 10),
                        author: faker.name.findName(),
                        url: faker.internet.url()
                    });
                }
                return collection
            }

            return {
                get: get
            }
        }
    ]);