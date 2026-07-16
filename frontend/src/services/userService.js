import api from "./api";

export const getCurrentUser = () => {
  return api.get("/users/me");
};

export const updateCurrentUser = (data) => {
  return api.put("/users/me", data);
};

export const uploadProfilePhoto = (file) => {
  const formData = new FormData();

  formData.append("file", file);

  return api.post("/upload/profile", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const getUsers = () => {
  return api.get("/users");
};

export const getUserById = (id) => api.get(`/users/${id}`);

export const updateUser = (id, user) =>
  api.put(`/users/${id}`, user);

export const deleteUser = (id) =>
  api.delete(`/users/${id}`);