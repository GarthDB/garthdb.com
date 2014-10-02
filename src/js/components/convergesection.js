/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var Snap = require('snapsvg');

var ConvergeSection = React.createClass({
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
    this.max = Snap("#converge");
    var maxmap = Snap.load("../img/max_map.svg", this.loadSVG);
  },
  render: function() {
    if(this.props.open){
      this.openState();
    }
    return (
      <section className="convergerva">
        <div className="bounds">
          <svg id="converge" onmouseover={this.mapMouseoverHandler} onmouseout={this.mapMouseoutHandler}>
            <defs></defs>
          </svg>
          <h2>Designers Can Open Source</h2>
          <div itemscope itemtype="http://schema.org/Event" class="details">
            <div itemprop="name" class="title">ConvergeRVA</div>
            <div itemprop="startDate" datetime="2014-10-10T09:00" class="time">Oct 10, 2014</div>
            <div itemprop="location" itemscope itemtype="http://schema.org/Place" class="location"><span itemprop="name">Richmond, VA</span></div>
            <div class="link"><a href="http://convergerva.com/speakers.php#garth-braithwaite" itemprop="description">Details</a></div>
          </div>
        </div>
      </section>
    );
  }
});

module.exports = ConvergeSection;
