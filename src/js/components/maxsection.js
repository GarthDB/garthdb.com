/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var Snap = require('snapsvg');

var MaxSection = React.createClass({
  loadSVG: function(f){
    var g = this.max.group()
    var maxmap = f;
    this.prem = f.select('#prem');
    this.prea = f.select('#prea');
    this.prex = f.select('#prex');
    this.statemap = f.select('#state');
    g.append(this.statemap);
    this.postm = f.select('#postm').attr('d');
    this.posta = f.select('#posta').attr('d');
    this.postx = f.select("#postx").attr('d');
  },
  mapMouseoverHandler: function(){
    console.log('hover');
  },
  mapMouseoutHandler: function(){
    if(this.props.open){
      this.openState();
    }
  },
  openState: function(){
    var g = this.max.select('g');
    g.append(this.prem);
    g.append(this.prea);
    g.append(this.prex);
    this.statemap.remove();
    this.prem.animate({d: this.postm}, 1000, mina.elastic);
    this.prea.animate({d: this.posta}, 1000, mina.elastic);
    this.prex.animate({d: this.postx}, 1000, mina.elastic);
  },
  componentDidMount: function(){
    this.max = Snap("#max");
    var maxmap = Snap.load("../img/max_map.svg", this.loadSVG);
  },
  render: function() {
    if(this.props.open){
      this.openState();
    }
    return (
      <section className="max">
        <div className="bounds">
          <svg id="max" onmouseover={this.mapMouseoverHandler} onmouseout={this.mapMouseoutHandler}>
            <defs></defs>
          </svg>
          <h2>Collaborative Design in the Open</h2>
          <div className="details">
            <div className="title">Adobe MAX</div>
            <div datetime="2014-10-07T08:30" className="time">Oct 7, 2014</div>
            <div className="location"><span itemprop="name">Los Angeles, CA</span></div>
            <div className="link"><a href="https://www.adobe-max.com/connect/sessionDetail.ww?SESSION_ID=2708" itemprop="description">Details</a></div>
          </div>
        </div>
      </section>
    );
  }
});

module.exports = MaxSection;
