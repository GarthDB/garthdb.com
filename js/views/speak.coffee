define ['backbone', 'collections/session'], (Backbone, SessionCollection) ->
	View = Backbone.View.extend
		el: $('<section id="speak"/>')
		initialize: ->
			@collection = new SessionCollection()
			@collection.fetch({
				success: (e)=>
					@render()
				})
		render: ->
			console.log @collection.models