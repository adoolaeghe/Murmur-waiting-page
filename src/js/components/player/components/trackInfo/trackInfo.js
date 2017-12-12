import React from "react";
import TrackName from "./components/trackName"
import ArtistName from "./components/artistName"

export default class TrackInfo extends React.Component {
  render() {
    return (
      <div>
        <TrackName />
        <ArtistName />
      </div>
    )
  }
}
