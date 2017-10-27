import React from "react"
import Player from "./player/player"
import NavBar from "./navBar/navBar"
import Explanation from "./explanation/explanation"
import fire from './firebase';

export default class Main extends React.Component {

  render() {
    return (
      <div>
        <div id='article1'>
          <div id='article-left'>
            <Player colors = {this.props.colors}/>
          </div>
          <div id='article-right'>
            <Explanation />
          </div>
        </div>
      </div>
    );
  }
}
