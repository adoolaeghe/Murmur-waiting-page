import React from "react";
import PieChart from 'react-simple-pie-chart';


export default class Title extends React.Component {

  render() {
    console.log(this.props)
    return (
      <div class='wrapper1'>
        <PieChart slices = {this.props.slices.slices}/>
      </div>
    )
  }
}
