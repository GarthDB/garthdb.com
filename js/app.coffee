require.config
	paths:
		"jquery": "libs/jquery-1.9.0.min"
		"underscore": "libs/underscore"
		"backbone": "libs/backbone"
		"mustache": "libs/mustache"
		"fancybox": "fancybox/jquery.fancybox.pack"
		"timeago": "jquery.timeago"
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
	
require ['jquery','backbone','router','mustache'], ($, Backbone, Router, Mustache) ->
	@router = new Router()