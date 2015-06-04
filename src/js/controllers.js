angular.module('micromoira')
    .controller('HomeController', ['$scope','$timeout', function ($scope, $timeout) {
        'use strict';

        var sceneList = [];

        $scope.addScene = function (scene) {
            scene = scene || createScene();

            $scope.scenes.push(scene);

            initMaterialize();
        };

        $scope.addExit = function (scene) {
            if (!$scope.canAddExit(scene)) {
                return;
            }

            var destination = createScene();

            scene.exits.push({
                label: '',
                scene: destination.id
            });

            $scope.addScene(destination);
        };

        $scope.canAddExit = function (scene) {
            return scene.exits.length < 2;
        };

        $scope.compile = function () {
            var scenes = $scope.scenes;

            console.log(scenes);
        };

        function createScene() {
            var id = guid();

            if (sceneList.indexOf(id) !== -1) {
                return createScene();
            }

            sceneList.push(id);

            return {
                id: id,
                name: 'Scene ' + (sceneList.length),
                text: '',
                exits: []
            };
        }

        function guid() {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0,
                    v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
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
