import React from "react";
import Pie from "./components/Pie"
import AlbumCover from "./components/AlbumCover"
import Play from "./components/play"
import Palette from './components/palette/Palette'
import fire from './components/firebase';

const image=new Image();
image.crossOrigin="anonymous";
image.src="https://i.imgur.com/aaQjXzz.jpg";

export default class Player extends React.Component {
  constructor(){
    super();
    this.db = fire.database().ref().child('colors');
    this.state = {
      slices: []
    }
  }

  componentWillMount() {
    const previous = this.state.slices
    this.db.on('child_added', snap => {
      previous.push({
        color: snap.val().color,
        value: snap.val().value
      })

      this.setState({
        slices: previous
      })
    })

  }

  addSlice(color, value){
    this.db.push().set({ color: color, value: value})
  }

  render() {
    return (
      <div class='wrapper'>
        <Pie slices={this.state}/>
        <AlbumCover />
        <Palette image={image}>{palette => (
          <Play addSlice= {this.addSlice.bind(this)} slices={this.state} color={palette} />
        )}
        </Palette>
      </div>
    )
  }
}
