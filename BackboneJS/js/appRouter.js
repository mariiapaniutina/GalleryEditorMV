define(function(require) {

    var Backbone = require('backbone');
    var ListView = require('views/listView');

    var AppRouter = Backbone.Router.extend({
        routes: {
            '': 'index'
        },

        index: function() {
            console.log('Hit the base route.');
            
            var myView = new ListView();
        }
    });

    return AppRouter;

});
