'use strict';

angular.module('tiles.controller', ['tiles.service'])

    .controller('TilesController', ['$scope', 'Tiles',
        function ($scope, Tiles) {
            $scope.tiles = Tiles.all();
            $scope.filter = {
                content: ''
            };

            $scope.$watch('filter', function (filter, oldFilter) {
                $scope.tiles = Tiles.search(filter.content);
            }, true);
        }]);