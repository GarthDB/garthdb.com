define ["zepto","backbone", "views/header", "views/home", "views/designs", "views/design"], ($, Backbone, HeaderView, HomeView, DesignsView, DesignView) ->
	Router = Backbone.Router.extend
		initialize: () ->
			Backbone.history.start({pushState: true})
			headerView = new HeaderView
			headerView.render()
		routes:
			'design': 'navDesigns'
			'design/:slug/:id': 'navDesign'
			'code': 'navCode'
			'speak': 'navSpeak'
			'write': 'navWrite'
			"*actions": "defaultAction"

		defaultAction: () ->
			if !@homeView
				@homeView = new HomeView
			@homeView.render()
			$('#content').html(@homeView.el)
		navDesigns: () ->
			if !@designsView
				@designsView = new DesignsView
			@designsView.render()
			$('#content').html(@designsView.el)
		navDesign: (slug, id) ->
			if !@designView
				@designView = new DesignView({id:id})
			@designView.render()
			$('#content').html(@designView.el)
		navCode: () ->
			console.log 'list Code'
		navSpeak: () ->
			console.log 'list Speak'
		navWrite: () ->
			console.log 'list Write'
	return Router