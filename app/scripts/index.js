'use strict';

angular.module('knowledge', ['ngRoute', 'tiles.controller', 'tiles.directives'])

    .config(['$routeProvider',
        function ($routeProvider) {
            $routeProvider.
                when('/tiles', {
                    templateUrl: 'scripts/tiles/tiles.html',
                    controller: 'TilesController'
                })
                .otherwise({
                    redirectTo: '/tiles'
                });
        }]);