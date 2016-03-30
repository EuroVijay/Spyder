'use strict';

var React = require('React');

module.exports = React.createClass({

  propTypes: {
    dataSet: React.PropTypes.array,
    width: React.PropTypes.number,
    height: React.PropTypes.number,
    stroke: React.PropTypes.string,
    fill: React.PropTypes.string,
    offsetTop: React.PropTypes.number
  },

  getDefaultProps: function() {
    return {
      stroke: '#4682b4',
      fill: '#4682b4',
      topMargin: 0
    };
  },

  render: function() {
    var props = this.props;

    var yScale = d3.scale.linear()
      .domain([0, d3.max(props.dataSet)])
      .range([0, props.height]);

    var xScale = d3.scale.ordinal()
      .domain(d3.range(props.dataSet.length))
      .rangeRoundBands([0, props.width], 0.05);

    var bars = props.dataSet.map(function(point, i){
      return <Bar x={xScale(i)}
                     width={xScale.rangeBand()}
                     height={yScale(point)}
                     maxHeight={props.height}
                     offsetTop={props.offsetTop}
                     stroke={props.stroke}
                     fill={props.fill}
                     key={i} />
    });

    return <g className="spyder-bar-chart">
      {bars}
    </g>;
  }
});