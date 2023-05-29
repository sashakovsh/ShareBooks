import { getAll } from "./books";
import users from "./users";

export const books = await getAll();
export const favBooks = [];
export const recBooks = [];

function showRecs(id) {
  for (let user in users) {
    const favourite = users[user].favBooks;
    const match = favourite.some((e) => e.id == id);
    if (match) {
      favourite.forEach((e) => {
        if (recBooks.includes(e)) {
          const index = recBooks.indexOf(e);
          recBooks.splice(index, 1);
        } else {
          recBooks.push(e);
        }
      });
    }
  }
  console.log(recBooks);
}

export function addFav(id) {
  const book = books.find((book) => book.id === id);
  if (favBooks.includes(book)) {
    book.isFavourite = false;
    const index = favBooks.indexOf(book);
    favBooks.splice(index, 1);
  } else {
    book.isFavourite = true;
    favBooks.push(book);
  }
  console.log("fav books in api", favBooks);
  showRecs(id);
}
