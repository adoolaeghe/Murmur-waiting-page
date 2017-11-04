import React from "react";


export default class Circle extends React.Component {
  render() {
    return (
      <svg id ="circle" class={'circle' + this.props.index} expanded = "true" height = "260px" width = "240px">
          <circle class={'smallCircleIndex' + this.props.index}
            id={this.props.smallCircleIndex}
            cx = "50%"
            cy = "50%"
            r = {this.props.size}
            fill = {this.props.color}
            opacity={this.props.opacity}/>
      </svg>
    )
  }
}
