export const baseURL =
  "https://be26-js2-goodreads-default-rtdb.europe-west1.firebasedatabase.app/books";

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
