define(['backbone', 'models/repository', 'timeago'], function(Backbone, RepositoryModel, TimeAgo) {
  var RepositoryCollection;
  RepositoryCollection = Backbone.Collection.extend({
    model: RepositoryModel,
    url: "https://api.github.com/users/garthdb/repos",
    sync: function(method, model, options) {
      options.dataType = "jsonp";
      return Backbone.sync(method, model, options);
    },
    parse: function(response) {
      var repo, _i, _len, _ref;
      _ref = response.data;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        repo = _ref[_i];
        repo.updated_at_ago = $.timeago(repo.updated_at);
      }
      return response.data;
    }
  });
  return RepositoryCollection;
});
