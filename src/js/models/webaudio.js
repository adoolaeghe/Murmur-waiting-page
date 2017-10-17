var createPlayer = require('web-audio-player')

var audio = createPlayer('./public/content/sound/vanishing.mp3')

audio.on('load', () => {
  console.log('Audio loaded...')

  // start playing audio file
  audio.play()

  // and connect your node somewhere, such as
  // the AudioContext output so the user can hear it!
  audio.node.connect(audio.context.destination)
})

audio.on('ended', () => {
  console.log('Audio ended...')
})
