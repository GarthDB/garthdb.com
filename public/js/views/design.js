define(['backbone', 'collections/project', 'magnific'], function(Backbone, ProjectCollection, Magnific) {
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
      var elHTML, image, model, module, _i, _j, _k, _len, _len1, _len2, _ref, _ref1, _ref2, _results;
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
        elHTML = "          <aside>            <img src='" + model.attributes.covers['404'] + "' alt='" + model.attributes.name + "' width='202' height='158'/>          </aside>          <header>            <h2>" + model.attributes.name + "</h2>          </header>          <div class='description'>" + model.attributes.description + "</div>          <ul class='gallery'>";
        _ref2 = model.attributes.imgs;
        for (_k = 0, _len2 = _ref2.length; _k < _len2; _k++) {
          image = _ref2[_k];
          elHTML += "<li><a href='" + image.src + "' style='background-image: url(" + image.src + ");' ";
          if (image.caption) {
            elHTML += "title='" + image.caption + "'";
          }
          elHTML += "></a></li>";
        }
        elHTML += "</ul>";
        $(this.el)[0].innerHTML = elHTML;
        console.log($('.gallery a'));
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
