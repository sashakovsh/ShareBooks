import api from "../core/axios";

export const getRecommendations = async (id) => {
    const res = await api.get(
      `http://localhost:80/api/recommend/${id}`,
      { withCredentials: true },
    );
    return res.data;
  };