var calculateSectionPositions, updatePosition, updatePositionMobile;

calculateSectionPositions = function() {
  this.maxTop = $('section.max').position().top;
  this.convergervatop = $('section.convergerva').position().top;
  this.allthingsopentop = $('section.allthingsopen').position().top;
  return this.transitionPadding = 0.25 * $(window).height();
};

updatePositionMobile = (function(_this) {
  return function() {
    var output, y;
    output = 'top';
    y = (_this.pageScroll.y * -1) + _this.transitionPadding;
    if (y < _this.maxTop) {
      output = 'top';
    } else if (y >= _this.maxTop && y <= _this.convergervatop) {
      output = 'max';
    } else if (y >= _this.convergervatop && y <= _this.allthingsopentop) {
      output = 'convergerva';
    } else if (y >= _this.allthingsopentop) {
      output = 'allthingsopen';
    }
    if (!$('body').hasClass(output)) {
      $('body').removeClass();
      return $('body').addClass(output);
    }
  };
})(this);

updatePosition = (function(_this) {
  return function() {
    var output, y;
    output = 'top';
    console.log;
    y = $(window).scrollTop() + _this.transitionPadding;
    if (y < _this.maxTop) {
      output = 'top';
    } else if (y >= _this.maxTop && y <= _this.convergervatop) {
      output = 'max';
    } else if (y >= _this.convergervatop && y <= _this.allthingsopentop) {
      output = 'convergerva';
    } else if (y >= _this.allthingsopentop) {
      output = 'allthingsopen';
    }
    if (!$('body').hasClass(output)) {
      $('body').removeClass();
      return $('body').addClass(output);
    }
  };
})(this);

$(function() {
  var g, max, maxmap;
  this.md = new MobileDetect(window.navigator.userAgent);
  if (this.md.mobile()) {
    $('#wrapper').addClass('mobile');
    $('#scroller').addClass('mobile');
    this.pageScroll = new IScroll('#wrapper', {
      click: true,
      probeType: 3,
      mouseWheel: true
    });
    this.pageScroll.on('scroll', updatePositionMobile);
    this.pageScroll.on('scrollEnd', updatePositionMobile);
    document.addEventListener("touchmove", (function(e) {
      e.preventDefault();
    }), false);
  } else {
    window.onscroll = updatePosition;
  }
  calculateSectionPositions();
  window.onresize = function() {
    return calculateSectionPositions();
  };
  setInterval(((function(_this) {
    return function() {
      var map, path, smallScale, _i, _len, _results;
      _this.maps = $('.bottom svg');
      _results = [];
      for (_i = 0, _len = maps.length; _i < _len; _i++) {
        map = maps[_i];
        map = Snap(map);
        path = map.select('*');
        smallScale = new Snap.Matrix();
        smallScale.scale(0.8, 0.8, path.getBBox().cx, path.getBBox().cy);
        _results.push(path.animate({
          transform: smallScale
        }, 2000, mina.elastic));
      }
      return _results;
    };
  })(this)), 1000);
  $('.bottom path').on("mouseover", function(e) {
    var fullScale, map;
    map = Snap(e.target);
    fullScale = new Snap.Matrix();
    fullScale.scale(1, 1, map.getBBox().cx, map.getBBox().cy);
    return map.animate({
      transform: fullScale
    }, 2000, mina.elastic);
  });
  max = Snap("#max");
  g = max.group();
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
    return max.click(function() {
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