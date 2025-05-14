import axiosClient from "./axiosClient";

const createOrder = async (orderData) => {
  try {
    const res = await axiosClient.post("/order/create", orderData);
    return res.data;
  } catch (error) {
    console.error("Create order failed", error);
    throw error;
  }
};

const getOrder = async (userId) => {
  try {
    const res = await axiosClient.get(`/order/${userId}`);
    return res.data;
  } catch (error) {
    console.error("Get order failed", error);
    throw error;
  }
};

const cancelOrder = async (orderId) => {
  try {
    const res = await axiosClient.put(`/order/cancel/${orderId}`);
    return res.data;
  } catch (error) {
    console.error("Cancel order error", error);
  }
};

export { createOrder, getOrder, cancelOrder };
