define(function(require) {

	var Marionette = require('marionette');
	var _ = require('underscore');
	var $ = require('jquery');
	var dust = require('dust');

	var RootView = Marionette.View.extend({
		template: _.template('<h1>Marionette says hello!</h1>')
	});

	return RootView;
});
