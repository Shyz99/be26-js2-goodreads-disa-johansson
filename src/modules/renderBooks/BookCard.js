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
    const titleData = document.createElement("h3");
    const authorData = document.createElement("p");
    const scoreData = document.createElement("p");

    titleData.innerText = this.title;
    authorData.innerText = this.author;
    scoreData.innerText = "Score: " + this.score;

    bookContainer.classList.add("bookContainer");

    if (this.isRead == true) {
      bookContainer.classList.add("bookReadIsTrue");
      scoreData.classList.remove("scoreDataOff");
    } else {
      bookContainer.classList.remove("bookReadIsTrue");
      scoreData.classList.add("scoreDataOff");
    }

    bookContainer.append(titleData, authorData, scoreData);
    return bookContainer;
  }
}
