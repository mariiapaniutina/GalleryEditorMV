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
		},
		marionette: {
			deps: [
				"backbone"
			],
			exports: "Marionette"
		}
	},
	paths: {
		jquery: '../node_modules/jquery/dist/jquery',
		underscore: '../node_modules/underscore/underscore',
		backbone: '../node_modules/backbone/backbone',
		text: '../node_modules/requirejs-text/text',
		mustache: '../node_modules/mustache/mustache',
		marionette: "../node_modules/backbone.marionette/lib/backbone.marionette",
		dust: "../node_modules/dustjs-linkedin"
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
