'use strict';

var incubatorBrooklynMaterialGui = angular.module('incubatorBrooklynMaterialGui', [
    'ngRoute',
    'ngMaterial',
    'incubatorBrooklynMaterialGui.navbar',
    'incubatorBrooklynMaterialGui.floatingActionButton',
    'incubatorBrooklynMaterialGui.login',
    'incubatorBrooklynMaterialGui.landing',
    'incubatorBrooklynMaterialGui.home',
    'incubatorBrooklynMaterialGui.applications'

]);

incubatorBrooklynMaterialGui.config(function($routeProvider , $mdThemingProvider) {

    // TODO: Handle redirect if the user is not logged in
    //$routeProvider.otherwise({redirectTo: '/landing'});

    $mdThemingProvider.theme('default')
        .primaryPalette('blue-grey', {
            'default': '100',
            'hue-1': '50',
            'hue-2': '200',
            'hue-3': '400'
        })
        .accentPalette('green',{
            'default': '300',
            'hue-1': '200',
            'hue-2': '100',
            'hue-3': 'A100'
        })
        .warnPalette('red')
        .backgroundPalette('grey');

});
