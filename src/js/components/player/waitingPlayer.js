import React from "react";

export default class Player extends React.Component {
  render() {
    return (
          <div className="player">
            <div className="wrapper">
              <div className="flexWrapper">
              <img className="waitingWrapper1 rotating"
                   src={"./public/content/images/logo1.svg"} >
              </img>
              </div>
            <div className="waiting-title-line">
              <div className="waiting-title-line-dot"></div>
              <div className="waiting-title-line-dot right"></div>
            </div>
            <div className="waiting-sign-up-line">
              <div className="waiting-sign-up-line-dot">
                <p>PUBLISHING FOR EVERYONE</p>
                <p>ARRIVING SOON</p>
              </div>
              <div className="waiting-sign-up-line-dot right"></div>
              <div className="waiting-vertical-line"></div>
              <div className="waiting-vertical-line right"></div>
            </div>
          </div>
        </div>
      )}

}
