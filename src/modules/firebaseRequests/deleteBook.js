import { baseURL } from "./getAllBooksData.js";

export async function deletABook(id) {
  const options = {
    method: "DELETE",
  };
  try {
    const deleteURL = `${baseURL}/${id}.json`;
    const response = await fetch(deleteURL, options);

    if (!response.ok) {
      throw new Error("Delete failed");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}
