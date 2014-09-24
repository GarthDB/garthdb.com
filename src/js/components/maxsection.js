/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var Snap = require('snapsvg');

var MaxSection = React.createClass({
  render: function() {
    return (
      <section className="max">
        <div className="bounds">
          <svg id="max">
            <defs></defs>
          </svg>
        </div>
      </section>
    );
  }
});

module.exports = MaxSection;
