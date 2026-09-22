import { BookCard } from "./BookCard.js";
import { getAllBooksData } from "../firebaseRequests/getAllBooksData.js";
import { deleteBook } from "../firebaseRequests/deleteBook.js";
import { patchBook } from "../firebaseRequests/patchBook.js";

export function renderAllBooks(allBooksObj) {
  const newBookDisplayContainer = document.querySelector("#displayBooks");
  newBookDisplayContainer.innerHTML = "";

  for (const id in allBooksObj) {
    const bookCard = new BookCard(id, allBooksObj[id]);
    const bookCardContainer = bookCard.render();

    const editButtonsContainer = document.createElement("section");
    const removeBookBtn = document.createElement("button");
    const editScoreDataBtn = document.createElement("button");
    const editScoreDataInput = document.createElement("input");
    const markBookAsReadBtn = document.createElement("button");

    editScoreDataInput.name = "scoreInput";
    editScoreDataInput.type = "number";
    editScoreDataInput.placeholder = "Add new Score";

    removeBookBtn.innerText = "Remove book";
    removeBookBtn.classList.add("removeBtn");
    editScoreDataBtn.innerText = "Edit Score";

    if (allBooksObj[id].isRead == true) {
      editScoreDataBtn.classList.remove("scoreDataOff");
      editScoreDataInput.classList.remove("scoreDataOff");
      markBookAsReadBtn.innerText = "Un-Mark book as read";
    } else {
      editScoreDataBtn.classList.add("scoreDataOff");
      editScoreDataInput.classList.add("scoreDataOff");
      markBookAsReadBtn.innerText = "Mark book as read";
    }

    editButtonsContainer.append(
      editScoreDataInput,
      editScoreDataBtn,
      markBookAsReadBtn,
      removeBookBtn,
    );
    newBookDisplayContainer.append(bookCardContainer, editButtonsContainer);

    markBookAsReadBtn.addEventListener("click", () => {
      patchBook(id, "isRead", !allBooksObj[id].isRead)
        .then(getAllBooksData)
        .then(renderAllBooks)
        .catch((error) => console.log(error));
    });

    editScoreDataBtn.addEventListener("click", () => {
      const newScore = editScoreDataInput.value;
      patchBook(id, "score", newScore)
        .then(getAllBooksData)
        .then(renderAllBooks)
        .catch((error) => console.log(error));
    });

    removeBookBtn.addEventListener("click", () => {
      deleteBook(id)
        .then(getAllBooksData)
        .then(renderAllBooks)
        .catch((error) => console.log(error));
    });
  }
}
