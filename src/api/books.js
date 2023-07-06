import axios from "../core/axios";
import api from "../core/axios";
import { getFavourite } from "./favourites";

export const getAll = async () => {
  return (await axios.get("/books")).data;
};

// export const getBooks = async () => {
//   const res = await api.get("http://localhost:80/api/books", {
//     withCredentials: true,
//   });
//   console.log(res, res.data);
//   return res.data;
// };

export const getBooks = async () => {
  let data = [];
  const res = await api.get("http://localhost:80/api/books", {
    withCredentials: true,
  })
  .then (async (res) => {
    const favourites = await getFavourite();
    for(let book of res.data){
      const match = favourites.find(el => (el.book_id == book.id && el.user_id == +(localStorage.userId)));
        console.log(match);
        if (match) {
        book.isFav = true;
        } else {
          book.isFav = false;
        }
        data.push(book);
    }
    console.log(data);
    })
    return data;
};
