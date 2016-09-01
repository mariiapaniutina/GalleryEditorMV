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
				"backbone",
				"backbone.radio"
			],
			exports: "Marionette"
		},
		'backbone.radio':{
			deps: [
				'underscore',
				'backbone'
			],
			exports: 'BRadio'
		},
		dust: {
			exports: "dust"
		}
	},
	paths: {
		jquery: '../node_modules/jquery/dist/jquery',
		underscore: '../node_modules/underscore/underscore',
		backbone: '../node_modules/backbone/backbone',
		'backbone.radio': '../node_modules/backbone.radio/build/backbone.radio',
		text: '../node_modules/requirejs-text/text',
		mustache: '../node_modules/mustache/mustache',
		marionette: "../node_modules/backbone.marionette/lib/backbone.marionette",
		dust: "../node_modules/dustjs-linkedin/dist/dust-full"
	}
});

require([
	'jquery',
	'underscore',
	'backbone',
	'backbone.radio',
	'marionette',
	'dust',
	'app'
], function ($, _, Backbone,BRadio , Mn, dust, App) {

	var app = new App();
	app.start();

});
