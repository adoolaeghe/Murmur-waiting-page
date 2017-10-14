import React from "react";

export default class Play extends React.Component {

  handleChange() {
    this.props.slices.push({color: this.props.color, value: 1})
    this.props.addSlice(this.props.slices)
  }

  render() {
    return (
        <button id='play' onClick={this.handleChange.bind(this)}>
        </button>
    )
  }
}
