import React from "react"
import Player from "./player/player"
import fire from './firebase';

export default class Main extends React.Component {

  constructor() {
    super()
    this.db = fire.database().ref()
  }

  render() {
    return (
      <div>
        <div id='article1'>
          <div id='article-left'>
            <div>
              <Player db={this.db}
                      image={'https://i.imgur.com/N8iL0h5.jpg'}
                      audioContext={this.props.audioContext} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
