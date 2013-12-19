define ['backbone', 'models/repository', 'timeago'], (Backbone, RepositoryModel, TimeAgo) ->
	RepositoryCollection = Backbone.Collection.extend 
		model: RepositoryModel
		url: "https://api.github.com/users/garthdb/repos?sort=updated"
		sync: (method, model, options) ->
			options.dataType = "jsonp";
			return Backbone.sync(method, model, options);
		parse: (response) ->
			for repo in response.data
				repo.updated_at_ago = $.timeago(repo.updated_at)
			return response.data
	return RepositoryCollection
