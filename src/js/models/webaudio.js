// Create an AudioContext instance for this sound
var audioContext = new (window.AudioContext || window.webkitAudioContext)();
// Create a buffer for the incoming sound content
var source = audioContext.createBufferSource();
// Create the XHR which will grab the audio contents
var request = new XMLHttpRequest();
// Set the audio file src here
request.open('GET', './public/content/sound/vanishing.mp3', true);
// Setting the responseType to arraybuffer sets up the audio decoding
request.responseType = 'arraybuffer';
request.onload = function() {
    var audioData = request.response;

    audioContext.decodeAudioData(audioData, function(buffer) {
        myBuffer = buffer;
        songLength = buffer.duration;
        source.buffer = myBuffer;
        source.playbackRate.value = 1;
        source.connect(audioContext.destination);
        source.loop = true;
        source.loopStart = 82.8;
        source.loopEnd= 83;
        source.start(0,80);
      },

      function(e){"Error with decoding audio data" + e.err});

  }


// Send the request which kicks off
request.send();
