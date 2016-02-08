define(function(require) {

    var Backbone = require('backbone');
    var $ = require('jquery');
    var ImageModel = require('models/imageModel');

    var ImageCollection = Backbone.Collection.extend({
    	url:'https://raw.githubusercontent.com/mariiapaniutina/GalleryEditorMV/master/imageList.json',
        model: ImageModel
    });

    return ImageCollection;
});