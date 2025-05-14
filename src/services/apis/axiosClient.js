import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://twodayoutfit-api.onrender.com/api/v1",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;
