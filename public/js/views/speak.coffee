Backbone = require('../libs/exoskeleton.js')
SessionCollection = require('../collections/session')
SessionTemplate = require('../../../views/partials/session.jade')
Moment = require('moment')

View = Backbone.View.extend
  el: $('<section id="speak"/>')
  initialize: ->
    @collection = new SessionCollection()
    @collection.fetch({
      success: (e)=>
        @render()
      })
  render: ->
    @collection.models.sort (a,b) ->
      aDate = new Date(a.attributes.date)
      bDate = new Date(b.attributes.date)
      return bDate - aDate
    for model in @collection.models
      model.attributes.date_ago = moment(model.attributes.date).fromNow()
      model.attributes.tagger = model.attributes.tags.join(", ")
      $(@el).append(SessionTemplate({session: model.attributes}))

module.exports = View