define(function(require) {

	var Marionette = require('marionette');

	var initRoute = function(){
		console.log('AppRouter :: initRoute');
	};

	var indexRoute = function(){
		console.log('AppRouter :: indexRoute');
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
