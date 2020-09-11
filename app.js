var app = angular.module("myApp", ["ngRoute"]);

// Routing
app.config(function($routeProvider){
    $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : '/home.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/about', {
                templateUrl : '/about.html',
                controller  : 'aboutController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : '/contact.html',
                controller  : 'contactController'
            })

            .otherwise({redirectTo: '/'});

});

    // create the controller and inject Angular's $scope
    app.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    });

    app.controller('aboutController', function($scope) {
        $scope.message = 'Look! I am an about page.';
    });

    app.controller('contactController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });
