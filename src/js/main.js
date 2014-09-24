/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var IScroll = require('./iscroll-probe');
var $ = require('jquery');
var MobileDetect = require('mobile-detect');

var Header = require('./components/header');
var MaxSection = require('./components/maxsection');

var Site = React.createClass({
  componentDidMount: function() {
    if(this.props.mobile){
      var wrapper = $('#wrapper').children()[0];
      $(wrapper).attr('id', 'scroller');
      console.log($(wrapper).attr('id'));
      var pageScroll = new IScroll('#wrapper', { click: true, probeType: 3, mouseWheel: true });
      pageScroll.on('scroll', window.updatePositionMobileHandler);
      pageScroll.on('scrollEnd', window.updatePositionMobileHandler);
    }
  },
  render: function() {
    return(
      <div>
        <Header/>
        <main>
          <MaxSection/>
          <section className="convergerva">
            <div className="bounds">
              <svg id="convergerva">
                <defs></defs>
              </svg>
            </div>
          </section>
          <section className="allthingsopen">
            <div className="bounds">
              <svg id="allthingsopen">
                <defs></defs>
              </svg>
            </div>
          </section>
        </main>
      </div>
    );
  }
});



document.addEventListener('DOMContentLoaded', function() {
  var maxTop, convergervatop, allthingsopentop, transitionPadding, mobileFlag;
  mobileFlag = false;

  var updatePosition = function(y) {
    var output = 'top';
    if(y < maxTop){
      output = 'top';
    } else if (y >= maxTop && y <= convergervatop){
      output = 'max';
    } else if(y >= convergervatop && y <= allthingsopentop){
      output = 'convergerva';
    } else if(y >= allthingsopentop){
      output = 'allthingsopen';
    }
    if(!$('body').hasClass(output)){
      $('body').removeClass();
      $('body').addClass(output);
    }
  };
  var updatePositionHandler = function() {
    var y = $(window).scrollTop() + transitionPadding;
    updatePosition(y);
    console.log($('body').attr("class"));
  }

  window.updatePositionMobileHandler = function() {
    var y = (this.y * -1) + transitionPadding;
    updatePosition(y);
  }

  window.onresize = function(){
    maxTop = $('section.max').position().top
    convergervatop = $('section.convergerva').position().top
    allthingsopentop = $('section.allthingsopen').position().top
    transitionPadding = 0.25 * $(window).height()
  }

  var md = new MobileDetect(window.navigator.userAgent);
  mobileFlag = md.mobile();
  if(mobileFlag) {
    console.log('mobile');
    document.addEventListener("touchmove", function(e){
      e.preventDefault();
      return
    }, false);

    React.renderComponent(<div id='wrapper'><Site mobile="true"/></div>, $('body')[0]);
  } else {

    window.onscroll = updatePositionHandler;

    React.renderComponent(<Site/>, $('body')[0]);
  }
}, false);
