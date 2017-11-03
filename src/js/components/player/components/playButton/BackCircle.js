import React from "react";


export default class BackCircle extends React.Component {
  render() {
    return (
      <svg id ="circle" expanded = "true" height = "260px" width = "240px">
        <circle class='circle'
                id = {this.props.largeCircleIndex}
                cx = "50%"
                cy = "50%"
                r = {this.props.size}
                fill = {this.props.color}
                opacity={this.props.opacity}/>
      </svg>
    )
  }
}
