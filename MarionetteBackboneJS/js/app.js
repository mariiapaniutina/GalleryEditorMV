define(function(require) {

    var Marionette = require('marionette');
	var Router = require('appRouter');

	var Application = new Marionette.Application();

	var onAppBeforeStart = function(){
		console.log('Application :: onAppBeforeStart');

		//also lets set up our "global environment"
		window.MBJS = window.MBJS || {};

		//lets save all our collection
		window.MBJS.Collection = window.MBJS.Collection || {};

	};

	var onAppStart = function(){
		console.log('Application :: onAppStart');

		window.MBJS.Router = new Router();

		//starting history
		Backbone.history.start();
	};

	Application.on('before:start', onAppBeforeStart);
	Application.on('start', onAppStart);

    return Application;
});
