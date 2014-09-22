_ = require 'underscore'
$ = require 'jquery'
Backbone = require 'exoskeleton'
Snap = require 'snapsvg'

Header = Backbone.View.extend({
  el: 'header.main .bounds'
  appear: ()->
    @maps = $('.bottom svg')
    for map in @maps
      map = Snap map
      path = map.select('*')
      smallScale = new Snap.Matrix()
      smallScale.scale(0.8,0.8, path.getBBox().cx, path.getBBox().cy)
      path.animate {transform: smallScale}, 2000, mina.elastic
  initialize: ()->
    setTimeout @appear, 500
})
module.exports = Header
