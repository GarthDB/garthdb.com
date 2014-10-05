/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var Snap = require('snapsvg');

var AllThingsSection = React.createClass({
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
    this.max = Snap("#allthings");
    var maxmap = Snap.load("../img/max_map.svg", this.loadSVG);
    this.max.hover(this.mapMouseoverHandler,this.mapMouseoutHandler);
  },
  render: function() {
    if(this.props.open){
      this.openMap();
    }
    return (
      <section className="allthings">
        <div className="bounds">
          <svg id="allthings" onmouseover={this.mapMouseoverHandler} onmouseout={this.mapMouseoutHandler}>
            <defs></defs>
          </svg>
          <div className="content">
            <h2>Open Source<br/>Needs Design</h2>
            <div className="details">
              <div className="title">All Things Open</div>
              <div dateTime="2014-10-22T09:00" className="time">Oct 22, 2014</div>
              <div className="location"><span>Raleigh, NC</span></div>
              <div className="link"><a href="http://allthingsopen.org/speakers/garth-braithwaite/">Details</a></div>
            </div>
          </div>
        </div>
      </section>
    );
  }
});

module.exports = AllThingsSection;
