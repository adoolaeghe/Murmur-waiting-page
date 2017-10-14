import React from "react";
import PieChart from 'react-simple-pie-chart';

export default class Title extends React.Component {
  handleChange(e) {
    const slices = e.target.value
    this.props.addSlice(slices)
  }
  render() {
    return (
      <div class='wrapper1'>
        <PieChart slices = {this.props.slices}/>
      </div>
    )
  }
}
