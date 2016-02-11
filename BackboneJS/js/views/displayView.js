define(function(require) {

    var Backbone = require('backbone');
    var $ = require('jquery');
    var Mustache = require('mustache');
    
    var template = require('text!../templates/display.tmpl');
    var ImageModel = require('models/ImageModel');

    var DisplayView = Backbone.View.extend({
    	el: '#view_template',
    	initialize: function(){
    		var self = this;
    		this.model = new ImageModel();
    		this.model.on('change', function(){self.render()}, this);
    		return this.render();
    	},
		render: function(){
			var self = this;
		 	
		 	var html = Mustache.to_html(template, this.model.toJSON());
		 	$(self.el).html(html);
		 
		}
    });

    return DisplayView;
});