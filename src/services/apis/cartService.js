import axiosClient from "./axiosClient";

const getCartByUserId = async (userId) => {
  const res = await axiosClient.get(`/cart/${userId}`);
  return res.data;
};

const addCartItem = async (
  userId,
  productId,
  price,
  size,
  color,
  image,
  quantity = 1
) => {
  const res = await axiosClient.post(`/cart/${userId}`, {
    productId,
    price,
    size,
    color,
    image,
    quantity,
  });
  return res.data;
};

const updateCartItemQuantity = async (
  userId,
  productId,
  price,
  size,
  color,
  image,
  updatedQuantity
) => {
  const res = await axiosClient.patch(`/cart/${userId}`, {
    productId,
    price,
    size,
    color,
    image,
    updatedQuantity,
  });

  return res.data;
};

const markOrderedItem = async (userId, cartData) => {
  const res = await axiosClient.patch(`/cart/mark-ordered/${userId}`, {
    cartData,
  });

  return res.data;
};

const deleteCartItem = async (userId, productId, color, size, image) => {
  const res = await axiosClient.post(`/cart/${userId}/item`, {
    productId,
    color,
    size,
    image,
  });

  return res.data;
};

export {
  getCartByUserId,
  addCartItem,
  updateCartItemQuantity,
  markOrderedItem,
  deleteCartItem,
};
