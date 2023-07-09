import api from "../core/axios";

//get all favourites (data about favourites without books)
export const getFavourite = async () => {
    const res = await api.get(
      `http://localhost:80/api/favourites`,
      {
        withCredentials: true,
      },
    );
    return res.data;
};

//add favourite book
export const addFavourite = async (user_id, book_id, token) => {
  console.log(user_id, book_id, token.csrfToken);
  const res = await api.post(
    "http://localhost:80/api/favourites",
    {'user_id': user_id,
    'book_id':book_id,},
    { withCredentials: true },
    {
      headers: {
        "X-CSRF-TOKEN": token,
      },
    }
  );
  return res.data;
};

//delete favourite book
export const deleteFavourite = async (id, token) => {
    const res = await api.delete(
        `http://localhost:80/api/favourites/${id}`,
        { withCredentials: true },
        {
          headers: {
            "X-CSRF-TOKEN": token,
          },
        }
      );
      return res.data;
};

//get user's favourite books
export const getFavouritesByUser = async (user_id, token) => {
  const data = [];
  const res = await api.get(
    `http://localhost:80/api/favourites/${user_id}`, 
    {'user_id': user_id},
    { withCredentials: true },
    {
      headers: {
        "X-CSRF-TOKEN": token,
      },
    }
  ).then((res) => {
    for(let book of res.data){
      book.isFav = true;
      data.push(book);
    }
  })
  console.log(data);
  return data;
};
