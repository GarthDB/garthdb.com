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
  maxTop: '',
  convergervatop: '',
  allthingsopentop: '',
  transitionPadding: '',
  maxOpen: false,
  updatePosition: function(y) {
    var output = 'top';
    if(y < this.maxTop){
      output = 'top';
    } else if (y >= this.maxTop && y <= this.convergervatop){
      output = 'max';
      this.setState({maxOpen: true});
    } else if(y >= this.convergervatop && y <= this.allthingsopentop){
      output = 'convergerva';
    } else if(y >= this.allthingsopentop){
      output = 'allthingsopen';
    }
    if(!$('body').hasClass(output)){
      $('body').removeClass();
      $('body').addClass(output);
    }
  },
  updatePositionMobileHandler: function() {
    var y = (this.pageScroll.y * -1) + this.transitionPadding;
    this.updatePosition(y);
  },
  updatePositionHandler: function() {
    var y = $(window).scrollTop() + this.transitionPadding;
    this.updatePosition(y);
  },
  resize: function(){
    this.maxTop = $('section.max').position().top
    this.convergervatop = $('section.convergerva').position().top
    this.allthingsopentop = $('section.allthingsopen').position().top
    this.transitionPadding = 0.25 * $(window).height()
  },
  componentDidMount: function() {
    window.onresize = this.resize;
    if(this.props.mobile){
      $('#wrapper').addClass('mobile');
      $('#scroller').addClass('mobile');
      this.pageScroll = new IScroll('#wrapper', { click: true, probeType: 3, mouseWheel: true });
      this.pageScroll.on('scroll', this.updatePositionMobileHandler);
      this.pageScroll.on('scrollEnd', this.updatePositionMobileHandler);
    } else {
      window.onscroll = this.updatePositionHandler;
    }
  },
  getInitialState: function() {
    return({
      maxOpen: false
    });
  },
  render: function() {
    return(
      <div id='wrapper'>
        <div id='scroller'>
          <Header/>
          <main>
            <MaxSection open={this.state.maxOpen}/>
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
      </div>
    );
  }
});



document.addEventListener('DOMContentLoaded', function() {

  var md = new MobileDetect(window.navigator.userAgent);
  var mobileFlag = false;
  mobileFlag = md.mobile();
  if(mobileFlag) {
    document.addEventListener("touchmove", function(e){
      e.preventDefault();
      return
    }, false);
    React.renderComponent(<Site mobile="true"/>, document.body);
  } else {
    React.renderComponent(<Site/>, document.body);
  }
}, false);
