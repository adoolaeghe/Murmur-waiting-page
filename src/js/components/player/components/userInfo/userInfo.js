import React from "react";
import Slider from '../trackInfo/slider'
import Name from '../trackInfo/name'
import Price from '../trackInfo/price'


export default class UserInfo extends React.Component {
  render() {
    return (
     <div id="username" style={{color: this.props.palette.muted}}>
        <Slider color={this.props.palette.muted}/>
        <Name add={this.props.add} />
        <Price />
     </div>
    );
  }
}
