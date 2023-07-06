import { getBooks } from "./books";

//get user's favourite books
export const getList = async () => {
  const favsBooks = [];
  await getBooks()
  .then((res) => {
    for(const book of res) {
      console.log(book);
      if(book.isFav == true) {
        favsBooks.push(book);
      }
    }
  })
  console.log(favsBooks);
  return favsBooks;
};






// export const books = await getAll();
// export const favBooks = [];
// export const recBooks = [];

// function showRecs(id) {
//   for (let user in users) {
//     const favourite = users[user].favBooks;
//     const match = favourite.some((e) => e.id == id);
//     if (match) {
//       favourite.forEach((e) => {
//         if (recBooks.includes(e)) {
//           const index = recBooks.indexOf(e);
//           recBooks.splice(index, 1);
//         } else {
//           recBooks.push(e);
//         }
//       });
//     }
//   }
//   console.log(recBooks);
// }

// export function addFav(id) {
//   const book = booksList.find((book) => book.id === id); //or books instead of booksList (if mockapi)
//   if (favBooks.includes(book)) {
//     book.isFavourite = false;
//     const index = favBooks.indexOf(book);
//     favBooks.splice(index, 1);
//   } else {
//     favBooks.push(book);
//   }
//   console.log("fav books in api", favBooks);
//   showRecs(id);
// }
