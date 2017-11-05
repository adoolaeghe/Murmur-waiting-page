import React from "react";
import AlbumCover from "./components/albumCover/AlbumCover";
import PieChart from "./components/PieChart/pieChart";
import Palette from './components/palette/Palette';
import fire from './../firebase';
import Timer from './components/timer/timer'
import UserName from './components/userInfo/userName';
import PlayButton from './components/playButton/playButton'
import BackCircle from './components/playButton/BackCircle'

export default class Player extends React.Component {
  constructor(props){
    super(props);
    this.db = this.props.db.child(this.props.index);
    this.state = {
      slices: [],
      userNames: [],
      mute: 0,
      loop: 1,
      image: new Image(),
      sometime: new Date().getTime(),
      time: 0,
      audioContext: this.props.audioContext,
      timer: Math.round((new Date()).getTime()/1000),
      index: this.props.index,
    }
  }

  componentWillMount() {
    this.state.image.crossOrigin = "anonymous";
    this.state.image.src = this.props.image;

    setTimeInterval.bind(this)()

    addSliceToDatabase.bind(this)()

    updateLoopFromDatabase.bind(this)()
  }

  addSlice(color, value){
    this.db.push().set({ color: color, value: value, userName: Math.random().toString()})
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.turnedOn === this.props.index){
      this.setState({
        mute: 1,
      })
    } else {
      this.setState({
        mute: 0,
      })
    }
  }

  handleClick() {
    playerSwitch.bind(this)()
  }

  render() {
    return (
        <Palette image={this.state.image}>{palette => (
          <div id='wrapper'>
            <PieChart addSlice = {this.addSlice.bind(this)}
                      storage = {this.props.storage}
                      db = {this.db}
                      slices = {this.state}
                      color = {palette}
                      loop={this.state.loop}
                      mute = {this.state.mute}
                      audioContext = {this.state.audioContext}
                      time = {this.state.time}
                      index = {this.state.index} />

            <BackCircle size = {'37.5%'}
                        index = {this.state.index} />

            <AlbumCover index = {this.state.index} />

            <Timer time = {this.state.timer}
                   loop = {this.state.loop}
                   index = {this.state.index} />

            <PlayButton color = {palette.muted}
                        opacity = {'0.7'}
                        size = {'34%'}
                        index = {this.state.index} />

            <button onClick = {this.handleClick.bind(this)} id='on' class={'on' + this.props.index} ></button>
          </div>
        )}
      </Palette>
    )
  }
}
