$ = require('./libs/zepto.min.js')
Backbone = require('./libs/exoskeleton.js')
Router = require('./router')

$ ->
  router = new Router()
  if $('.gallery a').length > 0
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
  designLinks = $('#designs a')
  if designLinks.length > 0
    designLinks.click (event)=>
      @router.navigate $(event.currentTarget).attr('href'), true
      return false