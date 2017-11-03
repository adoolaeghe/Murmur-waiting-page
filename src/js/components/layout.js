import React from "react";
import Main from './main'
import Player from "./player/player"
export default class Layout extends React.Component {

  constructor() {
    super()
    this.audioContext =  new (window.AudioContext || window.webkitAudioContext)()
  }

  render() {
    return (
      <div>
        <Main audioContext= {this.audioContext} />
      </div>
    );
  }
}
