import React from "react";
import Pie from "./pie";
import PieChart from 'react-simple-pie-chart';
import UserInfo from '../userInfo/userInfo'

export default class Slice extends React.Component {
  constructor(props) {
    super(props)
    this.db = this.props.db;
    this.state = {
      color: this.props.color,
      source: this.props.audioContext.createBufferSource(),
      gainNode: this.props.audioContext.createGain(),
      time: this.props.time,
      mute: 0,
    }
  }
  handleChange() {
    this.props.addSlice(generateRgb(this.state.color), 0.5)
  }

  componentWillMount(AudioBuffer) {
    this.db.on('value', snap => {
      setAudioNode.bind(this)(snap)
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
          <Pie slices = {this.props.slices} time= {this.state.time} index = {this.props.index}/>
          <button id='add' style={{background: 'linear-gradient('+this.state.color.muted+', '+this.state.color.lightMuted+')'}} onClick={this.handleChange.bind(this)}>
            Add
          </button>
        </div>
      )
    }
  }
}
