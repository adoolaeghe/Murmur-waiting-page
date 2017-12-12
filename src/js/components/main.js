import React from "react";
import Player from "./player/player";
import ReactBodymovin from "react-bodymovin";
import animation from "../models/data.json";
import { Doughnut } from "react-chartjs-2";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.switchPlayingIndex = this.switchPlayingIndex.bind(this);
    this.switchAutoPlay = this.switchAutoPlay.bind(this);
    this.state = {
      autoPlay: false,
      playingIndex: 1
    };
  }

  switchAutoPlay() {
    this.setState({
      autoPlay: true
    });
  }

  switchPlayingIndex(index) {
    this.setState({
      playingIndex: index
    });
  }

  render() {
    return (
      <main>
        <section className="navBar row">
          <div className="dot-left" id="1"></div>
          <div className="dot-right" id="2"></div>
          <img className="navBar-logo col s1">
          </img>
          <div className="navBar-logo-title col s5">
            Echomancy
          </div>
          <div className="navBar-grid-left col s2">
            <div className="dot-left" id="3"></div>
          </div>
          <div className="navBar-grid-center col s2">
            <div className="dot-left" id="4"></div>
          </div>
          <div className="navBar-grid-right col s2">
            <div className="dot-left" id="5"></div>
          </div>
        </section>
        <section className="article1 row">
          <div className="dot-left" id="6"></div>
          <div className="dot-right" id="7"></div>
          <div className="article1-main col s6">
            <div className="dot-left" id="8"></div>
          </div>
          <div className="article1-grid-left col s2">
            <div className="dot-left" id="9"></div>
          </div>
          <div className="article1-grid-center col s2">
            <div className="dot-left" id="10"></div>
          </div>
          <div className="article1-grid-right col s2">
            <div className="dot-left" id="11"></div>
          </div>
        </section>
        <section className="article2 row">
          <div className="dot-left" id="12"></div>
          <div className="dot-right" id="13"></div>
          <div className="article2-main col s8"></div>
          <div className="article2-grid-left col s2">
            <div className="dot-left" id="14"></div>
          </div>
          <div className="article2-grid-right col s2">
            <div className="dot-left" id="15"></div>
            <div className="article2-media-button-twitter cols12">
              <div className="dot-left" id="16"></div>
              <div className="dot-right" id="17"></div>
            </div>
            <div className="article2-media-button-medium cols12">
              <div className="dot-left" id="18"></div>
            </div>
          </div>
        </section>
        <section className="article3 row">
          <div className="dot-left" id="19"></div>
          <div className="dot-right" id="20"></div>
          <div className="article3-main col s12"></div>
        </section>
        <section className="article4 row">
          <div className="dot-left" id="21"></div>
          <div className="dot-right" id="22"></div>
          <div className="article4-main col s12"></div>
        </section>
      </main>
    );
  }
}
