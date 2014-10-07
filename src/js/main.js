/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var IScroll = require('./iscroll-probe');
var $ = require('jquery');

var Header = require('./components/header');
var MaxSection = require('./components/maxsection');
var ConvergeSection = require('./components/convergesection');
var AllThingsSection = require('./components/allthingssection');

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
      output = 'converge';
      this.setState({convergeOpen: true});
    } else if(y >= this.allthingsopentop){
      output = 'allthings';
      this.setState({allthingsOpen: true});
    }
    console.log(output);
    if(!$('body').hasClass(output)){
      $('body').removeClass();
      $('body').addClass(output);
    }
  },
  updatePositionHandler: function() {
    var y = $(window).scrollTop() + this.transitionPadding;
    this.updatePosition(y);
  },
  resize: function(){
    this.maxTop = $('section.max').position().top
    this.convergervatop = $('section.converge').position().top
    this.allthingsopentop = $('section.allthings').position().top
    this.transitionPadding = 0.25 * $(window).height()
  },
  componentDidMount: function() {
    window.onresize = this.resize;
    window.onscroll = this.updatePositionHandler;
  },
  getInitialState: function() {
    return({
      maxOpen: false,
      convergeOpen: false,
      allthingsOpen: false
    });
  },
  render: function() {
    return(
      <div id='wrapper'>
        <div id='scroller'>
          <Header/>
          <main>
            <MaxSection open={this.state.maxOpen}/>
            <ConvergeSection open={this.state.convergeOpen}/>
            <AllThingsSection open={this.state.allthingsOpen}/>
          </main>
        </div>
      </div>
    );
  }
});



document.addEventListener('DOMContentLoaded', function() {
  React.renderComponent(<Site/>, document.body);
}, false);
