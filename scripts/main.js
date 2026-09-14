import { getAllBooks, addBook } from "./modules/firebaserequests.js";

const isRead = document.getElementById("read");
const title = document.getElementById("title");
const author = document.getElementById("author");
const score = document.getElementById("score");
const form = document.querySelector("form");

getAllBooks();

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  addBook(author.value, title.value, isRead.checked, score.value);

  console.log("Is Read?", isRead.checked);
  console.log("Title?", title.value);
  console.log("Author?", author.value);
  console.log("Score?", score.value);

  getAllBooks();
});
