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

        $scope.countCharacters = function (scene) {
            var count = 22;

            count += scene.text.length;

            if (scene.exits.length > 0) {
                count += 3;

                scene.exits.forEach(function (exit) {
                    count += 25 + exit.label.length
                });
            }

            return count;
        };

        $scope.countChildren = function (scene) {
            var children = 0;

            scene.exits.forEach(function (exit) {
                if (exit.exits.length > 0) {
                    children += $scope.countChildren(exit);
                }

                children++;
            });

            return children;
        };

        $scope.compile = function () {
            $scope.story = angular.toJson(story, 4);

            $('#story').openModal();
        };

        $scope.copy = function () {
            window.prompt('Copy your story:', $scope.story);
        };

        function createScene() {
            ++sceneCount;

            return {
                label: '',
                image: '',
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
            });
        }

        function init() {
            var scene = createScene();
            scene.label = 'Scene 1';

            $scope.scenes = [scene];

            initMaterialize();
        }

        init();
    }]);
