Backbone = require('../libs/exoskeleton.js')
ProjectModel = require('../models/project')

ProjectCollection = Backbone.Collection.extend 
  model: ProjectModel
  url: "http://www.behance.net/v2/projects/"
  sync: (method, model, options) ->
    options.dataType = "jsonp";
    return Backbone.sync(method, model, options);
  parse: (response) ->
    return response.project

module.exports = ProjectCollection