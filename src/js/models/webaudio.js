function setAudioNode(request, audioContext, source, loop) {
  console.log(loop)
  console.log('setAudio')
  request.open('GET', './public/content/sound/vanishing.mp3', true);
  request.responseType = 'arraybuffer';
  request.onload = function(props) {
  var audioData = request.response;
  audioContext.decodeAudioData(audioData, function(AudioBuffer) {
      source.buffer = AudioBuffer;
      source.playbackRate.value = 1;
      source.loop = true;
      source.loopStart = 100;
      source.loopEnd= 100 + loop;
      source.start(0,100);
    },
    function(e){"Error with decoding audio data" + e.err});
  }
  request.send();
}

function updateAudioNode(request, audioContext, source, gainNode) {
  console.log(audioContext.currentTime)
  request.open('GET', './public/content/sound/vanishing.mp3', true);
  request.responseType = 'arraybuffer';
  request.onload = function() {
  var audioData = request.response;
  console.log(audioData)
  console.log(source)
  console.log(gainNode)
  console.log(request)
  audioContext.decodeAudioData(audioData, function() {
      source.connect(gainNode);
    },
    function(e){"Error with decoding audio data" + e.err});
  }
  request.send();
}

function updateAudioLoop(request, audioContext, source, loop, gainNode) {
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
