Backbone = require('../libs/exoskeleton.js')
SessionModel = require('../models/session')

SessionCollection = Backbone.Collection.extend 
  model: SessionModel
  url: "/js/sessions.json"
  parse: (response) ->
    return response.sessions

module.exports = SessionCollection