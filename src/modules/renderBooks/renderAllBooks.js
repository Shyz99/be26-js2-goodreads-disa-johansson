import { BookCard } from "./BookCard.js";

export function renderAllBooks(allBooksObj) {
  const newBookDisplayContainer = document.querySelector("#displayBooks");
  newBookDisplayContainer.innerHTML = "";

  for (const id in allBooksObj) {
    const bookCard = new BookCard(id, allBooksObj[id]);
    const bookCardContainer = bookCard.render();

    newBookDisplayContainer.append(bookCardContainer);
  }
}
