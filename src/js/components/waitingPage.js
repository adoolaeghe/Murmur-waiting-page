import React from "react";
import fire from "../firebase";
import WaitingPageMain from "./articles/waitingPageMain"

export default class WaitingPage extends React.Component {
  constructor() {
    super();
    this.audioContext = new (window.AudioContext ||
      window.webkitAudioContext)();
    this.database = fire.database().ref();
    this.storage = fire.storage();
  }

  render() {
    return (
      <div>
      <img className="waiting-main-wrapper"
           src={"./public/content/images/waitingPage/snowFlakes.svg"}>
      </img>
      <img className="waiting-main-wrapper"
           src={"./public/content/images/waitingPage/snowFlakes.svg"}>
      </img>
        <WaitingPageMain
          audioContext={this.audioContext}
          database={this.database}
          storage={this.storage}
        />
      </div>
    );
  }
}
