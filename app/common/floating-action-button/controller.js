'use strict';

angular.module('incubatorBrooklynMaterialGui.floatingActionButton', ['dndLists'])
    .directive('floatingActionButton', function () {
        return {
            restrict: 'E',
            templateUrl: 'common/floating-action-button/view.html',
            controller: 'FloatingActionButtonController'
        };
    })
    .controller('FloatingActionButtonController', function ($scope, $location, $mdDialog) {

        $scope.isViewActive = function (viewRoute) {
            return $location.path().startsWith(viewRoute);
        }

        function AddNewApplicationDialogController($scope, $mdDialog) {
            $scope.codeMirrorOptions = {
                lineWrapping: true,
                lineNumbers: true,
                mode: 'text/x-yaml'
            };

            $scope.yamlInput = " ";
            $scope.entityCatalog = {
                items: [
                    {
                        name: "Tomcat 8 Server",
                        type: "entity"
                    },
                    {
                        name: "PHP Server",
                        type: "entity"
                    },
                    {
                        name: "JBossCluster",
                        type: "entity"
                    },
                    {
                        name: "SameServerEntity",
                        type: "container",
                        items: []
                    }
                ],
                query : ""
            }

            $scope.applicationSpec = {
                items: []
            };


            $scope.hide = function () {
                $mdDialog.hide();
            };
            $scope.cancel = function () {
                $mdDialog.cancel();
            };
            $scope.success = function (application) {
                $mdDialog.hide(application);
            };
        }

        $scope.showAddNewApplicationDialog = function (ev) {
            $mdDialog.show({
                controller: AddNewApplicationDialogController,
                templateUrl: 'common/floating-action-button/add-application-dialog-template.html',
                targetEvent: ev,
                parent: angular.element(document.body)
            }).then(function (application) {
                //TODO: Adding application
                console.log(application);
            }, function () {
                // TODO: Application add cancelled
            });
        };
    }
)