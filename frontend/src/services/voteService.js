import api from "./api";

export const castVote = async (candidateId) => {
  return api.post("/votes", {
    candidateId,
  });
};