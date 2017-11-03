import React from "react";
import Moment from 'react-moment';
import 'moment-timezone';

export default class Timer extends React.Component {
  constructor(props){
    super(props)
    this.state =  {
      elapsed: 0,
      start: 0,
      time: Math.round((new Date()).getTime()/1000)
    };
  }

  componentDidMount() {
    var intervalId = setInterval(this.timer.bind(this), 1000);
    this.setState({intervalId: intervalId});
  }

  componentWillUnmount() {
     clearInterval(this.state.intervalId);
  }

  timer() {
    console.log(this.props.loop)
    console.log(this.state.start)
    if(this.state.start === this.props.loop-1) {
      this.setState({
        start: 0,
        time: Math.round((new Date()).getTime()/1000)
      })
    } else {
      this.setState({
        start: Math.round((new Date()).getTime()/1000) - this.state.time
      })
    }
  }

  render() {
    return (
      <section id='timer'>
        {this.state.start}
      </section>
    );
  }
};
