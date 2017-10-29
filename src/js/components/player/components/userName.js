import React from "react";
import PieChart from 'react-simple-pie-chart';
import fire from '../../firebase';

export default class UserName extends React.Component {
  constructor() {
   super();
   this.db = fire.database().ref().child('users');
   this.state = {
     number: 1,
     length: 1,
     name: null,
     color: null
    }
  }

  componentWillMount() {
    this.db.on('value', snap => {
      if (this.interval) {
        clearInterval(this.interval);
      }
      this.interval = setInterval(() =>
      this.setState({
        name: this.props.name[this.state.number].userName,
        length: this.props.name,
        color: this.props.color[this.state.number].color,
        number: this.state.number != (3-1) ? this.state.number + 1 : 0,
      }), 4000/(snap.numChildren()));
    })
  }

  componentDidMount() {
   clearInterval(this.interval);
  }

 render() {
   return (
     <div id='username'style={style}>
      <p id='name'>{this.state.name}</p>
     </div>
   );
 }
}
