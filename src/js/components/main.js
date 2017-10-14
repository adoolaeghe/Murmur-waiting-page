import React from "react";
import Title from "./header/title"
import Player from "./player/player"

export default class Main extends React.Component {

  render() {
    console.log(this.props)
    return (
      <div class='article1'>
        <div class='article-left'>
          <Title colors = {this.props.colors}/>
          <Player colors = {this.props.colors}/>
        </div>
        <div class='article-right'>
        </div>
      </div>
    );
  }
}
