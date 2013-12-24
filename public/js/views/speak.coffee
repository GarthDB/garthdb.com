define ['backbone', 'mustache', 'collections/session', 'text!templates/sessionTemplate.html', 'moment'], (Backbone, Mustache, SessionCollection, SessionTemplate, Moment) ->
	View = Backbone.View.extend
		el: $('<section id="speak"/>')
		initialize: ->
			@collection = new SessionCollection()
			@collection.fetch({
				success: (e)=>
					@render()
				})
		render: ->
			@collection.models.sort (a,b) ->
				aDate = new Date(a.attributes.date)
				bDate = new Date(b.attributes.date)
				return bDate - aDate
			for model in @collection.models
				# $.timeago.settings.allowFuture = true
				model.attributes.date_ago = moment(model.attributes.date).fromNow()
				model.attributes.tagger = model.attributes.tags.join(", ")
				$(@el).append(Mustache.render(SessionTemplate, model.attributes))