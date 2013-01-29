define ['backbone', 'mustache', 'collections/project', 'text!templates/designTemplate.html'], (Backbone, Mustache, ProjectCollection, DesignTemplate) ->
	View = Backbone.View.extend
		el: $('<section id="design"/>')
		initialize: ->

			@collection = new ProjectCollection()
			@collection.url += @id
			@collection.fetch({
				data: $.param {api_key: 'k14bSsAQqEr1edu3lyiS1yL6t9qWRulA'}
				success: (e)=>
					@render()
				})
		render: ->
			for model in @collection.models
				model.attributes.imgs = []
				for module in model.attributes.modules
					if module.type = "image"
						model.attributes.imgs.push(module)
				$(@el).html Mustache.render(DesignTemplate, model.attributes)
		# render: ->
		# 	list = $('<ul/>')
		# 	for model in @collection.models
		# 		$(list).append(@renderChild(model.attributes))
		# 	$(@el).html(list)
		# renderChild: (item) ->
		# 	design = new DesignItemView({model:item})
		# 	design.render()
		# 	return design.el
