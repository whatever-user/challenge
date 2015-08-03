'use strict';

angular.module('expert.controller', [])

    .controller('ExpertController', ['$scope', '$routeParams',
        function ($scope, $routeParams) {
            $scope.expertId = $routeParams.expertId;
        }]);
