'use strict';

var React = require('React');

module.exports = React.createClass({

  propTypes: {
    x: React.PropTypes.number,
    width: React.PropTypes.number,
    height: React.PropTypes.number,
    maxHeight: React.PropTypes.number,
    offsetTop: React.PropTypes.number,
    stroke: React.PropTypes.string,
    fill: React.PropTypes.string
  },

  render: function() {
    return <Rectangle x={this.props.x}
                      y={this.props.maxHeight - this.props.height + this.props.offsetTop}
                      width={this.props.width}
                      height={this.props.height}
                      stroke={this.props.stroke}
                      fill={this.props.fill}
                      className="spyder-column" />
  }
});