'use strict';

angular.module('tiles.controller', ['tiles.service', 'tiles.filters', 'ngSanitize'])

    .controller('TilesController', ['$scope', 'Tiles', 'highlightTilesFilter', '$timeout', '$q',
        function ($scope, Tiles, highlightTilesFilter, $timeout, $q) {
            $scope.tiles = Tiles.all();
            $scope.filter = {
                content: ''
            };

            $scope.alert = {
                hidden: true,
                timeout: 1,
                message: ''
            };

            $scope.newTile = {
                title: '',
                tags: ''
            };

            $scope.showAlert = function (message) {
                if (message && message != '') {
                    $scope.alert.message = message;
                } else {
                    $scope.alert.message = 'Oops, something went wrong... :(';
                }

                $scope.alert.hidden = false;

                return $timeout(function () {
                    $scope.alert.hidden = true;
                }, 5000);
            };

            $scope.create = function () {
                var result = Tiles.create($scope.newTile.title, $scope.newTile.tags);
                if (result) {
                    $scope.tiles = Tiles.all();
                    $scope.newTile.title = '';
                    $scope.newTile.tags = '';
                } else {
                    $scope.showAlert("Couldn't create the tile. Don't forget the title");
                }
            };

            $scope.like = function (tileId) {
                Tiles.like(tileId);
            };

            $scope.follow = function (tileId) {
                Tiles.follow(tileId);
            };

            $scope.$watch('filter', function (filter, oldFilter) {
                if (filter.content != oldFilter.content) {
                    $scope.tiles = highlightTilesFilter(Tiles.search(filter.content), filter.content);
                }
            }, true);
        }
    ])
;