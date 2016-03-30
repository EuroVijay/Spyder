'use strict';

var React = require('react');

module.exports = React.createClass({

  displayName: 'Rectangle',

  propTypes: {
    x: React.PropTypes.number,
    y: React.PropTypes.number,
    width: React.PropTypes.number,
    height: React.PropTypes.number,
    stroke: React.PropTypes.string,
    strokeWidth: React.PropTypes.number,
    fill: React.PropTypes.string,
    rx: React.PropTypes.number,
    ry: React.PropTypes.number,
    zIndex: React.PropTypes.number,
    className: React.PropTypes.string,
  },

  getDefaultProps: function() {
    return {
      strokeWidth: 1,
      rx: 0,
      ry: 0,
      zIndex: 1
    }
  },

  render: function() {
    return <rect x={this.props.x}
                 y={this.props.y}
                 width={this.props.width}
                 height={this.props.height}
                 stroke={this.props.stroke}
                 strokeWidth={this.props.strokeWidth}
                 fill={this.props.fill}
                 rx={this.props.rx}
                 ry={this.props.ry}
                 zIndex={this.props.zIndex}
                 className={this.props.className} />
  }
});