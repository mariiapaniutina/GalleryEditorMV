define(function(require) {

    var Backbone = require('backbone');
    var $ = require('jquery');
    var Mustache = require('mustache');

    var template = require('text!../templates/editTemplate.tmpl');

    var EditView = Backbone.View.extend({
        el: '#edit_template',

        events: {
            "click button#editUpdate": "updateData"
        },

        initialize: function(){
            this.listenTo(this.model, 'change', this.render);
            this.render();
        },

        render: function(){
            var self = this;

            var html = Mustache.to_html(template, this.model.toJSON());
            $(self.el).html(html);

        },

        updateData: function(e){
            e.preventDefault();

            var title = $('#edit_template #editName').val();
            var desc = $('#edit_template #editDesc').val();
            var clicks = $('#edit_template #editClicks').val();

            this.model.set({
                'desc': desc,
                'title': title,
                'clicks': clicks
            });

        }
    });

    return EditView;
});
