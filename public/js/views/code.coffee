Backbone = require('../libs/exoskeleton.js')
RepositoryCollection = require('../collections/repository')
CodeTemplate = require('../templates/codeTemplate.hbs')


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
      $(list).append(CodeTemplate(model.attributes))
    $(@el).html(list)

module.exports = View
