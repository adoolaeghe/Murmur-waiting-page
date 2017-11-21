import React from "react";
import Main from "./main";
import Player from "./player/player";
import fire from "../firebase";
export default class Layout extends React.Component {
  constructor() {
    super();
    this.audioContext = new (window.AudioContext ||
      window.webkitAudioContext)();
    this.database = fire.database().ref();
    this.storage = fire.storage();
  }

  render() {
    return (
      <Main
        audioContext={this.audioContext}
        database={this.database}
        storage={this.storage}
      />
    );
  }
}
