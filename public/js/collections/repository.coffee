Backbone = require('../libs/exoskeleton.js')
RepositoryModel = require('../models/repository')
Moment = require('moment')

RepositoryCollection = Backbone.Collection.extend 
  model: RepositoryModel
  url: "https://api.github.com/users/garthdb/repos?sort=updated"
  sync: (method, model, options) ->
    options.dataType = "jsonp";
    return Backbone.sync(method, model, options);
  parse: (response) ->
    for repo in response.data
      repo.updated_at_ago = moment(repo.updated_at).fromNow()
    return response.data

module.exports = RepositoryCollection