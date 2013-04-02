(function() {
  define(['backbone'], function(Backbone) {
    var UserModel;

    UserModel = Backbone.Model.extend({
      defaults: {}
    });
    return UserModel;
  });

}).call(this);
