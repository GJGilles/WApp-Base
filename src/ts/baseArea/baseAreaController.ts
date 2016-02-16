/// <reference path='../../types/angular.d.ts' />

module WAppBase {
    export class BaseAreaController {
        
        static $inject = ["$scope"];
        constructor(
            private $scope: angular.IScope
        ){
            this.$scope.$on("$destroy", this.dispose);
        }
        private dispose = () => {}
    }
    
    export function BaseAreaDirective(): angular.IDirective {
        return {
            controller: "BaseAreaController",
            controllerAs: "baseCtrl",
            templateUrl: "baseArea/baseAreaTemplate.html"
        };
    }
    
    angular.module("WAppBase")
        .controller("BaseAreaController", BaseAreaController)
        .directive("baseArea", BaseAreaDirective);
}