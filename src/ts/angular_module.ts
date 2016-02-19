/// <reference path='../types/angular.d.ts' />

module WAppBase {
    export var WAppBase = angular.module('WAppBase', ["ngRoute"]);
    
    export var SPECIAL_NAMES = {
        MODULE_NAME: "WAppBase"
    };
    
    WAppBase.config(['$routeProvider', ($routeProvider: any) => {
        $routeProvider
        .when('/routeOne', {
            templateUrl: "routeOne/routeOneTemplate.html",
            controller: "RouteOneController",
            controllerAs: "rTwoCtrl"
        })
        .when('/routeTwo', {
            templateUrl: "routeTwo/routeTwoTemplate.html",
            controller: "RouteTwoController",
            controllerAs: "rOneCtrl"
        })
        .otherwise({
            redirectTo: '/routeOne'
        })
    }]);
}