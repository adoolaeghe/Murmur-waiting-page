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
              <div className="waiting-top-grid">
                <p className="waiting-header">Publishing</p>
                <p className="waiting-header sub">together</p>
              </div>
              <div className="row">
                <div className="col s2"></div>
                <div className="col s1">FM</div>
                <div className="col s1">TW</div>
                <div className="col s1">MD</div>
                <div className="col s2"></div>
                <div className="col s2 brand">MURMUR.FM</div>
              </div>
              <div className="waiting-bottom-grid ">
                STREAMING APRIL 2018
              </div>
              <div className="waiting-title-line"></div>
              <div className="waiting-sign-up-line">
                <div className="waiting-vertical-line"></div>
                <div className="waiting-vertical-line right"></div>
              </div>
            </div>
          </div>
      )}

}
