Backbone = require('../libs/exoskeleton.js')
UserCollection = require('../collections/user')
DesignItemView = require('./designItem')

View = Backbone.View.extend
  el: $('<section id="designs"/>')
  initialize: ->
    @collection = new UserCollection()
    @collection.fetch({
      success: (e)=>
        @render()
      })
  render: ->
    list = $('<ul/>')
    for model in @collection.models
      $(list).append(@renderChild(model.attributes))
    $(@el).html(list)
    $(@el).append('<footer>View my complete portfolio and works in progress on <a href="http://be.net/GarthDB">Behance</a></footer>')
  renderChild: (item) ->
    design = new DesignItemView({model:item})
    design.render()
    return design.el

module.exports = View