import React from "react";
import fire from './firebase';

export default class Play extends React.Component {
  handleChange() {
    function componentToHex(c) {
      var hex = c.toString(16);
      return hex.length == 1 ? "0" + hex : hex;
    }
    function rgbToHex(r, g, b) {
      return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }
    function hexToRgb(hex) {
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
      } : null;
    }
    this.props.slices.value = 0.5
    const color = this.props.color
    const keys = Object.keys(color)
    const colour = keys[Math.floor(Math.random()*keys.length)]
    const rgb = hexToRgb(color[colour])
    console.log(rgb)
    const r = (parseInt(rgb.r)+Math.floor(Math.random() * (50 - 1 + 1)) + 1);
    console.log(r.toString())
    const g = (parseInt(rgb.g)+Math.floor(Math.random() * (50 - 1 + 1)) + 1);
    console.log(g.toString())
    const b = (parseInt(rgb.b)+Math.floor(Math.random() * (50 - 1 + 1)) + 1);
    console.log(b.toString())
    console.log(rgbToHex(r,g,b))
    this.props.slices.slices.push({color: rgbToHex(r,g,b), value: 0.5})
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