// Skapa en modul f;r hur ett book card ska se ut

export function renderAllBooks(allBooksObj) {
  const bookDisplayContainer = document.querySelector("#displayBooks");
  bookDisplayContainer.innerHTML = "";

  for (const id in allBooksObj) {
    const titleData = document.createElement("h3");
    const authorData = document.createElement("p");
    const isReadData = document.createElement("p");
    const scoreData = document.createElement("p");

    titleData.innerText = allBooksObj[id].title;
    authorData.innerText = allBooksObj[id].author;
    isReadData.innerText = allBooksObj[id].isRead;
    scoreData.innerText = allBooksObj[id].score;

    bookDisplayContainer.append(titleData, authorData, isReadData, scoreData);
  }
}
