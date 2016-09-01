define(function(require) {

	var Backbone = require('backbone');

	var ImageModel = Backbone.Model.extend({
		url: function(){
			return "/imageListUp.json";
		}
	});

	return ImageModel;
});
