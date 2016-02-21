define(function(require) {

    var Backbone = require('backbone');
    var $ = require('jquery');
    var ImageModel = require('models/imageModel');

    var ImageCollection = Backbone.Collection.extend({
    	url:'https://raw.githubusercontent.com/mariiapaniutina/GalleryEditorMV/master/imageList.json',
        model: ImageModel,
        initialize: function(){
            this.on('change', function(){
                console.log('model from collection was changed');
            }, this);
        }
    });

    return ImageCollection;
});