class App {
  constructor () {
    // assign the HTML elements, add event listeners, initialize CommentList
    this.noteForm = document.getElementById('note-form')
    this.commentInput = document.getElementById('comment-input')
    this.commentListNode = document.getElementById('comment-list')
    this.noteForm.addEventListener('submit', this.createCommentList.bind(this))
    this.commentList = new CommentList()
  }

  // add new comment and re-render the app with updated content
  createCommentList (event) {
    event.preventDefault()
    this.commentList.addComment(this.commentInput.value)
    this.render()
    // clear the form input
    this.commentInput.value = ''
  }

  // set the comment list's HTML content
  render () {
    this.commentListNode.innerHTML = this.commentList.render()
  }
}
