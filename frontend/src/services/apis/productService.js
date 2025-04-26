import axiosClient from "./axiosClient";

const getProducts = async (page = 1) => {
  const res = await axiosClient.get(`/products?page=${page}`);

  return res.data;
};

export { getProducts };
