'use strict';

angular.module('incubatorBrooklynMaterialGui.home', ['ngRoute', 'uiGmapgoogle-maps', 'ui.codemirror', 'md.data.table'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'home/view.html',
            controller: 'HomeController'
        });

    }])
    .controller('HomeController', function ($scope, uiGmapGoogleMapApi) {
        $scope.dummyApplications = [
            {
                name: "Webchat",
                status: "Running",
                location: {latitude: 53.21, longitude: 6.15}
            },
            {
                name: "PetShop",
                status: "Running",
                location: {latitude: 37.25, longitude: -122.13}
            },
            {
                name: "SeaClouds",
                status: "Starting",
                location: {latitude: 37.25, longitude: -122.13}
            },
            {
                name: "Failing application",
                status: "On fire",
                location: {latitude: -21.24966, longitude: -48.41957}
            },
            {
                name: "Awesome Application",
                status: "Running",
                location: {latitude: 23.71186, longitude: 79.83696}
            },
            {
                name: "Underwater service",
                status: "Unknown",
                location: {latitude: -23.46791, longitude: 82.02676}
            }
        ]
        $scope.map = {center: {latitude: 45, longitude: -73}, zoom: 2};

        /* It leads into digest infinite cicle
            $scope.generateMarkerLabel = function (label) {
                return {
                    labelClass: 'marker_labels', labelAnchor: '12 60', labelContent: label
                }
            }
        */
        $scope.serverLog = "\r\nJava HotSpot(TM) 64-Bit Server VM warning: ignoring option MaxPermSize=256m; support was removed in 8.0\r\n _                     _    _             \r\n| |__  _ __ ___   ___ | | _| |_   _ _ __ (R)\r\n| \'_ \\| \'__\/ _ \\ \/ _ \\| |\/ \/ | | | | \'_ \\ \r\n| |_) | | | (_) | (_) |   <| | |_| | | | |\r\n|_.__\/|_|  \\___\/ \\___\/|_|\\_\\_|\\__, |_| |_|\r\n                              |___\/             0.7.0-SNAPSHOT\r\n\r\nLaunching brooklyn server (no app)\r\n2015-07-09 16:06:02,365 INFO  Starting Brooklyn web-console with passwordless access on localhost and protected access from any other interfaces (no bind address specified)\r\n2015-07-09 16:06:11,075 INFO  Started Brooklyn console at http:\/\/127.0.0.1:8081\/, running classpath:\/\/brooklyn.war\r\n2015-07-09 16:06:11,112 INFO  Persistence disabled\r\n2015-07-09 16:06:11,113 INFO  High availability disabled\r\n2015-07-09 16:06:12,056 INFO  Launched Brooklyn; will now block until shutdown command received via GUI\/API (recommended) or process interrupt."

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