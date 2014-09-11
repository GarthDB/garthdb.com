$ ->
  s = Snap "#max"
  g = s.group()
  maxmap = Snap.load "../img/max_map.svg", (f) ->
    prem = f.select '#prem'
    prea = f.select '#prea'
    prex = f.select '#prex'
    state = f.select '#state'
    g.append state
    postm = f.select('#postm').attr('d')
    posta = f.select('#posta').attr('d')
    postx = f.select("#postx").attr('d')
    s.click ->
      g.append(prem)
      g.append(prea)
      g.append(prex)
      state.remove()
      prem.animate {d: postm}, 1000, mina.elastic
      prea.animate {d: posta}, 1000, mina.elastic
      prex.animate {d: postx}, 1000, mina.elastic
