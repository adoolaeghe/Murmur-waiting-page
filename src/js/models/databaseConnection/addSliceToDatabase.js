function addSliceToDatabase(color, value) {
  this.db
    .push()
    .set({ color: color, value: value, userName: Math.random().toString() });
}
