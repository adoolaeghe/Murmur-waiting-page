import React from "react";
import PieChart from 'react-simple-pie-chart';
import fire from '../../firebase';
import Palette from './palette/Palette';
import Slider from './trackInfo/slider'
import Name from './trackInfo/name'
import Price from './trackInfo/price'

const image = new Image();
image.crossOrigin = "anonymous";
image.src = "https://i.imgur.com/lK6hCZu.png";

export default class UserInfo extends React.Component {
  render() {
    return (
      <Palette image={image}>{palette => (
       <div id="username" style={{color: palette.muted}}>
          <Slider color={palette.muted}/>
          <Name add={this.props.add} />
          <Price />
       </div>
       )}
      </Palette>
    );
  }
}
