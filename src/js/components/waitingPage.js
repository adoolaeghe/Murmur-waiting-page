import React from "react";
import WaitingPageMain from "./articles/waitingPageMain"

export default class WaitingPage extends React.Component {

  render() {
    return (
      <div>
      <img className="waiting-main-wrapper"
           src={"./public/content/images/waitingPage/snowFlakes.svg"}>
      </img>
      <img className="waiting-main-wrapper bis"
           src={"./public/content/images/waitingPage/snowFlakes1.svg"}>
      </img>
      <img className="waiting-main-wrapper bisbis"
           src={"./public/content/images/waitingPage/snowFlakes2.svg"}>
      </img>
        <WaitingPageMain />
      </div>
    );
  }
}
