(function() {
  define(['jquery', 'backbone'], function($, Backbone) {
    var View;

    return View = Backbone.View.extend({
      el: $('header.main'),
      events: {
        "click nav a": "navigate",
        "click a.logo": "logoClickHandler"
      },
      initialize: function() {
        return this.render();
      },
      navigate: function(event) {
        var nav;

        nav = $(event.target).html().toLowerCase();
        router.navigate(nav, true);
        return false;
      },
      logoClickHandler: function(event) {
        router.navigate('/', true);
        return false;
      }
    });
  });

}).call(this);
