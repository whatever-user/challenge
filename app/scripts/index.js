'use strict';

angular.module('knowledge', ['ngRoute', 'tiles.controller', 'expert.controller', 'collection.controller', 'tiles.directives'])

    .config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
                when('/tiles', {
                    templateUrl: 'scripts/tiles/tiles.html',
                    controller: 'TilesController'
                })

                .when('/expert/:expertName', {
                    templateUrl: 'scripts/expert/profile.html',
                    controller: 'ExpertController'
                })

                .when('/collection/:collectionId', {
                    templateUrl: 'scripts/collection/collection.html',
                    controller: 'CollectionController'
                })

                .otherwise({
                    redirectTo: '/tiles'
                });
        }]);