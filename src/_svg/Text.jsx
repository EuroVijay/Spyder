'use strict';

var React = require('react');

module.exports = React.createClass({

  displayName: 'Text',

  propTypes: {
    x: React.PropTypes.number,
    y: React.PropTypes.number,
    fill: React.PropTypes.string,
    textAnchor: React.PropTypes.string,
    zIndex: React.PropTypes.number,
    style: React.PropTypes.object,
    className: React.PropTypes.string,
    text: React.PropTypes.string
  },

  render: function() {
    return <text x={this.props.x}
                 y={this.props.y}
                 fill={this.props.fill}
                 textAnchor={this.props.textAnchor}
                 zIndex={this.props.zIndex}
                 style={this.props.style}
                 className={this.props.className}>
              <tspan>{this.props.text}</tspan>
           </text>;
  }
});