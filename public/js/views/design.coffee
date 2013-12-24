define ['backbone', 'collections/project', 'magnific'], (Backbone, ProjectCollection, Magnific) ->
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
        elHTML = "
          <aside>
            <img src='#{model.attributes.covers['404']}' alt='#{model.attributes.name}' width='202' height='158'/>
          </aside>
          <header>
            <h2>#{model.attributes.name}</h2>
          </header>
          <div class='description'>#{model.attributes.description}</div>
          <ul class='gallery'>"
        for image in model.attributes.imgs
          elHTML += "<li><a href='#{image.src}' style='background-image: url(#{image.src});' "
          if image.caption
            elHTML += "title='#{image.caption}'"
          elHTML += "></a></li>"
        elHTML += "</ul>"
        $(@el)[0].innerHTML = elHTML
        console.log $('.gallery a')
        # links = $($(@el).children('.gallery')[0]).children('li').children()
        $('.gallery').magnificPopup {
          delegate: 'a'
          type: 'image'
          tLoading: 'Loading image #%curr%...'
          mainClass: 'mfp-img-mobile'
          gallery: {
            enabled: true
            navigateByImgClick: true
            preload: [0,1] # Will preload 0 - before current, and 1 after the current image
          }
          image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: (item) ->
              return item.el.attr('title') + "<div><a href="+item.el.attr('href')+">view full size</a></div>";
          }
        }

        # $(@el).html Mustache.render(DesignTemplate, model.attributes)
        
        # console.log $(@el).children('ul.gallery').children('a')
      # $('.gallery a').magnificPopup({type:'image'})
      # $('.gallery').magnificPopup {
      #   delegate: 'a'
      #   type: 'image'
      #   closeOnContentClick: false
      #   closeBtnInside: false
      #   mainClass: 'mfp-with-zoom mfp-img-mobile'
      #   image: {
      #     verticalFit: true
      #     titleSrc: (item) ->
      #       return item.el.attr('title')
      #   },
      #   gallery: {
      #     enabled: true
      #   },
      #   zoom: {
      #     enabled: true,
      #     duration: 300, # don't foget to change the duration also in CSS
      #     opener: (element) ->
      #       return element.find('img')
      #   }
      # }
