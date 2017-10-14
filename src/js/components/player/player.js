import React from "react";
import Pie from "./components/Pie"
import AlbumCover from "./components/AlbumCover"
import Play from "./components/play"
import Palette from './components/palette/Palette'

const image=new Image();
    image.onload=function(){
    }
    image.crossOrigin="anonymous";
    image.src="https://i.imgur.com/aaQjXzz.jpg";


export default class Player extends React.Component {
  constructor(){
    super();
    this.state = {
      slices: [{color: '#c9538d', value: 1},{color: '#50b9d7', value: 1}]
    }
  }

  addSlice(slices){
    this.setState({slices})
  }


  render() {
    return (
      <div class='wrapper'>
        <Pie slices={this.state.slices}/>
        <AlbumCover />
        <Palette image={image}>{palette => (
          <Play addSlice= {this.addSlice.bind(this)} slices={this.state.slices} color={palette} />
        )}
        </Palette>
      </div>
    )
  }
}
