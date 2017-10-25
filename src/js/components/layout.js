import React from "react";
import Header from './header'
import Main from './main'
// import { connect } from "react-redux"

    // @connect((store) => {
    //   return  {
    //
    //   }
    // })
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
