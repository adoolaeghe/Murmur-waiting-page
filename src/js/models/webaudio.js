
var audioContext = new (window.AudioContext || window.webkitAudioContext)();
var source = audioContext.createBufferSource();
var request = new XMLHttpRequest();
var gainNode = audioContext.createGain();
var mute = "none"
gainNode.gain.value = 0;
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

  function handleMute() {
    if(mute == "none") {
    gainNode.gain.value = 1;
    mute = "activated";
    mute.innerHTML = "Unmute";
    } else {
      mute = "none"
      gainNode.gain.value = 0;
    }
  }
request.send();
