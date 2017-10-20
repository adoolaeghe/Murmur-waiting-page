import React from "react";
import PieChart from 'react-simple-pie-chart';

export default class UserName extends React.Component {
  constructor() {
   super();
   this.state = {
     number: 1,
     name: "",
     color: ""
    }
  }

  componentDidMount() {
    this.interval = setInterval(() =>
    this.setState({
                  name: this.props.name[this.state.number].userName,
                  color: this.props.color[this.state.number].color,
                  number: this.state.number != 14 ? this.state.number + 1 : 0, }), 1000);
    }

  componentWillUnmount() {
   clearInterval(this.interval);
  }

 render() {
   var style = {
     background: this.state.color
   };
   return (
     <div id='username'style={style}>{this.state.name}</div>
   );
 }
}
