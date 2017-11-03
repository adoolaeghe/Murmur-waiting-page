import React from "react";

export default class AlbumCover extends React.Component {
  render() {
    return (
      <div id='play' class= {'play' + this.props.index} >
      </div>
    )
  }
}
