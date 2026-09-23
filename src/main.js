import { getAllBooksData } from "./modules/firebaseRequests/getAllBooksData.js";
import { renderAllBooks } from "./modules/renderBooks/renderAllBooks.js";
import { postBook } from "./modules/firebaseRequests/postBook.js";

const formInputNewBooks = document.querySelector("#formInputNewBooks");

getAllBooksData()
  .then(renderAllBooks)
  .catch((error) => console.log(error));

formInputNewBooks.addEventListener("submit", async (event) => {
  event.preventDefault();

  try {
    const newBookFormData = new FormData(formInputNewBooks);
    const newBookObj = Object.fromEntries(newBookFormData.entries());

    await postBook(newBookObj);
  } catch (error) {
    throw error;
  }

  getAllBooksData()
    .then(renderAllBooks)
    .catch((error) => console.log(error));

  formInputNewBooks.reset();
});
