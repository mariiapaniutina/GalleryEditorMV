define(function(require) {

    var Backbone = require('backbone');
    var $ = require('jquery');
    var Mustache = require('mustache');
    
    var template = require('text!../templates/list.tmpl');
    var template_item = require('text!../templates/listItemTemplate.tmpl');
    var ImageCollection = require('collections/ImageCollection');

	var ImageModel = require('models/imageModel');
    var DisplayView = require('views/displayView');


    var ListView = Backbone.View.extend({
    	el: '#list_template',
    	
    	initialize: function(){
    		$(this.el).html(Mustache.to_html(template, {}));
			this.render();
    	},
    	
    	events:{
    		'click .photosList a': 'listItemClick'
    	},
    	
		render: function(){

			console.log('render was called');
			var self = this;
			this.model = new ImageModel();

			this.displayView = new DisplayView({model: this.model});


		 	this.collection = new ImageCollection();
		 	this.collection.fetch({
		 		success: function(data){
		 			var index = 0;
		 			self.collection.each(function(model){
		 				model.set({item_id: index++});
		 				var txt = Mustache.to_html(template_item, model.toJSON());
		 				$(self.el).find('.photosList').append(txt);
		 			});
		 			
		 			//render the first item
		 			$('.photosList a').first().click();
		 		}
		 	});
		 	
		},
		listItemClick: function(e){
			e.preventDefault();
			
			var index = $(e.currentTarget).attr('data-id') || 0;
			this.model.set(this.collection.at(index).attributes);
			
		}
    });

    return ListView; 
});
