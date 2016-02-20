'use strict';

require.config({
	shim: {
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		}
	},
	paths: {
		jquery: '../node_modules/jquery/dist/jquery',
		underscore: '../node_modules/underscore/underscore',
		backbone: '../node_modules/backbone/backbone',
		text: '../node_modules/requirejs-text/text',
		mustache: '../node_modules/mustache/mustache'
	}
});

require([
	'jquery',
	'underscore',
	'backbone',
	'app'
], function ($, _, Backbone, App) {

	App.start();

});