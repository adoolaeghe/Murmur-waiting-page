import React from "react";
import PieChart from 'react-simple-pie-chart';
import fire from '../../firebase';


export default class Pie extends React.Component {
  constructor() {
    super();
    this.db = fire.database().ref().child('users');
    this.state = {
      length: 1,
     }
  }

  componentWillMount() {
    this.db.on('value', snap => {
      this.setState({
        length: snap.numChildren()
      })
    })
  }

  render() {
    console.log(this.props.loop)
    if(this.props.loop !== null) {
      return (
        <div id='wrapper1' style={{animation: 'rotate360 '+ this.props.loop.toString() +'s infinite linear'}}>
          <PieChart slices = {this.props.slices.slices} />
        </div>
      )
    } else {
      return (
        <div id='wrapper1'>
          <PieChart slices = {this.props.slices.slices} />
        </div>
      )
    }
  }
}
