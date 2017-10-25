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
      console.log(this.state.length)
    })
  }

  render() {
    return (
      <div id='wrapper1' style={{animation: 'rotate360 4s infinite linear'}}>
        <div id='dot'></div>
        <PieChart slices = {this.props.slices.slices} />
      </div>
    )
  }
}
