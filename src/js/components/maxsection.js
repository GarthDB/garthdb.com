/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var Snap = require('snapsvg');

var MaxSection = React.createClass({
    preArray: [],
    preDArray: [],
    postDArray: [],
    loadSVG: function(f){
      var preIDArray = ['#prem','#prea','#prex'];
      var postIDArray = ['#postm','#posta','#postx'];
      var g = this.max.group()
      var maxmap = f;
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
      var g = this.max.select('g');
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
      var g = this.max.select('g');
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
