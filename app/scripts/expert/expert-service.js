'use strict';

angular.module('expert.service', [])

    .factory('Experts', [
        function () {
            function get(expertName) {
                return {
                    name: expertName,
                    title: faker.name.jobTitle(),
                    company: faker.company.companyName(),
                    about: faker.hacker.phrase(),
                    hobbies: faker.company.catchPhrase(),
                    skills: [
                        faker.hacker.abbreviation(),
                        faker.hacker.abbreviation(),
                        faker.hacker.abbreviation()
                    ],
                    avatar: faker.image.avatar(),
                    email: faker.internet.email(),
                    twitter: '@' + faker.internet.userName(),
                    followers: Math.round(faker.random.number() / 100),
                    following: Math.round(faker.random.number() / 1000),
                    articles: Math.round(faker.random.number() / 10000)
                }
            }

            return {
                get: get
            }
        }
    ]);