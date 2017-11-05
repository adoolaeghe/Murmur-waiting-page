import React from "react"
import Player from "./player/player"

export default class Main extends React.Component {

  constructor() {
    super()
    this.switchPlayer = this.switchPlayer.bind(this)
    this.state = {
      turnedOn: 1
    }
  }

  switchPlayer(index) {
    this.setState({
      turnedOn: index
    })
  }

  render() {

    return (
      <div>
        <div id='article1'>
          <div id='article-left'>
            <div id='container'>
              <Player db={this.props.database}
                      storage={this.props.storage}
                      image={'https://i.imgur.com/N8iL0h5.jpg'}
                      audioContext={this.props.audioContext}
                      index={1}
                      switchPlayer = {this.switchPlayer}
                      turnedOn = {this.state.turnedOn} />

              <Player db={this.props.database}
                      storage= {this.props.storage}
                      image={'https://i.imgur.com/N8iL0h5.jpg'}
                      audioContext={this.props.audioContext}
                      index={3}
                      switchPlayer = {this.switchPlayer}
                      turnedOn = {this.state.turnedOn} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
