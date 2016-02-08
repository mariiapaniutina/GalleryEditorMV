define(function(require) {

    var Backbone = require('backbone');
    var AppRouter = require('appRouter');

    var App = {
        start: function() {
            console.log('In the app, now.');
            var appRouter = new AppRouter();
            Backbone.history.start();
        }
    }
    return App;
});