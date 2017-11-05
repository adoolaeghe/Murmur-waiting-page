/// need to be refactored... 

function setAudioNode(snap, storage) {
  const sp = snap
  const mute = this.props.mute
  var audioContext = this.props.audioContext
  var request = new XMLHttpRequest();
  request.open('GET', storage, true);
  request.responseType = 'arraybuffer';
  request.onload = function(props) {
  var audioData = request.response;
  var gainNode = this.state.gainNode
  gainNode.gain.value = this.props.mute;
  gainNode.connect(audioContext.destination);
  this.props.audioContext.decodeAudioData(audioData, function(AudioBuffer) {
      if(this.state.source.buffer == undefined) {
        this.state.source.buffer = AudioBuffer;
        this.state.source.loopStart = 100;
        this.state.source.start(0,100);
      }
      this.state.source.playbackRate.value = 1;
      this.state.source.loop = true;

      this.state.source.loopEnd= 100 + sp.numChildren();
      this.state.source.connect(gainNode);
    }.bind(this),
    function(e){"Error with decoding audio data" + e.err});
  }.bind(this)
  request.send();
}

function updateAudioNode() {
  const mute = this.props.mute
  var audioContext = this.props.audioContext
  var source = this.state.source
  var gainNode = this.state.gainNode
  gainNode.gain.value = this.props.mute;
  gainNode.connect(audioContext.destination);
  var request = new XMLHttpRequest();
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

function updateAudioLoop() {
  const loop = this.props.loop
  const mute = this.props.mute
  var audioContext = this.props.audioContext
  var source = this.state.source
  var gainNode = this.state.gainNode
  gainNode.connect(audioContext.destination);
  var request = new XMLHttpRequest();
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

function muteSwitch() {
  if(this.props.turnedOn === this.props.index){
    this.setState({
      mute: 1,
    })
  } else {
    this.setState({
      mute: 0,
    })
  }
}
