define ['backbone', 'collections/user', 'views/designItem'], (Backbone, UserCollection, DesignItemView) ->
	View = Backbone.View.extend
		el: $('<section id="designs"/>')
		initialize: ->
			@collection = new UserCollection()
			@collection.fetch({
				success: (e)=>
					@render()
				})
		render: ->
			list = $('<ul/>')
			for model in @collection.models
				$(list).append(@renderChild(model.attributes))
			$(@el).html(list)
		renderChild: (item) ->
			design = new DesignItemView({model:item})
			design.render()
			return design.el
