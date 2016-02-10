define(function(require) {

    var Backbone = require('backbone');
    var $ = require('jquery');
    var Mustache = require('mustache');
    
    var template = require('text!../templates/list.tmpl');
    var ImageModel = require('models/ImageModel');
    var ImageCollection = require('collections/ImageCollection');
    var DisplayView = require('views/displayView');

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
			this.displayView = new DisplayView();
		 	
		 	this.collection = new ImageCollection();
		 	this.collection.fetch({
		 		success: function(data){
		 			
		 			var obj = {imageList: data.toJSON()};
		 			var html = Mustache.to_html(template, obj);
		 			
		 			self.displayView.model.set({
						"title": data.toJSON()[0].title,
						"src": data.toJSON()[0].src,
						"desc": data.toJSON()[0].desc
					});
					self.displayView.render();
		 			
		 			$(self.el).html(html);
		 		}
		 	});
		 	
		 	this.model = new ImageModel();
		},
		imageClick: function(e){
			e.preventDefault();
			
			var title = $(e.currentTarget).html();
			var src = $(e.currentTarget).attr('data-src');
			var desc = $(e.currentTarget).find('.desc').html();
			
			this.displayView.model.set({
				"title": title,
				"src": src,
				"desc": desc
			});
			this.displayView.render();
			
		},
        doSomething: function() {
            console.log('My view  is doing something!');
        }
    });

    return ListView;
});