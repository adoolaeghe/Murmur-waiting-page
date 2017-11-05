function updateLoopFromDatabase() {
  this.db.on('value', snap => {
    this.setState({
      loop: snap.numChildren()
    })
  })
}
