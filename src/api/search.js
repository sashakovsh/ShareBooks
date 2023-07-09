import api from "../core/axios";

//search
export const search = async (text) => {
    const res = await api.get(`http://localhost:80/api/search?query=${text}`, 
    {
      withCredentials: true,
    });
    return res.data;
  };