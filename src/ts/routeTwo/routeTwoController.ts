/// <reference path='../../types/angular.d.ts' />

module WAppBase {
    export class RouteTwoController {
        
        static $inject = ["$scope"];
        constructor(
            private $scope: angular.IScope
        ){
            this.$scope.$on("$destroy", this.dispose);
        }
        private dispose = () => {}
    }
    
    angular.module("WAppBase")
        .controller("RouteTwoController", RouteTwoController);
}