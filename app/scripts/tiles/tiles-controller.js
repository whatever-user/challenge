'use strict';

angular.module('tiles.controller', ['tiles.service', 'jquery.service', 'tiles.filters', 'ngSanitize'])

    .controller('TilesController', ['$scope', 'Tiles', '$', 'highlightTilesFilter',
        function ($scope, Tiles, $, highlightTilesFilter) {
            $scope.tiles = Tiles.all();
            $scope.filter = {
                content: ''
            };

            $scope.newTile = {
                title: '',
                tags: ''
            };

            $scope.create = function () {
                var result = Tiles.create($scope.newTile.title, $scope.newTile.tags);
                if (result) {
                    $scope.tiles = Tiles.all();
                    $scope.newTile.title = '';
                    $scope.newTile.tags = '';
                } else {
                    $(".alert").fadeTo(3000, 100);
                    window.setTimeout(function () {
                        $(".alert").hide();
                    }, 5000);
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