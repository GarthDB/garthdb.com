$(function() {
  var g, maxmap, s;
  s = Snap("#max");
  g = s.group();
  return maxmap = Snap.load("../img/max_map.svg", function(f) {
    var posta, postm, postx, prea, prem, prex, state;
    prem = f.select('#prem');
    prea = f.select('#prea');
    prex = f.select('#prex');
    state = f.select('#state');
    g.append(state);
    postm = f.select('#postm').attr('d');
    posta = f.select('#posta').attr('d');
    postx = f.select("#postx").attr('d');
    return s.click(function() {
      g.append(prem);
      g.append(prea);
      g.append(prex);
      state.remove();
      prem.animate({
        d: postm
      }, 1000, mina.elastic);
      prea.animate({
        d: posta
      }, 1000, mina.elastic);
      return prex.animate({
        d: postx
      }, 1000, mina.elastic);
    });
  });
});

//# sourceMappingURL=main.js.map