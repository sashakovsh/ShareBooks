import axios from "../core/axios";

export const getAll = async () => {
  return (await axios.get("/books")).data;
};
