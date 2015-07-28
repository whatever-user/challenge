'use strict';

angular.module('tiles.controller', ['tiles.service', 'jquery.service'])

    .controller('TilesController', ['$scope', 'Tiles', '$',
        function ($scope, Tiles, $) {
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

            $scope.$watch('filter', function (filter, oldFilter) {
                $scope.tiles = Tiles.search(filter.content);
            }, true);
        }
    ])
;