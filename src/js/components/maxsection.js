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
    this.premD = f.select('#prem').attr('d');
    this.preaD = f.select('#prea').attr('d');
    this.prexD = f.select('#prex').attr('d');
    this.statemap = f.select('#state');
    g.append(this.statemap);
    this.postmD = f.select('#postm').attr('d');
    this.postaD = f.select('#posta').attr('d');
    this.postxD = f.select("#postx").attr('d');
  },
  mapMouseoverHandler: function(){
    if(this.props.open){
      this.closeMap();
    }
  },
  mapMouseoutHandler: function(){
    if(this.props.open){
      this.openMap();
    }
  },
  openMap: function(){
    var g = this.max.select('g');
    g.attr({"fill-opacity": 1});
    this.prem.stop();
    this.prea.stop();
    this.prex.stop();
    g.append(this.prem);
    g.append(this.prea);
    g.append(this.prex);
    this.statemap.attr({"fill-opacity": 0});
    this.prem.animate({d: this.postmD}, 1000, mina.elastic);
    this.prea.animate({d: this.postaD}, 1000, mina.elastic);
    this.prex.animate({d: this.postxD}, 1000, mina.elastic);
  },
  closeMap: function(){
    var g = this.max.select('g');
    this.prem.stop();
    this.prea.stop();
    this.prex.stop();
    this.prem.animate({d: this.premD}, 1000, mina.elastic);
    this.prea.animate({d: this.preaD}, 1000, mina.elastic);
    this.prex.animate({d: this.prexD}, 1000, mina.elastic, (function(){
      this.statemap.attr({"fill-opacity": 1});
      g.attr({"fill-opacity": 0});
    }).bind(this));
  },
  componentDidMount: function(){
    this.max = Snap("#max");
    var maxmap = Snap.load("../img/max_map.svg", this.loadSVG);
    this.max.hover(this.mapMouseoverHandler,this.mapMouseoutHandler);
  },
  render: function() {
    if(this.props.open){
      this.openMap();
    }
    return (
      <section className="max">
        <div className="bounds">
          <svg id="max">
            <defs></defs>
          </svg>
          <div className="content">
            <h2>Collaborative<br/>Design in the Open</h2>
            <div className="details">
              <div className="title">Adobe MAX</div>
              <div dateTime="2014-10-07T08:30" className="time">Oct 7, 2014</div>
              <div className="location"><span>Los Angeles, CA</span></div>
              <div className="link"><a href="https://www.adobe-max.com/connect/sessionDetail.ww?SESSION_ID=2708">Details</a></div>
            </div>
          </div>
        </div>
      </section>
    );
  }
});

module.exports = MaxSection;
