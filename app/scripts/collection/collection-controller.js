'use strict';

angular.module('collection.controller', ['collection.service'])

    .controller('CollectionController', ['$scope', '$routeParams', 'Collections',
        function ($scope, $routeParams, Collections) {
            $scope.collection = Collections.get($routeParams.collectionId);
            console.log($routeParams.collectionId + ": " + $scope.collection);
        }]);
