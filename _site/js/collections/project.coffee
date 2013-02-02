define ['backbone', 'models/project'], (Backbone, ProjectModel) ->
	ProjectCollection = Backbone.Collection.extend 
		model: ProjectModel
		url: "http://www.behance.net/v2/projects/"
		sync: (method, model, options) ->
			options.dataType = "jsonp";
			return Backbone.sync(method, model, options);
		parse: (response) ->
			console.log response.project
			return response.project
	return ProjectCollection
