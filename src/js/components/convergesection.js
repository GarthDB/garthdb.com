/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var Snap = require('snapsvg');

var ConvergeSection = React.createClass({
  preArray: [],
  preDArray: [],
  postDArray: [],
  loadSVG: function(f){
    var preIDArray = ['#pretip', '#prec', '#preo', '#pren', '#prev', '#pree', '#prer', '#preg', '#pree2', '#preisland', '#prer2', '#prev2', '#prea'];
    var postIDArray = ['#posttip','#postc','#posto','#postn','#postv','#poste','#postr','#postg','#poste2','#postisland','#postr2','#postv2','#posta'];
    var g = this.converge.group()
    var convergemap = f;
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
    var g = this.converge.select('g');
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
    var g = this.converge.select('g');
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
    this.converge = Snap("#converge");
    var convergemap = Snap.load("img/converge_map.svg", this.loadSVG);
    this.converge.hover(this.mapMouseoverHandler,this.mapMouseoutHandler);
  },
  render: function() {
    if(this.props.open){
      this.openMap();
    }
    return (
      <section className="converge">
        <div className="bounds">
          <svg id="converge" onmouseover={this.mapMouseoverHandler} onmouseout={this.mapMouseoutHandler}>
            <defs></defs>
          </svg>
          <div className="content">
            <h2>Designers Can<br/>Open Source</h2>
            <div className="details">
              <div className="title">ConvergeRVA</div>
              <div dateTime="2014-10-10T09:00" className="time">Oct 10, 2014</div>
              <div className="location"><span>Richmond, VA</span></div>
              <div className="link"><a href="http://convergerva.com/speakers.php#garth-braithwaite">Details</a></div>
            </div>
          </div>
        </div>
      </section>
    );
  }
});

module.exports = ConvergeSection;
