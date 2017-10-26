import React from "react";
export default class Audio extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      source: this.props.audioContext.createBufferSource(),
      gainNode: this.props.audioContext.createGain(),
      mute: this.props.mute
    }
  }

  componentWillMount(AudioBuffer) {
    var audioContext = this.props.audioContext
    var source = this.state.source
    var gainNode = this.state.gainNode
    var request = new XMLHttpRequest();
    request.open('GET', './public/content/sound/vanishing.mp3', true);
    request.responseType = 'arraybuffer';
    request.onload = function() {
    var audioData = request.response;
    audioContext.decodeAudioData(audioData, function(AudioBuffer) {
        source.buffer = AudioBuffer;
        source.playbackRate.value = 1;
        source.loop = true;
        source.loopStart = 300;
        source.loopEnd= 300 + 4;
        source.start(0,300);
      },
      function(e){"Error with decoding audio data" + e.err});
    }
    request.send();
  }

  componentWillReceiveProps() {
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

  render() {
    return (
      <div></div>
    );
  }
}
