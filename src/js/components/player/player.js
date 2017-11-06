import React from "react";
import AlbumCover from "./components/albumCover/AlbumCover";
import TrackChart from "./components/PieChart/trackChart";
import Palette from './components/palette/Palette';
import Timer from './components/timer/timer'
import PlayButton from './components/playButton/playButton'
import BackCircle from './components/playButton/BackCircle'
import ReactBodymovin from 'react-bodymovin'
import animation from '../../models/data.json'

export default class Player extends React.Component {
  constructor(props){
    super(props);
    this.db = this.props.db.child(this.props.index);
    this.state = {
      slices: [],
      userNames: [],
      audioContext: this.props.audioContext,
      index: this.props.index,
      image: new Image(),
      sometime: new Date().getTime(),
      timer: Math.round((new Date()).getTime()/1000),
      loop: 1,
      mute: 0,
      time: 0,
      autoPlay: true
    }
    this.bodymovinOptions = {
      loop: false,
      autoplay: false,
      prerender: false,
      animationData: animation
    }
    this.bodymovinOptions1 = {
      loop: false,
      autoplay: true,
      prerender: true,
      animationData: animation
    }
  }

  componentWillMount() {
    this.state.image.crossOrigin = "anonymous";
    this.state.image.src = this.props.imageSource;

    setTimeInterval.bind(this)()

    loadSlicesFromDatabase.bind(this)()

    updateLoopFromDatabase.bind(this)()
  }

  addSlice(color, value) {
    addSliceToDatabase(color, value).bind(this)
  }

  handleClick() {
  this.setState({
    autoPlay: false
  })
    playerSwitch.bind(this)()
  }

  render() {
    if(this.state.autoPlay){

    return (
        <Palette image={this.state.image}>{palette => (
          <div id='wrapper' class = {"container" + this.state.index}>
            <TrackChart addSlice = {this.addSlice.bind(this)}
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
            <button onClick = {this.handleClick.bind(this)} id='on'  class={'on' + this.props.index} >
              <ReactBodymovin options={this.bodymovinOptions} />
            </button>

          </div>
        )}
      </Palette>
    )
    } else {

      return (
          <Palette image={this.state.image}>{palette => (
            <div id='wrapper' class = {"container" + this.state.index}>
              <TrackChart addSlice = {this.addSlice.bind(this)}
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
              <div></div>
              <button onClick = {this.handleClick.bind(this)} id='on'  class={'on' + this.props.index} >
                <ReactBodymovin options={this.bodymovinOptions1} />
              </button>
            </div>
          )}
        </Palette>
      )
    }
  }
}
