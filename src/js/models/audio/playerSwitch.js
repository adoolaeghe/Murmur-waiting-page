function playerSwitch() {
  if(this.props.playingIndex === this.props.index) {
    if(this.state.mute === 1){
      this.props.switchPlayingIndex(this.state.index)
      handleCircleEnlarger(('wrapper' + this.state.index),
                           ('circle' + this.state.index),
                           ('on' + this.state.index),
                           ('play' + this.state.index),
                           ('timer' + this.state.index),
                           ('container' + this.state.index),
                           ('smallCircleIndex' + this.state.index),
                           ('largeCircleIndex' + this.state.index))
      this.setState({
        mute: 0,
      })
    } else {
      handleCircleReducer(('wrapper' + this.state.index),
                          ('circle' + this.state.index),
                          ('on' + this.state.index),
                          ('play' + this.state.index),
                          ('timer' + this.state.index),
                          ('container' + this.state.index),
                          ('smallCircleIndex' + this.state.index),
                          ('largeCircleIndex' + this.state.index))
      this.setState({
        mute: 1
      })
    }
  } else {
    handleCircleEnlarger(('wrapper' + this.props.playingIndex),
                         ('circle' + this.props.playingIndex),
                         ('on' + this.props.playingIndex),
                         ('play' + this.props.playingIndex),
                         ('timer' + this.props.playingIndex),
                         ('container' + this.state.playingIndex),
                         ('smallCircleIndex' + this.props.playingIndex),
                         ('largeCircleIndex' + this.props.playingIndex))

    handleCircleReducer(('wrapper' + this.state.index),
                        ('circle' + this.state.index),
                        ('on' + this.state.index),
                        ('play' + this.state.index),
                        ('timer' + this.state.index),
                        ('container' + this.state.index),
                        ('smallCircleIndex' + this.state.index),
                        ('largeCircleIndex' + this.state.index))
    this.setState({
      mute: 1
    })
    this.props.switchPlayingIndex(this.state.index)
  }
}
