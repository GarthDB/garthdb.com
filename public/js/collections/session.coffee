define ['backbone', 'models/session'], (Backbone, SessionModel) ->
	SessionCollection = Backbone.Collection.extend 
		model: SessionModel
		url: "/js/sessions.json"
		parse: (response) ->
			return response.sessions
	return SessionCollection