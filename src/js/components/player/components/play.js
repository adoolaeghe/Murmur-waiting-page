import React from "react";
import fire from './firebase';

export default class Play extends React.Component {
  handleChange() {
    this.props.slices.value = 0.5
    const color = this.props.color
    const keys = Object.keys(color)
    const colour = keys[Math.floor(Math.random()*keys.length)]
    this.props.slices.slices.push({color: color[colour], value: 0.5})
    this.props.addSlice(this.props.slices.slices)
    this.addToDatabase(colour)
  }

  addToDatabase(item){
    fire.database().ref('colors').updates( color );
    this.inputEl.value = '';
  }

  render() {
    return (
        <button id='play' onClick={this.handleChange.bind(this)}>
        </button>
    )
  }
}
