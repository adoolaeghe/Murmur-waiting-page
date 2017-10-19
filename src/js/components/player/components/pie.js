import React from "react";
import PieChart from 'react-simple-pie-chart';


export default class Title extends React.Component {
  render() {
    return (
      <div class='wrapper1'>
        <div id='dot'></div>
        <PieChart slices = {this.props.slices.slices}/>
      </div>
    )
  }
}
