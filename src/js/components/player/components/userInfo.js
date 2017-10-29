import React from "react";
import PieChart from 'react-simple-pie-chart';
import fire from '../../firebase';
import Palette from './palette/Palette';

const image = new Image();
image.crossOrigin = "anonymous";
image.src = "https://i.imgur.com/lK6hCZu.png";

export default class UserInfo extends React.Component {

  render() {
    return (
      <Palette image={image}>{palette => (
       <div id='username' style={{color: palette.muted}}>
        <p id='name'>{this.props.add}</p>
       </div>
       )}
      </Palette>
   );
 }
}
