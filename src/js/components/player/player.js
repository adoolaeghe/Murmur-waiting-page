import React from "react";
import Pie from "./components/Pie";
import AlbumCover from "./components/AlbumCover";
import AddSlice from "./components/addSlice";
import Palette from './components/palette/Palette';
import fire from './../firebase';
import Timer from './components/timer'
import UserName from './components/userName';
import PlayButton from './components/playButton/playButton'
import BackCircle from './components/playButton/BackCircle'

const image = new Image();
image.crossOrigin = "anonymous";
image.src = "https://i.imgur.com/lK6hCZu.png";

export default class Player extends React.Component {
  constructor(){
    super();
    this.db = fire.database().ref().child('users');
    this.state = {
      slices: [],
      userNames: [],
      mute: 1,
      loop: 1,
      audioContext: new (window.AudioContext || window.webkitAudioContext)(),
      sometime: (new Date().getDate() - 1) / 1000,
      time: 0,
      timer: 1509487147.963
    }
  }

  componentWillMount() {
    setTime.bind(this)()
    const slices = this.state.slices;
    const userNames = this.state.userNames;
    this.db.on('child_added', snap => {
      slices.push({
        color: snap.val().color,
        value: snap.val().value,
      })
      userNames.push({
        userName: snap.val().userName
      })
      this.setState({
        slices: slices,
        userNames: userNames,
      })
    })
    this.db.on('value', snap => {
      this.setState({
        loop: snap.numChildren()
      })
    })
  }

  addSlice(color, value){
    this.db.push().set({ color: color, value: value, userName: Math.random().toString()})
  }

  handleClick() {
    if(this.state.mute === 1){
      handleCircleReducer()
      this.setState({
        mute: 0,
      })
    } else {
      handleCircleEnlarger()
      this.setState({
        mute: 1,
      })
    }
  }

  render() {
    return (
      <div id='wrapper'>
        <Palette image={image}>{palette => (
          <div>
            <AddSlice addSlice= {this.addSlice.bind(this)}
                      slices={this.state}
                      color={palette}
                      loop={this.state.loop}
                      mute = {this.state.mute}
                      audioContext = {this.state.audioContext}
                      time = {this.state.time} />

            <BackCircle color={"white"}
                        opacity={'1'}
                        size={'37.5%'} />

            <AlbumCover />

            <Timer time={this.state.timer}/>

            <PlayButton color={palette.muted}
                        opacity={'0.7'}
                        size={'34%'} />
            <button onClick={this.handleClick.bind(this)} id='on' class='on'></button>
          </div>
        )}
        </Palette>
      </div>
    )
  }
}
