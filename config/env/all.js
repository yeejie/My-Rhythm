'use strict';

module.exports = {
	app: {
		title: 'My Rhythm',
		description: 'Wellness Made Easier',
		keywords: 'rhythm, wellness, IoT'
	},
	port: process.env.PORT || 3000,
	templateEngine: 'swig',
	sessionSecret: 'MYRHYTHM',
	sessionCollection: 'sessions',
	assets: {
		lib: {
			css: [

			],
			js: [
                'public/lib/jquery/dist/jquery.min.js',
				'public/lib/angular/angular.js',
				'public/lib/angular-resource/angular-resource.js',
				'public/lib/angular-animate/angular-animate.js',
				'public/lib/angular-ui-router/release/angular-ui-router.js',
				'public/lib/angular-ui-utils/ui-utils.js',
				'public/lib/angular-bootstrap/ui-bootstrap-tpls.js',
                'public/lib/angular-socket-io/socket.js',
                'public/lib/socket.io-client/socket.io.js',
                'public/lib/jquery-spinner/dist/jquery.spinner.min.js',
                'public/lib/seiyria-bootstrap-slider/dist/bootstrap-slider.min.js',
                'public/lib/jquery-steps/build/jquery.steps.min.js',
                'public/lib/toastr/toastr.min.js',
                'public/lib/bootstrap-file-input/bootstrap.file-input.js',
                'public/lib/jquery.slimscroll/jquery.slimscroll.min.js',
                'public/lib/raphael/raphael-min.js',
                'public/lib/morris.js/morris.js',
                'public/lib/flot/jquery.flot.js',
                'public/lib/flot/jquery.flot.resize.js',
                'public/lib/flot/jquery.flot.pie.js',
                'public/lib/flot/jquery.flot.stack.js',
                'public/lib/flot.tooltip/js/jquery.flot.tooltip.min.js',
                'public/lib/flot/jquery.flot.time.js',
                'public/lib/gauge.js/dist/gauge.min.js',
                'public/lib/jquery.easy-pie-chart/dist/angular.easypiechart.min.js',
                'public/lib/angular-wizard/dist/angular-wizard.min.js',
                'public/lib/textAngular/dist/textAngular-sanitize.min.js',
                'public/lib/textAngular/dist/textAngular.min.js',
                'public/lib/angular-ui-tree/dist/angular-ui-tree.min.js',
                'public/lib/ngmap/dist/ng-map.min.js',
                'public/lib/jqvmap/jqvmap/jquery.vmap.min.js',
                'public/lib/jqvmap/jqvmap/maps/jquery.vmap.world.js',
                'public/lib/jqvmap/jqvmap/maps/jquery.vmap.usa.js',
                'public/lib/jqvmap/jqvmap/maps/jquery.vmap.europe.js',
                'public/lib/ng-tags-input/ng-tags-input.min.js',
                'public/lib/intro.js/minified/intro.min.js',
                'public/lib/angular-intro.js/build/angular-intro.min.js'
			]
		},
		css: [
			'public/modules/**/styles/*.css',
            'public/lib/font-awesome/css/font-awesome.min.css',
            'public/lib/weather-icons/css/weather-icons.min.css'
		],
		js: [
			'public/config.js',
			'public/application.js',
			'public/modules/*/*.js',
            'public/modules/*/controllers/*/*.js',
			'public/modules/*/*[!tests]*/*.js'
		],
		tests: [
			'public/lib/angular-mocks/angular-mocks.js',
			'public/modules/*/tests/*.js'
		]
	}
};