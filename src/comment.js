class Comment {
  constructor (description) {
    this.description = description
  }

  // return the HTML list item containing a single item
  render () {
    return `<li>${this.description}</li>`
  }
}
