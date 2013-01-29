define ['backbone', 'mustache', 'collections/project', 'fancybox', 'text!templates/designTemplate.html'], (Backbone, Mustache, ProjectCollection, Fancybox, DesignTemplate) ->
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
			$(@el).html('')
			for model in @collection.models
				model.attributes.imgs = []
				for module in model.attributes.modules
					if module.type = "image"
						model.attributes.imgs.push(module)
				$(@el).html Mustache.render(DesignTemplate, model.attributes)
			$(@el).find('a.fancybox').fancybox()
