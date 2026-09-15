import { getAllBooks, addBook } from "./modules/firebaserequests.js";

//! Kan döpa mer tydligt
//! eller anv'nda form data

const formInputNewBooks = document.querySelector("#formInputNewBooks");

formInputNewBooks.addEventListener("submit", (event) => {
  event.preventDefault();

  const newBookFormData = new FormData(formInputNewBooks);

  const newBookObj = Object.fromEntries(newBookFormData.entries());
  const json = JSON.stringify(newBookObj);

  console.log("OBJ", newBookObj);
  console.log("JSON", json);

  addBook(newBookObj);

  // getAllBooks();
});
