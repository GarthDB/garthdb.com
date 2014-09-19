$ = require 'jquery'
Backbone = require 'exoskeleton'

Header = Backbone.View.extend({
  el: 'header.main .bounds'
  initialize: ()->
    console.log @el
    console.log 'header initialize'
})
module.exports = Header
