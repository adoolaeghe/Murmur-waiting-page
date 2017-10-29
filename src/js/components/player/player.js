import React from "react";
import Pie from "./components/Pie";
import AlbumCover from "./components/AlbumCover";
import AddSlice from "./components/addSlice";
import Palette from './components/palette/Palette';
import fire from './../firebase';
import UserName from './components/userName';


const name = 'hello'
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
      time: 0
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
      document.getElementById("off").classList.toggle('on');
      document.getElementById("on").classList.remove('on');
      document.getElementById("on").classList.add('off');
      this.setState({
        mute: 0,
      })
    } else {
      document.getElementById("off").classList.remove('on');
      document.getElementById("off").classList.add('off');
      document.getElementById("on").classList.remove('off');
      document.getElementById("on").classList.add('on');
      this.setState({
        mute: 1,
      })
    }
  }


  render() {
    return (
      <div id='wrapper'>
        <Palette image={image}>{palette => (
          <AddSlice addSlice= {this.addSlice.bind(this)} slices={this.state} color={palette} loop={this.state.loop} mute = {this.state.mute} audioContext = {this.state.audioContext} time = {this.state.time} />
        )}
        </Palette>
        <AlbumCover />
        <svg id ="circle" expanded = "true" height = "260px" width = "240px">
          <circle id ="circle1"  cx = "50%" cy = "50%" r = "37.5%" fill = "white" opacity='0.5'/>
          <animate xlinkHref="#circle1" attributeName="r" values="37.5% ; 0% ;15%; 18%; 20% ; 21% ; 22% " keyTimes="0 ;0.23; 0.25 ; 0.35; 0.5 ; 0.75 ; 1" dur="1s" begin="click" fill="freeze" />
          <animate xlinkHref="#circle1" attributeName="opacity" values="0.5 ; 0 ;0.5; 0.5 ; 0.3 ; 0.1 ; 0 " keyTimes="0 ;0.23; 0.25 ; 0.35; 0.5 ; 0.75 ; 1" dur="1s" begin="click" fill="freeze" />
        </svg>
        <button id='on' class='on' onClick={this.handleClick.bind(this)}>
        </button>
        <button id='off' class='off' onClick={this.handleClick.bind(this)}>
        </button>
      </div>
    )
  }
}
