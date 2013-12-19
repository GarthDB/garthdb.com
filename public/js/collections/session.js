define(['backbone', 'models/session'], function(Backbone, SessionModel) {
  var SessionCollection;
  SessionCollection = Backbone.Collection.extend({
    model: SessionModel,
    url: "/js/sessions.json",
    parse: function(response) {
      return response.sessions;
    }
  });
  return SessionCollection;
});
