import React from "react";
import Pie from "./pie";
import fire from '../../firebase';
import PieChart from 'react-simple-pie-chart';
import UserInfo from './userInfo'
import Palette from './palette/Palette';

const image = new Image();
image.crossOrigin = "anonymous";
image.src = "https://i.imgur.com/lK6hCZu.png";

export default class AddSlice extends React.Component {
  constructor(props) {
    super(props)
    this.db = fire.database().ref().child('users');
    this.storage = fire.storage()
    this.state = {
      color: this.props.color,
      source: this.props.audioContext.createBufferSource(),
      gainNode: this.props.audioContext.createGain(),
      time: this.props.time,
      mute: this.props.mute,
      events: 1,
      add: 'which color?',
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

  componentWillReceiveProps(nextProps) {
    this.setState({
      time: this.props.time,
    })
    eventListenerForEachSlice.bind(this)()
    if (this.props.mute !== nextProps.mute) {
      updateAudioNode.bind(this)()
    } else if (this.props.loop !== nextProps.loop) {
      updateAudioLoop.bind(this)()
    }
  }

  render() {
    if(this.props.loop !== null) {
      return (
        <div>
          <Pie slices = {this.props.slices} time= {this.state.time}/>
          <UserInfo add= {this.state.add} />
          <Palette image={image}>{palette => (
            <button id='add' style={{background: 'linear-gradient('+palette.muted+', '+palette.vibrant+')'}} onClick={this.handleChange.bind(this)}>
            Add
            </button>
           )}
          </Palette>
        </div>
      )
    }
  }
}
