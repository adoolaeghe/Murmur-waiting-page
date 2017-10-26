import React from "react";
import Main from './main'

export default class Layout extends React.Component {
  render() {
    console.log(this.state)
    return (
      <div>
        <Main />
      </div>
    );
  }
}
