define(['backbone', 'models/repository', 'moment'], function(Backbone, RepositoryModel, Moment) {
  var RepositoryCollection;
  RepositoryCollection = Backbone.Collection.extend({
    model: RepositoryModel,
    url: "https://api.github.com/users/garthdb/repos?sort=updated",
    sync: function(method, model, options) {
      options.dataType = "jsonp";
      return Backbone.sync(method, model, options);
    },
    parse: function(response) {
      var repo, _i, _len, _ref;
      _ref = response.data;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        repo = _ref[_i];
        repo.updated_at_ago = moment(repo.updated_at).fromNow();
      }
      return response.data;
    }
  });
  return RepositoryCollection;
});
