import React from "react";
import Header from './header'
import Main from './main'


export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'Echomancy',
    };
  }

  changeTitle(title) {
    this.setState({ title });
  }

  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }
}
