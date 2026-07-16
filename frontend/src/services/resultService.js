import api from "./api";

export const getResults = () => {
  return api.get("/results");
};

export const getWinner = () => {
  return api.get("/results/winner");
};