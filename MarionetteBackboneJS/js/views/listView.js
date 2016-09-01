define(function(require) {

	var Marionette = require('marionette');
	var _ = require('underscore');
	var $ = require('jquery');
	var dust = require('dust');

	var template = require('text!../templates/list.tmpl');
	var ImageModel = require('../models/imageModel');
	var DisplayView = require('views/displayView');

	var ListView = Marionette.View.extend({
		template: '#list_template',

		regions: {
			firstRegion: '#first-region'
		},

		model: new ImageModel(),

		modelEvents: {
			'change:attribute': 'modelChangeUpdate'
		},

		modelChangeUpdate: function(attr){
			console.log('Model has been changed on attribute :: ', attr);
			this.onRender();
		},

		updateList: function(data){
			console.log('ListView.updateList');
			var self = this;

			console.log('data', data);
			var src = template;
			// Compile the template under the name 'hello'
			var compiled = dust.compile(src, 'hello');
			// Register the template with Dust
			dust.loadSource(compiled);
			// Render the template
			dust.render('hello', data, function(err, out) {
				$(self.template).html(out);
			});

			self.showChildView('firstRegion', new DisplayView());

		},
		onRender: function(){
			console.log('ListView.onRender');
			var self = this;
			console.log('model', this.model);
			this.model.fetch({
				success:function(data){
					console.log('data', data);
					self.updateList(data.attributes);

				},
				error: function(err){
					console.log('error', err);
				}
			})
		}
	});



	return ListView;
});
