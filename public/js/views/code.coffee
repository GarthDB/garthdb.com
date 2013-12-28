Backbone = require('../libs/exoskeleton.js')
RepositoryCollection = require('../collections/repository')
CodeTemplate = require('../../../views/partials/code.jade') 


View = Backbone.View.extend
  el: $('<section id="code"/>')
  initialize: ->
    @collection = new RepositoryCollection()
    @collection.fetch({
      success: (e)=>
        @render()
      })
  render: ->
    list = $('<ul/>')
    for model in @collection.models
      $(list).append('<li>'+CodeTemplate({repo: model.attributes})+'</li>')
    $(@el).html(list)

module.exports = View
