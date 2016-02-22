define(function(require) {

    var Backbone = require('backbone');
    var $ = require('jquery');
    var Mustache = require('mustache');
    
    var displayTemplate = require('text!../templates/displayTemplate.tmpl');
    var editTemplate = require('text!../templates/editTemplate.tmpl');
    var ImageModel = require('models/imageModel');

    var DisplayView = Backbone.View.extend({
        el: 'body',
    	viewEl: '#view_template',
        editEl: '#edit_template',
    	
    	events: {
    		'click .photoRender img': 'updateImgCounter',
            'click #editUpdate': 'updateImg'
    	},
    	
    	initialize: function(){
    		var self = this;
    		this.model = new ImageModel();
    		this.render();
    	},
    	
		render: function(){
			var self = this;
		 	
		 	this.renderTemplate(this.viewEl, displayTemplate);
            this.renderTemplate(this.editEl, editTemplate);
		 
		},

        renderTemplate: function(el, tmpl){
            var self = this;
            
            var html = Mustache.to_html(tmpl, this.model.toJSON());
            $(el).html(html);
        },
		
		updateImgCounter: function(e){
			e.preventDefault();

			var clicks = this.model.get('clicks');
			this.model.set({'clicks': clicks + 1});

			this.render();
		},

        updateImg: function(e){
            e.preventDefault();
            var title = $('#edit_template #editName').val();
            var desc = $('#edit_template #editDesc').val();
            var clicks = $('#edit_template #editClicks').val();
            this.model.set({
                'title': title,
                'desc': desc,
                'clicks': clicks
            });

            this.render();
        }
    });

    return DisplayView;
});