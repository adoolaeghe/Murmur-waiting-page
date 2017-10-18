var audioContext = new (window.AudioContext || window.webkitAudioContext)();
var source = audioContext.createBufferSource();
var request = new XMLHttpRequest();
const time = 4
request.open('GET', './public/content/sound/vanishing.mp3', true);
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
        source.loopStart = 80;
        source.loopEnd= 80 + time;
        source.start(0,80);
      },
      function(e){"Error with decoding audio data" + e.err});
  }
request.send();



$( document ).ready(function() {
    console.log('here')
    $('.wrapper1').css("animation","rotate360 " + time +"s infinite linear");
});
