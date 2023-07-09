import api from "../core/axios";
import { getFavourite } from "./favourites";

//get all books for catalog with 'isFav'
export const getBooks = async () => {
  let data = [];
  const res = await api.get("http://localhost:80/api/books", {
    withCredentials: true,
  })
  .then (async (res) => {
    const favourites = await getFavourite();
    for(let book of res.data){
      const match = favourites.find(el => (el.book_id == book.id && el.user_id == +(localStorage.userId)));
        if (match) {
        book.isFav = true;
        } else {
          book.isFav = false;
        }
        data.push(book);
    }
    })
    return data;
};

//get one book by book_id
export const getOneBook = async (book_id) => {
  const res = await api.get(`http://localhost:80/api/books/${book_id}`, 
  {
    withCredentials: true,
  });
  return res.data;
};

//get all books for catalog without 'isFav'
// export const getBooks = async () => {
//   const res = await api.get("http://localhost:80/api/books", {
//     withCredentials: true,
//   });
//   console.log(res, res.data);
//   return res.data;
// };