import React from "react";
import Header from './header'
import Main from './main'


export default class Layout extends React.Component {
  constructor() {
    super()
    this.state = {
      color: ["#c9538d 1", "#50b9d7 1", "#09254c 1"]
    };
  }

  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }
}
