/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var Snap = require('snapsvg');

var MapNavItem = React.createClass({
  shrink: function() {
    var map = Snap(this.getDOMNode().firstElementChild||this.getDOMNode().firstChild);
    var path = map.select('*');
    var smallScale = new Snap.Matrix();
    smallScale.scale(0.8,0.8, path.getBBox().cx, path.getBBox().cy);
    path.animate({transform: smallScale}, 2000, mina.elastic);
  },
  componentDidMount: function() {
    setTimeout(this.shrink, 500);
  },
  onMouseOver: function(){
    var map = Snap(this.getDOMNode().firstElementChild||this.getDOMNode().firstChild);
    var path = map.select('*');
    var midScale = new Snap.Matrix()
    midScale.scale(0.9, 0.9, path.getBBox().cx, path.getBBox().cy)
    path.animate({
      transform: midScale
    }, 2000, mina.elastic);
  },
  render: function() {
    return (
      <div className='map' onMouseOver={this.onMouseOver} onMouseOut={this.shrink}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = MapNavItem;
