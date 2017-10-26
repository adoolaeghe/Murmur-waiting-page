import React from "react";
import fire from '../../firebase';

export default class AddSlice extends React.Component {
  constructor(props) {
    super(props)
    this.db = fire.database().ref().child('users');
    this.state = {
      color: this.props.color,
      source: this.props.audioContext.createBufferSource(),
      gainNode: this.props.audioContext.createGain(),
      mute: this.props.mute,
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
      setAudioNode(request, audioContext, source, snap.numChildren())
    })
  }

  componentWillReceiveProps(nextProps) {
    console.log('newprops')
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
    console.log(this.props.loop)
    return (
      <button onClick={this.handleChange.bind(this)}>
        Add Slice
      </button>
    )
  }
}
