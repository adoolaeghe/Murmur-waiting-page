import React from "react";
import Pie from "./components/Pie";
import AlbumCover from "./components/AlbumCover";
import AddSlice from "./components/addSlice";
import Palette from './components/palette/Palette';
import fire from './../firebase';
import BottomButton from './components/button/bottomButton';
import TopButton from './components/button/topButton';
import UserName from './components/userName';

// loads image for color palette finding.
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
      mute: true
    }
  }

  componentWillMount() {
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
        userNames: userNames
      })
    })
  }

  addSlice(color, value){
    this.db.push().set({ color: color, value: value, userName: Math.random().toString()})
  }

  render() {
    return (
      <div id='wrapper'>
        <Pie slices={this.state} time={1}/>
        <AlbumCover />
        <BottomButton />
        <TopButton />
        <UserName name={this.state.userNames} length={this.state.userNames.length} color={this.state.slices}/>
        <Palette image={image}>{palette => (
          <AddSlice addSlice= {this.addSlice.bind(this)} slices={this.state} color={palette} />
        )}
        </Palette>
      </div>
    )
  }
}
