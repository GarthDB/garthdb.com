define ['jquery', 'backbone'], ($, Backbone) ->
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
			$('header.main').find('a').removeClass('selected')
			$(event.currentTarget).addClass('selected')
			return false
		logoClickHandler: (event) ->
			router.navigate '/', true
			return false
