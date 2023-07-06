import api from "../core/axios";

export const getRecommendations = async (id) => {
    const res = await api.post(
      "http://localhost:80/api/recommend",
      {'id': id,},
      { withCredentials: true },
    );
    return res.data;
  };