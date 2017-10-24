import React from "react";
import Title from "./header/title"
import Player from "./player/player"
import NavBar from "./navBar/navBar"
import Explanation from "./explanation/explanation"
import { createStore } from "redux"

const reducer = function(state, action) {
  if (action.type === "INC") {
    return state + 1
  }
  return state;
}

const store = createStore(reducer, 1)


store.subscribe(() => {
  console.log("store changed", store.getState())
})

store.dispatch({type: 'INC', payload: 1})
store.dispatch({type: 'INC', payload: 1})
store.dispatch({type: 'INC', payload: 1})
store.dispatch({type: 'INC', payload: 1})

export default class Main extends React.Component {

  render() {
    return (
      <div>
        <div id='article1'>
          <div id='article-left'>
            <NavBar />
            <Title />
            <Player colors = {this.props.colors}/>
          </div>
          <div id='article-right'>
            <Explanation />
          </div>
        </div>
        <div id='article2'>
        </div>
      </div>
    );
  }
}
