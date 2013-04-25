(function() {
  define(['backbone', 'models/project'], function(Backbone, ProjectModel) {
    var ProjectCollection;

    ProjectCollection = Backbone.Collection.extend({
      model: ProjectModel,
      url: "http://www.behance.net/v2/projects/",
      sync: function(method, model, options) {
        options.dataType = "jsonp";
        return Backbone.sync(method, model, options);
      },
      parse: function(response) {
        return response.project;
      }
    });
    return ProjectCollection;
  });

}).call(this);

/*
//@ sourceMappingURL=project.js.map
*/