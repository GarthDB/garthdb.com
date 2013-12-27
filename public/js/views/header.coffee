Backbone = require('../libs/exoskeleton.js')

HeaderView = Backbone.View.extend
  el: $('header.main')
  events:
    "click nav a" : "navigate"
    "click a.logo" : "logoClickHandler"
  initialize: ->
    console.log $('header.main nav a')
    @render()
  navigate: (event) ->
    console.log 'click nav a'
    nav = $(event.target).html().toLowerCase()
    router.navigate nav, true
    return false
  logoClickHandler: (event) ->
    router.navigate '/', true
    return false

module.exports = HeaderView
