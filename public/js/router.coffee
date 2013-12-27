Backbone = require('./libs/exoskeleton.js')
$ = require('./libs/zepto.min.js')
HeaderView = require('./views/header')
HomeView = require('./views/home')
DesignsView = require('./views/designs')
DesignView = require('./views/design')
CodeView = require('./views/code')
SpeakView = require('./views/speak')
ResumeHTML = require('./templates/resumeTemplate.hbs')

Router = Backbone.Router.extend
	first: true
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
		if !@speakView
			@speakView = new SpeakView
		@speakView.render()
		if !@resumeView
			@resumeView = ResumeHTML()
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
		if(@first)
			@first = false
		else
			$('header.main').find('a').removeClass('selected')
			if !@homeView
				@homeView = new HomeView
			@homeView.render()
			$('#content').html(@homeView.el)
			$('title').html(@defaultTitle)
	navDesigns: () ->
		$('header.main').find('a').removeClass('selected')
		$('header.main').find("a.designNavItem").addClass('selected')
		if(@first)
			@first = false
		else
			if !@designsView
				@designsView = new DesignsView
			@designsView.render()
			$('#content').html(@designsView.el)
			$('title').html("#{@defaultTitle} | Design")
	navDesign: (slug, id) ->
		$('header.main').find('a').removeClass('selected')
		$('header.main').find("a.designNavItem").addClass('selected')
		if(@first)
			@first = false
		else
			if !@designView or @designView.id isnt id
				@designView = new DesignView({id:id})
			@designView.render()
			$('#content').html(@designView.el)
			$('title').html("#{@defaultTitle} | Design")
	navCode: () ->
		$('header.main').find('a').removeClass('selected')
		$('header.main').find("a.codeNavItem").addClass('selected')
		if(@first)
			@first = false
		else
			if !@codeView
				@codeView = new CodeView
			@codeView.render()
			$('#content').html(@codeView.el)
			$('title').html("#{@defaultTitle} | Code")
	navSpeak: () ->
		$('header.main').find('a').removeClass('selected')
		$('header.main').find("a.speakNavItem").addClass('selected')
		if(@first)
			@first = false
		else
			if !@speakView
				@speakView = new SpeakView
			$('#content').html(@speakView.el)
			$('title').html("#{@defaultTitle} | Speak")
	navResume: () ->
		$('header.main').find('a').removeClass('selected')
		$('header.main').find("a.resumeNavItem").addClass('selected')
		if(@first)
			@first = false
		else
			if !@resumeView
				@resumeView = ResumeHTML()
			$('#content').html(@resumeView)
			$('title').html("#{@defaultTitle} | Resumé")
	navWrite: () ->
		console.log 'list Write'

module.exports = Router