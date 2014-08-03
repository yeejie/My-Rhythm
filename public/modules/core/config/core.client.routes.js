'use strict';

// Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider',
	function ($stateProvider, $urlRouterProvider) {
	    // Redirect to home view when route not found
		$urlRouterProvider.otherwise('/');
	    /*$urlRouterProvider
            .when('','/')
            .otherwise('/404');*/
	    
        $stateProvider.
		state('weightbmi', {
			url: '/weightbmi',
			templateUrl: 'modules/core/views/WeightBMI/chart.client.view.html'
		}).
        state('bloodpressure', {
			url: '/bloodpressure',
			templateUrl: 'modules/core/views/BloodPressure/chart.client.view.html'
		}).
        state('heartrate', {
			url: '/heartrate',
			templateUrl: 'modules/core/views/HeartRate/chart.client.view.html'
		}).
        state('resprate', {
			url: '/resprate',
			templateUrl: 'modules/core/views/RespRate/chart.client.view.html'
		}).
        state('bloodoxygen', {
			url: '/bloodoxygen',
			templateUrl: 'modules/core/views/BloodOxygen/chart.client.view.html'
		}).
        state('sleeping', {
			url: '/sleeping',
			templateUrl: 'modules/core/views/Sleeping/chart.client.view.html'
		}).
        state('fitness', {
			url: '/fitness',
			templateUrl: 'modules/core/views/Fitness/chart.client.view.html'
		}).
        state('toiletfrequency', {
			url: '/toiletfrequency',
			templateUrl: 'modules/core/views/ToiletFrequency/chart.client.view.html'
		}).
        state('emotion', {
			url: '/emotion',
			templateUrl: 'modules/core/views/Emotion/chart.client.view.html'
		}).
        state('intake', {
			url: '/intake',
			templateUrl: 'modules/core/views/Intake/chart.client.view.html'
		}).
        state('developer', {
			url: '/developer',
			templateUrl: 'modules/core/views/Developer/getstarted.client.view.html'
		}).
		state('devicesync', {
			url: '/devicesync',
			templateUrl: 'modules/core/views/DeviceSync/index.client.view.html'
		}).
        state('profile', {
			url: '/settings/profile',
			templateUrl: 'modules/core/views/User/profile.client.view.html'
		}).
		/*state('password', {
			url: '/settings/password',
			templateUrl: 'modules/core/views/User/change-password.client.view.html'
		}).*/
		/*state('accounts', {
			url: '/settings/accounts',
			templateUrl: 'modules/core/views/User/social-accounts.client.view.html'
		}).*/
		/*state('signup', {
			url: '/signup',
			templateUrl: 'modules/core/views/User/signup.client.view.html'
		}).*/
		state('signin', {
			url: '/signin',
			templateUrl: 'modules/core/views/User/signin.client.view.html'
		}).
        state('home', {
		    url: '/',
		    templateUrl: 'modules/core/views/dashboard.html'
		}).
        state('404', {
		    url: '/404',
		    templateUrl: 'modules/core/views/404.html'
		}).
        state('500', {
		    url: '/500',
		    templateUrl: 'modules/core/views/500.html'
		});

        /*var routes, setRoutes;
	    routes = ['dashboard', 'ui/typography', 'ui/buttons', 'ui/icons', 'ui/grids', 'ui/widgets', 'ui/components', 'ui/timeline', 'ui/nested-lists', 'ui/pricing-tables', 'ui/maps', 'tables/static', 'tables/dynamic', 'tables/responsive', 'forms/elements', 'forms/layouts', 'forms/validation', 'forms/wizard', 'charts/charts', 'charts/flot', 'charts/morris', 'pages/404', 'pages/500', 'pages/blank', 'pages/forgot-password', 'pages/invoice', 'pages/lock-screen', 'pages/profile', 'pages/signin', 'pages/signup', 'mail/compose', 'mail/inbox', 'mail/single', 'tasks/tasks'];
	    setRoutes = function (route) {

	        $stateProvider
		    .state(route.replace('/',''), {
		        url: '/' + route,
		        templateUrl: 'modules/core/views/' + route + '.html'
		    });

	        return 0;
	    };

	    routes.forEach(function (route) {
	        return setRoutes(route);
	    });*/

	    // Home state routing
	    /*$stateProvider
		.state('home', {
		    url: '/',
		    templateUrl: 'modules/core/views/dashboard.html'
		});*/
	}
]);