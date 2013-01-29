define ["jquery","backbone", "views/header", "views/home", "views/designs", "views/design", "views/code"], ($, Backbone, HeaderView, HomeView, DesignsView, DesignView, CodeView) ->
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
			if !@designsView
				@designsView = new DesignsView
			@designsView.render()
			if !@codeView
				@codeView = new CodeView
			@codeView.render()
		navDesigns: () ->
			if !@designsView
				@designsView = new DesignsView
			@designsView.render()
			$('#content').html(@designsView.el)
		navDesign: (slug, id) ->
			if !@designView or @designView.id isnt id
				@designView = new DesignView({id:id})
			@designView.render()
			$('#content').html(@designView.el)
		navCode: () ->
			if !@codeView
				@codeView = new CodeView
			@codeView.render()
			$('#content').html(@codeView.el)
		navSpeak: () ->
			window.location.href = 'http://lanyrd.com/profile/garthdb/';
		navWrite: () ->
			console.log 'list Write'
	return Router