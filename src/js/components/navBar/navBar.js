import React from 'react';
import Echomancy from './components/echomancy'
import WhatIs from './components/whatIs'
import ToYou from './components/toYou'

export default class NavBar extends React.Component {

  render() {
    return (
      <div id='navBar'>
        <WhatIs />
        <Echomancy />
        <ToYou />
      </div>
    );
  }
}
