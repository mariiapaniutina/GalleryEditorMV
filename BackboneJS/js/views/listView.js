define(function(require) {

    var Backbone = require('backbone');
    var $ = require('jquery');
    var Mustache = require('mustache');
    
    var template = require('text!../templates/list.tmpl');
    var template_item = require('text!../templates/listItemTemplate.tmpl');
    var ImageModel = require('models/imageModel');
    var ImageCollection = require('collections/ImageCollection');
    var DisplayView = require('views/displayView');
    var EditView = require('views/editView');

    var ListView = Backbone.View.extend({
    	el: '#list_template',
    	
    	initialize: function(){
    		$(this.el).html(Mustache.to_html(template, {}));
    	    return this.render();
    	},
    	
    	events:{
    		'click .photosList a': 'imageClick'
    	},
    	
		render: function(){
			var self = this;
			
			this.displayView = new DisplayView();
			this.editView = new EditView();

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
		imageClick: function(e){
			e.preventDefault();
			
			var index = $(e.currentTarget).attr('data-id') || 0;

			this.updateDisplayView(index);
			this.updateEditView(index);
			
		},
		updateDisplayView: function(index){
			var currentModel = this.collection.at(index);

			this.displayView.model = currentModel;
			this.displayView.render();
		},
		updateEditView: function(index){
			var currentModel = this.collection.at(index);

			this.editView.model = currentModel;
			this.editView.render();
		}
    });

    return ListView;
});
