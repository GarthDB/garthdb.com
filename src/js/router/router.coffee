Backbone = require 'exoskeleton'

Header = require '../views/header'

Router = Backbone.Router.extend
  initialize: () ->
    console.log 'router initialize'
    console.log Header
    header = new Header

module.exports = Router
