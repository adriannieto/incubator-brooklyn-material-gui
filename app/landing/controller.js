'use strict';

angular.module('incubatorBrooklynMaterialGui.landing', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/landing', {
            templateUrl: 'landing/view.html'
        })
    }])
    .controller('LandingController', function ($scope) {

    });