define(function(require) {

    var Backbone = require('backbone');
    var $ = require('jquery');
    var Mustache = require('mustache');

    var template = require('text!../templates/editTemplate.tmpl');
    var ImageModel = require('models/imageModel');

    var EditView = Backbone.View.extend({
        el: '#edit_template',

        events: {

        },

        initialize: function(){
            var self = this;
            this.model = new ImageModel();

            return this.render();
        },

        render: function(){
            var self = this;

            var html = Mustache.to_html(template, this.model.toJSON());
            $(self.el).html(html);

        }
    });

    return EditView;
});
