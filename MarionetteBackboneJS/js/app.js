define(function(require) {

    var Marionette = require('marionette');

	var Application = new Marionette.Application();

	var onAppBeforeStart = function(){
		console.log('Before application started....');
	};

	var onAppStart = function(){
		console.log('Application has been started');
	};

	Application.on('before:start', onAppBeforeStart);
	Application.on('start', onAppStart);

    return Application;
});
