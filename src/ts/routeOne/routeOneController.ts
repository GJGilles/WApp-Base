/// <reference path='../angular_module.ts' />

module WAppBase {
    export class RouteOneController {
        
        static $inject = ["$scope"];
        constructor(
            private $scope: angular.IScope
        ){
            this.$scope.$on("$destroy", this.dispose);
        }
        private dispose = () => {}
    }
    
    angular.module(SPECIAL_NAMES.MODULE_NAME)
        .controller("RouteOneController", RouteOneController);
}