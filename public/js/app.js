require.config({
  paths: {
    "jquery": "libs/zepto.min",
    "underscore": "libs/underscore",
    "backbone": "libs/exoskeleton.min",
    "mustache": "libs/mustache",
    "fancybox": "fancybox/jquery.fancybox.pack",
    "timeago": "jquery.timeago",
    "backbone_analytics": "backbone.analytics"
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
    },
    "timeago": {
      "deps": ["jquery"],
      "exports": "timeago"
    },
    "backbone_analytics": {
      "deps": ["backbone"],
      "exports": "backbone_analytics"
    }
  }
});

require(['jquery', 'backbone', 'router', 'mustache', 'backbone_analytics'], function($, Backbone, Router, Mustache, Analytics) {
  return this.router = new Router();
});
