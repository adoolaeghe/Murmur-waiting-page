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
                    <div className="waiting-header">Publishing</div>
                    <div className="dot-left small"></div>
                    <div className="dot-right small"></div>
                  </div>
                  <div className="waiting-top-grid col s12">
                    <div className="waiting-header sub">Together</div>
                    <div className="dot-left small"></div>
                    <div className="dot-right small"></div>
                  </div>
                  <div className="subscribe-modal col s12"
                       id="grid"
                       style={{backgroundImage: 'url(./public/content/hash-background-double.svg)'}}>
                    <form action="signup"
                      method="post"
                      defaultValue={this.state.data}
                      placeholder= "SIGN UP HERE"
                      value={this.state.data}
                      onChange={this.handleChangeEvent}>
                      <div className="input-field col s12">

                <input type="email" value=""
                      placeholder= "SIGN UP HERE"
                      value={this.state.data}
                      onChange={this.handleChangeEvent}name="EMAIL" className="required email" id="mce-EMAIL" required></input>
                      <div className="dot-left middle"></div>
                      <div className="dot-right middle"></div>
                      </div>
                      <label className="label col push-s6 s6 push-m8 m4 push-l10 l2">
                      <input type="submit" className="col s12" id="button" onMouseOver={() => {console.log('here')}} value="WHATS NEXT" name="subscribe">
                      </input>
                      <div className="dot-left"></div>
                      <div className="dot-right"></div>

                      </label>

              </form>
                    <div className="dot-left small"></div>
                    <div className="dot-right small"></div>
                  </div>
                  <div className="waiting-top-grid bis col s12">
                    <div className="waiting-header">We are building a new economy of music publication</div>
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
