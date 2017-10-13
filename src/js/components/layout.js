import React from "react";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.name = "will";
  }

  render() {
    return (
      <h1>heelo{this.name}</h1>
    );
  }
}
