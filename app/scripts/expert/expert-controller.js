'use strict';

angular.module('expert.controller', ['expert.service'])

    .controller('ExpertController', ['$scope', '$routeParams', 'Experts',
        function ($scope, $routeParams, Experts) {
            $scope.expertId = $routeParams.expertId;
            $scope.expert = Experts.get($scope.expertId);
        }]);
