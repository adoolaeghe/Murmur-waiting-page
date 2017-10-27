import React from "react";
import Pie from "./pie";
import fire from '../../firebase';
import PieChart from 'react-simple-pie-chart';

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
      add: "",
    }
  }
  handleChange() {
    this.props.addSlice(generatePalette(this.state.color), 0.5)
  }

  componentWillMount(AudioBuffer) {
    this.db.on('value', snap => {
      var audioContext = this.props.audioContext
      var source = this.state.source
      var gainNode = this.state.gainNode
      var request = new XMLHttpRequest();
      setAudioNode(request, audioContext, source, snap.numChildren(), this.props.audio)
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      time: this.props.time,
    })
    eventListenerForEachSlice.bind(this)()



    const loop = this.props.loop
    const mute = this.props.mute
    var audioContext = this.props.audioContext
    var source = this.state.source
    var gainNode = this.state.gainNode
    var request = new XMLHttpRequest();
    if (mute !== nextProps.mute) {
      gainNode.gain.value = this.props.mute;
      gainNode.connect(audioContext.destination);
      updateAudioNode(request, audioContext, source, gainNode)
    } else if (loop !== nextProps.loop) {
       gainNode.connect(audioContext.destination);
       updateAudioLoop(request, audioContext, source, loop, gainNode)
    }
  }


  render() {
    if(this.props.loop !== null) {
      return (
        <div>
          <Pie slices = {this.props.slices} time= {this.state.time}/>
          <button onClick={this.handleChange.bind(this)}>
            {this.state.add}
          </button>
        </div>
      )
    }
  }
}
