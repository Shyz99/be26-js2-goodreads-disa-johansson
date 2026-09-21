class BookCard {
  constructor(id, data) {
    this.id = id;
    this.title = data.title;
    this.author = data.author;
    this.score = data.score;
    this.isRead = data.isRead;
  }

  render() {
    // Create and return the book's DOM element
  }

  toggleRead() {
    this.isRead = !this.isRead;
  }
}
