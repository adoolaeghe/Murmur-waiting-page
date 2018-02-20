import React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

export default class Player extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangeEvent = this.handleChangeEvent.bind(this);
    this.state = {
      data: "",
      backgroundImage: 'url(./public/content/hash-background-horizontal.svg)',
      disable: true
    }
  }

  handleChangeEvent(event) {
    this.setState({data: event.target.value});
  }

  handleMouseOver() {
    this.setState({backgroundImage: 'url(./public/content/hash-background-horizontal-bis.svg)'});
  }

  handleMouseOut() {
    this.setState({backgroundImage: 'url(./public/content/hash-background-horizontal.svg)'});
  }

  handleMainButton() {
    document.getElementById("button").className += ' hover';
  }

  render() {
    console.log(this.state.data)
    return (
      <MuiThemeProvider>
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
                       style={{backgroundImage: 'url(./public/content/hash-background-vertical.svg)'}}>
                    <form>
                      <div className="input-field col s12">

                <input type="email"
                      placeholder= "SIGN UP HERE"
                      value={this.state.data}
                      onFocus={()=> {this.setState({disable: false})}}
                      onChange={this.handleChangeEvent} name="EMAIL" className="required email" id="mce-EMAIL" autoComplete="off" required></input>
                      <div className="dot-left middle"></div>
                      <div className="dot-right middle"></div>
                      </div>
                      <label className="label col push-s0 s12 m12  l12"
                        style={{
                                height: "100%"}}>

                               <FloatingActionButton mini={true} backgroundColor={"#B2B2B2"} zDepth={2} disabled={this.state.disable} style={{width: "40px",
                                       height: "40px",
                                       position: "absolute",
                                       right: "-20px",
                                       top: "-20px",

                                       }}>
                               <ContentAdd/>
                            </FloatingActionButton>


                      </label>

              </form>
                    <div className="dot-left small"></div>
                    <div className="dot-right small"></div>
                  </div>
                  <div className="waiting-top-grid bis col s12">
                    <div className="waiting-header header-bottom"><span className='noline'>WE are building</span><span className='line'> a </span><span className='noline'>NEW economy</span><span className='line'> of </span><span className='noline'>music publication</span></div>
                    <div className="dot-left small"></div>
                    <div className="dot-right small"></div>
                  </div>
                  <div className="waiting-bottom-grid col s12">
                    <div className="col s0 m6"
                    style={{backgroundImage: 'url(./public/content/hash-background.svg)'}}></div>
                    <div className="date col s12 m6"
                          style={{backgroundImage: 'url(./public/content/brand-background.svg)'}}>
                      <div>APRIL 2018</div>
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
        </MuiThemeProvider>
      )}

}
