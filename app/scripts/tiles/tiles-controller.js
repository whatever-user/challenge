'use strict';

angular.module('tiles.controller', ['tiles.service'])

    .controller('TilesController', ['$scope', 'Tiles',
        function ($scope, Tiles) {
            $scope.tiles = Tiles.all();
        }]);