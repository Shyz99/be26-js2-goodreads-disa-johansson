import { BookCard } from "./BookCard.js";
import { getAllBooksData } from "../firebaseRequests/getAllBooksData.js";
import { deleteBook } from "../firebaseRequests/deleteBook.js";

export function renderAllBooks(allBooksObj) {
  const newBookDisplayContainer = document.querySelector("#displayBooks");
  newBookDisplayContainer.innerHTML = "";

  for (const id in allBooksObj) {
    const bookCard = new BookCard(id, allBooksObj[id]);
    const bookCardContainer = bookCard.render();
    const editButtonsContainer = document.createElement("section");
    const removeBookBtn = document.createElement("button");
    const editScoreDataBtn = document.createElement("button");
    const markBookAsReadBtn = document.createElement("button");

    removeBookBtn.innerText = "Remove book";
    removeBookBtn.classList.add("removeBtn");
    editScoreDataBtn.innerText = "Edit Score";

    if (allBooksObj[id].isRead == true) {
      editScoreDataBtn.classList.remove("scoreDataOff");
      markBookAsReadBtn.innerText = "Un-Mark book as read";
    } else {
      editScoreDataBtn.classList.add("scoreDataOff");
      markBookAsReadBtn.innerText = "Mark book as read";
    }

    editButtonsContainer.append(
      markBookAsReadBtn,
      editScoreDataBtn,
      removeBookBtn,
    );
    newBookDisplayContainer.append(bookCardContainer, editButtonsContainer);

    removeBookBtn.addEventListener("click", () => {
      // await
      deleteBook(id)
        .then(getAllBooksData)
        .then(renderAllBooks)
        .catch((error) => console.log(error));
    });
  }
}
