'use strict';

var React = require('react');

module.exports = React.createClass({

  displayName: 'Spyder',

  propTypes: {
    dataSet: React.PropTypes.array,
    width: React.PropTypes.number,
    height:React.PropTypes.number,
    header: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      width: 800,
      height: 400,
      headerHeight: 50
    }
  },

  getInitialState: function() {
    return {
      offsetTop: this.props.header ? this.props.headerHeight : 0
    };
  },

  render: function() {

    var availableHeight = this.props.height - this.state.offsetTop;
    var decorators = [];

    var children = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {
        width: this.props.width,
        height: availableHeight,
        offsetTop: this.state.offsetTop,
        dataSet: this.props.dataSet
      });
    }, this);

    if(this.props.header) {
      decorators.push(<Text x={100} y={50} textAnchor="middle"
                            zIndex={1} text={this.props.header} className="spyder-header" />);
    }

    decorators.push(children);

    return <svg className="spyder" width={this.props.width} height={this.props.height}>
      {decorators}
    </svg>;
  }
});