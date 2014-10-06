/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var Snap = require('snapsvg');

var AllThingsSection = React.createClass({
  preArray: [],
  preDArray: [],
  postDArray: [],
  loadSVG: function(f){
    var preIDArray = ['#prea','#prel','#prel2','#pret','#preh','#prei','#pren','#preg','#pres','#preo','#prep','#pree','#pren2'];
    var postIDArray = ['#posta','#postl','#postl2','#postt','#posth','#posti','#postn','#postg','#posts','#posto','#postp','#poste','#postn2'];
    var g = this.allthings.group()
    var allthingsmap = f;
    for(var i = 0; i < preIDArray.length; i++){
      var preElement = f.select(preIDArray[i]);
      var postData
      this.preArray.push(preElement);
      this.preDArray.push(preElement.attr('d'));
      this.postDArray.push(f.select(postIDArray[i]).attr('d'));
    }
    this.statemap = f.select('#state');
    g.append(this.statemap);
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
  stopAll: function(){
    for(var i = 0; i < this.preArray.length; i++){
      this.preArray[i].stop();
    }
  },
  openMap: function(){
    var g = this.allthings.select('g');
    g.attr({"fill-opacity": 1});
    this.stopAll();
    for(var i = 0; i < this.preArray.length; i++){
      g.append(this.preArray[i]);
    }
    this.statemap.attr({"fill-opacity": 0});
    for(var j = 0; j < this.preArray.length; j++){
      this.preArray[j].animate({d: this.postDArray[j]}, 1000, mina.elastic);
    }
  },
  closeMap: function(){
    var g = this.allthings.select('g');
    this.stopAll();
    for(var i = 0; i < this.preArray.length - 1; i++){
      this.preArray[i].animate({d: this.preDArray[i]}, 1000, mina.elastic);
    }
    var last = this.preArray.length - 1;
    this.preArray[last].animate({d: this.preDArray[last]}, 1000, mina.elastic, (function(){
      this.statemap.attr({"fill-opacity": 1});
      g.attr({"fill-opacity": 0});
    }).bind(this));
  },
  componentDidMount: function(){
    this.allthings = Snap("#allthings");
    var allthingsmap = Snap.load("../img/allthings_map.svg", this.loadSVG);
    this.allthings.hover(this.mapMouseoverHandler,this.mapMouseoutHandler);
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
