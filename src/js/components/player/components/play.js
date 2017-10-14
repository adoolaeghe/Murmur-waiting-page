import React from "react";

export default class Play extends React.Component {
  handleChange() {
    this.props.slices.push({color: 'blue', value: 1})
    this.props.addSlice(this.props.slices)
  }

  render() {
    return (
      <div>
        <button id='play' onClick={this.handleChange.bind(this)}>
        </button>
      </div>
    )
  }
}
