angular.module('micromoira')
    .controller('HomeController', ['$scope','$timeout', function ($scope, $timeout) {
        'use strict';

        var sceneCount = 0;

        $scope.addExit = function (scene) {
            if (!$scope.canAddExit(scene)) {
                return;
            }

            var destination = createScene();

            scene.exits.push(destination);

            addScene(destination);
        };

        $scope.canAddExit = function (scene) {
            return scene.exits.length < 2;
        };

        $scope.compile = function () {
            var story = $scope.scenes[0];

            console.log(story);
        };

        function createScene() {
            return {
                name: 'Scene ' + (++sceneCount),
                text: '',
                exits: []
            };
        }

        function addScene(scene) {
            scene = scene || createScene();

            $scope.scenes.push(scene);

            initMaterialize();
        }

        function initMaterialize() {
            $timeout(function () {
                $('.collapsible').collapsible();
                $('textarea[name="text"]').characterCounter();
            });
        }

        function init() {
            var scene = createScene();
            scene.name = 'Scene 1';

            $scope.scenes = [scene];

            initMaterialize();
        }

        init();
    }]);
