import React from "react";

export default class Player extends React.Component {
  render() {
    return (
          <div className="player">
            <div className="wrapper">
              <div className="flexWrapper">
                <button>
                  <img className="waitingWrapper1 rotating"
                       src={"./public/content/images/logo1.svg"} >
                  </img>
                </button>
              </div>
              <div className="brand-animation">
                  <div className="wrapper">
                    <div className="sliding-background"
                         style={{backgroundImage: 'url(./public/content/text.svg)'}}>
                    </div>
                  </div>
              </div>
              <div className="brand-animation right">
                  <div className="wrapper">
                    <div className="sliding-background"
                         style={{backgroundImage: 'url(./public/content/text.svg)'}}>
                    </div>
                  </div>
              </div>
              <div className="waiting-top-grid"
                   style={{backgroundImage: 'url(./public/content/hash-background-bis.svg)'}}>
                <p className="waiting-header">Publishing</p>
                <p className="waiting-header sub">together</p>
              </div>
              <div className="row">
                <div className="col s2"></div>
                <div className="col s1"></div>
                <div className="col s1"></div>
                <div className="col s1"></div>
                <div className="col s2"></div>
                <div className="col s3 brand">
                </div>
              </div>
              <div className="waiting-bottom-grid"
                   style={{backgroundImage: 'url(./public/content/hash-background.svg)'}}>
                <div className="date"></div>
                <div className="brand"
                      style={{backgroundImage: 'url(./public/content/brand-background.svg)'}}>
                  <div>APRIL 2018</div>
                </div>
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
