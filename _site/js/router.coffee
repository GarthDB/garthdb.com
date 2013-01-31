define ["jquery","backbone", "views/header", "views/home", "views/designs", "views/design", "views/code"], ($, Backbone, HeaderView, HomeView, DesignsView, DesignView, CodeView) ->
	Router = Backbone.Router.extend
		initialize: () ->
			Backbone.history.start({pushState: true})
			headerView = new HeaderView
			headerView.render()
			if !@designsView
				@designsView = new DesignsView
			@designsView.render()
			if !@codeView
				@codeView = new CodeView
			@codeView.render()
		routes:
			'design': 'navDesigns'
			'design/:slug/:id': 'navDesign'
			'code': 'navCode'
			'speak': 'navSpeak'
			'write': 'navWrite'
			"*actions": "defaultAction"
		defaultAction: () ->
			$('header.main').find('a').removeClass('selected')
			if !@homeView
				@homeView = new HomeView
			@homeView.render()
			$('#content').html(@homeView.el)
		navDesigns: () ->
			$('header.main').find('a').removeClass('selected')
			$('header.main').find("a:contains('design')").addClass('selected')
			if !@designsView
				@designsView = new DesignsView
			@designsView.render()
			$('#content').html(@designsView.el)
		navDesign: (slug, id) ->
			$('header.main').find('a').removeClass('selected')
			$('header.main').find("a:contains('design')").addClass('selected')
			if !@designView or @designView.id isnt id
				@designView = new DesignView({id:id})
			@designView.render()
			$('#content').html(@designView.el)
		navCode: () ->
			$('header.main').find('a').removeClass('selected')
			$('header.main').find("a:contains('code')").addClass('selected')
			if !@codeView
				@codeView = new CodeView
			@codeView.render()
			$('#content').html(@codeView.el)
		navSpeak: () ->
			$('header.main').find('a').removeClass('selected')
			$('header.main').find("a:contains('speak')").addClass('selected')
			window.location.href = 'http://lanyrd.com/profile/garthdb/';
		navWrite: () ->
			console.log 'list Write'
	return Router