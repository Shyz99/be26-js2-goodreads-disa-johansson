export const baseURL =
  "https://be26-js2-goodreads-default-rtdb.europe-west1.firebasedatabase.app/books";

export async function addBook(newBookObj) {
  const author = newBookObj.authorInput;
  const tilte = newBookObj.tilteInput;
  let score = newBookObj.scoreInput;
  let isRead = newBookObj.isReadInput;

  if (isRead === "on") {
    isRead = true;
  } else {
    isRead = false;
  }

  if (score == "") {
    score = "NONE";
  }

  try {
    const option = {
      method: "POST",
      body: JSON.stringify({
        author: author,
        title: tilte,
        isRead: isRead,
        score: score,
      }),

      //! Content-type headern talar om vilken typ av data som bodyn innehåller.
      headers: {
        "Content-type": "application/json",
      },
    };

    const response = await fetch(baseURL + ".json", option);

    if (!response.ok) {
      throw new Error("Posting new book failed");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getAllBooksData() {
  try {
    const response = await fetch(baseURL + ".json");
    if (!response.ok) {
      throw new Error("Fetching books response failed");
    }

    const data = await response.json();
    console.log("📚 BOOK DATA:", data);
    return data;
  } catch (error) {
    throw error;
  }
}
