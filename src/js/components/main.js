import React from "react"
import Player from "./player/player"
import fire from './firebase';

export default class Main extends React.Component {

  render() {
    return (
      <div>
        <div id='article1'>
          <div id='article-left'>
            <Player colors = {this.props.colors}/>
          </div>
        </div>
      </div>
    );
  }
}
