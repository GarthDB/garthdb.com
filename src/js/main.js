/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var $ = require('jquery');
var MobileDetect = require('mobile-detect');

var Header = require('./components/header');
var MaxSection = require('./components/maxsection');

var Site = React.createClass({
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
  var maxTop, convergervatop, allthingsopentop, transitionPadding;
  window.onresize = function(){
    maxTop = $('section.max').position().top
    convergervatop = $('section.convergerva').position().top
    allthingsopentop = $('section.allthingsopen').position().top
    transitionPadding = 0.25 * $(window).height()
  }

  var md = new MobileDetect(window.navigator.userAgent);
  if(md.mobile()) {
    React.renderComponent(<div id='wrapper'><div id='scroller'><Site/></div></div>, $('body')[0]);
  } else {
    React.renderComponent(<Site/>, $('body')[0]);
  }
}, false);
