define ['jquery', 'backbone'], ($, Backbone) ->
	View = Backbone.View.extend
		el: $('.max')
		events:
			"click a" : "click"
		initialize: ->
			@render()
		click: (event) ->
			try
				_gaq.push(['_trackEvent', 'Outbound Links' , 'MAX'])
			catch err
				console.log 'tracker error'
			
			navigate = =>
				document.location.href = event.currentTarget.href
			setTimeout navigate, 100
			return false
