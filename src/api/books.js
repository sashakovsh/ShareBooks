import axios from "../core/axios";
import api from "../core/axios";

export const getAll = async () => {
  return (await axios.get("/books")).data;
};

export const getBooks = async () => {
  const res = await api.get("http://localhost:80/api/books", {
    withCredentials: true,
  });
  return res.data;
};

export const booksList = await getBooks();
