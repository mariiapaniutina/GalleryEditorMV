define(function(require) {

    var Backbone = require('backbone');
    var $ = require('jquery');
    var Mustache = require('mustache');

    var template = require('text!../templates/editTemplate.tmpl');
    var ImageModel = require('models/imageModel');

    var EditView = Backbone.View.extend({
        el: '#edit_template',

        events: {
            "click button#editUpdate": "updateData"
        },

        initialize: function(){
            var self = this;
            this.model = new ImageModel();

            this.render();
        },

        render: function(model){
            if (!model) {
                model = this.model;
            }
            var self = this;

            var html = Mustache.to_html(template, model.toJSON());
            $(self.el).html(html);

        },

        updateData: function(e){
            e.preventDefault();

            var title = $('#edit_template #editName').val();
            var desc = $('#edit_template #editDesc').val();
            var clicks = $('#edit_template #editClicks').val();

            this.model.set({
                'clicks': clicks
            });

            this.render();
        }
    });

    return EditView;
});
