function playerSwitch() {
  if(this.props.turnedOn === this.props.index) {
    if(this.state.mute === 1){
      this.props.switchPlayer(this.state.index)
      handleCircleEnlarger(('wrapper' + this.state.index),
                           ('circle' + this.state.index),
                           ('on' + this.state.index),
                           ('play' + this.state.index),
                           ('timer' + this.state.index),
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
                          ('smallCircleIndex' + this.state.index),
                          ('largeCircleIndex' + this.state.index))
      this.setState({
        mute: 1
      })
    }
  } else {
    handleCircleEnlarger(('wrapper' + this.props.turnedOn),
                         ('circle' + this.props.turnedOn),
                         ('on' + this.props.turnedOn),
                         ('play' + this.props.turnedOn),
                         ('timer' + this.props.turnedOn),
                         ('smallCircleIndex' + this.props.turnedOn),
                         ('largeCircleIndex' + this.props.turnedOn))

    handleCircleReducer(('wrapper' + this.state.index),
                        ('circle' + this.state.index),
                        ('on' + this.state.index),
                        ('play' + this.state.index),
                        ('timer' + this.state.index),
                        ('smallCircleIndex' + this.state.index),
                        ('largeCircleIndex' + this.state.index))
    this.setState({
      mute: 1
    })
    this.props.switchPlayer(this.state.index)
  }
}
