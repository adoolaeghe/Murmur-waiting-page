function addSliceToDatabase() {
  const slices = this.state.slices;
  const userNames = this.state.userNames;
  this.db.on('child_added', snap => {
    slices.push({
      color: snap.val().color,
      value: snap.val().value,
    })
    userNames.push({
      userName: snap.val().userName
    })
    this.setState({
      slices: slices,
      userNames: userNames,
    })
  })
}
