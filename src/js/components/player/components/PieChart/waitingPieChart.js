import React from "react";
import PieChart from "react-simple-pie-chart";


export default class TrackChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.color,
    };
  }

  render() {
    const rotation = "rotate(" + "45" + "deg)"
    if (this.props.loop !== null) {
      return (
        <div>
          <div className="waitingWrapper1 rotating">
            <PieChart slices={this.props.slices} />
          </div>
        </div>
      );
    }
  }
}
