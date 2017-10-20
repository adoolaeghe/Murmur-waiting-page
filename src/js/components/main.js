import React from "react";
import Title from "./header/title"
import Player from "./player/player"
import Explanation from "./explanation/explanation"

export default class Main extends React.Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <div class='article1'>
          <div class='article-left'>
            <Title />
            <Player colors = {this.props.colors}/>
          </div>
          <div class='article-right'>
            <Explanation />
          </div>
        </div>
        <div class='article2'>
        </div>
      </div>
    );
  }
}
