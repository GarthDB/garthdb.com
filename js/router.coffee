define ["jquery", 'mustache', "backbone", "views/header", "views/home", "views/designs", "views/design", "views/code", "text!templates/resumeTemplate.html"], ($, Mustache, Backbone, HeaderView, HomeView, DesignsView, DesignView, CodeView, ResumeHTML) ->
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
			if !@resumeView
				@resumeView = Mustache.render(ResumeHTML)
		routes:
			'resume': 'navResume'
			'design': 'navDesigns'
			'design/:slug/:id': 'navDesign'
			'code': 'navCode'
			'speak': 'navSpeak'
			'write': 'navWrite'
			"*actions": "defaultAction"
		defaultTitle: "Garth Braithwaite"
		defaultAction: () ->
			$('header.main').find('a').removeClass('selected')
			if !@homeView
				@homeView = new HomeView
			@homeView.render()
			$('#content').html(@homeView.el)
			$('title').html(@defaultTitle)
		navDesigns: () ->
			$('header.main').find('a').removeClass('selected')
			$('header.main').find("a:contains('design')").addClass('selected')
			if !@designsView
				@designsView = new DesignsView
			@designsView.render()
			$('#content').html(@designsView.el)
			$('title').html("#{@defaultTitle} | Design")
		navDesign: (slug, id) ->
			$('header.main').find('a').removeClass('selected')
			$('header.main').find("a:contains('design')").addClass('selected')
			if !@designView or @designView.id isnt id
				@designView = new DesignView({id:id})
			@designView.render()
			$('#content').html(@designView.el)
			$('title').html("#{@defaultTitle} | Design")
		navCode: () ->
			$('header.main').find('a').removeClass('selected')
			$('header.main').find("a:contains('code')").addClass('selected')
			if !@codeView
				@codeView = new CodeView
			@codeView.render()
			$('#content').html(@codeView.el)
			$('title').html("#{@defaultTitle} | Code")
		navSpeak: () ->
			$('header.main').find('a').removeClass('selected')
			$('header.main').find("a:contains('speak')").addClass('selected')
			window.location.href = 'http://lanyrd.com/profile/garthdb/';
		navResume: () ->
			$('header.main').find('a').removeClass('selected')
			$('header.main').find("a:contains('resume')").addClass('selected')
			if !@resumeView
				@resumeView = Mustache.render(ResumeHTML)
			$('#content').html(@resumeView)
			$('title').html("#{@defaultTitle} | Resumé")
		navWrite: () ->
			console.log 'list Write'
	return Router