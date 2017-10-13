import React from "react";

export default class Play extends React.Component {
  addToChart() {
    this.setState({
      color: ["#c9538d 1", "#50b9d7 1", "#09254c 1"]
    })
    console.log(this.state.color)
  }

  render() {
    return (
      <div>
        <p>{this.props.color}</p>
        <button id='play' onClick={this.addToChart.bind(this)}>
          <img class='btn-play' src="../../../../../public/content/svg/play.js" alt="Kiwi standing on oval"></img>
        </button>
      </div>
    )
  }
}
