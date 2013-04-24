// Generated by CoffeeScript 1.6.1
(function() {

  define(['backbone', 'collections/user', 'views/designItem'], function(Backbone, UserCollection, DesignItemView) {
    var View;
    return View = Backbone.View.extend({
      el: $('<section id="designs"/>'),
      initialize: function() {
        var _this = this;
        this.collection = new UserCollection();
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
          $(list).append(this.renderChild(model.attributes));
        }
        return $(this.el).html(list);
      },
      renderChild: function(item) {
        var design;
        design = new DesignItemView({
          model: item
        });
        design.render();
        return design.el;
      }
    });
  });

}).call(this);
