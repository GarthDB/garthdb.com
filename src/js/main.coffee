calculateSectionPositions = ()->
  @maxTop = $('section.max').position().top
  @convergervatop = $('section.convergerva').position().top
  @allthingsopentop = $('section.allthingsopen').position().top
  @transitionPadding = 0.25 * $(window).height()

updatePositionMobile = ()=>
  output = 'top'
  y = (@pageScroll.y * -1) + @transitionPadding
  if y < @maxTop
    output = 'top'
  else if y >= @maxTop && y <= @convergervatop
    output = 'max'
  else if y >= @convergervatop && y <= @allthingsopentop
    output = 'convergerva'
  else if y >= @allthingsopentop
    output = 'allthingsopen'
  if !$('body').hasClass(output)
    $('body').removeClass()
    $('body').addClass output
updatePosition = ()=>
  output = 'top'
  console.log
  y = $(window).scrollTop() + @transitionPadding
  if y < @maxTop
    output = 'top'
  else if y >= @maxTop && y <= @convergervatop
    output = 'max'
  else if y >= @convergervatop && y <= @allthingsopentop
    output = 'convergerva'
  else if y >= @allthingsopentop
    output = 'allthingsopen'
  if !$('body').hasClass(output)
    $('body').removeClass()
    $('body').addClass output
$ ->
  @md = new MobileDetect(window.navigator.userAgent)
  if @md.mobile()
    $('#wrapper').addClass('mobile')
    $('#scroller').addClass('mobile')
    @pageScroll = new IScroll '#wrapper', { click: true, probeType: 3, mouseWheel: true }
    @pageScroll.on 'scroll', updatePositionMobile
    @pageScroll.on 'scrollEnd', updatePositionMobile
    document.addEventListener "touchmove", ((e) ->
      e.preventDefault()
      return
    ), false
  else
      window.onscroll = updatePosition
  calculateSectionPositions()
  window.onresize = ()->
    calculateSectionPositions()
  setInterval ( =>
    @maps = $('.bottom svg')
    for map in maps
      map = Snap map
      path = map.select('*')
      smallScale = new Snap.Matrix()
      smallScale.scale(0.8,0.8, path.getBBox().cx, path.getBBox().cy)
      path.animate {transform: smallScale}, 2000, mina.elastic
  ),1000
  $('.bottom path').on "mouseover", (e)->
    map = Snap e.target
    fullScale = new Snap.Matrix()
    fullScale.scale(1,1,map.getBBox().cx,map.getBBox().cy)
    map.animate {transform: fullScale}, 2000, mina.elastic
  max = Snap "#max"
  g = max.group()
  maxmap = Snap.load "../img/max_map.svg", (f) ->
    prem = f.select '#prem'
    prea = f.select '#prea'
    prex = f.select '#prex'
    state = f.select '#state'
    g.append state
    postm = f.select('#postm').attr('d')
    posta = f.select('#posta').attr('d')
    postx = f.select("#postx").attr('d')
    max.click ->
      g.append(prem)
      g.append(prea)
      g.append(prex)
      state.remove()
      prem.animate {d: postm}, 1000, mina.elastic
      prea.animate {d: posta}, 1000, mina.elastic
      prex.animate {d: postx}, 1000, mina.elastic
