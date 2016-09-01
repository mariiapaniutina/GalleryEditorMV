define(function(require) {

	var Marionette = require('marionette');
	var ListView = require('views/listView');
	var DisplayView = require('views/displayView');

	var initRoute = function(){
		console.log('AppRouter :: initRoute');
	};

	var indexRoute = function(){
		console.log('AppRouter :: indexRoute');

		var list = new ListView();
		list.render();

		var display = new DisplayView();
		display.render();
	};

	var AppRouter = Marionette.AppRouter.extend({
		routes: {
			'': 'index'
		},

		initialize: initRoute,

		index: indexRoute
	});

	return AppRouter;

});
