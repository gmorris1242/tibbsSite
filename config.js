(function() {
    angular.module("app")
    .config(function($routeProvider) {
        $routeProvider
        .when("/home", {
            template: "<page-component></page-component>"
        })
        .when("/work", {
            template: "<work-component></work-component>"
        })
        .otherwise({ redirectTo: "/home" });
    });
})();
