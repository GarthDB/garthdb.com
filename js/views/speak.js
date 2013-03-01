// Generated by CoffeeScript 1.4.0
(function() {

  define(['backbone', 'collections/session'], function(Backbone, SessionCollection) {
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
        return console.log(this.collection.models);
      }
    });
  });

}).call(this);
