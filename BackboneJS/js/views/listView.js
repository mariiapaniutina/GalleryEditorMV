define(function(require) {

    var Backbone = require('backbone');
    var $ = require('jquery');
    var Mustache = require('mustache');
    
    var template = require('text!../templates/list.tmpl');
    var ImageModel = require('models/ImageModel');
    var ImageCollection = require('collections/ImageCollection');

    var ListView = Backbone.View.extend({
    	el: '#list_template',
    	initialize: function(){
    		return this.render();
    	},
    	events:{
    		'click .photosList a': 'imageClick'
    	},
		render: function(){
			var self = this;
		 	
		 	var collection = new ImageCollection();
		 	collection.fetch({
		 		success: function(data){
		 			var obj = {imageList: data.toJSON()};
		 			var html = Mustache.to_html(template, obj);
		 			
		 			$(self.el).html(html);
		 		}
		 	});
		 	
		},
		imageClick: function(e){
			e.preventDefault();
			console.log(e.currentTarget);
		},
        doSomething: function() {
            console.log('My view  is doing something!');
        }
    });

    return ListView;
});