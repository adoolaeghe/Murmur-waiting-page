import React from 'react'
import ReactHowler from 'react-howler'

export default class Audio extends React.Component {

  MuteOff () {
    const mute = false
    this.props.handleMute(mute)
  }

  MuteOn () {
    const mute = true
    this.props.handleMute(mute)
  }


  render () {
    return (
      <div>
        <button onClick={this.MuteOn.bind(this)}> Mute On </button>
        <button onClick={this.MuteOff.bind(this)}> Mute Off </button>
        <ReactHowler
          src='./public/content/sound/vanishing.mp3'
          playing={true}
          mute={this.props.mute}
          loop={true}
          volume={0.1}
        />
      </div>
    )
  }
}
