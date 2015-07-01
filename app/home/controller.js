'use strict';

angular.module('incubatorBrooklynMaterialGui.home', ['ngRoute', 'uiGmapgoogle-maps'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'home/view.html',
            controller: 'HomeController'
        });

    }])
    .controller('HomeController', function ($scope, uiGmapGoogleMapApi) {
        $scope.map = {center: {latitude: 45, longitude: -73}, zoom: 1};

        /*
         uiGmapGoogleMapApi.then(function (maps) {
         console.log("Map loaded")
         });
         */
    })