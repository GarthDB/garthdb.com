/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var MapNavItem = require('./mapnav')

var Header = React.createClass({
    render: function() {
        return (
          <header className="main">
            <div className="bounds">
              <div className="top">
                <div className="logo">Garth Braithwaite</div>
                <div className="hamburger"><a href="http://www.fiveguys.com/order-online.aspx" target="_blank" title="get a hamburger"></a></div>
              </div>
              <div className="main">
                <div className="tada">
                  <h1>I’m speaking at<br/>some conferences</h1>
                  <h2>about design and open source.</h2>
                  <h2>Come to my sessions; <br/>I&#8217;lll bring donuts.</h2>
                </div>
              </div>
              <div className="bottom">
                <MapNavItem>
                  <svg xmlns="http://www.w3.org/2000/svg" width="87.5" height="150" viewBox="0 0 87.5 150"><path id="California" opacity=".7" fill="#fff" pointer-events="none" d="M77 150l2.4-.3.9-1.3.5-1.2-2-.1-.7-1.1.5-1.1V141l1.4-.8 1.7-1.6.3-3.1 1-2.2 1.2-1.3 2.1-1.1.8-.5.5-.9-.6-.5-.6-.9-.6-3.4-1.8-3.3.1-1.7-1.4-2-9.4-14.6L61 85 46.9 64.3 39 52l1.1-4.5 4.3-16.3 5.1-19.7-7.8-2.1-8.5-2.2-7.9-2.6-4.7-1.3-7.2-1.9L9 0 8 3l-.1 4.6L4.7 15l-1.9 1.6-.2.7-1.1.5-.9 2.6-.5 2L1.8 25l1 2.6.7 2.2-.2 4.1L2.1 36l-.4 3.7-.6 2.3 1.1 2.4L4 47.3l1.4 3 .8 2.5-.3 2-.3.3v1.3l3.6 4L9 62l-.4 1.4-.4 1.2.1 5.2 1.3 2.3 1.2 1.6 1.7.3.6 1.7-.7 2.3-1.3 1.1h-.7l-.5 2.4.3 1.8 2 2.7 1 3.3.9 2.9.8 1.9 2.1 3.7.9 1.6.3 1.8 1 .6v1.5l-.5 1.2-1.1 4.5-.3 1.2 1.5 1.7 2.6.3 2.8 1.2 2.4 1.4h1.8l1.8 1.9 1.6 3 .7 1.4 2.4 1.3 3 .5.9 1.3.4 2-.9.4.2.6 2 .5 1.7.1 1.8 2.9 2.4 2.6.5 1.4 1.7 2.6.3 2v5.9l.2 1.1 6.2.9 12.3 1.7L77 150z"/></svg>
                </MapNavItem>
                <MapNavItem>
                  <svg xmlns="http://www.w3.org/2000/svg" width="133" height="73.4" viewBox="0 0 133 73.4"><path id="Virginia" opacity=".7" fill="#fff" pointer-events="none" d="M126.7 23.7l-.1-1.9 6.4-2.5-.8 3.2-2.9 3.8-.4 4.6.5 3.4-1.8 5-2.2 1.9-1.5-4.6.4-5.4 1.6-4.2.8-3.3zm2.3 28.2L71 64.4l-37.3 5.3-6.7-.4-2.6 1.9-7.3.2-8.3 1-8.8 1 8.4-4.9v-2.1l1.5-2.1 10.5-11.5 3.9 4.5 3.8 1 2.5-1.1 2.2-1.3 2.5 1.3 3.9-1.4 1.9-4.5 2.6.5 2.8-2.1 1.8.5 2.8-3.7.3-2.1-1-1.3 1-1.9L56.7 29l.6-5.7 1.2-.5 2.2 2.4 3.9-.3 1.9-7.5 2.8-.6 1-2.7 2.6-2.3 1.3-2.3L75.9 6l.1-5 9.8 3.8c.6.3.6-4.8.6-4.8l4 1.4L90 4l8.1 2.9 1.3 1.8-.9 3.7-1.3 1.3-.5 1.7.5 2.4 2 1.3 3.9 1.4 2.9 1 4.8.9 2.1 2.1 3.2.4.9 1.2-.4 4.7 1.4 1.1-.5 1.9 1.2.8-.2 1.4-2.7-.1.1 1.6 2.3 1.5.1 1.4 1.8 1.8.5 2.5-2.5 1.4 1.6 1.5 5.8-1.7 3.5 6z"/></svg>
                </MapNavItem>
                <MapNavItem>
                  <svg xmlns="http://www.w3.org/2000/svg" width="140" height="60.9" viewBox="0 0 140 60.9"><path id="NorthCarolina" opacity=".7" fill="#fff" pointer-events="none" d="M128.8 0l1.5 4.2 3.2 5.8 2.2 2.2.6 2-2.2.1.7.6-.3 3.8-2.3 1.2-.6 1.9-1.2 2.6-3.4 1.5-2.2-.3-1.3-.1-1.5-1.2.3 1.2v1.1h1.8l.7.9-1.8 5.4h3.8l.6 1.6 2-2 1.2-.4-1.8 3.4L126 40h-1l-1-.6-2.5.5-4.7 2.2L111 47l-3.1 4.2-1.8 5.8-.4 2.2-4.2.4-4.9 1.2-9-7.4-11.4-6.9-2.6-.7-11.4 1.3-3.9.7L57 45l-2.7-1.9-14.9.4-6.6.7-8.2 4.1-5.5 2.3-1.5.3-5.3.9-6.3.7-6 .5.5-3.7L2.1 48l2.5-.6.6-3.4L9 41.5l3.5-1.3 3.8-3.2 3.9-1.9.6-2.8 3.5-3.5.6-.1s0 1 .7 1 1.8.3 1.8.3l2-3.2 1.9-.6 2 .3 1.5-3.2 2.5-2.3.3-1.9v-3.6l4.2.7 6.5-1.2 14.3-1.8L78 11l18-3.6 17.8-3.8 10.3-2.5 4.7-1.1zm3.5 29.8l2.3-2.3 2.8-2.3 1.4-.6.1-1.8-.6-5.5-1.3-2.1-.6-1.7.7-.2 2.5 5 .4 4-.1 3.1-3.1 1.4-2.6 2.2-1 1.1-.9-.3z"/></svg>
                </MapNavItem>
              </div>
            </div>
          </header>
        );
    }
});

module.exports = Header;
