import React from "react"
import Player from "./player/player"
import ReactBodymovin from 'react-bodymovin'
import animation from '../models/data.json'
import {Doughnut} from 'react-chartjs-2';





export default class Main extends React.Component {


  constructor(props) {
    super(props)
    this.switchPlayingIndex = this.switchPlayingIndex.bind(this)
    this.switchAutoPlay = this.switchAutoPlay.bind(this)
    this.state = {
      autoPlay: false,
      playingIndex: 1
    }
  }

  switchAutoPlay() {
    this.setState({
      autoPlay: true
    })
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
                        storage = {this.props.storage.ref('James Brown - Its A Mans Mans Mans World.mp3').getDownloadURL()}
                        imageSource = {'https://i.imgur.com/N8iL0h5.jpg'}
                        audioContext = {this.props.audioContext}
                        index = {1}
                        switchPlayingIndex = {this.switchPlayingIndex}
                        playingIndex = {this.state.playingIndex}
                        autoPlay = {this.state.autoPlay}
                        switchAutoPlay = {this.switchAutoPlay} />

                <Player db = {this.props.database}
                        storage = {this.props.storage.ref('James Brown - Its A Mans Mans Mans World.mp3').getDownloadURL()}
                        imageSource = {'https://i.imgur.com/N8iL0h5.jpg'}
                        audioContext = {this.props.audioContext}
                        index = {3}
                        switchPlayingIndex = {this.switchPlayingIndex}
                        playingIndex = {this.state.playingIndex}
                        autoPlay = {this.state.autoPlay}
                        switchAutoPlay = {this.switchAutoPlay}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
