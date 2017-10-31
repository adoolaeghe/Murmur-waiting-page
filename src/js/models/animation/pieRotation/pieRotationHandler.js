function eventListenerForEachSlice() {
  const elements = Array.from(document.querySelectorAll('path'))
  if ((this.props.loop == elements.length) && (this.state.events === 1)){
    elements.forEach(function(el) {
      el.addEventListener("click", function(){
        this.setState({
          add: el.getAttribute("fill")
        })
      }.bind(this))
    }.bind(this))
    this.setState({
      events: this.state.events + 1
    })
  }
}

function setTime() {
  setInterval( () => {
    var time = (((new Date().getTime() / 1000) - this.state.sometime)*360)/this.state.loop
    this.setState({
      time : time
    })
  },10)
}
