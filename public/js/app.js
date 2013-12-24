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
  var designLinks,
    _this = this;
  this.router = new Router();
  if ($('.gallery a').length > 0) {
    $('.gallery').magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1]
      },
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        titleSrc: function(item) {
          return item.el.attr('title') + "<div><a href=" + item.el.attr('href') + ">view full size</a></div>";
        }
      }
    });
  }
  designLinks = $('#designs a');
  if (designLinks.length > 0) {
    return designLinks.click(function(event) {
      _this.router.navigate($(event.currentTarget).attr('href'), true);
      return false;
    });
  }
});
