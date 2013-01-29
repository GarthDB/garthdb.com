// Generated by CoffeeScript 1.4.0
(function() {

  require.config({
    paths: {
      "jquery": "libs/jquery-1.9.0.min",
      "underscore": "libs/underscore",
      "backbone": "libs/backbone",
      "mustache": "libs/mustache",
      "fancybox": "fancybox/jquery.fancybox.pack"
    },
    shim: {
      "underscore": {
        "deps": ["jquery"],
        "exports": "_"
      },
      "jquery": {
        "exports": "$"
      },
      "backbone": {
        "deps": ["underscore"],
        "exports": "Backbone"
      },
      "mustache": {
        "exports": "Mustache"
      },
      "fancybox": {
        "deps": ["jquery"],
        "exports": "fancybox"
      }
    }
  });

  require(['jquery', 'backbone', 'router', 'mustache'], function($, Backbone, Router, Mustache) {
    return this.router = new Router();
  });

}).call(this);
