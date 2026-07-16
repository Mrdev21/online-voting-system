import api from "./api";

export const getCandidates = async () => {
  const response = await api.get("/candidates");
  return response;
};

export const addCandidate = async (candidate) => {
  return api.post("/candidates", candidate);
};

export const updateCandidate = async (id, candidate) => {
  return api.put(`/candidates/${id}`, candidate);
};

export const deleteCandidate = async (id) => {
  return api.delete(`/candidates/${id}`);
};

export const uploadCandidatePhoto = async (file) => {
  const formData = new FormData();

  formData.append("file", file);

  return api.post("/upload/candidate", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};