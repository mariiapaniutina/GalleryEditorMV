define(function(require) {

    var Backbone = require('backbone');
    var $ = require('jquery');

    var ImageModel = Backbone.Model.extend({
        defaults:{
        	title: 'Image title',
        	desc: 'Image description',
        	src: '1.png',
        	clicks: 0
        },
    });

    return ImageModel;
});