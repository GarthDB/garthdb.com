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
    var g, output, posta, postm, postx, prea, prem, prex, state, y;
    output = 'top';
    y = $(window).scrollTop() + _this.transitionPadding;
    if (y < _this.maxTop) {
      output = 'top';
    } else if (y >= _this.maxTop && y <= _this.convergervatop) {
      output = 'max';
      if (!_this.maxOpen) {
        g = _this.max.select('g');
        console.log(_this.maxmap.select('#prem'));
        prem = _this.maxmap.select('#prem');
        prea = _this.maxmap.select('#prea');
        prex = _this.maxmap.select('#prex');
        state = _this.maxmap.select('#state');
        _this.maxmap.append(state);
        postm = _this.maxmap.select('#postm').attr('d');
        posta = _this.maxmap.select('#posta').attr('d');
        postx = _this.maxmap.select("#postx").attr('d');
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
        prex.animate({
          d: postx
        }, 1000, mina.elastic);
        _this.maxOpen = true;
      }
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
  var g, map, _i, _len, _ref;
  this.maxOpen = false;
  this.convergervaOpen = false;
  this.allthingsopenOpen = false;
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
  this.maps = $('.bottom svg');
  setTimeout(((function(_this) {
    return function() {
      var map, path, smallScale, _i, _len, _ref, _results;
      _ref = _this.maps;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        map = _ref[_i];
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
  _ref = this.maps;
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    map = _ref[_i];
    map = Snap(map);
    map.hover((function(e) {
      var midScale, p, s;
      s = Snap(e.target);
      p = s.select('path');
      midScale = new Snap.Matrix();
      midScale.scale(0.9, 0.9, p.getBBox().cx, p.getBBox().cy);
      return p.animate({
        transform: midScale
      }, 2000, mina.elastic);
    }), (function(e) {
      var midScale, p, s;
      s = Snap(e.target);
      p = s.select('path');
      midScale = new Snap.Matrix();
      midScale.scale(0.8, 0.8, p.getBBox().cx, p.getBBox().cy);
      return p.animate({
        transform: midScale
      }, 2000, mina.elastic);
    }));
  }
  this.max = Snap("#max");
  g = this.max.group();
  return this.maxmap = Snap.load("../img/max_map.svg", function(f) {
    var posta, postm, postx, prea, prem, prex, state;
    this.maxmap = f;
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