import React from "react";
import Circle from './circle'

export default class PlayButton extends React.Component {
  render() {
    return (
      <Circle smallCircleIndex={this.props.smallCircleIndex}
              color={this.props.color}
              opacity={this.props.opacity}
              size={this.props.size}
              index={this.props.index} />
    )
  }
}
