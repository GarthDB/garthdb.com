(function() {
  define(['backbone', 'mustache', 'collections/repository', 'text!templates/codeTemplate.html'], function(Backbone, Mustache, RepositoryCollection, CodeTemplate) {
    var View;

    return View = Backbone.View.extend({
      el: $('<section id="code"/>'),
      initialize: function() {
        var _this = this;

        this.collection = new RepositoryCollection();
        return this.collection.fetch({
          success: function(e) {
            return _this.render();
          }
        });
      },
      render: function() {
        var list, model, _i, _len, _ref;

        list = $('<ul/>');
        _ref = this.collection.models;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          model = _ref[_i];
          $(list).append(Mustache.render(CodeTemplate, model.attributes));
        }
        return $(this.el).html(list);
      }
    });
  });

}).call(this);
