import React from "react";
import PieChart from 'react-simple-pie-chart';
import AddSlice from '../addSlice/addSlice';

export default class TrackChart extends React.Component {
  constructor(props) {
    super(props)
    this.db = this.props.db;
    this.storage = this.props.storage
    this.state = {
      color: this.props.color,
      source: this.props.audioContext.createBufferSource(),
      gainNode: this.props.audioContext.createGain(),
      time: this.props.time,
      mute: 0
    }
  }

  componentWillMount(AudioBuffer) {
    this.storage.then((url) => {
      this.db.on('value', snap => {
        setAudioNode.bind(this)(snap, url)
      })
    })
  }

  componentDidUpdate(nextProps) {
    if (this.props.mute !== nextProps.mute) {
      updateAudioNode.bind(this)()
    } else if (this.props.loop !== nextProps.loop) {
      updateAudioLoop.bind(this)()
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      time: this.props.time,
    })
    eventListenerForEachSlice.bind(this)()
  }

  render() {
    if(this.props.loop !== null) {
      return (
        <div>
          <div id='wrapper1' class={'wrapper' + this.props.index} style={{WebkitTransform: 'rotate('+this.state.time.toString()+'deg)'}}>
            <div id='dot'></div>
            <PieChart slices = {this.props.slices.slices} />
          </div>
          <AddSlice addSlice = {this.props.addSlice} color = {this.state.color} />
        </div>
      )
    }
  }
}
