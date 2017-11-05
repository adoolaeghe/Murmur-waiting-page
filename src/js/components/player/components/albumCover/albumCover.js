import React from "react";

export default class AlbumCover extends React.Component {
  render() {
    return (
      <div id='play' style={{backgroundImage: "url('../../../../../../public/content/images/cover.png')"}} class= {'play' + this.props.index} >
      </div>
    )
  }
}
