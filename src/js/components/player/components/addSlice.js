import React from "react";

export default class AddSlice extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      source: this.props.audioContext.createBufferSource(),
      gainNode: this.props.audioContext.createGain(),
      mute: this.props.mute
    }
  }

  handleChange() {

    function componentToHex(c) {
      var hex = c.toString(16);
      return hex.length == 1 ? "0" + hex : hex;
    }

    function rgbToHex(r, g, b) {
      return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }

    function hexToRgb(hex) {
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : null;
    }
    const color = this.props.color;
    const keys = Object.keys(color);
    const colour = keys[Math.floor(Math.random()*keys.length)];
    const rgb = hexToRgb(color[colour]);
    const r = (parseInt(rgb.r)+Math.floor(Math.random() * (50 - 1 + 1)) + 1);
    const g = (parseInt(rgb.g)+Math.floor(Math.random() * (50 - 1 + 1)) + 1);
    const b = (parseInt(rgb.b)+Math.floor(Math.random() * (50 - 1 + 1)) + 1);
    const newColor= color[colour]
    const newValue= 0.5
    this.props.addSlice(rgbToHex(r,g,b), newValue)
    clearInterval(this.interval);
  }

  componentWillMount(AudioBuffer) {
    console.log(' helllo Component')

    const loop = this.props.loop
    var audioContext = this.props.audioContext
    var source = this.state.source
    var gainNode = this.state.gainNode
    var request = new XMLHttpRequest();
    request.open('GET', './public/content/sound/vanishing.mp3', true);
    request.responseType = 'arraybuffer';
    request.onload = function(props) {
    var audioData = request.response;
    audioContext.decodeAudioData(audioData, function(AudioBuffer) {
        source.buffer = AudioBuffer;
        source.playbackRate.value = 1;
        source.loop = true;
        source.loopStart = 100;
        source.loopEnd= 100 + (loop);
        source.start(0,100);
        console.log(loop)
      },
      function(e){"Error with decoding audio data" + e.err});
    }
    request.send();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.mute !== nextProps.mute) {
      console.log(' helllo mute')
      console.log(this.props.mute)
      const loop = this.props.loop
      var audioContext = this.props.audioContext
      var source = this.state.source
      var gainNode = this.state.gainNode
      var request = new XMLHttpRequest();
      gainNode.gain.value = this.props.mute;
      gainNode.connect(audioContext.destination);
      request.open('GET', './public/content/sound/vanishing.mp3', true);
      request.responseType = 'arraybuffer';
      request.onload = function() {
      var audioData = request.response;
      audioContext.decodeAudioData(audioData, function() {
          source.connect(gainNode);
        },
        function(e){"Error with decoding audio data" + e.err});
      }
      request.send();
     }

     if (this.props.loop !== nextProps.loop) {
       console.log(' helllo loop')
       console.log(this.props.loop)
       const loop = this.props.loop
       var audioContext = this.props.audioContext
       var source = this.state.source
       var gainNode = this.state.gainNode
       var request = new XMLHttpRequest();
       gainNode.connect(audioContext.destination);
       request.open('GET', './public/content/sound/vanishing.mp3', true);
       request.responseType = 'arraybuffer';
       request.onload = function() {
       var audioData = request.response;
       audioContext.decodeAudioData(audioData, function() {
           source.loopEnd= 100 + loop;
           source.connect(gainNode);
         },
         function(e){"Error with decoding audio data" + e.err});
       }
       request.send();
      }
  }

  render() {
    return (
      <button onClick={this.handleChange.bind(this)}>
        Add Slice
      </button>
    )
  }
}
