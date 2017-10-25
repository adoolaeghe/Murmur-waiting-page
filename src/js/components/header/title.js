import React from "react";

export default class Title extends React.Component {
  render() {
    function handleClick(e) {
    e.preventDefault()
    handleMute()
    console.log('here')
    }
    return (
      <div>
      <h1>Echomancy</h1>
      <button class="mute" onClick={handleClick}>Mute button</button>
      </div>
    )
  }
}
