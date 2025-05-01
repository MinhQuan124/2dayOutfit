import axiosClient from "./axiosClient";

//Get all products
const getProducts = async (page = 1, category = "") => {
  //Check if url has category
  if (category) {
    const res = await axiosClient.get(
      `/products/category/${category}?page=${page}`
    );

    return res.data;
  }

  const res = await axiosClient.get(`/products?page=${page}`);
  return res.data;
};

//Get product detail by slug
const getProductDetail = async (slug) => {
  const res = await axiosClient.get(`/products/${slug}`);

  return res.data;
};

//Get related product by category
const getProductsByCategory = async (category) => {
  const res = await axiosClient.get(`/products/category/${category}`);

  return res.data;
};

export { getProducts, getProductDetail, getProductsByCategory };
