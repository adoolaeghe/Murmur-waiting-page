import React from "react";

import AlbumCover from "./components/albumCover/waitingAlbumCover";
import PieChart from "./components/PieChart/waitingPieChart";



export default class Player extends React.Component {
  constructor(props) {
    super(props);
    this.db = this.props.database.child(this.props.index);
    this.handleChangeEvent = this.handleChangeEvent.bind(this);
    this.state = {
      data: "",
      slices: [
        {
          color:"#F04043",
          value: 0.5
        },
        {
          color:"#4489CD",
          value: 0.5
        },
        {
          color:"#000000",
          value: 0.5
        },
        {
          color:"#FDE479",
          value: 0.5
        },
        {
          color:"#FFFFFF",
          value: 0.5
        },
        {
          color:"#FE7678",
          value: 0.5
        },
        {
          color:"#FEEFBF",
          value: 0.5
        },
      ],
    };
  }

  returnCurrentDate () {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!

    var yyyy = today.getFullYear();
    if(dd<10){
        dd='0'+dd;
    }
    if(mm<10){
        mm='0'+mm;
    }
    return dd+'/'+mm+'/'+yyyy;
  }

  handleChangeEvent(event) {
    this.setState({data: event.target.value});
  }


  render() {
    return (
          <div className="player">
            <div className="wrapper"
                 id={"container" + this.state.index}>
            <PieChart
              db={this.db}
              slices={this.state.slices}
              loop={this.state.loop}
              mute={this.state.mute}
              audioContext={this.state.audioContext}
              time={this.state.time}
              index={this.state.index}
            />

            <AlbumCover index={this.state.index} />

            <div className="waiting-title">
              <p className="waiting-title-welcome">WELCOME</p>
              <p className="waiting-title-main">TO A NEW ECONOMY OF MUSIC PUBLICATION</p>
            </div>
            <div className="waiting-title-line">
              <div className="waiting-title-line-dot"></div>
              <div className="waiting-title-line-dot right"></div>
            </div>
            <div className="waiting-brand-name">
              <div className="  brand-name">MURMUR.fm</div>
            </div>
            <div className="waiting-brand-name-line">
              <div className="waiting-brand-name-dot"></div>
              <div className="waiting-brand-name-dot right"></div>
              <div className="waiting-brand-name-dot current-time">
                <p className="red-text">{this.returnCurrentDate()}</p>
              </div>
            </div>
            <div className="waiting-sign-up">
              <div id="mc_embed_signup_scroll">
              <form action="https://murmur.us17.list-manage.com/subscribe/post?u=8a759dc0e2dd1f954c877c33e&amp;id=22db0bc5df"
                    method="post"
                    defaultValue={this.state.data}
                    placeholder= "SIGN UP HERE"
                    value={this.state.data}
                    onChange={this.handleChangeEvent}
                    id="mc-embedded-subscribe-form"
                    name="mc-embedded-subscribe-form"
                    class="validate form-subscribe"
                    target="_blank"
                    noValidate>
                <input type="email" value=""
                placeholder= "SIGN UP HERE"
                value={this.state.data}
                onChange={this.handleChangeEvent}name="EMAIL" class="required email" id="mce-EMAIL"></input>

                <div class="clear">
                  <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button subscribe-btn"></input>
                </div>
              </form>
              </div>
            </div>
            <div className="waiting-sign-up-line">
              <div className="waiting-sign-up-line-dot"></div>
                <div className="waiting-sign-up-line-dot right"></div>
              <div className="waiting-vertical-line"></div>
              <div className="waiting-vertical-line right"></div>
            </div>
            <div className="waiting-date">
              <span>Streaming April 2018</span>
            </div>
          </div>
        </div>
      )}



}
