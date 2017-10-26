
function webAudio(audioContext, gainNode, source, value) {
  var request = new XMLHttpRequest();
  gainNode.gain.value = value;
  gainNode.connect(audioContext.destination);
  request.open('GET', './public/content/sound/vanishing.mp3', true);
  request.responseType = 'arraybuffer';
  request.onload = function() {
    var audioData = request.response;
    audioContext.decodeAudioData(audioData, function(buffer) {
        myBuffer = buffer;
        songLength = buffer.duration;
        source.buffer = myBuffer;
        source.playbackRate.value = 1;
        source.loop = true;
        source.loopStart = 300;
        source.loopEnd= 300 + 4;
        source.start(0,300);
        source.connect(gainNode);
      },
      function(e){"Error with decoding audio data" + e.err});
    }
    request.send();
  }

  function handleMute() {
      console.log("heere")
      gainNode.gain.value = 1;
  }
