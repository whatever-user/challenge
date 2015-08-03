'use strict';

angular.module('expert.service', [])

    .factory('Experts', [
        function () {
            function get(expertId) {
                faker.seed(parseInt((expertId)));
                return {
                    name: faker.name.findName(),
                    title: faker.name.jobTitle(),
                    about: faker.hacker.phrase(),
                    hobbies: faker.company.catchPhrase()
                }
            }

            return {
                get: get
            }
        }
    ]);