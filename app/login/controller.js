'use strict';

angular.module('incubatorBrooklynMaterialGui.login', ['ngRoute'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/login', {
            templateUrl: 'login/view.html'
        })
    }])
    .controller('LoginController', function ($scope) {
        //TODO: Move to Brooklyn API
        $scope.loginCredentials.email = undefined;
        $scope.loginCredentials.password = undefined;
    });