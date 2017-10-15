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
    this.state = {
      slices: []
    }
  }

  componentWillMount() {
    var that = this;
    fire.database().ref('colors').once("value", function(snapshot) {
      snapshot.forEach(function(data) {
        that.setState(data.val()[0])
        console.log(that.state.slices)
      })
      console.log(that.state)
    })
  }

  addSlice(slices){
    this.setState({slices})
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
