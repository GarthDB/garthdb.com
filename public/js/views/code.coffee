define ['backbone', 'mustache', 'collections/repository', 'text!templates/codeTemplate.html'], (Backbone, Mustache, RepositoryCollection, CodeTemplate) ->
	View = Backbone.View.extend
		el: $('<section id="code"/>')
		initialize: ->
			@collection = new RepositoryCollection()
			@collection.fetch({
				success: (e)=>
					@render()
				})
		render: ->
			list = $('<ul/>')
			for model in @collection.models
				$(list).append(Mustache.render(CodeTemplate, model.attributes))
			$(@el).html(list)
