import React from "react";

import AlbumCover from "./components/albumCover/waitingAlbumCover";
import PieChart from "./components/PieChart/waitingPieChart";



export default class Player extends React.Component {
  constructor(props) {
    super(props);
    this.db = this.props.database.child(this.props.index);
    this.state = {
      slices: [
        {
          color:"#F04043",
          value: 0.5
        },
        {
          color:"#4489CD",
          value: 0.5
        },
        {
          color:"#000000",
          value: 0.5
        },
        {
          color:"#FDE479",
          value: 0.5
        },
        {
          color:"#FFFFFF",
          value: 0.5
        },
        {
          color:"#FE7678",
          value: 0.5
        },
        {
          color:"#FEEFBF",
          value: 0.5
        },
      ],
      userNames: [],
      audioContext: this.props.audioContext,
      index: this.props.index,
      image: new Image(),
      timer: Math.round(new Date().getTime() / 1000),
      loop: 1,
      mute: 0,
      time: 0,
      autoPlay: true
    };
  }


  addSlice(color, value) {
    addSliceToDatabase.bind(this)(color, value);
  }

  /// ON/OFF SWITCH TRIGERED BY PLAY BUTTON PLUS ANIMATION
  onOffSwitch() {
    playerSwitch.bind(this)()
    browserHistory.push('/details1')
  }

  render() {
    return (

          <div className="player">

            <div className="wrapper"
                 id={"container" + this.state.index}>
            <PieChart
              addSlice={this.addSlice.bind(this)}
              storage={this.props.storage}
              db={this.db}
              slices={this.state.slices}
              loop={this.state.loop}
              mute={this.state.mute}
              audioContext={this.state.audioContext}
              time={this.state.time}
              index={this.state.index}
            />

            <AlbumCover index={this.state.index} />

            <p className="waiting-title">
              <span><b>WELCOME</b> TO A NEW ECONOMY OF MUSIC PUBLICATION</span>
            </p>
            <div className="waiting-title-line">
              <div className="waiting-title-line-dot"></div>
            </div>
            <p className="waiting-brand-name">
              <span>murmur</span>
            </p>
            <div className="waiting-brand-name-line">
              <div className="waiting-brand-name-dot"></div>
              <div className="waiting-brand-name-dot right"></div>
              <div className="waiting-brand-name-dot current-time">
                <p>05 January 2018</p>
              </div>
            </div>
            <p className="waiting-sign-up">
              <span>Sign Up Now</span>
            </p>
            <div className="waiting-sign-up-line">
              <div className="waiting-sign-up-line-dot"></div>
                <div className="waiting-sign-up-line-dot right"></div>
              <div className="waiting-vertical-line"></div>
              <div className="waiting-vertical-line right"></div>
            </div>
            <div className="waiting-date">
              <span>April 2018</span>
            </div>
          </div>
        </div>
      )}



}
