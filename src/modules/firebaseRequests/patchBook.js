import { baseURL } from "./getAllBooksData.js";

export async function patchBook(ID, key, newValue) {
  const options = {
    method: "PATCH",
    body: JSON.stringify({ [key]: newValue }),
    headers: {
      "Content-type": "application/json",
    },
  };

  try {
    const response = await fetch(`${baseURL}/${ID}.json`, options);
    if (!response.ok) throw new Error("Something when PATCHING went wrong");

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}
