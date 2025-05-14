import axiosClient from "./axiosClient";

// Get all products with filters
const getProducts = async (page = 1, category = "", filters = {}) => {
  const params = {
    page,
    limit: 12,
    ...filters,
  };

  if (category) {
    const res = await axiosClient.get(`/products/category/${category}`, {
      params,
    });
    return res.data;
  }

  const res = await axiosClient.get("/products", { params });
  return res.data;
};
//Get product detail by slug
const getProductDetail = async (slug) => {
  const res = await axiosClient.get(`/products/${slug}`);

  return res.data;
};

//Get related product by category
const getProductsByCategory = async (category, options = {}) => {
  try {
    const { page = 1, sort = "newest", order = "desc", ...filters } = options;

    const params = {
      page,
      sort,
      order,
      ...filters,
    };

    const res = await axiosClient.get(`/products/category/${category}`, {
      params,
    });

    if (!res.data) {
      throw new Error("No availabled products");
    }

    return res.data;
  } catch (error) {
    console.error(`Error fetching products for category ${category}:`, error);
    throw error;
  }
};

//Get filtered products
const getFilteredProducts = async ({ page = 1, ...filters }) => {
  const params = {
    page,
    limit: 12,
    ...filters,
  };

  const res = await axiosClient.get("/products/filtered", { params });
  return res.data;
};

// Search Products ( q = query)
const getSearchedProducts = async ({ q = "", page = 1, limit = 12 }) => {
  const params = {
    q,
    page,
    limit,
  };

  const res = await axiosClient.get("/products/search", { params });
  return {
    data: res.data.data,
    total: res.data.totalProducts,
    totalPages: res.data.totalPages,
  };
};

export {
  getProducts,
  getProductDetail,
  getProductsByCategory,
  getFilteredProducts,
  getSearchedProducts,
};
