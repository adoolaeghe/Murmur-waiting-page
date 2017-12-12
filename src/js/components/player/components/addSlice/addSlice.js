import React from "react";

export default class addSlice extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  handleChangeAddButton() {
    this.props.addSlice(generateRgb(this.state.color), 0.5)
  }

  render() {
    return(
      <div></div>
      // <button id='add' style={{background: 'linear-gradient('+this.state.color.muted+', '+this.state.color.lightMuted+')'}}
      // onClick={this.handleChangeAddButton.bind(this)}>
      // Add
      // </button>
    )
  }
}
