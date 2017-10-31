import React from "react";
import Moment from 'react-moment';
import 'moment-timezone';

export default class Timer extends React.Component {
  constructor(props){
      super(props)
      this.state =  {
        elapsed: 0,
        start: 0
      };
  }

  componentDidMount() {
    console.log(this.props.time)
   var intervalId = setInterval(this.timer.bind(this), 1000);
   // store intervalId in the state so it can be accessed later:
   this.setState({intervalId: intervalId});
}

componentWillUnmount() {
   // use intervalId from the state to clear the interval
   clearInterval(this.state.intervalId);
}

timer() {
    this.setState({
      start: Math.round((new Date()).getTime()/1000) - this.props.time
    })
}

render() {
    return (
      <section id='timer'>
      <Moment unix format="mm:ss">{this.state.start}</Moment>
      </section>
    );
}
};
