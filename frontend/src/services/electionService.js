import api from "./api";

export const getElections = () => {
  return api.get("/elections");
};

export const addElection = (election) => {
  return api.post("/elections", election);
};

export const updateElection = (id, election) => {
  return api.put(`/elections/${id}`, election);
};

export const deleteElection = (id) => {
  return api.delete(`/elections/${id}`);
};