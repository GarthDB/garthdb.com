define(['backbone', 'mustache', 'collections/project', 'magnific', 'text!templates/designTemplate.html'], function(Backbone, Mustache, ProjectCollection, Magnific, DesignTemplate) {
  var View;
  return View = Backbone.View.extend({
    el: $('<section id="design"/>'),
    initialize: function() {
      var _this = this;
      this.collection = new ProjectCollection();
      this.collection.url += this.id;
      return this.collection.fetch({
        data: $.param({
          api_key: 'k14bSsAQqEr1edu3lyiS1yL6t9qWRulA'
        }),
        success: function(e) {
          return _this.render();
        }
      });
    },
    render: function() {
      var model, module, _i, _j, _len, _len1, _ref, _ref1, _results;
      $(this.el).html('');
      _ref = this.collection.models;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        model = _ref[_i];
        model.attributes.imgs = [];
        _ref1 = model.attributes.modules;
        for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
          module = _ref1[_j];
          if (module.type = "image") {
            model.attributes.imgs.push(module);
          }
        }
        $(this.el).html(Mustache.render(DesignTemplate, model.attributes));
        _results.push($('.gallery').magnificPopup({
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
        }));
      }
      return _results;
    }
  });
});
