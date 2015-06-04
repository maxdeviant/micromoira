angular.module('micromoira')
    .controller('HomeController', ['$scope','$timeout', function ($scope, $timeout) {
        'use strict';

        $scope.addScene = function () {
            $scope.scenes.push({
                name: '',
                text: '',
                exits: []
            });

            initCollapsible();
        };

        function initCollapsible() {
            $timeout(function () {
                $('.collapsible').collapsible();
            });
        }

        function init() {
            $scope.scenes = [{
                name: 'Scene 1',
                text: '',
                exits: []
            }];

            initCollapsible();
        }

        init();
    }]);
