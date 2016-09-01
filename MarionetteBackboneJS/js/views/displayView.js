define(function(require) {

	var Marionette = require('marionette');
	var _ = require('underscore');
	var $ = require('jquery');
	var dust = require('dust');

	var template = require('text!../templates/display.tmpl');
	var ImageModel = require('../models/imageModel');

	var DisplayView = Marionette.View.extend({
		template: '#view_template',


		updateList: function(data){
			console.log('DisplayView.updateList');
			var self = this;

			var src = template;
			// Compile the template under the name 'hello'
			var compiled1 = dust.compile(src, 'hello1');
			// Register the template with Dust
			dust.loadSource(compiled1);
			// Render the template
			dust.render('hello1', data, function(err, out) {
				$(self.template).html(out);
			});

		},
		onRender: function(){
			console.log('DisplayView.onRender');

			this.updateList({title: 'Im here'});
		}
	});



	return DisplayView;
});
