import React from "react";
import Pie from "./components/Pie"
import AlbumCover from "./components/AlbumCover"
import Play from "./components/play"


export default class Player extends React.Component {
  render() {
    return (
      <div class='wrapper'>
        <Pie />
        <AlbumCover />
        <Play />
      </div>
    )
  }
}
