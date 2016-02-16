/// <reference path='../../types/angular.d.ts' />

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
    
    angular.module("WAppBase")
        .controller("RouteOneController", RouteOneController);
}