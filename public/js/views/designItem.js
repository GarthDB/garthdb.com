define(['backbone'], function(Backbone) {
  var View;
  return View = Backbone.View.extend({
    tagName: "li",
    render: function() {
      var detailsEl, imgEl, imgURL, linkEl, splitURL;
      splitURL = this.model.url.split('/');
      this.model.slug = splitURL[splitURL.length - 2];
      imgURL = (window.devicePixelRatio = 2) ? this.model.covers['404'] : this.model.covers['202'];
      imgEl = $("<img src='" + imgURL + "' width='202' height='158' alt='" + this.model.caption + "' />");
      linkEl = $("<a href='/design/" + this.model.slug + "/" + this.model.id + "'/>").append(imgEl);
      detailsEl = $("<div class='details'><h3>" + this.model.name + "</h3></div>");
      $(linkEl).append(detailsEl);
      $(this.el).html(linkEl);
      return $(linkEl).click(function(event) {
        router.navigate($(event.currentTarget).attr('href'), true);
        return false;
      });
    }
  });
});