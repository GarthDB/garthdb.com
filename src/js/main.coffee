_ = require 'underscore'
$ = require 'browserify-zepto'
Backbone = require 'exoskeleton'

Router = require './router/router'


$ ->
  console.log 'ready'
  router = new Router()
