var app = angular.module('sounder', ['ngRoute']).config(function($routeProvider) {

    $routeProvider
        .when('/#/', {
            templateUrl: 'index.html',
            controller: 'mainCtrl'
        })
        .when('/tracks', {
            templateUrl: '/tracks/tracksTemplate.html',
            controller: 'tracksCtrl'
        })
        .when('/user', {
            templateUrl: 'users/usersTemplate.html',
            controller: 'usersCtrl'
        })
        .otherwise({
            redirectTo: '/'
        })

});