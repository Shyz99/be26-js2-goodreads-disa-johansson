import {
  getAllBooksData,
  addBook,
  deletABook,
} from "./modules/firebaserequests.js";
import { renderAllBooks } from "./modules/renderAllBooks.js";

//! Kan döpa mer tydligt
//! eller anv'nda form data
const formInputNewBooks = document.querySelector("#formInputNewBooks");
const delBtn = document.getElementById("delBtn");

getAllBooksData()
  .then(renderAllBooks)
  .catch((error) => console.log(error));

formInputNewBooks.addEventListener("submit", async (event) => {
  event.preventDefault();

  try {
    const newBookFormData = new FormData(formInputNewBooks);

    const newBookObj = Object.fromEntries(newBookFormData.entries());
    const json = JSON.stringify(newBookObj);

    console.log("OBJ", newBookObj);
    console.log("JSON", json);

    await addBook(newBookObj);
  } catch (error) {
    throw error;
  }

  //! Vänta på att promiset är resolved innan jag jag kallar på get och render book
  //* async || call backfunction .then and .catch
  getAllBooksData()
    .then(renderAllBooks)
    .catch((error) => console.log(error));

  // Kan annars i frmatrid3en skriva om och bara skapa enm instans av den nya boken istället för att skicka request till databasen igen
});

delBtn.addEventListener("click", async (event) => {
  event.preventDefault();
  try {
    await deletABook("-P1oLCepuj2WFbAnbK1r");
  } catch (error) {
    console.log(error);
  }
  getAllBooksData()
    .then(renderAllBooks)
    .catch((error) => console.log(error));
});
