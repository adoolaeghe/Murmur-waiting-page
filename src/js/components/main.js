import React from "react"
import Player from "./player/player"

export default class Main extends React.Component {

  constructor() {
    super()
    this.switchPlayingIndex = this.switchPlayingIndex.bind(this)
    this.state = {
      playingIndex: 1
    }
  }

  switchPlayingIndex(index) {
    this.setState({
      playingIndex: index
    })
  }

  render() {

    return (
      <div>
        <div id='article1'>
          <div id='article-left'>
            <div id='container'>
                <Player db = {this.props.database}
                        storage = {this.props.storage.ref('vanishing.mp3').getDownloadURL()}
                        imageSource = {'https://i.imgur.com/N8iL0h5.jpg'}
                        audioContext = {this.props.audioContext}
                        index = {1}
                        switchPlayingIndex = {this.switchPlayingIndex}
                        playingIndex = {this.state.playingIndex} />

                <Player db = {this.props.database}
                        storage = {this.props.storage.ref('vanishing.mp3').getDownloadURL()}
                        imageSource = {'https://i.imgur.com/N8iL0h5.jpg'}
                        audioContext = {this.props.audioContext}
                        index = {3}
                        switchPlayingIndex = {this.switchPlayingIndex}
                        playingIndex = {this.state.playingIndex} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
