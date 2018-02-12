import React from "react";

export default class Player extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangeEvent = this.handleChangeEvent.bind(this);
    this.state = {
      data: "",
    }
  }

  handleChangeEvent(event) {
    this.setState({data: event.target.value});
  }

  handleMainButton() {
    document.getElementById("button").className += ' hover';
  }
  render() {
    return (
          <div className="player">
            <div className="wrapper">
              <div className="flexWrapper">
                  <img className="waitingWrapper1 rotating"
                       src={"./public/content/images/logo1.svg"} >
                  </img>
              </div>
              <div className="row">
                <div className="sub-wrapper left col s2 row">
                  <div className="brand-animation col s12">
                    <div className="wrapper">
                      <div className="sliding-background"
                           style={{backgroundImage: 'url(./public/content/text.svg)'}}>
                      </div>
                    </div>
                  </div>
                  <div className="sub-wrapper-grid col s12"
                       style={{backgroundImage: 'url(./public/content/hash-background.svg)'}}>
                  </div>
                </div>
                <div className="sub-wrapper main row col s8">
                  <div className="waiting-top-grid col s12"
                       style={{backgroundImage: 'url(./public/content/hash-background-bis.svg)'}}>
                    <div className="waiting-header">PUBLISHING</div>
                    <div className="dot-left small"></div>
                    <div className="dot-right small"></div>
                  </div>
                  <div className="waiting-top-grid col s12">
                    <div className="waiting-header sub">TOGETHER</div>
                    <div className="dot-left small"></div>
                    <div className="dot-right small"></div>
                  </div>
                  <div className="subscribe-modal flex col s12"
                       id="grid"
                       style={{backgroundImage:'url(./public/content/hash-background-double.svg)'}}>
                    <div className="letter" style={{backgroundImage: 'url(./public/content/thankYou.svg)'}}></div>
                    <div className="dot-left small"></div>
                    <div className="dot-right small"></div>
                  </div>
                  <div className="waiting-top-grid bis col s12">
                    <div className="waiting-header">THANK YOU</div>
                    <div className="dot-left small"></div>
                    <div className="dot-right small"></div>
                  </div>
                  <div className="waiting-bottom-grid col s12">
                    <div className="col s0 m6"
                    style={{backgroundImage: 'url(./public/content/hash-background.svg)'}}></div>
                    <div className="date col s12 m6"
                          style={{backgroundImage: 'url(./public/content/brand-background.svg)'}}>
                      <div>April 2018</div>
                      <div className="dot-left top small"></div>
                    </div>
                  </div>
                </div>
                <div className="sub-wrapper right row col s2">
                  <div className="brand-animation col s12">
                    <div className="wrapper">
                      <div className="sliding-background"
                           style={{backgroundImage: 'url(./public/content/text.svg)'}}>
                      </div>
                    </div>
                  </div>
                  <div className="sub-wrapper-grid col s12"
                       style={{backgroundImage: 'url(./public/content/hash-background.svg)'}}>
                  </div>
                </div>
              </div>
            </div>
          </div>
      )}

}
