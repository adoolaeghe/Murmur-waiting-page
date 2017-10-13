import React from "react";
import Title from "./header/title"
import Player from "./player/player"

export default class Main extends React.Component {

  constructor() {
    super();
    this.state = {
      title: "Welcome",
    };
  }
  render() {
    console.log(this)
    return (
      <div class='article1'>
        <div class='article-left'>
          <Title />
          <Player />
        </div>
        <div class='article-right'>
        </div>
      </div>
    );
  }
}
