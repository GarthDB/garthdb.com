Backbone = require 'exoskeleton'

Header = require '../views/header'

Router = Backbone.Router.extend
  initialize: () ->
    header = new Header

module.exports = Router
