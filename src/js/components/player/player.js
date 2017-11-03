import React from "react";
import Pie from "./components/pie/Pie";
import AlbumCover from "./components/albumCover/AlbumCover";
import Slice from "./components/pie/slice";
import Palette from './components/palette/Palette';
import fire from './../firebase';
import Timer from './components/timer/timer'
import UserName from './components/userInfo/userName';
import PlayButton from './components/playButton/playButton'
import BackCircle from './components/playButton/BackCircle'

export default class Player extends React.Component {
  constructor(props){
    super(props);
    this.db = this.props.db.child('users');
    this.state = {
      slices: [],
      userNames: [],
      mute: this.props.mute,
      loop: 1,
      image: new Image(),
      audioContext: this.props.audioContext,
      sometime: new Date().getTime(),
      time: 0,
      timer: Math.round((new Date()).getTime()/1000),
      index: this.props.index,
      smallCircleIndex: this.props.index,
      largeCircleIndex: this.props.index + 1
    }
  }

  componentWillMount() {
    this.state.image.crossOrigin = "anonymous";
    this.state.image.src = this.props.image;

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
    if(this.props.turnedOn === this.props.index) {
      if(this.state.mute === 1){
        this.props.switchPlayer(this.state.index)
        handleCircleEnlarger(('wrapper' + this.state.index),
                             ('circle' + this.state.index),
                             ('on' + this.state.index),
                             ('play' + this.state.index),
                             ('timer' + this.state.index),
                             ('smallCircleIndex' + this.state.index),
                             ('largeCircleIndex' + this.state.index))
        this.setState({
          mute: 0,
        })
      } else {
        handleCircleReducer(('wrapper' + this.state.index),
                            ('circle' + this.state.index),
                            ('on' + this.state.index),
                            ('play' + this.state.index),
                            ('timer' + this.state.index),
                            ('smallCircleIndex' + this.state.index),
                            ('largeCircleIndex' + this.state.index))
        this.setState({
          mute: 1
        })
      }
    } else {
      console.log(this.props.turnedOn)
      console.log(this.props.index)
      handleCircleEnlarger(('wrapper' + this.props.turnedOn),
                           ('circle' + this.props.turnedOn),
                           ('on' + this.props.turnedOn),
                           ('play' + this.props.turnedOn),
                           ('timer' + this.props.turnedOn),
                           ('smallCircleIndex' + this.props.turnedOn),
                           ('largeCircleIndex' + this.props.turnedOn))

      handleCircleReducer(('wrapper' + this.state.index),
                          ('circle' + this.state.index),
                          ('on' + this.state.index),
                          ('play' + this.state.index),
                          ('timer' + this.state.index),
                          ('smallCircleIndex' + this.state.index),
                          ('largeCircleIndex' + this.state.index))
      this.setState({
        mute: 1
      })
      this.props.switchPlayer(this.state.index)
    }
  }

  render() {
    return (
      <div id='wrapper'>
        <Palette image={this.state.image}>{palette => (
          <div>
            <Slice addSlice = {this.addSlice.bind(this)}
                      slices = {this.state}
                      color = {palette}
                      loop={this.state.loop}
                      mute = {this.state.mute}
                      audioContext = {this.state.audioContext}
                      time = {this.state.time}
                      db = {this.db}
                      index = {this.state.index} />

            <BackCircle color = {"white"}
                        opacity = {'1'}
                        size = {'37.5%'}
                        largeCircleIndex = {this.state.largeCircleIndex}
                        index = {this.state.index} />

            <AlbumCover index = {this.state.index} />

            <Timer time = {this.state.timer}
                   loop = {this.state.loop}
                   index = {this.state.index} />

            <PlayButton color = {palette.muted}
                        opacity = {'0.7'}
                        size = {'34%'}
                        smallCircleIndex = {this.state.smallCircleIndex}
                        index = {this.state.index} />

            <button onClick = {this.handleClick.bind(this)} id='on' class={'on' + this.props.index} ></button>
          </div>
        )}
        </Palette>
      </div>
    )
  }
}
