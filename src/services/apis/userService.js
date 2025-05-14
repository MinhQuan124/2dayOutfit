import axiosClient from "./axiosClient";

const registerUser = async ({ name, email, password }) => {
  const res = await axiosClient.post("/auth/register", {
    name,
    email,
    password,
  });

  return res.data;
};

const verifyEmail = async (token) => {
  const res = await axiosClient.post("/auth/verify-email", { token });
  return res.data;
};

const loginUser = async ({ email, password }) => {
  const res = await axiosClient.post("/auth/login", { email, password });
  return res.data;
};

export { registerUser, verifyEmail, loginUser };
