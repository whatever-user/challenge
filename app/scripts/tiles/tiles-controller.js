'use strict';

angular.module('tiles.controller', ['tiles.service'])

    .controller('TilesController', ['$scope',
        function ($scope) {
            $scope.name = "Eder";
        }]);