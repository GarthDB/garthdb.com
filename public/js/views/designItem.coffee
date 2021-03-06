Backbone = require('../libs/exoskeleton.js')

View = Backbone.View.extend
  tagName: "li"
  render: ->
    splitURL = @model.url.split('/')
    @model.slug = splitURL[splitURL.length - 2]
    imgURL = if window.devicePixelRatio = 2 then @model.covers['404'] else @model.covers['202']
    imgEl = $("<img src='#{imgURL}' width='202' height='158' alt='#{@model.caption}' />")
    linkEl = $("<a href='/design/#{@model.slug}/#{@model.id}'/>").append(imgEl)
    detailsEl = $("<div class='details'><h3>#{@model.name}</h3></div>")
    $(linkEl).append(detailsEl)
    $(@el).html(linkEl)
    $(linkEl).click (event)->
      Backbone.history.navigate $(event.currentTarget).attr('href'), true
      return false

module.exports = View