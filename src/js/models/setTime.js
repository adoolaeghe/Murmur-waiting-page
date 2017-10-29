function setTime() {
  setInterval( () => {
    var time = (((new Date().getTime() / 1000) - this.state.sometime)*360)/this.state.loop
    this.setState({
      time : time
    })
  },10)
}
