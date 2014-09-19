React = require 'react'
Header = require './components/header'
$ = require 'browserify-zepto'
$ ->
  React.renderComponent (Header {}), $('header.main .bounds')[0]
