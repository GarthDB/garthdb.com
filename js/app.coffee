require.config
	paths:
		"zepto": "libs/zepto"
		"underscore": "libs/underscore"
		"backbone": "libs/backbone"
		"mustache": "libs/mustache"
	shim:
		"underscore":
			"deps": ["zepto"]
			"exports": "_"
		"zepto":
			"exports": "$"
		"backbone":
			"deps": ["underscore"]
			"exports": "Backbone"
		"mustache":
			"exports": "Mustache"
	
require ['zepto','backbone','router','mustache'], ($, Backbone, Router, Mustache) ->
	@router = new Router()