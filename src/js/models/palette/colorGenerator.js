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

function randomColorRed(rgb) {
  return (parseInt(rgb.r)+Math.floor(Math.random() * (5 - 1 + 1)) + 1);
}

function randomColorGreen(rgb) {
  return (parseInt(rgb.g)+Math.floor(Math.random() * (5 - 1 + 1)) + 1);
}

function randomColorBlue(rgb) {
  return (parseInt(rgb.b)+Math.floor(Math.random() * (5 - 1 + 1)) + 1);
}

function generateRgb(newColor) {
  var keys = Object.keys(newColor);
  var colour = keys[Math.floor(Math.random()*keys.length)];
  var rgb = hexToRgb(newColor[colour]);
  var r = randomColorRed(rgb);
  var g = randomColorGreen(rgb);
  var b = randomColorBlue(rgb);
  return rgbToHex(r,g,b)
}
