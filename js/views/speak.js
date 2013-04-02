(function() {
  define(['backbone', 'mustache', 'collections/session', 'text!templates/sessionTemplate.html', 'timeago'], function(Backbone, Mustache, SessionCollection, SessionTemplate, TimeAgo) {
    var View;

    return View = Backbone.View.extend({
      el: $('<section id="speak"/>'),
      initialize: function() {
        var _this = this;

        this.collection = new SessionCollection();
        return this.collection.fetch({
          success: function(e) {
            return _this.render();
          }
        });
      },
      render: function() {
        var model, _i, _len, _ref, _results;

        this.collection.models.sort(function(a, b) {
          var aDate, bDate;

          aDate = new Date(a.attributes.date);
          bDate = new Date(b.attributes.date);
          return bDate - aDate;
        });
        _ref = this.collection.models;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          model = _ref[_i];
          $.timeago.settings.allowFuture = true;
          model.attributes.date_ago = $.timeago(model.attributes.date);
          model.attributes.tagger = model.attributes.tags.join(", ");
          console.log(model.attributes);
          _results.push($(this.el).append(Mustache.render(SessionTemplate, model.attributes)));
        }
        return _results;
      }
    });
  });

}).call(this);
