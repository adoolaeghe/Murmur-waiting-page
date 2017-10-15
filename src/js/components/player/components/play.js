import React from "react";
import fire from './firebase';

export default class Play extends React.Component {
  handleChange() {
    this.props.slices.value = 0.5
    const color = this.props.color
    const keys = Object.keys(color)
    const colour = keys[Math.floor(Math.random()*keys.length)]
    this.props.slices.slices.push({color: color[colour], value: 0.5})
    const newColor= color[colour]
    const newValue= 0.5
    this.props.addSlice(newColor, newValue)
  }


  render() {
    return (
        <button id='play' onClick={this.handleChange.bind(this)}>
        </button>
    )
  }
}
