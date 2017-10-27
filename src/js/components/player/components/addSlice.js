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
      add: ""
    }
  }

  handleChange() {
    const keys = Object.keys(this.state.color);
    const colour = keys[Math.floor(Math.random()*keys.length)];
    const rgb = hexToRgb(this.state.color[colour]);
    const newValue= 0.5
    this.props.addSlice(generatePalette(rgb), newValue)
  }

  componentWillMount(AudioBuffer) {
    this.db.on('value', snap => {
      const loop = this.props.loop
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

    const elements = Array.from(document.querySelectorAll('path'))
    if ((this.props.loop == elements.length) && (this.state.events === 1)){
      elements.forEach(function(el) {
        el.addEventListener("click", function(){
          this.setState({
            add: el.getAttribute("fill")
          })
        }.bind(this))
      }.bind(this))
      this.setState({
        events: this.state.events + 1
      })
    }



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
