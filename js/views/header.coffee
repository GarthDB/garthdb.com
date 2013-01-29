define ['zepto', 'backbone'], ($, Backbone) ->
	View = Backbone.View.extend
		el: $('header.main')
		events:
			"click nav a" : "navigate"
			"click a.logo" : "logoClickHandler"
		initialize: ->
			@render()
		navigate: (event) ->
			nav = $(event.target).html().toLowerCase()
			router.navigate nav, true
			return false
		logoClickHandler: (event) ->
			router.navigate '/', true
			return false
