import React from "react";
import WaitingPageMain from "./articles/waitingPageMain"

export default class WaitingPage extends React.Component {

  render() {
    return (
      <div>
      <div className="waiting-main-wrapper"
          style={{background: 'url(./public/content/images/background.svg) no-repeat',
                       backgroundSize: 'cover'}}>
      </div>
        <WaitingPageMain />
      </div>
    );
  }
}
