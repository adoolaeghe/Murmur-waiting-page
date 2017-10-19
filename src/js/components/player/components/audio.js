import React from 'react'
import ReactHowler from 'react-howler'

export default class Audio extends React.Component {

  render () {
    return (
      <div>
        <button onClick={this.MuteOn.bind(this)}> Off </button>
        <button onClick={this.MuteOff.bind(this)}> On </button>
        <ReactHowler
          src='./public/content/sound/vanishing.mp3'
          playing={true}
          mute={this.props.mute}
          loop={true}
          volume={1}
        />
      </div>
    )
  }
}
