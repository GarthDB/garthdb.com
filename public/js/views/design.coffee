define ['backbone', 'mustache', 'collections/project', 'magnific', 'text!templates/designTemplate.html'], (Backbone, Mustache, ProjectCollection, Magnific, DesignTemplate) ->
  View = Backbone.View.extend
    el: $('<section id="design"/>')
    initialize: ->
      @collection = new ProjectCollection()
      @collection.url += @id
      @collection.fetch({
        data: $.param {api_key: 'k14bSsAQqEr1edu3lyiS1yL6t9qWRulA'}
        success: (e)=>
          @render()
        })
    render: ->
      $(@el).html('')
      for model in @collection.models
        model.attributes.imgs = []
        for module in model.attributes.modules
          if module.type = "image"
            model.attributes.imgs.push(module)
        $(@el).html Mustache.render(DesignTemplate, model.attributes)
        $('.gallery').magnificPopup
          delegate: 'a'
          type: 'image'
          tLoading: 'Loading image #%curr%...'
          mainClass: 'mfp-img-mobile'
          gallery:
            enabled: true
            navigateByImgClick: true
            preload: [0,1] # Will preload 0 - before current, and 1 after the current image
          image:
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
            titleSrc: (item) ->
              return item.el.attr('title') + "<div><a href="+item.el.attr('href')+">view full size</a></div>"