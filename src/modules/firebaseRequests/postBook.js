import { baseURL } from "./getAllBooksData.js";

export async function postBook(newBookObj) {
  const author = newBookObj.authorInput;
  const tilte = newBookObj.tilteInput;
  let isRead = newBookObj.isReadInput;
  const score = 0;

  if (isRead === "on") {
    isRead = true;
  } else {
    isRead = false;
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
