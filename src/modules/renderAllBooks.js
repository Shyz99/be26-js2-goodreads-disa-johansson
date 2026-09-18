import { bookIsReadTrue } from "./bookIsReadTrue.js";

export function renderAllBooks(allBooksObj) {
  const bookDisplayContainer = document.querySelector("#displayBooks");
  bookDisplayContainer.innerHTML = "";

  for (const id in allBooksObj) {
    const bookContainer = document.createElement("section");
    const bookDisplayDataContainer = document.createElement("section");
    const editButtonsContainer = document.createElement("section");
    const titleData = document.createElement("h3");
    const authorData = document.createElement("p");
    const scoreData = document.createElement("p");
    const editScoreData = document.createElement("button");
    const markBookAsReadBtn = document.createElement("button");
    const removeBookBtn = document.createElement("button");

    titleData.innerText = allBooksObj[id].title;
    authorData.innerText = allBooksObj[id].author;
    scoreData.innerText = "Score: " + allBooksObj[id].score;
    editScoreData.innerText = "Edit Score";
    removeBookBtn.innerText = "Remove book";

    bookDisplayDataContainer.append(titleData, authorData, scoreData);

    editButtonsContainer.append(
      markBookAsReadBtn,
      editScoreData,
      removeBookBtn,
    );

    bookContainer.append(bookDisplayDataContainer, editButtonsContainer);
    bookContainer.classList.add("bookContainer");

    bookDisplayContainer.append(bookContainer);

    bookIsReadTrue(allBooksObj[id], bookContainer, markBookAsReadBtn);
  }
}
