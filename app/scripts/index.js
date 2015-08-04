'use strict';

angular.module('knowledge', ['ngRoute', 'tiles.controller', 'expert.controller', 'tiles.directives'])

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

                .otherwise({
                    redirectTo: '/tiles'
                });
        }]);