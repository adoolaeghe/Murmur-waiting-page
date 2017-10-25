import React from "react";
import PieChart from 'react-simple-pie-chart';



export default class Pie extends React.Component {
  render() {
    return (
      <div id='wrapper1' style={{animation: 'rotate360 4s infinite linear'}}>
        <div id='dot'></div>
        <PieChart slices = {this.props.slices.slices} />
      </div>
    )
  }
}
