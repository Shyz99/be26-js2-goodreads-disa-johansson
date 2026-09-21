// import { bookIsReadTrue } from "./bookIsReadTrue.js";

export class BookCard {
  constructor(id, bookData) {
    this.id = id;
    this.title = bookData.title;
    this.author = bookData.author;
    this.score = bookData.score;
    this.isRead = bookData.isRead;
  }

  render() {
    const bookContainer = document.createElement("section");
    const bookDisplayDataContainer = document.createElement("section");
    const editButtonsContainer = document.createElement("section");
    const titleData = document.createElement("h3");
    const authorData = document.createElement("p");
    const scoreData = document.createElement("p");
    const editScoreDataBtn = document.createElement("button");
    const markBookAsReadBtn = document.createElement("button");
    const removeBookBtn = document.createElement("button");

    titleData.innerText = this.title;
    authorData.innerText = this.author;
    scoreData.innerText = "Score: " + this.score;
    editScoreDataBtn.innerText = "Edit Score";
    removeBookBtn.innerText = "Remove book";

    bookContainer.classList.add("bookContainer");
    removeBookBtn.classList.add("removeBtn");

    bookDisplayDataContainer.append(titleData, authorData, scoreData);

    editButtonsContainer.append(
      markBookAsReadBtn,
      editScoreDataBtn,
      removeBookBtn,
    );

    if (this.isRead == true) {
      bookContainer.classList.add("bookReadIsTrue");
      scoreData.classList.remove("scoreDataOff");
      editScoreDataBtn.classList.remove("scoreDataOff");
      markBookAsReadBtn.innerText = "Un-Mark book as read";
    } else {
      bookContainer.classList.remove("bookReadIsTrue");
      scoreData.classList.add("scoreDataOff");
      editScoreDataBtn.classList.add("scoreDataOff");
      markBookAsReadBtn.innerText = "Mark book as read";
    }

    bookContainer.append(bookDisplayDataContainer, editButtonsContainer);
    return bookContainer;
  }
}
