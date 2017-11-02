import React from "react"
import Player from "./player/player"
import fire from './firebase';

export default class Main extends React.Component {

  render() {
    return (
      <div>
        <div id='article1'>
          <div id='article-left'>
            <div>
              <Player key='dz' image={'https://i.imgur.com/N8iL0h5.jpg'} />
              <Player key='hdz' image={'https://i.imgur.com/lK6hCZu.png'} />
              <Player key='hdz' image={'https://i.imgur.com/lK6hCZu.png'} />
              <Player key='hdz' image={'https://i.imgur.com/lK6hCZu.png'} />
              <Player key='hdz' image={'https://i.imgur.com/lK6hCZu.png'} />
              <Player key='hdz' image={'https://i.imgur.com/lK6hCZu.png'} />

            </div>
          </div>
        </div>
      </div>
    );
  }
}
