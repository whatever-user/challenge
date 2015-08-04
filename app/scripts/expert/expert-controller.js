'use strict';

angular.module('expert.controller', ['expert.service'])

    .controller('ExpertController', ['$scope', '$routeParams', 'Experts',
        function ($scope, $routeParams, Experts) {
            $scope.expert = Experts.get($routeParams.expertName);
        }]);
