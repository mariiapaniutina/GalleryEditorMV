define(function(require) {

    var Backbone = require('backbone');
    var $ = require('jquery');
    var Mustache = require('mustache');
    
    var template = require('text!../templates/displayTemplate.tmpl');

	var EditView = require('views/editView');

    var DisplayView = Backbone.View.extend({
    	el: '#view_template',
    	
    	events: {
    		'click .photoRender img': 'clicksUpdate'
    	},
    	
    	initialize: function(){
    		var self = this;

			this.listenTo(this.model, 'change', this.render);

			this.editView = new EditView({model: this.model});

    		return this.render();
    	},
    	
		render: function(){
			var self = this;
		 	
		 	var html = Mustache.to_html(template, this.model.toJSON());
		 	$(self.el).html(html);
		 
		},
		
		clicksUpdate: function(e){
			e.preventDefault();

			var clicks = +this.model.get('clicks');
			this.model.set({'clicks': clicks + 1});

		}
    });

    return DisplayView;
});