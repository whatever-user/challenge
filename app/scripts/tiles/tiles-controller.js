'use strict';

angular.module('tiles.controller', ['tiles.service'])

    .controller('TilesController', ['$scope', 'Tiles',
        function ($scope, Tiles) {
            $scope.tiles = Tiles.all();
            $scope.filter = {
                content: ''
            };

            $scope.newTile = {
                title: '',
                tags: ''
            };

            $scope.create = function () {
                Tiles.create($scope.newTile.title, $scope.newTile.tags);
                $scope.tiles = Tiles.all();
                $scope.newTile.title = '';
                $scope.newTile.tags = '';
            };

            $scope.$watch('filter', function (filter, oldFilter) {
                $scope.tiles = Tiles.search(filter.content);
            }, true);
        }
    ])
;