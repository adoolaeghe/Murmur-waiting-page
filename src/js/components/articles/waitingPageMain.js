import React from "react";
import Player from "../player/waitingPlayer"

export default class Arcticle1 extends React.Component {
  render() {
    return(

          <Player audioContext={this.props.audioContext}
                    database={this.props.database}
                    storage = {this.props.storage.ref('vanishing.mp3').getDownloadURL()}
                    imageSource = {'https://i.imgur.com/N8iL0h5.jpg'}
                    index= {1}
                    playingIndex={this.props.playingIndex}
                    autoPlay={this.props.autoPlay}
          />

    )
  }
}
