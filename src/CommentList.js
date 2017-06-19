class CommentList {
  constructor () {
    this.comments = []
  }

  addComment (description) {
    let newComment = new Comment(description)
    this.comments.push(newComment)
  }

  // return the new HTML content containing all list items
  render () {
    return (
      `<ul>
      ${this.comments.map(comment => comment.render()).join('')}
      </ul>`
    )
  }
}
