require.config({
  paths: {
    "jquery": "libs/zepto.min",
    "underscore": "libs/underscore",
    "backbone": "libs/exoskeleton.min",
    "mustache": "libs/mustache",
    "magnific": "magnific/magnific.min",
    "moment": "libs/moment.min",
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
    "magnific": {
      "deps": ["jquery"],
      "exports": "magnific"
    },
    "moment": {
      "deps": ["jquery"],
      "exports": "moment"
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
