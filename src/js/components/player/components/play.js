import React from "react";

export default class Play extends React.Component {
  handleChange() {
    this.props.slices.value = 0.5
    const color = this.props.color
    const keys = Object.keys(color)
    const colour = keys[Math.floor(Math.random()*keys.length)]
    this.props.slices.push({color: color[colour], value: 0.5})
    this.props.addSlice(this.props.slices)
  }

  render() {
    console.log(this.props.color)
    return (
        <button id='play' onClick={this.handleChange.bind(this)}>
        </button>
    )
  }
}
