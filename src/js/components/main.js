import React from "react";

export default class Main extends React.Component {

  constructor() {
    super();
    this.colors = "";
  }
  render() {
    return (
      <div class='article1'>
        <div class='article-left'>
          <div id ='title'>Echomancy</div>
          <div class='wrapper'>
            <div class='wrapper1'>
              <div class="pie" data-pies={this.colors}></div>
            </div>
            <div class="play">
            </div>
          </div>
        </div>
        <div class='article-right'>
        </div>
      </div>
    );
  }
}
