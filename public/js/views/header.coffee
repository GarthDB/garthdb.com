Backbone = require('../libs/exoskeleton.js')

HeaderView = Backbone.View.extend
  el: 'header.main'
  events:
    "click nav a" : "navigate"
    "click a.logo" : "logoClickHandler"
  initialize: ->
    @render()
  navigate: (event) ->
    nav = $(event.target).html().toLowerCase()
    Backbone.history.navigate nav, true
    return false
  logoClickHandler: (event) ->
    Backbone.history.navigate '/', true
    return false

module.exports = HeaderView
