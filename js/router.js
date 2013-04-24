(function() {
  define(["jquery", 'mustache', "backbone", "views/header", "views/home", "views/designs", "views/design", "views/code", "views/speak", "text!templates/resumeTemplate.html"], function($, Mustache, Backbone, HeaderView, HomeView, DesignsView, DesignView, CodeView, SpeakView, ResumeHTML) {
    var Router;

    Router = Backbone.Router.extend({
      initialize: function() {
        var headerView;

        Backbone.history.start({
          pushState: true
        });
        headerView = new HeaderView;
        headerView.render();
        if (!this.designsView) {
          this.designsView = new DesignsView;
        }
        this.designsView.render();
        if (!this.codeView) {
          this.codeView = new CodeView;
        }
        this.codeView.render();
        if (!this.speakView) {
          this.speakView = new SpeakView;
        }
        this.speakView.render();
        if (!this.resumeView) {
          return this.resumeView = Mustache.render(ResumeHTML);
        }
      },
      routes: {
        'resume': 'navResume',
        'design': 'navDesigns',
        'design/:slug/:id': 'navDesign',
        'code': 'navCode',
        'speak': 'navSpeak',
        'write': 'navWrite',
        "*actions": "defaultAction"
      },
      defaultTitle: "Garth Braithwaite",
      defaultAction: function() {
        $('header.main').find('a').removeClass('selected');
        if (!this.homeView) {
          this.homeView = new HomeView;
        }
        this.homeView.render();
        $('#content').html(this.homeView.el);
        return $('title').html(this.defaultTitle);
      },
      navDesigns: function() {
        $('header.main').find('a').removeClass('selected');
        $('header.main').find("a:contains('design')").addClass('selected');
        if (!this.designsView) {
          this.designsView = new DesignsView;
        }
        this.designsView.render();
        $('#content').html(this.designsView.el);
        return $('title').html("" + this.defaultTitle + " | Design");
      },
      navDesign: function(slug, id) {
        $('header.main').find('a').removeClass('selected');
        $('header.main').find("a:contains('design')").addClass('selected');
        if (!this.designView || this.designView.id !== id) {
          this.designView = new DesignView({
            id: id
          });
        }
        this.designView.render();
        $('#content').html(this.designView.el);
        return $('title').html("" + this.defaultTitle + " | Design");
      },
      navCode: function() {
        $('header.main').find('a').removeClass('selected');
        $('header.main').find("a:contains('code')").addClass('selected');
        if (!this.codeView) {
          this.codeView = new CodeView;
        }
        this.codeView.render();
        $('#content').html(this.codeView.el);
        return $('title').html("" + this.defaultTitle + " | Code");
      },
      navSpeak: function() {
        $('header.main').find('a').removeClass('selected');
        $('header.main').find("a:contains('speak')").addClass('selected');
        if (!this.speakView) {
          this.speakView = new SpeakView;
        }
        $('#content').html(this.speakView.el);
        return $('title').html("" + this.defaultTitle + " | Speak");
      },
      navResume: function() {
        $('header.main').find('a').removeClass('selected');
        $('header.main').find("a:contains('resume')").addClass('selected');
        if (!this.resumeView) {
          this.resumeView = Mustache.render(ResumeHTML);
        }
        $('#content').html(this.resumeView);
        return $('title').html("" + this.defaultTitle + " | Resumé");
      },
      navWrite: function() {
        return console.log('list Write');
      }
    });
    return Router;
  });

}).call(this);

/*
//@ sourceMappingURL=router.js.map
*/