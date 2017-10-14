import React from "react";
import Header from './header'
import Main from './main'



export default class Layout extends React.Component {
  render() {
    console.log(this.state)
    return (
      <div>
        <Main colors="#c9538d 1 #50b9d7 1 #09254c 1" />
      </div>
    );
  }
}
