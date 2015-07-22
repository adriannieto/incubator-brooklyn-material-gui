'use strict';

angular.module('incubatorBrooklynMaterialGui.applications', ['ngRoute', 'uiGmapgoogle-maps', 'ui.codemirror', 'md.data.table'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/applications', {
            templateUrl: 'applications/view.html',
            controller: 'ApplicationsController'
        });

    }])
    .controller('ApplicationsController', function ($scope, uiGmapGoogleMapApi) {
        $scope.dummyApplications = [];
        $scope.map = {center: {latitude: 45, longitude: -73}, zoom: 2};

        /* It leads into digest infinite cicle
            $scope.generateMarkerLabel = function (label) {
                return {
                    labelClass: 'marker_labels', labelAnchor: '12 60', labelContent: label
                }
            }
        */
        $scope.dataTableOptions = {
            limit: 4,
            length: $scope.dummyApplications.length,
            filter: '',
            order: 'name',
            page: 1,
            skip: function (item, index) {
                return index >= ($scope.dataTableOptions.limit * ($scope.dataTableOptions.page - 1));
            }
        };


        $scope.codeMirrorOptions = {
            lineWrapping: true,
            readOnly: 'nocursor',
            mode: 'text/x-sh'
        };

        /*
         uiGmapGoogleMapApi.then(function (maps) {
         console.log("Map loaded")
         });
         */
    }
)