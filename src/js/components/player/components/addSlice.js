import React from "react";
import fire from '../../firebase';


function randomIndex(index) {
  (parseInt(rgb.index)+Math.floor(Math.random() * (50 - 1 + 1)) + 1);
}

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

export default class AddSlice extends React.Component {
  handleChange() {
    const color = this.props.color;
    const keys = Object.keys(color);
    const colour = keys[Math.floor(Math.random()*keys.length)];
    const rgb = hexToRgb(color[colour]);
    const r = randomIndex(r);
    const g = randomIndex(g);
    const b = randomIndex(b);
    const newColor= color[colour]
    const newValue= 0.5
    $('.wrapper1').css("opacity","1");
    this.props.addSlice(rgbToHex(r,g,b), newValue)
  }

  render() {
    return (
      <button id='addSlice' onClick={this.handleChange.bind(this)}>
      </button>
    )
  }
}
