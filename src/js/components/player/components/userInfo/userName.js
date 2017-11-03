import React from "react";
import PieChart from 'react-simple-pie-chart';
import fire from '../../../firebase';

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
     <div >
       <svg width="304px" height="126px" viewBox="0 0 304 126" version="1.1">
           <defs></defs>
           <g id="Page-1" stroke="none" stroke-width="1" fill={this.state.color} fill-rule="evenodd">
               <g id="Artboard" transform="translate(-202.000000, -392.000000)" fill={this.state.color}>
                   <path d="M202,392 C251.6871,427.159026 302.1871,444.73854 353.5,444.73854 C404.8129,444.73854 455.646233,427.159026 506,392 L506,518 L202,518 L202,392 Z" id="Rectangle"></path>
               </g>
           </g>
       </svg>
      <p id='name'>{this.state.name}</p>
     </div>
   );
 }
}
