require.config
	paths:
		"jquery": "libs/jquery-1.9.0.min"
		"underscore": "libs/underscore"
		"backbone": "libs/backbone"
		"mustache": "libs/mustache"
		"fancybox": "fancybox/jquery.fancybox.pack"
		"timeago": "jquery.timeago"
		"backbone_analytics": "backbone.analytics"
	shim:
		"underscore":
			"deps": ["jquery"]
			"exports": "_"
		"jquery":
			"exports": "$"
		"backbone":
			"deps": ["underscore"]
			"exports": "Backbone"
		"mustache":
			"exports": "Mustache"
		"fancybox":
			"deps": ["jquery"]
			"exports": "fancybox"
		"timeago":
			"deps": ["jquery"]
			"exports": "timeago"
		"backbone_analytics":
			"deps": ["backbone"]
			"exports": "backbone_analytics"
	
require ['jquery','backbone','router','mustache', 'backbone_analytics'], ($, Backbone, Router, Mustache, Analytics) ->
	@router = new Router()