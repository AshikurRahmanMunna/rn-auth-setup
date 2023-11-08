import axiosInstance from "../api/axios";
const authenticate = async (mode, email, password) => {
  const res = await axiosInstance.post(`/accounts:${mode}`, {
    email,
    password,
    returnSecureToken: true,
  });
  return res.data.idToken;
};
export const createUser = async (email, password) => {
  return authenticate("signUp", email, password);
};

export const loginUser = async (email, password) => {
  return authenticate("signInWithPassword", email, password);
};
