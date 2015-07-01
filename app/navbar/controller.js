'use strict';

angular.module('incubatorBrooklynMaterialGui.navbar', [])
    .controller('NavbarController', function ($scope, $location, $mdSidenav){
        $scope.toggleSidenav = function(menuId) {
            $mdSidenav(menuId).toggle();
        };


        $scope.isViewActive = function(viewRoute){
            return $location.path().startsWith(viewRoute);
        }

    })
    .directive('navbar', function () {
        return {
            restrict: 'E',
            templateUrl: 'navbar/view.html',
            controller: 'NavbarController'
        };
    });