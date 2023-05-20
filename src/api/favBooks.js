import { getAll } from "./books";

export const books = await getAll();
export const favBooks = [];

export function addFav(id) {
    const book = books.find(book => book.id === id);
    if(favBooks.includes(book)) {
      const index = favBooks.indexOf(book);
      favBooks.splice(index, 1);
    } else {
      favBooks.push(book);
    }
    console.log(favBooks);
  }