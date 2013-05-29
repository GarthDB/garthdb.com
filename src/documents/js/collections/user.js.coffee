define ['backbone', 'models/user'], (Backbone, UserModel) ->
	UserCollection = Backbone.Collection.extend 
		model: UserModel
		url: "http://www.behance.net/v2/users/garthdb/projects?api_key=k14bSsAQqEr1edu3lyiS1yL6t9qWRulA"
		sync: (method, model, options) ->
			options.dataType = "jsonp";
			return Backbone.sync(method, model, options);
		parse: (response) ->
			return response.projects
	return UserCollection
