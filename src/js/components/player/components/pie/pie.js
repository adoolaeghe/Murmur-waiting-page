import React from "react";
import PieChart from 'react-simple-pie-chart';

export default class Pie extends React.Component {
  render() {
    return (
      <div id='wrapper1' class={'wrapper' + this.props.index} style={{WebkitTransform: 'rotate('+this.props.time.toString()+'deg)'}}>
        <PieChart slices = {this.props.slices.slices} />
        <div id='dot'></div>
      </div>
    )
  }
}
