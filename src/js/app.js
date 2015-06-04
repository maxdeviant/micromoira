angular.module('micromoira', ['ngRoute']);

angular.module('micromoira')
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        'use strict';

        $routeProvider
            .when('/', {
                controller: 'HomeController',
                templateUrl: 'partials/editor.html'
            })
            .otherwise({
                redirectTo: '/'
            });

            // $locationProvider.html5Mode(true);
    }]);
